this.wp=this.wp||{},this.wp.editWidgets=function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=219)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},15:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return r})},2:function(e,t){!function(){e.exports=this.lodash}()},21:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",function(){return r})},219:function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"setupWidgetAreas",function(){return E}),n.d(r,"updateBlocksInWidgetArea",function(){return k}),n.d(r,"saveWidgetAreas",function(){return A});var c={};n.d(c,"getWidgetAreas",function(){return _}),n.d(c,"getWidgetArea",function(){return S}),n.d(c,"getBlocksFromWidgetArea",function(){return W});var i=n(0),a=(n(83),n(93)),o=n(26),s=n(59);Object(o.addFilter)("editor.MediaUpload","core/edit-widgets/replace-media-upload",function(){return s.MediaUpload});var u=n(4),l=n(34),d=n(15),f=n(8),b=n(2);var p=Object(u.combineReducers)({widgetAreas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SETUP_WIDGET_AREAS":return Object(b.mapValues)(Object(b.keyBy)(t.widgetAreas,"id"),function(e){return Object(b.pick)(e,["name","id","description"])})}return e},widgetAreaBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SETUP_WIDGET_AREAS":return Object(b.mapValues)(Object(b.keyBy)(t.widgetAreas,"id"),function(e){return e.blocks});case"UPDATE_BLOCKS_IN_WIDGET_AREA":return(e[t.widgetAreaId]||[])===t.blocks?e:Object(f.a)({},e,Object(d.a)({},t.widgetAreaId,t.blocks))}return e}}),g=n(22),O=n.n(g),v=n(21),j=n(9),h=n(1),m=O.a.mark(E),w=O.a.mark(A),y="WIDGET_AREAS_SAVE_NOTICE_ID";function E(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.select)("core","getEntityRecords","root","widgetArea");case 2:return e=t.sent,t.next=5,{type:"SETUP_WIDGET_AREAS",widgetAreas:Object(b.map)(e,function(e){var t=e.content,n=Object(v.a)(e,["content"]);return Object(f.a)({},n,{blocks:Object(j.parse)(Object(b.get)(t,["raw"],""))})})};case 5:case"end":return t.stop()}},m)}function k(e){return{type:"UPDATE_BLOCKS_IN_WIDGET_AREA",widgetAreaId:e,blocks:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]}}function A(){var e,t,n,r,c,i,a,o,s;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Object(l.select)("core/edit-widgets","getWidgetAreas");case 2:e=u.sent,t=!0,n=!1,r=void 0,u.prev=6,c=e[Symbol.iterator]();case 8:if(t=(i=c.next()).done){u.next=19;break}return a=i.value,o=a.id,u.next=13,Object(l.select)("core/edit-widgets","getBlocksFromWidgetArea",o);case 13:return s=u.sent,u.next=16,Object(l.dispatch)("core","saveWidgetArea",{id:o,content:Object(j.serialize)(s)});case 16:t=!0,u.next=8;break;case 19:u.next=25;break;case 21:u.prev=21,u.t0=u.catch(6),n=!0,r=u.t0;case 25:u.prev=25,u.prev=26,t||null==c.return||c.return();case 28:if(u.prev=28,!n){u.next=31;break}throw r;case 31:return u.finish(28);case 32:return u.finish(25);case 33:return u.next=35,Object(l.dispatch)("core/notices","createSuccessNotice",Object(h.__)("Block areas saved succesfully."),{id:y,type:"snackbar"});case 35:case"end":return u.stop()}},w,null,[[6,21,25,33],[26,,28,32]])}var x=n(31),_=Object(x.a)(function(e){return Object(b.toArray)(e.widgetAreas)},function(e){return[e.widgetAreas]});function S(e,t){return e.widgetAreas[t]}function W(e,t){return e.widgetAreaBlocks[t]}var B=Object(u.registerStore)("core/edit-widgets",{reducer:p,actions:r,selectors:c,controls:l.controls});B.dispatch({type:"INIT"});var P=n(7),I=n(3),D=n(41),T=n(23);var N=function(){var e=Object(i.useState)(!1),t=Object(T.a)(e,2),n=t[0],r=t[1],c=Object(u.useDispatch)("core/edit-widgets").saveWidgetAreas,a=Object(i.useCallback)(Object(D.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,c();case 3:r(!1);case 4:case"end":return e.stop()}},e)})),[]);return Object(i.createElement)(I.Button,{isPrimary:!0,isLarge:!0,isBusy:n,"aria-disabled":n,onClick:n?void 0:a},Object(h.__)("Update"))};var U=function(){return Object(i.createElement)("div",{className:"edit-widgets-header",role:"region","aria-label":Object(h.__)("Widgets screen top bar"),tabIndex:"-1"},Object(i.createElement)("h1",{className:"edit-widgets-header__title"},Object(h.__)("Block Areas")," ",Object(h.__)("(experimental)")),Object(i.createElement)("div",{className:"edit-widgets-header__actions"},Object(i.createElement)(N,null)))};var M=function(){return Object(i.createElement)("div",{className:"edit-widgets-sidebar",role:"region","aria-label":Object(h.__)("Widgets advanced settings"),tabIndex:"-1"},Object(i.createElement)(I.Panel,{header:Object(h.__)("Block Areas")}))},R=n(6);var C=Object(P.compose)([Object(u.withSelect)(function(e,t){var n=t.id,r=e("core/edit-widgets"),c=r.getBlocksFromWidgetArea,i=r.getWidgetArea,a=e("core").canUser;return{blocks:c(n),widgetAreaName:(i(n)||{}).name,hasUploadPermissions:Object(b.defaultTo)(a("create","media"),!0)}}),Object(u.withDispatch)(function(e,t){var n=t.id;return{updateBlocks:function(t){(0,e("core/edit-widgets").updateBlocksInWidgetArea)(n,t)}}})])(function(e){var t=e.blockEditorSettings,n=e.blocks,r=e.initialOpen,c=e.updateBlocks,a=e.widgetAreaName,o=e.hasUploadPermissions,u=Object(i.useMemo)(function(){return function(e,t){return t?Object(f.a)({},e,{__experimentalMediaUpload:function(t){var n=t.onError,r=Object(v.a)(t,["onError"]);Object(s.uploadMedia)(Object(f.a)({wpAllowedMimeTypes:e.allowedMimeTypes,onError:function(e){var t=e.message;return n(t)}},r))}}):e}(t,o)},[t,o]);return Object(i.createElement)(I.Panel,{className:"edit-widgets-widget-area"},Object(i.createElement)(I.PanelBody,{title:a,initialOpen:r},Object(i.createElement)(R.BlockEditorProvider,{value:n,onInput:c,onChange:c,settings:u},Object(i.createElement)(R.WritingFlow,null,Object(i.createElement)(R.ObserveTyping,null,Object(i.createElement)(R.BlockList,null))))))});var F=Object(P.compose)([Object(u.withSelect)(function(e){return{areas:(0,e("core/edit-widgets").getWidgetAreas)()}})])(function(e){var t=e.areas,n=e.blockEditorSettings;return t.map(function(e,t){var r=e.id;return Object(i.createElement)(C,{blockEditorSettings:n,key:r,id:r,initialOpen:0===t})})});var G=function(){var e=Object(u.useSelect)(function(e){return{notices:e("core/notices").getNotices()}}).notices,t=Object(b.filter)(e,{type:"snackbar"}),n=Object(u.useDispatch)("core/notices").removeNotice;return Object(i.createElement)(I.SnackbarList,{notices:t,className:"edit-widgets-notices__snackbar",onRemove:n})};var L=Object(I.navigateRegions)(function(e){var t=e.blockEditorSettings;return Object(i.createElement)(I.SlotFillProvider,null,Object(i.createElement)(U,null),Object(i.createElement)(M,null),Object(i.createElement)(G,null),Object(i.createElement)("div",{className:"edit-widgets-layout__content",role:"region","aria-label":Object(h.__)("Widgets screen content"),tabIndex:"-1"},Object(i.createElement)(F,{blockEditorSettings:t})),Object(i.createElement)(I.Popover.Slot,null))});var V=Object(P.compose)([Object(u.withDispatch)(function(e){return{setupWidgetAreas:e("core/edit-widgets").setupWidgetAreas}})])(function(e){var t=e.setupWidgetAreas,n=e.settings;return Object(i.useEffect)(function(){t()},[]),Object(i.createElement)(L,{blockEditorSettings:n})});function q(e,t){Object(a.registerCoreBlocks)(),Object(i.render)(Object(i.createElement)(V,{settings:t}),document.getElementById(e))}n.d(t,"initialize",function(){return q})},22:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},23:function(e,t,n){"use strict";var r=n(38);var c=n(37);function i(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,c=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){c=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n}(e,t)||Object(c.a)()}n.d(t,"a",function(){return i})},26:function(e,t){!function(){e.exports=this.wp.hooks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},31:function(e,t,n){"use strict";var r,c;function i(e){return[e]}function a(e){return!!e&&"object"==typeof e}function o(){var e={clear:function(){e.head=null}};return e}function s(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r={},c="undefined"!=typeof WeakMap,t.a=function(e,t){var n,u;function l(){n=c?new WeakMap:o()}function d(){var n,r,c,i,a,o=arguments.length;for(i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];for(a=t.apply(null,i),(n=u(a)).isUniqueByDependants||(n.lastDependants&&!s(a,n.lastDependants,0)&&n.clear(),n.lastDependants=a),r=n.head;r;){if(s(r.args,i,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:e.apply(null,i)},i[0]=null,r.args=i,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return t||(t=i),u=c?function(e){var t,c,i,s,u=n,l=!0;for(t=0;t<e.length;t++){if(!a(c=e[t])){l=!1;break}u.has(c)?u=u.get(c):(i=new WeakMap,u.set(c,i),u=i)}return u.has(r)||((s=o()).isUniqueByDependants=l,u.set(r,s)),u.get(r)}:function(){return n},d.getDependants=t,d.clear=l,l(),d}},34:function(e,t){!function(){e.exports=this.wp.dataControls}()},37:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",function(){return r})},38:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",function(){return r})},4:function(e,t){!function(){e.exports=this.wp.data}()},41:function(e,t,n){"use strict";function r(e,t,n,r,c,i,a){try{var o=e[i](a),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(c,i){var a=e.apply(t,n);function o(e){r(a,c,i,o,s,"next",e)}function s(e){r(a,c,i,o,s,"throw",e)}o(void 0)})}}n.d(t,"a",function(){return c})},59:function(e,t){!function(){e.exports=this.wp.mediaUtils}()},6:function(e,t){!function(){e.exports=this.wp.blockEditor}()},7:function(e,t){!function(){e.exports=this.wp.compose}()},8:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(15);function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},c=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),c.forEach(function(t){Object(r.a)(e,t,n[t])})}return e}},83:function(e,t){!function(){e.exports=this.wp.notices}()},9:function(e,t){!function(){e.exports=this.wp.blocks}()},93:function(e,t){!function(){e.exports=this.wp.blockLibrary}()}});