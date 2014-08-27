---
layout: post
title: "What's your front-end workflow"
date: 2014-08-27 07:57
comments: false
categories: tavern
---

My response from [Tavern][tavern]:

I develop in the [Sublime text editor][sublime] and with [Grunt][grunt] and [Pake][pake]. Grunt is a JS automation tool that has plugins for nearly every task that you might need. It's capable of building assets, running a development server, or doing deployments. It really is brilliant. Pake is a php build tool that has robust plugins for ssh and building an asset pipeline. 

Source control is an essential part of my workflow. In particular, I use a collection of commit hooks to run automated code analysis when I commit changes. For instance, I run a JavaScript linter that checks for code errors and code style problems. For instance trailing commas in some instances can cause problems for IE. With a commit hook linter, you'll never be able to commit code with that particular problem. 

During development, I run two processes with Grunt. I run a local development server with [Grunt Connect][grunt-connect], and a watch command with [Grunt Watch][grunt-watch]. The `grunt connect` server allows me to skip dealing with setting up a local webserver or dealing with apache. It also allows me to quickly spin up a copy of the project on a different computer. It's self contained. With `grunt watch`, I can configure a set of actions to take place whenever files change. So, if I've chosen to use [LESS][less] on a project, anytime that I save changes to a `.less` file, grunt will rebuild my css files for me.

I automate as much as possible. When I do discover a problem, I let it go. When I see that same problem for about the third time, I add automation to prevent it from happening again. This can lead to a bit of accumulation of tools, but with Grunt in particular, it's easy to manage and compartmentalize them. 

I'd like to also point out a couple of great testing tools - [Cross Browser Testing][cbt] and the [iOS simulator in XCode][ios]. Cross Browser makes it easy to quickly take screenshots across a wide variety of browsers and operating systems. If you do discover a problem you can use remote desktop to connect to that machine and use a real browser to continue to troubleshoot. The iOS simulator from XCode allows you to run a local simulator for iPad and iPhone. It can greatly speed up troubleshooting small screen problems with design.

[tavern]: http://zurb.com/tavern/questions/what-s-your-front-end-workflow
[cbt]: http://crossbrowsertesting.com/
[ios]: https://developer.apple.com/xcode/downloads/
[sublime]: http://www.sublimetext.com/
[less]: http://lesscss.org/
[grunt]: http://gruntjs.com/
[grunt-connect]: https://github.com/gruntjs/grunt-contrib-connect
[grunt-watch]: https://github.com/gruntjs/grunt-contrib-watch
[pake]: https://github.com/indeyets/pake
