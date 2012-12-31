---
layout: post
title: "Handlebars Helpers for Debugging and Pluralization"
description: ""
category: 
tags: [js, handlebars]
published: true
---

I often find it helpful to dump a handlebars scope out to the console. This
snippet has been quite useful.

Be careful that this doesn't make it to production - for instance it would be
good to have a linter check for these {{debug}} statements in your html templates.

{% gist 2903216 handlebars-helpers.js %}
