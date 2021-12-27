/*
 * ScrollSpy JavaScript Library v1.0.0
 * https://scrollspy.github.io
 *
 * Note : this JS file is converted to ES5 using babel, for any contributions use ScrollSpy.js in src folder
 */
"use strict";function ScrollSpy(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contexts_class:"scrollspy",delay:200,callbackOnChange:function(){},callbackOnDestroy:function(){}},n=void 0!==e.callbackOnChange?e.callbackOnChange:function(){},o=void 0!==e.callbackOnDestroy?e.callbackOnDestroy:function(){},i=e.delay,l=window.innerHeight,c=[],r=[],a=-1,f=-1,s=0,u=!0,d=!0,p=!1,v=!1,h={destroy:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;H(t())},Indicator:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{element:null,indicator_container_class:"",indicator_item_class:"",clickable:!0,forceActive:!1};if(r=t,p=t.forceActive,null!==t.element||void 0!==t.element){t.element.innerHTML="";var e=document.createElement("ul");e.classList.add("scrollspy-indicator-container"),void 0!==t.indicator_container_class&&e.classList.add(t.indicator_container_class),t.element.appendChild(e),Array.prototype.forEach.call(c,function(n){var o=document.createElement("li");void 0!==t.indicator_item_class&&o.classList.add(t.indicator_item_class),o.innerHTML=n[0].getAttribute("spy-title"),e.appendChild(o),!1!==t.clickable&&(o.classList.add("spy-clickable"),o.onclick=function(t){Array.prototype.forEach.call(c,function(e){e[1]===t.target&&E(e[0])})}),n.push(o)}),v=!0}}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T();return t.offsetTop>e[0]&&t.offsetTop<e[1]||t.offsetTop+t.offsetHeight>e[0]&&t.offsetTop+t.offsetHeight<e[1]||t.offsetTop<e[0]&&t.offsetTop+t.offsetHeight>e[1]},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T();if(y(t,e)){var n=t.offsetTop,o=t.offsetHeight,i=n+o,c=e[0],r=e[1],a=0;return n>=c&&i<=r&&(a=o),n<c&&i<=r&&(a=i-c),n>=c&&i>r&&(a=r-n),n<c&&i>r&&(a=r-c),Math.round(a/l*100)}return 0},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T();if(y(t,e)){var n=t.offsetTop,o=n+t.offsetHeight,i=e[0]+l/2,c=0;return n<i&&o<i&&(c=i-o),n>=i&&o>i&&(c=o-i),n<=i&&o>=i&&(c=0),c}return 0},T=function(){return void 0!==window.pageYOffset?[pageYOffset,pageYOffset+l]:[t=document.documentElement.scrollTop||document.body.scrollTop||0,t+l];var t},E=function(t){var e;e=t.offsetHeight>l?t.offsetTop-24:t.offsetTop-(l-t.offsetHeight)/2,window.scrollTo({top:e,behavior:"smooth"})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=i,l=(new Date).getTime(),r=function(){var t=T(),e=[],o=null,i=null;Array.prototype.forEach.call(c,function(n){var o=[n[0].offsetTop,g(n[0],t)];0!==o[1]&&e.push(o)}),0===e.length?(e[0]=[0,0],e[1]=[0,0],u=!0,v&&!p&&(Array.prototype.forEach.call(c,function(t){t[1].classList.remove("spy-active")}),u=!1,i=-1)):u=!1,1===e.length&&(e[1]=[0,0]);var l=e.reduce(function(t,e){return Math.max(t[1],e[1])});if(isNaN(l)){var r=[];Array.prototype.forEach.call(e,function(e){Array.prototype.forEach.call(c,function(n){if(n[0].offsetTop===e[0]){var o=[n[0].offsetTop,m(n[0],t)];r.includes(o)||r.push(o)}})}),r.reduce(function(t,e){void 0!==t&&void 0!==e&&(l=Math.min(t[1],e[1]))}),e=r}l!==f&&(f=l,Array.prototype.forEach.call(e,function(t){d&&!u&&(t[1]=l,d=!1,a=0,f=0),t[1]!==l||t[0]===a||u||(a=t[0],Array.prototype.forEach.call(c,function(e){e[0].offsetTop===t[0]&&(o=e[0],i=e[1])}),v&&-1!==i&&(Array.prototype.forEach.call(c,function(t){t[1].classList.remove("spy-active")}),i.classList.add("spy-active")),null!=o&&n(o))}))};t||e?r():(l-s>3*o&&(r(),s=l),t=setTimeout(function(){t=null,s=(new Date).getTime(),r()},o))},A=function(){l!==window.innerHeight&&(l=window.innerHeight,_(),h.Indicator(r))},_=function(){var t,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n();c=[],void 0!==i&&(n=i),t=document.getElementsByClassName(e.contexts_class),o=[],Array.prototype.forEach.call(t,function(t){o[t.offsetTop]=t}),t=null,o=o.filter(function(t){return void 0!==t}),Array.prototype.forEach.call(o,function(t){var e=[t];c.includes(e)||c.push(e)}),o=null,document.addEventListener("scroll",w),window.addEventListener("resize",A)},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};document.removeEventListener("scroll",w),v&&(r.element.innerHTML=""),i=null,l=null,c=null,a=null,f=null,u=null,d=null,v=null,r=null,t()};return _(n),w(),h}