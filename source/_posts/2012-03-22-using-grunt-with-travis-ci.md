---
layout: post
title: "Using Grunt with Travis CI"
description: ""
category: 
tags: [js, travisci, grunt]
---
I've just finished adding the Grunt javascript build system to the
[Uni-Form CSS](http://sprawsm.com/uni-form/) project. This finally gives us a
nice build system to release minified javascript, and an easy way to run the
unit tests and linters. This also gave me an easy way to get started with
[TravisCI](travis-ci.org). This runs the tests as a github hook, and allows us
to show the world our current build status . 

However, in order to do so, I had to add a couple of extra snippets beyond the basic grunt implementation:

1. Add a new .travis.yml file to the repo that can setup PhantomJS and set the project language to javascript.

    `language: node_js node_js: - 0.6 before_script: - "export DISPLAY=:99.0" - "sh -e /etc/init.d/xvfb start"`

1. Update the package.json with dependencies and scripts by making sure these sections are in the file:

    `"dependencies": { "grunt": "~0.2.15" }, "scripts": { "test": "grunt qunit" }`

That's it - that's all it took to get a Grunt enabled repo to build with TravisCI.