/*! Animated Border - v0.6.0 - 6/30/2012
* https://github.com/there4/jquery-animatedborder
* Copyright (c) 2012 Craig Davis; Licensed MIT */
(function(a){a.fn.extend({repositionBorders:function(){a("body div.animatedBorder").each(function(){var b=a(".animatedBorderSprite-top",a(this)).css("background-color"),c=a(".animatedBorderSprite-top",a(this)).height();a(this).animatedBorder().animatedBorder({size:c,color:b})})},animatedBorder:function(b){var c={size:2,color:"#6699CC",hover:!1},d=.3,e;return b=a.extend(c,b),this.each(function(){switch(b){case"hide":a(this).children(".animatedBorderSprite").fadeOut("slow");break;case"show":a(this).children(".animatedBorderSprite").fadeIn("fast");break;case"destroy":a(this).children(".animatedBorderSprite").remove(),a(this).unbind("mouseenter mouseleave");break;default:if(a(this).hasClass("animatedBorder")){a(".animatedBorderSprite",a(this)).remove(),a(this).removeClass("animatedBorder");return}a(this).addClass("animatedBorder"),e={height:a(this).innerHeight(),width:a(this).innerWidth()},a(this).append(a("<div />").addClass("animatedBorderSprite animatedBorderSprite-top").css({top:-b.size,left:-b.size,width:e.width+2*b.size,height:b.size,"background-color":b.color})),a(this).append(a("<div />").addClass("animatedBorderSprite animatedBorderSprite-bottom").css({bottom:-b.size,left:-b.size,width:e.width+2*b.size,height:b.size,"background-color":b.color})),a(this).append(a("<div />").addClass("animatedBorderSprite").css({top:0,left:-b.size,width:b.size,height:e.height,"background-color":b.color})),a(this).append(a("<div />").addClass("animatedBorderSprite").css({top:0,right:-b.size,width:b.size,height:e.height,"background-color":b.color})),b.hover&&(a(this).hover(function(){a(this).children(".animatedBorderSprite").fadeIn("fast")},function(){a(this).children(".animatedBorderSprite").fadeOut("slow")}),a(this).children(".animatedBorderSprite").hide())}})}})})(jQuery);