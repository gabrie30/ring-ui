!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1057)}({1057:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){function a(t){n(u,o,i,a,c,"next",t)}function c(t){n(u,o,i,a,c,"throw",t)}var u=t.apply(e,r);a(void 0)})}}function i(){return i=o(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.get(f);case 2:if(e=t.sent){t.next=10;break}return r=Math.random().toString(),t.next=7,l.set(f,r);case 7:h.innerText=r,t.next=11;break;case 10:h.innerText=e;case 11:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(22),c=(r.n(a),r(268)),u=(r.n(c),r(83)),s=(r.n(u),r(444)),f="storage-example-key",l=new s.a,h=document.getElementById("stored-value");!function(){i.apply(this,arguments)}()},19:function(t,e,r){t.exports=r(2)(328)},2:function(t,e){t.exports=vendor_lib},22:function(t,e,r){t.exports=r(2)(397)},24:function(t,e,r){t.exports=r(2)(411)},268:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new p(n||[]);return a._invoke=s(t,r,c),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function u(t){function e(r,o,i,a){var c=n(t[r],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(t,e,r){var o=_;return function(i,a){if(o===P)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return v()}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=f(c,r);if(u){if(u===j)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===_)throw o=S,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=P;var s=n(t,e,r);if("normal"===s.type){if(o=r.done?S:L,s.arg===j)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=S,r.method="throw",r.arg=s.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,f(t,e),"throw"===e.method))return j;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,j;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,j):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,j)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function y(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(m.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=g,e.done=!0,e};return n.next=n}}return{next:v}}function v(){return{value:g,done:!0}}var g,d=Object.prototype,m=d.hasOwnProperty,w="function"==typeof Symbol?Symbol:{},b=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",E=w.toStringTag||"@@toStringTag",O="object"==typeof t,k=e.regeneratorRuntime;if(k)return void(O&&(t.exports=k));k=e.regeneratorRuntime=O?t.exports:{},k.wrap=r;var _="suspendedStart",L="suspendedYield",P="executing",S="completed",j={},T={};T[b]=function(){return this};var N=Object.getPrototypeOf,I=N&&N(N(y([])));I&&I!==d&&m.call(I,b)&&(T=I);var C=a.prototype=o.prototype=Object.create(T);i.prototype=C.constructor=a,a.constructor=i,a[E]=i.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(C),t},k.awrap=function(t){return{__await:t}},c(u.prototype),u.prototype[x]=function(){return this},k.AsyncIterator=u,k.async=function(t,e,n,o){var i=new u(r(t,e,n,o));return k.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(C),C[E]="Generator",C[b]=function(){return this},C.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},k.values=y,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),j},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),j}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=g),j}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},28:function(t,e,r){t.exports=r(2)(396)},391:function(t,e,r){function n(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length||"function"!=typeof t.copy||"function"!=typeof t.slice||t.length>0&&"number"!=typeof t[0])}function i(t,e,r){var i,f;if(n(t)||n(e))return!1;if(t.prototype!==e.prototype)return!1;if(u(t))return!!u(e)&&(t=a.call(t),e=a.call(e),s(t,e,r));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var l=c(t),h=c(e)}catch(t){return!1}if(l.length!=h.length)return!1;for(l.sort(),h.sort(),i=l.length-1;i>=0;i--)if(l[i]!=h[i])return!1;for(i=l.length-1;i>=0;i--)if(f=l[i],!s(t[f],e[f],r))return!1;return typeof t==typeof e}var a=Array.prototype.slice,c=r(393),u=r(392),s=t.exports=function(t,e,r){return r||(r={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?r.strict?t===e:t==e:i(t,e,r))}},392:function(t,e){function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function n(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?r:n,e.supported=r,e.unsupported=n},393:function(t,e){function r(t){var e=[];for(var r in t)e.push(r);return e}e=t.exports="function"==typeof Object.keys?Object.keys:r,e.shim=r},431:function(t,e,r){t.exports=r(2)(381)},444:function(t,e,r){"use strict";var n=r(447),o=r(446),i=n.a;try{var a="testStorage";localStorage.setItem(a,a),localStorage.removeItem(a)}catch(t){i=o.a}var c=i;e.a=c},446:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",function(){return v});var c=r(7),u=(r.n(c),r(9)),s=(r.n(u),r(24)),f=(r.n(s),r(431)),l=(r.n(f),r(83)),h=(r.n(l),r(28)),p=(r.n(h),r(391)),y=r.n(p),v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,t);var r="session"===e.type;this.cookieName=e.cookieName||(r?this.constructor.DEFAULT_SESSION_COOKIE_NAME:this.constructor.DEFAULT_COOKIE_NAME),this.checkDelay=e.checkDelay||this.constructor.DEFAULT_CHECK_DELAY,this.expires=r?this.constructor.COOKIE_EXPIRES:null}return i(t,null,[{key:"_createCookie",value:function(t,e,r){var n,o;r?(n=new Date,n.setTime(n.getTime()+864e5*r),o="; expires=".concat(n.toGMTString())):o=";",document.cookie="".concat(t,"=").concat(e).concat(o,"; path=/")}},{key:"_readCookie",value:function(t){for(var e,r="".concat(t,"="),n=document.cookie.split(";"),o=0;o<n.length;o++){for(e=n[o];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(r))return e.substring(r.length,e.length)}}}]),i(t,[{key:"_read",value:function(){var e=this;return new Promise(function(r){var n=t._readCookie(e.cookieName);r(JSON.parse(decodeURIComponent(n)))}).catch(function(){return{}})}},{key:"_write",value:function(e){var r=this;return new Promise(function(n){var o=encodeURIComponent(JSON.stringify(e));return t._createCookie(r.cookieName,"{}"===o?"":o,r.expires),n(e)})}},{key:"get",value:function(t){return this._read().then(function(e){return e[t]||null})}},{key:"set",value:function(t,e){var r=this;return this._read().then(function(n){return t&&(null!=e?n[t]=e:Reflect.deleteProperty(n,t)),r._write(n)})}},{key:"remove",value:function(t){return this.set(t,null)}},{key:"each",value:function(t){return"function"!=typeof t?Promise.reject(new Error("Callback is not a function")):this._read().then(function(e){var r=[];for(var n in e)e.hasOwnProperty(n)&&r.push(t(n,e[n]));return Promise.all(r)})}},{key:"on",value:function(t,e){var r=this,n=!1,o=function o(i){r.get(t).then(function(t){n||(y()(i,t)||e(t),window.setTimeout(function(){return o(i)},r.checkDelay))})};return this.get(t).then(o),function(){n=!0}}}]),t}();a(v,"DEFAULT_COOKIE_NAME","localStorage"),a(v,"DEFAULT_SESSION_COOKIE_NAME","sessionStorage"),a(v,"DEFAULT_CHECK_DELAY",3e3),a(v,"COOKIE_EXPIRES",365),a(v,"QUOTA",4093)},447:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){function a(t){n(u,o,i,a,c,"next",t)}function c(t){n(u,o,i,a,c,"throw",t)}var u=t.apply(e,r);a(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}r.d(e,"a",function(){return y});var u=r(7),s=(r.n(u),r(9)),f=(r.n(s),r(24)),l=(r.n(f),r(19)),h=(r.n(l),r(83)),p=(r.n(h),r(268)),y=(r.n(p),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.storageType="session"===e.type?"sessionStorage":"localStorage"}return c(t,null,[{key:"safePromise",value:function(){var t=o(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0&&"NS_ERROR_FILE_CORRUPTED"===t.t0.name&&window.alert('Sorry, it looks like your browser storage is corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and setting time range to "Everything". This will remove the corrupted browser storage across all sites.'),t.t0;case 10:case"end":return t.stop()}},t,this,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}]),c(t,[{key:"get",value:function(t){var e=this;return this.constructor.safePromise(function(r){var n=window[e.storageType].getItem(t);try{r(JSON.parse(n))}catch(t){r(n)}})}},{key:"set",value:function(t,e){var r=this;return this.constructor.safePromise(function(n){window[r.storageType].setItem(t,JSON.stringify(e)),n(e)})}},{key:"remove",value:function(t){var e=this.storageType;return this.constructor.safePromise(function(r){window[e].hasOwnProperty(t)&&window[e].removeItem(t),r()})}},{key:"each",value:function(t){var e=this.storageType;return this.constructor.safePromise(function(r){var n=[];for(var o in window[e])if(window[e].hasOwnProperty(o)){var i=window[e].getItem(o);try{i=JSON.parse(i)}catch(t){}n.push(Promise.resolve(t(o,i)))}r(Promise.all(n))})}},{key:"on",value:function(t,e){function r(r){if(r.key===t)try{e(JSON.parse(r.newValue))}catch(t){e(r.newValue)}}return window.addEventListener("storage",r,!1),function(){return window.removeEventListener("storage",r,!1)}}}]),t}())},7:function(t,e,r){t.exports=r(2)(443)},83:function(t,e,r){t.exports=r(2)(115)},9:function(t,e,r){t.exports=r(2)(83)}});