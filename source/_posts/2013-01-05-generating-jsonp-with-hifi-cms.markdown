---
layout: post
title: "Generating JSONP with HiFi CMS"
date: 2013-01-05 09:13
comments: true
tags: [javascript,backbonejs,hifi-cms]
---

I've been using [HiFi CMS][hifi] in a variety of projects lately. I'm weary of
maintaining CMS platforms and have generally moved to [GitHub Pages][gh] and
HiFi. HiFi has proven to be remarkably flexible with it's [Twig][twig] driven
layout system, and I'd like to show how to leverage it to deliver articles
in JSONP format.

We needed a system to allow our support team to maintain a collection of
embedded help snippets. This allows our application to deliver context sensitive
help that we can maintain outside of the product release cycle. In short,
it keeps the developers from having to maintain help content, while allowing
us to draw help content deeper into the application.

One benefit of HiFi is that it has url driven page templates that use a smart
mime-type system to deliver the correct headers. If you create a template with
a `.js`, `.json`, or `.jsonp` extension, the site will deliver it with the
correct headers. This then means that you can deliver two different versions of
content based on url. We can deliver the posts as plain html for consumption
on the main support site, while allowing us to syndicate the content via
jsonp in our application.

* `http://hifisite.example.com/help/topic/how-to-skate.html` will open the
  how to skate article and render it with the __html__ template.

* `http://hifisite.example.com/help/topic/how-to-skate.jsop` will open the
  how to skate article and render it with the __jsonp__ template.

__HiFi Developer Editor:__  
{% img /assets/images/posts/hifi-jsonp.png [231] [316] [HiFi Templates with JSONP output] %}

Here's the content of the index.jsonp template:  
{% gist 4462076 index.jsonp %}

I've used this with [BackboneJS][bb] to fetch help text from a
support article. We're extending this model with the url to the article
and a default title.  Note in the `index.jsonp` file that we've used `jsonCallback`
as the parameter for the callback function name. This then means that our
ajax request looks like this:

{% gist 4462137 jsonp.js %}

Now we've got a model that allows us to fetch blog posts from our hosted CMS,
while allowing us to continue to host the content on the primary site as well.

[hifi]: http://www.gethifi.com/
[gh]: http://pages.github.com/
[twig]: http://twig.sensiolabs.org/
[bb]: http://backbonejs.org/





