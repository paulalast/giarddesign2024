(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))f(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function y(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(u){if(u.ep)return;u.ep=!0;const c=y(u);fetch(u.href,c)}})();var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var V={exports:{}};(function(m,p){(function(y,f){m.exports=f()})(Q,function(){function y(e,t){var n=void 0;return function(){n&&clearTimeout(n),n=setTimeout(e,t)}}function f(e,t){for(var n=e.length,r=n,s=[];n--;)s.push(t(e[r-n-1]));return s}function u(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(window.Promise)return D(e,t,n);e.recalculate(!0,!0)}function c(e){for(var t=e.options,n=e.responsiveOptions,r=e.keys,s=e.docWidth,o=void 0,i=0;i<r.length;i++){var a=parseInt(r[i],10);s>=a&&(o=t.breakAt[a],M(o,n))}return n}function g(e){for(var t=e.options,n=e.responsiveOptions,r=e.keys,s=e.docWidth,o=void 0,i=r.length-1;i>=0;i--){var a=parseInt(r[i],10);s<=a&&(o=t.breakAt[a],M(o,n))}return n}function T(e){var t=e.useContainerForBreakpoints?e.container.clientWidth:window.innerWidth,n={columns:e.columns};h(e.margin)?n.margin={x:e.margin.x,y:e.margin.y}:n.margin={x:e.margin,y:e.margin};var r=Object.keys(e.breakAt);return e.mobileFirst?c({options:e,responsiveOptions:n,keys:r,docWidth:t}):g({options:e,responsiveOptions:n,keys:r,docWidth:t})}function I(e){return T(e).columns}function A(e){return T(e).margin}function N(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=I(e),r=A(e).x,s=100/n;if(!t)return s;if(n===1)return"100%";var o="px";if(typeof r=="string"){var i=parseFloat(r);o=r.replace(i,""),r=i}return r=(n-1)*r/n,o==="%"?s-r+"%":"calc("+s+"% - "+r+o+")"}function R(e,t){var n=I(e.options),r=0,s=void 0,o=void 0;if(++t===1)return 0;o=A(e.options).x;var i="px";if(typeof o=="string"){var a=parseFloat(o,10);i=o.replace(a,""),o=a}return s=(o-(n-1)*o/n)*(t-1),r+=N(e.options,!1)*(t-1),i==="%"?r+s+"%":"calc("+r+"% + "+s+i+")"}function O(e){var t=0,n=e.container,r=e.rows;v(r,function(s){t=s>t?s:t}),n.style.height=t+"px"}function S(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],s=I(e.options),o=A(e.options).y;C(e,s,n),v(t,function(i){var a=0,E=parseInt(i.offsetHeight,10);isNaN(E)||(e.rows.forEach(function(K,J){K<e.rows[a]&&(a=J)}),i.style.position="absolute",i.style.top=e.rows[a]+"px",i.style.left=""+e.cols[a],e.rows[a]+=isNaN(E)?0:E+o,r&&(i.dataset.macyComplete=1))}),r&&(e.tmpRows=null),O(e)}function q(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],r=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],s=I(e.options),o=A(e.options).y;C(e,s,n),v(t,function(i){e.lastcol===s&&(e.lastcol=0);var a=Z(i,"height");a=parseInt(i.offsetHeight,10),isNaN(a)||(i.style.position="absolute",i.style.top=e.rows[e.lastcol]+"px",i.style.left=""+e.cols[e.lastcol],e.rows[e.lastcol]+=isNaN(a)?0:a+o,e.lastcol+=1,r&&(i.dataset.macyComplete=1))}),r&&(e.tmpRows=null),O(e)}var d=function e(t,n){if(!(this instanceof e))return new e(t,n);if(t&&t.nodeName)return t;if(t=t.replace(/^\s*/,"").replace(/\s*$/,""),n)return this.byCss(t,n);for(var r in this.selectors)if(n=r.split("/"),new RegExp(n[1],n[2]).test(t))return this.selectors[r](t);return this.byCss(t)};d.prototype.byCss=function(e,t){return(t||document).querySelectorAll(e)},d.prototype.selectors={},d.prototype.selectors[/^\.[\w\-]+$/]=function(e){return document.getElementsByClassName(e.substring(1))},d.prototype.selectors[/^\w+$/]=function(e){return document.getElementsByTagName(e)},d.prototype.selectors[/^\#[\w\-]+$/]=function(e){return document.getElementById(e.substring(1))};var v=function(e,t){for(var n=e.length,r=n;n--;)t(e[r-n-1])},L=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.running=!1,this.events=[],this.add(e)};L.prototype.run=function(){if(!this.running&&this.events.length>0){var e=this.events.shift();this.running=!0,e(),this.running=!1,this.run()}},L.prototype.add=function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return!!t&&(Array.isArray(t)?v(t,function(n){return e.add(n)}):(this.events.push(t),void this.run()))},L.prototype.clear=function(){this.events=[]};var P=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.instance=e,this.data=t,this},b=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];this.events={},this.instance=e};b.prototype.on=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return!(!e||!t)&&(Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t))},b.prototype.emit=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e||!Array.isArray(this.events[e]))return!1;var n=new P(this.instance,t);v(this.events[e],function(r){return r(n)})};var _=function(e){return!("naturalHeight"in e&&e.naturalHeight+e.naturalWidth===0)||e.width+e.height!==0},z=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return new Promise(function(r,s){if(t.complete)return _(t)?r(t):s(t);t.addEventListener("load",function(){return _(t)?r(t):s(t)}),t.addEventListener("error",function(){return s(t)})}).then(function(r){n&&e.emit(e.constants.EVENT_IMAGE_LOAD,{img:r})}).catch(function(r){return e.emit(e.constants.EVENT_IMAGE_ERROR,{img:r})})},B=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return f(t,function(r){return z(e,r,n)})},D=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Promise.all(B(e,t,n)).then(function(){e.emit(e.constants.EVENT_IMAGE_COMPLETE)})},G=function(e){return y(function(){e.emit(e.constants.EVENT_RESIZE),e.queue.add(function(){return e.recalculate(!0,!0)})},100)},W=function(e){if(e.container=d(e.options.container),e.container instanceof d||!e.container)return!!e.options.debug&&console.error("Error: Container not found");e.container.length&&(e.container=e.container[0]),e.options.container=e.container,e.container.style.position="relative"},F=function(e){e.queue=new L,e.events=new b(e),e.rows=[],e.resizer=G(e)},j=function(e){var t=d("img",e.container);window.addEventListener("resize",e.resizer),e.on(e.constants.EVENT_IMAGE_LOAD,function(){return e.recalculate(!1,!1)}),e.on(e.constants.EVENT_IMAGE_COMPLETE,function(){return e.recalculate(!0,!0)}),e.options.useOwnImageLoader||u(e,t,!e.options.waitForImages),e.emit(e.constants.EVENT_INITIALIZED)},H=function(e){W(e),F(e),j(e)},h=function(e){return e===Object(e)&&Object.prototype.toString.call(e)!=="[object Array]"},M=function(e,t){h(e)||(t.columns=e),h(e)&&e.columns&&(t.columns=e.columns),h(e)&&e.margin&&!h(e.margin)&&(t.margin={x:e.margin,y:e.margin}),h(e)&&e.margin&&h(e.margin)&&e.margin.x&&(t.margin.x=e.margin.x),h(e)&&e.margin&&h(e.margin)&&e.margin.y&&(t.margin.y=e.margin.y)},Z=function(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)},C=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.lastcol||(e.lastcol=0),e.rows.length<1&&(n=!0),n){e.rows=[],e.cols=[],e.lastcol=0;for(var r=t-1;r>=0;r--)e.rows[r]=0,e.cols[r]=R(e,r)}else if(e.tmpRows){e.rows=[];for(var r=t-1;r>=0;r--)e.rows[r]=e.tmpRows[r]}else{e.tmpRows=[];for(var r=t-1;r>=0;r--)e.tmpRows[r]=e.rows[r]}},$=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],r=t?e.container.children:d(':scope > *:not([data-macy-complete="1"])',e.container);r=Array.from(r).filter(function(o){return o.offsetParent!==null});var s=N(e.options);return v(r,function(o){t&&(o.dataset.macyComplete=0),o.style.width=s}),e.options.trueOrder?(q(e,r,t,n),e.emit(e.constants.EVENT_RECALCULATED)):(S(e,r,t,n),e.emit(e.constants.EVENT_RECALCULATED))},U=function(){return!!window.Promise},Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};Array.from||(Array.from=function(e){for(var t=0,n=[];t<e.length;)n.push(e[t++]);return n});var x={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};(function(){try{document.createElement("a").querySelector(":scope *")}catch{(function(){function t(o){return function(i){if(i&&n.test(i)){var a=this.getAttribute("id");a||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=i.replace(n,"#"+this.id);var E=o.apply(this,arguments);return a===null?this.removeAttribute("id"):a||(this.id=a),E}return o.apply(this,arguments)}}var n=/:scope\b/gi,r=t(Element.prototype.querySelector);Element.prototype.querySelector=function(o){return r.apply(this,arguments)};var s=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(o){return s.apply(this,arguments)}})()}})();var l=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x;if(!(this instanceof e))return new e(t);this.options={},Y(this.options,x,t),this.options.cancelLegacy&&!U()||H(this)};return l.init=function(e){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new l(e)},l.prototype.recalculateOnImageLoad=function(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return u(this,d("img",this.container),!e)},l.prototype.runOnImageLoad=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=d("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,e),t&&this.on(this.constants.EVENT_IMAGE_LOAD,e),u(this,n,t)},l.prototype.recalculate=function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],n=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return n&&this.queue.clear(),this.queue.add(function(){return $(e,t,n)})},l.prototype.remove=function(){window.removeEventListener("resize",this.resizer),v(this.container.children,function(e){e.removeAttribute("data-macy-complete"),e.removeAttribute("style")}),this.container.removeAttribute("style")},l.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},l.prototype.on=function(e,t){this.events.on(e,t)},l.prototype.emit=function(e,t){this.events.emit(e,t)},l.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},l.prototype.constants=l.constants,l})})(V);var ee=V.exports;const te=X(ee);document.getElementById("searchInput");const ne=document.getElementById("searchIcon"),re=document.getElementById("menu-toggle"),w=document.getElementById("menu");re.addEventListener("click",()=>{window.innerWidth<1024&&(w.style.transform==="translateY(-500px)"||w.style.transform===""?w.style.transform="translateY(0)":w.style.transform="translateY(-500px)")});window.addEventListener("resize",()=>{window.innerWidth>=1024&&(w.style.transform="")});var k=te({container:".macy-container",trueOrder:!1,waitForImages:!1,margin:40,columns:4,breakAt:{1500:4,1440:3,940:2,400:1}});document.getElementById("load-more").addEventListener("click",function(){const m=document.querySelector(".gradient-mask"),p=this.querySelector(".show"),y=this.querySelector(".hide"),f=this.querySelector(".arrow-toggle"),u=document.querySelectorAll(".hidden-projects"),c=document.getElementById("load-more");p.classList.contains("hidden")?(p.classList.remove("hidden"),y.classList.add("hidden"),m.style.height="70%",f.style.transform="rotate(0deg)",u.forEach(g=>{g.style.maxHeight="0",g.style.opacity="0"}),c.style.background="transparent",k.recalculate(!0)):(p.classList.add("hidden"),y.classList.remove("hidden"),m.style.height="0",f.style.transform="rotate(180deg)",u.forEach(g=>{g.style.maxHeight="none",g.style.opacity="1"}),c.style.background="#DCC1AB",k.recalculate(!0))});ne.addEventListener("click",toggleSearchInput);menuIcon.addEventListener("click",toggleMenu);showMoreBtn.addEventListener("click",showMoreImages);window.addEventListener("resize",checkWindowSize);checkWindowSize();