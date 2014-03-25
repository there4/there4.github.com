---
layout: post
title: "Twitter Feeds for JavaScript and PHP"
date: 2014-03-25 09:36
comments: false
tags: [php, javascript, twitter, pipes]
---

I've found that my GitHub activity page has been a great resource for discovering new projects. In particular, finding the right people to follow has been key. As an experiment, I've created two new twitter accounts to expose some of this.

I've created two new accounts and GitHub and two matching ones on Twitter, [one for JavaScript][js_stars] and [one for PHP][php_stars], and I've followed creative and interesting developers with both GitHub accounts. When someone that they are following on GitHub stars a project, the Twitter accounts tweet about it.

## Yahoo Pipes and Ifttt

These accounts each generate two RSS feeds. I use [Yahoo Pipes][pipes] to combine and filter these feeds. You can see how this currently works:

![Filtering and Combining](/images/pipes-workflow.png "Yahoo Pipes")

The output feed is then given to [Ifttt.com][ifttt] to post to Twitter.

## Follow Them!

* [JavaScript Stars][js_stars]
* [PHP Stars][php_stars]


[js_stars]: https://twitter.com/javascriptstars
[php_stars]: https://twitter.com/php_stars
[pipes]: http://pipes.yahoo.com/pipes/
[ifttt]: https://ifttt.com