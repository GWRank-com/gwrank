/*!-----------------------------------------------------------------
    Name: MonsterPlay - eSports and Gaming HTML Template
    Version: 1.0.3
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/user/_nk/portfolio
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
    !function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=28)}({28:function(e,t,n){e.exports=n(29)},29:function(e,t){var r=window.jQuery,o=r(document),n=window.performance.timing,n=-(n.loadEventEnd-n.navigationStart),i=Math.max(500,Math.min(1e3,100*parseInt(n/1e3%60,10)));o.on("DOMContentLoaded",function(){var e,t=r(".mpl-preloader"),n=t.find(".mpl-preloader-progress");t.length&&n.length?(n.children("div").css({"transition-duration":"".concat(i,"ms"),width:"100%"}),t.length&&(e=setTimeout(function(){clearTimeout(e),t.addClass("mpl-preloader-hide"),o.trigger("mpl.preloader.hide")},i))):o.trigger("mpl.preloader.hide")})}});
