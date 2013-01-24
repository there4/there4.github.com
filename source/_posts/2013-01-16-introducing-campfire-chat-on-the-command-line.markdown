---
layout: post
title: "Introducing TermCamp, a Campfire command line client"
date: 2013-01-16 20:47
comments: true
categories: ["cli", "node"]
---

[TermCamp][tc] is a new command line client for [37 Signals][37] [Campfire Chat][fire].
It's written for [node][nd], and looks like this:

{% img /assets/images/posts/termcamp-sample.png [574] [377] [Sample TermCamp] %}

It's got a nice collection of features that make it a remarkably complete client:

* Bell alerts for name mentions
* Formatting for all Campfire message types (Even tweets!)
* Name colorization (optional)
* Enter and exit notifications

I've used it as my primary client by keeping it in a [tmux][tmux] pane, and it's
performed well. Unfortunately, it's missing a few things. The urls for pasted
images are still missing, and you can't paste text. It's a little better for
listening to a room than for pasting and long conversations. But, we use
[Hubot][hubot] and [Kiln][kiln] bots for relaying messages, and this terminal
client is perfect for that use case.

You can [clone or fork the project][tc] on GitHub.

<a href="https://github.com/bengl/node-termcamp" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
</a>


[tc]: https://github.com/bengl/node-termcamp
[nd]: http://nodejs.org/
[fire]: http://campfirenow.com/
[37]: http://37signals.com/
[tmux]: http://tmux.sourceforge.net/
[hubot]: http://hubot.github.com/
[kiln]: http://www.fogcreek.com/kiln/
