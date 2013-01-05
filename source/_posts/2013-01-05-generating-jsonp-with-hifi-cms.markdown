---
layout: post
title: "Generating JSONP with HiFi CMS"
date: 2013-01-05 09:13
comments: true
categories: ["javascript", "backbonejs", "hifi-cms"]
---

I've been using [HiFi CMS][hifi] in a variety of projects lately. I'm weary of
maintaining CMS platforms and have generally moved to [GitHub Pages][gh] and
HiFi. HiFi has proven to be remarkably flexible with it's [Twig][twig] driven
layout system. 

One benefit of HiFi is that it has url driven page templates that use a smart
mime-type system to deliver the correct headers. This means that if you create
a template with a `.js`, `.json` or `.jsonp` extension, the site will deliver
it with the correct headers. This then means that you can deliver two different
versions of content based on url. 

* `http://hifisite.example.com/help/topic/how-to-skate.html` will open the
  how to skate article and render it with the __html__ template.

* `http://hifisite.example.com/help/topic/how-to-skate.jsop` will open the
  how to skate article and render it with the __jsonp__ template.

{% img /assets/images/posts/hifi-jsonp.png [184] [196] [HiFi Templates with JSONP output] %}

Here's the content of the index.jsonp template:

{% gist 4462076 index.jsonp %}

I've used this with [BackboneJS][bb] to fetch and inline help text from a
support article. Note in the `index.jsonp` file that we've used `jsonCallback`
as the parameter for the callback function name. This then means that our
ajax request looks like this:

{% gist 4462137 jsonp.js %}

Now we've got a model that allows us to fetch blog posts from our hosted CMS,
while allowing us to continue to host the content on the primary site as well.

[hifi]: http://www.gethifi.com/
[gh]: http://pages.github.com/
[twig]: http://twig.sensiolabs.org/
[bb]: http://backbonejs.org/





