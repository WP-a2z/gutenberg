this.wp=this.wp||{},this.wp.tokenList=function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=365)}({13:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return u}))},14:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},365:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(23),u=n.n(r),i=n(14),o=n(13),a=n(2),c=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(i.a)(this,e),this.value=n,["entries","forEach","keys","values"].forEach((function(e){t[e]=function(){var n;return(n=t._valueAsArray)[e].apply(n,arguments)}}))}return Object(o.a)(e,[{key:"toString",value:function(){return this.value}},{key:Symbol.iterator,value:u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(this._valueAsArray,"t0",1);case 1:return e.abrupt("return",e.t0);case 2:case"end":return e.stop()}}),e,this)}))},{key:"item",value:function(e){return this._valueAsArray[e]}},{key:"contains",value:function(e){return-1!==this._valueAsArray.indexOf(e)}},{key:"add",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.value+=" "+t.join(" ")}},{key:"remove",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.value=a.without.apply(void 0,[this._valueAsArray].concat(t)).join(" ")}},{key:"toggle",value:function(e,t){return void 0===t&&(t=!this.contains(e)),t?this.add(e):this.remove(e),t}},{key:"replace",value:function(e,t){return!!this.contains(e)&&(this.remove(e),this.add(t),!0)}},{key:"supports",value:function(){return!0}},{key:"value",get:function(){return this._currentValue},set:function(e){e=String(e),this._valueAsArray=Object(a.uniq)(Object(a.compact)(e.split(/\s+/g))),this._currentValue=this._valueAsArray.join(" ")}},{key:"length",get:function(){return this._valueAsArray.length}}]),e}()}}).default;