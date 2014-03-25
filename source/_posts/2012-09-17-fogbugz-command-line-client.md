---
layout: post
title: "FogBugz Command Line Client"
description: ""
tags: [fogbugz, php, cli]
---

We use [FogBugz][fb] for *everything* at work and it's a great tool. However, they've
discontinued their command line application for it. While I may be a web tech
developer, I spend most of my time on the command line. Being able to __track time__,
__read case activity__ from the command line, and __leave notes__ on cases saves me a great deal
of time, and greatly reduces the cognitive load of task switching.

This is a command line tool for managing your FogBugz cases. You'll be able to 
__start and stop work__ on cases, __reassign__ cases, __close cases__ and
lots more. We've built it to our particular needs, so if it's missing anything,
please feel free to [fork it][fbcli] and send me a pull request.

## Time tracking and adding notes:

    > fb start 8439
      Starting work on case 8439
    > fb note "Beginning work, setting up on dev2 with fixture data set 3."
    
    --other work, commits, etc.
    
    > fb note "Identfied bug in validation class with utf characters."
    > fb stop
      Worked stopped on case 8439

## Viewing a case:
    > fb view 8745
    
    ————————————————————————————————————————————————————————————————————————————————
                            [8745] Update users status endpoint                       
    ————————————————————————————————————————————————————————————————————————————————
    Normal priority feature in Production
    
    Status: Open                                                   Area: Development
    Assigned: Craig Davis                                        Parent: 8436
    
    Full title:
    Update users status endpoint
    
    Latest summary:
    Picking up ticket and beginning work. This may be a problem in the validation
    routines with UTF characters
    
    Last updated:
    August 8, 2012 14:42
    
                 [https://example.fogbugz.com/default.asp?8745]   


Please see the [FogBugz Command Line Client project page][fbcli] for more
documentation and __installation information__.


<a href="https://github.com/there4/fogbugz-php-cli" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
</a>


[fb]: http://www.fogcreek.com/fogbugz/
[fbcli]: http://there4.github.com/fogbugz-php-cli/
