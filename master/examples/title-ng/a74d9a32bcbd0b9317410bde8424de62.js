!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1216)}({1007:function(t,e,n){"use strict";var o=n(19),i=(n.n(o),n(27)),r=(n.n(i),n(52)),u=n.n(r),c=u.a.module("Ring.title",[]);c.directive("rgPageTitle",function(){return{scope:{rgPageTitle:"@?",noTitle:"@?",delimiter:"@"},controller:["$rootScope","$scope","$element","$attrs","pageTitle","$injector",function(t,e,n,o,i,r){var c=n[0],l=c.textContent,a=u.a.noop,s=t.$on("$routeChangeSuccess",function(t,n){if(!n.$$route||!n.$$route.redirectTo){var o=n.$$route&&n.$$route.title;i.setCurrent(e.rgPageTitle||l),!1!==o&&((u.a.isArray(o)||u.a.isFunction(o))&&(o=r.invoke(o)),i.addElement(o||e.noTitle))}});e.$on("$destroy",function(){s(),a()}),this.$onInit=function(){i.setDelimiter(e.delimiter),o.rgPageTitle&&(a=e.$watch("rgPageTitle",function(t){i.setRootElement(t)}))}}]}}),c.service("pageTitle",["$interpolate","$document",function(t,e){function n(e){l=e&&t(e)(),o(l)}function o(t){e[0].title=t}function i(t){n(l?t+c+l:t)}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=l.split(c);o[-1===e?o.length-1:e]=t,n(o.join(c))}var u=this,c=" | ",l=e[0].title;this.setDelimiter=function(t){c=t||c},this.setCurrent=function(t){l=t},this.setText=function(t){return o(t)},this.addElement=function(t,e){t.$promise?t.$promise.then(function(t){u.addElement(t[e||"name"])}):i(e?t[e]:t)},this.updateElement=function(t,e){t.$promise?t.$promise.then(function(t){u.updateElement(t[e||"name"])}):r(e?t[e]:t)},this.setRootElement=function(t){r(t,-1)}}]),e.a=c.name},1216:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(52),i=n.n(o),r=n(1007);i.a.module("test",[r.a]).run(["pageTitle",function(t){t.addElement("Some page")}])},19:function(t,e,n){t.exports=n(2)(328)},2:function(t,e){t.exports=vendor_lib},27:function(t,e,n){t.exports=n(2)(396)},52:function(t,e,n){t.exports=n(2)(243)}});