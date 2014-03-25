---
layout: post
title: "Get more exercise during the programming workday"
description: ""
tags: [hg, habits]
comments: false
---

After years of sitting and programming, I've started using a stand-up desk.
And now, I've added one more habit to stay a little more mobile during the
workday.

I've added a global [commit hook][hook] that suggests exercise every time I make
a mercurial commit. Here's the code:

{% gistnocache 2972827 exercise.sh %}

I added it to my global .hgrc file as a hook, and now I get a recommendation
for an exercise eat time I commit.

[hook]: http://hgbook.red-bean.com/read/handling-repository-events-with-hooks.html