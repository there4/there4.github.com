---
layout: post
title: "jQuery Animated Border: jquery.animatedborders.js"
date: 2013-01-03 18:11
comments: false
categories: jQuery
tags: [jQuery,javascript,plugins,ui]
alias: projects/animatedborder/
---

<script src="/assets/javascript/jquery.animatedborder.js" type="text/javascript"></script>
<script type="text/javascript">

$(function() {
  $('div.alpha').animatedBorder({size : 1, color : 'red'});

  $('div.bravo').click(function(){
    $(this).animatedBorder();
    return false;
  });

  $('div.charlie').animatedBorder({size : 6, color : '#FFCC66'});
  
  $('div.delta').animatedBorder({size: 2, color: '#4E7CB1', hover: true});
});

</script>

Animated borders for any block level element. This plugin creates an animated
border with configurable thickness and color.


## Download

* <a href="https://github.com/there4/jquery-animatedborder/zipball/master">jquery.animatedborder.zip</a> <small>Master</small>
* <a href="stripe.gif">stripe.gif</a> <small>transparent white, 4x4 check</small>

## Examples

<div class="examples clearfix" style="margin: 0 1em 1em;">
  <div class="alpha">Single Pixel</div>
  <div class="bravo"><a href="#">Toggle Highlight</a></div>
  <div class="charlie">Fat Border</div>
  <div class="delta">Hover Triggered</div>
</div>

## Instructions

The animated border method toggles animated borders on an element. To apply
animated borders to an elements:

    $('div.alpha').animatedBorder({size : 1, color : 'red'});

Apply it again to remove the borders:

    $('div.alpha').animatedBorder();

The plugin accepts a configuration object. You can specify a background color,
and the size of the border.

    options = {
      size: 2,
      color: '#6699CC'
    }

## Known Issues

* __Background patterns__ are not handled with the default stripe.gif file.
  The plugin uses the the background color of the divs to make the border color.
  This means that the non-transparent area of the checkerboard has to match the background color of the
  page for the illusion to work. If you had a page with surrounding elements under the border, or you had
  a non white background, you should create a new animated gif with blocks that are transparent and the
  desired border color.



<a href="https://github.com/there4/jquery-animatedborder" id="github">
  <img alt="Fork me on GitHub" src="http://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" />
</a>



[gh]: https://github.com/there4/jquery-animatedborder
