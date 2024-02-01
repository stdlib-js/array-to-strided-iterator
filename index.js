// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).stridedarray2iterator=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function $(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&J.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=Z()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[D],r=z(e,D);try{e[D]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[D]=t:delete e[D],n}:function(e){return X.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=Z();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return $(e)||re(e)}function ne(){return new Function("return this;")()}Y(te,"isPrimitive",$),Y(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var fe=function(e){if(arguments.length){if(!$(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ue)return ue;if(ie)return ie;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=fe.document&&fe.document.childNodes,ce=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;Y(se,"REGEXP",ye);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function pe(e){return null!==e&&"object"==typeof e}function ge(e){return pe(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function me(e){var r,t,n;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return ge(e)?"Buffer":t}Y(pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pe));var we="function"==typeof W||"object"==typeof ce||"function"==typeof le?function(e){return me(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?me(e).toLowerCase():r};function be(e){return"function"===we(e)}var ve=Math.floor;function de(e){return ve(e)===e}function Ee(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ae(e){return"number"==typeof e}var Te=Number,_e=Te.prototype.toString;var xe=Z();function je(e){return"object"==typeof e&&(e instanceof Te||(xe?function(e){try{return _e.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ve(e){return Ae(e)||je(e)}Y(Ve,"isPrimitive",Ae),Y(Ve,"isObject",je);var ke=Number.POSITIVE_INFINITY,Le=Te.NEGATIVE_INFINITY;function Se(e){return e<ke&&e>Le&&de(e)}function Re(e){return Ae(e)&&Se(e)}function Be(e){return je(e)&&Se(e.valueOf())}function Ie(e){return Re(e)||Be(e)}function Ce(e){return Re(e)&&e>=0}function Fe(e){return Be(e)&&e.valueOf()>=0}function Oe(e){return Ce(e)||Fe(e)}Y(Ie,"isPrimitive",Re),Y(Ie,"isObject",Be),Y(Oe,"isPrimitive",Ce),Y(Oe,"isObject",Fe);var Me="function";function Ue(e){return typeof e.get===Me&&typeof e.set===Me}function Ne(){return"function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator}var Pe=Ne()?Symbol.iterator:null,Ye={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function We(e){var r=Ye[e];return"function"==typeof r?r:Ye.default}var $e={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Ge(e){var r=$e[e];return"function"==typeof r?r:$e.default}var Ze={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Xe="function"==typeof Float64Array;var Je="function"==typeof Float64Array?Float64Array:null;var ze="function"==typeof Float64Array?Float64Array:void 0;var qe=function(){var e,r,t;if("function"!=typeof Je)return!1;try{r=new Je([1,3.14,-3.14,NaN]),t=r,e=(Xe&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")},De="function"==typeof Float32Array;var He="function"==typeof Float32Array?Float32Array:null;var Ke="function"==typeof Float32Array?Float32Array:void 0;var Qe=function(){var e,r,t;if("function"!=typeof He)return!1;try{r=new He([1,3.14,-3.14,5e40]),t=r,e=(De&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ke}catch(r){e=!1}return e}()?Ke:function(){throw new Error("not implemented")},er="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var tr="function"==typeof Uint32Array?Uint32Array:void 0;var nr=function(){var e,r,t;if("function"!=typeof rr)return!1;try{r=new rr(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(er&&t instanceof Uint32Array||"[object Uint32Array]"===H(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?tr:function(){throw new Error("not implemented")},ir="function"==typeof Int32Array;var or="function"==typeof Int32Array?Int32Array:null;var ar="function"==typeof Int32Array?Int32Array:void 0;var ur=function(){var e,r,t;if("function"!=typeof or)return!1;try{r=new or([1,3.14,-3.14,2147483648]),t=r,e=(ir&&t instanceof Int32Array||"[object Int32Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?ar:function(){throw new Error("not implemented")},fr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var cr="function"==typeof Uint16Array?Uint16Array:void 0;var sr=function(){var e,r,t;if("function"!=typeof lr)return!1;try{r=new lr(r=[1,3.14,-3.14,65536,65537]),t=r,e=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===H(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?cr:function(){throw new Error("not implemented")},yr="function"==typeof Int16Array;var hr="function"==typeof Int16Array?Int16Array:null;var pr="function"==typeof Int16Array?Int16Array:void 0;var gr=function(){var e,r,t;if("function"!=typeof hr)return!1;try{r=new hr([1,3.14,-3.14,32768]),t=r,e=(yr&&t instanceof Int16Array||"[object Int16Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?pr:function(){throw new Error("not implemented")},mr="function"==typeof Uint8Array;var wr="function"==typeof Uint8Array?Uint8Array:null;var br="function"==typeof Uint8Array?Uint8Array:void 0;var vr=function(){var e,r,t;if("function"!=typeof wr)return!1;try{r=new wr(r=[1,3.14,-3.14,256,257]),t=r,e=(mr&&t instanceof Uint8Array||"[object Uint8Array]"===H(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint8ClampedArray;var Er="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Ar="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Tr=function(){var e,r,t;if("function"!=typeof Er)return!1;try{r=new Er([-1,0,1,3.14,4.99,255,256]),t=r,e=(dr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===H(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int8Array;var xr="function"==typeof Int8Array?Int8Array:null;var jr="function"==typeof Int8Array?Int8Array:void 0;var Vr=function(){var e,r,t;if("function"!=typeof xr)return!1;try{r=new xr([1,3.14,-3.14,128]),t=r,e=(_r&&t instanceof Int8Array||"[object Int8Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?jr:function(){throw new Error("not implemented")};function kr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=4294967295}var Lr="function"==typeof ArrayBuffer;function Sr(e){return Lr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===H(e)}function Rr(e){return"object"==typeof e&&null!==e&&!he(e)}function Br(e,r){if(!(this instanceof Br))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ae(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ae(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Br,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"byteLength",16),Y(Br.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Br.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ir="function"==typeof Math.fround?Math.fround:null,Cr=new Qe(1);var Fr="function"==typeof Ir?Ir:function(e){return Cr[0]=e,Cr[0]};function Or(e,r){if(!(this instanceof Or))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ae(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ae(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fr(r)}),this}function Mr(e){return e instanceof Br||e instanceof Or||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ur(e){return de(e/2)}function Nr(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Pr(e){return e.re}function Yr(e){return e.im}function Wr(e,r){return new Qe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function $r(e,r){return new qe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Gr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Mr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Pr(n),Yr(n))}return r}function Zr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Mr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Pr(o),Yr(o))}return n}function Xr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Mr(n=r[i]))return null;e[o]=Pr(n),e[o+1]=Yr(n),o+=2}return e}Y(Or,"BYTES_PER_ELEMENT",4),Y(Or.prototype,"BYTES_PER_ELEMENT",4),Y(Or.prototype,"byteLength",8),Y(Or.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Or.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Jr=2*Qe.BYTES_PER_ELEMENT,zr=Ne();function qr(e){return e instanceof Qr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Dr(e){return e===Qr||"Complex128Array"===e.name}function Hr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Jr}function Kr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Jr}function Qr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Qr))return 0===r?new Qr:1===r?new Qr(arguments[0]):2===r?new Qr(arguments[0],arguments[1]):new Qr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Qe(0);else if(1===r)if(Ce(arguments[0]))t=new Qe(2*arguments[0]);else if(Ee(arguments[0]))if((n=(t=arguments[0]).length)&&he(t)&&Mr(t[0])){if(null===(t=Xr(new Qe(2*n),t))){if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Qe(arguments[0])}}else{if(Hr(t))t=Wr(t,0);else if(Kr(t))t=$r(t,0);else if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Qe(t)}else if(Sr(arguments[0])){if(!de((t=arguments[0]).byteLength/Jr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Jr,t.byteLength));t=new Qe(t)}else{if(!Rr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===zr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!be(t[Pe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!be((t=t[Pe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Gr(t))instanceof Error)throw t;t=new Qe(t)}else{if(!Sr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/Jr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Jr,e));if(2===r){if(!de((n=t.byteLength-e)/Jr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Jr,n));t=new Qe(t,e)}else{if(!Ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Jr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Jr));t=new Qe(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function et(e){return e.re}function rt(e){return e.im}function tt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Mr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(et(n),rt(n))}return r}function nt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Mr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(et(o),rt(o))}return n}function it(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Mr(n=r[i]))return null;e[o]=et(n),e[o+1]=rt(n),o+=2}return e}Y(Qr,"BYTES_PER_ELEMENT",Jr),Y(Qr,"name","Complex64Array"),Y(Qr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(qr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,e.get(s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ee(e)){if(n){for(f=e.length,u=e.get&&e.set?We("default"):Ge("default"),s=0;s<f;s++)if(!Mr(u(e,s))){l=!0;break}if(l){if(!Ur(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,u(e,s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Rr(e)&&zr&&be(e[Pe])){if(!be((o=e[Pe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Zr(o,n,r):Gr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Qr,"of",(function(){var e,r;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(Qr.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(Qr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(Qr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Qr.prototype,"BYTES_PER_ELEMENT",Qr.BYTES_PER_ELEMENT),Y(Qr.prototype,"copyWithin",(function(e,r){if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Qr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Or(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Pe&&Y(t,Pe,(function(){return r.entries()})),t})),Y(Qr.prototype,"get",(function(e){var r;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Or((r=this._buffer)[e*=2],r[e+1])})),Nr(Qr.prototype,"length",(function(){return this._length})),Y(Qr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Mr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Pr(e),void(n[t+1]=Yr(e))}if(qr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Qe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ee(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Mr(e[f])){o=!0;break}if(o){if(!Ur(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Qe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Pr(u),n[t+1]=Yr(u),t+=2}}));var ot=2*qe.BYTES_PER_ELEMENT,at=Ne();function ut(e){return e instanceof st||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ft(e){return e===st||"Complex64Array"===e.name}function lt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ot/2}function ct(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ot}function st(){var e,r,t,n;if(r=arguments.length,!(this instanceof st))return 0===r?new st:1===r?new st(arguments[0]):2===r?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===r)t=new qe(0);else if(1===r)if(Ce(arguments[0]))t=new qe(2*arguments[0]);else if(Ee(arguments[0]))if((n=(t=arguments[0]).length)&&he(t)&&Mr(t[0])){if(null===(t=it(new qe(2*n),t))){if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qe(arguments[0])}}else{if(lt(t))t=Wr(t,0);else if(ct(t))t=$r(t,0);else if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new qe(t)}else if(Sr(arguments[0])){if(!de((t=arguments[0]).byteLength/ot))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new qe(t)}else{if(!Rr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!be(t[Pe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!be((t=t[Pe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new qe(t)}else{if(!Sr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ce(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/ot))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,e));if(2===r){if(!de((n=t.byteLength-e)/ot))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new qe(t,e)}else{if(!Ce(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new qe(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(st,"BYTES_PER_ELEMENT",ot),Y(st,"name","Complex128Array"),Y(st,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!be(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ut(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,e.get(s),s)))o[y]=et(c),o[y+1]=rt(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ee(e)){if(n){for(f=e.length,u=e.get&&e.set?We("default"):Ge("default"),s=0;s<f;s++)if(!Mr(u(e,s))){l=!0;break}if(l){if(!Ur(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,u(e,s),s)))o[y]=et(c),o[y+1]=rt(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Rr(e)&&at&&be(e[Pe])){if(!be((o=e[Pe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?nt(o,n,r):tt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(st,"of",(function(){var e,r;if(!be(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(st.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),Y(st.prototype,"copyWithin",(function(e,r){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(st.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Br(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Pe&&Y(t,Pe,(function(){return r.entries()})),t})),Y(st.prototype,"get",(function(e){var r;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ce(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Br((r=this._buffer)[e*=2],r[e+1])})),Nr(st.prototype,"length",(function(){return this._length})),Y(st.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ce(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Mr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=et(e),void(n[t+1]=rt(e))}if(ut(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ot,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new qe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ee(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Mr(e[f])){o=!0;break}if(o){if(!Ur(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ot,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new qe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=et(u),n[t+1]=rt(u),t+=2}}));var yt=[qe,Qe,ur,nr,gr,sr,Vr,vr,Tr,Qr,st],ht=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],pt=ht.length;function gt(e){var r;if(he(e))return"generic";if(ge(e))return null;for(r=0;r<pt;r++)if(e instanceof yt[r])return ht[r];return Ze[me(e)]||null}return function e(r,t,n,i){var o,a,u,f,l,c,s,y;if(!Ce(r))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r));if(!Ee(t))throw new TypeError(B("invalid argument. Second argument must be an array-like object. Value: `%s`.",t));if(!Re(n))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(!Ce(i))throw new TypeError(B("invalid argument. Fourth argument must be a nonnegative integer. Value: `%s`.",i));if(arguments.length>4){if(!be(f=arguments[4]))throw new TypeError(B("invalid argument. Fifth argument must be a function. Value: `%s`.",f));o=arguments[5]}return l=i,y=-1,Y(a={},"next",f?h:p),Y(a,"return",g),Pe&&Y(a,Pe,m),s=gt(t),c=Ue(t)?We(s):Ge(s),a;function h(){var e;return y+=1,u||y>=r?{done:!0}:(e=f.call(o,c(t,l),l,y,t),l+=n,{value:e,done:!1})}function p(){var e;return y+=1,u||y>=r?{done:!0}:(e=c(t,l),l+=n,{value:e,done:!1})}function g(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function m(){return f?e(r,t,n,i,f,o):e(r,t,n,i)}}}));
//# sourceMappingURL=index.js.map
