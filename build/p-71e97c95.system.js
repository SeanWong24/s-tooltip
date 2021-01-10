var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(l,o)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(t){return s([e,t])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],l=0,o=i.length;l<o;l++,a++)n[a]=i[l];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="s-tooltip";var a;var i;var l=false;var o=false;var s=typeof window!=="undefined"?window:{};var f=s.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var $=e("p",(function(e){return Promise.resolve(e)}));var c=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var v="{visibility:hidden}.hydrated{visibility:inherit}";var h=function(e,t){if(t===void 0){t=""}{return function(){return}}};var d=function(e,t){{return function(){return}}};var p=new WeakMap;var m=function(e,t,r){var n=he.get(e);if(c&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}he.set(e,n)};var g=function(e,t,r,n){var a=b(t);var i=he.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var l=p.get(e);var o=void 0;if(!l){p.set(e,l=new Set)}if(!l.has(a)){{{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var y=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=h("attachStyles",t.$tagName$);var i=g(r.shadowRoot?r.shadowRoot:r.getRootNode(),t);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var b=function(e,t){return"sc-"+e.$tagName$};var w={};var _=function(e){return e!=null};var R=function(e){e=typeof e;return e==="object"||e==="function"};var S=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var l=false;var o=[];var s=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!R(a)){a=String(a)}if(i&&l){o[o.length-1].$text$+=a}else{o.push(i?E(null,a):a)}l=i}}};s(r);if(t){{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=E(e,null);u.$attrs$=t;if(o.length>0){u.$children$=o}return u}));var E=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var N=e("H",{});var j=function(e){return e&&e.$tag$===N};var C=function(e,t,r,n,a,i){if(r!==n){var l=ue(e,t);var o=t.toLowerCase();if(t==="class"){var s=e.classList;var f=x(r);var u=x(n);s.remove.apply(s,f.filter((function(e){return e&&!u.includes(e)})));s.add.apply(s,u.filter((function(e){return e&&!f.includes(e)})))}else{var $=R(n);if((l||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(e){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!$){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var M=/\s/;var x=function(e){return!e?[]:e.split(M)};var k=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||w;var l=t.$attrs$||w;{for(n in i){if(!(n in l)){C(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){C(a,n,i[n],l[n],r,t.$flags$)}};var A=function(e,t,r,n){var i=t.$children$[r];var o=0;var s;var u;{s=i.$elm$=f.createElement(i.$tag$);{k(null,i,l)}if(_(a)&&s["s-si"]!==a){s.classList.add(s["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){u=A(e,i,o);if(u){s.appendChild(u)}}}}return s};var P=function(e,t,r,n,a,l){var o=e;var s;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=l;++a){if(n[a]){s=A(null,r,a);if(s){n[a].$elm$=s;o.insertBefore(s,t)}}}};var O=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var T=function(e,t,r,n){var a=0;var i=0;var l=t.length-1;var o=t[0];var s=t[l];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=l&&i<=f){if(o==null){o=t[++a]}else if(s==null){s=t[--l]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(L(o,u)){I(o,u);o=t[++a];u=n[++i]}else if(L(s,$)){I(s,$);s=t[--l];$=n[--f]}else if(L(o,$)){I(o,$);e.insertBefore(o.$elm$,s.$elm$.nextSibling);o=t[++a];$=n[--f]}else if(L(s,u)){I(s,u);e.insertBefore(s.$elm$,o.$elm$);s=t[--l];u=n[++i]}else{{c=A(t&&t[i],r,i);u=n[++i]}if(c){{o.$elm$.parentNode.insertBefore(c,o.$elm$)}}}}if(a>l){P(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){O(t,a,l)}};var L=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var I=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;{{if(i==="slot");else{k(e,t,l)}}if(n!==null&&a!==null){T(r,n,t,a)}else if(a!==null){P(r,null,t,a,0,a.length-1)}else if(n!==null){O(n,0,n.length-1)}}};var B=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var l=e.$vnode$||E(null,null);var o=j(t)?t:S(null,null,t);i=r.tagName;if(n.$attrsToReflect$){o.$attrs$=o.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return o.$attrs$[n]=r[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=l.$elm$=r.shadowRoot||r;{a=r["s-sc"]}I(l,o)};var z=e("g",(function(e){return oe(e).$hostElement$}));var U=function(e,t,r){var n=u.ce(t,r);e.dispatchEvent(n);return n};var H=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var V=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}H(e,e.$ancestorComponent$);var r=function(){return q(e,t)};return we(r)};var q=function(e,t){var r=h("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;r();return K(a,(function(){return F(e,n,t)}))};var F=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,l,o,s;return __generator(this,(function(f){r=e.$hostElement$;a=h("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){y(e)}l=h("render",e.$cmpMeta$.$tagName$);{{{B(e,W(e,t))}}}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}l();a();{o=r["s-p"];s=function(){return G(e)};if(o.length===0){s()}else{Promise.all(o).then(s);e.$flags$|=4;o.length=0}}return[2]}))}))};var W=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){$e(t,e.$hostElement$)}return t};var G=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=h("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Q(r)}n();{e.$onReadyResolve$(r);if(!a){D()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){be((function(){return V(e,false)}))}e.$flags$&=~(4|512)}};var D=function(e){{Q(f.documentElement)}be((function(){return U(s,"appload",{detail:{namespace:n}})}))};var J=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){$e(e)}}return undefined};var K=function(e,t){return e&&e.then?e.then(t):t()};var Q=function(e){return e.classList.add("hydrated")};var X=function(e,t){if(e!=null&&!R(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Y=function(e,t){return oe(e).$instanceValues$.get(t)};var Z=function(e,t,r,n){var a=oe(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var o=a.$flags$;var s=a.$lazyInstance$;r=X(r,n.$members$[t][0]);if((!(o&8)||l===undefined)&&r!==l){a.$instanceValues$.set(t,r);if(s){if(n.$watchers$&&o&128){var f=n.$watchers$[t];if(f){f.map((function(e){try{s[e](r,l,t)}catch(e){$e(e,i)}}))}}if((o&(2|16))===2){V(a,false)}}}};var ee=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Y(this,n)},set:function(e){Z(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;u.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var te=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,l,o,s,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=ve(n);if(!i.then)return[3,2];e=d();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}ee(i,n,2);i.isProxied=true}r=h("createInstance",n.$tagName$);{t.$flags$|=8}try{new i(t)}catch(e){$e(e)}{t.$flags$&=~8}{t.$flags$|=128}r();re(t.$lazyInstance$);if(i.style){a=i.style;l=b(n);if(!he.has(l)){o=h("registerStyles",n.$tagName$);m(l,a,!!(n.$flags$&1));o()}}u.label=3;case 3:s=t.$ancestorComponent$;f=function(){return V(t,true)};if(s&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}}))}))};var re=function(e){{J(e,"connectedCallback")}};var ne=function(e){if((u.$flags$&1)===0){var t=oe(e);var r=t.$cmpMeta$;var n=h("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){H(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{te(e,t,r)}}else{re(t.$lazyInstance$)}n()}};var ae=function(e){if((u.$flags$&1)===0){var t=oe(e)}};var ie=e("b",(function(e,t){if(t===void 0){t={}}var r=h();var n=[];var a=t.exclude||[];var i=s.customElements;var l=f.head;var o=l.querySelector("meta[charset]");var $=f.createElement("style");var c=[];var d;var p=true;Object.assign(u,t);u.$resourcesUrl$=new URL(t.resourcesUrl||"./",f.baseURI).href;e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var l=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;fe(t,r);if(r.$flags$&1){{{t.attachShadow({mode:"open"})}}}return n}t.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(p){c.push(this)}else{u.jmp((function(){return ne(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return ae(e)}))};t.prototype.componentOnReady=function(){return oe(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ee(o,r,1))}}))}));{$.innerHTML=n+v;$.setAttribute("data-styles","");l.insertBefore($,o?o.nextSibling:l.firstChild)}p=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{u.jmp((function(){return d=setTimeout(D,30)}))}}r()}));var le=new WeakMap;var oe=function(e){return le.get(e)};var se=e("r",(function(e,t){return le.set(t.$lazyInstance$=e,t)}));var fe=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return le.set(e,r)};var ue=function(e,t){return t in e};var $e=function(e,t){return(0,console.error)(e,t)};var ce=new Map;var ve=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=ce.get(i);if(l){return l[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{ce.set(i,e)}return e[a]}),$e)};var he=new Map;var de=[];var pe=[];var me=function(e,t){return function(r){e.push(r);if(!o){o=true;if(t&&u.$flags$&4){be(ye)}else{u.raf(ye)}}}};var ge=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){$e(e)}}e.length=0};var ye=function(){ge(de);{ge(pe);if(o=de.length>0){u.raf(ye)}}};var be=function(e){return $().then(e)};var we=me(pe,true)}}}));