---
layout: post
title: "Twitter Feeds for JavaScript and PHP"
date: 2014-03-25 09:36
comments: false
tags: [php, javascript, twitter, pipes]
---

I've found that my GitHub activity page has been a great resource for discovering new projects. In particular, finding the right people to follow has been key. As an experiment, I've created two new twitter accounts to expose some of this.

I've created two new accounts and GitHub and two matching ones on Twitter, [one for JavaScript][js_stars] and [one for PHP][php_stars], and I've followed creative and interesting developers with both GitHub accounts. When someone that they are following on GitHub stars a project, the Twitter accounts tweet about it.

## Processing With Yahoo Pipes and Ifttt

These accounts each generate two RSS feeds. I use [Yahoo Pipes][pipes] to combine and filter these feeds. You can see how this currently works:

![Filtering and Combining](/images/pipes-workflow.png "Yahoo Pipes")

The output feed is then given to [Ifttt.com][ifttt] to post to Twitter.

## The Resuling Feed

<a class="twitter-timeline" href="https://twitter.com/javascriptstars" data-widget-id="448600771701907457">Tweets by @javascriptstars</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<a class="twitter-timeline" href="https://twitter.com/php_stars" data-widget-id="448600549517058049">Tweets by @php_stars</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

[js_stars]: https://twitter.com/javascriptstars
[php_stars]: https://twitter.com/php_stars
[pipes]: http://pipes.yahoo.com/pipes/
[ifttt]: https://ifttt.com