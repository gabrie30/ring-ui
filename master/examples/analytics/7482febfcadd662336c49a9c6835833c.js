!function(n){function e(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}var o={};e.m=n,e.c=o,e.i=function(n){return n},e.d=function(n,o,r){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1015)}({10:function(n,e){function o(n,e){var o=n[1]||"",t=n[3];if(!t)return o;if(e&&"function"==typeof btoa){var i=r(t);return[o].concat(t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"})).concat([i]).join("\n")}return[o].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=o(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,o){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},t=0;t<this.length;t++){var i=this[t][0];"number"==typeof i&&(r[i]=!0)}for(t=0;t<n.length;t++){var a=n[t];"number"==typeof a[0]&&r[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},1015:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(244),t=(o.n(r),o(847)),i=o(275),a=o.n(i),s=o(848),c=new s.a(function(n){return console.log("Custom plugin receives:",n[0].category,n[0].action)},!1,100);t.a.config([c]),document.getElementById("click-me").className=a.a.link,document.getElementById("click-me").addEventListener("click",function(n){t.a.trackEvent("test-category","test-action"),n.preventDefault()})},14:function(n,e,o){e=n.exports=o(10)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-icon-secondary-color: #999;\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #1f2326;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #1f2326;\n  --ring-heading-color: var(--ring-text-color);\n  --ring-secondary-color: #737577;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #999;\n  --ring-dark-disabled-color: #444;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-popup-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Code */\n  --ring-code-background-color: #fff;\n  --ring-code-background-color: var(--ring-content-background-color);\n  --ring-code-color: #000;\n  --ring-code-comment-color: #808080;\n  --ring-code-meta-color: #808000;\n  --ring-code-keyword-color: #000080;\n  --ring-code-tag-background-color: #efefef;\n  --ring-code-tag-color: #000080;\n  --ring-code-tag-color: var(--ring-code-keyword-color);\n  --ring-code-tag-font-weight: bold;\n  --ring-code-field-color: #660e7a;\n  --ring-code-attribute-color: #00f;\n  --ring-code-number-color: #00f;\n  --ring-code-number-color: var(--ring-code-attribute-color);\n  --ring-code-string-color: #008000;\n  --ring-code-addition-color: #aadeaa;\n  --ring-code-deletion-color: #c8c8c8;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},15:function(n,e,o){function r(n,e){for(var o=0;o<n.length;o++){var r=n[o],t=p[r.id];if(t){t.refs++;for(var i=0;i<t.parts.length;i++)t.parts[i](r.parts[i]);for(;i<r.parts.length;i++)t.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));p[r.id]={id:r.id,refs:1,parts:a}}}}function t(n,e){for(var o=[],r={},t=0;t<n.length;t++){var i=n[t],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],f={css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(f):o.push(r[a]={id:a,parts:[f]})}return o}function i(n,e){var o=b(n.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===n.insertAt)r?r.nextSibling?o.insertBefore(e,r.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),w.push(e);else if("bottom"===n.insertAt)o.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var t=b(n.insertAt.before,o);o.insertBefore(e,t)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function s(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=f();o&&(n.attrs.nonce=o)}return l(e,n.attrs),i(n,e),e}function c(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",l(e,n.attrs),i(n,e),e}function l(n,e){Object.keys(e).forEach(function(o){n.setAttribute(o,e[o])})}function f(){return o.nc}function u(n,e){var o,r,t,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var l=x++;o=_||(_=s(e)),r=d.bind(null,o,l,!1),t=d.bind(null,o,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(e),r=h.bind(null,o,e),t=function(){a(o),o.href&&URL.revokeObjectURL(o.href)}):(o=s(e),r=g.bind(null,o),t=function(){a(o)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else t()}}function d(n,e,o,r){var t=o?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,t);else{var i=document.createTextNode(t),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function g(n,e){var o=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}function h(n,e,o){var r=o.css,t=o.sourceMap,i=void 0===e.convertToAbsoluteUrls&&t;(e.convertToAbsoluteUrls||i)&&(r=k(r)),t&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var p={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,o){if("function"==typeof n)return n();if(void 0===e[n]){var r=m.call(this,n,o);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),_=null,x=0,w=[],k=o(65);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=t(n,e);return r(o,e),function(n){for(var i=[],a=0;a<o.length;a++){var s=o[a],c=p[s.id];c.refs--,i.push(c)}n&&r(t(n,e),e);for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete p[c.id]}}}};var y=function(){var n=[];return function(e,o){return n[e]=o,n.filter(Boolean).join("\n")}}()},19:function(n,e,o){n.exports=o(2)(332)},2:function(n,e){n.exports=vendor_lib},244:function(n,e,o){n.exports=o(2)(416)},25:function(n,e,o){n.exports=o(2)(398)},275:function(n,e,o){var r=o(278);"string"==typeof r&&(r=[[n.i,r,""]]);var t={hmr:!0};t.transform=void 0,t.insertInto=void 0,o(15)(r,t),r.locals&&(n.exports=r.locals)},278:function(n,e,o){e=n.exports=o(10)(!1),e.i(o(14),""),e.i(o(64),void 0),e.push([n.i,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover {\n    transition: none;\n    color: #ff008c;\n    color: var(--ring-link-hover-color);\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover {\n    text-decoration: none;\n}}\n\n.link_46b {\n  /* To override link stiles inside alert */\n  cursor: pointer;\n  transition: color 0.15s ease-out;\n  transition: color var(--ring-fast-ease);\n  color: #0f5b99;\n  color: var(--ring-link-color);}\n\n.link_46b {\n  text-decoration: none;}\n\n.link_46b.hover_723 {\n  transition: none;\n  color: #ff008c;\n  color: var(--ring-link-hover-color);}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover .inner_e7d {\n    border-width: 0;\n    border-bottom: 2px solid;\n    border-image-source: linear-gradient(currentcolor 50%, transparent 50%);\n    border-image-slice: 0 0 100% 0;\n}}\n\n.link_46b.active_8b4 {\n  color: inherit;}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.compatibilityUnderlineMode_a72:hover {\n    text-decoration: underline\n    /* stylelint-disable-next-line selector-max-specificity */\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.compatibilityUnderlineMode_a72:hover .inner_e7d {\n    border: none;\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.pseudo_b5d:hover {\n    text-decoration: none\n    /* stylelint-disable-next-line selector-max-specificity */\n}}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b.pseudo_b5d:hover .inner_e7d {\n    border: none;\n}}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.link_46b:hover .inner_e7d {\n    border-bottom-width: 1px;\n  }}\n}\n\n@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.inherit_bc0:not(:hover) {\n  color: inherit;\n}}\n\n.pseudo_b5d {\n  padding: 0;\n\n  text-align: left;\n\n  border: 0;\n\n  background: transparent;\n\n  font: inherit\n}\n\n.pseudo_b5d::-moz-focus-inner {\n  padding: 0;\n  border: 0;}\n",""]),e.locals={link:"link_46b "+o(64).locals.link,hover:"hover_723",inner:"inner_e7d",active:"active_8b4",compatibilityUnderlineMode:"compatibilityUnderlineMode_a72",pseudo:"pseudo_b5d",inherit:"inherit_bc0"}},28:function(n,e,o){n.exports=o(2)(400)},45:function(n,e,o){"use strict";var r=o(79),t=o.n(r),i=new t.a;i.sniff(),e.a=i},6:function(n,e,o){e=n.exports=o(10)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},64:function(n,e,o){e=n.exports=o(10)(!1),e.i(o(14),""),e.i(o(6),void 0),e.push([n.i,"@media (hover: hover), (-moz-touch-enabled: 0), (-ms-high-contrast: none), (-ms-high-contrast: active) {.close_247:hover {\n    color: #ff008c;\n    color: var(--ring-link-hover-color);\n}}\n\n.alert_435 {\n  position: relative;\n\n  box-sizing: border-box;\n  min-height: 40px;\n  margin: 8px auto;\n  padding: 0 16px;\n\n  transition:\n    transform 300ms ease-out,\n    margin-bottom 300ms ease-out,\n    opacity 300ms ease-out;\n  white-space: nowrap;\n  pointer-events: auto;\n\n  border-radius: 3px;\n\n  border-radius: var(--ring-border-radius);\n  background-color: rgba(0, 21, 38, .9);\n  background-color: var(--ring-message-background-color);\n  box-shadow: 0 2px 16px rgba(0, 42, 76, .15);\n  box-shadow: 0 2px 16px var(--ring-popup-shadow-color);\n\n  font-size: 13px;\n\n  font-size: var(--ring-font-size);\n  line-height: 40px;\n}\n\n.alertInline_539 {\n  margin: 8px;\n}\n\n.error_b59 {\n  word-wrap: break-word;\n\n  color: #c22731;\n\n  color: var(--ring-error-color);\n}\n\n.icon_ca6 {\n  display: inline-block;\n\n  margin-right: 8px;\n\n  vertical-align: top;\n}\n\n.caption_a16 {\n  display: inline-block;\n\n  max-width: calc(100% - 40px);\n\n  margin: 12px 40px 12px 0;\n\n  vertical-align: middle;\n  white-space: normal;\n\n  color: #fff;\n\n  color: var(--ring-dark-text-color);\n\n  line-height: 20px\n}\n\n.caption_a16 .ring-link,\n  \n  .caption_a16 .link_e30 {\ncolor: #008eff;\ncolor: var(--ring-main-color);}\n\n.badge_ca3 {\n  margin-left: 8px;\n\n  vertical-align: baseline;\n}\n\n.loader_641 {\n  top: 2px;\n\n  margin-right: 8px;\n}\n\n.close_247 {\n  position: absolute;\n  top: 2px;\n  right: 0;\n\n  margin: 4px;\n  padding: 8px;\n\n  cursor: pointer;\n\n  color: #888;\n\n  color: var(--ring-dark-secondary-color);\n  border: none;\n  background: transparent;\n\n  font-size: 0;\n  line-height: 0\n}\n\n.close_247:focus {\ncolor: #ff008c;\ncolor: var(--ring-link-hover-color);}\n\n@keyframes show_eec {\n  from {\n    transform: translateY(100%);\n\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n\n    opacity: 1;\n  }\n}\n\n@keyframes shaking_85f {\n  10%,\n  90% {\n    transform: translateX(-1px);\n  }\n\n  20%,\n  80% {\n    transform: translateX(2px);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translateX(-4px);\n  }\n\n  40%,\n  60% {\n    transform: translateX(4px);\n  }\n}\n\n.animationOpen_c23 {\n  animation-name: show_eec;\n  animation-duration: 300ms;\n}\n\n.animationClosing_d66 {\n  z-index: -1;\n  z-index: var(--ring-invisible-element-z-index);\n\n  opacity: 0;\n}\n\n.animationShaking_28d {\n  animation-name: shaking_85f;\n  animation-duration: 500ms;\n}\n",""]),e.locals={unit:""+o(6).locals.unit,"animation-duration":"300ms","animation-easing":"ease-out",close:"close_247",alert:"alert_435",alertInline:"alertInline_539",error:"error_b59",icon:"icon_ca6",caption:"caption_a16",link:"link_e30",badge:"badge_ca3",loader:"loader_641",animationOpen:"animationOpen_c23",show:"show_eec",animationClosing:"animationClosing_d66",animationShaking:"animationShaking_28d",shaking:"shaking_85f"}},65:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var o=e.protocol+"//"+e.host,r=o+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(t))return n;var i;return i=0===t.indexOf("//")?t:0===t.indexOf("/")?o+t:r+t.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},7:function(n,e,o){n.exports=o(2)(447)},79:function(n,e,o){n.exports=o(2)(256)},847:function(n,e,o){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}var a=o(25),s=(o.n(a),o(28)),c=(o.n(s),o(7)),l=(o.n(c),function(){function n(){r(this,n),this._plugins=[]}return i(n,[{key:"config",value:function(n){this._plugins=n}},{key:"track",value:function(n,e){if(n){var o=n.indexOf(":");o<0&&(o=n.indexOf("_")),o<0&&(o=n.length);var r=n.substr(0,o),t=n.substr(o+1);this.trackEvent(r,t,e)}}},{key:"trackPageView",value:function(n){this._plugins.forEach(function(e){e.trackPageView(n)})}},{key:"trackEvent",value:function(n,e,o){var r=o?e+this._buildSuffix(o):null;this._plugins.forEach(function(o){o.trackEvent(n,e),r&&o.trackEvent(n,r)})}},{key:"trackShortcutEvent",value:function(n,e,o){this.trackEvent(n,e,o),this.trackEvent("ring-shortcut","".concat(n,"$").concat(e),o)}},{key:"trackEntityProperties",value:function(n,e,o,r){for(var t=0;t<o.length;++t){var i=o[t].split("."),a=e;if(i.length){for(var s=0;s<i.length;++s){if(!a.hasOwnProperty(i[s])){a="no-value";break}a=a[i[s]]}"string"==typeof a&&(a=a.toLowerCase().replace(/[._]+/g,"-"));var c="".concat(i.join("-"),"__").concat(a);this.trackEvent(n,c,r)}}}},{key:"_buildSuffix",value:function(n){if(!n)return"";var e,o="";for(e in n)n.hasOwnProperty(e)&&(o+="__".concat(e,"$").concat(n[e]));return o}}]),n}());e.a=new l},848:function(n,e,o){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function t(n,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function i(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}o.d(e,"a",function(){return s});var a=o(860),s=function(){function n(e,o,t,i){r(this,n),this._data=[],this.config({send:e,isDevelopment:o,flushInterval:t,flushingAllowedChecker:i})}return i(n,[{key:"config",value:function(n){var e=this,o=n.flushingAllowedChecker;"function"!=typeof o&&(o=function(){return!0}),this._flush=function(){e._data.length>0&&o()&&(n.send(e._data),e._data=[])},this._isDevelopment=n.isDevelopment,this._flushInterval=n.flushInterval||1e4,this._flushMaxPackSize=n.flushMaxPackSize||100}},{key:"trackEvent",value:function(n,e){this._processEvent(n,e)}},{key:"trackPageView",value:function(n){this._lastPagePath!==n&&(this._trackPageViewAdditionalInfo(n),this._processEvent("ring-page",n),this._processEvent("ring-navigator_user-agent",a.a.getUserAgentPresentation()),this._processEvent("ring-navigator_platform",a.a.npeSaveLowerCase(navigator.platform)),this._processEvent("ring-navigator_lang",a.a.npeSaveLowerCase(navigator.language)),this._processEvent("ring-device-pixel-ratio",a.a.getDevicePixelRatioPresentation()),this._processEvent("ring-screen-width",a.a.getScreenWidthPresentation()))}},{key:"_initSendSchedule",value:function(){var n=this;window.addEventListener("beforeunload",function(){return n._trackPageViewAdditionalInfo(),n._flush()}),setInterval(this._flush,this._flushInterval),this._hasSendSchedule=!0}},{key:"_processEvent",value:function(n,e){!this._hasSendSchedule&&this._flush&&this._initSendSchedule();var o=a.a.reformatString(n,!0),r=a.a.reformatString(e);this._isDevelopment&&console.log("TRACKING DATA = ",o,r),this._addDataToFlushingPack({category:o,action:r})}},{key:"_trackPageViewAdditionalInfo",value:function(n){var e=(new Date).getTime();if(this._lastPagePath&&this._lastPageViewTime){var o=a.a.getPageViewDurationPresentation(e-this._lastPageViewTime);this._processEvent("ring-pageview-duration_".concat(this._lastPagePath),o)}this._lastPageViewTime=e,this._lastPagePath=n}},{key:"_addDataToFlushingPack",value:function(n){this._data.push(n),this._data.length>=this._flushMaxPackSize&&this._flush()}}]),n}()},860:function(n,e,o){"use strict";var r=o(19),t=(o.n(r),o(879)),i=(o.n(t),o(25)),a=(o.n(i),o(45)),s={};s.reformatString=function(n,e){var o=String(n),r=e?/[.:;!@#^&*(){}\[\]?,%=+\\\/]+/g:/[.:;!@#^&*(){}\[\]?,%=+\\]+/g;return o.replace(r,"_")},s.getPageViewDurationPresentation=function(n){var e=n/1e3;if(e>3600)return"more-than-hour";var o=Math.floor(Math.pow(2,Math.floor(Math.log2(e))+1));return o=o>0?o:1,"less-than-".concat(o,"-sec")},s.getScreenWidthPresentation=function(){for(var n=[0,768,992,1200],e=1;e<n.length;++e)if(window.innerWidth<n[e])return"[".concat(n[e-1],"px;").concat(n[e],"px)");return"[1200px;inf)"},s.npeSaveLowerCase=function(n){return(n||"unknown").toLowerCase()},s.getUserAgentPresentation=function(){var n=s.npeSaveLowerCase(a.a.browser.name||"unknown"),e=a.a.browser.version[0],o=e||"unknown";return"".concat(n,"$").concat(o)},s.getDevicePixelRatioPresentation=function(){return window.devicePixelRatio&&window.devicePixelRatio.toFixed?String(window.devicePixelRatio.toFixed(1)):"unknown"},e.a=s},879:function(n,e,o){n.exports=o(2)(346)}});