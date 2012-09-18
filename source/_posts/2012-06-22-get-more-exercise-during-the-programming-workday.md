---
layout: post
title: "Get more exercise during the programming workday"
description: ""
category: 
tags: []
---
After years of sitting and programming, I've started using a stand-up desk.
And now, I've added one more habit to try and stay a little more mobile
during the workday.


I've added a global commit hook that suggests exercise every time I make
a mercurial commit. Here's the code:

{% gistnocache 2972827 exercise.sh %}

I added it to me global .hgrc file as a hook, and now I get a recommendation for an exercise eat time I commit.
