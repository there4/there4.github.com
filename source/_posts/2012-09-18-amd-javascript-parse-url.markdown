---
layout: post
title: "AMD Javascript Parse URL"
date: 2012-09-18 13:05
comments: true
categories: [backbone, js]
---

I recently had need to parse a url provided by an api. I looked at a resource such as
[uri.js](http://medialize.github.com/URI.js/) but this seemed quite heavy for my
[Backbone][bb] application.

Here's a slightly altered version of the much copied DOM approach to parsing a url.
This version has been edited for AMD [Require.js][require], and caches the anchor
element.

{% gist 3706510 parse_url.js %}

[bb]: http://backbonejs.org/
[require]: http://requirejs.org/