window.wp=window.wp||{},window.wp.primitives=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=562)}({0:function(e,t){e.exports=window.wp.element},562:function(e,t,n){"use strict";n.r(t),n.d(t,"Circle",(function(){return u})),n.d(t,"G",(function(){return c})),n.d(t,"Path",(function(){return a})),n.d(t,"Polygon",(function(){return l})),n.d(t,"Rect",(function(){return f})),n.d(t,"Defs",(function(){return d})),n.d(t,"RadialGradient",(function(){return s})),n.d(t,"LinearGradient",(function(){return p})),n.d(t,"Stop",(function(){return b})),n.d(t,"SVG",(function(){return m})),n.d(t,"HorizontalRule",(function(){return v})),n.d(t,"BlockQuotation",(function(){return y})),n.d(t,"View",(function(){return j}));var r=n(9),o=n.n(r),i=n(0);const u=e=>Object(i.createElement)("circle",e),c=e=>Object(i.createElement)("g",e),a=e=>Object(i.createElement)("path",e),l=e=>Object(i.createElement)("polygon",e),f=e=>Object(i.createElement)("rect",e),d=e=>Object(i.createElement)("defs",e),s=e=>Object(i.createElement)("radialGradient",e),p=e=>Object(i.createElement)("linearGradient",e),b=e=>Object(i.createElement)("stop",e),m=({className:e,isPressed:t,...n})=>{const r={...n,className:o()(e,{"is-pressed":t})||void 0,role:"img","aria-hidden":!0,focusable:!1};return Object(i.createElement)("svg",r)},v="hr",y="blockquote",j="div"},9:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?e.exports=o:void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}});