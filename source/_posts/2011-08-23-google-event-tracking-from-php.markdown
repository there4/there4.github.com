---
layout: post
title: "Google Event Tracking from PHP"
date: 2011-08-23 07:43
comments: false
category: php
tags: [php]
alias: /projects/analytics/
---

Please see the GitHub project page for [PHP Analytics Event](https://github.com/there4/php-analytics-event).

    <?php
    
    require_once "class.Analytics.php";
    
    // Send latest command line client zip file.
    header(…);
    readfile(…);
    
    // Record the download event in Analytics
    $events = new Analytics("UAxxxxxxx", "example.com");
    $events->trackEvent("resources", "download", "cli-latest");
    
    ?>

<a href="https://github.com/there4/php-analytics-event" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
</a>
