---
layout: post
title: "QUnit rules for JSHint"
description: ""
tags: [grunt, js, jslint]
comments: false
---

While updating the [Uni-Form CSS][uniform] project to use [Grunt][grunt],
I changed some of the settings for the linter, and for the first time, added
lint rules for the unit test files. Grunt uses JSHint, and by default uses rules
that are a bit more strict than I had used previously. In addition, the global variables from
the [QUnit][qunit] tests were polluting the global namespace, and so I had to tell lint
to ignore those.

Here's the final lint rules that I added to the test files, I hope they may be
useful to someone else:

{% gist 2154156 jslint-config-for-qunit.js %}

[uniform]: http://sprawsm.com/uni-form/
[grunt]: https://github.com/cowboy/grunt
[qunit]: http://qunitjs.com/