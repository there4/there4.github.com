---
layout: post
title: "Unit Testing Slim PHP Framework applications with PHPUnit"
date: 2013-10-13 11:45
comments: true
tags: [php, slim, phpunit]
---

[Slim][slim] is a great PHP framework with a small footprint and everything you need to build fast applications. I've found it particularly well suited to delivering data to [BackboneJS][bb] applications.

However, I haven't found a great deal of information about integration and unit testing with Slim, and have developed an approach that allows complete end-to-end testing of an application. You can use this testing a REST framework, or a complete website. In particular, I think it's a great way to handle regression testing. I'm presenting a [sample application][app] that I hope will help others on their path to using this great framework.

## Example

Here's [a test][version_test] for a very simple endpoint that returns the version from the application config. We're asserting that Slim responded with a `200` and that the version matches what we expect.

```php
class VersionTest extends Slim_Framework_TestCase {
    public function testVersion() {
        $this->get('/version');
        $this->assertEquals(200, $this->response->status());
        $this->assertEquals($this->app->config('version'), $this->response->body());
    }
}
```

## Concepts

The core idea of this approach is that we isolate our application routes into their own file. This allows us to include this route file into both a production context via an index.php file, and also include it within a unit testing bootstrap harness in our testing context. The unit testing context with use the internal `Slim\Environment::mock()` method to setup an environment for our application.

Here's what the app looks like:

* app/
  * app.php
* public/
  * index.php
  * .htaccess
* tests/
  * bootstrap.php
  * integration/
    * VersionTest.php
    * UsersTest.php
* phpunit.xml

The `public/index.php` file serves as the application entry point. This file initializes a SlimPHP `$app` with production configuration, includes the routes file from `app/app.php` and then runs the app with `$app->run();`. This allows us to keep our application separate from the index, and gives us an opportunity to include our `app/app.php` file in a different context.

When phpunit runs, it looks for the phpunit.xml file in our root. This file specifies a testing bootstrap file. PHPUnit includes `testing/bootstrap.php`. This file creates an `$app`, just like in `index/index.php`, but it uses testing configuration. The bootstrap keeps a reference to `$app` for the testing framework, and then provides several helper methods for `GET`, `POST`, `PUT`, `PATCH`, `HEAD`, and `DELETE`.

With these methods, you can run end to end tests on SlimPHP routes without a webserver. The tests run entirely within a mock environment, and will be fast and efficient. 

## The Bootstrap

You can see the [full bootstrap][bootstrap] at gitub. Here's some extra comments about what's going on:

Before each unit test method is run, we make a fresh environment for Slim
    public function setup() {

Initialize our app, this should mimic your production setup. During an integration test, the system under test should be as nearly identical to production as possible. Here's the creation of our application:

    $app = new \Slim\Slim(array(
      'version' => '0.0.0',
      'debug'   => false,
      'mode'    => 'testing'
    ));

Include our application routes file.
    require __DIR__ . '/../app/app.php';

This one may not be the exact spirit of PHPUnit, but I find that it's a convienent way of accessing our application while it's under test. We add a reference to the application onto our phpunit instance.
    $this->app = $app;

End our test method setup
    }

Now, we add a way to PHPUnit to trigger our routes by adding a new function called `request()`. This is a generic method for all HTTP methods, and we'll use to make shorthand methods for `get()`, `post()`, etc.
    public function request($method, $path, $options = array())
    {

Some slim actions are going to print to STDOUT. We'll use output buffering to trap this so that we can inspect output and run the application quietly.
    ob_start();

This is the heart of this approach, creating a mock environment for Slim. This lets us run the unit tests without a webserver, without curl, without anything other than PHPUnit. This sets up the environment as if the application was running under a webserver:
    \Slim\Environment::mock(array_merge(array(
        'REQUEST_METHOD' => $method,
        'PATH_INFO'      => $path,
        'SERVER_NAME'    => 'local.dev',
    ), $options));

These are strictly for shorthand access in test methods. It allows us to do things like `$this->assertEquals(200, $this->response->status());`.
    $this->request  = $this->app->request();
    $this->response = $this->app->response();

Execute our slim application within our testing environment. This fires the routes that were setup in the environment mocking.
    $this->app->run();

Return the application output. Also available in `response->body()`
    return ob_get_clean();

End the request mocking.
    }

This `request()` allows us to write shorthand methods and easily run Slim routes.

## Unit Testing vs. Integration Testing

Unit tests should test an individual part of code. The system under test should be as small as possible. You would unit test an individual method. Integration testing exercises an entire system. Most of this example is about integration testing. We are running tests that work Slim from initial instantiation to the final delivery of data. With integration tests, we're treating the entire application as a unit, setting up a particular initial environment and then executing the `run()` command and finally inspecting the results to ensure that they match our expectations.

## Mocking with SlimPHP
See the [ZenTest][zen_test] for an example of mocking with SlimPHP dependency injection. In this test we mock a Curl wrapper class from [Shuber][shuber]. This allows us to substitute responses and exercise the parts of our application that we feel need testing. It also allows us to run these unit tests on systems that don't have the curl extension installed. We're totally isolated from that dependency while this running test.

The [FileStoreTest][file_test] uses a mock for the authentication class. Notice that the file store route doesn't use that class directly, but instead it is used by the application authenticator method. We're using the app dependency injection container to swap out the real object for a mock version. This approach allows us to control authentication results from within our test harness.

You can read more about dependency injection in the [SlimDocs on DI][di], and more about mock objects in the [PHPUnit docs][php_mock].


<a href="https://github.com/there4/slim-unit-testing-example" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
</a>

[bootstrap]: https://github.com/there4/slim-unit-testing-example/blob/master/tests/bootstrap.php
[app]: https://github.com/there4/slim-unit-testing-example
[slim]: http://www.slimframework.com/
[issues]: https://github.com/there4/slim-unit-testing-example/issues
[phpunit]: http://phpunit.de/manual/current/en/index.html
[yml]: https://github.com/there4/slim-unit-testing-example/blob/master/.travis.yml
[tci]: http://travis-ci.org
[php_mock]: http://phpunit.de/manual/3.0/en/mock-objects.html
[shuber]: https://github.com/shuber/curl
[si]: http://docs.slimframework.com/#Response
[di]: http://docs.slimframework.com/#Dependency-Injection
[file_test]: https://github.com/there4/slim-unit-testing-example/blob/master/tests/integration/FileStoreTest.php
[zen_test]: https://github.com/there4/slim-unit-testing-example/blob/master/tests/integration/ZenTest.php
[version_test]: https://github.com/there4/slim-unit-testing-example/blob/master/tests/integration/VersionTest.php
[lh]: http://localhost:8080
[bb]: http://backbonejs.org
[njh]: https://github.com/njh
[njh_test]: https://github.com/njh/njh.me/blob/master/test/IntegrationTest.php
