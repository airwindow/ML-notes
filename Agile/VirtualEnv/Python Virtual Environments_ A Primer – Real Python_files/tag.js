var rptag=function(){"use strict";!function(g,v){function a(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?r/n:this.isIntersecting?1:0}function t(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout(function(){n(),r=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function e(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function n(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function _(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function o(t,e){for(var n=e;n;){if(n==t)return!0;n=m(n)}return!1}function m(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}"IntersectionObserver"in g&&"IntersectionObserverEntry"in g&&"intersectionRatio"in g.IntersectionObserverEntry.prototype?"isIntersecting"in g.IntersectionObserverEntry.prototype||Object.defineProperty(g.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(e(g,"resize",this._checkForIntersections,!0),e(v,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in g&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(v,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,n(g,"resize",this._checkForIntersections,!0),n(v,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var h=this._rootIsInDom(),c=h?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,n=_(e),o=this._rootContainsTarget(e),r=t.entry,i=h&&o&&this._computeTargetAndRootIntersection(e,c),s=t.entry=new a({time:g.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:c,intersectionRect:i});r?h&&o?this._hasCrossedThreshold(r,s)&&this._queuedEntries.push(s):r&&r.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=g.getComputedStyle(t).display){for(var n,o,r,i,s,h,c,a,u=_(t),l=m(t),p=!1;!p;){var d=null,f=1==l.nodeType?g.getComputedStyle(l):{};if("none"==f.display)return;if(l==this.root||l==v?(p=!0,d=e):l!=v.body&&l!=v.documentElement&&"visible"!=f.overflow&&(d=_(l)),d&&(n=d,o=u,void 0,r=Math.max(n.top,o.top),i=Math.min(n.bottom,o.bottom),s=Math.max(n.left,o.left),h=Math.min(n.right,o.right),a=i-r,!(u=0<=(c=h-s)&&0<=a&&{top:r,bottom:i,left:s,right:h,width:c,height:a})))break;l=m(l)}return u}},t.prototype._getRootRect=function(){var t;if(this.root)t=_(this.root);else{var e=v.documentElement,n=v.body;t={top:0,left:0,right:e.clientWidth||n.clientWidth,width:e.clientWidth||n.clientWidth,bottom:e.clientHeight||n.clientHeight,height:e.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||o(v,this.root)},t.prototype._rootContainsTarget=function(t){return o(this.root||v,t)},t.prototype._registerInstance=function(){},t.prototype._unregisterInstance=function(){},g.IntersectionObserver=t,g.IntersectionObserverEntry=a)}(window,document);var r=.5,s=1e3,n=33,t=function(){this.store=[]},e={size:{configurable:!0}};t.prototype._find=function(t){for(var e=0;e<this.store.length;e++)if(this.store[e][0]==t)return e;return-1},t.prototype.set=function(t,e){var n=this._find(t);0<=n?this.store[n][1]=e:this.store.push([t,e])},t.prototype.get=function(t){var e=this._find(t);if(0<=e)return this.store[e][1]},t.prototype.delete=function(t){var e=this._find(t);0<=e&&this.store.splice(e,1)},t.prototype.forEach=function(t){for(var e=0;e<this.store.length;e++){var n=this.store[e];t(n[1],n[0],this)}},e.size.get=function(){return this.store.length},Object.defineProperties(t.prototype,e);var o=window.Map||t,h=new o,c=new o,a=null,i=null;function u(t,e){return n=t,o=function(){e(JSON.parse(this.responseText))},(r=new XMLHttpRequest).addEventListener("load",o),r.open("GET",n),void r.send();var n,o,r}function l(t,e){t.forEach(function(t){t.isIntersecting,t.intersectionRatio,t.intersectionRatio>=r?c.set(t.target,{startTime:t.time}):c.delete(t.target),t.target,0<c.size&&null==i&&(i=setInterval(p,n))})}function p(){c.forEach(function(t,e){var n,o,r=performance.now()-t.startTime;if(s<=r){o=e,a.unobserve(o),c.delete(e);var i=h.get(e);n=i.beacon,navigator.sendBeacon&&navigator.sendBeacon(n)||((new Image).src=n)}}),0==c.size&&null!=i&&(clearInterval(i),i=null)}function d(e,n){h.set(e,n);var t=document.createElement("a");t.href=n.target,t.setAttribute("rel","nofollow"),t.setAttribute("target","_blank"),t.style.border=null;var o=document.createElement("img");o.style.maxWidth="100%",o.style.maxHeight="100%",o.addEventListener("load",function(){var t;n.img,t=e,a.observe(t)}),o.src=n.img,t.appendChild(o),e.appendChild(t),n.img}function f(){if(window.rp_prop_id){window.rp_prop_id;var t={p:window.rp_prop_id,s:[]},o=Array.prototype.slice.call(document.getElementsByClassName("rpad"));if(0!=o.length){o.sort(function(t,e){return t._bcr||(t._bcr=t.getBoundingClientRect()),e._bcr||(e._bcr=e.getBoundingClientRect()),t._bcr.top-e._bcr.top});for(var e=0;e<o.length;e++){var n=o[e];t.s.push(n.dataset.unit)}u("https://srv.realpython.net/call/?d="+btoa(JSON.stringify(t)),function(t){a=new IntersectionObserver(l,{root:null,threshold:r});for(var e=0;e<o.length;e++){var n=t.ads[e];n&&d(o[e],n)}})}else console.warn("No units found, aborting")}else console.error("rp_prop_id not defined, aborting")}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",f):f();return{}}();
