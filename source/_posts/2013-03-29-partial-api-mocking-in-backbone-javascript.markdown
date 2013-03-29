---
layout: post
title: "Partial API Mocking in Backbone JavaScript"
date: 2013-03-29 07:34
comments: true
category: backbone
tags: [backbone, js, ajax]
---

This project allows a [BackboneJS][bb] application to use fixture data in the UI
for particular endpoints. This allows an app to use __an existing API__ for
authentication and existing endpoints, __while mocking new endpoints for
development__. While I use this with Backbone, it's not tied to any library. This
will work with any framework, including [Ember][ember] and [Angular][angular].

In the course of application development, I've often found the API and the UI
in a sort of race between developing new api API endpoints and consuming them in
the UI. Unfortunately, I've found that I often ask for one more property on an
object, or ask to change to a return format later in the game. With this new
workflow, the api and UI can develop in a much more concurrent manner. Here's
my new approach:

1. Add a new mock fixture for an endpoint with a rough approximation of the JSON
   return format. The API team helps design this data spec and can begin work on
   their implementation.
1. Write the backbone models, collections, and views.
1. Write some basic unit tests.
1. Add some templates and start using the data in the UI.
1. Iterate some changes in the data until the layout is complete.
1. Hand this JSON fixture to the API team for implementation.
1. This json spec then __becomes the contract between the API and the UI__.
1. Both teams complete their unit testing based on this format.
1. The live release only involves removing the mock data endpoint.

The best part about this approach is that because we're intercepting the
[XHR request][xhr] with [Sinon][sinon], the Backbone models _never know_ that
they didn't communicate with the api. Development with this allows you ignore
the fact that you're using mock data.

[Check out the repo][gh] for examples and implementation.


<a href="https://github.com/there4/partial-api-mock" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png">
</a>

[bb]: http://backbonejs.org/
[ember]: http://emberjs.com/
[angular]: http://angularjs.org/
[gh]: https://github.com/there4/partial-api-mock
[xhr]: http://api.jquery.com/jQuery.ajax/
[sinon]: http://sinonjs.org/
