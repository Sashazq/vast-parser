/*! VAST.js v1.0.0 2017-03-28 20:03:51 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VAST=e():t.VAST=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=124)}([function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return{to:function(e){return((0,o.default)(t)?t:[t]).filter(function(t){return(0,f.default)(t)}).map(function(t){return new e(t)})}}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(118),o=r(u),a=n(50),f=r(a);e.default=i},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(11),i=n(39),u=n(28),o=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),i)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(81),i=n(17);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(3),i=n(2),u=n(37),o=n(9),a=function(t,e,n){var f,s,c,l=t&a.F,d=t&a.G,p=t&a.S,h=t&a.P,v=t&a.B,y=t&a.W,_=d?i:i[e]||(i[e]={}),b=_.prototype,m=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(f in n)(s=!l&&m&&void 0!==m[f])&&f in _||(c=s?m[f]:n[f],_[f]=d&&"function"!=typeof m[f]?n[f]:v&&s?u(c,r):y&&m[f]==c?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):h&&"function"==typeof c?u(Function.call,c):c,h&&((_.virtual||(_.virtual={}))[f]=c,t&a.R&&b&&!b[f]&&o(b,f,c)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(6),i=n(15);t.exports=n(4)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(25)("wks"),i=n(16),u=n(3).Symbol,o="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=o&&u[t]||(o?u:i)("Symbol."+t))}).store=r},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(45),i=n(18);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(11),i=n(87),u=n(18),o=n(24)("IE_PROTO"),a=function(){},f=function(){var t,e=n(38)("iframe"),r=u.length;for(e.style.display="none",n(80).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script>"),t.close(),f=t.F;r--;)delete f.prototype[u[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a.prototype=r(t),n=new a,a.prototype=null,n[o]=t):n=f(),void 0===e?n:i(n,e)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(6).f,i=n(5),u=n(10)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(25)("keys"),i=n(16);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(3),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(3),i=n(2),u=n(20),o=n(30),a=n(6).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:o.f(t)})}},function(t,e,n){e.f=n(10)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.xmlEncoded=e.attr("xmlEncoded"),this.metadata=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.event=e.attr("event"),this.offset=e.attr("offset"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),e.viewable&&(this.viewable=new o(e.viewable)),e.notViewable&&(this.notViewable=new a(e.notViewable)),e.viewUndetermined&&(this.viewUndetermined=new f(e.viewUndetermined))},o=function t(e){(0,i.default)(this,t),this.uri=e.keyValue},a=function t(e){(0,i.default)(this,t),this.uri=e.keyValue},f=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(65),u=r(i),o=n(64),a=r(o),f="function"==typeof a.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===f(u.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(76);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(13),i=n(3).document,u=r(i)&&r(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(38)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(20),i=n(8),u=n(47),o=n(9),a=n(5),f=n(19),s=n(83),c=n(23),l=n(44),d=n(10)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,y,_,b){s(n,e,v);var m,M,g,O=function(t){if(!p&&t in x)return x[t];switch(t){case"keys":return function(){return new n(this,t)};case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==y,j=!1,x=t.prototype,P=x[d]||x["@@iterator"]||y&&x[y],S=P||O(y),E=y?k?O("entries"):S:void 0,T="Array"==e?x.entries||P:P;if(T&&(g=l(T.call(new t)))!==Object.prototype&&(c(g,w,!0),r||a(g,d)||o(g,d,h)),k&&P&&"values"!==P.name&&(j=!0,S=function(){return P.call(this)}),r&&!b||!p&&!j&&x[d]||o(x,d,S),f[e]=S,f[w]=h,y)if(m={values:k?S:O("values"),keys:_?S:O("keys"),entries:E},b)for(M in m)M in x||u(x,M,m[M]);else i(i.P+i.F*(p||j),e,m);return m}},function(t,e,n){var r=n(22),i=n(15),u=n(7),o=n(28),a=n(5),f=n(39),s=Object.getOwnPropertyDescriptor;e.f=n(4)?s:function(t,e){if(t=u(t),e=o(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(45),i=n(18).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(5),i=n(27),u=n(24)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},function(t,e,n){var r=n(5),i=n(7),u=n(78)(!1),o=n(24)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),f=0,s=[];for(n in a)n!=o&&r(a,n)&&s.push(n);for(;e.length>f;)r(a,n=e[f++])&&(~u(s,n)||s.push(n));return s}},function(t,e,n){var r=n(8),i=n(2),u=n(12);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",o)}},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(127),s=r(f),c=n(131),l=r(c),d=n(111),p=r(d),h=n(136),v=r(h),y=n(115),_=r(y),b=function t(e){(0,u.default)(this,t),this.id=e.attr("id"),this.adId=e.attr("adId"),this.sequence=e.attr("sequence"),this.apiFramework=e.attr("apiFramework"),this.universalAdId=(0,a.default)(e.universalAdId).to(v.default).shift(),this.linear=(0,a.default)(e.linear).to(s.default).shift(),e.companionAds&&(this.companionAds=(0,a.default)(e.companionAds).to(p.default).shift()),e.nonLinearAds&&(this.nonLinearAds=(0,a.default)(e.nonLinearAds).to(l.default).shift()),e.creativeExtensions&&(this.creativeExtensions=(0,a.default)(e.creativeExtensions).to(_.default))};e.default=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),u=r(i),o=n(0),a=r(o),f=function t(e){var n=this;(0,a.default)(this,t),(0,u.default)(e).forEach(function(t){t.startsWith("@")?n[t.substring(1)]=e.attr(t.substring(1)):n[t]=e[t]})};e.default=f},function(t,e,n){"use strict";function r(t){return void 0!==t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return"string"==typeof t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.model=e.attr("model"),this.currency=e.attr("currency"),this.value=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.creativeType=e.attr("creativeType"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(32),s=r(f),c=n(106),l=r(c),d=function t(e){(0,u.default)(this,t),this.version=parseFloat(e.attr("version")),this.error=(0,a.default)(e.error).to(s.default),this.ad=(0,a.default)(e.ad).to(l.default)};e.default=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return/^\s*$/.test(t)?null:/^(?:true|false)$/i.test(t)?"true"===t.toLowerCase():isFinite(t)?parseFloat(t):(0,l.default)(t)?new Date(t):t.trim()}function u(t){return t.charAt(0).toLowerCase()+t.slice(1)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=r(o),f=n(66),s=r(f),c=n(120),l=r(c),d=n(122),p=r(d),h=function(){function t(e){if((0,a.default)(this,t),e.documentElement)return new t(e.documentElement);if(e.hasChildNodes()){for(var n,r,o,f="",s=0;s<e.childNodes.length;s++)n=e.childNodes.item(s),3==(n.nodeType-1|1)?f+=3===n.nodeType?n.nodeValue.trim():n.nodeValue:1!==n.nodeType||n.prefix||(r=u(n.nodeName),o=new t(n),this.hasOwnProperty(r)?(this[r].constructor!==Array&&(this[r]=[this[r]]),this[r].push(o)):this[r]=o);f&&(this.keyValue=i(f))}if(void 0===e.hasAttributes?e.attributes.length>0:e.hasAttributes())for(var c=0;c<e.attributes.length;c++){var l=e.attributes.item(c);this["@"+u(l.name)]=i(l.value.trim())}}return(0,s.default)(t,[{key:"attr",value:function(t){return this["@"+u(t)]}}]),t}();h.fromXML=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[(0,p.default)(t,e)].map(function(t){return new h(t)}).shift()},e.default=h},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e,n){t.exports={default:n(70),__esModule:!0}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){t.exports={default:n(72),__esModule:!0}},function(t,e,n){t.exports={default:n(73),__esModule:!0}},function(t,e,n){t.exports={default:n(74),__esModule:!0}},function(t,e,n){t.exports={default:n(75),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(60),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(63),u=r(i),o=n(59),a=r(o),f=n(35),s=r(f);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,s.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(35),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){n(94);var r=n(2).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(95);var r=n(2).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(96),t.exports=n(2).Object.getPrototypeOf},function(t,e,n){n(97),t.exports=n(2).Object.keys},function(t,e,n){n(98),t.exports=n(2).Object.setPrototypeOf},function(t,e,n){n(101),n(99),n(102),n(103),t.exports=n(2).Symbol},function(t,e,n){n(100),n(104),t.exports=n(30).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(7),i=n(92),u=n(91);t.exports=function(t){return function(e,n,o){var a,f=r(e),s=i(f.length),c=u(o,s);if(t&&n!=n){for(;s>c;)if((a=f[c++])!=a)return!0}else for(;s>c;c++)if((t||c in f)&&f[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(14),i=n(43),u=n(22);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var o,a=n(t),f=u.f,s=0;a.length>s;)f.call(t,o=a[s++])&&e.push(o);return e}},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e,n){var r=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(21),i=n(15),u=n(23),o={};n(9)(o,n(10)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),u(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(14),i=n(7);t.exports=function(t,e){for(var n,u=i(t),o=r(u),a=o.length,f=0;a>f;)if(u[n=o[f++]]===e)return n}},function(t,e,n){var r=n(16)("meta"),i=n(13),u=n(5),o=n(6).f,a=0,f=Object.isExtensible||function(){return!0},s=!n(12)(function(){return f(Object.preventExtensions({}))}),c=function(t){o(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!f(t))return"F";if(!e)return"E";c(t)}return t[r].i},d=function(t,e){if(!u(t,r)){if(!f(t))return!0;if(!e)return!1;c(t)}return t[r].w},p=function(t){return s&&h.NEED&&f(t)&&!u(t,r)&&c(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(6),i=n(11),u=n(14);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,o=u(e),a=o.length,f=0;a>f;)r.f(t,n=o[f++],e[n]);return t}},function(t,e,n){var r=n(7),i=n(42).f,u={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(t){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==u.call(t)?a(t):i(r(t))}},function(t,e,n){var r=n(13),i=n(11),u=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(37)(Function.call,n(41).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){var r=n(26),i=n(17);t.exports=function(t){return function(e,n){var u,o,a=String(i(e)),f=r(n),s=a.length;return f<0||f>=s?t?"":void 0:(u=a.charCodeAt(f),u<55296||u>56319||f+1===s||(o=a.charCodeAt(f+1))<56320||o>57343?t?a.charAt(f):u:t?a.slice(f,f+2):o-56320+(u-55296<<10)+65536)}}},function(t,e,n){var r=n(26),i=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):u(t,e)}},function(t,e,n){var r=n(26),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(77),i=n(84),u=n(19),o=n(7);t.exports=n(40)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(8);r(r.S,"Object",{create:n(21)})},function(t,e,n){var r=n(8);r(r.S+r.F*!n(4),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(27),i=n(44);n(46)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(27),i=n(14);n(46)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(8);r(r.S,"Object",{setPrototypeOf:n(89).set})},function(t,e){},function(t,e,n){"use strict";var r=n(90)(!0);n(40)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(3),i=n(5),u=n(4),o=n(8),a=n(47),f=n(86).KEY,s=n(12),c=n(25),l=n(23),d=n(16),p=n(10),h=n(30),v=n(29),y=n(85),_=n(79),b=n(82),m=n(11),M=n(7),g=n(28),O=n(15),w=n(21),k=n(88),j=n(41),x=n(6),P=n(14),S=j.f,E=x.f,T=k.f,V=r.Symbol,F=r.JSON,A=F&&F.stringify,R=p("_hidden"),L=p("toPrimitive"),C={}.propertyIsEnumerable,I=c("symbol-registry"),N=c("symbols"),W=c("op-symbols"),D=Object.prototype,U="function"==typeof V,B=r.QObject,X=!B||!B.prototype||!B.prototype.findChild,q=u&&s(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=S(D,e);r&&delete D[e],E(t,e,n),r&&t!==D&&E(D,e,r)}:E,z=function(t){var e=N[t]=w(V.prototype);return e._k=t,e},J=U&&"symbol"==typeof V.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof V},G=function(t,e,n){return t===D&&G(W,e,n),m(t),e=g(e,!0),m(n),i(N,e)?(n.enumerable?(i(t,R)&&t[R][e]&&(t[R][e]=!1),n=w(n,{enumerable:O(0,!1)})):(i(t,R)||E(t,R,O(1,{})),t[R][e]=!0),q(t,e,n)):E(t,e,n)},K=function(t,e){m(t);for(var n,r=_(e=M(e)),i=0,u=r.length;u>i;)G(t,n=r[i++],e[n]);return t},$=function(t,e){return void 0===e?w(t):K(w(t),e)},H=function(t){var e=C.call(this,t=g(t,!0));return!(this===D&&i(N,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(N,t)||i(this,R)&&this[R][t])||e)},Y=function(t,e){if(t=M(t),e=g(e,!0),t!==D||!i(N,e)||i(W,e)){var n=S(t,e);return!n||!i(N,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=T(M(t)),r=[],u=0;n.length>u;)i(N,e=n[u++])||e==R||e==f||r.push(e);return r},Z=function(t){for(var e,n=t===D,r=T(n?W:M(t)),u=[],o=0;r.length>o;)!i(N,e=r[o++])||n&&!i(D,e)||u.push(N[e]);return u};U||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call(W,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),q(this,t,O(1,n))};return u&&X&&q(D,t,{configurable:!0,set:e}),z(t)},a(V.prototype,"toString",function(){return this._k}),j.f=Y,x.f=G,n(42).f=k.f=Q,n(22).f=H,n(43).f=Z,u&&!n(20)&&a(D,"propertyIsEnumerable",H,!0),h.f=function(t){return z(p(t))}),o(o.G+o.W+o.F*!U,{Symbol:V});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)p(tt[et++]);for(var tt=P(p.store),et=0;tt.length>et;)v(tt[et++]);o(o.S+o.F*!U,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=V(t)},keyFor:function(t){if(J(t))return y(I,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){X=!0},useSimple:function(){X=!1}}),o(o.S+o.F*!U,"Object",{create:$,defineProperty:G,defineProperties:K,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),F&&o(o.S+o.F*(!U||s(function(){var t=V();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!J(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!J(e))return e}),r[1]=e,A.apply(F,r)}}}),V.prototype[L]||n(9)(V.prototype,L,V.prototype.valueOf),l(V,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(29)("asyncIterator")},function(t,e,n){n(29)("observable")},function(t,e,n){n(93);for(var r=n(3),i=n(9),u=n(19),o=n(10)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var s=a[f],c=r[s],l=c&&c.prototype;l&&!l[o]&&i(l,o,s),u[s]=u.Array}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(138),s=r(f),c=function t(e){(0,u.default)(this,t),e.verification&&(this.verifications=(0,a.default)(e.verification).to(s.default))};e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(123),a=r(o),f=n(140),s=r(f),c=function t(e){(0,u.default)(this,t),this.id=e.attr("id"),this.sequence=e.attr("sequence"),this.conditionalAd=e.attr("conditionalAd")||!1,e.inLine?this.inLine=new a.default(e.inLine):e.wrapper&&(this.wrapper=new s.default(e.wrapper))};e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.content=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.authority=e.attr("authority"),this.value=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(112),s=r(f),c=function t(e){(0,u.default)(this,t),this.required=e.attr("required"),this.companion=(0,a.default)(e.companion).to(s.default).shift()};e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(56),s=r(f),c=n(53),l=r(c),d=n(52),p=r(d),h=n(31),v=r(h),y=n(107),_=r(y),b=n(113),m=r(b),M=n(114),g=r(M),O=n(33),w=r(O),k=function t(e){(0,u.default)(this,t),this.width=e.attr("width"),this.height=e.attr("height"),this.id=e.attr("id"),this.assetWidth=e.attr("assetWidth"),this.expandedWidth=e.attr("expandedWidth"),this.expandedHeight=e.attr("expandedHeight"),this.apiFramework=e.attr("apiFramework"),this.adslotID=e.attr("adslotID"),this.pxratio=e.attr("pxratio")||1,e.staticResource&&(this.staticResource=(0,a.default)(e.staticResource).to(s.default)),e.iFrameResource&&(this.iFrameResource=(0,a.default)(e.iFrameResource).to(l.default)),e.hTMLResource&&(this.htmlResource=(0,a.default)(e.hTMLResource).to(p.default)),e.adParameters&&(this.adParameters=(0,a.default)(e.adParameters).to(v.default)),e.altText&&(this.altText=(0,a.default)(e.altText).to(_.default).shift()),e.companionClickThrough&&(this.companionClickThrough=(0,a.default)(e.companionClickThrough).to(m.default).shift()),e.companionClickTracking&&(this.companionClickTracking=(0,a.default)(e.companionClickTracking).to(g.default)),e.trackingEvents&&e.trackingEvents.tracking&&(this.trackingEvents=(0,a.default)(e.trackingEvents.tracking).to(w.default))};e.default=k},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.type=e.attr("type"),this.xmlObject=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.apiFramework=e.attr("apiFramework"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return"[object Array]"===Object.prototype.toString.call(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){return(0,u.default)(t)&&0===t.length}Object.defineProperty(e,"__esModule",{value:!0});var i=n(51),u=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return(0,f.default)(t)&&(t+=""),!!(0,o.default)(t)&&s.test(t.trim())}Object.defineProperty(e,"__esModule",{value:!0});var u=n(51),o=r(u),a=n(121),f=r(a),s=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;e.default=i},function(t,e,n){"use strict";function r(t){return"number"==typeof t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null!=t.documentElement)return t.documentElement;var n=null;if("undefined"==typeof DOMParser&&"undefined"!=typeof ActiveXObject)return n=new ActiveXObject("Microsoft.XMLDOM"),n.async=!1,n.loadXML(t),n;try{n=i(t,e.DOMParser||DOMParser)}catch(t){throw new Error("Unsupported Environment")}return n}/*!
 * https://github.com/MailOnline/videojs-vast-vpaid/blob/master/src/scripts/utils/xml.js
 * MIT License
 */
function i(t,e){var n=new e,r=void 0;try{if(r=n.parseFromString(t,"application/xml"),(0,a.default)(t))throw new Error("empty string");if(u(r))throw new Error("xml parse error")}catch(e){throw new Error("Error: "+e.message+" from "+t)}return r}function u(t,e){try{var n=e.parseFromString("INVALID","text/xml"),r=n.getElementsByTagName("parsererror")[0].namespaceURI;return"http://www.w3.org/1999/xhtml"===r?t.getElementsByTagName("parsererror").length>0:t.getElementsByTagNameNS(r,"parsererror").length>0}catch(t){}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(119),a=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(48),s=r(f),c=n(108),l=r(c),d=n(135),p=r(d),h=n(54),v=r(h),y=n(32),_=r(y),b=n(55),m=r(b),M=n(49),g=r(M),O=n(34),w=r(O),k=function t(e){(0,u.default)(this,t),this.adSystem=e.adSystem?e.adSystem.keyValue:void 0,this.adTitle=e.adTitle?e.adTitle.keyValue:void 0,e.impression&&(this.impression=(0,a.default)(e.impression).to(v.default)),e.creatives&&(this.creatives=(0,a.default)(e.creatives.creative).to(s.default)),e.category&&(this.category=(0,a.default)(e.category).to(l.default)),this.description=e.description?e.description.keyValue:void 0,this.advertiser=e.advertiser?e.advertiser.keyValue:void 0,this.pricing=(0,a.default)(e.pricing).to(m.default).shift(),e.survey&&(this.survey=(0,a.default)(e.survey).to(p.default)),e.error&&(this.error=(0,a.default)(e.error).to(_.default)),this.viewableImpression=(0,a.default)(e.viewableImpression).to(w.default).shift(),this.adVerification=e.adVerification?e.adVerification.keyValue:void 0,e.extensions&&(this.extensions=(0,a.default)(e.extensions.extension).to(g.default))};e.default=k},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.default)(f.default.fromXML(t,e)).to(c.default).shift()}Object.defineProperty(e,"__esModule",{value:!0}),e.parseFromXML=void 0;var u=n(1),o=r(u),a=n(58),f=r(a),s=n(57),c=r(s);e.parseFromXML=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.type=e.attr("type"),this.apiFramework=e.attr("apiFramework"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.apiFramework=e.attr("apiFramework"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(129),s=r(f),c=n(31),l=r(c),d=n(33),p=r(d),h=n(139),v=r(h),y=function t(e){(0,u.default)(this,t),this.skipoffset=e.attr("skipoffset")||void 0,this.duration=e.duration?e.duration.keyValue:void 0,this.mediaFiles=(0,a.default)(e.mediaFiles).to(s.default).shift(),this.adParameters=(0,a.default)(e.adParameters).to(l.default).shift(),e.trackingEvents&&e.trackingEvents.tracking&&(this.trackingEvents=(0,a.default)(e.trackingEvents.tracking).to(p.default)),this.videoClicks=(0,a.default)(e.videoClicks).to(v.default).shift()};e.default=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.delivery=e.attr("delivery"),this.type=e.attr("type"),this.width=e.attr("width"),this.height=e.attr("height"),this.codec=e.attr("codec"),this.id=e.attr("id"),this.bitrate=e.attr("bitrate"),this.minBitrate=e.attr("minBitrate"),this.maxBitrate=e.attr("maxBitrate"),this.scalable=e.attr("scalable"),this.maintainAspectRatio=e.attr("maintainAspectRatio"),this.apiFramework=e.attr("apiFramework"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(137),s=r(f),c=n(128),l=r(c),d=n(130),p=r(d),h=n(125),v=r(h),y=function t(e){if((0,u.default)(this,t),!e.mediaFile)throw new s.default("`MediaFile` is required",101);e.mediaFile&&(this.mediaFile=(0,a.default)(e.mediaFile).to(l.default)),this.mezzanine=(0,a.default)(e.mezzanine).to(p.default).shift(),e.interactiveCreativeFile&&(this.interactiveCreativeFile=(0,a.default)(e.interactiveCreativeFile).to(v.default))};e.default=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(134),s=r(f),c=n(33),l=r(c),d=function t(e){(0,u.default)(this,t),this.nonLinear=(0,a.default)(e.nonLinear).to(s.default),e.trackingEvents&&e.trackingEvents.tracking&&(this.trackingEvents=(0,a.default)(e.trackingEvents.tracking).to(l.default))};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.id=e.attr("id"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(56),s=r(f),c=n(53),l=r(c),d=n(52),p=r(d),h=n(31),v=r(h),y=n(132),_=r(y),b=n(133),m=r(b),M=function t(e){(0,u.default)(this,t),this.staticResource=(0,a.default)(e.staticResource).to(s.default),this.iFrameResource=(0,a.default)(e.iFrameResource).to(l.default),this.hTMLResource=(0,a.default)(e.hTMLResource).to(p.default),this.adParameters=(0,a.default)(e.adParameters).to(v.default),this.nonLinearClickThrough=(0,a.default)(e.nonLinearClickThrough).to(_.default).shift(),this.nonLinearClickTracking=(0,a.default)(e.nonLinearClickTracking).to(m.default)};e.default=M},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.type=e.attr("type"),this.uri=e.keyValue};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(r),u=function t(e){(0,i.default)(this,t),this.idRegistry=e.attr("idRegistry")||"unknown",this.idValue=e.attr("idValue")||"unknown",this.content=e.keyValue};e.default=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(61),u=r(i),o=n(0),a=r(o),f=n(68),s=r(f),c=n(67),l=r(c),d=function(t){function e(t,n){return(0,a.default)(this,e),(0,s.default)(this,(e.__proto__||(0,u.default)(e)).call(this,"'VAST Error': "+(t||"Unidentified errors")+"("+(n||900)+")}",n||900))}return(0,l.default)(e,t),e}(Error);e.default=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(126),s=r(f),c=n(117),l=r(c),d=n(34),p=r(d),h=function t(e){(0,u.default)(this,t),this.vendor=e.attr("vendor"),this.javaScriptResources=(0,a.default)(this.javaScriptResource).to(s.default),this.flashResources=(0,a.default)(this.javaScriptResource).to(l.default),this.viewableImpression=(0,a.default)(this.javaScriptResource).to(p.default).shift()};e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(1),a=r(o),f=n(109),s=r(f),c=n(110),l=r(c),d=n(116),p=r(d),h=function t(e){(0,u.default)(this,t),this.clickThrough=(0,a.default)(e.clickThrough).to(s.default),this.clickTracking=(0,a.default)(e.clickTracking).to(l.default),this.customClick=(0,a.default)(e.customClick).to(p.default)};e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=r(i),o=n(50),a=r(o),f=n(1),s=r(f),c=n(32),l=r(c),d=n(48),p=r(d),h=n(55),v=r(h),y=n(54),_=r(y),b=n(49),m=r(b),M=n(34),g=r(M),O=n(105),w=r(O),k=function t(e){(0,u.default)(this,t),this.impressions=(0,s.default)(e.impression).to(_.default),this.VASTAdTagURI=(0,a.default)(e.vASTAdTagURI)?e.vASTAdTagURI.keyValue:void 0,this.adSystem=(0,a.default)(e.adSystem)?e.adSystem.keyValue:void 0,this.pricing=(0,s.default)(e.pricing).to(v.default).shift(),this.errors=(0,s.default)(e.error).to(l.default),this.viewableImpression=(0,s.default)(e.viewableImpression).to(g.default).shift(),this.adVerifications=(0,s.default)(e.adVerifications).to(w.default).shift(),e.extensions&&(this.extensions=(0,s.default)(e.extensions.extension).to(m.default)),this.creatives=(0,s.default)(e.creatives).to(p.default).shift(),this.followAdditionalWrappers=e.attr("followAdditionalWrappers")||!0,this.allowMultipleAds=e.attr("allowMultipleAds")||!1,this.fallbackOnNoAd=e.attr("fallbackOnNoAd")};e.default=k}])});