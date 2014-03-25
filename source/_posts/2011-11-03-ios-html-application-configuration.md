---
layout: post
title: "iOS HTML Application Configuration"
description: ""
tags: [ux, ios]
comments: false
---

The following settings will make a website added to the iOS homepage look and
act nearly identical to a proper application. This will set the viewport to
disallow scaling, so we must be careful to implement an adaptive viewport
strategy ourselves.

In addition, this sets paths for all of the Apple icons used for startup
and application icons.

{% gist 1413696 mobile-meta-links.html %}
