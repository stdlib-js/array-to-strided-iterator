// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function h(j,p,v,f){var c,g,u,b,y,x,w,E;if(!s(j))throw new TypeError(a("01h2d,MG",j));if(!t(p))throw new TypeError(a("01h2y,Ix",p));if(!n(v))throw new TypeError(a("01h2z,GL",v));if(!s(f))throw new TypeError(a("01h30,Lq",f));if(arguments.length>4){if(!r(b=arguments[4]))throw new TypeError(a("01h31,Lk",b));c=arguments[5]}return y=f,E=-1,e(g={},"next",b?T:L),e(g,"return",G),o&&e(g,o,k),w=l(p),x=i(p)?d(w):m(w),g;function T(){var e;return E+=1,u||E>=j?{done:!0}:(e=b.call(c,x(p,y),y,E,p),y+=v,{value:e,done:!1})}function L(){var e;return E+=1,u||E>=j?{done:!0}:(e=x(p,y),y+=v,{value:e,done:!1})}function G(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function k(){return b?h(j,p,v,f,b,c):h(j,p,v,f)}}export{h as default};
//# sourceMappingURL=index.mjs.map
