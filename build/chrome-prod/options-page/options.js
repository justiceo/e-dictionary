(()=>{var Hf=Object.create;var _l=Object.defineProperty;var mm=Object.getOwnPropertyDescriptor;var Gf=Object.getOwnPropertyNames;var Wf=Object.getPrototypeOf,Yf=Object.prototype.hasOwnProperty;var um=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),fm=(n,e)=>{for(var i in e)_l(n,i,{get:e[i],enumerable:!0})},qf=(n,e,i,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of Gf(e))!Yf.call(n,p)&&p!==i&&_l(n,p,{get:()=>e[p],enumerable:!(c=mm(e,p))||c.enumerable});return n};var hm=(n,e,i)=>(i=n!=null?Hf(Wf(n)):{},qf(e||!n||!n.__esModule?_l(i,"default",{value:n,enumerable:!0}):i,n));var gm=(n,e,i,c)=>{for(var p=c>1?void 0:c?mm(e,i):e,h=n.length-1,v;h>=0;h--)(v=n[h])&&(p=(c?v(e,i,p):v(p))||p);return c&&p&&_l(e,i,p),p};var vm=um(bm=>{(function(){"use strict";var n;function e(t){var r=0;return function(){return r<t.length?{done:!1,value:t[r++]}:{done:!0}}}var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,o){return t==Array.prototype||t==Object.prototype||(t[r]=o.value),t};function c(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var p=c(this);function h(t,r){if(r)t:{var o=p;t=t.split(".");for(var s=0;s<t.length-1;s++){var l=t[s];if(!(l in o))break t;o=o[l]}t=t[t.length-1],s=o[t],r=r(s),r!=s&&r!=null&&i(o,t,{configurable:!0,writable:!0,value:r})}}h("Symbol",function(t){function r(l){if(this instanceof r)throw new TypeError("Symbol is not a constructor");return new o("jscomp_symbol_"+(l||"")+"_"+s++,l)}function o(l,m){this.g=l,i(this,"description",{configurable:!0,writable:!0,value:m})}if(t)return t;o.prototype.toString=function(){return this.g};var s=0;return r}),h("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var r="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),o=0;o<r.length;o++){var s=p[r[o]];typeof s=="function"&&typeof s.prototype[t]!="function"&&i(s.prototype,t,{configurable:!0,writable:!0,value:function(){return v(e(this))}})}return t});function v(t){return t={next:t},t[Symbol.iterator]=function(){return this},t}function k(t){var r=typeof Symbol<"u"&&Symbol.iterator&&t[Symbol.iterator];return r?r.call(t):{next:e(t)}}function E(t){if(!(t instanceof Array)){t=k(t);for(var r,o=[];!(r=t.next()).done;)o.push(r.value);t=o}return t}var C;if(typeof Object.setPrototypeOf=="function")C=Object.setPrototypeOf;else{var I;t:{var D={a:!0},H={};try{H.__proto__=D,I=H.a;break t}catch{}I=!1}C=I?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var at=C;function J(){this.u=!1,this.h=null,this.Oa=void 0,this.g=1,this.ea=0,this.i=null}function vt(t){if(t.u)throw new TypeError("Generator is already running");t.u=!0}J.prototype.O=function(t){this.Oa=t};function St(t,r){t.i={ab:r,fb:!0},t.g=t.ea}J.prototype.return=function(t){this.i={return:t},this.g=this.ea};function Ht(t,r){return t.g=3,{value:r}}function Zt(t){this.g=new J,this.h=t}function Pe(t,r){vt(t.g);var o=t.g.h;return o?ie(t,"return"in o?o.return:function(s){return{value:s,done:!0}},r,t.g.return):(t.g.return(r),Gt(t))}function ie(t,r,o,s){try{var l=r.call(t.g.h,o);if(!(l instanceof Object))throw new TypeError("Iterator result "+l+" is not an object");if(!l.done)return t.g.u=!1,l;var m=l.value}catch(f){return t.g.h=null,St(t.g,f),Gt(t)}return t.g.h=null,s.call(t.g,m),Gt(t)}function Gt(t){for(;t.g.g;)try{var r=t.h(t.g);if(r)return t.g.u=!1,{value:r.value,done:!1}}catch(o){t.g.Oa=void 0,St(t.g,o)}if(t.g.u=!1,t.g.i){if(r=t.g.i,t.g.i=null,r.fb)throw r.ab;return{value:r.return,done:!0}}return{value:void 0,done:!0}}function gr(t){this.next=function(r){return vt(t.g),t.g.h?r=ie(t,t.g.h.next,r,t.g.O):(t.g.O(r),r=Gt(t)),r},this.throw=function(r){return vt(t.g),t.g.h?r=ie(t,t.g.h.throw,r,t.g.O):(St(t.g,r),r=Gt(t)),r},this.return=function(r){return Pe(t,r)},this[Symbol.iterator]=function(){return this}}function Wt(t,r){return r=new gr(new Zt(r)),at&&t.prototype&&at(r,t.prototype),r}Array.from||(Array.from=function(t){return[].slice.call(t)}),Object.assign||(Object.assign=function(t){for(var r=[].slice.call(arguments,1),o=0,s;o<r.length;o++)if(s=r[o])for(var l=t,m=Object.keys(s),f=0;f<m.length;f++){var b=m[f];l[b]=s[b]}return t});var ae=setTimeout;function Jt(){}function Yt(t,r){return function(){t.apply(r,arguments)}}function wt(t){if(!(this instanceof wt))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this.N=0,this.Ha=!1,this.I=void 0,this.ba=[],Hr(t,this)}function Fe(t,r){for(;t.N===3;)t=t.I;t.N===0?t.ba.push(r):(t.Ha=!0,Gr(function(){var o=t.N===1?r.hb:r.ib;if(o===null)(t.N===1?Ur:Qe)(r.promise,t.I);else{try{var s=o(t.I)}catch(l){Qe(r.promise,l);return}Ur(r.promise,s)}}))}function Ur(t,r){try{if(r===t)throw new TypeError("A promise cannot be resolved with itself.");if(r&&(typeof r=="object"||typeof r=="function")){var o=r.then;if(r instanceof wt){t.N=3,t.I=r,br(t);return}if(typeof o=="function"){Hr(Yt(o,r),t);return}}t.N=1,t.I=r,br(t)}catch(s){Qe(t,s)}}function Qe(t,r){t.N=2,t.I=r,br(t)}function br(t){t.N===2&&t.ba.length===0&&Gr(function(){t.Ha||typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t.I)});for(var r=0,o=t.ba.length;r<o;r++)Fe(t,t.ba[r]);t.ba=null}function gn(t,r,o){this.hb=typeof t=="function"?t:null,this.ib=typeof r=="function"?r:null,this.promise=o}function Hr(t,r){var o=!1;try{t(function(s){o||(o=!0,Ur(r,s))},function(s){o||(o=!0,Qe(r,s))})}catch(s){o||(o=!0,Qe(r,s))}}wt.prototype.catch=function(t){return this.then(null,t)},wt.prototype.then=function(t,r){var o=new this.constructor(Jt);return Fe(this,new gn(t,r,o)),o},wt.prototype.finally=function(t){var r=this.constructor;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){return r.reject(o)})})};function A(t){return new wt(function(r,o){function s(b,_){try{if(_&&(typeof _=="object"||typeof _=="function")){var x=_.then;if(typeof x=="function"){x.call(_,function(N){s(b,N)},o);return}}l[b]=_,--m===0&&r(l)}catch(N){o(N)}}if(!t||typeof t.length>"u")return o(new TypeError("Promise.all accepts an array"));var l=Array.prototype.slice.call(t);if(l.length===0)return r([]);for(var m=l.length,f=0;f<l.length;f++)s(f,l[f])})}function Le(t){return t&&typeof t=="object"&&t.constructor===wt?t:new wt(function(r){r(t)})}function de(t){return new wt(function(r,o){o(t)})}function bn(t){return new wt(function(r,o){if(!t||typeof t.length>"u")return o(new TypeError("Promise.race accepts an array"));for(var s=0,l=t.length;s<l;s++)Le(t[s]).then(r,o)})}var Gr=typeof setImmediate=="function"&&function(t){setImmediate(t)}||function(t){ae(t,0)};if(!window.Promise){window.Promise=wt,wt.prototype.then=wt.prototype.then,wt.all=A,wt.race=bn,wt.resolve=Le,wt.reject=de;var vr=document.createTextNode(""),se=[];new MutationObserver(function(){for(var t=se.length,r=0;r<t;r++)se[r]();se.splice(0,t)}).observe(vr,{characterData:!0}),Gr=function(t){se.push(t),vr.textContent=0<vr.textContent.length?"":"a"}}(function(t,r){if(!(r in t)){var o=typeof global==typeof o?window:global,s=0,l=String(Math.random()),m="__symbol@@"+l,f=t.getOwnPropertyNames,b=t.getOwnPropertyDescriptor,_=t.create,x=t.keys,N=t.freeze||t,j=t.defineProperty,kt=t.defineProperties,dt=b(t,"getOwnPropertyNames"),z=t.prototype,bt=z.hasOwnProperty,pt=z.propertyIsEnumerable,Ut=z.toString,et=function(R,mt,Ot){bt.call(R,m)||j(R,m,{enumerable:!1,configurable:!1,writable:!1,value:{}}),R[m]["@@"+mt]=Ot},Oe=function(R,mt){var Ot=_(R);return f(mt).forEach(function(P){zn.call(mt,P)&&Ga(Ot,P,mt[P])}),Ot},G=function(){},$n=function(R){return R!=m&&!bt.call(lr,R)},sr=function(R){return R!=m&&bt.call(lr,R)},zn=function(R){var mt=String(R);return sr(mt)?bt.call(this,mt)&&!!this[m]&&this[m]["@@"+mt]:pt.call(this,R)},T=function(R){return j(z,R,{enumerable:!1,configurable:!0,get:G,set:function(mt){So(this,R,{enumerable:!1,configurable:!0,writable:!0,value:mt}),et(this,R,!0)}}),lr[R]=j(t(R),"constructor",Wc),N(lr[R])},Ct=function R(mt){if(this instanceof R)throw new TypeError("Symbol is not a constructor");return T("__symbol:".concat(mt||"",l,++s))},lr=_(null),Wc={value:Ct},hl=function(R){return lr[R]},Ga=function(R,mt,Ot){var P=String(mt);if(sr(P)){if(mt=So,Ot.enumerable){var F=_(Ot);F.enumerable=!1}else F=Ot;mt(R,P,F),et(R,P,!!Ot.enumerable)}else j(R,mt,Ot);return R},gl=function(R){return f(R).filter(sr).map(hl)};dt.value=Ga,j(t,"defineProperty",dt),dt.value=gl,j(t,r,dt),dt.value=function(R){return f(R).filter($n)},j(t,"getOwnPropertyNames",dt),dt.value=function(R,mt){var Ot=gl(mt);return Ot.length?x(mt).concat(Ot).forEach(function(P){zn.call(mt,P)&&Ga(R,P,mt[P])}):kt(R,mt),R},j(t,"defineProperties",dt),dt.value=zn,j(z,"propertyIsEnumerable",dt),dt.value=Ct,j(o,"Symbol",dt),dt.value=function(R){return R="__symbol:".concat("__symbol:",R,l),R in z?lr[R]:T(R)},j(Ct,"for",dt),dt.value=function(R){if($n(R))throw new TypeError(R+" is not a symbol");if(bt.call(lr,R)&&(R=R.slice(10),R.slice(0,10)==="__symbol:"&&(R=R.slice(10),R!==l)))return R=R.slice(0,R.length-l.length),0<R.length?R:void 0},j(Ct,"keyFor",dt),dt.value=function(R,mt){var Ot=b(R,mt);return Ot&&sr(mt)&&(Ot.enumerable=zn.call(R,mt)),Ot},j(t,"getOwnPropertyDescriptor",dt),dt.value=function(R,mt){return arguments.length===1||typeof mt>"u"?_(R):Oe(R,mt)},j(t,"create",dt),dt.value=function(){var R=Ut.call(this);return R==="[object String]"&&sr(this)?"[object Symbol]":R},j(z,"toString",dt);try{if(_(j({},"__symbol:",{get:function(){return j(this,"__symbol:",{value:!0})["__symbol:"]}}))["__symbol:"]===!0)var So=j;else throw"IE11"}catch{So=function(mt,Ot,P){var F=b(z,Ot);delete z[Ot],j(mt,Ot,P),j(z,Ot,F)}}}})(Object,"getOwnPropertySymbols"),function(t,r){var o=t.defineProperty,s=t.prototype,l=s.toString,m;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){f in r||(o(r,f,{value:r(f)}),f==="toStringTag"&&(m=t.getOwnPropertyDescriptor(s,"toString"),m.value=function(){var b=l.call(this),_=this==null?this:this[r.toStringTag];return _==null?b:"[object "+_+"]"},o(s,"toString",m)))})}(Object,Symbol),function(t,r,o){function s(){return this}r[t]||(r[t]=function(){var l=0,m=this,f={next:function(){var b=m.length<=l;return b?{done:b}:{done:b,value:m[l++]}}};return f[t]=s,f}),o[t]||(o[t]=function(){var l=String.fromCodePoint,m=this,f=0,b=m.length,_={next:function(){var x=b<=f,N=x?"":l(m.codePointAt(f));return f+=N.length,x?{done:x}:{done:x,value:N}}};return _[t]=s,_})}(Symbol.iterator,Array.prototype,String.prototype);var _r=Object.prototype.toString;Object.prototype.toString=function(){return this===void 0?"[object Undefined]":this===null?"[object Null]":_r.call(this)},Object.keys=function(t){return Object.getOwnPropertyNames(t).filter(function(r){return(r=Object.getOwnPropertyDescriptor(t,r))&&r.enumerable})},String.prototype[Symbol.iterator]&&String.prototype.codePointAt||(String.prototype[Symbol.iterator]=function t(){var r,o=this;return Wt(t,function(s){if(s.g==1&&(r=0),s.g!=3)return r<o.length?s=Ht(s,o[r]):(s.g=0,s=void 0),s;r++,s.g=2})}),Set.prototype[Symbol.iterator]||(Set.prototype[Symbol.iterator]=function t(){var r,o=this,s;return Wt(t,function(l){if(l.g==1&&(r=[],o.forEach(function(m){r.push(m)}),s=0),l.g!=3)return s<r.length?l=Ht(l,r[s]):(l.g=0,l=void 0),l;s++,l.g=2})}),Map.prototype[Symbol.iterator]||(Map.prototype[Symbol.iterator]=function t(){var r,o=this,s;return Wt(t,function(l){if(l.g==1&&(r=[],o.forEach(function(m,f){r.push([f,m])}),s=0),l.g!=3)return s<r.length?l=Ht(l,r[s]):(l.g=0,l=void 0),l;s++,l.g=2})});var Qt=document.createEvent("Event");if(Qt.initEvent("foo",!0,!0),Qt.preventDefault(),!Qt.defaultPrevented){var Wr=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(Wr.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var Ue=/Trident/.test(navigator.userAgent);if(!window.Event||Ue&&typeof window.Event!="function"){var yr=window.Event;if(window.Event=function(t,r){r=r||{};var o=document.createEvent("Event");return o.initEvent(t,!!r.bubbles,!!r.cancelable),o},yr){for(var tr in yr)window.Event[tr]=yr[tr];window.Event.prototype=yr.prototype}}if((!window.CustomEvent||Ue&&typeof window.CustomEvent!="function")&&(window.CustomEvent=function(t,r){r=r||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,!!r.bubbles,!!r.cancelable,r.detail),o},window.CustomEvent.prototype=window.Event.prototype),!window.MouseEvent||Ue&&typeof window.MouseEvent!="function"){var X=window.MouseEvent;if(window.MouseEvent=function(t,r){r=r||{};var o=document.createEvent("MouseEvent");return o.initMouseEvent(t,!!r.bubbles,!!r.cancelable,r.view||window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget),o},X)for(var Zn in X)window.MouseEvent[Zn]=X[Zn];window.MouseEvent.prototype=X.prototype}var vn,xr=function(){function t(){l++}var r=!1,o=!1,s={get capture(){return r=!0},get once(){return o=!0}},l=0,m=document.createElement("div");m.addEventListener("click",t,s);var f=r&&o;return f&&(m.dispatchEvent(new Event("click")),m.dispatchEvent(new Event("click")),f=l==1),m.removeEventListener("click",t,s),f}(),fe=(vn=window.EventTarget)!==null&&vn!==void 0?vn:window.Node;if(!xr&&"addEventListener"in fe.prototype){var zt=function(t){if(!t||typeof t!="object"&&typeof t!="function"){var r=!!t;t=!1}else r=!!t.capture,t=!!t.once;return{capture:r,once:t}},er=fe.prototype.addEventListener,Me=fe.prototype.removeEventListener,Hi=new WeakMap,fs=new WeakMap,Jn=function(t,r,o){var s=o?Hi:fs;return o=s.get(t),o===void 0&&s.set(t,o=new Map),t=o.get(r),t===void 0&&o.set(r,t=new WeakMap),t};fe.prototype.addEventListener=function(t,r,o){var s=this;if(r!=null){o=zt(o);var l=o.capture;o=o.once;var m=Jn(this,t,l);if(!m.has(r)){var f=o?function(b){if(m.delete(r),Me.call(s,t,f,l),typeof r=="function")return r.call(s,b);if(typeof r?.handleEvent=="function")return r.handleEvent(b)}:null;m.set(r,f),er.call(this,t,f??r,l)}}},fe.prototype.removeEventListener=function(t,r,o){if(r!=null){o=zt(o).capture;var s=Jn(this,t,o),l=s.get(r);l!==void 0&&(s.delete(r),Me.call(this,t,l??r,o))}}}Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var t=(this.ownerDocument||this).querySelector("base[href]");return t&&t.href||window.location.href},configurable:!0,enumerable:!0});var Gi,Wi,Yi=Element.prototype,wr=(Gi=Object.getOwnPropertyDescriptor(Yi,"attributes"))!==null&&Gi!==void 0?Gi:Object.getOwnPropertyDescriptor(Node.prototype,"attributes"),qi=(Wi=wr?.get)!==null&&Wi!==void 0?Wi:function(){return this.attributes},Ro=Array.prototype.map;Yi.hasOwnProperty("getAttributeNames")||(Yi.getAttributeNames=function(){return Ro.call(qi.call(this),function(t){return t.name})});var _n,yn=Element.prototype;yn.hasOwnProperty("matches")||(yn.matches=(_n=yn.webkitMatchesSelector)!==null&&_n!==void 0?_n:yn.msMatchesSelector);var rc=Node.prototype.appendChild;function Vi(t){t=t.prototype,t.hasOwnProperty("append")||Object.defineProperty(t,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];for(o=k(o),s=o.next();!s.done;s=o.next())s=s.value,rc.call(this,typeof s=="string"?document.createTextNode(s):s)}})}Vi(Document),Vi(DocumentFragment),Vi(Element);var Er,qt,he=Node.prototype.insertBefore,ge=(qt=(Er=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))===null||Er===void 0?void 0:Er.get)!==null&&qt!==void 0?qt:function(){return this.firstChild};function Vt(t){t=t.prototype,t.hasOwnProperty("prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];s=ge.call(this),o=k(o);for(var l=o.next();!l.done;l=o.next())l=l.value,he.call(this,typeof l=="string"?document.createTextNode(l):l,s)}})}Vt(Document),Vt(DocumentFragment),Vt(Element);var xn,kr,Yr=Node.prototype.appendChild,wn=Node.prototype.removeChild,hs=(kr=(xn=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild"))===null||xn===void 0?void 0:xn.get)!==null&&kr!==void 0?kr:function(){return this.firstChild};function Qn(t){t=t.prototype,t.hasOwnProperty("replaceChildren")||Object.defineProperty(t,"replaceChildren",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];for(;(s=hs.call(this))!==null;)wn.call(this,s);for(o=k(o),s=o.next();!s.done;s=o.next())s=s.value,Yr.call(this,typeof s=="string"?document.createTextNode(s):s)}})}Qn(Document),Qn(DocumentFragment),Qn(Element);var Sr,Io,to,eo,gs=Node.prototype.insertBefore,bs=(Io=(Sr=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||Sr===void 0?void 0:Sr.get)!==null&&Io!==void 0?Io:function(){return this.parentNode},vs=(eo=(to=Object.getOwnPropertyDescriptor(Node.prototype,"nextSibling"))===null||to===void 0?void 0:to.get)!==null&&eo!==void 0?eo:function(){return this.nextSibling};function Xi(t){t=t.prototype,t.hasOwnProperty("after")||Object.defineProperty(t,"after",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];if(s=bs.call(this),s!==null){var l=vs.call(this);o=k(o);for(var m=o.next();!m.done;m=o.next())m=m.value,gs.call(s,typeof m=="string"?document.createTextNode(m):m,l)}}})}Xi(CharacterData),Xi(Element);var $o,zo,_s=Node.prototype.insertBefore,ys=(zo=($o=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||$o===void 0?void 0:$o.get)!==null&&zo!==void 0?zo:function(){return this.parentNode};function Ki(t){t=t.prototype,t.hasOwnProperty("before")||Object.defineProperty(t,"before",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];if(s=ys.call(this),s!==null){o=k(o);for(var l=o.next();!l.done;l=o.next())l=l.value,_s.call(s,typeof l=="string"?document.createTextNode(l):l,this)}}})}Ki(CharacterData),Ki(Element);var Bo,Se,Ne=Node.prototype.removeChild,qr=(Se=(Bo=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||Bo===void 0?void 0:Bo.get)!==null&&Se!==void 0?Se:function(){return this.parentNode};function be(t){t=t.prototype,t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){var r=qr.call(this);r&&Ne.call(r,this)}})}be(CharacterData),be(Element);var ro,no,He=Node.prototype.insertBefore,Vr=Node.prototype.removeChild,Fo=(no=(ro=Object.getOwnPropertyDescriptor(Node.prototype,"parentNode"))===null||ro===void 0?void 0:ro.get)!==null&&no!==void 0?no:function(){return this.parentNode};function Xr(t){t=t.prototype,t.hasOwnProperty("replaceWith")||Object.defineProperty(t,"replaceWith",{configurable:!0,enumerable:!0,writable:!0,value:function(r){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];if(s=Fo.call(this),s!==null){o=k(o);for(var l=o.next();!l.done;l=o.next())l=l.value,He.call(s,typeof l=="string"?document.createTextNode(l):l,this);Vr.call(s,this)}}})}Xr(CharacterData),Xr(Element);var Uo=window.Element.prototype,Zi=window.HTMLElement.prototype,En=window.SVGElement.prototype;!Zi.hasOwnProperty("classList")||Uo.hasOwnProperty("classList")||En.hasOwnProperty("classList")||Object.defineProperty(Uo,"classList",Object.getOwnPropertyDescriptor(Zi,"classList"));var Ho=document.createElement("style");Ho.textContent=`body {transition: opacity ease-in 0.2s; } 
body[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } 
`;var Ji=document.querySelector("head");Ji.insertBefore(Ho,Ji.firstChild);var te=window;te.WebComponents=te.WebComponents||{flags:{}};var xs=document.querySelector('script[src*="webcomponents-bundle"]'),Nr=/wc-(.+)/,le={};if(!le.noOpts){if(location.search.slice(1).split("&").forEach(function(t){t=t.split("=");var r;t[0]&&(r=t[0].match(Nr))&&(le[r[1]]=t[1]||!0)}),xs)for(var Qi=0,Tr=void 0;Tr=xs.attributes[Qi];Qi++)Tr.name!=="src"&&(le[Tr.name]=Tr.value||!0);var Go={};le.log&&le.log.split&&le.log.split(",").forEach(function(t){Go[t]=!0}),le.log=Go}te.WebComponents.flags=le;var kn=le.shadydom;if(kn){te.ShadyDOM=te.ShadyDOM||{},te.ShadyDOM.force=kn;var ta=le.noPatch;te.ShadyDOM.noPatch=ta==="true"?!0:ta}var ea=le.register||le.ce;ea&&window.customElements&&(te.customElements.forcePolyfill=ea),function(){function t(){}function r(P,F){if(!P.childNodes.length)return[];switch(P.nodeType){case Node.DOCUMENT_NODE:return bt.call(P,F);case Node.DOCUMENT_FRAGMENT_NODE:return pt.call(P,F);default:return z.call(P,F)}}var o=typeof HTMLTemplateElement>"u",s=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),l=!1;/Trident/.test(navigator.userAgent)&&function(){function P(nt,ne){if(nt instanceof DocumentFragment)for(var bl;bl=nt.firstChild;)ut.call(this,bl,ne);else ut.call(this,nt,ne);return nt}l=!0;var F=Node.prototype.cloneNode;Node.prototype.cloneNode=function(nt){return nt=F.call(this,nt),this instanceof DocumentFragment&&(nt.__proto__=DocumentFragment.prototype),nt},DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll,DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector,Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var ut=Node.prototype.insertBefore;Node.prototype.insertBefore=P;var Mt=Node.prototype.appendChild;Node.prototype.appendChild=function(nt){return nt instanceof DocumentFragment?P.call(this,nt,null):Mt.call(this,nt),nt};var $e=Node.prototype.removeChild,Mr=Node.prototype.replaceChild;Node.prototype.replaceChild=function(nt,ne){return nt instanceof DocumentFragment?(P.call(this,nt,ne),$e.call(this,ne)):Mr.call(this,nt,ne),ne},Document.prototype.createDocumentFragment=function(){var nt=this.createElement("df");return nt.__proto__=DocumentFragment.prototype,nt};var Bn=Document.prototype.importNode;Document.prototype.importNode=function(nt,ne){return ne=Bn.call(this,nt,ne||!1),nt instanceof DocumentFragment&&(ne.__proto__=DocumentFragment.prototype),ne}}();var m=Node.prototype.cloneNode,f=Document.prototype.createElement,b=Document.prototype.importNode,_=Node.prototype.removeChild,x=Node.prototype.appendChild,N=Node.prototype.replaceChild,j=DOMParser.prototype.parseFromString,kt=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(P){this.innerHTML=P}},dt=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},z=Element.prototype.querySelectorAll,bt=Document.prototype.querySelectorAll,pt=DocumentFragment.prototype.querySelectorAll,Ut=function(){if(!o){var P=document.createElement("template"),F=document.createElement("template");return F.content.appendChild(document.createElement("div")),P.content.appendChild(F),P=P.cloneNode(!0),P.content.childNodes.length===0||P.content.firstChild.content.childNodes.length===0||s}}();if(o){var et=document.implementation.createHTMLDocument("template"),Oe=!0,G=document.createElement("style");G.textContent="template{display:none;}";var $n=document.head;$n.insertBefore(G,$n.firstElementChild),t.prototype=Object.create(HTMLElement.prototype);var sr=!document.createElement("div").hasOwnProperty("innerHTML");t.Z=function(P){if(!P.content&&P.namespaceURI===document.documentElement.namespaceURI){P.content=et.createDocumentFragment();for(var F;F=P.firstChild;)x.call(P.content,F);if(sr)P.__proto__=t.prototype;else if(P.cloneNode=function(ut){return t.va(this,ut)},Oe)try{T(P),Ct(P)}catch{Oe=!1}t.bootstrap(P.content)}};var zn={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},T=function(P){Object.defineProperty(P,"innerHTML",{get:function(){return So(this)},set:function(F){var ut=zn[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(F)||["",""])[1].toLowerCase()];if(ut)for(var Mt=0;Mt<ut.length;Mt++)F="<"+ut[Mt]+">"+F+"</"+ut[Mt]+">";for(et.body.innerHTML=F,t.bootstrap(et);this.content.firstChild;)_.call(this.content,this.content.firstChild);if(F=et.body,ut)for(Mt=0;Mt<ut.length;Mt++)F=F.lastChild;for(;F.firstChild;)x.call(this.content,F.firstChild)},configurable:!0})},Ct=function(P){Object.defineProperty(P,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(F){if(this.parentNode){for(et.body.innerHTML=F,F=this.ownerDocument.createDocumentFragment();et.body.firstChild;)x.call(F,et.body.firstChild);N.call(this.parentNode,F,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.")},configurable:!0})};T(t.prototype),Ct(t.prototype),t.bootstrap=function(P){P=r(P,"template");for(var F=0,ut=P.length,Mt;F<ut&&(Mt=P[F]);F++)t.Z(Mt)},document.addEventListener("DOMContentLoaded",function(){t.bootstrap(document)}),Document.prototype.createElement=function(){var P=f.apply(this,arguments);return P.localName==="template"&&t.Z(P),P},DOMParser.prototype.parseFromString=function(){var P=j.apply(this,arguments);return t.bootstrap(P),P},Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return So(this)},set:function(P){kt.set.call(this,P),t.bootstrap(this)},configurable:!0,enumerable:!0});var lr=/[&\u00A0"]/g,Wc=/[&\u00A0<>]/g,hl=function(P){switch(P){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"\xA0":return"&nbsp;"}};G=function(P){for(var F={},ut=0;ut<P.length;ut++)F[P[ut]]=!0;return F};var Ga=G("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),gl=G("style script xmp iframe noembed noframes plaintext noscript".split(" ")),So=function(P,F){P.localName==="template"&&(P=P.content);for(var ut="",Mt=F?F(P):dt.get.call(P),$e=0,Mr=Mt.length,Bn;$e<Mr&&(Bn=Mt[$e]);$e++){t:{var nt=Bn,ne=P,bl=F;switch(nt.nodeType){case Node.ELEMENT_NODE:for(var Yc=nt.localName,vl="<"+Yc,Uf=nt.attributes,pm=0;ne=Uf[pm];pm++)vl+=" "+ne.name+'="'+ne.value.replace(lr,hl)+'"';vl+=">",nt=Ga[Yc]?vl:vl+So(nt,bl)+"</"+Yc+">";break t;case Node.TEXT_NODE:nt=nt.data,nt=ne&&gl[ne.localName]?nt:nt.replace(Wc,hl);break t;case Node.COMMENT_NODE:nt="<!--"+nt.data+"-->";break t;default:throw window.console.error(nt),Error("not implemented")}}ut+=nt}return ut}}if(o||Ut){t.va=function(P,F){var ut=m.call(P,!1);return this.Z&&this.Z(ut),F&&(x.call(ut.content,m.call(P.content,!0)),R(ut.content,P.content)),ut};var R=function(P,F){if(F.querySelectorAll&&(F=r(F,"template"),F.length!==0)){P=r(P,"template");for(var ut=0,Mt=P.length,$e,Mr;ut<Mt;ut++)Mr=F[ut],$e=P[ut],t&&t.Z&&t.Z(Mr),N.call($e.parentNode,mt.call(Mr,!0),$e)}},mt=Node.prototype.cloneNode=function(P){if(!l&&s&&this instanceof DocumentFragment)if(P)var F=Ot.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&this.localName==="template"&&this.namespaceURI==document.documentElement.namespaceURI?F=t.va(this,P):F=m.call(this,P);return P&&R(F,this),F},Ot=Document.prototype.importNode=function(P,F){if(F=F||!1,P.localName==="template")return t.va(P,F);var ut=b.call(this,P,F);if(F){R(ut,P),P=r(ut,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for(var Mt,$e=0;$e<P.length;$e++){Mt=P[$e],F=f.call(document,"script"),F.textContent=Mt.textContent;for(var Mr=Mt.attributes,Bn=0,nt;Bn<Mr.length;Bn++)nt=Mr[Bn],F.setAttribute(nt.name,nt.value);N.call(Mt.parentNode,F,Mt)}}return ut}}o&&(window.HTMLTemplateElement=t)}();function ra(){}ra.prototype.toJSON=function(){return{}};function Et(t){return t.__shady||(t.__shady=new ra),t.__shady}function Q(t){return t&&t.__shady}var U=window.ShadyDOM||{};U.cb=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var oo=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");U.D=!!(oo&&oo.configurable&&oo.get),U.Ba=U.force||!U.cb,U.J=U.noPatch||!1,U.ha=U.preferPerformance,U.Da=U.J==="on-demand";var io,Wo=U.querySelectorImplementation;io=-1<["native","selectorEngine"].indexOf(Wo)?Wo:void 0,U.wb=io,U.Ra=navigator.userAgent.match("Trident");function ws(){return Document.prototype.msElementsFromPoint?"msElementsFromPoint":"elementsFromPoint"}function Ge(t){return(t=Q(t))&&t.firstChild!==void 0}function Bt(t){return t instanceof ShadowRoot}function Yo(t){return(t=(t=Q(t))&&t.root)&&mi(t)}var Cr=Element.prototype,ao=Cr.matches||Cr.matchesSelector||Cr.mozMatchesSelector||Cr.msMatchesSelector||Cr.oMatchesSelector||Cr.webkitMatchesSelector,so=document.createTextNode(""),na=0,Kr=[];new MutationObserver(function(){for(;Kr.length;)try{Kr.shift()()}catch(t){throw so.textContent=na++,t}}).observe(so,{characterData:!0});function qo(t){Kr.push(t),so.textContent=na++}var oa=document.contains?function(t,r){return t.__shady_native_contains(r)}:function(t,r){return t===r||t.documentElement&&t.documentElement.__shady_native_contains(r)};function ia(t,r){for(;r;){if(r==t)return!0;r=r.__shady_parentNode}return!1}function We(t){for(var r=t.length-1;0<=r;r--){var o=t[r],s=o.getAttribute("id")||o.getAttribute("name");s&&s!=="length"&&isNaN(s)&&(t[s]=o)}return t.item=function(l){return t[l]},t.namedItem=function(l){if(l!=="length"&&isNaN(l)&&t[l])return t[l];for(var m=k(t),f=m.next();!f.done;f=m.next())if(f=f.value,(f.getAttribute("id")||f.getAttribute("name"))==l)return f;return null},t}function Es(t){var r=[];for(t=t.__shady_native_firstChild;t;t=t.__shady_native_nextSibling)r.push(t);return r}function Vo(t){var r=[];for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling)r.push(t);return r}function aa(t,r,o){if(o.configurable=!0,o.value)t[r]=o.value;else try{Object.defineProperty(t,r,o)}catch{}}function ee(t,r,o,s){o=o===void 0?"":o;for(var l in r)s&&0<=s.indexOf(l)||aa(t,o+l,r[l])}function Xo(t,r){for(var o in r)o in t&&aa(t,o,r[o])}function Dt(t){var r={};return Object.getOwnPropertyNames(t).forEach(function(o){r[o]=Object.getOwnPropertyDescriptor(t,o)}),r}function lo(t,r){for(var o=Object.getOwnPropertyNames(r),s=0,l;s<o.length;s++)l=o[s],t[l]=r[l]}function sa(t){return t instanceof Node?t:document.createTextNode(""+t)}function Sn(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];if(r.length===1)return sa(r[0]);o=document.createDocumentFragment(),r=k(r);for(var s=r.next();!s.done;s=r.next())o.appendChild(sa(s.value));return o}function la(t){var r;for(r=r===void 0?1:r;0<r;r--)t=t.reduce(function(o,s){return Array.isArray(s)?o.push.apply(o,E(s)):o.push(s),o},[]);return t}function ks(t){var r=[],o=new Set;t=k(t);for(var s=t.next();!s.done;s=t.next())s=s.value,o.has(s)||(r.push(s),o.add(s));return r}var Nn=[],Tn;function Ss(t){Tn||(Tn=!0,qo(Ko)),Nn.push(t)}function Ko(){Tn=!1;for(var t=!!Nn.length;Nn.length;)Nn.shift()();return t}Ko.list=Nn;function co(){this.g=!1,this.addedNodes=[],this.removedNodes=[],this.qa=new Set}function Ns(t){t.g||(t.g=!0,qo(function(){t.flush()}))}co.prototype.flush=function(){if(this.g){this.g=!1;var t=this.takeRecords();t.length&&this.qa.forEach(function(r){r(t)})}},co.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var t=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];return this.addedNodes=[],this.removedNodes=[],t}return[]};function Ts(t,r){var o=Et(t);o.ga||(o.ga=new co),o.ga.qa.add(r);var s=o.ga;return{Va:r,X:s,Wa:t,takeRecords:function(){return s.takeRecords()}}}function nc(t){var r=t&&t.X;r&&(r.qa.delete(t.Va),r.qa.size||(Et(t.Wa).ga=null))}function Cs(t,r){var o=r.getRootNode();return t.map(function(s){var l=o===s.target.getRootNode();if(l&&s.addedNodes){if(l=[].slice.call(s.addedNodes).filter(function(m){return o===m.getRootNode()}),l.length)return s=Object.create(s),Object.defineProperty(s,"addedNodes",{value:l,configurable:!0}),s}else if(l)return s}).filter(function(s){return s})}var Os=/[&\u00A0"]/g,As=/[&\u00A0<>]/g;function Cn(t){switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"\xA0":return"&nbsp;"}}function Or(t){for(var r={},o=0;o<t.length;o++)r[t[o]]=!0;return r}var oc=Or("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Zo=Or("style script xmp iframe noembed noframes plaintext noscript".split(" "));function ca(t,r){t.localName==="template"&&(t=t.content);for(var o="",s=r?r(t):t.childNodes,l=0,m=s.length,f=void 0;l<m&&(f=s[l]);l++){t:{var b=f,_=t,x=r;switch(b.nodeType){case Node.ELEMENT_NODE:_=b.localName;for(var N="<"+_,j=b.attributes,kt=0,dt;dt=j[kt];kt++)N+=" "+dt.name+'="'+dt.value.replace(Os,Cn)+'"';N+=">",b=oc[_]?N:N+ca(b,x)+"</"+_+">";break t;case Node.TEXT_NODE:b=b.data,b=_&&Zo[_.localName]?b:b.replace(As,Cn);break t;case Node.COMMENT_NODE:b="<!--"+b.data+"-->";break t;default:throw window.console.error(b),Error("not implemented")}}o+=b}return o}var Jo=U.D,da={querySelector:function(t){return this.__shady_native_querySelector(t)},querySelectorAll:function(t){return this.__shady_native_querySelectorAll(t)}},Ds={};function Ps(t){Ds[t]=function(r){return r["__shady_native_"+t]}}function po(t,r){ee(t,r,"__shady_native_");for(var o in r)Ps(o)}function Pt(t,r){r=r===void 0?[]:r;for(var o=0;o<r.length;o++){var s=r[o],l=Object.getOwnPropertyDescriptor(t,s);l&&(Object.defineProperty(t,"__shady_native_"+s,l),l.value?da[s]||(da[s]=l.value):Ps(s))}}var ve=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),Nt=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Qo=document.implementation.createHTMLDocument("inert");function pa(t){for(var r;r=t.__shady_native_firstChild;)t.__shady_native_removeChild(r)}var On=["firstElementChild","lastElementChild","children","childElementCount"],ti=["querySelector","querySelectorAll","append","prepend","replaceChildren"];function ma(){var t=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?(Pt(window.EventTarget.prototype,t),window.__shady_native_addEventListener===void 0&&Pt(Window.prototype,t)):(Pt(Node.prototype,t),Pt(Window.prototype,t),Pt(XMLHttpRequest.prototype,t)),Jo?Pt(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):po(Node.prototype,{parentNode:{get:function(){return ve.currentNode=this,ve.parentNode()}},firstChild:{get:function(){return ve.currentNode=this,ve.firstChild()}},lastChild:{get:function(){return ve.currentNode=this,ve.lastChild()}},previousSibling:{get:function(){return ve.currentNode=this,ve.previousSibling()}},nextSibling:{get:function(){return ve.currentNode=this,ve.nextSibling()}},childNodes:{get:function(){var r=[];ve.currentNode=this;for(var o=ve.firstChild();o;)r.push(o),o=ve.nextSibling();return r}},parentElement:{get:function(){return Nt.currentNode=this,Nt.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var r=document.createTreeWalker(this,NodeFilter.SHOW_TEXT,null,!1),o="",s;s=r.nextNode();)o+=s.nodeValue;return o;default:return this.nodeValue}},set:function(r){switch((typeof r>"u"||r===null)&&(r=""),this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:pa(this),(0<r.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(r),void 0);break;default:this.nodeValue=r}}}}),Pt(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")),Pt(HTMLElement.prototype,["parentElement","contains"]),t={firstElementChild:{get:function(){return Nt.currentNode=this,Nt.firstChild()}},lastElementChild:{get:function(){return Nt.currentNode=this,Nt.lastChild()}},children:{get:function(){var r=[];Nt.currentNode=this;for(var o=Nt.firstChild();o;)r.push(o),o=Nt.nextSibling();return We(r)}},childElementCount:{get:function(){return this.children?this.children.length:0}}},Jo?(Pt(Element.prototype,On),Pt(Element.prototype,["previousElementSibling","nextElementSibling","innerHTML","className"]),Pt(HTMLElement.prototype,["children","innerHTML","className"])):(po(Element.prototype,t),po(Element.prototype,{previousElementSibling:{get:function(){return Nt.currentNode=this,Nt.previousSibling()}},nextElementSibling:{get:function(){return Nt.currentNode=this,Nt.nextSibling()}},innerHTML:{get:function(){return ca(this,Es)},set:function(r){var o=this.localName==="template"?this.content:this;pa(o);var s=this.localName||"div";for(s=this.namespaceURI&&this.namespaceURI!==Qo.namespaceURI?Qo.createElementNS(this.namespaceURI,s):Qo.createElement(s),s.innerHTML=r,r=this.localName==="template"?s.content:s;s=r.__shady_native_firstChild;)o.__shady_native_insertBefore(s,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(r){this.setAttribute("class",r)}}})),Pt(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")),Pt(Element.prototype,ti),Pt(HTMLElement.prototype,["focus","blur"]),window.HTMLTemplateElement&&Pt(window.HTMLTemplateElement.prototype,["innerHTML"]),Jo?Pt(DocumentFragment.prototype,On):po(DocumentFragment.prototype,t),Pt(DocumentFragment.prototype,ti),Jo?(Pt(Document.prototype,On),Pt(Document.prototype,["activeElement"])):po(Document.prototype,t),Pt(Document.prototype,["importNode","getElementById","elementFromPoint",ws()]),Pt(Document.prototype,ti)}var ei=Dt({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),ri=Dt({get textContent(){return this.__shady_textContent},set textContent(t){this.__shady_textContent=t},get innerHTML(){return this.__shady_innerHTML},set innerHTML(t){this.__shady_innerHTML=t}}),ua=Dt({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},set className(t){this.__shady_className=t}});function fa(t){for(var r in t){var o=t[r];o&&(o.enumerable=!1)}}fa(ei),fa(ri),fa(ua);var ha=U.D||U.J===!0,ga=ha?function(){}:function(t){var r=Et(t);r.Ta||(r.Ta=!0,Xo(t,ua))},ba=ha?function(){}:function(t){var r=Et(t);r.Sa||(r.Sa=!0,Xo(t,ei),window.customElements&&window.customElements.polyfillWrapFlushCallback&&!U.J||Xo(t,ri))},mo="__eventWrappers"+Date.now(),va=function(){var t=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return t?function(r){return t.get.call(r)}:null}(),Ls=function(){function t(){}var r=!1,o={get capture(){return r=!0,!1}};return window.addEventListener("test",t,o),window.removeEventListener("test",t,o),r}();function _a(t){if(t===null||typeof t!="object"&&typeof t!="function")var r=!!t,o=!1;else{r=!!t.capture,o=!!t.once;var s=t.U}return{Pa:s,capture:r,once:o,Na:Ls?t:r}}var Ms={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},ya={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function xa(t){return t instanceof Node?t.__shady_getRootNode():t}function An(t,r){var o=[],s=t;for(t=xa(t);s;)o.push(s),s=s.__shady_assignedSlot?s.__shady_assignedSlot:s.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&s.host&&(r||s!==t)?s.host:s.__shady_parentNode;return o[o.length-1]===document&&o.push(window),o}function ic(t){return t.__composedPath||(t.__composedPath=An(t.target,!0)),t.__composedPath}function wa(t,r){if(!Bt)return t;t=An(t,!0);for(var o=0,s,l=void 0,m,f=void 0;o<r.length;o++)if(s=r[o],m=xa(s),m!==l&&(f=t.indexOf(m),l=m),!Bt(m)||-1<f)return s}var rr={get composed(){return this.__composed===void 0&&(va?this.__composed=this.type==="focusin"||this.type==="focusout"||va(this):this.isTrusted!==!1&&(this.__composed=Ms[this.type])),this.__composed||!1},composedPath:function(){return this.__composedPath||(this.__composedPath=An(this.__target,this.composed)),this.__composedPath},get target(){return wa(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){return this.__relatedTarget?(this.__relatedTargetComposedPath||(this.__relatedTargetComposedPath=An(this.__relatedTarget,!0)),wa(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)):null},stopPropagation:function(){Event.prototype.stopPropagation.call(this),this.ua=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this),this.ua=this.__immediatePropagationStopped=!0}},Ea=U.D&&Object.getOwnPropertyDescriptor(Event.prototype,"eventPhase");Ea&&(Object.defineProperty(rr,"eventPhase",{get:function(){return this.currentTarget===this.target?Event.AT_TARGET:this.__shady_native_eventPhase},enumerable:!0,configurable:!0}),Object.defineProperty(rr,"__shady_native_eventPhase",Ea));function ni(t){function r(o,s){return o=new t(o,s),o.__composed=s&&!!s.composed,o}return r.__proto__=t,r.prototype=t.prototype,r}var ka={focus:!0,blur:!0};function Sa(t){return t.__target!==t.target||t.__relatedTarget!==t.relatedTarget}function Na(t,r,o){if(o=r.__handlers&&r.__handlers[t.type]&&r.__handlers[t.type][o])for(var s=0,l;(l=o[s])&&(!Sa(t)||t.target!==t.relatedTarget)&&(l.call(r,t),!t.__immediatePropagationStopped);s++);}var Ta=new Event("e").hasOwnProperty("currentTarget");function js(t){t=Ta?Object.create(t):t;var r=t.composedPath(),o=r.map(function(N){return wa(N,r)}),s=t.bubbles,l=Object.getOwnPropertyDescriptor(t,"currentTarget");Object.defineProperty(t,"currentTarget",{configurable:!0,enumerable:!0,get:function(){return _}});var m=Event.CAPTURING_PHASE,f=Object.getOwnPropertyDescriptor(t,"eventPhase");Object.defineProperty(t,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return m}});try{for(var b=r.length-1;0<=b;b--){var _=r[b];if(m=_===o[b]?Event.AT_TARGET:Event.CAPTURING_PHASE,Na(t,_,"capture"),t.ua)return}for(b=0;b<r.length;b++){_=r[b];var x=_===o[b];if((x||s)&&(m=x?Event.AT_TARGET:Event.BUBBLING_PHASE,Na(t,_,"bubble"),t.ua))break}}finally{Ta||(l?Object.defineProperty(t,"currentTarget",l):delete t.currentTarget,f?Object.defineProperty(t,"eventPhase",f):delete t.eventPhase)}}function Rs(t,r,o,s){for(var l=0;l<t.length;l++){var m=t[l],f=m.type,b=m.capture;if(r===m.node&&o===f&&s===b)return l}return-1}function Ye(t){return Ko(),!U.ha&&this instanceof Node&&!oa(document,this)?(t.__target||oi(t,this),js(t)):this.__shady_native_dispatchEvent(t)}function Ca(t,r,o){var s=this,l=_a(o),m=l.capture,f=l.once,b=l.Pa;if(l=l.Na,r){var _=typeof r;if((_==="function"||_==="object")&&(_!=="object"||r.handleEvent&&typeof r.handleEvent=="function")){if(ya[t])return this.__shady_native_addEventListener(t,r,l);var x=b||this;if(b=r[mo]){if(-1<Rs(b,x,t,m))return}else r[mo]=[];b=function(N){if(f&&s.__shady_removeEventListener(t,r,o),N.__target||oi(N),x!==s){var j=Object.getOwnPropertyDescriptor(N,"currentTarget");Object.defineProperty(N,"currentTarget",{get:function(){return x},configurable:!0});var kt=Object.getOwnPropertyDescriptor(N,"eventPhase");Object.defineProperty(N,"eventPhase",{configurable:!0,enumerable:!0,get:function(){return m?Event.CAPTURING_PHASE:Event.BUBBLING_PHASE}})}if(N.__previousCurrentTarget=N.currentTarget,(!Bt(x)&&x.localName!=="slot"||N.composedPath().indexOf(x)!=-1)&&(N.composed||-1<N.composedPath().indexOf(x))){if(Sa(N)&&N.target===N.relatedTarget)N.eventPhase===Event.BUBBLING_PHASE&&N.stopImmediatePropagation();else if(N.eventPhase===Event.CAPTURING_PHASE||N.bubbles||N.target===x||x instanceof Window){var dt=_==="function"?r.call(x,N):r.handleEvent&&r.handleEvent(N);return x!==s&&(j?(Object.defineProperty(N,"currentTarget",j),j=null):delete N.currentTarget,kt?(Object.defineProperty(N,"eventPhase",kt),kt=null):delete N.eventPhase),dt}}},r[mo].push({node:x,type:t,capture:m,ub:b}),this.__handlers=this.__handlers||{},this.__handlers[t]=this.__handlers[t]||{capture:[],bubble:[]},this.__handlers[t][m?"capture":"bubble"].push(b),ka[t]||this.__shady_native_addEventListener(t,b,l)}}}function Oa(t,r,o){if(r){var s=_a(o);o=s.capture;var l=s.Pa;if(s=s.Na,ya[t])return this.__shady_native_removeEventListener(t,r,s);var m=l||this;l=void 0;var f=null;try{f=r[mo]}catch{}f&&(m=Rs(f,m,t,o),-1<m&&(l=f.splice(m,1)[0].ub,f.length||(r[mo]=void 0))),this.__shady_native_removeEventListener(t,l||r,s),l&&this.__handlers&&this.__handlers[t]&&(t=this.__handlers[t][o?"capture":"bubble"],r=t.indexOf(l),-1<r&&t.splice(r,1))}}function ac(){for(var t in ka)window.__shady_native_addEventListener(t,function(r){r.__target||(oi(r),js(r))},!0)}var Is=Dt(rr);function oi(t,r){if(r=r===void 0?t.target:r,t.__target=r,t.__relatedTarget=t.relatedTarget,U.D){if(r=Object.getPrototypeOf(t),!r.hasOwnProperty("__shady_patchedProto")){var o=Object.create(r);o.__shady_sourceProto=r,ee(o,Is),r.__shady_patchedProto=o}t.__proto__=r.__shady_patchedProto}else ee(t,Is)}var sc=ni(Event),lc=ni(CustomEvent),cc=ni(MouseEvent);function dc(){if(!va&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var t=function(){var r=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(r)};Element.prototype.click?Element.prototype.click=t:HTMLElement.prototype.click&&(HTMLElement.prototype.click=t)}}var $s=Object.getOwnPropertyNames(Element.prototype).filter(function(t){return t.substring(0,2)==="on"}),ii=Object.getOwnPropertyNames(HTMLElement.prototype).filter(function(t){return t.substring(0,2)==="on"});function uo(t){return{set:function(r){var o=Et(this),s=t.substring(2);o.T||(o.T={}),o.T[t]&&this.removeEventListener(s,o.T[t]),this.__shady_addEventListener(s,r),o.T[t]=r},get:function(){var r=Q(this);return r&&r.T&&r.T[t]},configurable:!0}}function Dn(t,r){return{index:t,ia:[],pa:r}}function zs(t,r,o,s){var l=0,m=0,f=0,b=0,_=Math.min(r-l,s-m);if(l==0&&m==0)t:{for(f=0;f<_;f++)if(t[f]!==o[f])break t;f=_}if(r==t.length&&s==o.length){b=t.length;for(var x=o.length,N=0;N<_-f&&ai(t[--b],o[--x]);)N++;b=N}if(l+=f,m+=f,r-=b,s-=b,r-l==0&&s-m==0)return[];if(l==r){for(r=Dn(l,0);m<s;)r.ia.push(o[m++]);return[r]}if(m==s)return[Dn(l,r-l)];for(_=l,f=m,s=s-f+1,b=r-_+1,r=Array(s),x=0;x<s;x++)r[x]=Array(b),r[x][0]=x;for(x=0;x<b;x++)r[0][x]=x;for(x=1;x<s;x++)for(N=1;N<b;N++)if(t[_+N-1]===o[f+x-1])r[x][N]=r[x-1][N-1];else{var j=r[x-1][N]+1,kt=r[x][N-1]+1;r[x][N]=j<kt?j:kt}for(_=r.length-1,f=r[0].length-1,s=r[_][f],t=[];0<_||0<f;)_==0?(t.push(2),f--):f==0?(t.push(3),_--):(b=r[_-1][f-1],x=r[_-1][f],N=r[_][f-1],j=x<N?x<b?x:b:N<b?N:b,j==b?(b==s?t.push(0):(t.push(1),s=b),_--,f--):j==x?(t.push(3),_--,s=x):(t.push(2),f--,s=N));for(t.reverse(),r=void 0,_=[],f=0;f<t.length;f++)switch(t[f]){case 0:r&&(_.push(r),r=void 0),l++,m++;break;case 1:r||(r=Dn(l,0)),r.pa++,l++,r.ia.push(o[m]),m++;break;case 2:r||(r=Dn(l,0)),r.pa++,l++;break;case 3:r||(r=Dn(l,0)),r.ia.push(o[m]),m++}return r&&_.push(r),_}function ai(t,r){return t===r}var si=Dt({dispatchEvent:Ye,addEventListener:Ca,removeEventListener:Oa}),Aa=null;function Zr(){return Aa||(Aa=window.ShadyCSS&&window.ShadyCSS.ScopingShim),Aa||null}function Bs(t,r,o){var s=Zr();return s&&r==="class"?(s.setElementClass(t,o),!0):!1}function Ar(t,r){var o=Zr();o&&o.unscopeNode(t,r)}function Fs(t,r){var o=Zr();if(!o)return!0;if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(o=!0,t=t.__shady_firstChild;t;t=t.__shady_nextSibling)o=o&&Fs(t,r);return o}return t.nodeType!==Node.ELEMENT_NODE?!0:o.currentScopeForNode(t)===r}function li(t){if(t.nodeType!==Node.ELEMENT_NODE)return"";var r=Zr();return r?r.currentScopeForNode(t):""}function Pn(t,r){if(t)for(t.nodeType===Node.ELEMENT_NODE&&r(t),t=t.__shady_firstChild;t;t=t.__shady_nextSibling)t.nodeType===Node.ELEMENT_NODE&&Pn(t,r)}var ci=window.document,Jr=U.ha,Da=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Us=Da&&Da.get;function Pa(t){for(var r;r=t.__shady_firstChild;)t.__shady_removeChild(r)}function Ln(t){var r=Q(t);if(r&&r.ta!==void 0)for(r=t.__shady_firstChild;r;r=r.__shady_nextSibling)Ln(r);(t=Q(t))&&(t.ta=void 0)}function Hs(t){var r=t;if(t&&t.localName==="slot"){var o=Q(t);(o=o&&o.aa)&&(r=o.length?o[0]:Hs(t.__shady_nextSibling))}return r}function La(t,r,o){if(t=(t=Q(t))&&t.ga){if(r)if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(var s=0,l=r.childNodes.length;s<l;s++)t.addedNodes.push(r.childNodes[s]);else t.addedNodes.push(r);o&&t.removedNodes.push(o),Ns(t)}}var di=Dt({get parentNode(){var t=Q(this);return t=t&&t.parentNode,t!==void 0?t:this.__shady_native_parentNode},get firstChild(){var t=Q(this);return t=t&&t.firstChild,t!==void 0?t:this.__shady_native_firstChild},get lastChild(){var t=Q(this);return t=t&&t.lastChild,t!==void 0?t:this.__shady_native_lastChild},get nextSibling(){var t=Q(this);return t=t&&t.nextSibling,t!==void 0?t:this.__shady_native_nextSibling},get previousSibling(){var t=Q(this);return t=t&&t.previousSibling,t!==void 0?t:this.__shady_native_previousSibling},get childNodes(){if(Ge(this)){var t=Q(this);if(!t.childNodes){t.childNodes=[];for(var r=this.__shady_firstChild;r;r=r.__shady_nextSibling)t.childNodes.push(r)}var o=t.childNodes}else o=this.__shady_native_childNodes;return o.item=function(s){return o[s]},o},get parentElement(){var t=Q(this);return(t=t&&t.parentNode)&&t.nodeType!==Node.ELEMENT_NODE&&(t=null),t!==void 0?t:this.__shady_native_parentElement},get isConnected(){if(Us&&Us.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var t=this.ownerDocument;if(t===null||oa(t,this))return!0;for(t=this;t&&!(t instanceof Document);)t=t.__shady_parentNode||(Bt(t)?t.host:void 0);return!!(t&&t instanceof Document)},get textContent(){if(Ge(this)){for(var t=[],r=this.__shady_firstChild;r;r=r.__shady_nextSibling)r.nodeType!==Node.COMMENT_NODE&&t.push(r.__shady_textContent);return t.join("")}return this.__shady_native_textContent},set textContent(t){switch((typeof t>"u"||t===null)&&(t=""),this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!Ge(this)&&U.D){var r=this.__shady_firstChild;(r!=this.__shady_lastChild||r&&r.nodeType!=Node.TEXT_NODE)&&Pa(this),this.__shady_native_textContent=t}else Pa(this),(0<t.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(t));break;default:this.nodeValue=t}},insertBefore:function(t,r){if(this.ownerDocument!==ci&&t.ownerDocument!==ci)return this.__shady_native_insertBefore(t,r),t;if(t===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(r){var o=Q(r);if(o=o&&o.parentNode,o!==void 0&&o!==this||o===void 0&&r.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")}if(r===t)return t;La(this,t);var s=[],l=(o=tn(this))?o.host.localName:li(this),m=t.__shady_parentNode;if(m){var f=li(t),b=!!o||!tn(t)||Jr&&this.__noInsertionPoint!==void 0;m.__shady_removeChild(t,b)}m=!0;var _=(!Jr||t.__noInsertionPoint===void 0&&this.__noInsertionPoint===void 0)&&!Fs(t,l),x=o&&!t.__noInsertionPoint&&(!Jr||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE);return(x||_)&&(_&&(f=f||li(t)),Pn(t,function(N){if(x&&N.localName==="slot"&&s.push(N),_){var j=f;Zr()&&(j&&Ar(N,j),(j=Zr())&&j.scopeNode(N,l))}})),s.length&&(Ra(o),o.i.push.apply(o.i,E(s)),lt(o)),Ge(this)&&(Lt(t,this,r),b=Q(this),b.root?(m=!1,Yo(this)&&lt(b.root)):o&&this.localName==="slot"&&(m=!1,lt(o))),m?(o=Bt(this)?this.host:this,r?(r=Hs(r),o.__shady_native_insertBefore(t,r)):o.__shady_native_appendChild(t)):t.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(t),t},appendChild:function(t){if(this!=t||!Bt(t))return this.__shady_insertBefore(t)},removeChild:function(t,r){if(r=r===void 0?!1:r,this.ownerDocument!==ci)return this.__shady_native_removeChild(t);if(t.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+t);La(this,null,t);var o=tn(t),s=o&&mc(o,t),l=Q(this);if(Ge(this)&&(_e(t,this),Yo(this))){lt(l.root);var m=!0}if(Zr()&&!r&&o&&t.nodeType!==Node.TEXT_NODE){var f=li(t);Pn(t,function(b){Ar(b,f)})}return Ln(t),o&&((r=this.localName==="slot")&&(m=!0),(s||r)&&lt(o)),m||(m=Bt(this)?this.host:this,(!l.root&&t.localName!=="slot"||m===t.__shady_native_parentNode)&&m.__shady_native_removeChild(t)),t},replaceChild:function(t,r){return this.__shady_insertBefore(t,r),this.__shady_removeChild(r),t},cloneNode:function(t){if(this.localName=="template")return this.__shady_native_cloneNode(t);var r=this.__shady_native_cloneNode(!1);if(t&&r.nodeType!==Node.ATTRIBUTE_NODE){t=this.__shady_firstChild;for(var o;t;t=t.__shady_nextSibling)o=t.__shady_cloneNode(!0),r.__shady_appendChild(o)}return r},getRootNode:function(t){if(this&&this.nodeType){var r=Et(this),o=r.ta;return o===void 0&&(Bt(this)?(o=this,r.ta=o):(o=(o=this.__shady_parentNode)?o.__shady_getRootNode(t):this,document.documentElement.__shady_native_contains(this)&&(r.ta=o))),o}},contains:function(t){return ia(this,t)}}),Mn=Dt({get assignedSlot(){var t=this.__shady_parentNode;return(t=t&&t.__shady_shadowRoot)&&Ft(t),(t=Q(this))&&t.assignedSlot||null}}),jn=new Map;[["(",{end:")",sa:!0}],["[",{end:"]",sa:!0}],['"',{end:'"',sa:!1}],["'",{end:"'",sa:!1}]].forEach(function(t){var r=k(t);t=r.next().value,r=r.next().value,jn.set(t,r)});function Ma(t,r,o,s){for(s=s===void 0?!0:s;r<t.length;r++)if(t[r]==="\\"&&r<t.length-1&&t[r+1]!==`
`)r++;else{if(o.indexOf(t[r])!==-1)return r;if(s&&jn.has(t[r])){var l=jn.get(t[r]);r=Ma(t,r+1,[l.end],l.sa)}}return t.length}function ja(t){function r(){if(0<s.length){for(;s[s.length-1]===" ";)s.pop();o.push({La:s.filter(function(_,x){return x%2===0}),Za:s.filter(function(_,x){return x%2===1})}),s.length=0}}for(var o=[],s=[],l=0;l<t.length;){var m=s[s.length-1],f=Ma(t,l,[","," ",">","+","~"]),b=f===l?t[l]:t.substring(l,f);b===","?r():([void 0," ",">","+","~"].indexOf(m)===-1||b!==" ")&&(m===" "&&[">","+","~"].indexOf(b)!==-1?s[s.length-1]=b:s.push(b)),l=f+(f===l?1:0)}return r(),o}function fo(t,r,o){var s=[];return pi(t,r,o,s),s}function pi(t,r,o,s){for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling){var l;if(l=t.nodeType===Node.ELEMENT_NODE){l=t;var m=r,f=o,b=s,_=m(l);_&&b.push(l),f&&f(_)?l=_:(pi(l,m,f,b),l=void 0)}if(l)break}}var qe={get firstElementChild(){var t=Q(this);if(t&&t.firstChild!==void 0){for(t=this.__shady_firstChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_nextSibling;return t}return this.__shady_native_firstElementChild},get lastElementChild(){var t=Q(this);if(t&&t.lastChild!==void 0){for(t=this.__shady_lastChild;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_previousSibling;return t}return this.__shady_native_lastElementChild},get children(){return Ge(this)?We(Array.prototype.filter.call(Vo(this),function(t){return t.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var t=this.__shady_children;return t?t.length:0}},Qr=Dt((qe.append=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];this.__shady_insertBefore(Sn.apply(null,E(r)),null)},qe.prepend=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];this.__shady_insertBefore(Sn.apply(null,E(r)),this.__shady_firstChild)},qe.replaceChildren=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];for(;(o=this.__shady_firstChild)!==null;)this.__shady_removeChild(o);this.__shady_insertBefore(Sn.apply(null,E(r)),null)},qe));function ho(t,r){function o(l,m){return(l===t||m.indexOf(":scope")===-1)&&ao.call(l,m)}var s=ja(r);if(1>s.length)return[];for(r=la(fo(t,function(){return!0}).map(function(l){return la(s.map(function(m){var f=m.La,b=f.length-1;return o(l,f[b])?{target:l,da:m,fa:l,index:b}:[]}))}));r.some(function(l){return 0<l.index});)r=la(r.map(function(l){if(0>=l.index)return l;var m=l.target,f=l.fa,b=l.da;l=l.index-1;var _=b.Za[l],x=b.La[l];if(_===" "){for(_=[],f=f.__shady_parentElement;f;f=f.__shady_parentElement)o(f,x)&&_.push({target:m,da:b,fa:f,index:l});return _}if(_===">")return f=f.__shady_parentElement,o(f,x)?{target:m,da:b,fa:f,index:l}:[];if(_==="+")return(f=f.__shady_previousElementSibling)&&o(f,x)?{target:m,da:b,fa:f,index:l}:[];if(_==="~"){for(_=[],f=f.__shady_previousElementSibling;f;f=f.__shady_previousElementSibling)o(f,x)&&_.push({target:m,da:b,fa:f,index:l});return _}throw Error("Unrecognized combinator: '"+_+"'.")}));return ks(r.map(function(l){return l.target}))}var je=U.querySelectorImplementation,pc=Dt({querySelector:function(t){if(je==="native"){var r=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(t)),o=this.__shady_getRootNode();r=k(r);for(var s=r.next();!s.done;s=r.next())if(s=s.value,s.__shady_getRootNode()==o)return s;return null}if(je==="selectorEngine")return ho(this,t)[0]||null;if(je===void 0)return fo(this,function(l){return ao.call(l,t)},function(l){return!!l})[0]||null;throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(je+"'"))},querySelectorAll:function(t,r){if(r||je==="native"){r=Array.prototype.slice.call((this instanceof ShadowRoot?this.host:this).__shady_native_querySelectorAll(t));var o=this.__shady_getRootNode();return We(r.filter(function(s){return s.__shady_getRootNode()==o}))}if(je==="selectorEngine")return We(ho(this,t));if(je===void 0)return We(fo(this,function(s){return ao.call(s,t)}));throw Error("Unrecognized value of ShadyDOM.querySelectorImplementation: '"+(je+"'"))}}),Gs=U.ha&&!U.J?lo({},Qr):Qr;lo(Qr,pc);var Rn=Dt({after:function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];if(o=this.__shady_parentNode,o!==null){var s=this.__shady_nextSibling;o.__shady_insertBefore(Sn.apply(null,E(r)),s)}},before:function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];o=this.__shady_parentNode,o!==null&&o.__shady_insertBefore(Sn.apply(null,E(r)),this)},remove:function(){var t=this.__shady_parentNode;t!==null&&t.__shady_removeChild(this)},replaceWith:function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];if(o=this.__shady_parentNode,o!==null){var s=this.__shady_nextSibling;o.__shady_removeChild(this),o.__shady_insertBefore(Sn.apply(null,E(r)),s)}}}),u=window.document;function a(t,r){if(r==="slot")t=t.__shady_parentNode,Yo(t)&&lt(Q(t).root);else if(t.localName==="slot"&&r==="name"&&(r=tn(t))){if(r.g){bo(r);var o=t.Ua,s=vo(t);if(s!==o){o=r.h[o];var l=o.indexOf(t);0<=l&&o.splice(l,1),o=r.h[s]||(r.h[s]=[]),o.push(t),1<o.length&&(r.h[s]=Ws(o))}}lt(r)}}var d=Dt({get previousElementSibling(){var t=Q(this);if(t&&t.previousSibling!==void 0){for(t=this.__shady_previousSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_previousSibling;return t}return this.__shady_native_previousElementSibling},get nextElementSibling(){var t=Q(this);if(t&&t.nextSibling!==void 0){for(t=this.__shady_nextSibling;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.__shady_nextSibling;return t}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},set slot(t){this.__shady_setAttribute("slot",t)},get className(){return this.getAttribute("class")||""},set className(t){this.__shady_setAttribute("class",t)},setAttribute:function(t,r){this.ownerDocument!==u?this.__shady_native_setAttribute(t,r):Bs(this,t,r)||(this.__shady_native_setAttribute(t,r),a(this,t))},removeAttribute:function(t){this.ownerDocument!==u?this.__shady_native_removeAttribute(t):Bs(this,t,"")?this.getAttribute(t)===""&&this.__shady_native_removeAttribute(t):(this.__shady_native_removeAttribute(t),a(this,t))}});U.ha||$s.forEach(function(t){d[t]=uo(t)});var g=Dt({attachShadow:function(t){if(!this)throw Error("Must provide a host.");if(!t)throw Error("Not enough arguments.");if(t.shadyUpgradeFragment&&!U.Ra){var r=t.shadyUpgradeFragment;if(r.__proto__=ShadowRoot.prototype,$t(r,this,t),pe(r,r),t=r.__noInsertionPoint?null:r.querySelectorAll("slot"),r.__noInsertionPoint=void 0,t&&t.length){var o=r;Ra(o),o.i.push.apply(o.i,E(t)),lt(r)}r.host.__shady_native_appendChild(r)}else r=new nr(re,this,t);return this.__CE_shadowRoot=r},get shadowRoot(){var t=Q(this);return t&&t.lb||null}});lo(d,g);var y=document.implementation.createHTMLDocument("inert"),w=Dt({get innerHTML(){return Ge(this)?ca(this.localName==="template"?this.content:this,Vo):this.__shady_native_innerHTML},set innerHTML(t){if(this.localName==="template")this.__shady_native_innerHTML=t;else{Pa(this);var r=this.localName||"div";for(r=this.namespaceURI&&this.namespaceURI!==y.namespaceURI?y.createElementNS(this.namespaceURI,r):y.createElement(r),U.D?r.__shady_native_innerHTML=t:r.innerHTML=t;t=r.__shady_firstChild;)this.__shady_insertBefore(t)}}}),S=Dt({blur:function(){var t=Q(this);(t=(t=t&&t.root)&&t.activeElement)?t.__shady_blur():this.__shady_native_blur()}});U.ha||ii.forEach(function(t){S[t]=uo(t)});var O=Dt({assignedNodes:function(t){if(this.localName==="slot"){var r=this.__shady_getRootNode();return r&&Bt(r)&&Ft(r),(r=Q(this))?(t&&t.flatten?r.aa:r.assignedNodes)||[]:[]}},addEventListener:function(t,r,o){if(this.localName!=="slot"||t==="slotchange")Ca.call(this,t,r,o);else{typeof o!="object"&&(o={capture:!!o});var s=this.__shady_parentNode;if(!s)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");o.U=this,s.__shady_addEventListener(t,r,o)}},removeEventListener:function(t,r,o){if(this.localName!=="slot"||t==="slotchange")Oa.call(this,t,r,o);else{typeof o!="object"&&(o={capture:!!o});var s=this.__shady_parentNode;if(!s)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");o.U=this,s.__shady_removeEventListener(t,r,o)}}}),L=Dt({getElementById:function(t){return t===""?null:fo(this,function(r){return r.id==t},function(r){return!!r})[0]||null}});function $(t,r){for(var o;r&&!t.has(o=r.__shady_getRootNode());)r=o.host;return r}function B(t){var r=new Set;for(r.add(t);Bt(t)&&t.host;)t=t.host.__shady_getRootNode(),r.add(t);return r}var M="__shady_native_"+ws(),tt=Dt({get activeElement(){var t=U.D?document.__shady_native_activeElement:document.activeElement;if(!t||!t.nodeType)return null;var r=!!Bt(this);if(!(this===document||r&&this.host!==t&&this.host.__shady_native_contains(t)))return null;for(r=tn(t);r&&r!==this;)t=r.host,r=tn(t);return this===document?r?null:t:r===this?t:null},elementsFromPoint:function(t,r){if(t=document[M](t,r),this===document&&U.useNativeDocumentEFP)return t;t=[].slice.call(t),r=B(this);for(var o=new Set,s=0;s<t.length;s++)o.add($(r,t[s]));var l=[];return o.forEach(function(m){return l.push(m)}),l},elementFromPoint:function(t,r){return this===document&&U.useNativeDocumentEFP?this.__shady_native_elementFromPoint(t,r):this.__shady_elementsFromPoint(t,r)[0]||null}}),Y=window.document,Z=Dt({importNode:function(t,r){if(t.ownerDocument!==Y||t.localName==="template")return this.__shady_native_importNode(t,r);var o=this.__shady_native_importNode(t,!1);if(r)for(t=t.__shady_firstChild;t;t=t.__shady_nextSibling)r=this.__shady_importNode(t,!0),o.__shady_appendChild(r);return o}}),V=Dt({dispatchEvent:Ye,addEventListener:Ca.bind(window),removeEventListener:Oa.bind(window)}),q={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(q.parentElement=di.parentElement),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(q.contains=di.contains),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(q.children=Qr.children),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(q.innerHTML=w.innerHTML),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(q.className=d.className);var it={EventTarget:[si],Node:[di,window.EventTarget?null:si],Text:[Mn],Comment:[Mn],CDATASection:[Mn],ProcessingInstruction:[Mn],Element:[d,Qr,Rn,Mn,!U.D||"innerHTML"in Element.prototype?w:null,window.HTMLSlotElement?null:O],HTMLElement:[S,q],HTMLSlotElement:[O],DocumentFragment:[Gs,L],Document:[Z,Gs,L,tt],Window:[V],CharacterData:[Rn],XMLHttpRequest:[window.EventTarget?null:si]},xt=U.D?null:["innerHTML","textContent"];function K(t,r,o,s){r.forEach(function(l){return t&&l&&ee(t,l,o,s)})}function ft(t){var r=t?null:xt,o;for(o in it)K(window[o]&&window[o].prototype,it[o],t,r)}["Text","Comment","CDATASection","ProcessingInstruction"].forEach(function(t){var r=window[t],o=Object.create(r.prototype);o.__shady_protoIsPatched=!0,K(o,it.EventTarget),K(o,it.Node),it[t]&&K(o,it[t]),r.prototype.__shady_patchedProto=o});function rt(t){return t.__shady_protoIsPatched=!0,K(t,it.EventTarget),K(t,it.Node),K(t,it.Element),K(t,it.HTMLElement),K(t,it.HTMLSlotElement),t}var st=U.Da,_t=U.D;function ht(t,r){if(st&&!t.__shady_protoIsPatched&&!Bt(t)){var o=Object.getPrototypeOf(t),s=o.hasOwnProperty("__shady_patchedProto")&&o.__shady_patchedProto;s||(s=Object.create(o),rt(s),o.__shady_patchedProto=s),Object.setPrototypeOf(t,s)}_t||(r===1?ga(t):r===2&&ba(t))}function gt(t,r,o,s){ht(t,1),s=s||null;var l=Et(t),m=s?Et(s):null;l.previousSibling=s?m.previousSibling:r.__shady_lastChild,(m=Q(l.previousSibling))&&(m.nextSibling=t),(m=Q(l.nextSibling=s))&&(m.previousSibling=t),l.parentNode=r,s?s===o.firstChild&&(o.firstChild=t):(o.lastChild=t,o.firstChild||(o.firstChild=t)),o.childNodes=null}function Lt(t,r,o){ht(r,2);var s=Et(r);if(s.firstChild!==void 0&&(s.childNodes=null),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(t=t.__shady_native_firstChild;t;t=t.__shady_native_nextSibling)gt(t,r,s,o);else gt(t,r,s,o)}function _e(t,r){var o=Et(t);r=Et(r),t===r.firstChild&&(r.firstChild=o.nextSibling),t===r.lastChild&&(r.lastChild=o.previousSibling),t=o.previousSibling;var s=o.nextSibling;t&&(Et(t).nextSibling=s),s&&(Et(s).previousSibling=t),o.parentNode=o.previousSibling=o.nextSibling=void 0,r.childNodes!==void 0&&(r.childNodes=null)}function pe(t,r){var o=Et(t);if(r||o.firstChild===void 0){o.childNodes=null;var s=o.firstChild=t.__shady_native_firstChild;for(o.lastChild=t.__shady_native_lastChild,ht(t,2),o=s,s=void 0;o;o=o.__shady_native_nextSibling){var l=Et(o);l.parentNode=r||t,l.nextSibling=o.__shady_native_nextSibling,l.previousSibling=s||null,s=o,ht(o,1)}}}var ce=Dt({addEventListener:function(t,r,o){typeof o!="object"&&(o={capture:!!o}),o.U=o.U||this,this.host.__shady_addEventListener(t,r,o)},removeEventListener:function(t,r,o){typeof o!="object"&&(o={capture:!!o}),o.U=o.U||this,this.host.__shady_removeEventListener(t,r,o)}});function ye(t,r){ee(t,ce,r),ee(t,tt,r),ee(t,w,r),ee(t,Qr,r),U.J&&!r?(ee(t,di,r),ee(t,L,r)):U.D||(ee(t,ua),ee(t,ei),ee(t,ri))}var re={},Tt=U.deferConnectionCallbacks&&document.readyState==="loading",xe;function Re(t){var r=[];do r.unshift(t);while(t=t.__shady_parentNode);return r}function nr(t,r,o){if(t!==re)throw new TypeError("Illegal constructor");this.g=null,$t(this,r,o)}function $t(t,r,o){if(t.host=r,t.mode=o&&o.mode,pe(t.host),r=Et(t.host),r.root=t,r.lb=t.mode!=="closed"?t:null,r=Et(t),r.firstChild=r.lastChild=r.parentNode=r.nextSibling=r.previousSibling=null,U.preferPerformance)for(;r=t.host.__shady_native_firstChild;)t.host.__shady_native_removeChild(r);else lt(t)}function lt(t){t.Y||(t.Y=!0,Ss(function(){return Ft(t)}))}function Ft(t){var r;if(r=t.Y){for(var o;t;)t:{if(t.Y&&(o=t),r=t,t=r.host.__shady_getRootNode(),Bt(t)&&(r=Q(r.host))&&0<r.ka)break t;t=void 0}r=o}(o=r)&&o._renderSelf()}nr.prototype._renderSelf=function(){var t=Tt;if(Tt=!0,this.Y=!1,this.g){bo(this);for(var r=0,o;r<this.g.length;r++){o=this.g[r];var s=Q(o),l=s.assignedNodes;if(s.assignedNodes=[],s.aa=[],s.Ja=l)for(s=0;s<l.length;s++){var m=Q(l[s]);m.xa=m.assignedSlot,m.assignedSlot===o&&(m.assignedSlot=null)}}for(r=this.host.__shady_firstChild;r;r=r.__shady_nextSibling)we(this,r);for(r=0;r<this.g.length;r++){if(o=this.g[r],l=Q(o),!l.assignedNodes.length)for(s=o.__shady_firstChild;s;s=s.__shady_nextSibling)we(this,s,o);if((s=(s=Q(o.__shady_parentNode))&&s.root)&&(mi(s)||s.Y)&&s._renderSelf(),or(this,l.aa,l.assignedNodes),s=l.Ja){for(m=0;m<s.length;m++)Q(s[m]).xa=null;l.Ja=null,s.length>l.assignedNodes.length&&(l.Aa=!0)}l.Aa&&(l.Aa=!1,go(this,o))}for(o=this.g,r=[],l=0;l<o.length;l++)s=o[l].__shady_parentNode,(m=Q(s))&&m.root||!(0>r.indexOf(s))||r.push(s);for(o=0;o<r.length;o++){for(m=r[o],l=m===this?this.host:m,s=[],m=m.__shady_firstChild;m;m=m.__shady_nextSibling)if(m.localName=="slot")for(var f=Q(m).aa,b=0;b<f.length;b++)s.push(f[b]);else s.push(m);m=Es(l),f=zs(s,s.length,m,m.length);for(var _=b=0,x=void 0;b<f.length&&(x=f[b]);b++){for(var N=0,j=void 0;N<x.ia.length&&(j=x.ia[N]);N++)j.__shady_native_parentNode===l&&l.__shady_native_removeChild(j),m.splice(x.index+_,1);_-=x.pa}for(_=0,x=void 0;_<f.length&&(x=f[_]);_++)for(b=m[x.index],N=x.index;N<x.index+x.pa;N++)j=s[N],l.__shady_native_insertBefore(j,b),m.splice(N,0,j)}}if(!U.preferPerformance&&!this.Ia)for(r=this.host.__shady_firstChild;r;r=r.__shady_nextSibling)o=Q(r),r.__shady_native_parentNode!==this.host||r.localName!=="slot"&&o.assignedSlot||this.host.__shady_native_removeChild(r);this.Ia=!0,Tt=t,xe&&xe()};function we(t,r,o){var s=Et(r),l=s.xa;s.xa=null,o||(o=(t=t.h[r.__shady_slot||"__catchall"])&&t[0]),o?(Et(o).assignedNodes.push(r),s.assignedSlot=o):s.assignedSlot=void 0,l!==s.assignedSlot&&s.assignedSlot&&(Et(s.assignedSlot).Aa=!0)}function or(t,r,o){for(var s=0,l=void 0;s<o.length&&(l=o[s]);s++)if(l.localName=="slot"){var m=Q(l).assignedNodes;m&&m.length&&or(t,r,m)}else r.push(o[s])}function go(t,r){r.__shady_native_dispatchEvent(new Event("slotchange")),r=Q(r),r.assignedSlot&&go(t,r.assignedSlot)}function Ra(t){t.i=t.i||[],t.g=t.g||[],t.h=t.h||{}}function bo(t){if(t.i&&t.i.length){for(var r=t.i,o,s=0;s<r.length;s++){var l=r[s];pe(l);var m=l.__shady_parentNode;pe(m),m=Q(m),m.ka=(m.ka||0)+1,m=vo(l),t.h[m]?(o=o||{},o[m]=!0,t.h[m].push(l)):t.h[m]=[l],t.g.push(l)}if(o)for(var f in o)t.h[f]=Ws(t.h[f]);t.i=[]}}function vo(t){var r=t.name||t.getAttribute("name")||"__catchall";return t.Ua=r}function Ws(t){return t.sort(function(r,o){r=Re(r);for(var s=Re(o),l=0;l<r.length;l++){o=r[l];var m=s[l];if(o!==m)return r=Vo(o.__shady_parentNode),r.indexOf(o)-r.indexOf(m)}})}function mc(t,r){if(t.g){bo(t);var o=t.h,s;for(s in o)for(var l=o[s],m=0;m<l.length;m++){var f=l[m];if(ia(r,f)){l.splice(m,1);var b=t.g.indexOf(f);if(0<=b&&(t.g.splice(b,1),(b=Q(f.__shady_parentNode))&&b.ka&&b.ka--),m--,f=Q(f),b=f.aa)for(var _=0;_<b.length;_++){var x=b[_],N=x.__shady_native_parentNode;N&&N.__shady_native_removeChild(x)}f.aa=[],f.assignedNodes=[],b=!0}}return b}}function mi(t){return bo(t),!(!t.g||!t.g.length)}if(function(t){t.__proto__=DocumentFragment.prototype,ye(t,"__shady_"),ye(t),Object.defineProperties(t,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}}),["localName","namespaceURI","prefix"].forEach(function(r){Object.defineProperty(t,r,{value:void 0,configurable:!0})}),["ownerDocument","baseURI","isConnected"].forEach(function(r){Object.defineProperty(t,r,{get:function(){return this.host[r]},configurable:!0})})}(nr.prototype),window.customElements&&window.customElements.define&&U.Ba&&!U.preferPerformance){var ui=new Map;xe=function(){var t=[];ui.forEach(function(s,l){t.push([l,s])}),ui.clear();for(var r=0;r<t.length;r++){var o=t[r][0];t[r][1]?o.__shadydom_connectedCallback():o.__shadydom_disconnectedCallback()}},Tt&&document.addEventListener("readystatechange",function(){Tt=!1,xe()},{once:!0});var Ys=function(t,r,o){var s=0,l="__isConnected"+s++;return(r||o)&&(t.prototype.connectedCallback=t.prototype.__shadydom_connectedCallback=function(){Tt?ui.set(this,!0):this[l]||(this[l]=!0,r&&r.call(this))},t.prototype.disconnectedCallback=t.prototype.__shadydom_disconnectedCallback=function(){Tt?this.isConnected||ui.set(this,!1):this[l]&&(this[l]=!1,o&&o.call(this))}),t},uc=window.customElements.define,Ia=function(t,r){var o=r.prototype.connectedCallback,s=r.prototype.disconnectedCallback;uc.call(window.customElements,t,Ys(r,o,s)),r.prototype.connectedCallback=o,r.prototype.disconnectedCallback=s};window.customElements.define=Ia,Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:Ia,configurable:!0})}function tn(t){if(t=t.__shady_getRootNode(),Bt(t))return t}function In(t){this.node=t}n=In.prototype,n.addEventListener=function(t,r,o){return this.node.__shady_addEventListener(t,r,o)},n.removeEventListener=function(t,r,o){return this.node.__shady_removeEventListener(t,r,o)},n.appendChild=function(t){return this.node.__shady_appendChild(t)},n.insertBefore=function(t,r){return this.node.__shady_insertBefore(t,r)},n.removeChild=function(t){return this.node.__shady_removeChild(t)},n.replaceChild=function(t,r){return this.node.__shady_replaceChild(t,r)},n.cloneNode=function(t){return this.node.__shady_cloneNode(t)},n.getRootNode=function(t){return this.node.__shady_getRootNode(t)},n.contains=function(t){return this.node.__shady_contains(t)},n.dispatchEvent=function(t){return this.node.__shady_dispatchEvent(t)},n.setAttribute=function(t,r){this.node.__shady_setAttribute(t,r)},n.getAttribute=function(t){return this.node.__shady_native_getAttribute(t)},n.hasAttribute=function(t){return this.node.__shady_native_hasAttribute(t)},n.removeAttribute=function(t){this.node.__shady_removeAttribute(t)},n.attachShadow=function(t){return this.node.__shady_attachShadow(t)},n.focus=function(){this.node.__shady_native_focus()},n.blur=function(){this.node.__shady_blur()},n.importNode=function(t,r){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(t,r)},n.getElementById=function(t){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(t)},n.elementsFromPoint=function(t,r){return this.node.__shady_elementsFromPoint(t,r)},n.elementFromPoint=function(t,r){return this.node.__shady_elementFromPoint(t,r)},n.querySelector=function(t){return this.node.__shady_querySelector(t)},n.querySelectorAll=function(t,r){return this.node.__shady_querySelectorAll(t,r)},n.assignedNodes=function(t){if(this.node.localName==="slot")return this.node.__shady_assignedNodes(t)},n.append=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];return this.node.__shady_append.apply(this.node,E(r))},n.prepend=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];return this.node.__shady_prepend.apply(this.node,E(r))},n.after=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];return this.node.__shady_after.apply(this.node,E(r))},n.before=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];return this.node.__shady_before.apply(this.node,E(r))},n.remove=function(){return this.node.__shady_remove()},n.replaceWith=function(t){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];return this.node.__shady_replaceWith.apply(this.node,E(r))},p.Object.defineProperties(In.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(Bt(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(Bt(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(t){this.node.__shady_innerHTML=t}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(t){this.node.__shady_textContent=t}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(t){this.node.__shady_slot=t}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(t){this.node.__shady_className=t}}});function qs(t){Object.defineProperty(In.prototype,t,{get:function(){return this.node["__shady_"+t]},set:function(r){this.node["__shady_"+t]=r},configurable:!0})}$s.forEach(function(t){return qs(t)}),ii.forEach(function(t){return qs(t)});var Dr=new WeakMap;function _o(t){if(Bt(t)||t instanceof In)return t;var r=Dr.get(t);return r||(r=new In(t),Dr.set(t,r)),r}if(U.Ba){var $a=U.D?function(t){return t}:function(t){return ba(t),ga(t),t},Vs={inUse:U.Ba,patch:$a,isShadyRoot:Bt,enqueue:Ss,flush:Ko,flushInitial:function(t){!t.Ia&&t.Y&&Ft(t)},settings:U,filterMutations:Cs,observeChildren:Ts,unobserveChildren:nc,deferConnectionCallbacks:U.deferConnectionCallbacks,preferPerformance:U.preferPerformance,handlesDynamicScoping:!0,wrap:U.J?_o:$a,wrapIfNeeded:U.J===!0?_o:function(t){return t},Wrapper:In,composedPath:ic,noPatch:U.J,patchOnDemand:U.Da,nativeMethods:da,nativeTree:Ds,patchElementProto:rt,querySelectorImplementation:U.querySelectorImplementation};window.ShadyDOM=Vs,ma(),ft("__shady_"),Object.defineProperty(document,"_activeElement",tt.activeElement),ee(Window.prototype,V,"__shady_"),U.J?U.Da&&ee(Element.prototype,g):(ft(),dc()),ac(),window.Event=sc,window.CustomEvent=lc,window.MouseEvent=cc,window.ShadowRoot=nr}var yo=window.Document.prototype.createElement,fi=window.Document.prototype.createElementNS,Xs=window.Document.prototype.importNode,Ks=window.Document.prototype.prepend,Zs=window.Document.prototype.append,fc=window.DocumentFragment.prototype.prepend,hc=window.DocumentFragment.prototype.append,hi=window.Node.prototype.cloneNode,xo=window.Node.prototype.appendChild,np=window.Node.prototype.insertBefore,gc=window.Node.prototype.removeChild,op=window.Node.prototype.replaceChild,bc=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),ip=window.Element.prototype.attachShadow,vc=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),_c=window.Element.prototype.getAttribute,ap=window.Element.prototype.setAttribute,sp=window.Element.prototype.removeAttribute,Js=window.Element.prototype.getAttributeNS,lp=window.Element.prototype.setAttributeNS,cp=window.Element.prototype.removeAttributeNS,dp=window.Element.prototype.insertAdjacentElement,pp=window.Element.prototype.insertAdjacentHTML,Wu=window.Element.prototype.prepend,Yu=window.Element.prototype.append,mp=window.Element.prototype.before,up=window.Element.prototype.after,fp=window.Element.prototype.replaceWith,hp=window.Element.prototype.remove,qu=window.HTMLElement,yc=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),gp=window.HTMLElement.prototype.insertAdjacentElement,bp=window.HTMLElement.prototype.insertAdjacentHTML,vp=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return vp.add(t)});function _p(t){var r=vp.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!r&&t}var Vu=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function Rt(t){var r=t.isConnected;if(r!==void 0)return r;if(Vu(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function xc(t){var r=t.children;if(r)return Array.prototype.slice.call(r);for(r=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&r.push(t);return r}function wc(t,r){for(;r&&r!==t&&!r.nextSibling;)r=r.parentNode;return r&&r!==t?r.nextSibling:null}function Ec(t,r,o){for(var s=t;s;){if(s.nodeType===Node.ELEMENT_NODE){var l=s;r(l);var m=l.localName;if(m==="link"&&l.getAttribute("rel")==="import"){if(s=l.import,o===void 0&&(o=new Set),s instanceof Node&&!o.has(s))for(o.add(s),s=s.firstChild;s;s=s.nextSibling)Ec(s,r,o);s=wc(t,l);continue}else if(m==="template"){s=wc(t,l);continue}if(l=l.__CE_shadowRoot)for(l=l.firstChild;l;l=l.nextSibling)Ec(l,r,o)}s=s.firstChild?s.firstChild:wc(t,s)}}function Qs(){var t=!(Lr==null||!Lr.noDocumentConstructionObserver),r=!(Lr==null||!Lr.shadyDomFastWalk);this.ca=[],this.g=[],this.W=!1,this.shadyDomFastWalk=r,this.sb=!t}function za(t,r,o,s){var l=window.ShadyDOM;if(t.shadyDomFastWalk&&l&&l.inUse){if(r.nodeType===Node.ELEMENT_NODE&&o(r),r.querySelectorAll)for(t=l.nativeMethods.querySelectorAll.call(r,"*"),r=0;r<t.length;r++)o(t[r])}else Ec(r,o,s)}function Xu(t,r){t.W=!0,t.ca.push(r)}function Ku(t,r){t.W=!0,t.g.push(r)}function kc(t,r){t.W&&za(t,r,function(o){return gi(t,o)})}function gi(t,r){if(t.W&&!r.__CE_patched){r.__CE_patched=!0;for(var o=0;o<t.ca.length;o++)t.ca[o](r);for(o=0;o<t.g.length;o++)t.g[o](r)}}function Pr(t,r){var o=[];for(za(t,r,function(l){return o.push(l)}),r=0;r<o.length;r++){var s=o[r];s.__CE_state===1?t.connectedCallback(s):tl(t,s)}}function Ie(t,r){var o=[];for(za(t,r,function(l){return o.push(l)}),r=0;r<o.length;r++){var s=o[r];s.__CE_state===1&&t.disconnectedCallback(s)}}function en(t,r,o){o=o===void 0?{}:o;var s=o.tb,l=o.upgrade||function(f){return tl(t,f)},m=[];for(za(t,r,function(f){if(t.W&&gi(t,f),f.localName==="link"&&f.getAttribute("rel")==="import"){var b=f.import;b instanceof Node&&(b.__CE_isImportDocument=!0,b.__CE_registry=document.__CE_registry),b&&b.readyState==="complete"?b.__CE_documentLoadHandled=!0:f.addEventListener("load",function(){var _=f.import;if(!_.__CE_documentLoadHandled){_.__CE_documentLoadHandled=!0;var x=new Set;s&&(s.forEach(function(N){return x.add(N)}),x.delete(_)),en(t,_,{tb:x,upgrade:l})}})}else m.push(f)},s),r=0;r<m.length;r++)l(m[r])}function tl(t,r){try{var o=r.ownerDocument,s=o.__CE_registry,l=s&&(o.defaultView||o.__CE_isImportDocument)?el(s,r.localName):void 0;if(l&&r.__CE_state===void 0){l.constructionStack.push(r);try{try{if(new l.constructorFunction!==r)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{l.constructionStack.pop()}}catch(_){throw r.__CE_state=2,_}if(r.__CE_state=1,r.__CE_definition=l,l.attributeChangedCallback&&r.hasAttributes()){var m=l.observedAttributes;for(l=0;l<m.length;l++){var f=m[l],b=r.getAttribute(f);b!==null&&t.attributeChangedCallback(r,f,null,b,null)}}Rt(r)&&t.connectedCallback(r)}}catch(_){bi(_)}}Qs.prototype.connectedCallback=function(t){var r=t.__CE_definition;if(r.connectedCallback)try{r.connectedCallback.call(t)}catch(o){bi(o)}},Qs.prototype.disconnectedCallback=function(t){var r=t.__CE_definition;if(r.disconnectedCallback)try{r.disconnectedCallback.call(t)}catch(o){bi(o)}},Qs.prototype.attributeChangedCallback=function(t,r,o,s,l){var m=t.__CE_definition;if(m.attributeChangedCallback&&-1<m.observedAttributes.indexOf(r))try{m.attributeChangedCallback.call(t,r,o,s,l)}catch(f){bi(f)}};function yp(t,r,o,s){var l=r.__CE_registry;if(l&&(s===null||s==="http://www.w3.org/1999/xhtml")&&(l=el(l,o)))try{var m=new l.constructorFunction;if(m.__CE_state===void 0||m.__CE_definition===void 0)throw Error("Failed to construct '"+o+"': The returned value was not constructed with the HTMLElement constructor.");if(m.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+o+"': The constructed element's namespace must be the HTML namespace.");if(m.hasAttributes())throw Error("Failed to construct '"+o+"': The constructed element must not have any attributes.");if(m.firstChild!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have any children.");if(m.parentNode!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have a parent node.");if(m.ownerDocument!==r)throw Error("Failed to construct '"+o+"': The constructed element's owner document is incorrect.");if(m.localName!==o)throw Error("Failed to construct '"+o+"': The constructed element's local name is incorrect.");return m}catch(f){return bi(f),r=s===null?yo.call(r,o):fi.call(r,s,o),Object.setPrototypeOf(r,HTMLUnknownElement.prototype),r.__CE_state=2,r.__CE_definition=void 0,gi(t,r),r}return r=s===null?yo.call(r,o):fi.call(r,s,o),gi(t,r),r}function bi(t){var r="",o="",s=0,l=0;t instanceof Error?(r=t.message,o=t.sourceURL||t.fileName||"",s=t.line||t.lineNumber||0,l=t.column||t.columnNumber||0):r="Uncaught "+String(t);var m=void 0;ErrorEvent.prototype.initErrorEvent===void 0?m=new ErrorEvent("error",{cancelable:!0,message:r,filename:o,lineno:s,colno:l,error:t}):(m=document.createEvent("ErrorEvent"),m.initErrorEvent("error",!1,!0,r,o,s),m.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),m.error===void 0&&Object.defineProperty(m,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(m),m.defaultPrevented||console.error(t)}function xp(){var t=this;this.I=void 0,this.Ka=new Promise(function(r){t.g=r})}xp.prototype.resolve=function(t){if(this.I)throw Error("Already resolved.");this.I=t,this.g(t)};function wp(t){var r=document;this.X=void 0,this.S=t,this.g=r,en(this.S,this.g),this.g.readyState==="loading"&&(this.X=new MutationObserver(this.h.bind(this)),this.X.observe(this.g,{childList:!0,subtree:!0}))}function Ep(t){t.X&&t.X.disconnect()}wp.prototype.h=function(t){var r=this.g.readyState;for(r!=="interactive"&&r!=="complete"||Ep(this),r=0;r<t.length;r++)for(var o=t[r].addedNodes,s=0;s<o.length;s++)en(this.S,o[s])};function Ee(t){this.ma=new Map,this.na=new Map,this.Fa=new Map,this.wa=!1,this.za=new Map,this.la=function(r){return r()},this.V=!1,this.oa=[],this.S=t,this.Ga=t.sb?new wp(t):void 0}n=Ee.prototype,n.jb=function(t,r){var o=this;if(!(r instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");kp(this,t),this.ma.set(t,r),this.oa.push(t),this.V||(this.V=!0,this.la(function(){return Np(o)}))},n.define=function(t,r){var o=this;if(!(r instanceof Function))throw new TypeError("Custom element constructors must be functions.");kp(this,t),Sp(this,t,r),this.oa.push(t),this.V||(this.V=!0,this.la(function(){return Np(o)}))};function kp(t,r){if(!_p(r))throw new SyntaxError("The element name '"+r+"' is not valid.");if(el(t,r))throw Error("A custom element with name '"+(r+"' has already been defined."));if(t.wa)throw Error("A custom element is already being defined.")}function Sp(t,r,o){t.wa=!0;var s;try{var l=o.prototype;if(!(l instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var m=function(N){var j=l[N];if(j!==void 0&&!(j instanceof Function))throw Error("The '"+N+"' callback must be a function.");return j},f=m("connectedCallback"),b=m("disconnectedCallback"),_=m("adoptedCallback"),x=(s=m("attributeChangedCallback"))&&o.observedAttributes||[]}catch(N){throw N}finally{t.wa=!1}return o={localName:r,constructorFunction:o,connectedCallback:f,disconnectedCallback:b,adoptedCallback:_,attributeChangedCallback:s,observedAttributes:x,constructionStack:[]},t.na.set(r,o),t.Fa.set(o.constructorFunction,o),o}n.upgrade=function(t){en(this.S,t)};function Np(t){if(t.V!==!1){t.V=!1;for(var r=[],o=t.oa,s=new Map,l=0;l<o.length;l++)s.set(o[l],[]);for(en(t.S,document,{upgrade:function(_){if(_.__CE_state===void 0){var x=_.localName,N=s.get(x);N?N.push(_):t.na.has(x)&&r.push(_)}}}),l=0;l<r.length;l++)tl(t.S,r[l]);for(l=0;l<o.length;l++){for(var m=o[l],f=s.get(m),b=0;b<f.length;b++)tl(t.S,f[b]);(m=t.za.get(m))&&m.resolve(void 0)}o.length=0}}n.get=function(t){if(t=el(this,t))return t.constructorFunction},n.whenDefined=function(t){if(!_p(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var r=this.za.get(t);if(r)return r.Ka;r=new xp,this.za.set(t,r);var o=this.na.has(t)||this.ma.has(t);return t=this.oa.indexOf(t)===-1,o&&t&&r.resolve(void 0),r.Ka},n.polyfillWrapFlushCallback=function(t){this.Ga&&Ep(this.Ga);var r=this.la;this.la=function(o){return t(function(){return r(o)})}};function el(t,r){var o=t.na.get(r);if(o)return o;if(o=t.ma.get(r)){t.ma.delete(r);try{return Sp(t,r,o())}catch(s){bi(s)}}}Ee.prototype.define=Ee.prototype.define,Ee.prototype.upgrade=Ee.prototype.upgrade,Ee.prototype.get=Ee.prototype.get,Ee.prototype.whenDefined=Ee.prototype.whenDefined,Ee.prototype.polyfillDefineLazy=Ee.prototype.jb,Ee.prototype.polyfillWrapFlushCallback=Ee.prototype.polyfillWrapFlushCallback;function Sc(t,r,o){function s(l){return function(m){for(var f=[],b=0;b<arguments.length;++b)f[b]=arguments[b];b=[];for(var _=[],x=0;x<f.length;x++){var N=f[x];if(N instanceof Element&&Rt(N)&&_.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)b.push(N);else b.push(N)}for(l.apply(this,f),f=0;f<_.length;f++)Ie(t,_[f]);if(Rt(this))for(f=0;f<b.length;f++)_=b[f],_ instanceof Element&&Pr(t,_)}}o.prepend!==void 0&&(r.prepend=s(o.prepend)),o.append!==void 0&&(r.append=s(o.append))}function Zu(t){Document.prototype.createElement=function(r){return yp(t,this,r,null)},Document.prototype.importNode=function(r,o){return r=Xs.call(this,r,!!o),this.__CE_registry?en(t,r):kc(t,r),r},Document.prototype.createElementNS=function(r,o){return yp(t,this,o,r)},Sc(t,Document.prototype,{prepend:Ks,append:Zs})}function Ju(t){function r(s){return function(l){for(var m=[],f=0;f<arguments.length;++f)m[f]=arguments[f];f=[];for(var b=[],_=0;_<m.length;_++){var x=m[_];if(x instanceof Element&&Rt(x)&&b.push(x),x instanceof DocumentFragment)for(x=x.firstChild;x;x=x.nextSibling)f.push(x);else f.push(x)}for(s.apply(this,m),m=0;m<b.length;m++)Ie(t,b[m]);if(Rt(this))for(m=0;m<f.length;m++)b=f[m],b instanceof Element&&Pr(t,b)}}var o=Element.prototype;mp!==void 0&&(o.before=r(mp)),up!==void 0&&(o.after=r(up)),fp!==void 0&&(o.replaceWith=function(s){for(var l=[],m=0;m<arguments.length;++m)l[m]=arguments[m];m=[];for(var f=[],b=0;b<l.length;b++){var _=l[b];if(_ instanceof Element&&Rt(_)&&f.push(_),_ instanceof DocumentFragment)for(_=_.firstChild;_;_=_.nextSibling)m.push(_);else m.push(_)}for(b=Rt(this),fp.apply(this,l),l=0;l<f.length;l++)Ie(t,f[l]);if(b)for(Ie(t,this),l=0;l<m.length;l++)f=m[l],f instanceof Element&&Pr(t,f)}),hp!==void 0&&(o.remove=function(){var s=Rt(this);hp.call(this),s&&Ie(t,this)})}function Qu(t){function r(l,m){Object.defineProperty(l,"innerHTML",{enumerable:m.enumerable,configurable:!0,get:m.get,set:function(f){var b=this,_=void 0;if(Rt(this)&&(_=[],za(t,this,function(j){j!==b&&_.push(j)})),m.set.call(this,f),_)for(var x=0;x<_.length;x++){var N=_[x];N.__CE_state===1&&t.disconnectedCallback(N)}return this.ownerDocument.__CE_registry?en(t,this):kc(t,this),f}})}function o(l,m){l.insertAdjacentElement=function(f,b){var _=Rt(b);return f=m.call(this,f,b),_&&Ie(t,b),Rt(f)&&Pr(t,b),f}}function s(l,m){function f(b,_){for(var x=[];b!==_;b=b.nextSibling)x.push(b);for(_=0;_<x.length;_++)en(t,x[_])}l.insertAdjacentHTML=function(b,_){if(b=b.toLowerCase(),b==="beforebegin"){var x=this.previousSibling;m.call(this,b,_),f(x||this.parentNode.firstChild,this)}else if(b==="afterbegin")x=this.firstChild,m.call(this,b,_),f(this.firstChild,x);else if(b==="beforeend")x=this.lastChild,m.call(this,b,_),f(x||this.firstChild,null);else if(b==="afterend")x=this.nextSibling,m.call(this,b,_),f(this.nextSibling,x);else throw new SyntaxError("The value provided ("+String(b)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}ip&&(Element.prototype.attachShadow=function(l){if(l=ip.call(this,l),t.W&&!l.__CE_patched){l.__CE_patched=!0;for(var m=0;m<t.ca.length;m++)t.ca[m](l)}return this.__CE_shadowRoot=l}),vc&&vc.get?r(Element.prototype,vc):yc&&yc.get?r(HTMLElement.prototype,yc):Ku(t,function(l){r(l,{enumerable:!0,configurable:!0,get:function(){return hi.call(this,!0).innerHTML},set:function(m){var f=this.localName==="template",b=f?this.content:this,_=fi.call(document,this.namespaceURI,this.localName);for(_.innerHTML=m;0<b.childNodes.length;)gc.call(b,b.childNodes[0]);for(m=f?_.content:_;0<m.childNodes.length;)xo.call(b,m.childNodes[0])}})}),Element.prototype.setAttribute=function(l,m){if(this.__CE_state!==1)return ap.call(this,l,m);var f=_c.call(this,l);ap.call(this,l,m),m=_c.call(this,l),t.attributeChangedCallback(this,l,f,m,null)},Element.prototype.setAttributeNS=function(l,m,f){if(this.__CE_state!==1)return lp.call(this,l,m,f);var b=Js.call(this,l,m);lp.call(this,l,m,f),f=Js.call(this,l,m),t.attributeChangedCallback(this,m,b,f,l)},Element.prototype.removeAttribute=function(l){if(this.__CE_state!==1)return sp.call(this,l);var m=_c.call(this,l);sp.call(this,l),m!==null&&t.attributeChangedCallback(this,l,m,null,null)},Element.prototype.removeAttributeNS=function(l,m){if(this.__CE_state!==1)return cp.call(this,l,m);var f=Js.call(this,l,m);cp.call(this,l,m);var b=Js.call(this,l,m);f!==b&&t.attributeChangedCallback(this,m,f,b,l)},gp?o(HTMLElement.prototype,gp):dp&&o(Element.prototype,dp),bp?s(HTMLElement.prototype,bp):pp&&s(Element.prototype,pp),Sc(t,Element.prototype,{prepend:Wu,append:Yu}),Ju(t)}var Tp={};function tf(t){function r(){var o=this.constructor,s=document.__CE_registry.Fa.get(o);if(!s)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var l=s.constructionStack;if(l.length===0)return l=yo.call(document,s.localName),Object.setPrototypeOf(l,o.prototype),l.__CE_state=1,l.__CE_definition=s,gi(t,l),l;var m=l.length-1,f=l[m];if(f===Tp)throw Error("Failed to construct '"+s.localName+"': This element was already constructed.");return l[m]=Tp,Object.setPrototypeOf(f,o.prototype),gi(t,f),f}r.prototype=qu.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:r}),window.HTMLElement=r}function ef(t){function r(o,s){Object.defineProperty(o,"textContent",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function(l){if(this.nodeType===Node.TEXT_NODE)s.set.call(this,l);else{var m=void 0;if(this.firstChild){var f=this.childNodes,b=f.length;if(0<b&&Rt(this)){m=Array(b);for(var _=0;_<b;_++)m[_]=f[_]}}if(s.set.call(this,l),m)for(l=0;l<m.length;l++)Ie(t,m[l])}}})}Node.prototype.insertBefore=function(o,s){if(o instanceof DocumentFragment){var l=xc(o);if(o=np.call(this,o,s),Rt(this))for(s=0;s<l.length;s++)Pr(t,l[s]);return o}return l=o instanceof Element&&Rt(o),s=np.call(this,o,s),l&&Ie(t,o),Rt(this)&&Pr(t,o),s},Node.prototype.appendChild=function(o){if(o instanceof DocumentFragment){var s=xc(o);if(o=xo.call(this,o),Rt(this))for(var l=0;l<s.length;l++)Pr(t,s[l]);return o}return s=o instanceof Element&&Rt(o),l=xo.call(this,o),s&&Ie(t,o),Rt(this)&&Pr(t,o),l},Node.prototype.cloneNode=function(o){return o=hi.call(this,!!o),this.ownerDocument.__CE_registry?en(t,o):kc(t,o),o},Node.prototype.removeChild=function(o){var s=o instanceof Element&&Rt(o),l=gc.call(this,o);return s&&Ie(t,o),l},Node.prototype.replaceChild=function(o,s){if(o instanceof DocumentFragment){var l=xc(o);if(o=op.call(this,o,s),Rt(this))for(Ie(t,s),s=0;s<l.length;s++)Pr(t,l[s]);return o}l=o instanceof Element&&Rt(o);var m=op.call(this,o,s),f=Rt(this);return f&&Ie(t,s),l&&Ie(t,o),f&&Pr(t,o),m},bc&&bc.get?r(Node.prototype,bc):Xu(t,function(o){r(o,{enumerable:!0,configurable:!0,get:function(){for(var s=[],l=this.firstChild;l;l=l.nextSibling)l.nodeType!==Node.COMMENT_NODE&&s.push(l.textContent);return s.join("")},set:function(s){for(;this.firstChild;)gc.call(this,this.firstChild);s!=null&&s!==""&&xo.call(this,document.createTextNode(s))}})})}var Lr=window.customElements;function Cp(){var t=new Qs;tf(t),Zu(t),Sc(t,DocumentFragment.prototype,{prepend:fc,append:hc}),ef(t),Qu(t),window.CustomElementRegistry=Ee,t=new Ee(t),document.__CE_registry=t,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:t})}Lr&&!Lr.forcePolyfill&&typeof Lr.define=="function"&&typeof Lr.get=="function"||Cp(),window.__CE_installPolyfill=Cp;function Nc(){this.end=this.start=0,this.rules=this.parent=this.previous=null,this.cssText=this.parsedCssText="",this.atRule=!1,this.type=0,this.parsedSelector=this.selector=this.keyframesName=""}function Tc(t){var r=t=t.replace(nf,"").replace(of,""),o=new Nc;o.start=0,o.end=r.length;for(var s=o,l=0,m=r.length;l<m;l++)if(r[l]==="{"){s.rules||(s.rules=[]);var f=s,b=f.rules[f.rules.length-1]||null;s=new Nc,s.start=l+1,s.parent=f,s.previous=b,f.rules.push(s)}else r[l]==="}"&&(s.end=l+1,s=s.parent||o);return Op(o,t)}function Op(t,r){var o=r.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=o.trim(),t.parent&&(o=r.substring(t.previous?t.previous.end:t.parent.start,t.start-1),o=rf(o),o=o.replace(Rp," "),o=o.substring(o.lastIndexOf(";")+1),o=t.parsedSelector=t.selector=o.trim(),t.atRule=o.indexOf("@")===0,t.atRule?o.indexOf("@media")===0?t.type=Pp:o.match(lf)&&(t.type=Cc,t.keyframesName=t.selector.split(Rp).pop()):t.type=o.indexOf("--")===0?Lp:Dp),o=t.rules)for(var s=0,l=o.length,m=void 0;s<l&&(m=o[s]);s++)Op(m,r);return t}function rf(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(r,o){for(r=o,o=6-r.length;o--;)r="0"+r;return"\\"+r})}function Ap(t,r,o){o=o===void 0?"":o;var s="";if(t.cssText||t.rules){var l=t.rules,m;if((m=l)&&(m=l[0],m=!(m&&m.selector&&m.selector.indexOf("--")===0)),m){m=0;for(var f=l.length,b=void 0;m<f&&(b=l[m]);m++)s=Ap(b,r,s)}else r?r=t.cssText:(r=t.cssText,r=r.replace(Mp,"").replace(jp,""),r=r.replace(af,"").replace(sf,"")),(s=r.trim())&&(s="  "+s+`
`)}return s&&(t.selector&&(o+=t.selector+` {
`),o+=s,t.selector&&(o+=`}

`)),o}var Dp=1,Cc=7,Pp=4,Lp=1e3,nf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,of=/@import[^;]*;/gim,Mp=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,jp=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,af=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,sf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,lf=/^@[^\s]*keyframes/,Rp=/\s+/g,Xt=!(window.ShadyDOM&&window.ShadyDOM.inUse),Oc;function Ip(t){Oc=t&&t.shimcssproperties?!1:Xt||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var rl;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(rl=window.ShadyCSS.cssBuild);var vi=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Oc=window.ShadyCSS.nativeCss:window.ShadyCSS?(Ip(window.ShadyCSS),window.ShadyCSS=void 0):Ip(window.WebComponents&&window.WebComponents.flags);var Te=Oc,nl=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ol=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,cf=/(--[\w-]+)\s*([:,;)]|$)/gi,df=/(animation\s*:)|(animation-name\s*:)/,pf=/@media\s(.*)/,mf=/\{[^}]*\}/g,$p=new Set;function _i(t,r){return t?(typeof t=="string"&&(t=Tc(t)),r&&yi(t,r),Ap(t,Te)):""}function Ba(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=Tc(t.textContent)),t.__cssRules||null}function zp(t){return!!t.parent&&t.parent.type===Cc}function yi(t,r,o,s){if(t){var l=!1,m=t.type;if(s&&m===Pp){var f=t.selector.match(pf);f&&(window.matchMedia(f[1]).matches||(l=!0))}if(m===Dp?r(t):o&&m===Cc?o(t):m===Lp&&(l=!0),(t=t.rules)&&!l)for(l=0,m=t.length,f=void 0;l<m&&(f=t[l]);l++)yi(f,r,o,s)}}function Ac(t,r,o,s){var l=document.createElement("style");return r&&l.setAttribute("scope",r),l.textContent=t,Fp(l,o,s),l}var wo=null;function Bp(t){t=document.createComment(" Shady DOM styles for "+t+" ");var r=document.head;return r.insertBefore(t,(wo?wo.nextSibling:null)||r.firstChild),wo=t}function Fp(t,r,o){r=r||document.head,r.insertBefore(t,o&&o.nextSibling||r.firstChild),wo?t.compareDocumentPosition(wo)===Node.DOCUMENT_POSITION_PRECEDING&&(wo=t):wo=t}function Dc(t,r){for(var o=0,s=t.length;r<s;r++)if(t[r]==="(")o++;else if(t[r]===")"&&--o===0)return r;return-1}function Up(t,r){var o=t.indexOf("var(");if(o===-1)return r(t,"","","");var s=Dc(t,o+3),l=t.substring(o+4,s);return o=t.substring(0,o),t=Up(t.substring(s+1),r),s=l.indexOf(","),s===-1?r(o,l.trim(),"",t):r(o,l.substring(0,s).trim(),l.substring(s+1).trim(),t)}function il(t,r){Xt?t.setAttribute("class",r):window.ShadyDOM.nativeMethods.setAttribute.call(t,"class",r)}var Fa=window.ShadyDOM&&window.ShadyDOM.wrap||function(t){return t};function Eo(t){var r=t.localName,o="";return r?-1<r.indexOf("-")||(o=r,r=t.getAttribute&&t.getAttribute("is")||""):(r=t.is,o=t.extends),{is:r,ja:o}}function Hp(t){for(var r=[],o="",s=0;0<=s&&s<t.length;s++)if(t[s]==="("){var l=Dc(t,s);o+=t.slice(s,l+1),s=l}else t[s]===","?(r.push(o),o=""):o+=t[s];return o&&r.push(o),r}function xi(t){if(rl!==void 0)return rl;if(t.__cssBuild===void 0){var r=t.getAttribute("css-build");if(r)t.__cssBuild=r;else{t:{if(r=t.localName==="template"?t.content.firstChild:t.firstChild,r instanceof Comment&&(r=r.textContent.trim().split(":"),r[0]==="css-build")){r=r[1];break t}r=""}if(r!==""){var o=t.localName==="template"?t.content.firstChild:t.firstChild;o.parentNode.removeChild(o)}t.__cssBuild=r}}return t.__cssBuild||""}function Pc(t){return t=t===void 0?"":t,t!==""&&Te?Xt?t==="shadow":t==="shady":!1}function al(){}function uf(t,r){sl(ir,t,function(o){ko(o,r||"")})}function sl(t,r,o){r.nodeType===Node.ELEMENT_NODE&&o(r);var s;if(r.localName==="template"?s=(r.content||r._content||r).childNodes:s=r.children||r.childNodes,s)for(r=0;r<s.length;r++)sl(t,s[r],o)}function ko(t,r,o){if(r){if(t.classList)o?(t.classList.remove("style-scope"),t.classList.remove(r)):(t.classList.add("style-scope"),t.classList.add(r));else if(t.getAttribute){var s=t.getAttribute("class");o?s&&(r=s.replace("style-scope","").replace(r,""),il(t,r)):il(t,(s?s+" ":"")+"style-scope "+r)}}}function ff(t,r,o){sl(ir,t,function(s){ko(s,r,!0),ko(s,o)})}function hf(t,r){sl(ir,t,function(o){ko(o,r||"",!0)})}function ll(t,r,o,s,l){var m=ir;return l=l===void 0?"":l,l===""&&(Xt||(s===void 0?"":s)==="shady"?l=_i(r,o):(t=Eo(t),l=gf(m,r,t.is,t.ja,o)+`

`)),l.trim()}function gf(t,r,o,s,l){var m=Lc(o,s);return o=o?"."+o:"",_i(r,function(f){f.i||(f.selector=f.G=Mc(t,f,t.h,o,m),f.i=!0),l&&l(f,o,m)})}function Lc(t,r){return r?"[is="+t+"]":t}function Mc(t,r,o,s,l){var m=Hp(r.selector);if(!zp(r)){r=0;for(var f=m.length,b=void 0;r<f&&(b=m[r]);r++)m[r]=o.call(t,b,s,l)}return m.filter(function(_){return!!_}).join(",")}function Gp(t){return t.replace(jc,function(r,o,s){return-1<s.indexOf("+")?s=s.replace(/\+/g,"___"):-1<s.indexOf("___")&&(s=s.replace(/___/g,"+")),":"+o+"("+s+")"})}function bf(t){for(var r=[],o;o=t.match(Xp);){var s=o.index,l=Dc(t,s);if(l===-1)throw Error(o.input+" selector missing ')'");o=t.slice(s,l+1),t=t.replace(o,"\uE000"),r.push(o)}return{Ea:t,matches:r}}function vf(t,r){var o=t.split("\uE000");return r.reduce(function(s,l,m){return s+l+o[m+1]},o[0])}al.prototype.h=function(t,r,o){var s=!1;t=t.trim();var l=jc.test(t);l&&(t=t.replace(jc,function(b,_,x){return":"+_+"("+x.replace(/\s/g,"")+")"}),t=Gp(t));var m=Xp.test(t);if(m){var f=bf(t);t=f.Ea,f=f.matches}return t=t.replace(wf,":host $1"),t=t.replace(xf,function(b,_,x){return s||(b=_f(x,_,r,o),s=s||b.stop,_=b.Ya,x=b.value),_+x}),m&&(t=vf(t,f)),l&&(t=Gp(t)),t=t.replace(kf,function(b,_,x,N){return'[dir="'+x+'"] '+_+N+", "+_+'[dir="'+x+'"]'+N})};function _f(t,r,o,s){var l=t.indexOf("::slotted");if(0<=t.indexOf(":host")?t=yf(t,s):l!==0&&(t=o?Wp(t,o):t),o=!1,0<=l&&(r="",o=!0),o){var m=!0;o&&(t=t.replace(Ef,function(f,b){return" > "+b}))}return{value:t,Ya:r,stop:m}}function Wp(t,r){t=t.split(/(\[.+?\])/);for(var o=[],s=0;s<t.length;s++)if(s%2===1)o.push(t[s]);else{var l=t[s];(l!==""||s!==t.length-1)&&(l=l.split(":"),l[0]+=r,o.push(l.join(":")))}return o.join("")}function yf(t,r){var o=t.match(Vp);return(o=o&&o[2].trim()||"")?o[0].match(qp)?t.replace(Vp,function(s,l,m){return r+m}):o.split(qp)[0]===r?o:"should_not_match":t.replace(":host",r)}function Yp(t){t.selector===":root"&&(t.selector="html")}al.prototype.i=function(t){return t.match(":host")?"":t.match("::slotted")?this.h(t,":not(.style-scope)"):Wp(t.trim(),":not(.style-scope)")},p.Object.defineProperties(al.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});var jc=/:(nth[-\w]+)\(([^)]+)\)/,xf=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,qp=/[[.:#*]/,wf=/^(::slotted)/,Vp=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Ef=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,kf=/(.*):dir\((?:(ltr|rtl))\)(.*)/,Xp=/:(?:matches|any|-(?:webkit|moz)-any)/,ir=new al;function wi(t,r,o,s,l){this.M=t||null,this.h=r||null,this.Ca=o||[],this.K=null,this.cssBuild=l||"",this.ja=s||"",this.g=this.L=this.R=null}function ar(t){return t?t.__styleInfo:null}function Rc(t,r){return t.__styleInfo=r}wi.prototype.i=function(){return this.M},wi.prototype._getStyleRules=wi.prototype.i;function Kp(t){var r=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return r&&r.call(this,t)}var Sf=/:host\s*>\s*/,Nf=navigator.userAgent.match("Trident");function Zp(){}function Tf(t){var r={},o=[],s=0;yi(t,function(m){cl(m),m.index=s++,m=m.F.cssText;for(var f;f=cf.exec(m);){var b=f[1];f[2]!==":"&&(r[b]=!0)}},function(m){o.push(m)}),t.h=o,t=[];for(var l in r)t.push(l);return t}function cl(t){if(!t.F){var r={},o={};dl(t,o)&&(r.P=o,t.rules=null),r.cssText=t.parsedCssText.replace(mf,"").replace(nl,""),t.F=r}}function dl(t,r){var o=t.F;if(o){if(o.P)return Object.assign(r,o.P),!0}else{o=t.parsedCssText;for(var s;t=nl.exec(o);)s=(t[2]||t[3]).trim(),(s!=="inherit"||s!=="unset")&&(r[t[1].trim()]=s),s=!0;return s}}function Ua(t,r,o){return r&&(r=0<=r.indexOf(";")?Ic(t,r,o):Up(r,function(s,l,m,f){return l?((l=Ua(t,o[l],o))&&l!=="initial"?l==="apply-shim-inherit"&&(l="inherit"):l=Ua(t,o[m]||m,o)||m,s+(l||"")+f):s+f})),r&&r.trim()||""}function Ic(t,r,o){r=r.split(";");for(var s=0,l,m;s<r.length;s++)if(l=r[s]){if(ol.lastIndex=0,m=ol.exec(l))l=Ua(t,o[m[1]],o);else if(m=l.indexOf(":"),m!==-1){var f=l.substring(m);f=f.trim(),f=Ua(t,f,o)||f,l=l.substring(0,m)+f}r[s]=l&&l.lastIndexOf(";")===l.length-1?l.slice(0,-1):l||""}return r.join(";")}function Cf(t,r){var o={},s=[];return yi(t,function(l){l.F||cl(l);var m=l.G||l.parsedSelector;r&&l.F.P&&m&&Kp.call(r,m)&&(dl(l,o),l=l.index,m=parseInt(l/32,10),s[m]=(s[m]||0)|1<<l%32)},null,!0),{P:o,key:s}}function Of(t,r,o,s){if(r.F||cl(r),r.F.P){var l=Eo(t);t=l.is,l=l.ja,l=t?Lc(t,l):"html";var m=r.parsedSelector,f=!!m.match(Sf)||l==="html"&&-1<m.indexOf("html"),b=m.indexOf(":host")===0&&!f;o==="shady"&&(f=m===l+" > *."+l||m.indexOf("html")!==-1,b=!f&&m.indexOf(l)===0),(f||b)&&(o=l,b&&(r.G||(r.G=Mc(ir,r,ir.h,t?"."+t:"",l)),o=r.G||l),f&&l==="html"&&(o=r.G||r.O),s({Ea:o,gb:b,vb:f}))}}function Af(t,r,o){var s={},l={};return yi(r,function(m){Of(t,m,o,function(f){Kp.call(t._element||t,f.Ea)&&(f.gb?dl(m,s):dl(m,l))})},null,!0),{mb:l,eb:s}}function Df(t,r,o,s){var l=Eo(r),m=Lc(l.is,l.ja),f=new RegExp("(?:^|[^.#[:])"+(r.extends?"\\"+m.slice(0,-1)+"\\]":m)+"($|[.:[\\s>+~])"),b=ar(r);l=b.M,b=b.cssBuild;var _=Pf(l,s);return ll(r,l,function(x){var N="";if(x.F||cl(x),x.F.cssText&&(N=Ic(t,x.F.cssText,o)),x.cssText=N,!Xt&&!zp(x)&&x.cssText){var j=N=x.cssText;if(x.Ma==null&&(x.Ma=df.test(N)),x.Ma)if(x.ra==null){x.ra=[];for(var kt in _)j=_[kt],j=j(N),N!==j&&(N=j,x.ra.push(kt))}else{for(kt=0;kt<x.ra.length;++kt)j=_[x.ra[kt]],N=j(N);j=N}x.cssText=j,x.G=x.G||x.selector,N="."+s,kt=Hp(x.G),j=0;for(var dt=kt.length,z=void 0;j<dt&&(z=kt[j]);j++)kt[j]=z.match(f)?z.replace(m,N):N+" "+z;x.selector=kt.join(",")}},b)}function Pf(t,r){t=t.h;var o={};if(!Xt&&t)for(var s=0,l=t[s];s<t.length;l=t[++s]){var m=l,f=r;m.u=new RegExp("\\b"+m.keyframesName+"(?!\\B|-)","g"),m.g=m.keyframesName+"-"+f,m.G=m.G||m.selector,m.selector=m.G.replace(m.keyframesName,m.g),o[l.keyframesName]=Lf(l)}return o}function Lf(t){return function(r){return r.replace(t.u,t.g)}}function Mf(t,r){var o=pl,s=Ba(t);t.textContent=_i(s,function(l){var m=l.cssText=l.parsedCssText;l.F&&l.F.cssText&&(m=m.replace(Mp,"").replace(jp,""),l.cssText=Ic(o,m,r))})}p.Object.defineProperties(Zp.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var pl=new Zp,Ei={},ml=window.customElements;if(ml&&!Xt&&!vi){var jf=ml.define;ml.define=function(t,r,o){Ei[t]||(Ei[t]=Bp(t)),jf.call(ml,t,r,o)}}function Jp(){this.cache={}}Jp.prototype.store=function(t,r,o,s){var l=this.cache[t]||[];l.push({P:r,styleElement:o,L:s}),100<l.length&&l.shift(),this.cache[t]=l};function Qp(){}var Rf=new RegExp(ir.g+"\\s*([^\\s]*)");function tm(t){return(t=(t.classList&&t.classList.value?t.classList.value:t.getAttribute("class")||"").match(Rf))?t[1]:""}function $c(t){var r=Fa(t).getRootNode();return r===t||r===t.ownerDocument?"":(t=r.host)?Eo(t).is:""}function em(t){for(var r=0;r<t.length;r++){var o=t[r];if(o.target!==document.documentElement&&o.target!==document.head)for(var s=0;s<o.addedNodes.length;s++){var l=o.addedNodes[s];if(l.nodeType===Node.ELEMENT_NODE){var m=l.getRootNode(),f=tm(l);if(f&&m===l.ownerDocument&&(l.localName!=="style"&&l.localName!=="template"||xi(l)===""))hf(l,f);else if(m instanceof ShadowRoot)for(m=$c(l),m!==f&&ff(l,f,m),l=window.ShadyDOM.nativeMethods.querySelectorAll.call(l,":not(."+ir.g+")"),f=0;f<l.length;f++){m=l[f];var b=$c(m);b&&ko(m,b)}}}}}if(!(Xt||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var rm=new MutationObserver(em),nm=function(t){rm.observe(t,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)nm(document);else{var zc=function(){nm(document.body)};window.HTMLImports?window.HTMLImports.whenReady(zc):requestAnimationFrame(function(){if(document.readyState==="loading"){var t=function(){zc(),document.removeEventListener("readystatechange",t)};document.addEventListener("readystatechange",t)}else zc()})}Qp=function(){em(rm.takeRecords())}}var ul={},If=Promise.resolve();function $f(t){(t=ul[t])&&(t._applyShimCurrentVersion=t._applyShimCurrentVersion||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t._applyShimNextVersion=(t._applyShimNextVersion||0)+1)}function om(t){return t._applyShimCurrentVersion===t._applyShimNextVersion}function zf(t){t._applyShimValidatingVersion=t._applyShimNextVersion,t._validating||(t._validating=!0,If.then(function(){t._applyShimCurrentVersion=t._applyShimNextVersion,t._validating=!1}))}var im={},am=new Jp;function ct(){this.ea={},this.i=document.documentElement;var t=new Nc;t.rules=[],this.u=Rc(this.i,new wi(t)),this.O=!1,this.g=this.h=null}n=ct.prototype,n.flush=function(){Qp()},n.bb=function(t){return Ba(t)},n.qb=function(t){return _i(t)},n.prepareTemplate=function(t,r,o){this.prepareTemplateDom(t,r),this.prepareTemplateStyles(t,r,o)},n.prepareTemplateStyles=function(t,r,o){if(!t._prepared&&!vi){Xt||Ei[r]||(Ei[r]=Bp(r)),t._prepared=!0,t.name=r,t.extends=o,ul[r]=t;var s=xi(t),l=Pc(s);o={is:r,extends:o};for(var m=[],f=t.content.querySelectorAll("style"),b=0;b<f.length;b++){var _=f[b];if(_.hasAttribute("shady-unscoped")){if(!Xt){var x=_.textContent;if(!$p.has(x)){$p.add(x);var N=document.createElement("style");N.setAttribute("shady-unscoped",""),N.textContent=x,document.head.appendChild(N)}_.parentNode.removeChild(_)}}else m.push(_.textContent),_.parentNode.removeChild(_)}m=m.join("").trim()+(im[r]||""),Ha(this),l||((f=!s)&&(f=ol.test(m)||nl.test(m),ol.lastIndex=0,nl.lastIndex=0),b=Tc(m),f&&Te&&this.h&&this.h.transformRules(b,r),t._styleAst=b),f=[],Te||(f=Tf(t._styleAst)),(!f.length||Te)&&(b=Xt?t.content:null,r=Ei[r]||null,s=ll(o,t._styleAst,null,s,l?m:""),s=s.length?Ac(s,o.is,b,r):null,t._style=s),t.g=f}},n.kb=function(t,r){im[r]=t.join(" ")},n.prepareTemplateDom=function(t,r){if(!vi){var o=xi(t);Xt||o==="shady"||t._domPrepared||(t._domPrepared=!0,uf(t.content,r))}};function sm(t){var r=Eo(t),o=r.is;r=r.ja;var s=Ei[o]||null,l=ul[o];if(l){o=l._styleAst;var m=l.g;return l=xi(l),r=new wi(o,s,m,r,l),Rc(t,r),r}}function Bf(t){!t.g&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(t.g=window.ShadyCSS.CustomStyleInterface,t.g.transformCallback=function(r){t.Qa(r)},t.g.validateCallback=function(){requestAnimationFrame(function(){(t.g.enqueued||t.O)&&t.flushCustomStyles()})})}function Ha(t){if(!t.h&&window.ShadyCSS&&window.ShadyCSS.ApplyShim){t.h=window.ShadyCSS.ApplyShim,t.h.invalidCallback=$f;var r=!0}else r=!1;return Bf(t),r}n.flushCustomStyles=function(){if(!vi){var t=Ha(this);if(this.g){var r=this.g.processStyles();if((t||this.g.enqueued)&&!Pc(this.u.cssBuild)){if(Te){if(!this.u.cssBuild)for(t=0;t<r.length;t++){var o=this.g.getStyleForCustomStyle(r[t]);if(o&&Te&&this.h){var s=Ba(o);Ha(this),this.h.transformRules(s),o.textContent=_i(s)}}}else{for(Ff(this,r),Fc(this,this.i,this.u),t=0;t<r.length;t++)(o=this.g.getStyleForCustomStyle(r[t]))&&Mf(o,this.u.R);this.O&&this.styleDocument()}this.g.enqueued=!1}}}};function Ff(t,r){r=r.map(function(o){return t.g.getStyleForCustomStyle(o)}).filter(function(o){return!!o}),r.sort(function(o,s){return o=s.compareDocumentPosition(o),o&Node.DOCUMENT_POSITION_FOLLOWING?1:o&Node.DOCUMENT_POSITION_PRECEDING?-1:0}),t.u.M.rules=r.map(function(o){return Ba(o)})}n.styleElement=function(t,r){if(vi){if(r){ar(t)||Rc(t,new wi(null));var o=ar(t);o.K=o.K||{},Object.assign(o.K,r),lm(this,t,o)}}else if(o=ar(t)||sm(t)){if(t!==this.i&&(this.O=!0),r&&(o.K=o.K||{},Object.assign(o.K,r)),Te)lm(this,t,o);else if(this.flush(),Fc(this,t,o),o.Ca&&o.Ca.length){r=Eo(t).is;var s;t:{if(s=am.cache[r])for(var l=s.length-1;0<=l;l--){var m=s[l];e:{for(var f=o.Ca,b=0;b<f.length;b++){var _=f[b];if(m.P[_]!==o.R[_]){f=!1;break e}}f=!0}if(f){s=m;break t}}s=void 0}f=s?s.styleElement:null,l=o.L,(m=s&&s.L)||(m=this.ea[r]=(this.ea[r]||0)+1,m=r+"-"+m),o.L=m,m=o.L,b=pl,b=f?f.textContent||"":Df(b,t,o.R,m),_=ar(t);var x=_.g;x&&!Xt&&x!==f&&(x._useCount--,0>=x._useCount&&x.parentNode&&x.parentNode.removeChild(x)),Xt?_.g?(_.g.textContent=b,f=_.g):b&&(f=Ac(b,m,t.shadowRoot,_.h)):f?f.parentNode||(Nf&&-1<b.indexOf("@media")&&(f.textContent=b),Fp(f,null,_.h)):b&&(f=Ac(b,m,null,_.h)),f&&(f._useCount=f._useCount||0,_.g!=f&&f._useCount++,_.g=f),m=f,Xt||(f=o.L,_=b=t.getAttribute("class")||"",l&&(_=b.replace(new RegExp("\\s*x-scope\\s*"+l+"\\s*","g")," ")),_+=(_?" ":"")+"x-scope "+f,b!==_&&il(t,_)),s||am.store(r,o.R,m,o.L)}}};function lm(t,r,o){var s=Eo(r).is;if(o.K){var l=o.K,m;for(m in l)m===null?r.style.removeProperty(m):r.style.setProperty(m,l[m])}l=ul[s],!(!l&&r!==t.i||l&&xi(l)!=="")&&l&&l._style&&!om(l)&&((om(l)||l._applyShimValidatingVersion!==l._applyShimNextVersion)&&(Ha(t),t.h&&t.h.transformRules(l._styleAst,s),l._style.textContent=ll(r,o.M),zf(l)),Xt&&(t=r.shadowRoot)&&(t=t.querySelector("style"))&&(t.textContent=ll(r,o.M)),o.M=l._styleAst)}function Bc(t,r){return(r=Fa(r).getRootNode().host)?ar(r)||sm(r)?r:Bc(t,r):t.i}function Fc(t,r,o){var s=Bc(t,r),l=ar(s),m=l.R;s===t.i||m||(Fc(t,s,l),m=l.R),t=Object.create(m||null),s=Af(r,o.M,o.cssBuild),r=Cf(l.M,r).P,Object.assign(t,s.eb,r,s.mb),r=o.K;for(var f in r)((l=r[f])||l===0)&&(t[f]=l);for(f=pl,r=Object.getOwnPropertyNames(t),l=0;l<r.length;l++)s=r[l],t[s]=Ua(f,t[s],t);o.R=t}n.styleDocument=function(t){this.styleSubtree(this.i,t)},n.styleSubtree=function(t,r){var o=Fa(t),s=o.shadowRoot,l=t===this.i;if((s||l)&&this.styleElement(t,r),t=l?o:s)for(t=Array.from(t.querySelectorAll("*")).filter(function(m){return Fa(m).shadowRoot}),r=0;r<t.length;r++)this.styleSubtree(t[r])},n.Qa=function(t){var r=this,o=xi(t);if(o!==this.u.cssBuild&&(this.u.cssBuild=o),!Pc(o)){var s=Ba(t);yi(s,function(l){if(Xt)Yp(l);else{var m=ir;l.selector=l.parsedSelector,Yp(l),l.selector=l.G=Mc(m,l,m.i,void 0,void 0)}Te&&o===""&&(Ha(r),r.h&&r.h.transformRule(l))}),Te?t.textContent=_i(s):this.u.M.rules.push(s)}},n.getComputedStyleValue=function(t,r){var o;return Te||(o=(ar(t)||ar(Bc(this,t))).R[r]),(o=o||window.getComputedStyle(t).getPropertyValue(r))?o.trim():""},n.pb=function(t,r){var o=Fa(t).getRootNode();if(r=r?(typeof r=="string"?r:String(r)).split(/\s/):[],o=o.host&&o.host.localName,!o){var s=t.getAttribute("class");if(s){s=s.split(/\s/);for(var l=0;l<s.length;l++)if(s[l]===ir.g){o=s[l+1];break}}}o&&r.push(ir.g,o),Te||(o=ar(t))&&o.L&&r.push(pl.g,o.L),il(t,r.join(" "))},n.Xa=function(t){return ar(t)},n.ob=function(t,r){ko(t,r)},n.rb=function(t,r){ko(t,r,!0)},n.nb=function(t){return $c(t)},n.$a=function(t){return tm(t)},ct.prototype.flush=ct.prototype.flush,ct.prototype.prepareTemplate=ct.prototype.prepareTemplate,ct.prototype.styleElement=ct.prototype.styleElement,ct.prototype.styleDocument=ct.prototype.styleDocument,ct.prototype.styleSubtree=ct.prototype.styleSubtree,ct.prototype.getComputedStyleValue=ct.prototype.getComputedStyleValue,ct.prototype.setElementClass=ct.prototype.pb,ct.prototype._styleInfoForNode=ct.prototype.Xa,ct.prototype.transformCustomStyleForDocument=ct.prototype.Qa,ct.prototype.getStyleAst=ct.prototype.bb,ct.prototype.styleAstToString=ct.prototype.qb,ct.prototype.flushCustomStyles=ct.prototype.flushCustomStyles,ct.prototype.scopeNode=ct.prototype.ob,ct.prototype.unscopeNode=ct.prototype.rb,ct.prototype.scopeForNode=ct.prototype.nb,ct.prototype.currentScopeForNode=ct.prototype.$a,ct.prototype.prepareAdoptedCssText=ct.prototype.kb,Object.defineProperties(ct.prototype,{nativeShadow:{get:function(){return Xt}},nativeCss:{get:function(){return Te}}});var Ce=new ct,Uc,Hc;window.ShadyCSS&&(Uc=window.ShadyCSS.ApplyShim,Hc=window.ShadyCSS.CustomStyleInterface),window.ShadyCSS={ScopingShim:Ce,prepareTemplate:function(t,r,o){Ce.flushCustomStyles(),Ce.prepareTemplate(t,r,o)},prepareTemplateDom:function(t,r){Ce.prepareTemplateDom(t,r)},prepareTemplateStyles:function(t,r,o){Ce.flushCustomStyles(),Ce.prepareTemplateStyles(t,r,o)},styleSubtree:function(t,r){Ce.flushCustomStyles(),Ce.styleSubtree(t,r)},styleElement:function(t){Ce.flushCustomStyles(),Ce.styleElement(t)},styleDocument:function(t){Ce.flushCustomStyles(),Ce.styleDocument(t)},flushCustomStyles:function(){Ce.flushCustomStyles()},getComputedStyleValue:function(t,r){return Ce.getComputedStyleValue(t,r)},nativeCss:Te,nativeShadow:Xt,cssBuild:rl,disableRuntime:vi},Uc&&(window.ShadyCSS.ApplyShim=Uc),Hc&&(window.ShadyCSS.CustomStyleInterface=Hc),function(t){function r(z){return z==""&&(m.call(this),this.m=!0),z.toLowerCase()}function o(z){var bt=z.charCodeAt(0);return 32<bt&&127>bt&&[34,35,60,62,63,96].indexOf(bt)==-1?z:encodeURIComponent(z)}function s(z){var bt=z.charCodeAt(0);return 32<bt&&127>bt&&[34,35,60,62,96].indexOf(bt)==-1?z:encodeURIComponent(z)}function l(z,bt,pt){function Ut(lr){zn.push(lr)}var et=bt||"scheme start",Oe=0,G="",$n=!1,sr=!1,zn=[];t:for(;(z[Oe-1]!=null||Oe==0)&&!this.m;){var T=z[Oe];switch(et){case"scheme start":if(T&&j.test(T))G+=T.toLowerCase(),et="scheme";else if(bt){Ut("Invalid scheme.");break t}else{G="",et="no scheme";continue}break;case"scheme":if(T&&kt.test(T))G+=T.toLowerCase();else if(T==":"){if(this.l=G,G="",bt)break t;x[this.l]!==void 0&&(this.H=!0),et=this.l=="file"?"relative":this.H&&pt&&pt.l==this.l?"relative or authority":this.H?"authority first slash":"scheme data"}else if(bt){T!=null&&Ut("Code point not allowed in scheme: "+T);break t}else{G="",Oe=0,et="no scheme";continue}break;case"scheme data":T=="?"?(this.A="?",et="query"):T=="#"?(this.C="#",et="fragment"):T!=null&&T!="	"&&T!=`
`&&T!="\r"&&(this.ya+=o(T));break;case"no scheme":if(pt&&x[pt.l]!==void 0){et="relative";continue}else Ut("Missing scheme."),m.call(this),this.m=!0;break;case"relative or authority":if(T=="/"&&z[Oe+1]=="/")et="authority ignore slashes";else{Ut("Expected /, got: "+T),et="relative";continue}break;case"relative":if(this.H=!0,this.l!="file"&&(this.l=pt.l),T==null){this.o=pt.o,this.v=pt.v,this.s=pt.s.slice(),this.A=pt.A,this.B=pt.B,this.j=pt.j;break t}else if(T=="/"||T=="\\")T=="\\"&&Ut("\\ is an invalid code point."),et="relative slash";else if(T=="?")this.o=pt.o,this.v=pt.v,this.s=pt.s.slice(),this.A="?",this.B=pt.B,this.j=pt.j,et="query";else if(T=="#")this.o=pt.o,this.v=pt.v,this.s=pt.s.slice(),this.A=pt.A,this.C="#",this.B=pt.B,this.j=pt.j,et="fragment";else{et=z[Oe+1];var Ct=z[Oe+2];(this.l!="file"||!j.test(T)||et!=":"&&et!="|"||Ct!=null&&Ct!="/"&&Ct!="\\"&&Ct!="?"&&Ct!="#")&&(this.o=pt.o,this.v=pt.v,this.B=pt.B,this.j=pt.j,this.s=pt.s.slice(),this.s.pop()),et="relative path";continue}break;case"relative slash":if(T=="/"||T=="\\")T=="\\"&&Ut("\\ is an invalid code point."),et=this.l=="file"?"file host":"authority ignore slashes";else{this.l!="file"&&(this.o=pt.o,this.v=pt.v,this.B=pt.B,this.j=pt.j),et="relative path";continue}break;case"authority first slash":if(T=="/")et="authority second slash";else{Ut("Expected '/', got: "+T),et="authority ignore slashes";continue}break;case"authority second slash":if(et="authority ignore slashes",T!="/"){Ut("Expected '/', got: "+T);continue}break;case"authority ignore slashes":if(T!="/"&&T!="\\"){et="authority";continue}else Ut("Expected authority, got: "+T);break;case"authority":if(T=="@"){for($n&&(Ut("@ already seen."),G+="%40"),$n=!0,T=0;T<G.length;T++)Ct=G[T],Ct=="	"||Ct==`
`||Ct=="\r"?Ut("Invalid whitespace in authority."):Ct==":"&&this.j===null?this.j="":(Ct=o(Ct),this.j!==null?this.j+=Ct:this.B+=Ct);G=""}else if(T==null||T=="/"||T=="\\"||T=="?"||T=="#"){Oe-=G.length,G="",et="host";continue}else G+=T;break;case"file host":if(T==null||T=="/"||T=="\\"||T=="?"||T=="#"){G.length!=2||!j.test(G[0])||G[1]!=":"&&G[1]!="|"?(G.length!=0&&(this.o=r.call(this,G),G=""),et="relative path start"):et="relative path";continue}else T=="	"||T==`
`||T=="\r"?Ut("Invalid whitespace in file host."):G+=T;break;case"host":case"hostname":if(T!=":"||sr)if(T==null||T=="/"||T=="\\"||T=="?"||T=="#"){if(this.o=r.call(this,G),G="",et="relative path start",bt)break t;continue}else T!="	"&&T!=`
`&&T!="\r"?(T=="["?sr=!0:T=="]"&&(sr=!1),G+=T):Ut("Invalid code point in host/hostname: "+T);else if(this.o=r.call(this,G),G="",et="port",bt=="hostname")break t;break;case"port":if(/[0-9]/.test(T))G+=T;else if(T==null||T=="/"||T=="\\"||T=="?"||T=="#"||bt){if(G!=""&&(G=parseInt(G,10),G!=x[this.l]&&(this.v=G+""),G=""),bt)break t;et="relative path start";continue}else T=="	"||T==`
`||T=="\r"?Ut("Invalid code point in port: "+T):(m.call(this),this.m=!0);break;case"relative path start":if(T=="\\"&&Ut("'\\' not allowed in path."),et="relative path",T!="/"&&T!="\\")continue;break;case"relative path":T!=null&&T!="/"&&T!="\\"&&(bt||T!="?"&&T!="#")?T!="	"&&T!=`
`&&T!="\r"&&(G+=o(T)):(T=="\\"&&Ut("\\ not allowed in relative path."),(Ct=N[G.toLowerCase()])&&(G=Ct),G==".."?(this.s.pop(),T!="/"&&T!="\\"&&this.s.push("")):G=="."&&T!="/"&&T!="\\"?this.s.push(""):G!="."&&(this.l=="file"&&this.s.length==0&&G.length==2&&j.test(G[0])&&G[1]=="|"&&(G=G[0]+":"),this.s.push(G)),G="",T=="?"?(this.A="?",et="query"):T=="#"&&(this.C="#",et="fragment"));break;case"query":bt||T!="#"?T!=null&&T!="	"&&T!=`
`&&T!="\r"&&(this.A+=s(T)):(this.C="#",et="fragment");break;case"fragment":T!=null&&T!="	"&&T!=`
`&&T!="\r"&&(this.C+=T)}Oe++}}function m(){this.B=this.ya=this.l="",this.j=null,this.v=this.o="",this.s=[],this.C=this.A="",this.H=this.m=!1}function f(z,bt){bt===void 0||bt instanceof f||(bt=new f(String(bt))),this.g=z,m.call(this),l.call(this,this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,""),null,bt)}var b=!1;try{var _=new URL("b","http://a");_.pathname="c%20d",b=_.href==="http://a/c%20d"}catch{}if(!b){var x=Object.create(null);x.ftp=21,x.file=0,x.gopher=70,x.http=80,x.https=443,x.ws=80,x.wss=443;var N=Object.create(null);N["%2e"]=".",N[".%2e"]="..",N["%2e."]="..",N["%2e%2e"]="..";var j=/[a-zA-Z]/,kt=/[a-zA-Z0-9+\-.]/;f.prototype={toString:function(){return this.href},get href(){if(this.m)return this.g;var z="";return(this.B!=""||this.j!=null)&&(z=this.B+(this.j!=null?":"+this.j:"")+"@"),this.protocol+(this.H?"//"+z+this.host:"")+this.pathname+this.A+this.C},set href(z){m.call(this),l.call(this,z)},get protocol(){return this.l+":"},set protocol(z){this.m||l.call(this,z+":","scheme start")},get host(){return this.m?"":this.v?this.o+":"+this.v:this.o},set host(z){!this.m&&this.H&&l.call(this,z,"host")},get hostname(){return this.o},set hostname(z){!this.m&&this.H&&l.call(this,z,"hostname")},get port(){return this.v},set port(z){!this.m&&this.H&&l.call(this,z,"port")},get pathname(){return this.m?"":this.H?"/"+this.s.join("/"):this.ya},set pathname(z){!this.m&&this.H&&(this.s=[],l.call(this,z,"relative path start"))},get search(){return this.m||!this.A||this.A=="?"?"":this.A},set search(z){!this.m&&this.H&&(this.A="?",z[0]=="?"&&(z=z.slice(1)),l.call(this,z,"query"))},get hash(){return this.m||!this.C||this.C=="#"?"":this.C},set hash(z){this.m||(z?(this.C="#",z[0]=="#"&&(z=z.slice(1)),l.call(this,z,"fragment")):this.C="")},get origin(){var z;if(this.m||!this.l)return"";switch(this.l){case"data":case"file":case"javascript":case"mailto":return"null"}return(z=this.host)?this.l+"://"+z:""}};var dt=t.URL;dt&&(f.createObjectURL=function(z){return dt.createObjectURL.apply(dt,arguments)},f.revokeObjectURL=function(z){dt.revokeObjectURL(z)}),t.URL=f}}(window);var cm=window.customElements,dm=!1,Gc=null;cm.polyfillWrapFlushCallback&&cm.polyfillWrapFlushCallback(function(t){Gc=t,dm&&t()});function fl(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document),Gc&&Gc(),dm=!0,window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}document.readyState!=="complete"?(window.addEventListener("load",fl),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",fl),fl()})):fl()}).call(bm)});var $m=um((sd,ld)=>{(function(n,e){typeof sd=="object"&&typeof ld<"u"?ld.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).bootstrap=e()})(sd,function(){"use strict";let n="transitionend",e=u=>{let a=u.getAttribute("data-bs-target");if(!a||a==="#"){let d=u.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),a=d&&d!=="#"?d.trim():null}return a},i=u=>{let a=e(u);return a&&document.querySelector(a)?a:null},c=u=>{let a=e(u);return a?document.querySelector(a):null},p=u=>{u.dispatchEvent(new Event(n))},h=u=>!(!u||typeof u!="object")&&(u.jquery!==void 0&&(u=u[0]),u.nodeType!==void 0),v=u=>h(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(u):null,k=u=>{if(!h(u)||u.getClientRects().length===0)return!1;let a=getComputedStyle(u).getPropertyValue("visibility")==="visible",d=u.closest("details:not([open])");if(!d)return a;if(d!==u){let g=u.closest("summary");if(g&&g.parentNode!==d||g===null)return!1}return a},E=u=>!u||u.nodeType!==Node.ELEMENT_NODE||!!u.classList.contains("disabled")||(u.disabled!==void 0?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false"),C=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){let a=u.getRootNode();return a instanceof ShadowRoot?a:null}return u instanceof ShadowRoot?u:u.parentNode?C(u.parentNode):null},I=()=>{},D=u=>{u.offsetHeight},H=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,at=[],J=()=>document.documentElement.dir==="rtl",vt=u=>{var a;a=()=>{let d=H();if(d){let g=u.NAME,y=d.fn[g];d.fn[g]=u.jQueryInterface,d.fn[g].Constructor=u,d.fn[g].noConflict=()=>(d.fn[g]=y,u.jQueryInterface)}},document.readyState==="loading"?(at.length||document.addEventListener("DOMContentLoaded",()=>{for(let d of at)d()}),at.push(a)):a()},St=u=>{typeof u=="function"&&u()},Ht=(u,a,d=!0)=>{if(!d)return void St(u);let g=(S=>{if(!S)return 0;let{transitionDuration:O,transitionDelay:L}=window.getComputedStyle(S),$=Number.parseFloat(O),B=Number.parseFloat(L);return $||B?(O=O.split(",")[0],L=L.split(",")[0],1e3*(Number.parseFloat(O)+Number.parseFloat(L))):0})(a)+5,y=!1,w=({target:S})=>{S===a&&(y=!0,a.removeEventListener(n,w),St(u))};a.addEventListener(n,w),setTimeout(()=>{y||p(a)},g)},Zt=(u,a,d,g)=>{let y=u.length,w=u.indexOf(a);return w===-1?!d&&g?u[y-1]:u[0]:(w+=d?1:-1,g&&(w=(w+y)%y),u[Math.max(0,Math.min(w,y-1))])},Pe=/[^.]*(?=\..*)\.|.*/,ie=/\..*/,Gt=/::\d+$/,gr={},Wt=1,ae={mouseenter:"mouseover",mouseleave:"mouseout"},Jt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Yt(u,a){return a&&`${a}::${Wt++}`||u.uidEvent||Wt++}function wt(u){let a=Yt(u);return u.uidEvent=a,gr[a]=gr[a]||{},gr[a]}function Fe(u,a,d=null){return Object.values(u).find(g=>g.callable===a&&g.delegationSelector===d)}function Ur(u,a,d){let g=typeof a=="string",y=g?d:a||d,w=Hr(u);return Jt.has(w)||(w=u),[g,y,w]}function Qe(u,a,d,g,y){if(typeof a!="string"||!u)return;let[w,S,O]=Ur(a,d,g);a in ae&&(S=(Z=>function(V){if(!V.relatedTarget||V.relatedTarget!==V.delegateTarget&&!V.delegateTarget.contains(V.relatedTarget))return Z.call(this,V)})(S));let L=wt(u),$=L[O]||(L[O]={}),B=Fe($,S,w?d:null);if(B)return void(B.oneOff=B.oneOff&&y);let M=Yt(S,a.replace(Pe,"")),tt=w?function(Y,Z,V){return function q(it){let xt=Y.querySelectorAll(Z);for(let{target:K}=it;K&&K!==this;K=K.parentNode)for(let ft of xt)if(ft===K)return Le(it,{delegateTarget:K}),q.oneOff&&A.off(Y,it.type,Z,V),V.apply(K,[it])}}(u,d,S):function(Y,Z){return function V(q){return Le(q,{delegateTarget:Y}),V.oneOff&&A.off(Y,q.type,Z),Z.apply(Y,[q])}}(u,S);tt.delegationSelector=w?d:null,tt.callable=S,tt.oneOff=y,tt.uidEvent=M,$[M]=tt,u.addEventListener(O,tt,w)}function br(u,a,d,g,y){let w=Fe(a[d],g,y);w&&(u.removeEventListener(d,w,Boolean(y)),delete a[d][w.uidEvent])}function gn(u,a,d,g){let y=a[d]||{};for(let w of Object.keys(y))if(w.includes(g)){let S=y[w];br(u,a,d,S.callable,S.delegationSelector)}}function Hr(u){return u=u.replace(ie,""),ae[u]||u}let A={on(u,a,d,g){Qe(u,a,d,g,!1)},one(u,a,d,g){Qe(u,a,d,g,!0)},off(u,a,d,g){if(typeof a!="string"||!u)return;let[y,w,S]=Ur(a,d,g),O=S!==a,L=wt(u),$=L[S]||{},B=a.startsWith(".");if(w===void 0){if(B)for(let M of Object.keys(L))gn(u,L,M,a.slice(1));for(let M of Object.keys($)){let tt=M.replace(Gt,"");if(!O||a.includes(tt)){let Y=$[M];br(u,L,S,Y.callable,Y.delegationSelector)}}}else{if(!Object.keys($).length)return;br(u,L,S,w,y?d:null)}},trigger(u,a,d){if(typeof a!="string"||!u)return null;let g=H(),y=null,w=!0,S=!0,O=!1;a!==Hr(a)&&g&&(y=g.Event(a,d),g(u).trigger(y),w=!y.isPropagationStopped(),S=!y.isImmediatePropagationStopped(),O=y.isDefaultPrevented());let L=new Event(a,{bubbles:w,cancelable:!0});return L=Le(L,d),O&&L.preventDefault(),S&&u.dispatchEvent(L),L.defaultPrevented&&y&&y.preventDefault(),L}};function Le(u,a){for(let[d,g]of Object.entries(a||{}))try{u[d]=g}catch{Object.defineProperty(u,d,{configurable:!0,get:()=>g})}return u}let de=new Map,bn={set(u,a,d){de.has(u)||de.set(u,new Map);let g=de.get(u);g.has(a)||g.size===0?g.set(a,d):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`)},get:(u,a)=>de.has(u)&&de.get(u).get(a)||null,remove(u,a){if(!de.has(u))return;let d=de.get(u);d.delete(a),d.size===0&&de.delete(u)}};function Gr(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function vr(u){return u.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}let se={setDataAttribute(u,a,d){u.setAttribute(`data-bs-${vr(a)}`,d)},removeDataAttribute(u,a){u.removeAttribute(`data-bs-${vr(a)}`)},getDataAttributes(u){if(!u)return{};let a={},d=Object.keys(u.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(let g of d){let y=g.replace(/^bs/,"");y=y.charAt(0).toLowerCase()+y.slice(1,y.length),a[y]=Gr(u.dataset[g])}return a},getDataAttribute:(u,a)=>Gr(u.getAttribute(`data-bs-${vr(a)}`))};class _r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,d){let g=h(d)?se.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...h(d)?se.getDataAttributes(d):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,d=this.constructor.DefaultType){for(let y of Object.keys(d)){let w=d[y],S=a[y],O=h(S)?"element":(g=S)==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(w).test(O))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${O}" but expected type "${w}".`)}var g}}class Qt extends _r{constructor(a,d){super(),(a=v(a))&&(this._element=a,this._config=this._getConfig(d),bn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){bn.remove(this._element,this.constructor.DATA_KEY),A.off(this._element,this.constructor.EVENT_KEY);for(let a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,d,g=!0){Ht(a,d,g)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return bn.get(v(a),this.DATA_KEY)}static getOrCreateInstance(a,d={}){return this.getInstance(a)||new this(a,typeof d=="object"?d:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}let Wr=(u,a="hide")=>{let d=`click.dismiss${u.EVENT_KEY}`,g=u.NAME;A.on(document,d,`[data-bs-dismiss="${g}"]`,function(y){if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),E(this))return;let w=c(this)||this.closest(`.${g}`);u.getOrCreateInstance(w)[a]()})};class Ue extends Qt{static get NAME(){return"alert"}close(){if(A.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");let a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),A.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(a){return this.each(function(){let d=Ue.getOrCreateInstance(this);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a](this)}})}}Wr(Ue,"close"),vt(Ue);let yr='[data-bs-toggle="button"]';class tr extends Qt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){let d=tr.getOrCreateInstance(this);a==="toggle"&&d[a]()})}}A.on(document,"click.bs.button.data-api",yr,u=>{u.preventDefault();let a=u.target.closest(yr);tr.getOrCreateInstance(a).toggle()}),vt(tr);let X={find:(u,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,u)),findOne:(u,a=document.documentElement)=>Element.prototype.querySelector.call(a,u),children:(u,a)=>[].concat(...u.children).filter(d=>d.matches(a)),parents(u,a){let d=[],g=u.parentNode.closest(a);for(;g;)d.push(g),g=g.parentNode.closest(a);return d},prev(u,a){let d=u.previousElementSibling;for(;d;){if(d.matches(a))return[d];d=d.previousElementSibling}return[]},next(u,a){let d=u.nextElementSibling;for(;d;){if(d.matches(a))return[d];d=d.nextElementSibling}return[]},focusableChildren(u){let a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(a,u).filter(d=>!E(d)&&k(d))}},Zn={endCallback:null,leftCallback:null,rightCallback:null},vn={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class xr extends _r{constructor(a,d){super(),this._element=a,a&&xr.isSupported()&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Zn}static get DefaultType(){return vn}static get NAME(){return"swipe"}dispose(){A.off(this._element,".bs.swipe")}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),St(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){let a=Math.abs(this._deltaX);if(a<=40)return;let d=a/this._deltaX;this._deltaX=0,d&&St(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(A.on(this._element,"pointerdown.bs.swipe",a=>this._start(a)),A.on(this._element,"pointerup.bs.swipe",a=>this._end(a)),this._element.classList.add("pointer-event")):(A.on(this._element,"touchstart.bs.swipe",a=>this._start(a)),A.on(this._element,"touchmove.bs.swipe",a=>this._move(a)),A.on(this._element,"touchend.bs.swipe",a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}let fe="next",zt="prev",er="left",Me="right",Hi="slid.bs.carousel",fs="carousel",Jn="active",Gi={ArrowLeft:Me,ArrowRight:er},Wi={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Yi={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class wr extends Qt{constructor(a,d){super(a,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=X.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===fs&&this.cycle()}static get Default(){return Wi}static get DefaultType(){return Yi}static get NAME(){return"carousel"}next(){this._slide(fe)}nextWhenVisible(){!document.hidden&&k(this._element)&&this.next()}prev(){this._slide(zt)}pause(){this._isSliding&&p(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?A.one(this._element,Hi,()=>this.cycle()):this.cycle())}to(a){let d=this._getItems();if(a>d.length-1||a<0)return;if(this._isSliding)return void A.one(this._element,Hi,()=>this.to(a));let g=this._getItemIndex(this._getActive());if(g===a)return;let y=a>g?fe:zt;this._slide(y,d[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&A.on(this._element,"keydown.bs.carousel",a=>this._keydown(a)),this._config.pause==="hover"&&(A.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),A.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&xr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let d of X.find(".carousel-item img",this._element))A.on(d,"dragstart.bs.carousel",g=>g.preventDefault());let a={leftCallback:()=>this._slide(this._directionToOrder(er)),rightCallback:()=>this._slide(this._directionToOrder(Me)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new xr(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;let d=Gi[a.key];d&&(a.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;let d=X.findOne(".active",this._indicatorsElement);d.classList.remove(Jn),d.removeAttribute("aria-current");let g=X.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);g&&(g.classList.add(Jn),g.setAttribute("aria-current","true"))}_updateInterval(){let a=this._activeElement||this._getActive();if(!a)return;let d=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(a,d=null){if(this._isSliding)return;let g=this._getActive(),y=a===fe,w=d||Zt(this._getItems(),g,y,this._config.wrap);if(w===g)return;let S=this._getItemIndex(w),O=M=>A.trigger(this._element,M,{relatedTarget:w,direction:this._orderToDirection(a),from:this._getItemIndex(g),to:S});if(O("slide.bs.carousel").defaultPrevented||!g||!w)return;let L=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(S),this._activeElement=w;let $=y?"carousel-item-start":"carousel-item-end",B=y?"carousel-item-next":"carousel-item-prev";w.classList.add(B),D(w),g.classList.add($),w.classList.add($),this._queueCallback(()=>{w.classList.remove($,B),w.classList.add(Jn),g.classList.remove(Jn,B,$),this._isSliding=!1,O(Hi)},g,this._isAnimated()),L&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return X.findOne(".active.carousel-item",this._element)}_getItems(){return X.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return J()?a===er?zt:fe:a===er?fe:zt}_orderToDirection(a){return J()?a===zt?er:Me:a===zt?Me:er}static jQueryInterface(a){return this.each(function(){let d=wr.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}}else d.to(a)})}}A.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(u){let a=c(this);if(!a||!a.classList.contains(fs))return;u.preventDefault();let d=wr.getOrCreateInstance(a),g=this.getAttribute("data-bs-slide-to");return g?(d.to(g),void d._maybeEnableCycle()):se.getDataAttribute(this,"slide")==="next"?(d.next(),void d._maybeEnableCycle()):(d.prev(),void d._maybeEnableCycle())}),A.on(window,"load.bs.carousel.data-api",()=>{let u=X.find('[data-bs-ride="carousel"]');for(let a of u)wr.getOrCreateInstance(a)}),vt(wr);let qi="show",Ro="collapse",_n="collapsing",yn='[data-bs-toggle="collapse"]',rc={parent:null,toggle:!0},Vi={parent:"(null|element)",toggle:"boolean"};class Er extends Qt{constructor(a,d){super(a,d),this._isTransitioning=!1,this._triggerArray=[];let g=X.find(yn);for(let y of g){let w=i(y),S=X.find(w).filter(O=>O===this._element);w!==null&&S.length&&this._triggerArray.push(y)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rc}static get DefaultType(){return Vi}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(y=>y!==this._element).map(y=>Er.getOrCreateInstance(y,{toggle:!1}))),a.length&&a[0]._isTransitioning||A.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(let y of a)y.hide();let d=this._getDimension();this._element.classList.remove(Ro),this._element.classList.add(_n),this._element.style[d]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let g=`scroll${d[0].toUpperCase()+d.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(_n),this._element.classList.add(Ro,qi),this._element.style[d]="",A.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[d]=`${this._element[g]}px`}hide(){if(this._isTransitioning||!this._isShown()||A.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;let a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,D(this._element),this._element.classList.add(_n),this._element.classList.remove(Ro,qi);for(let d of this._triggerArray){let g=c(d);g&&!this._isShown(g)&&this._addAriaAndCollapsedClass([d],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(_n),this._element.classList.add(Ro),A.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(a=this._element){return a.classList.contains(qi)}_configAfterMerge(a){return a.toggle=Boolean(a.toggle),a.parent=v(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let a=this._getFirstLevelChildren(yn);for(let d of a){let g=c(d);g&&this._addAriaAndCollapsedClass([d],this._isShown(g))}}_getFirstLevelChildren(a){let d=X.find(":scope .collapse .collapse",this._config.parent);return X.find(a,this._config.parent).filter(g=>!d.includes(g))}_addAriaAndCollapsedClass(a,d){if(a.length)for(let g of a)g.classList.toggle("collapsed",!d),g.setAttribute("aria-expanded",d)}static jQueryInterface(a){let d={};return typeof a=="string"&&/show|hide/.test(a)&&(d.toggle=!1),this.each(function(){let g=Er.getOrCreateInstance(this,d);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a]()}})}}A.on(document,"click.bs.collapse.data-api",yn,function(u){(u.target.tagName==="A"||u.delegateTarget&&u.delegateTarget.tagName==="A")&&u.preventDefault();let a=i(this),d=X.find(a);for(let g of d)Er.getOrCreateInstance(g,{toggle:!1}).toggle()}),vt(Er);var qt="top",he="bottom",ge="right",Vt="left",xn="auto",kr=[qt,he,ge,Vt],Yr="start",wn="end",hs="clippingParents",Qn="viewport",Sr="popper",Io="reference",to=kr.reduce(function(u,a){return u.concat([a+"-"+Yr,a+"-"+wn])},[]),eo=[].concat(kr,[xn]).reduce(function(u,a){return u.concat([a,a+"-"+Yr,a+"-"+wn])},[]),gs="beforeRead",bs="read",vs="afterRead",Xi="beforeMain",$o="main",zo="afterMain",_s="beforeWrite",ys="write",Ki="afterWrite",Bo=[gs,bs,vs,Xi,$o,zo,_s,ys,Ki];function Se(u){return u?(u.nodeName||"").toLowerCase():null}function Ne(u){if(u==null)return window;if(u.toString()!=="[object Window]"){var a=u.ownerDocument;return a&&a.defaultView||window}return u}function qr(u){return u instanceof Ne(u).Element||u instanceof Element}function be(u){return u instanceof Ne(u).HTMLElement||u instanceof HTMLElement}function ro(u){return typeof ShadowRoot<"u"&&(u instanceof Ne(u).ShadowRoot||u instanceof ShadowRoot)}let no={name:"applyStyles",enabled:!0,phase:"write",fn:function(u){var a=u.state;Object.keys(a.elements).forEach(function(d){var g=a.styles[d]||{},y=a.attributes[d]||{},w=a.elements[d];be(w)&&Se(w)&&(Object.assign(w.style,g),Object.keys(y).forEach(function(S){var O=y[S];O===!1?w.removeAttribute(S):w.setAttribute(S,O===!0?"":O)}))})},effect:function(u){var a=u.state,d={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,d.popper),a.styles=d,a.elements.arrow&&Object.assign(a.elements.arrow.style,d.arrow),function(){Object.keys(a.elements).forEach(function(g){var y=a.elements[g],w=a.attributes[g]||{},S=Object.keys(a.styles.hasOwnProperty(g)?a.styles[g]:d[g]).reduce(function(O,L){return O[L]="",O},{});be(y)&&Se(y)&&(Object.assign(y.style,S),Object.keys(w).forEach(function(O){y.removeAttribute(O)}))})}},requires:["computeStyles"]};function He(u){return u.split("-")[0]}var Vr=Math.max,Fo=Math.min,Xr=Math.round;function Uo(){var u=navigator.userAgentData;return u!=null&&u.brands?u.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Zi(){return!/^((?!chrome|android).)*safari/i.test(Uo())}function En(u,a,d){a===void 0&&(a=!1),d===void 0&&(d=!1);var g=u.getBoundingClientRect(),y=1,w=1;a&&be(u)&&(y=u.offsetWidth>0&&Xr(g.width)/u.offsetWidth||1,w=u.offsetHeight>0&&Xr(g.height)/u.offsetHeight||1);var S=(qr(u)?Ne(u):window).visualViewport,O=!Zi()&&d,L=(g.left+(O&&S?S.offsetLeft:0))/y,$=(g.top+(O&&S?S.offsetTop:0))/w,B=g.width/y,M=g.height/w;return{width:B,height:M,top:$,right:L+B,bottom:$+M,left:L,x:L,y:$}}function Ho(u){var a=En(u),d=u.offsetWidth,g=u.offsetHeight;return Math.abs(a.width-d)<=1&&(d=a.width),Math.abs(a.height-g)<=1&&(g=a.height),{x:u.offsetLeft,y:u.offsetTop,width:d,height:g}}function Ji(u,a){var d=a.getRootNode&&a.getRootNode();if(u.contains(a))return!0;if(d&&ro(d)){var g=a;do{if(g&&u.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function te(u){return Ne(u).getComputedStyle(u)}function xs(u){return["table","td","th"].indexOf(Se(u))>=0}function Nr(u){return((qr(u)?u.ownerDocument:u.document)||window.document).documentElement}function le(u){return Se(u)==="html"?u:u.assignedSlot||u.parentNode||(ro(u)?u.host:null)||Nr(u)}function Qi(u){return be(u)&&te(u).position!=="fixed"?u.offsetParent:null}function Tr(u){for(var a=Ne(u),d=Qi(u);d&&xs(d)&&te(d).position==="static";)d=Qi(d);return d&&(Se(d)==="html"||Se(d)==="body"&&te(d).position==="static")?a:d||function(g){var y=/firefox/i.test(Uo());if(/Trident/i.test(Uo())&&be(g)&&te(g).position==="fixed")return null;var w=le(g);for(ro(w)&&(w=w.host);be(w)&&["html","body"].indexOf(Se(w))<0;){var S=te(w);if(S.transform!=="none"||S.perspective!=="none"||S.contain==="paint"||["transform","perspective"].indexOf(S.willChange)!==-1||y&&S.willChange==="filter"||y&&S.filter&&S.filter!=="none")return w;w=w.parentNode}return null}(u)||a}function Go(u){return["top","bottom"].indexOf(u)>=0?"x":"y"}function kn(u,a,d){return Vr(u,Fo(a,d))}function ta(u){return Object.assign({},{top:0,right:0,bottom:0,left:0},u)}function ea(u,a){return a.reduce(function(d,g){return d[g]=u,d},{})}let ra={name:"arrow",enabled:!0,phase:"main",fn:function(u){var a,d=u.state,g=u.name,y=u.options,w=d.elements.arrow,S=d.modifiersData.popperOffsets,O=He(d.placement),L=Go(O),$=[Vt,ge].indexOf(O)>=0?"height":"width";if(w&&S){var B=function(ht,gt){return ta(typeof(ht=typeof ht=="function"?ht(Object.assign({},gt.rects,{placement:gt.placement})):ht)!="number"?ht:ea(ht,kr))}(y.padding,d),M=Ho(w),tt=L==="y"?qt:Vt,Y=L==="y"?he:ge,Z=d.rects.reference[$]+d.rects.reference[L]-S[L]-d.rects.popper[$],V=S[L]-d.rects.reference[L],q=Tr(w),it=q?L==="y"?q.clientHeight||0:q.clientWidth||0:0,xt=Z/2-V/2,K=B[tt],ft=it-M[$]-B[Y],rt=it/2-M[$]/2+xt,st=kn(K,rt,ft),_t=L;d.modifiersData[g]=((a={})[_t]=st,a.centerOffset=st-rt,a)}},effect:function(u){var a=u.state,d=u.options.element,g=d===void 0?"[data-popper-arrow]":d;g!=null&&(typeof g!="string"||(g=a.elements.popper.querySelector(g)))&&Ji(a.elements.popper,g)&&(a.elements.arrow=g)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Et(u){return u.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(u){var a,d=u.popper,g=u.popperRect,y=u.placement,w=u.variation,S=u.offsets,O=u.position,L=u.gpuAcceleration,$=u.adaptive,B=u.roundOffsets,M=u.isFixed,tt=S.x,Y=tt===void 0?0:tt,Z=S.y,V=Z===void 0?0:Z,q=typeof B=="function"?B({x:Y,y:V}):{x:Y,y:V};Y=q.x,V=q.y;var it=S.hasOwnProperty("x"),xt=S.hasOwnProperty("y"),K=Vt,ft=qt,rt=window;if($){var st=Tr(d),_t="clientHeight",ht="clientWidth";st===Ne(d)&&te(st=Nr(d)).position!=="static"&&O==="absolute"&&(_t="scrollHeight",ht="scrollWidth"),(y===qt||(y===Vt||y===ge)&&w===wn)&&(ft=he,V-=(M&&st===rt&&rt.visualViewport?rt.visualViewport.height:st[_t])-g.height,V*=L?1:-1),y!==Vt&&(y!==qt&&y!==he||w!==wn)||(K=ge,Y-=(M&&st===rt&&rt.visualViewport?rt.visualViewport.width:st[ht])-g.width,Y*=L?1:-1)}var gt,Lt=Object.assign({position:O},$&&Q),_e=B===!0?function(pe){var ce=pe.x,ye=pe.y,re=window.devicePixelRatio||1;return{x:Xr(ce*re)/re||0,y:Xr(ye*re)/re||0}}({x:Y,y:V}):{x:Y,y:V};return Y=_e.x,V=_e.y,L?Object.assign({},Lt,((gt={})[ft]=xt?"0":"",gt[K]=it?"0":"",gt.transform=(rt.devicePixelRatio||1)<=1?"translate("+Y+"px, "+V+"px)":"translate3d("+Y+"px, "+V+"px, 0)",gt)):Object.assign({},Lt,((a={})[ft]=xt?V+"px":"",a[K]=it?Y+"px":"",a.transform="",a))}let oo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(u){var a=u.state,d=u.options,g=d.gpuAcceleration,y=g===void 0||g,w=d.adaptive,S=w===void 0||w,O=d.roundOffsets,L=O===void 0||O,$={placement:He(a.placement),variation:Et(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:y,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,U(Object.assign({},$,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:S,roundOffsets:L})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,U(Object.assign({},$,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:L})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var io={passive:!0};let Wo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(u){var a=u.state,d=u.instance,g=u.options,y=g.scroll,w=y===void 0||y,S=g.resize,O=S===void 0||S,L=Ne(a.elements.popper),$=[].concat(a.scrollParents.reference,a.scrollParents.popper);return w&&$.forEach(function(B){B.addEventListener("scroll",d.update,io)}),O&&L.addEventListener("resize",d.update,io),function(){w&&$.forEach(function(B){B.removeEventListener("scroll",d.update,io)}),O&&L.removeEventListener("resize",d.update,io)}},data:{}};var ws={left:"right",right:"left",bottom:"top",top:"bottom"};function Ge(u){return u.replace(/left|right|bottom|top/g,function(a){return ws[a]})}var Bt={start:"end",end:"start"};function Yo(u){return u.replace(/start|end/g,function(a){return Bt[a]})}function Cr(u){var a=Ne(u);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function ao(u){return En(Nr(u)).left+Cr(u).scrollLeft}function so(u){var a=te(u),d=a.overflow,g=a.overflowX,y=a.overflowY;return/auto|scroll|overlay|hidden/.test(d+y+g)}function na(u){return["html","body","#document"].indexOf(Se(u))>=0?u.ownerDocument.body:be(u)&&so(u)?u:na(le(u))}function Kr(u,a){var d;a===void 0&&(a=[]);var g=na(u),y=g===((d=u.ownerDocument)==null?void 0:d.body),w=Ne(g),S=y?[w].concat(w.visualViewport||[],so(g)?g:[]):g,O=a.concat(S);return y?O:O.concat(Kr(le(S)))}function qo(u){return Object.assign({},u,{left:u.x,top:u.y,right:u.x+u.width,bottom:u.y+u.height})}function oa(u,a,d){return a===Qn?qo(function(g,y){var w=Ne(g),S=Nr(g),O=w.visualViewport,L=S.clientWidth,$=S.clientHeight,B=0,M=0;if(O){L=O.width,$=O.height;var tt=Zi();(tt||!tt&&y==="fixed")&&(B=O.offsetLeft,M=O.offsetTop)}return{width:L,height:$,x:B+ao(g),y:M}}(u,d)):qr(a)?function(g,y){var w=En(g,!1,y==="fixed");return w.top=w.top+g.clientTop,w.left=w.left+g.clientLeft,w.bottom=w.top+g.clientHeight,w.right=w.left+g.clientWidth,w.width=g.clientWidth,w.height=g.clientHeight,w.x=w.left,w.y=w.top,w}(a,d):qo(function(g){var y,w=Nr(g),S=Cr(g),O=(y=g.ownerDocument)==null?void 0:y.body,L=Vr(w.scrollWidth,w.clientWidth,O?O.scrollWidth:0,O?O.clientWidth:0),$=Vr(w.scrollHeight,w.clientHeight,O?O.scrollHeight:0,O?O.clientHeight:0),B=-S.scrollLeft+ao(g),M=-S.scrollTop;return te(O||w).direction==="rtl"&&(B+=Vr(w.clientWidth,O?O.clientWidth:0)-L),{width:L,height:$,x:B,y:M}}(Nr(u)))}function ia(u){var a,d=u.reference,g=u.element,y=u.placement,w=y?He(y):null,S=y?Et(y):null,O=d.x+d.width/2-g.width/2,L=d.y+d.height/2-g.height/2;switch(w){case qt:a={x:O,y:d.y-g.height};break;case he:a={x:O,y:d.y+d.height};break;case ge:a={x:d.x+d.width,y:L};break;case Vt:a={x:d.x-g.width,y:L};break;default:a={x:d.x,y:d.y}}var $=w?Go(w):null;if($!=null){var B=$==="y"?"height":"width";switch(S){case Yr:a[$]=a[$]-(d[B]/2-g[B]/2);break;case wn:a[$]=a[$]+(d[B]/2-g[B]/2)}}return a}function We(u,a){a===void 0&&(a={});var d=a,g=d.placement,y=g===void 0?u.placement:g,w=d.strategy,S=w===void 0?u.strategy:w,O=d.boundary,L=O===void 0?hs:O,$=d.rootBoundary,B=$===void 0?Qn:$,M=d.elementContext,tt=M===void 0?Sr:M,Y=d.altBoundary,Z=Y!==void 0&&Y,V=d.padding,q=V===void 0?0:V,it=ta(typeof q!="number"?q:ea(q,kr)),xt=tt===Sr?Io:Sr,K=u.rects.popper,ft=u.elements[Z?xt:tt],rt=function(ce,ye,re,Tt){var xe=ye==="clippingParents"?function(lt){var Ft=Kr(le(lt)),we=["absolute","fixed"].indexOf(te(lt).position)>=0&&be(lt)?Tr(lt):lt;return qr(we)?Ft.filter(function(or){return qr(or)&&Ji(or,we)&&Se(or)!=="body"}):[]}(ce):[].concat(ye),Re=[].concat(xe,[re]),nr=Re[0],$t=Re.reduce(function(lt,Ft){var we=oa(ce,Ft,Tt);return lt.top=Vr(we.top,lt.top),lt.right=Fo(we.right,lt.right),lt.bottom=Fo(we.bottom,lt.bottom),lt.left=Vr(we.left,lt.left),lt},oa(ce,nr,Tt));return $t.width=$t.right-$t.left,$t.height=$t.bottom-$t.top,$t.x=$t.left,$t.y=$t.top,$t}(qr(ft)?ft:ft.contextElement||Nr(u.elements.popper),L,B,S),st=En(u.elements.reference),_t=ia({reference:st,element:K,strategy:"absolute",placement:y}),ht=qo(Object.assign({},K,_t)),gt=tt===Sr?ht:st,Lt={top:rt.top-gt.top+it.top,bottom:gt.bottom-rt.bottom+it.bottom,left:rt.left-gt.left+it.left,right:gt.right-rt.right+it.right},_e=u.modifiersData.offset;if(tt===Sr&&_e){var pe=_e[y];Object.keys(Lt).forEach(function(ce){var ye=[ge,he].indexOf(ce)>=0?1:-1,re=[qt,he].indexOf(ce)>=0?"y":"x";Lt[ce]+=pe[re]*ye})}return Lt}function Es(u,a){a===void 0&&(a={});var d=a,g=d.placement,y=d.boundary,w=d.rootBoundary,S=d.padding,O=d.flipVariations,L=d.allowedAutoPlacements,$=L===void 0?eo:L,B=Et(g),M=B?O?to:to.filter(function(Z){return Et(Z)===B}):kr,tt=M.filter(function(Z){return $.indexOf(Z)>=0});tt.length===0&&(tt=M);var Y=tt.reduce(function(Z,V){return Z[V]=We(u,{placement:V,boundary:y,rootBoundary:w,padding:S})[He(V)],Z},{});return Object.keys(Y).sort(function(Z,V){return Y[Z]-Y[V]})}let Vo={name:"flip",enabled:!0,phase:"main",fn:function(u){var a=u.state,d=u.options,g=u.name;if(!a.modifiersData[g]._skip){for(var y=d.mainAxis,w=y===void 0||y,S=d.altAxis,O=S===void 0||S,L=d.fallbackPlacements,$=d.padding,B=d.boundary,M=d.rootBoundary,tt=d.altBoundary,Y=d.flipVariations,Z=Y===void 0||Y,V=d.allowedAutoPlacements,q=a.options.placement,it=He(q),xt=L||(it!==q&&Z?function(lt){if(He(lt)===xn)return[];var Ft=Ge(lt);return[Yo(lt),Ft,Yo(Ft)]}(q):[Ge(q)]),K=[q].concat(xt).reduce(function(lt,Ft){return lt.concat(He(Ft)===xn?Es(a,{placement:Ft,boundary:B,rootBoundary:M,padding:$,flipVariations:Z,allowedAutoPlacements:V}):Ft)},[]),ft=a.rects.reference,rt=a.rects.popper,st=new Map,_t=!0,ht=K[0],gt=0;gt<K.length;gt++){var Lt=K[gt],_e=He(Lt),pe=Et(Lt)===Yr,ce=[qt,he].indexOf(_e)>=0,ye=ce?"width":"height",re=We(a,{placement:Lt,boundary:B,rootBoundary:M,altBoundary:tt,padding:$}),Tt=ce?pe?ge:Vt:pe?he:qt;ft[ye]>rt[ye]&&(Tt=Ge(Tt));var xe=Ge(Tt),Re=[];if(w&&Re.push(re[_e]<=0),O&&Re.push(re[Tt]<=0,re[xe]<=0),Re.every(function(lt){return lt})){ht=Lt,_t=!1;break}st.set(Lt,Re)}if(_t)for(var nr=function(lt){var Ft=K.find(function(we){var or=st.get(we);if(or)return or.slice(0,lt).every(function(go){return go})});if(Ft)return ht=Ft,"break"},$t=Z?3:1;$t>0&&nr($t)!=="break";$t--);a.placement!==ht&&(a.modifiersData[g]._skip=!0,a.placement=ht,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function aa(u,a,d){return d===void 0&&(d={x:0,y:0}),{top:u.top-a.height-d.y,right:u.right-a.width+d.x,bottom:u.bottom-a.height+d.y,left:u.left-a.width-d.x}}function ee(u){return[qt,ge,he,Vt].some(function(a){return u[a]>=0})}let Xo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(u){var a=u.state,d=u.name,g=a.rects.reference,y=a.rects.popper,w=a.modifiersData.preventOverflow,S=We(a,{elementContext:"reference"}),O=We(a,{altBoundary:!0}),L=aa(S,g),$=aa(O,y,w),B=ee(L),M=ee($);a.modifiersData[d]={referenceClippingOffsets:L,popperEscapeOffsets:$,isReferenceHidden:B,hasPopperEscaped:M},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":B,"data-popper-escaped":M})}},Dt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(u){var a=u.state,d=u.options,g=u.name,y=d.offset,w=y===void 0?[0,0]:y,S=eo.reduce(function(B,M){return B[M]=function(tt,Y,Z){var V=He(tt),q=[Vt,qt].indexOf(V)>=0?-1:1,it=typeof Z=="function"?Z(Object.assign({},Y,{placement:tt})):Z,xt=it[0],K=it[1];return xt=xt||0,K=(K||0)*q,[Vt,ge].indexOf(V)>=0?{x:K,y:xt}:{x:xt,y:K}}(M,a.rects,w),B},{}),O=S[a.placement],L=O.x,$=O.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=L,a.modifiersData.popperOffsets.y+=$),a.modifiersData[g]=S}},lo={name:"popperOffsets",enabled:!0,phase:"read",fn:function(u){var a=u.state,d=u.name;a.modifiersData[d]=ia({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})},data:{}},sa={name:"preventOverflow",enabled:!0,phase:"main",fn:function(u){var a=u.state,d=u.options,g=u.name,y=d.mainAxis,w=y===void 0||y,S=d.altAxis,O=S!==void 0&&S,L=d.boundary,$=d.rootBoundary,B=d.altBoundary,M=d.padding,tt=d.tether,Y=tt===void 0||tt,Z=d.tetherOffset,V=Z===void 0?0:Z,q=We(a,{boundary:L,rootBoundary:$,padding:M,altBoundary:B}),it=He(a.placement),xt=Et(a.placement),K=!xt,ft=Go(it),rt=ft==="x"?"y":"x",st=a.modifiersData.popperOffsets,_t=a.rects.reference,ht=a.rects.popper,gt=typeof V=="function"?V(Object.assign({},a.rects,{placement:a.placement})):V,Lt=typeof gt=="number"?{mainAxis:gt,altAxis:gt}:Object.assign({mainAxis:0,altAxis:0},gt),_e=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,pe={x:0,y:0};if(st){if(w){var ce,ye=ft==="y"?qt:Vt,re=ft==="y"?he:ge,Tt=ft==="y"?"height":"width",xe=st[ft],Re=xe+q[ye],nr=xe-q[re],$t=Y?-ht[Tt]/2:0,lt=xt===Yr?_t[Tt]:ht[Tt],Ft=xt===Yr?-ht[Tt]:-_t[Tt],we=a.elements.arrow,or=Y&&we?Ho(we):{width:0,height:0},go=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Ra=go[ye],bo=go[re],vo=kn(0,_t[Tt],or[Tt]),Ws=K?_t[Tt]/2-$t-vo-Ra-Lt.mainAxis:lt-vo-Ra-Lt.mainAxis,mc=K?-_t[Tt]/2+$t+vo+bo+Lt.mainAxis:Ft+vo+bo+Lt.mainAxis,mi=a.elements.arrow&&Tr(a.elements.arrow),ui=mi?ft==="y"?mi.clientTop||0:mi.clientLeft||0:0,Ys=(ce=_e?.[ft])!=null?ce:0,uc=xe+mc-Ys,Ia=kn(Y?Fo(Re,xe+Ws-Ys-ui):Re,xe,Y?Vr(nr,uc):nr);st[ft]=Ia,pe[ft]=Ia-xe}if(O){var tn,In=ft==="x"?qt:Vt,qs=ft==="x"?he:ge,Dr=st[rt],_o=rt==="y"?"height":"width",$a=Dr+q[In],Vs=Dr-q[qs],yo=[qt,Vt].indexOf(it)!==-1,fi=(tn=_e?.[rt])!=null?tn:0,Xs=yo?$a:Dr-_t[_o]-ht[_o]-fi+Lt.altAxis,Ks=yo?Dr+_t[_o]+ht[_o]-fi-Lt.altAxis:Vs,Zs=Y&&yo?function(fc,hc,hi){var xo=kn(fc,hc,hi);return xo>hi?hi:xo}(Xs,Dr,Ks):kn(Y?Xs:$a,Dr,Y?Ks:Vs);st[rt]=Zs,pe[rt]=Zs-Dr}a.modifiersData[g]=pe}},requiresIfExists:["offset"]};function Sn(u,a,d){d===void 0&&(d=!1);var g,y,w=be(a),S=be(a)&&function(M){var tt=M.getBoundingClientRect(),Y=Xr(tt.width)/M.offsetWidth||1,Z=Xr(tt.height)/M.offsetHeight||1;return Y!==1||Z!==1}(a),O=Nr(a),L=En(u,S,d),$={scrollLeft:0,scrollTop:0},B={x:0,y:0};return(w||!w&&!d)&&((Se(a)!=="body"||so(O))&&($=(g=a)!==Ne(g)&&be(g)?{scrollLeft:(y=g).scrollLeft,scrollTop:y.scrollTop}:Cr(g)),be(a)?((B=En(a,!0)).x+=a.clientLeft,B.y+=a.clientTop):O&&(B.x=ao(O))),{x:L.left+$.scrollLeft-B.x,y:L.top+$.scrollTop-B.y,width:L.width,height:L.height}}function la(u){var a=new Map,d=new Set,g=[];function y(w){d.add(w.name),[].concat(w.requires||[],w.requiresIfExists||[]).forEach(function(S){if(!d.has(S)){var O=a.get(S);O&&y(O)}}),g.push(w)}return u.forEach(function(w){a.set(w.name,w)}),u.forEach(function(w){d.has(w.name)||y(w)}),g}var ks={placement:"bottom",modifiers:[],strategy:"absolute"};function Nn(){for(var u=arguments.length,a=new Array(u),d=0;d<u;d++)a[d]=arguments[d];return!a.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function Tn(u){u===void 0&&(u={});var a=u,d=a.defaultModifiers,g=d===void 0?[]:d,y=a.defaultOptions,w=y===void 0?ks:y;return function(S,O,L){L===void 0&&(L=w);var $,B,M={placement:"bottom",orderedModifiers:[],options:Object.assign({},ks,w),modifiersData:{},elements:{reference:S,popper:O},attributes:{},styles:{}},tt=[],Y=!1,Z={state:M,setOptions:function(q){var it=typeof q=="function"?q(M.options):q;V(),M.options=Object.assign({},w,M.options,it),M.scrollParents={reference:qr(S)?Kr(S):S.contextElement?Kr(S.contextElement):[],popper:Kr(O)};var xt,K,ft=function(rt){var st=la(rt);return Bo.reduce(function(_t,ht){return _t.concat(st.filter(function(gt){return gt.phase===ht}))},[])}((xt=[].concat(g,M.options.modifiers),K=xt.reduce(function(rt,st){var _t=rt[st.name];return rt[st.name]=_t?Object.assign({},_t,st,{options:Object.assign({},_t.options,st.options),data:Object.assign({},_t.data,st.data)}):st,rt},{}),Object.keys(K).map(function(rt){return K[rt]})));return M.orderedModifiers=ft.filter(function(rt){return rt.enabled}),M.orderedModifiers.forEach(function(rt){var st=rt.name,_t=rt.options,ht=_t===void 0?{}:_t,gt=rt.effect;if(typeof gt=="function"){var Lt=gt({state:M,name:st,instance:Z,options:ht});tt.push(Lt||function(){})}}),Z.update()},forceUpdate:function(){if(!Y){var q=M.elements,it=q.reference,xt=q.popper;if(Nn(it,xt)){M.rects={reference:Sn(it,Tr(xt),M.options.strategy==="fixed"),popper:Ho(xt)},M.reset=!1,M.placement=M.options.placement,M.orderedModifiers.forEach(function(gt){return M.modifiersData[gt.name]=Object.assign({},gt.data)});for(var K=0;K<M.orderedModifiers.length;K++)if(M.reset!==!0){var ft=M.orderedModifiers[K],rt=ft.fn,st=ft.options,_t=st===void 0?{}:st,ht=ft.name;typeof rt=="function"&&(M=rt({state:M,options:_t,name:ht,instance:Z})||M)}else M.reset=!1,K=-1}}},update:($=function(){return new Promise(function(q){Z.forceUpdate(),q(M)})},function(){return B||(B=new Promise(function(q){Promise.resolve().then(function(){B=void 0,q($())})})),B}),destroy:function(){V(),Y=!0}};if(!Nn(S,O))return Z;function V(){tt.forEach(function(q){return q()}),tt=[]}return Z.setOptions(L).then(function(q){!Y&&L.onFirstUpdate&&L.onFirstUpdate(q)}),Z}}var Ss=Tn(),Ko=Tn({defaultModifiers:[Wo,lo,oo,no]}),co=Tn({defaultModifiers:[Wo,lo,oo,no,Dt,Vo,sa,ra,Xo]});let Ns=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Tn,detectOverflow:We,createPopperBase:Ss,createPopper:co,createPopperLite:Ko,top:qt,bottom:he,right:ge,left:Vt,auto:xn,basePlacements:kr,start:Yr,end:wn,clippingParents:hs,viewport:Qn,popper:Sr,reference:Io,variationPlacements:to,placements:eo,beforeRead:gs,read:bs,afterRead:vs,beforeMain:Xi,main:$o,afterMain:zo,beforeWrite:_s,write:ys,afterWrite:Ki,modifierPhases:Bo,applyStyles:no,arrow:ra,computeStyles:oo,eventListeners:Wo,flip:Vo,hide:Xo,offset:Dt,popperOffsets:lo,preventOverflow:sa},Symbol.toStringTag,{value:"Module"})),Ts="dropdown",nc="ArrowUp",Cs="ArrowDown",Os="click.bs.dropdown.data-api",As="keydown.bs.dropdown.data-api",Cn="show",Or='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',oc=`${Or}.show`,Zo=".dropdown-menu",ca=J()?"top-end":"top-start",Jo=J()?"top-start":"top-end",da=J()?"bottom-end":"bottom-start",Ds=J()?"bottom-start":"bottom-end",Ps=J()?"left-start":"right-start",po=J()?"right-start":"left-start",Pt={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ve={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Nt extends Qt{constructor(a,d){super(a,d),this._popper=null,this._parent=this._element.parentNode,this._menu=X.next(this._element,Zo)[0]||X.prev(this._element,Zo)[0]||X.findOne(Zo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Pt}static get DefaultType(){return ve}static get NAME(){return Ts}toggle(){return this._isShown()?this.hide():this.show()}show(){if(E(this._element)||this._isShown())return;let a={relatedTarget:this._element};if(!A.trigger(this._element,"show.bs.dropdown",a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let d of[].concat(...document.body.children))A.on(d,"mouseover",I);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Cn),this._element.classList.add(Cn),A.trigger(this._element,"shown.bs.dropdown",a)}}hide(){if(E(this._element)||!this._isShown())return;let a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!A.trigger(this._element,"hide.bs.dropdown",a).defaultPrevented){if("ontouchstart"in document.documentElement)for(let d of[].concat(...document.body.children))A.off(d,"mouseover",I);this._popper&&this._popper.destroy(),this._menu.classList.remove(Cn),this._element.classList.remove(Cn),this._element.setAttribute("aria-expanded","false"),se.removeDataAttribute(this._menu,"popper"),A.trigger(this._element,"hidden.bs.dropdown",a)}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!h(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${Ts.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(Ns===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:h(this._config.reference)?a=v(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);let d=this._getPopperConfig();this._popper=co(a,this._menu,d)}_isShown(){return this._menu.classList.contains(Cn)}_getPlacement(){let a=this._parent;if(a.classList.contains("dropend"))return Ps;if(a.classList.contains("dropstart"))return po;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";let d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?d?Jo:ca:d?Ds:da}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){let{offset:a}=this._config;return typeof a=="string"?a.split(",").map(d=>Number.parseInt(d,10)):typeof a=="function"?d=>a(d,this._element):a}_getPopperConfig(){let a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(se.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...typeof this._config.popperConfig=="function"?this._config.popperConfig(a):this._config.popperConfig}}_selectMenuItem({key:a,target:d}){let g=X.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(y=>k(y));g.length&&Zt(g,d,a===Cs,!g.includes(d)).focus()}static jQueryInterface(a){return this.each(function(){let d=Nt.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0)throw new TypeError(`No method named "${a}"`);d[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;let d=X.find(oc);for(let g of d){let y=Nt.getInstance(g);if(!y||y._config.autoClose===!1)continue;let w=a.composedPath(),S=w.includes(y._menu);if(w.includes(y._element)||y._config.autoClose==="inside"&&!S||y._config.autoClose==="outside"&&S||y._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;let O={relatedTarget:y._element};a.type==="click"&&(O.clickEvent=a),y._completeHide(O)}}static dataApiKeydownHandler(a){let d=/input|textarea/i.test(a.target.tagName),g=a.key==="Escape",y=[nc,Cs].includes(a.key);if(!y&&!g||d&&!g)return;a.preventDefault();let w=this.matches(Or)?this:X.prev(this,Or)[0]||X.next(this,Or)[0]||X.findOne(Or,a.delegateTarget.parentNode),S=Nt.getOrCreateInstance(w);if(y)return a.stopPropagation(),S.show(),void S._selectMenuItem(a);S._isShown()&&(a.stopPropagation(),S.hide(),w.focus())}}A.on(document,As,Or,Nt.dataApiKeydownHandler),A.on(document,As,Zo,Nt.dataApiKeydownHandler),A.on(document,Os,Nt.clearMenus),A.on(document,"keyup.bs.dropdown.data-api",Nt.clearMenus),A.on(document,Os,Or,function(u){u.preventDefault(),Nt.getOrCreateInstance(this).toggle()}),vt(Nt);let Qo=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pa=".sticky-top",On="padding-right",ti="margin-right";class ma{constructor(){this._element=document.body}getWidth(){let a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){let a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,On,d=>d+a),this._setElementAttributes(Qo,On,d=>d+a),this._setElementAttributes(pa,ti,d=>d-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,On),this._resetElementAttributes(Qo,On),this._resetElementAttributes(pa,ti)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,d,g){let y=this.getWidth();this._applyManipulationCallback(a,w=>{if(w!==this._element&&window.innerWidth>w.clientWidth+y)return;this._saveInitialAttribute(w,d);let S=window.getComputedStyle(w).getPropertyValue(d);w.style.setProperty(d,`${g(Number.parseFloat(S))}px`)})}_saveInitialAttribute(a,d){let g=a.style.getPropertyValue(d);g&&se.setDataAttribute(a,d,g)}_resetElementAttributes(a,d){this._applyManipulationCallback(a,g=>{let y=se.getDataAttribute(g,d);y!==null?(se.removeDataAttribute(g,d),g.style.setProperty(d,y)):g.style.removeProperty(d)})}_applyManipulationCallback(a,d){if(h(a))d(a);else for(let g of X.find(a,this._element))d(g)}}let ei="show",ri="mousedown.bs.backdrop",ua={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},fa={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ha extends _r{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return ua}static get DefaultType(){return fa}static get NAME(){return"backdrop"}show(a){if(!this._config.isVisible)return void St(a);this._append();let d=this._getElement();this._config.isAnimated&&D(d),d.classList.add(ei),this._emulateAnimation(()=>{St(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(ei),this._emulateAnimation(()=>{this.dispose(),St(a)})):St(a)}dispose(){this._isAppended&&(A.off(this._element,ri),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=v(a.rootElement),a}_append(){if(this._isAppended)return;let a=this._getElement();this._config.rootElement.append(a),A.on(a,ri,()=>{St(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){Ht(a,this._getElement(),this._config.isAnimated)}}let ga=".bs.focustrap",ba="backward",mo={autofocus:!0,trapElement:null},va={autofocus:"boolean",trapElement:"element"};class Ls extends _r{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return mo}static get DefaultType(){return va}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),A.off(document,ga),A.on(document,"focusin.bs.focustrap",a=>this._handleFocusin(a)),A.on(document,"keydown.tab.bs.focustrap",a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,A.off(document,ga))}_handleFocusin(a){let{trapElement:d}=this._config;if(a.target===document||a.target===d||d.contains(a.target))return;let g=X.focusableChildren(d);g.length===0?d.focus():this._lastTabNavDirection===ba?g[g.length-1].focus():g[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?ba:"forward")}}let _a="hidden.bs.modal",Ms="show.bs.modal",ya="modal-open",xa="show",An="modal-static",ic={backdrop:!0,focus:!0,keyboard:!0},wa={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class rr extends Qt{constructor(a,d){super(a,d),this._dialog=X.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ma,this._addEventListeners()}static get Default(){return ic}static get DefaultType(){return wa}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||A.trigger(this._element,Ms,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ya),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(A.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(xa),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){for(let a of[window,this._dialog])A.off(a,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ha({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ls({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let d=X.findOne(".modal-body",this._dialog);d&&(d.scrollTop=0),D(this._element),this._element.classList.add(xa),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,A.trigger(this._element,"shown.bs.modal",{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){A.on(this._element,"keydown.dismiss.bs.modal",a=>{if(a.key==="Escape")return this._config.keyboard?(a.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),A.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),A.on(this._element,"mousedown.dismiss.bs.modal",a=>{A.one(this._element,"click.dismiss.bs.modal",d=>{this._element===a.target&&this._element===d.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ya),this._resetAdjustments(),this._scrollBar.reset(),A.trigger(this._element,_a)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(A.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;let a=this._element.scrollHeight>document.documentElement.clientHeight,d=this._element.style.overflowY;d==="hidden"||this._element.classList.contains(An)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(An),this._queueCallback(()=>{this._element.classList.remove(An),this._queueCallback(()=>{this._element.style.overflowY=d},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let a=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),g=d>0;if(g&&!a){let y=J()?"paddingLeft":"paddingRight";this._element.style[y]=`${d}px`}if(!g&&a){let y=J()?"paddingRight":"paddingLeft";this._element.style[y]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,d){return this.each(function(){let g=rr.getOrCreateInstance(this,a);if(typeof a=="string"){if(g[a]===void 0)throw new TypeError(`No method named "${a}"`);g[a](d)}})}}A.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(u){let a=c(this);["A","AREA"].includes(this.tagName)&&u.preventDefault(),A.one(a,Ms,g=>{g.defaultPrevented||A.one(a,_a,()=>{k(this)&&this.focus()})});let d=X.findOne(".modal.show");d&&rr.getInstance(d).hide(),rr.getOrCreateInstance(a).toggle(this)}),Wr(rr),vt(rr);let Ea="show",ni="showing",ka="hiding",Sa=".offcanvas.show",Na="hidePrevented.bs.offcanvas",Ta="hidden.bs.offcanvas",js={backdrop:!0,keyboard:!0,scroll:!1},Rs={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ye extends Qt{constructor(a,d){super(a,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return js}static get DefaultType(){return Rs}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||A.trigger(this._element,"show.bs.offcanvas",{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new ma().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ni),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ea),this._element.classList.remove(ni),A.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(A.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(ka),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Ea,ka),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ma().reset(),A.trigger(this._element,Ta)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let a=Boolean(this._config.backdrop);return new ha({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():A.trigger(this._element,Na)}:null})}_initializeFocusTrap(){return new Ls({trapElement:this._element})}_addEventListeners(){A.on(this._element,"keydown.dismiss.bs.offcanvas",a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():A.trigger(this._element,Na))})}static jQueryInterface(a){return this.each(function(){let d=Ye.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a](this)}})}}A.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(u){let a=c(this);if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),E(this))return;A.one(a,Ta,()=>{k(this)&&this.focus()});let d=X.findOne(Sa);d&&d!==a&&Ye.getInstance(d).hide(),Ye.getOrCreateInstance(a).toggle(this)}),A.on(window,"load.bs.offcanvas.data-api",()=>{for(let u of X.find(Sa))Ye.getOrCreateInstance(u).show()}),A.on(window,"resize.bs.offcanvas",()=>{for(let u of X.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(u).position!=="fixed"&&Ye.getOrCreateInstance(u).hide()}),Wr(Ye),vt(Ye);let Ca=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Oa=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,ac=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Is=(u,a)=>{let d=u.nodeName.toLowerCase();return a.includes(d)?!Ca.has(d)||Boolean(Oa.test(u.nodeValue)||ac.test(u.nodeValue)):a.filter(g=>g instanceof RegExp).some(g=>g.test(d))},oi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},sc={allowList:oi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},lc={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},cc={entry:"(string|element|function|null)",selector:"(string|element)"};class dc extends _r{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return sc}static get DefaultType(){return lc}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){let a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(let[y,w]of Object.entries(this._config.content))this._setContent(a,w,y);let d=a.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&d.classList.add(...g.split(" ")),d}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(let[d,g]of Object.entries(a))super._typeCheckConfig({selector:d,entry:g},cc)}_setContent(a,d,g){let y=X.findOne(g,a);y&&((d=this._resolvePossibleFunction(d))?h(d)?this._putElementInTemplate(v(d),y):this._config.html?y.innerHTML=this._maybeSanitize(d):y.textContent=d:y.remove())}_maybeSanitize(a){return this._config.sanitize?function(d,g,y){if(!d.length)return d;if(y&&typeof y=="function")return y(d);let w=new window.DOMParser().parseFromString(d,"text/html"),S=[].concat(...w.body.querySelectorAll("*"));for(let O of S){let L=O.nodeName.toLowerCase();if(!Object.keys(g).includes(L)){O.remove();continue}let $=[].concat(...O.attributes),B=[].concat(g["*"]||[],g[L]||[]);for(let M of $)Is(M,B)||O.removeAttribute(M.nodeName)}return w.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return typeof a=="function"?a(this):a}_putElementInTemplate(a,d){if(this._config.html)return d.innerHTML="",void d.append(a);d.textContent=a.textContent}}let $s=new Set(["sanitize","allowList","sanitizeFn"]),ii="fade",uo="show",Dn=".modal",zs="hide.bs.modal",ai="hover",si="focus",Aa={AUTO:"auto",TOP:"top",RIGHT:J()?"left":"right",BOTTOM:"bottom",LEFT:J()?"right":"left"},Zr={allowList:oi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Bs={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ar extends Qt{constructor(a,d){if(Ns===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Zr}static get DefaultType(){return Bs}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),A.off(this._element.closest(Dn),zs,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;let a=A.trigger(this._element,this.constructor.eventName("show")),d=(C(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!d)return;this._disposePopper();let g=this._getTipElement();this._element.setAttribute("aria-describedby",g.getAttribute("id"));let{container:y}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(y.append(g),A.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(g),g.classList.add(uo),"ontouchstart"in document.documentElement)for(let w of[].concat(...document.body.children))A.on(w,"mouseover",I);this._queueCallback(()=>{A.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!A.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(uo),"ontouchstart"in document.documentElement)for(let a of[].concat(...document.body.children))A.off(a,"mouseover",I);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),A.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){let d=this._getTemplateFactory(a).toHtml();if(!d)return null;d.classList.remove(ii,uo),d.classList.add(`bs-${this.constructor.NAME}-auto`);let g=(y=>{do y+=Math.floor(1e6*Math.random());while(document.getElementById(y));return y})(this.constructor.NAME).toString();return d.setAttribute("id",g),this._isAnimated()&&d.classList.add(ii),d}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new dc({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ii)}_isShown(){return this.tip&&this.tip.classList.contains(uo)}_createPopper(a){let d=typeof this._config.placement=="function"?this._config.placement.call(this,a,this._element):this._config.placement,g=Aa[d.toUpperCase()];return co(this._element,a,this._getPopperConfig(g))}_getOffset(){let{offset:a}=this._config;return typeof a=="string"?a.split(",").map(d=>Number.parseInt(d,10)):typeof a=="function"?d=>a(d,this._element):a}_resolvePossibleFunction(a){return typeof a=="function"?a.call(this._element):a}_getPopperConfig(a){let d={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...d,...typeof this._config.popperConfig=="function"?this._config.popperConfig(d):this._config.popperConfig}}_setListeners(){let a=this._config.trigger.split(" ");for(let d of a)if(d==="click")A.on(this._element,this.constructor.eventName("click"),this._config.selector,g=>{this._initializeOnDelegatedTarget(g).toggle()});else if(d!=="manual"){let g=d===ai?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),y=d===ai?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");A.on(this._element,g,this._config.selector,w=>{let S=this._initializeOnDelegatedTarget(w);S._activeTrigger[w.type==="focusin"?si:ai]=!0,S._enter()}),A.on(this._element,y,this._config.selector,w=>{let S=this._initializeOnDelegatedTarget(w);S._activeTrigger[w.type==="focusout"?si:ai]=S._element.contains(w.relatedTarget),S._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},A.on(this._element.closest(Dn),zs,this._hideModalHandler)}_fixTitle(){let a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,d){clearTimeout(this._timeout),this._timeout=setTimeout(a,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){let d=se.getDataAttributes(this._element);for(let g of Object.keys(d))$s.has(g)&&delete d[g];return a={...d,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:v(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){let a={};for(let d in this._config)this.constructor.Default[d]!==this._config[d]&&(a[d]=this._config[d]);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){let d=Ar.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0)throw new TypeError(`No method named "${a}"`);d[a]()}})}}vt(Ar);let Fs={...Ar.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},li={...Ar.DefaultType,content:"(null|string|element|function)"};class Pn extends Ar{static get Default(){return Fs}static get DefaultType(){return li}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){let d=Pn.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0)throw new TypeError(`No method named "${a}"`);d[a]()}})}}vt(Pn);let ci="click.bs.scrollspy",Jr="active",Da="[href]",Us={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Pa={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ln extends Qt{constructor(a,d){super(a,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Us}static get DefaultType(){return Pa}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=v(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(d=>Number.parseFloat(d))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(A.off(this._config.target,ci),A.on(this._config.target,ci,Da,a=>{let d=this._observableSections.get(a.target.hash);if(d){a.preventDefault();let g=this._rootElement||window,y=d.offsetTop-this._element.offsetTop;if(g.scrollTo)return void g.scrollTo({top:y,behavior:"smooth"});g.scrollTop=y}}))}_getNewObserver(){let a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),a)}_observerCallback(a){let d=S=>this._targetLinks.get(`#${S.target.id}`),g=S=>{this._previousScrollData.visibleEntryTop=S.target.offsetTop,this._process(d(S))},y=(this._rootElement||document.documentElement).scrollTop,w=y>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=y;for(let S of a){if(!S.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(S));continue}let O=S.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(w&&O){if(g(S),!y)return}else w||O||g(S)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let a=X.find(Da,this._config.target);for(let d of a){if(!d.hash||E(d))continue;let g=X.findOne(d.hash,this._element);k(g)&&(this._targetLinks.set(d.hash,d),this._observableSections.set(d.hash,g))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(Jr),this._activateParents(a),A.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))X.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(Jr);else for(let d of X.parents(a,".nav, .list-group"))for(let g of X.prev(d,".nav-link, .nav-item > .nav-link, .list-group-item"))g.classList.add(Jr)}_clearActiveClass(a){a.classList.remove(Jr);let d=X.find("[href].active",a);for(let g of d)g.classList.remove(Jr)}static jQueryInterface(a){return this.each(function(){let d=Ln.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}})}}A.on(window,"load.bs.scrollspy.data-api",()=>{for(let u of X.find('[data-bs-spy="scroll"]'))Ln.getOrCreateInstance(u)}),vt(Ln);let Hs="ArrowLeft",La="ArrowRight",di="ArrowUp",Mn="ArrowDown",jn="active",Ma="fade",ja="show",fo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',pi=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${fo}`;class qe extends Qt{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),A.on(this._element,"keydown.bs.tab",d=>this._keydown(d)))}static get NAME(){return"tab"}show(){let a=this._element;if(this._elemIsActive(a))return;let d=this._getActiveElem(),g=d?A.trigger(d,"hide.bs.tab",{relatedTarget:a}):null;A.trigger(a,"show.bs.tab",{relatedTarget:d}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(d,a),this._activate(a,d))}_activate(a,d){a&&(a.classList.add(jn),this._activate(c(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),A.trigger(a,"shown.bs.tab",{relatedTarget:d})):a.classList.add(ja)},a,a.classList.contains(Ma)))}_deactivate(a,d){a&&(a.classList.remove(jn),a.blur(),this._deactivate(c(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),A.trigger(a,"hidden.bs.tab",{relatedTarget:d})):a.classList.remove(ja)},a,a.classList.contains(Ma)))}_keydown(a){if(![Hs,La,di,Mn].includes(a.key))return;a.stopPropagation(),a.preventDefault();let d=[La,Mn].includes(a.key),g=Zt(this._getChildren().filter(y=>!E(y)),a.target,d,!0);g&&(g.focus({preventScroll:!0}),qe.getOrCreateInstance(g).show())}_getChildren(){return X.find(pi,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,d){this._setAttributeIfNotExists(a,"role","tablist");for(let g of d)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);let d=this._elemIsActive(a),g=this._getOuterElement(a);a.setAttribute("aria-selected",d),g!==a&&this._setAttributeIfNotExists(g,"role","presentation"),d||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){let d=c(a);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`#${a.id}`))}_toggleDropDown(a,d){let g=this._getOuterElement(a);if(!g.classList.contains("dropdown"))return;let y=(w,S)=>{let O=X.findOne(w,g);O&&O.classList.toggle(S,d)};y(".dropdown-toggle",jn),y(".dropdown-menu",ja),g.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(a,d,g){a.hasAttribute(d)||a.setAttribute(d,g)}_elemIsActive(a){return a.classList.contains(jn)}_getInnerElement(a){return a.matches(pi)?a:X.findOne(pi,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){let d=qe.getOrCreateInstance(this);if(typeof a=="string"){if(d[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);d[a]()}})}}A.on(document,"click.bs.tab",fo,function(u){["A","AREA"].includes(this.tagName)&&u.preventDefault(),E(this)||qe.getOrCreateInstance(this).show()}),A.on(window,"load.bs.tab",()=>{for(let u of X.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))qe.getOrCreateInstance(u)}),vt(qe);let Qr="hide",ho="show",je="showing",pc={animation:"boolean",autohide:"boolean",delay:"number"},Gs={animation:!0,autohide:!0,delay:5e3};class Rn extends Qt{constructor(a,d){super(a,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Gs}static get DefaultType(){return pc}static get NAME(){return"toast"}show(){A.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Qr),D(this._element),this._element.classList.add(ho,je),this._queueCallback(()=>{this._element.classList.remove(je),A.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(A.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(je),this._queueCallback(()=>{this._element.classList.add(Qr),this._element.classList.remove(je,ho),A.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ho),super.dispose()}isShown(){return this._element.classList.contains(ho)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,d){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=d;break;case"focusin":case"focusout":this._hasKeyboardInteraction=d}if(d)return void this._clearTimeout();let g=a.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){A.on(this._element,"mouseover.bs.toast",a=>this._onInteraction(a,!0)),A.on(this._element,"mouseout.bs.toast",a=>this._onInteraction(a,!1)),A.on(this._element,"focusin.bs.toast",a=>this._onInteraction(a,!0)),A.on(this._element,"focusout.bs.toast",a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){let d=Rn.getOrCreateInstance(this,a);if(typeof a=="string"){if(d[a]===void 0)throw new TypeError(`No method named "${a}"`);d[a](this)}})}}return Wr(Rn),vt(Rn),{Alert:Ue,Button:tr,Carousel:wr,Collapse:Er,Dropdown:Nt,Modal:rr,Offcanvas:Ye,Popover:Pn,ScrollSpy:Ln,Tab:qe,Toast:Rn,Tooltip:Ar}})});var s0=hm(vm());var yl=window,xl=yl.ShadowRoot&&(yl.ShadyCSS===void 0||yl.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qc=Symbol(),_m=new WeakMap,Wa=class{constructor(e,i,c){if(this._$cssResult$=!0,c!==qc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(xl&&e===void 0){let c=i!==void 0&&i.length===1;c&&(e=_m.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),c&&_m.set(i,e))}return e}toString(){return this.cssText}},ym=n=>new Wa(typeof n=="string"?n:n+"",void 0,qc),Ya=(n,...e)=>{let i=n.length===1?n[0]:e.reduce((c,p,h)=>c+(v=>{if(v._$cssResult$===!0)return v.cssText;if(typeof v=="number")return v;throw Error("Value passed to 'css' function must be a 'css' function result: "+v+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(p)+n[h+1],n[0]);return new Wa(i,n,qc)},Vc=(n,e)=>{xl?n.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{let c=document.createElement("style"),p=yl.litNonce;p!==void 0&&c.setAttribute("nonce",p),c.textContent=i.cssText,n.appendChild(c)})},wl=xl?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let i="";for(let c of e.cssRules)i+=c.cssText;return ym(i)})(n):n;var Xc,El=window,xm=El.trustedTypes,Vf=xm?xm.emptyScript:"",wm=El.reactiveElementPolyfillSupport,Zc={toAttribute(n,e){switch(e){case Boolean:n=n?Vf:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let i=n;switch(e){case Boolean:i=n!==null;break;case Number:i=n===null?null:Number(n);break;case Object:case Array:try{i=JSON.parse(n)}catch{i=null}}return i}},Em=(n,e)=>e!==n&&(e==e||n==n),Kc={attribute:!0,type:String,converter:Zc,reflect:!1,hasChanged:Em},rn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((i,c)=>{let p=this._$Ep(c,i);p!==void 0&&(this._$Ev.set(p,c),e.push(p))}),e}static createProperty(e,i=Kc){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){let c=typeof e=="symbol"?Symbol():"__"+e,p=this.getPropertyDescriptor(e,c,i);p!==void 0&&Object.defineProperty(this.prototype,e,p)}}static getPropertyDescriptor(e,i,c){return{get(){return this[i]},set(p){let h=this[e];this[i]=p,this.requestUpdate(e,h,c)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Kc}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let i=this.properties,c=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let p of c)this.createProperty(p,i[p])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let c=new Set(e.flat(1/0).reverse());for(let p of c)i.unshift(wl(p))}else e!==void 0&&i.push(wl(e));return i}static _$Ep(e,i){let c=i.attribute;return c===!1?void 0:typeof c=="string"?c:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(i=>i(this))}addController(e){var i,c;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((c=e.hostConnected)===null||c===void 0||c.call(e))}removeController(e){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var e;let i=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Vc(i,this.constructor.elementStyles),i}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var c;return(c=i.hostConnected)===null||c===void 0?void 0:c.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var c;return(c=i.hostDisconnected)===null||c===void 0?void 0:c.call(i)})}attributeChangedCallback(e,i,c){this._$AK(e,c)}_$EO(e,i,c=Kc){var p;let h=this.constructor._$Ep(e,c);if(h!==void 0&&c.reflect===!0){let v=(((p=c.converter)===null||p===void 0?void 0:p.toAttribute)!==void 0?c.converter:Zc).toAttribute(i,c.type);this._$El=e,v==null?this.removeAttribute(h):this.setAttribute(h,v),this._$El=null}}_$AK(e,i){var c;let p=this.constructor,h=p._$Ev.get(e);if(h!==void 0&&this._$El!==h){let v=p.getPropertyOptions(h),k=typeof v.converter=="function"?{fromAttribute:v.converter}:((c=v.converter)===null||c===void 0?void 0:c.fromAttribute)!==void 0?v.converter:Zc;this._$El=h,this[h]=k.fromAttribute(i,v.type),this._$El=null}}requestUpdate(e,i,c){let p=!0;e!==void 0&&(((c=c||this.constructor.getPropertyOptions(e)).hasChanged||Em)(this[e],i)?(this._$AL.has(e)||this._$AL.set(e,i),c.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,c))):p=!1),!this.isUpdatePending&&p&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((p,h)=>this[h]=p),this._$Ei=void 0);let i=!1,c=this._$AL;try{i=this.shouldUpdate(c),i?(this.willUpdate(c),(e=this._$ES)===null||e===void 0||e.forEach(p=>{var h;return(h=p.hostUpdate)===null||h===void 0?void 0:h.call(p)}),this.update(c)):this._$Ek()}catch(p){throw i=!1,this._$Ek(),p}i&&this._$AE(c)}willUpdate(e){}_$AE(e){var i;(i=this._$ES)===null||i===void 0||i.forEach(c=>{var p;return(p=c.hostUpdated)===null||p===void 0?void 0:p.call(c)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((i,c)=>this._$EO(c,this[c],i)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};rn.finalized=!0,rn.elementProperties=new Map,rn.elementStyles=[],rn.shadowRootOptions={mode:"open"},wm?.({ReactiveElement:rn}),((Xc=El.reactiveElementVersions)!==null&&Xc!==void 0?Xc:El.reactiveElementVersions=[]).push("1.6.0");var Jc,kl=window,Si=kl.trustedTypes,km=Si?Si.createPolicy("lit-html",{createHTML:n=>n}):void 0,Fn=`lit$${(Math.random()+"").slice(9)}$`,Dm="?"+Fn,Xf=`<${Dm}>`,Ni=document,Va=(n="")=>Ni.createComment(n),Xa=n=>n===null||typeof n!="object"&&typeof n!="function",Pm=Array.isArray,Kf=n=>Pm(n)||typeof n?.[Symbol.iterator]=="function",qa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sm=/-->/g,Nm=/>/g,No=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tm=/'/g,Cm=/"/g,Lm=/^(?:script|style|textarea|title)$/i,Mm=n=>(e,...i)=>({_$litType$:n,strings:e,values:i}),nn=Mm(1),hb=Mm(2),To=Symbol.for("lit-noChange"),oe=Symbol.for("lit-nothing"),Om=new WeakMap,ki=Ni.createTreeWalker(Ni,129,null,!1),Zf=(n,e)=>{let i=n.length-1,c=[],p,h=e===2?"<svg>":"",v=qa;for(let E=0;E<i;E++){let C=n[E],I,D,H=-1,at=0;for(;at<C.length&&(v.lastIndex=at,D=v.exec(C),D!==null);)at=v.lastIndex,v===qa?D[1]==="!--"?v=Sm:D[1]!==void 0?v=Nm:D[2]!==void 0?(Lm.test(D[2])&&(p=RegExp("</"+D[2],"g")),v=No):D[3]!==void 0&&(v=No):v===No?D[0]===">"?(v=p??qa,H=-1):D[1]===void 0?H=-2:(H=v.lastIndex-D[2].length,I=D[1],v=D[3]===void 0?No:D[3]==='"'?Cm:Tm):v===Cm||v===Tm?v=No:v===Sm||v===Nm?v=qa:(v=No,p=void 0);let J=v===No&&n[E+1].startsWith("/>")?" ":"";h+=v===qa?C+Xf:H>=0?(c.push(I),C.slice(0,H)+"$lit$"+C.slice(H)+Fn+J):C+Fn+(H===-2?(c.push(void 0),E):J)}let k=h+(n[i]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[km!==void 0?km.createHTML(k):k,c]},Co=class{constructor({strings:e,_$litType$:i},c){let p;this.parts=[];let h=0,v=0,k=e.length-1,E=this.parts,[C,I]=Zf(e,i);if(this.el=Co.createElement(C,c),ki.currentNode=this.el.content,i===2){let D=this.el.content,H=D.firstChild;H.remove(),D.append(...H.childNodes)}for(;(p=ki.nextNode())!==null&&E.length<k;){if(p.nodeType===1){if(p.hasAttributes()){let D=[];for(let H of p.getAttributeNames())if(H.endsWith("$lit$")||H.startsWith(Fn)){let at=I[v++];if(D.push(H),at!==void 0){let J=p.getAttribute(at.toLowerCase()+"$lit$").split(Fn),vt=/([.?@])?(.*)/.exec(at);E.push({type:1,index:h,name:vt[2],strings:J,ctor:vt[1]==="."?td:vt[1]==="?"?ed:vt[1]==="@"?rd:Ci})}else E.push({type:6,index:h})}for(let H of D)p.removeAttribute(H)}if(Lm.test(p.tagName)){let D=p.textContent.split(Fn),H=D.length-1;if(H>0){p.textContent=Si?Si.emptyScript:"";for(let at=0;at<H;at++)p.append(D[at],Va()),ki.nextNode(),E.push({type:2,index:++h});p.append(D[H],Va())}}}else if(p.nodeType===8)if(p.data===Dm)E.push({type:2,index:h});else{let D=-1;for(;(D=p.data.indexOf(Fn,D+1))!==-1;)E.push({type:7,index:h}),D+=Fn.length-1}h++}}static createElement(e,i){let c=Ni.createElement("template");return c.innerHTML=e,c}};function Ti(n,e,i=n,c){var p,h,v,k;if(e===To)return e;let E=c!==void 0?(p=i._$Co)===null||p===void 0?void 0:p[c]:i._$Cl,C=Xa(e)?void 0:e._$litDirective$;return E?.constructor!==C&&((h=E?._$AO)===null||h===void 0||h.call(E,!1),C===void 0?E=void 0:(E=new C(n),E._$AT(n,i,c)),c!==void 0?((v=(k=i)._$Co)!==null&&v!==void 0?v:k._$Co=[])[c]=E:i._$Cl=E),E!==void 0&&(e=Ti(n,E._$AS(n,e.values),E,c)),e}var Qc=class{constructor(e,i){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var i;let{el:{content:c},parts:p}=this._$AD,h=((i=e?.creationScope)!==null&&i!==void 0?i:Ni).importNode(c,!0);ki.currentNode=h;let v=ki.nextNode(),k=0,E=0,C=p[0];for(;C!==void 0;){if(k===C.index){let I;C.type===2?I=new Oo(v,v.nextSibling,this,e):C.type===1?I=new C.ctor(v,C.name,C.strings,this,e):C.type===6&&(I=new nd(v,this,e)),this.u.push(I),C=p[++E]}k!==C?.index&&(v=ki.nextNode(),k++)}return h}p(e){let i=0;for(let c of this.u)c!==void 0&&(c.strings!==void 0?(c._$AI(e,c,i),i+=c.strings.length-2):c._$AI(e[i])),i++}},Oo=class{constructor(e,i,c,p){var h;this.type=2,this._$AH=oe,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=c,this.options=p,this._$Cm=(h=p?.isConnected)===null||h===void 0||h}get _$AU(){var e,i;return(i=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&i!==void 0?i:this._$Cm}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Ti(this,e,i),Xa(e)?e===oe||e==null||e===""?(this._$AH!==oe&&this._$AR(),this._$AH=oe):e!==this._$AH&&e!==To&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Kf(e)?this.k(e):this.g(e)}O(e,i=this._$AB){return this._$AA.parentNode.insertBefore(e,i)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==oe&&Xa(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ni.createTextNode(e)),this._$AH=e}$(e){var i;let{values:c,_$litType$:p}=e,h=typeof p=="number"?this._$AC(e):(p.el===void 0&&(p.el=Co.createElement(p.h,this.options)),p);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===h)this._$AH.p(c);else{let v=new Qc(h,this),k=v.v(this.options);v.p(c),this.T(k),this._$AH=v}}_$AC(e){let i=Om.get(e.strings);return i===void 0&&Om.set(e.strings,i=new Co(e)),i}k(e){Pm(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,c,p=0;for(let h of e)p===i.length?i.push(c=new Oo(this.O(Va()),this.O(Va()),this,this.options)):c=i[p],c._$AI(h),p++;p<i.length&&(this._$AR(c&&c._$AB.nextSibling,p),i.length=p)}_$AR(e=this._$AA.nextSibling,i){var c;for((c=this._$AP)===null||c===void 0||c.call(this,!1,!0,i);e&&e!==this._$AB;){let p=e.nextSibling;e.remove(),e=p}}setConnected(e){var i;this._$AM===void 0&&(this._$Cm=e,(i=this._$AP)===null||i===void 0||i.call(this,e))}},Ci=class{constructor(e,i,c,p,h){this.type=1,this._$AH=oe,this._$AN=void 0,this.element=e,this.name=i,this._$AM=p,this.options=h,c.length>2||c[0]!==""||c[1]!==""?(this._$AH=Array(c.length-1).fill(new String),this.strings=c):this._$AH=oe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,i=this,c,p){let h=this.strings,v=!1;if(h===void 0)e=Ti(this,e,i,0),v=!Xa(e)||e!==this._$AH&&e!==To,v&&(this._$AH=e);else{let k=e,E,C;for(e=h[0],E=0;E<h.length-1;E++)C=Ti(this,k[c+E],i,E),C===To&&(C=this._$AH[E]),v||(v=!Xa(C)||C!==this._$AH[E]),C===oe?e=oe:e!==oe&&(e+=(C??"")+h[E+1]),this._$AH[E]=C}v&&!p&&this.j(e)}j(e){e===oe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},td=class extends Ci{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===oe?void 0:e}},Jf=Si?Si.emptyScript:"",ed=class extends Ci{constructor(){super(...arguments),this.type=4}j(e){e&&e!==oe?this.element.setAttribute(this.name,Jf):this.element.removeAttribute(this.name)}},rd=class extends Ci{constructor(e,i,c,p,h){super(e,i,c,p,h),this.type=5}_$AI(e,i=this){var c;if((e=(c=Ti(this,e,i,0))!==null&&c!==void 0?c:oe)===To)return;let p=this._$AH,h=e===oe&&p!==oe||e.capture!==p.capture||e.once!==p.once||e.passive!==p.passive,v=e!==oe&&(p===oe||h);h&&this.element.removeEventListener(this.name,this,p),v&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i,c;typeof this._$AH=="function"?this._$AH.call((c=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&c!==void 0?c:this.element,e):this._$AH.handleEvent(e)}},nd=class{constructor(e,i,c){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=c}get _$AU(){return this._$AM._$AU}_$AI(e){Ti(this,e)}};var Am=kl.litHtmlPolyfillSupport;Am?.(Co,Oo),((Jc=kl.litHtmlVersions)!==null&&Jc!==void 0?Jc:kl.litHtmlVersions=[]).push("2.6.0");var jm=(n,e,i)=>{var c,p;let h=(c=i?.renderBefore)!==null&&c!==void 0?c:e,v=h._$litPart$;if(v===void 0){let k=(p=i?.renderBefore)!==null&&p!==void 0?p:null;h._$litPart$=v=new Oo(e.insertBefore(Va(),k),k,void 0,i??{})}return v._$AI(n),v};var od,id;var Un=class extends rn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;let c=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=c.firstChild),c}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jm(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return To}};Un.finalized=!0,Un._$litElement$=!0,(od=globalThis.litElementHydrateSupport)===null||od===void 0||od.call(globalThis,{LitElement:Un});var Rm=globalThis.litElementPolyfillSupport;Rm?.({LitElement:Un});((id=globalThis.litElementVersions)!==null&&id!==void 0?id:globalThis.litElementVersions=[]).push("3.2.2");var Im=n=>e=>typeof e=="function"?((i,c)=>(customElements.define(i,c),c))(n,e):((i,c)=>{let{kind:p,elements:h}=c;return{kind:p,elements:h,finisher(v){customElements.define(i,v)}}})(n,e);var ad,Hb=((ad=window.HTMLSlotElement)===null||ad===void 0?void 0:ad.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(i=>i.nodeType===Node.ELEMENT_NODE);var Bm=hm($m());var zm=Ya`@charset "UTF-8";
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333333%;
  }

  .offset-md-5 {
    margin-left: 41.66666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333333%;
  }

  .offset-md-8 {
    margin-left: 66.66666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333333%;
  }

  .offset-md-11 {
    margin-left: 91.66666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #cfe2ff;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.table-secondary {
  --bs-table-bg: #e2e3e5;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f8f9fa;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.table-dark {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + (0.75rem + 2px));
}
textarea.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
}
textarea.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
}

.form-control-color {
  max-width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #e9ecef;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212529;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.btn-link:hover {
  color: #0a58ca;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e2125;
  background-color: #e9ecef;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: #0a58ca;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.toast:not(.showing):not(.show) {
  opacity: 0;
}
.toast.hide {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.offcanvas-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.offcanvas-body {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
}

.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}

.offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
}

.offcanvas.show {
  transform: none;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: #0d6efd;
}
.link-primary:hover, .link-primary:focus {
  color: #0a58ca;
}

.link-secondary {
  color: #6c757d;
}
.link-secondary:hover, .link-secondary:focus {
  color: #565e64;
}

.link-success {
  color: #198754;
}
.link-success:hover, .link-success:focus {
  color: #146c43;
}

.link-info {
  color: #0dcaf0;
}
.link-info:hover, .link-info:focus {
  color: #3dd5f3;
}

.link-warning {
  color: #ffc107;
}
.link-warning:hover, .link-warning:focus {
  color: #ffcd39;
}

.link-danger {
  color: #dc3545;
}
.link-danger:hover, .link-danger:focus {
  color: #b02a37;
}

.link-light {
  color: #f8f9fa;
}
.link-light:hover, .link-light:focus {
  color: #f9fafb;
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #0d6efd !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #198754 !important;
}

.border-info {
  border-color: #0dcaf0 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-white {
  border-color: #fff !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  color: #0d6efd !important;
}

.text-secondary {
  color: #6c757d !important;
}

.text-success {
  color: #198754 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-light {
  color: #f8f9fa !important;
}

.text-dark {
  color: #212529 !important;
}

.text-white {
  color: #fff !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  color: inherit !important;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.bg-body {
  background-color: #fff !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.2rem !important;
}

.rounded-2 {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}
`;var Ao=class extends Un{constructor(i){super();this.configItems=i}checkboxTemplate(i){return nn`
      <li
        class="checkbox-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="fw-bold control-title">${i.title}</div>
          <small class="control-description disabled"
            >${i.description}</small
          >
        </div>
        <input
          @input="${c=>this.saveChange(i.id,c)}"
          class="form-check-input me-1"
          type="checkbox"
          id="thirdCheckbox"
          ${i.value?"checked":""}
        />
      </li>
    `}switchTemplate(i){return nn`
      <li
        class="switch-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-auto">
          <div class="control-title fw-bold">${i.title}</div>
          <small class="control-description disabled"
            >${i.description}
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"            
          ${i.value?"checked":""}
          />
        </div>
      </li>
    `}radioTemplate(i){return nn`
      <li
        class="radio-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${i.title}</div>
          <small class="control-description disabled"
            >${i.description}</small
          >
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
        </div>
      </li>
    `}rangeTemplate(i){return nn`
      <li class="range-template list-group-item p-4">
        <div class="ms-2">
          <div class="control-title fw-bold">${i.title}</div>
          <small class="control-description disabled"
            >${i.description}>
          <input
            type="range"
            class="form-range"
            min="0"
            max="5"
            value="${i.value}"
            id="customRange2"
          />
        </div>
      </li>
    `}textareaTemplate(i){return nn`
      <li class="textarea-template list-group-item p-4 ">
        <div class="d-flex justify-content-between align-items-center">
          <div class="ms-2 me-auto">
            <div class="control-title fw-bold">${i.title}</div>
            <small class="control-description disabled"
              >${i.description}
          </div>
          <div class="form-check form-switch">
          V
            <i
              class="bi-caret-down-fill"
              style="font-size: 1.5rem"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></i>
          </div>
        </div>
        <div class="collapse ms-2" id="collapseExample">
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value="${i.value}"
            ></textarea>
          </div>
        </div>
      </li>
    `}selectTemplate(i){return nn`
      <li
        class="select-template list-group-item p-4 d-flex justify-content-between align-items-center"
      >
        <div class="ms-2 me-5">
          <div class="control-title fw-bold">${i.title}</div>
          <small class="control-description disabled"
            >${i.description}</small
          >
        </div>
        <select
          class="form-select form-select-md"
          aria-label="example"
          style="max-width: 200px"
          value="${i.value}"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </li>
    `}toastTemplate(){return nn`
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img
              src="../assets/logo-24x24.png"
              class="rounded me-2"
              alt="Logo"
            />
            <strong class="me-auto"
              >${chrome.i18n.getMessage("appName")}</strong
            >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Successfully updated settings</div>
        </div>
      </div>
    `}render(){let i=[];return this.configItems.forEach(c=>{switch(c.type){case"checkbox":i.push(this.checkboxTemplate(c));break;case"switch":i.push(this.switchTemplate(c));break;case"radio":i.push(this.radioTemplate(c));break;case"select":i.push(this.selectTemplate(c));break;case"textarea":i.push(this.textareaTemplate(c));break;case"range":i.push(this.rangeTemplate(c));break}}),nn`
      <div class="container">
        <div class="row">
          <div class="col">
            <ul class="list-group">
              ${i}
            </ul>
          </div>
        </div>
        ${this.toastTemplate()}
      </div>
    `}saveChange(i,c){console.log("saving: ",i,c),this.showToast()}showToast(){let i=this.renderRoot.querySelector("#liveToast");new Bm.default.Toast(i).show()}};Ao.styles=Ya`
    ${zm}
    
    input[type="checkbox"] {
      /* Double-sized Checkboxes */
      -ms-transform: scale(1.4); /* IE */
      -moz-transform: scale(1.4); /* FF */
      -webkit-transform: scale(1.4); /* Safari and Chrome */
      -o-transform: scale(1.4); /* Opera */
      padding: 10px;
    }
    
    .collapse {
      margin-top: 15px;
    }
    .container {
      min-width: 400px;
      min-height: 400px;
    }
  `,Ao=gm([Im("options-element")],Ao);var Fm=Object.prototype.toString;function Za(n){switch(Fm.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Xe(n,Error)}}function Oi(n,e){return Fm.call(n)===`[object ${e}]`}function Ja(n){return Oi(n,"ErrorEvent")}function Sl(n){return Oi(n,"DOMError")}function cd(n){return Oi(n,"DOMException")}function Ve(n){return Oi(n,"String")}function Ai(n){return n===null||typeof n!="object"&&typeof n!="function"}function cr(n){return Oi(n,"Object")}function Di(n){return typeof Event<"u"&&Xe(n,Event)}function dd(n){return typeof Element<"u"&&Xe(n,Element)}function pd(n){return Oi(n,"RegExp")}function Do(n){return Boolean(n&&n.then&&typeof n.then=="function")}function md(n){return cr(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function ud(n){return typeof n=="number"&&n!==n}function Xe(n,e){try{return n instanceof e}catch{return!1}}function Nl(n){return n&&n.Math==Math?n:void 0}var me=typeof globalThis=="object"&&Nl(globalThis)||typeof window=="object"&&Nl(window)||typeof self=="object"&&Nl(self)||typeof global=="object"&&Nl(global)||function(){return this}()||{};function on(){return me}function Po(n,e,i){let c=i||me,p=c.__SENTRY__=c.__SENTRY__||{};return p[n]||(p[n]=e())}var Qf=on(),th=80;function Pi(n,e={}){try{let i=n,c=5,p=[],h=0,v=0,k=" > ",E=k.length,C,I=Array.isArray(e)?e:e.keyAttrs,D=!Array.isArray(e)&&e.maxStringLength||th;for(;i&&h++<c&&(C=eh(i,I),!(C==="html"||h>1&&v+p.length*E+C.length>=D));)p.push(C),v+=C.length,i=i.parentNode;return p.reverse().join(k)}catch{return"<unknown>"}}function eh(n,e){let i=n,c=[],p,h,v,k,E;if(!i||!i.tagName)return"";c.push(i.tagName.toLowerCase());let C=e&&e.length?e.filter(D=>i.getAttribute(D)).map(D=>[D,i.getAttribute(D)]):null;if(C&&C.length)C.forEach(D=>{c.push(`[${D[0]}="${D[1]}"]`)});else if(i.id&&c.push(`#${i.id}`),p=i.className,p&&Ve(p))for(h=p.split(/\s+/),E=0;E<h.length;E++)c.push(`.${h[E]}`);let I=["aria-label","type","name","title","alt"];for(E=0;E<I.length;E++)v=I[E],k=i.getAttribute(v),k&&c.push(`[${v}="${k}"]`);return c.join("")}function fd(){try{return Qf.document.location.href}catch{return""}}var jt=class extends Error{constructor(e,i="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=i}};var rh=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function nh(n){return n==="http"||n==="https"}function Hn(n,e=!1){let{host:i,path:c,pass:p,port:h,projectId:v,protocol:k,publicKey:E}=n;return`${k}://${E}${e&&p?`:${p}`:""}@${i}${h?`:${h}`:""}/${c&&`${c}/`}${v}`}function Um(n){let e=rh.exec(n);if(!e)throw new jt(`Invalid Sentry Dsn: ${n}`);let[i,c,p="",h,v="",k]=e.slice(1),E="",C=k,I=C.split("/");if(I.length>1&&(E=I.slice(0,-1).join("/"),C=I.pop()),C){let D=C.match(/^\d+/);D&&(C=D[0])}return Hm({host:h,pass:p,path:E,projectId:C,port:v,protocol:i,publicKey:c})}function Hm(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function oh(n){if(!(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__))return;let{port:e,projectId:i,protocol:c}=n;if(["protocol","publicKey","host","projectId"].forEach(h=>{if(!n[h])throw new jt(`Invalid Sentry Dsn: ${h} missing`)}),!i.match(/^\d+$/))throw new jt(`Invalid Sentry Dsn: Invalid projectId ${i}`);if(!nh(c))throw new jt(`Invalid Sentry Dsn: Invalid protocol ${c}`);if(e&&isNaN(parseInt(e,10)))throw new jt(`Invalid Sentry Dsn: Invalid port ${e}`);return!0}function Tl(n){let e=typeof n=="string"?Um(n):Hm(n);return oh(e),e}var ih="Sentry Logger ",Li=["debug","info","warn","error","log","assert","trace"];function Cl(n){if(!("console"in me))return n();let e=me.console,i={};Li.forEach(c=>{let p=e[c]&&e[c].__sentry_original__;c in e&&p&&(i[c]=e[c],e[c]=p)});try{return n()}finally{Object.keys(i).forEach(c=>{e[c]=i[c]})}}function Gm(){let n=!1,e={enable:()=>{n=!0},disable:()=>{n=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?Li.forEach(i=>{e[i]=(...c)=>{n&&Cl(()=>{me.console[i](`${ih}[${i}]:`,...c)})}}):Li.forEach(i=>{e[i]=()=>{}}),e}var W;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?W=Po("logger",Gm):W=Gm();function Gn(n,e=0){return typeof n!="string"||e===0||n.length<=e?n:`${n.slice(0,e)}...`}function Ol(n,e){if(!Array.isArray(n))return"";let i=[];for(let c=0;c<n.length;c++){let p=n[c];try{i.push(String(p))}catch{i.push("[value cannot be serialized]")}}return i.join(e)}function Wm(n,e,i=!1){return Ve(n)?pd(e)?e.test(n):Ve(e)?i?n===e:n.includes(e):!1:!1}function Qa(n,e=[],i=!1){return e.some(c=>Wm(n,c,i))}function Kt(n,e,i){if(!(e in n))return;let c=n[e],p=i(c);if(typeof p=="function")try{Al(p,c)}catch{}n[e]=p}function Mi(n,e,i){Object.defineProperty(n,e,{value:i,writable:!0,configurable:!0})}function Al(n,e){let i=e.prototype||{};n.prototype=e.prototype=i,Mi(n,"__sentry_original__",e)}function Lo(n){return n.__sentry_original__}function gd(n){return Object.keys(n).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`).join("&")}function Dl(n){if(Za(n))return{message:n.message,name:n.name,stack:n.stack,...qm(n)};if(Di(n)){let e={type:n.type,target:Ym(n.target),currentTarget:Ym(n.currentTarget),...qm(n)};return typeof CustomEvent<"u"&&Xe(n,CustomEvent)&&(e.detail=n.detail),e}else return n}function Ym(n){try{return dd(n)?Pi(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function qm(n){if(typeof n=="object"&&n!==null){let e={};for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}else return{}}function bd(n,e=40){let i=Object.keys(Dl(n));if(i.sort(),!i.length)return"[object has no keys]";if(i[0].length>=e)return Gn(i[0],e);for(let c=i.length;c>0;c--){let p=i.slice(0,c).join(", ");if(!(p.length>e))return c===i.length?p:Gn(p,e)}return""}function ji(n){return hd(n,new Map)}function hd(n,e){if(cr(n)){let i=e.get(n);if(i!==void 0)return i;let c={};e.set(n,c);for(let p of Object.keys(n))typeof n[p]<"u"&&(c[p]=hd(n[p],e));return c}if(Array.isArray(n)){let i=e.get(n);if(i!==void 0)return i;let c=[];return e.set(n,c),n.forEach(p=>{c.push(hd(p,e))}),c}return n}function Pl(...n){let e=n.sort((i,c)=>i[0]-c[0]).map(i=>i[1]);return(i,c=0)=>{let p=[];for(let h of i.split(`
`).slice(c)){if(h.length>1024)continue;let v=h.replace(/\(error: (.*)\)/,"$1");for(let k of e){let E=k(v);if(E){p.push(E);break}}}return Vm(p)}}function _d(n){return Array.isArray(n)?Pl(...n):n}function Vm(n){if(!n.length)return[];let e=n,i=e[0].function||"",c=e[e.length-1].function||"";return(i.indexOf("captureMessage")!==-1||i.indexOf("captureException")!==-1)&&(e=e.slice(1)),c.indexOf("sentryWrapped")!==-1&&(e=e.slice(0,-1)),e.slice(0,50).map(p=>({...p,filename:p.filename||e[0].filename,function:p.function||"?"})).reverse()}var vd="<anonymous>";function Ke(n){try{return!n||typeof n!="function"?vd:n.name||vd}catch{return vd}}var Mo=on();function Ll(){if(!("fetch"in Mo))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function ts(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function yd(){if(!Ll())return!1;if(ts(Mo.fetch))return!0;let n=!1,e=Mo.document;if(e&&typeof e.createElement=="function")try{let i=e.createElement("iframe");i.hidden=!0,e.head.appendChild(i),i.contentWindow&&i.contentWindow.fetch&&(n=ts(i.contentWindow.fetch)),e.head.removeChild(i)}catch(i){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return n}function xd(){let n=Mo.chrome,e=n&&n.app&&n.app.runtime,i="history"in Mo&&!!Mo.history.pushState&&!!Mo.history.replaceState;return!e&&i}var At=on(),es={},Xm={};function ah(n){if(!Xm[n])switch(Xm[n]=!0,n){case"console":sh();break;case"dom":gh();break;case"xhr":ph();break;case"fetch":lh();break;case"history":mh();break;case"error":bh();break;case"unhandledrejection":vh();break;default:(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("unknown instrumentation type:",n);return}}function Ze(n,e){es[n]=es[n]||[],es[n].push(e),ah(n)}function dr(n,e){if(!(!n||!es[n]))for(let i of es[n]||[])try{i(e)}catch(c){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Ke(i)}
Error:`,c)}}function sh(){"console"in At&&Li.forEach(function(n){n in At.console&&Kt(At.console,n,function(e){return function(...i){dr("console",{args:i,level:n}),e&&e.apply(At.console,i)}})})}function lh(){!yd()||Kt(At,"fetch",function(n){return function(...e){let i={args:e,fetchData:{method:ch(e),url:dh(e)},startTimestamp:Date.now()};return dr("fetch",{...i}),n.apply(At,e).then(c=>(dr("fetch",{...i,endTimestamp:Date.now(),response:c}),c),c=>{throw dr("fetch",{...i,endTimestamp:Date.now(),error:c}),c})}})}function ch(n=[]){return"Request"in At&&Xe(n[0],Request)&&n[0].method?String(n[0].method).toUpperCase():n[1]&&n[1].method?String(n[1].method).toUpperCase():"GET"}function dh(n=[]){return typeof n[0]=="string"?n[0]:"Request"in At&&Xe(n[0],Request)?n[0].url:String(n[0])}function ph(){if(!("XMLHttpRequest"in At))return;let n=XMLHttpRequest.prototype;Kt(n,"open",function(e){return function(...i){let c=this,p=i[1],h=c.__sentry_xhr__={method:Ve(i[0])?i[0].toUpperCase():i[0],url:i[1]};Ve(p)&&h.method==="POST"&&p.match(/sentry_key/)&&(c.__sentry_own_request__=!0);let v=function(){if(c.readyState===4){try{h.status_code=c.status}catch{}dr("xhr",{args:i,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:c})}};return"onreadystatechange"in c&&typeof c.onreadystatechange=="function"?Kt(c,"onreadystatechange",function(k){return function(...E){return v(),k.apply(c,E)}}):c.addEventListener("readystatechange",v),e.apply(c,i)}}),Kt(n,"send",function(e){return function(...i){return this.__sentry_xhr__&&i[0]!==void 0&&(this.__sentry_xhr__.body=i[0]),dr("xhr",{args:i,startTimestamp:Date.now(),xhr:this}),e.apply(this,i)}})}var Ml;function mh(){if(!xd())return;let n=At.onpopstate;At.onpopstate=function(...i){let c=At.location.href,p=Ml;if(Ml=c,dr("history",{from:p,to:c}),n)try{return n.apply(this,i)}catch{}};function e(i){return function(...c){let p=c.length>2?c[2]:void 0;if(p){let h=Ml,v=String(p);Ml=v,dr("history",{from:h,to:v})}return i.apply(this,c)}}Kt(At.history,"pushState",e),Kt(At.history,"replaceState",e)}var uh=1e3,jl,Rl;function fh(n,e){if(!n||n.type!==e.type)return!0;try{if(n.target!==e.target)return!0}catch{}return!1}function hh(n){if(n.type!=="keypress")return!1;try{let e=n.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function Km(n,e=!1){return i=>{if(!i||Rl===i||hh(i))return;let c=i.type==="keypress"?"input":i.type;jl===void 0?(n({event:i,name:c,global:e}),Rl=i):fh(Rl,i)&&(n({event:i,name:c,global:e}),Rl=i),clearTimeout(jl),jl=At.setTimeout(()=>{jl=void 0},uh)}}function gh(){if(!("document"in At))return;let n=dr.bind(null,"dom"),e=Km(n,!0);At.document.addEventListener("click",e,!1),At.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(i=>{let c=At[i]&&At[i].prototype;!c||!c.hasOwnProperty||!c.hasOwnProperty("addEventListener")||(Kt(c,"addEventListener",function(p){return function(h,v,k){if(h==="click"||h=="keypress")try{let E=this,C=E.__sentry_instrumentation_handlers__=E.__sentry_instrumentation_handlers__||{},I=C[h]=C[h]||{refCount:0};if(!I.handler){let D=Km(n);I.handler=D,p.call(this,h,D,k)}I.refCount++}catch{}return p.call(this,h,v,k)}}),Kt(c,"removeEventListener",function(p){return function(h,v,k){if(h==="click"||h=="keypress")try{let E=this,C=E.__sentry_instrumentation_handlers__||{},I=C[h];I&&(I.refCount--,I.refCount<=0&&(p.call(this,h,I.handler,k),I.handler=void 0,delete C[h]),Object.keys(C).length===0&&delete E.__sentry_instrumentation_handlers__)}catch{}return p.call(this,h,v,k)}}))})}var wd=null;function bh(){wd=At.onerror,At.onerror=function(n,e,i,c,p){return dr("error",{column:c,error:p,line:i,msg:n,url:e}),wd?wd.apply(this,arguments):!1}}var Ed=null;function vh(){Ed=At.onunhandledrejection,At.onunhandledrejection=function(n){return dr("unhandledrejection",n),Ed?Ed.apply(this,arguments):!0}}function Zm(){let n=typeof WeakSet=="function",e=n?new WeakSet:[];function i(p){if(n)return e.has(p)?!0:(e.add(p),!1);for(let h=0;h<e.length;h++)if(e[h]===p)return!0;return e.push(p),!1}function c(p){if(n)e.delete(p);else for(let h=0;h<e.length;h++)if(e[h]===p){e.splice(h,1);break}}return[i,c]}function jr(){let n=me,e=n.crypto||n.msCrypto;if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");let i=e&&e.getRandomValues?()=>e.getRandomValues(new Uint8Array(1))[0]:()=>Math.random()*16;return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,c=>(c^(i()&15)>>c/4).toString(16))}function Jm(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function Rr(n){let{message:e,event_id:i}=n;if(e)return e;let c=Jm(n);return c?c.type&&c.value?`${c.type}: ${c.value}`:c.type||c.value||i||"<unknown>":i||"<unknown>"}function Ri(n,e,i){let c=n.exception=n.exception||{},p=c.values=c.values||[],h=p[0]=p[0]||{};h.value||(h.value=e||""),h.type||(h.type=i||"Error")}function an(n,e){let i=Jm(n);if(!i)return;let c={type:"generic",handled:!0},p=i.mechanism;if(i.mechanism={...c,...p,...e},e&&"data"in e){let h={...p&&p.data,...e.data};i.mechanism.data=h}}function Il(n){if(n&&n.__sentry_captured__)return!0;try{Mi(n,"__sentry_captured__",!0)}catch{}return!1}function rs(n){return Array.isArray(n)?n:[n]}function kd(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function Sd(){return"npm"}function ns(){return!kd()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function Nd(n,e){return n.require(e)}function pr(n,e=1/0,i=1/0){try{return $l("",n,e,i)}catch(c){return{ERROR:`**non-serializable** (${c})`}}}function zl(n,e=3,i=100*1024){let c=pr(n,e);return wh(c)>i?zl(n,e-1,i):c}function $l(n,e,i=1/0,c=1/0,p=Zm()){let[h,v]=p;if(e===null||["number","boolean","string"].includes(typeof e)&&!ud(e))return e;let k=_h(n,e);if(!k.startsWith("[object "))return k;if(e.__sentry_skip_normalization__)return e;if(i===0)return k.replace("object ","");if(h(e))return"[Circular ~]";let E=e;if(E&&typeof E.toJSON=="function")try{let H=E.toJSON();return $l("",H,i-1,c,p)}catch{}let C=Array.isArray(e)?[]:{},I=0,D=Dl(e);for(let H in D){if(!Object.prototype.hasOwnProperty.call(D,H))continue;if(I>=c){C[H]="[MaxProperties ~]";break}let at=D[H];C[H]=$l(H,at,i-1,c,p),I++}return v(e),C}function _h(n,e){try{return n==="domain"&&e&&typeof e=="object"&&e._events?"[Domain]":n==="domainEmitter"?"[DomainEmitter]":typeof global<"u"&&e===global?"[Global]":typeof window<"u"&&e===window?"[Window]":typeof document<"u"&&e===document?"[Document]":md(e)?"[SyntheticEvent]":typeof e=="number"&&e!==e?"[NaN]":e===void 0?"[undefined]":typeof e=="function"?`[Function: ${Ke(e)}]`:typeof e=="symbol"?`[${String(e)}]`:typeof e=="bigint"?`[BigInt: ${String(e)}]`:`[object ${yh(e)}]`}catch(i){return`**non-serializable** (${i})`}}function yh(n){let e=Object.getPrototypeOf(n);return e?e.constructor.name:"null prototype"}function xh(n){return~-encodeURI(n).split(/%..|./).length}function wh(n){return xh(JSON.stringify(n))}var sn;(function(n){n[n.PENDING=0]="PENDING";let i=1;n[n.RESOLVED=i]="RESOLVED";let c=2;n[n.REJECTED=c]="REJECTED"})(sn||(sn={}));function Ae(n){return new It(e=>{e(n)})}function Wn(n){return new It((e,i)=>{i(n)})}var It=class{__init(){this._state=sn.PENDING}__init2(){this._handlers=[]}constructor(e){It.prototype.__init.call(this),It.prototype.__init2.call(this),It.prototype.__init3.call(this),It.prototype.__init4.call(this),It.prototype.__init5.call(this),It.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(i){this._reject(i)}}then(e,i){return new It((c,p)=>{this._handlers.push([!1,h=>{if(!e)c(h);else try{c(e(h))}catch(v){p(v)}},h=>{if(!i)p(h);else try{c(i(h))}catch(v){p(v)}}]),this._executeHandlers()})}catch(e){return this.then(i=>i,e)}finally(e){return new It((i,c)=>{let p,h;return this.then(v=>{h=!1,p=v,e&&e()},v=>{h=!0,p=v,e&&e()}).then(()=>{if(h){c(p);return}i(p)})})}__init3(){this._resolve=e=>{this._setResult(sn.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(sn.REJECTED,e)}}__init5(){this._setResult=(e,i)=>{if(this._state===sn.PENDING){if(Do(i)){i.then(this._resolve,this._reject);return}this._state=e,this._value=i,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===sn.PENDING)return;let e=this._handlers.slice();this._handlers=[],e.forEach(i=>{i[0]||(this._state===sn.RESOLVED&&i[1](this._value),this._state===sn.REJECTED&&i[2](this._value),i[0]=!0)})}}};function Td(n){let e=[];function i(){return n===void 0||e.length<n}function c(v){return e.splice(e.indexOf(v),1)[0]}function p(v){if(!i())return Wn(new jt("Not adding Promise because buffer limit was reached."));let k=v();return e.indexOf(k)===-1&&e.push(k),k.then(()=>c(k)).then(null,()=>c(k).then(null,()=>{})),k}function h(v){return new It((k,E)=>{let C=e.length;if(!C)return k(!0);let I=setTimeout(()=>{v&&v>0&&k(!1)},v);e.forEach(D=>{Ae(D).then(()=>{--C||(clearTimeout(I),k(!0))},E)})})}return{$:e,add:p,drain:h}}function os(n){if(!n)return{};let e=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};let i=e[6]||"",c=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+i+c}}var Qm=["fatal","error","warning","log","info","debug"];function Cd(n){return n==="warn"?"warning":Qm.includes(n)?n:"log"}var eu=on(),Ad={nowSeconds:()=>Date.now()/1e3};function Eh(){let{performance:n}=eu;if(!n||!n.now)return;let e=Date.now()-n.now();return{now:()=>n.now(),timeOrigin:e}}function kh(){try{return Nd(module,"perf_hooks").performance}catch{return}}var Od=ns()?kh():Eh(),tu=Od===void 0?Ad:{nowSeconds:()=>(Od.timeOrigin+Od.now())/1e3},ln=Ad.nowSeconds.bind(Ad),Bl=tu.nowSeconds.bind(tu);var is,Sh=(()=>{let{performance:n}=eu;if(!n||!n.now){is="none";return}let e=3600*1e3,i=n.now(),c=Date.now(),p=n.timeOrigin?Math.abs(n.timeOrigin+i-c):e,h=p<e,v=n.timing&&n.timing.navigationStart,E=typeof v=="number"?Math.abs(v+i-c):e,C=E<e;return h||C?p<=E?(is="timeOrigin",n.timeOrigin):(is="navigationStart",v):(is="dateNow",c)})();function Yn(n,e=[]){return[n,e]}function Pd(n,e){let[i,c]=n;return[i,[...c,e]]}function Fl(n,e){n[1].forEach(c=>{let p=c[0].type;e(c,p)})}function Dd(n,e){return(e||new TextEncoder).encode(n)}function as(n,e){let[i,c]=n,p=JSON.stringify(i);function h(v){typeof p=="string"?p=typeof v=="string"?p+v:[Dd(p,e),v]:p.push(typeof v=="string"?Dd(v,e):v)}for(let v of c){let[k,E]=v;if(h(`
${JSON.stringify(k)}
`),typeof E=="string"||E instanceof Uint8Array)h(E);else{let C;try{C=JSON.stringify(E)}catch{C=JSON.stringify(pr(E))}h(C)}}return typeof p=="string"?p:Nh(p)}function Nh(n){let e=n.reduce((p,h)=>p+h.length,0),i=new Uint8Array(e),c=0;for(let p of n)i.set(p,c),c+=p.length;return i}function Ld(n,e){let i=typeof n.data=="string"?Dd(n.data,e):n.data;return[ji({type:"attachment",length:i.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType}),i]}var Th={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay"};function Ul(n){return Th[n]}function Hl(n){if(!n||!n.sdk)return;let{name:e,version:i}=n.sdk;return{name:e,version:i}}function Md(n,e,i,c){let p=n.sdkProcessingMetadata&&n.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...e&&{sdk:e},...!!i&&{dsn:Hn(c)},...n.type==="transaction"&&p&&{trace:ji({...p})}}}function jd(n,e,i){let c=[{type:"client_report"},{timestamp:i||ln(),discarded_events:n}];return Yn(e?{dsn:e}:{},[c])}function ru(n,e=Date.now()){let i=parseInt(`${n}`,10);if(!isNaN(i))return i*1e3;let c=Date.parse(`${n}`);return isNaN(c)?6e4:c-e}function nu(n,e){return n[e]||n.all||0}function Rd(n,e,i=Date.now()){return nu(n,e)>i}function Id(n,{statusCode:e,headers:i},c=Date.now()){let p={...n},h=i&&i["x-sentry-rate-limits"],v=i&&i["retry-after"];if(h)for(let k of h.trim().split(",")){let[E,C]=k.split(":",2),I=parseInt(E,10),D=(isNaN(I)?60:I)*1e3;if(!C)p.all=c+D;else for(let H of C.split(";"))p[H]=c+D}else v?p.all=c+ru(v,c):e===429&&(p.all=c+60*1e3);return p}function ou(n){let e=Bl(),i={sid:jr(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Ch(i)};return n&&cn(i,n),i}function cn(n,e={}){if(e.user&&(!n.ipAddress&&e.user.ip_address&&(n.ipAddress=e.user.ip_address),!n.did&&!e.did&&(n.did=e.user.id||e.user.email||e.user.username)),n.timestamp=e.timestamp||Bl(),e.ignoreDuration&&(n.ignoreDuration=e.ignoreDuration),e.sid&&(n.sid=e.sid.length===32?e.sid:jr()),e.init!==void 0&&(n.init=e.init),!n.did&&e.did&&(n.did=`${e.did}`),typeof e.started=="number"&&(n.started=e.started),n.ignoreDuration)n.duration=void 0;else if(typeof e.duration=="number")n.duration=e.duration;else{let i=n.timestamp-n.started;n.duration=i>=0?i:0}e.release&&(n.release=e.release),e.environment&&(n.environment=e.environment),!n.ipAddress&&e.ipAddress&&(n.ipAddress=e.ipAddress),!n.userAgent&&e.userAgent&&(n.userAgent=e.userAgent),typeof e.errors=="number"&&(n.errors=e.errors),e.status&&(n.status=e.status)}function iu(n,e){let i={};e?i={status:e}:n.status==="ok"&&(i={status:"exited"}),cn(n,i)}function Ch(n){return ji({sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}})}var Oh=100,De=class{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){let i=new De;return e&&(i._breadcrumbs=[...e._breadcrumbs],i._tags={...e._tags},i._extra={...e._extra},i._contexts={...e._contexts},i._user=e._user,i._level=e._level,i._span=e._span,i._session=e._session,i._transactionName=e._transactionName,i._fingerprint=e._fingerprint,i._eventProcessors=[...e._eventProcessors],i._requestSession=e._requestSession,i._attachments=[...e._attachments],i._sdkProcessingMetadata={...e._sdkProcessingMetadata}),i}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&cn(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,i){return this._tags={...this._tags,[e]:i},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,i){return this._extra={...this._extra,[e]:i},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,i){return i===null?delete this._contexts[e]:this._contexts[e]=i,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){let e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if(typeof e=="function"){let i=e(this);return i instanceof De?i:this}return e instanceof De?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):cr(e)&&(e=e,this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,i){let c=typeof i=="number"?i:Oh;if(c<=0)return this;let p={timestamp:ln(),...e};return this._breadcrumbs=[...this._breadcrumbs,p].slice(-c),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,i={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};let c=this._span.transaction&&this._span.transaction.name;c&&(e.tags={transaction:c,...e.tags})}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...au(),...this._eventProcessors],e,i)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,i,c,p=0){return new It((h,v)=>{let k=e[p];if(i===null||typeof k!="function")h(i);else{let E=k({...i},c);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&k.id&&E===null&&W.log(`Event processor "${k.id}" dropped event`),Do(E)?E.then(C=>this._notifyEventProcessors(e,C,c,p+1).then(h)).then(null,v):this._notifyEventProcessors(e,E,c,p+1).then(h).then(null,v)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}_applyFingerprint(e){e.fingerprint=e.fingerprint?rs(e.fingerprint):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}};function au(){return Po("globalEventProcessors",()=>[])}function qn(n){au().push(n)}var $d=4,Ah=100,dn=class{__init(){this._stack=[{}]}constructor(e,i=new De,c=$d){this._version=c,dn.prototype.__init.call(this),this.getStackTop().scope=i,e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){let i=this.getStackTop();i.client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){let e=De.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(e){let i=this.pushScope();try{e(i)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,i){let c=this._lastEventId=i&&i.event_id?i.event_id:jr(),p=new Error("Sentry syntheticException");return this._withClient((h,v)=>{h.captureException(e,{originalException:e,syntheticException:p,...i,event_id:c},v)}),c}captureMessage(e,i,c){let p=this._lastEventId=c&&c.event_id?c.event_id:jr(),h=new Error(e);return this._withClient((v,k)=>{v.captureMessage(e,i,{originalException:e,syntheticException:h,...c,event_id:p},k)}),p}captureEvent(e,i){let c=i&&i.event_id?i.event_id:jr();return e.type||(this._lastEventId=c),this._withClient((p,h)=>{p.captureEvent(e,{...i,event_id:c},h)}),c}lastEventId(){return this._lastEventId}addBreadcrumb(e,i){let{scope:c,client:p}=this.getStackTop();if(!c||!p)return;let{beforeBreadcrumb:h=null,maxBreadcrumbs:v=Ah}=p.getOptions&&p.getOptions()||{};if(v<=0)return;let E={timestamp:ln(),...e},C=h?Cl(()=>h(E,i)):E;C!==null&&c.addBreadcrumb(C,v)}setUser(e){let i=this.getScope();i&&i.setUser(e)}setTags(e){let i=this.getScope();i&&i.setTags(e)}setExtras(e){let i=this.getScope();i&&i.setExtras(e)}setTag(e,i){let c=this.getScope();c&&c.setTag(e,i)}setExtra(e,i){let c=this.getScope();c&&c.setExtra(e,i)}setContext(e,i){let c=this.getScope();c&&c.setContext(e,i)}configureScope(e){let{scope:i,client:c}=this.getStackTop();i&&c&&e(i)}run(e){let i=Gl(this);try{e(this)}finally{Gl(i)}}getIntegration(e){let i=this.getClient();if(!i)return null;try{return i.getIntegration(e)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,i){return this._callExtensionMethod("startTransaction",e,i)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){let e=this.getStackTop(),i=e&&e.scope,c=i&&i.getSession();c&&iu(c),this._sendSessionUpdate(),i&&i.setSession()}startSession(e){let{scope:i,client:c}=this.getStackTop(),{release:p,environment:h}=c&&c.getOptions()||{},{userAgent:v}=me.navigator||{},k=ou({release:p,environment:h,...i&&{user:i.getUser()},...v&&{userAgent:v},...e});if(i){let E=i.getSession&&i.getSession();E&&E.status==="ok"&&cn(E,{status:"exited"}),this.endSession(),i.setSession(k)}return k}shouldSendDefaultPii(){let e=this.getClient(),i=e&&e.getOptions();return Boolean(i&&i.sendDefaultPii)}_sendSessionUpdate(){let{scope:e,client:i}=this.getStackTop();if(!e)return;let c=e.getSession();c&&i&&i.captureSession&&i.captureSession(c)}_withClient(e){let{scope:i,client:c}=this.getStackTop();c&&e(c,i)}_callExtensionMethod(e,...i){let p=ss().__SENTRY__;if(p&&p.extensions&&typeof p.extensions[e]=="function")return p.extensions[e].apply(this,i);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Extension method ${e} couldn't be found, doing nothing.`)}};function ss(){return me.__SENTRY__=me.__SENTRY__||{extensions:{},hub:void 0},me}function Gl(n){let e=ss(),i=Ir(e);return Wl(e,n),i}function yt(){let n=ss();return(!su(n)||Ir(n).isOlderThan($d))&&Wl(n,new dn),ns()?Dh(n):Ir(n)}function Dh(n){try{let e=ss().__SENTRY__,i=e&&e.extensions&&e.extensions.domain&&e.extensions.domain.active;if(!i)return Ir(n);if(!su(i)||Ir(i).isOlderThan($d)){let c=Ir(n).getStackTop();Wl(i,new dn(c.client,De.clone(c.scope)))}return Ir(i)}catch{return Ir(n)}}function su(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function Ir(n){return Po("hub",()=>new dn,n)}function Wl(n,e){if(!n)return!1;let i=n.__SENTRY__=n.__SENTRY__||{};return i.hub=e,!0}function Ii(n,e){return yt().captureException(n,{captureContext:e})}function Yl(n,e){let i=typeof e=="string"?e:void 0,c=typeof e!="string"?{captureContext:e}:void 0;return yt().captureMessage(n,i,c)}function ql(n){yt().withScope(n)}var Ph="7";function Lh(n){let e=n.protocol?`${n.protocol}:`:"",i=n.port?`:${n.port}`:"";return`${e}//${n.host}${i}${n.path?`/${n.path}`:""}/api/`}function Mh(n){return`${Lh(n)}${n.projectId}/envelope/`}function jh(n,e){return gd({sentry_key:n.publicKey,sentry_version:Ph,...e&&{sentry_client:`${e.name}/${e.version}`}})}function ls(n,e={}){let i=typeof e=="string"?e:e.tunnel,c=typeof e=="string"||!e._metadata?void 0:e._metadata.sdk;return i||`${Mh(n)}?${jh(n,c)}`}function Rh(n,e){return e&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||e.name,n.sdk.version=n.sdk.version||e.version,n.sdk.integrations=[...n.sdk.integrations||[],...e.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...e.packages||[]]),n}function lu(n,e,i,c){let p=Hl(i),h={sent_at:new Date().toISOString(),...p&&{sdk:p},...!!c&&{dsn:Hn(e)}},v="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n];return Yn(h,[v])}function cu(n,e,i,c){let p=Hl(i),h=n.type&&n.type!=="replay_event"?n.type:"event";Rh(n,i&&i.sdk);let v=Md(n,p,c,e);return delete n.sdkProcessingMetadata,Yn(v,[[{type:h},n]])}var du=[];function Ih(n){let e={};return n.forEach(i=>{let{name:c}=i,p=e[c];p&&!p.isDefaultInstance&&i.isDefaultInstance||(e[c]=i)}),Object.values(e)}function zd(n){let e=n.defaultIntegrations||[],i=n.integrations;e.forEach(v=>{v.isDefaultInstance=!0});let c;Array.isArray(i)?c=[...e,...i]:typeof i=="function"?c=rs(i(e)):c=e;let p=Ih(c),h=p.findIndex(v=>v.name==="Debug");if(h!==-1){let[v]=p.splice(h,1);p.push(v)}return p}function pu(n){let e={};return n.forEach(i=>{Bd(i,e)}),e}function Bd(n,e){e[n.name]=n,du.indexOf(n.name)===-1&&(n.setupOnce(qn,yt),du.push(n.name),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log(`Integration installed: ${n.name}`))}function mu(n,e,i,c){let{normalizeDepth:p=3,normalizeMaxBreadth:h=1e3}=n,v={...e,event_id:e.event_id||i.event_id||jr(),timestamp:e.timestamp||ln()},k=i.integrations||n.integrations.map(I=>I.name);$h(v,n),zh(v,k);let E=c;i.captureContext&&(E=De.clone(E).update(i.captureContext));let C=Ae(v);if(E){if(E.getAttachments){let I=[...i.attachments||[],...E.getAttachments()];I.length&&(i.attachments=I)}C=E.applyToEvent(v,i)}return C.then(I=>typeof p=="number"&&p>0?Bh(I,p,h):I)}function $h(n,e){let{environment:i,release:c,dist:p,maxValueLength:h=250}=e;"environment"in n||(n.environment="environment"in e?i:"production"),n.release===void 0&&c!==void 0&&(n.release=c),n.dist===void 0&&p!==void 0&&(n.dist=p),n.message&&(n.message=Gn(n.message,h));let v=n.exception&&n.exception.values&&n.exception.values[0];v&&v.value&&(v.value=Gn(v.value,h));let k=n.request;k&&k.url&&(k.url=Gn(k.url,h))}function zh(n,e){e.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...e])}function Bh(n,e,i){if(!n)return null;let c={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(p=>({...p,...p.data&&{data:pr(p.data,e,i)}}))},...n.user&&{user:pr(n.user,e,i)},...n.contexts&&{contexts:pr(n.contexts,e,i)},...n.extra&&{extra:pr(n.extra,e,i)}};return n.contexts&&n.contexts.trace&&c.contexts&&(c.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(c.contexts.trace.data=pr(n.contexts.trace.data,e,i))),n.spans&&(c.spans=n.spans.map(p=>(p.data&&(p.data=pr(p.data,e,i)),p))),c}var uu="Not capturing exception because it's already been captured.",$r=class{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}constructor(e){if($r.prototype.__init.call(this),$r.prototype.__init2.call(this),$r.prototype.__init3.call(this),$r.prototype.__init4.call(this),this._options=e,e.dsn){this._dsn=Tl(e.dsn);let i=ls(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:i})}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("No DSN provided, client will not do anything.")}captureException(e,i,c){if(Il(e)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log(uu);return}let p=i&&i.event_id;return this._process(this.eventFromException(e,i).then(h=>this._captureEvent(h,i,c)).then(h=>{p=h})),p}captureMessage(e,i,c,p){let h=c&&c.event_id,v=Ai(e)?this.eventFromMessage(String(e),i,c):this.eventFromException(e,c);return this._process(v.then(k=>this._captureEvent(k,c,p)).then(k=>{h=k})),h}captureEvent(e,i,c){if(i&&i.originalException&&Il(i.originalException)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log(uu);return}let p=i&&i.event_id;return this._process(this._captureEvent(e,i,c).then(h=>{p=h})),p}captureSession(e){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),cn(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){let i=this._transport;return i?this._isClientDoneProcessing(e).then(c=>i.flush(e).then(p=>c&&p)):Ae(!0)}close(e){return this.flush(e).then(i=>(this.getOptions().enabled=!1,i))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=pu(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}addIntegration(e){Bd(e,this._integrations)}sendEvent(e,i={}){if(this._dsn){let c=cu(e,this._dsn,this._options._metadata,this._options.tunnel);for(let p of i.attachments||[])c=Pd(c,Ld(p,this._options.transportOptions&&this._options.transportOptions.textEncoder));this._sendEnvelope(c)}}sendSession(e){if(this._dsn){let i=lu(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(i)}}recordDroppedEvent(e,i,c){if(this._options.sendClientReports){let p=`${e}:${i}`;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log(`Adding outcome: "${p}"`),this._outcomes[p]=this._outcomes[p]+1||1}}_updateSessionFromEvent(e,i){let c=!1,p=!1,h=i.exception&&i.exception.values;if(h){p=!0;for(let E of h){let C=E.mechanism;if(C&&C.handled===!1){c=!0;break}}}let v=e.status==="ok";(v&&e.errors===0||v&&c)&&(cn(e,{...c&&{status:"crashed"},errors:e.errors||Number(p||c)}),this.captureSession(e))}_isClientDoneProcessing(e){return new It(i=>{let c=0,p=1,h=setInterval(()=>{this._numProcessing==0?(clearInterval(h),i(!0)):(c+=p,e&&c>=e&&(clearInterval(h),i(!1)))},p)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._dsn!==void 0}_prepareEvent(e,i,c){let p=this.getOptions(),h=Object.keys(this._integrations);return!i.integrations&&h.length>0&&(i.integrations=h),mu(p,e,i,c)}_captureEvent(e,i={},c){return this._processEvent(e,i,c).then(p=>p.event_id,p=>{if(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__){let h=p;h.logLevel==="log"?W.log(h.message):W.warn(h)}})}_processEvent(e,i,c){let p=this.getOptions(),{sampleRate:h}=p;if(!this._isEnabled())return Wn(new jt("SDK not enabled, will not capture event.","log"));let v=hu(e),k=fu(e),E=e.type||"error",C=`before send for type \`${E}\``;if(k&&typeof h=="number"&&Math.random()>h)return this.recordDroppedEvent("sample_rate","error",e),Wn(new jt(`Discarding event because it's not included in the random sample (sampling rate = ${h})`,"log"));let I=E==="replay_event"?"replay":E;return this._prepareEvent(e,i,c).then(D=>{if(D===null)throw this.recordDroppedEvent("event_processor",I,e),new jt("An event processor returned `null`, will not send event.","log");if(i.data&&i.data.__sentry__===!0)return D;let at=Uh(p,D,i);return Fh(at,C)}).then(D=>{if(D===null)throw this.recordDroppedEvent("before_send",I,e),new jt(`${C} returned \`null\`, will not send event.`,"log");let H=c&&c.getSession();!v&&H&&this._updateSessionFromEvent(H,D);let at=D.transaction_info;if(v&&at&&D.transaction!==e.transaction){let J="custom";D.transaction_info={...at,source:J,changes:[...at.changes,{source:J,timestamp:D.timestamp,propagations:at.propagations}]}}return this.sendEvent(D,i),D}).then(null,D=>{throw D instanceof jt?D:(this.captureException(D,{data:{__sentry__:!0},originalException:D}),new jt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${D}`))})}_process(e){this._numProcessing++,e.then(i=>(this._numProcessing--,i),i=>(this._numProcessing--,i))}_sendEnvelope(e){this._transport&&this._dsn?this._transport.send(e).then(null,i=>{(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error("Error while sending event:",i)}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error("Transport disabled")}_clearOutcomes(){let e=this._outcomes;return this._outcomes={},Object.keys(e).map(i=>{let[c,p]=i.split(":");return{reason:c,category:p,quantity:e[i]}})}};function Fh(n,e){let i=`${e} must return \`null\` or a valid event.`;if(Do(n))return n.then(c=>{if(!cr(c)&&c!==null)throw new jt(i);return c},c=>{throw new jt(`${e} rejected with ${c}`)});if(!cr(n)&&n!==null)throw new jt(i);return n}function Uh(n,e,i){let{beforeSend:c,beforeSendTransaction:p}=n;return fu(e)&&c?c(e,i):hu(e)&&p?p(e,i):e}function fu(n){return n.type===void 0}function hu(n){return n.type==="transaction"}function Fd(n,e){e.debug===!0&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?W.enable():console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));let i=yt(),c=i.getScope();c&&c.update(e.initialScope);let p=new n(e);i.bindClient(p)}var Hh=30;function $i(n,e,i=Td(n.bufferSize||Hh)){let c={},p=v=>i.drain(v);function h(v){let k=[];if(Fl(v,(D,H)=>{let at=Ul(H);if(Rd(c,at)){let J=gu(D,H);n.recordDroppedEvent("ratelimit_backoff",at,J)}else k.push(D)}),k.length===0)return Ae();let E=Yn(v[0],k),C=D=>{Fl(E,(H,at)=>{let J=gu(H,at);n.recordDroppedEvent(D,Ul(at),J)})},I=()=>e({body:as(E,n.textEncoder)}).then(D=>(D.statusCode!==void 0&&(D.statusCode<200||D.statusCode>=300)&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Sentry responded with status code ${D.statusCode} to sent event.`),c=Id(c,D),D),D=>{throw C("network_error"),D});return i.add(I).then(D=>D,D=>{if(D instanceof jt)return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error("Skipped sending event because buffer is full."),C("queue_overflow"),Ae();throw D})}return{send:h,flush:p}}function gu(n,e){if(!(e!=="event"&&e!=="transaction"))return Array.isArray(n)?n[1]:void 0}var cs="7.36.0";var jo={};fm(jo,{FunctionToString:()=>pn,InboundFilters:()=>zr});var bu,pn=class{constructor(){pn.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=pn.id}setupOnce(){bu=Function.prototype.toString,Function.prototype.toString=function(...e){let i=Lo(this)||this;return bu.apply(i,e)}}};pn.__initStatic();var Gh=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],zr=class{static __initStatic(){this.id="InboundFilters"}__init(){this.name=zr.id}constructor(e={}){this._options=e,zr.prototype.__init.call(this)}setupOnce(e,i){let c=p=>{let h=i();if(h){let v=h.getIntegration(zr);if(v){let k=h.getClient(),E=k?k.getOptions():{},C=Wh(v._options,E);return Yh(p,C)?null:p}}return p};c.id=this.name,e(c)}};zr.__initStatic();function Wh(n={},e={}){return{allowUrls:[...n.allowUrls||[],...e.allowUrls||[]],denyUrls:[...n.denyUrls||[],...e.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...e.ignoreErrors||[],...Gh],ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function Yh(n,e){return e.ignoreInternal&&Zh(n)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Event dropped due to being internal Sentry Error.
Event: ${Rr(n)}`),!0):qh(n,e.ignoreErrors)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Rr(n)}`),!0):Vh(n,e.denyUrls)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Rr(n)}.
Url: ${Vl(n)}`),!0):Xh(n,e.allowUrls)?!1:((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Rr(n)}.
Url: ${Vl(n)}`),!0)}function qh(n,e){return!e||!e.length?!1:Kh(n).some(i=>Qa(i,e))}function Vh(n,e){if(!e||!e.length)return!1;let i=Vl(n);return i?Qa(i,e):!1}function Xh(n,e){if(!e||!e.length)return!0;let i=Vl(n);return i?Qa(i,e):!0}function Kh(n){if(n.message)return[n.message];if(n.exception)try{let{type:e="",value:i=""}=n.exception.values&&n.exception.values[0]||{};return[`${i}`,`${e}: ${i}`]}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error(`Cannot extract message for event ${Rr(n)}`),[]}return[]}function Zh(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function Jh(n=[]){for(let e=n.length-1;e>=0;e--){let i=n[e];if(i&&i.filename!=="<anonymous>"&&i.filename!=="[native code]")return i.filename||null}return null}function Vl(n){try{let e;try{e=n.exception.values[0].stacktrace.frames}catch{}return e?Jh(e):null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error(`Cannot extract url for event ${Rr(n)}`),null}}var ot=me,Ud=0;function Hd(){return Ud>0}function dg(){Ud++,setTimeout(()=>{Ud--})}function Vn(n,e={},i){if(typeof n!="function")return n;try{let p=n.__sentry_wrapped__;if(p)return p;if(Lo(n))return n}catch{return n}let c=function(){let p=Array.prototype.slice.call(arguments);try{i&&typeof i=="function"&&i.apply(this,arguments);let h=p.map(v=>Vn(v,e));return n.apply(this,h)}catch(h){throw dg(),ql(v=>{v.addEventProcessor(k=>(e.mechanism&&(Ri(k,void 0,void 0),an(k,e.mechanism)),k.extra={...k.extra,arguments:p},k)),Ii(h)}),h}};try{for(let p in n)Object.prototype.hasOwnProperty.call(n,p)&&(c[p]=n[p])}catch{}Al(c,n),Mi(n,"__sentry_wrapped__",c);try{Object.getOwnPropertyDescriptor(c,"name").configurable&&Object.defineProperty(c,"name",{get(){return n.name}})}catch{}return c}function Yd(n,e){let i=qd(n,e),c={type:e&&e.name,value:fg(e)};return i.length&&(c.stacktrace={frames:i}),c.type===void 0&&c.value===""&&(c.value="Unrecoverable error caught"),c}function pg(n,e,i,c){let h=yt().getClient(),v=h&&h.getOptions().normalizeDepth,k={exception:{values:[{type:Di(e)?e.constructor.name:c?"UnhandledRejection":"Error",value:`Non-Error ${c?"promise rejection":"exception"} captured with keys: ${bd(e)}`}]},extra:{__serialized__:zl(e,v)}};if(i){let E=qd(n,i);E.length&&(k.exception.values[0].stacktrace={frames:E})}return k}function Gd(n,e){return{exception:{values:[Yd(n,e)]}}}function qd(n,e){let i=e.stacktrace||e.stack||"",c=ug(e);try{return n(i,c)}catch{}return[]}var mg=/Minified React error #\d+;/i;function ug(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(mg.test(n.message))return 1}return 0}function fg(n){let e=n&&n.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function vu(n,e,i,c){let p=i&&i.syntheticException||void 0,h=Xl(n,e,p,c);return an(h),h.level="error",i&&i.event_id&&(h.event_id=i.event_id),Ae(h)}function _u(n,e,i="info",c,p){let h=c&&c.syntheticException||void 0,v=Wd(n,e,h,p);return v.level=i,c&&c.event_id&&(v.event_id=c.event_id),Ae(v)}function Xl(n,e,i,c,p){let h;if(Ja(e)&&e.error)return Gd(n,e.error);if(Sl(e)||cd(e)){let v=e;if("stack"in e)h=Gd(n,e);else{let k=v.name||(Sl(v)?"DOMError":"DOMException"),E=v.message?`${k}: ${v.message}`:k;h=Wd(n,E,i,c),Ri(h,E)}return"code"in v&&(h.tags={...h.tags,"DOMException.code":`${v.code}`}),h}return Za(e)?Gd(n,e):cr(e)||Di(e)?(h=pg(n,e,i,p),an(h,{synthetic:!0}),h):(h=Wd(n,e,i,c),Ri(h,`${e}`,void 0),an(h,{synthetic:!0}),h)}function Wd(n,e,i,c){let p={message:e};if(c&&i){let h=qd(n,i);h.length&&(p.exception={values:[{value:e,stacktrace:{frames:h}}]})}return p}var Kl=1024,Vd="Breadcrumbs",Br=class{static __initStatic(){this.id=Vd}__init(){this.name=Br.id}constructor(e){Br.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){this.options.console&&Ze("console",gg),this.options.dom&&Ze("dom",hg(this.options.dom)),this.options.xhr&&Ze("xhr",bg),this.options.fetch&&Ze("fetch",vg),this.options.history&&Ze("history",_g)}addSentryBreadcrumb(e){this.options.sentry&&yt().addBreadcrumb({category:`sentry.${e.type==="transaction"?"transaction":"event"}`,event_id:e.event_id,level:e.level,message:Rr(e)},{event:e})}};Br.__initStatic();function hg(n){function e(i){let c,p=typeof n=="object"?n.serializeAttribute:void 0,h=typeof n=="object"&&typeof n.maxStringLength=="number"?n.maxStringLength:void 0;h&&h>Kl&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn(`\`dom.maxStringLength\` cannot exceed ${Kl}, but a value of ${h} was configured. Sentry will use ${Kl} instead.`),h=Kl),typeof p=="string"&&(p=[p]);try{c=i.event.target?Pi(i.event.target,{keyAttrs:p,maxStringLength:h}):Pi(i.event,{keyAttrs:p,maxStringLength:h})}catch{c="<unknown>"}c.length!==0&&yt().addBreadcrumb({category:`ui.${i.name}`,message:c},{event:i.event,name:i.name,global:i.global})}return e}function gg(n){for(let i=0;i<n.args.length;i++)if(n.args[i]==="ref=Ref<"){n.args[i+1]="viewRef";break}let e={category:"console",data:{arguments:n.args,logger:"console"},level:Cd(n.level),message:Ol(n.args," ")};if(n.level==="assert")if(n.args[0]===!1)e.message=`Assertion failed: ${Ol(n.args.slice(1)," ")||"console.assert"}`,e.data.arguments=n.args.slice(1);else return;yt().addBreadcrumb(e,{input:n.args,level:n.level})}function bg(n){if(n.endTimestamp){if(n.xhr.__sentry_own_request__)return;let{method:e,url:i,status_code:c,body:p}=n.xhr.__sentry_xhr__||{};yt().addBreadcrumb({category:"xhr",data:{method:e,url:i,status_code:c},type:"http"},{xhr:n.xhr,input:p});return}}function vg(n){!n.endTimestamp||n.fetchData.url.match(/sentry_key/)&&n.fetchData.method==="POST"||(n.error?yt().addBreadcrumb({category:"fetch",data:n.fetchData,level:"error",type:"http"},{data:n.error,input:n.args}):yt().addBreadcrumb({category:"fetch",data:{...n.fetchData,status_code:n.response.status},type:"http"},{input:n.args,response:n.response}))}function _g(n){let e=n.from,i=n.to,c=os(ot.location.href),p=os(e),h=os(i);p.path||(p=c),c.protocol===h.protocol&&c.host===h.host&&(i=h.relative),c.protocol===p.protocol&&c.host===p.host&&(e=p.relative),yt().addBreadcrumb({category:"navigation",data:{from:e,to:i}})}var Zl=class extends $r{constructor(e){let i=ot.SENTRY_SDK_SOURCE||Sd();e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:`${i}:@sentry/browser`,version:cs}],version:cs},super(e),e.sendClientReports&&ot.document&&ot.document.addEventListener("visibilitychange",()=>{ot.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(e,i){return vu(this._options.stackParser,e,i,this._options.attachStacktrace)}eventFromMessage(e,i="info",c){return _u(this._options.stackParser,e,i,c,this._options.attachStacktrace)}sendEvent(e,i){let c=this.getIntegrationById(Vd);c&&c.addSentryBreadcrumb&&c.addSentryBreadcrumb(e),super.sendEvent(e,i)}_prepareEvent(e,i,c){return e.platform=e.platform||"javascript",super._prepareEvent(e,i,c)}_flushOutcomes(){let e=this._clearOutcomes();if(e.length===0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log("No outcomes to send");return}if(!this._dsn){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log("No dsn provided, will not send outcomes");return}(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log("Sending outcomes:",e);let i=ls(this._dsn,this._options),c=jd(e,this._options.tunnel&&Hn(this._dsn));try{Object.prototype.toString.call(ot&&ot.navigator)==="[object Navigator]"&&typeof ot.navigator.sendBeacon=="function"&&!this._options.transportOptions?ot.navigator.sendBeacon.bind(ot.navigator)(i,as(c)):this._sendEnvelope(c)}catch(p){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.error(p)}}};var ds;function yu(){if(ds)return ds;if(ts(ot.fetch))return ds=ot.fetch.bind(ot);let n=ot.document,e=ot.fetch;if(n&&typeof n.createElement=="function")try{let i=n.createElement("iframe");i.hidden=!0,n.head.appendChild(i);let c=i.contentWindow;c&&c.fetch&&(e=c.fetch),n.head.removeChild(i)}catch(i){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",i)}return ds=e.bind(ot)}function xu(){ds=void 0}function wu(n,e=yu()){function i(c){let p={body:c.body,method:"POST",referrerPolicy:"origin",headers:n.headers,keepalive:c.body.length<=65536,...n.fetchOptions};try{return e(n.url,p).then(h=>({statusCode:h.status,headers:{"x-sentry-rate-limits":h.headers.get("X-Sentry-Rate-Limits"),"retry-after":h.headers.get("Retry-After")}}))}catch(h){return xu(),Wn(h)}}return $i(n,i)}var yg=4;function Eu(n){function e(i){return new It((c,p)=>{let h=new XMLHttpRequest;h.onerror=p,h.onreadystatechange=()=>{h.readyState===yg&&c({statusCode:h.status,headers:{"x-sentry-rate-limits":h.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":h.getResponseHeader("Retry-After")}})},h.open("POST",n.url);for(let v in n.headers)Object.prototype.hasOwnProperty.call(n.headers,v)&&h.setRequestHeader(v,n.headers[v]);h.send(i.body)})}return $i(n,e)}var Jl="?";var xg=30,wg=40,Eg=50;function Xd(n,e,i,c){let p={filename:n,function:e,in_app:!0};return i!==void 0&&(p.lineno=i),c!==void 0&&(p.colno=c),p}var kg=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Sg=/\((\S*)(?::(\d+))(?::(\d+))\)/,Ng=n=>{let e=kg.exec(n);if(e){if(e[2]&&e[2].indexOf("eval")===0){let h=Sg.exec(e[2]);h&&(e[2]=h[1],e[3]=h[2],e[4]=h[3])}let[c,p]=Su(e[1]||Jl,e[2]);return Xd(p,c,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},Tg=[xg,Ng],Cg=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Og=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Ag=n=>{let e=Cg.exec(n);if(e){if(e[3]&&e[3].indexOf(" > eval")>-1){let h=Og.exec(e[3]);h&&(e[1]=e[1]||"eval",e[3]=h[1],e[4]=h[2],e[5]="")}let c=e[3],p=e[1]||Jl;return[p,c]=Su(p,c),Xd(c,p,e[4]?+e[4]:void 0,e[5]?+e[5]:void 0)}},Dg=[Eg,Ag],Pg=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Lg=n=>{let e=Pg.exec(n);return e?Xd(e[2],e[1]||Jl,+e[3],e[4]?+e[4]:void 0):void 0},Mg=[wg,Lg];var jg=[Tg,Dg,Mg],ku=Pl(...jg),Su=(n,e)=>{let i=n.indexOf("safari-extension")!==-1,c=n.indexOf("safari-web-extension")!==-1;return i||c?[n.indexOf("@")!==-1?n.split("@")[0]:Jl,i?`safari-extension:${e}`:`safari-web-extension:${e}`]:[n,e]};var ze=class{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=ze.id}__init2(){this._installFunc={onerror:Rg,onunhandledrejection:Ig}}constructor(e){ze.prototype.__init.call(this),ze.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;let e=this._options;for(let i in e){let c=this._installFunc[i];c&&e[i]&&(Bg(i),c(),this._installFunc[i]=void 0)}}};ze.__initStatic();function Rg(){Ze("error",n=>{let[e,i,c]=Cu();if(!e.getIntegration(ze))return;let{msg:p,url:h,line:v,column:k,error:E}=n;if(Hd()||E&&E.__sentry_own_request__)return;let C=E===void 0&&Ve(p)?zg(p,h,v,k):Nu(Xl(i,E||p,void 0,c,!1),h,v,k);C.level="error",Tu(e,E,C,"onerror")})}function Ig(){Ze("unhandledrejection",n=>{let[e,i,c]=Cu();if(!e.getIntegration(ze))return;let p=n;try{"reason"in n?p=n.reason:"detail"in n&&"reason"in n.detail&&(p=n.detail.reason)}catch{}if(Hd()||p&&p.__sentry_own_request__)return!0;let h=Ai(p)?$g(p):Xl(i,p,void 0,c,!0);h.level="error",Tu(e,p,h,"onunhandledrejection")})}function $g(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function zg(n,e,i,c){let p=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,h=Ja(n)?n.message:n,v="Error",k=h.match(p);return k&&(v=k[1],h=k[2]),Nu({exception:{values:[{type:v,value:h}]}},e,i,c)}function Nu(n,e,i,c){let p=n.exception=n.exception||{},h=p.values=p.values||[],v=h[0]=h[0]||{},k=v.stacktrace=v.stacktrace||{},E=k.frames=k.frames||[],C=isNaN(parseInt(c,10))?void 0:c,I=isNaN(parseInt(i,10))?void 0:i,D=Ve(e)&&e.length>0?e:fd();return E.length===0&&E.push({colno:C,filename:D,function:"?",in_app:!0,lineno:I}),n}function Bg(n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.log(`Global Handler attached: ${n}`)}function Tu(n,e,i,c){an(i,{handled:!1,type:c}),n.captureEvent(i,{originalException:e})}function Cu(){let n=yt(),e=n.getClient(),i=e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[n,i.stackParser,i.attachStacktrace]}var Fg=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Fr=class{static __initStatic(){this.id="TryCatch"}__init(){this.name=Fr.id}constructor(e){Fr.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Kt(ot,"setTimeout",Ou),this._options.setInterval&&Kt(ot,"setInterval",Ou),this._options.requestAnimationFrame&&Kt(ot,"requestAnimationFrame",Ug),this._options.XMLHttpRequest&&"XMLHttpRequest"in ot&&Kt(XMLHttpRequest.prototype,"send",Hg);let e=this._options.eventTarget;e&&(Array.isArray(e)?e:Fg).forEach(Gg)}};Fr.__initStatic();function Ou(n){return function(...e){let i=e[0];return e[0]=Vn(i,{mechanism:{data:{function:Ke(n)},handled:!0,type:"instrument"}}),n.apply(this,e)}}function Ug(n){return function(e){return n.apply(this,[Vn(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Ke(n)},handled:!0,type:"instrument"}})])}}function Hg(n){return function(...e){let i=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(p=>{p in i&&typeof i[p]=="function"&&Kt(i,p,function(h){let v={mechanism:{data:{function:p,handler:Ke(h)},handled:!0,type:"instrument"}},k=Lo(h);return k&&(v.mechanism.data.handler=Ke(k)),Vn(h,v)})}),n.apply(this,e)}}function Gg(n){let e=ot,i=e[n]&&e[n].prototype;!i||!i.hasOwnProperty||!i.hasOwnProperty("addEventListener")||(Kt(i,"addEventListener",function(c){return function(p,h,v){try{typeof h.handleEvent=="function"&&(h.handleEvent=Vn(h.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Ke(h),target:n},handled:!0,type:"instrument"}}))}catch{}return c.apply(this,[p,Vn(h,{mechanism:{data:{function:"addEventListener",handler:Ke(h),target:n},handled:!0,type:"instrument"}}),v])}}),Kt(i,"removeEventListener",function(c){return function(p,h,v){let k=h;try{let E=k&&k.__sentry_wrapped__;E&&c.call(this,p,E,v)}catch{}return c.call(this,p,k,v)}}))}var Wg="cause",Yg=5,mr=class{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=mr.id}constructor(e={}){mr.prototype.__init.call(this),this._key=e.key||Wg,this._limit=e.limit||Yg}setupOnce(){let e=yt().getClient();!e||qn((i,c)=>{let p=yt().getIntegration(mr);return p?qg(e.getOptions().stackParser,p._key,p._limit,i,c):i})}};mr.__initStatic();function qg(n,e,i,c,p){if(!c.exception||!c.exception.values||!p||!Xe(p.originalException,Error))return c;let h=Au(n,i,p.originalException,e);return c.exception.values=[...h,...c.exception.values],c}function Au(n,e,i,c,p=[]){if(!Xe(i[c],Error)||p.length+1>=e)return p;let h=Yd(n,i[c]);return Au(n,e,i[c],c,[h,...p])}var ur=class{constructor(){ur.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=ur.id}setupOnce(){qn(e=>{if(yt().getIntegration(ur)){if(!ot.navigator&&!ot.location&&!ot.document)return e;let i=e.request&&e.request.url||ot.location&&ot.location.href,{referrer:c}=ot.document||{},{userAgent:p}=ot.navigator||{},h={...e.request&&e.request.headers,...c&&{Referer:c},...p&&{"User-Agent":p}},v={...e.request,...i&&{url:i},headers:h};return{...e,request:v}}return e})}};ur.__initStatic();var fr=class{constructor(){fr.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=fr.id}setupOnce(e,i){let c=p=>{let h=i().getIntegration(fr);if(h){try{if(Vg(p,h._previousEvent))return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return h._previousEvent=p}return h._previousEvent=p}return p};c.id=this.name,e(c)}};fr.__initStatic();function Vg(n,e){return e?!!(Xg(n,e)||Kg(n,e)):!1}function Xg(n,e){let i=n.message,c=e.message;return!(!i&&!c||i&&!c||!i&&c||i!==c||!Mu(n,e)||!Lu(n,e))}function Kg(n,e){let i=Du(e),c=Du(n);return!(!i||!c||i.type!==c.type||i.value!==c.value||!Mu(n,e)||!Lu(n,e))}function Lu(n,e){let i=Pu(n),c=Pu(e);if(!i&&!c)return!0;if(i&&!c||!i&&c||(i=i,c=c,c.length!==i.length))return!1;for(let p=0;p<c.length;p++){let h=c[p],v=i[p];if(h.filename!==v.filename||h.lineno!==v.lineno||h.colno!==v.colno||h.function!==v.function)return!1}return!0}function Mu(n,e){let i=n.fingerprint,c=e.fingerprint;if(!i&&!c)return!0;if(i&&!c||!i&&c)return!1;i=i,c=c;try{return i.join("")===c.join("")}catch{return!1}}function Du(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Pu(n){let e=n.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}}var Ru=[new jo.InboundFilters,new jo.FunctionToString,new Fr,new Br,new ze,new mr,new fr,new ur];function Kd(n={}){n.defaultIntegrations===void 0&&(n.defaultIntegrations=Ru),n.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(n.release=__SENTRY_RELEASE__),ot.SENTRY_RELEASE&&ot.SENTRY_RELEASE.id&&(n.release=ot.SENTRY_RELEASE.id)),n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0);let e={...n,stackParser:_d(n.stackParser||ku),integrations:zd(n),transport:n.transport||(Ll()?wu:Eu)};Fd(Zl,e),n.autoSessionTracking&&Zg()}function ju(n){n.startSession({ignoreDuration:!0}),n.captureSession()}function Zg(){if(typeof ot.document>"u"){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&W.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}let n=yt();!n.captureSession||(ju(n),Ze("history",({from:e,to:i})=>{e===void 0||e===i||ju(yt())}))}var Zd={};fm(Zd,{Breadcrumbs:()=>Br,Dedupe:()=>fr,GlobalHandlers:()=>ze,HttpContext:()=>ur,LinkedErrors:()=>mr,TryCatch:()=>Fr});var Iu={};ot.Sentry&&ot.Sentry.Integrations&&(Iu=ot.Sentry.Integrations);var kx={...Iu,...jo,...Zd};var Jd=class{constructor(e){this.tag="";this.tag=e}debug(...e){this.internalLog(3,...e)}log(...e){this.internalLog(2,...e)}warn(...e){this.internalLog(1,...e)}error(...e){this.internalLog(0,...e)}internalLog(e,...i){let c=new Date(Date.now()),p=["%c%s %s","color: blue",`[${c.getHours()}:${c.getMinutes()}:${c.getSeconds()}]`,this.tag,...i];if(Jd.debugMode)switch(e){case 3:console.debug(...p);break;case 1:console.warn(...p);break;case 2:console.log(...p);break;case 0:console.error(...p);break}else{switch(e){case 1:case 2:Yl(i.join(" "));break;case 0:Ii(i);break}return}}},zi=Jd;zi.debugMode=!0;zi.debugMode||Kd({dsn:"__DSN__",tracesSampleRate:.1,release:"xtension@23.01.10",environment:"PROD"});var Qg=new zi("translate");function tb(){let n=[];document.querySelectorAll("[translate-key]").forEach(e=>{let i=e.getAttribute("translate-key");!i||(e.innerHTML=chrome.i18n.getMessage(i),n.push(i))}),Qg.debug("Translated ",n)}window.addEventListener("load",()=>{tb()});var $u=document.createElement("div");$u.innerHTML='<div class=wb-header><div class=wb-control><span title="Minimize" class=wb-min></span><span title="Maximize" class=wb-max></span><span title="Fullscreen" class=wb-full></span><span title="Close" class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>';function zu(n){return(n||$u).cloneNode(!0)}var Bu=`
  .winbox {
    position: fixed;
    left: 0;
    top: 0;
    background: #0050ff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* using transform make contents blur when applied and requires more gpu memory */
    transition: width 0.3s, height 0.3s, left 0.3s, top 0.3s;
    transition-timing-function: cubic-bezier(0.3, 1, 0.3, 1);
    /* contain "strict" does not make overflow contents selectable */
    contain: layout size;
    /* explicitly set text align to left fixes an issue with iframes alignment when centered */
    text-align: left;
    /* workaround for using passive listeners */
    touch-action: none;
  }
  .wb-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    overflow: hidden;
    z-index: 1;
  }
  .wb-body {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    will-change: contents;
    background: #fff;
    /* when no border is set there is some thin line visible */
    /* always hide top border visually */
    margin-top: 0 !important;
    contain: strict;
    z-index: 0;
  }
  body > .wb-body {
    position: relative;
    display: inline-block;
    visibility: hidden;
    contain: none;
  }
  .wb-drag {
    height: 100%;
    padding-left: 10px;
    cursor: move;
  }
  .wb-title {
    font-family: Arial, sans-serif;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wb-icon {
    display: none;
    width: 20px;
    height: 100%;
    margin: -1px 8px 0 -3px;
    float: left;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .wb-n {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-e {
    position: absolute;
    top: 0;
    right: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-s {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 10px;
    cursor: n-resize;
    z-index: 2;
  }
  .wb-w {
    position: absolute;
    top: 0;
    left: -5px;
    bottom: 0;
    width: 10px;
    cursor: w-resize;
    z-index: 2;
  }
  .wb-nw {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-ne {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-sw {
    position: absolute;
    bottom: -5px;
    left: -5px;
    width: 15px;
    height: 15px;
    cursor: ne-resize;
    z-index: 2;
  }
  .wb-se {
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    cursor: nw-resize;
    z-index: 2;
  }
  .wb-control {
    float: right;
    height: 100%;
    max-width: 100%;
    text-align: center;
  }
  .wb-control * {
    display: inline-block;
    width: 30px;
    height: 100%;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .wb-min {
    background-image: url("../../assets/min.svg");
    background-size: 14px auto;
    background-position: center calc(50% + 6px);
  }
  .wb-max {
    background-image: url("../../assets/max.svg");
    background-size: 17px auto;
  }
  .wb-close {
    background-image: url("../../assets/close.svg");
    background-size: 15px auto;
    background-position: 5px center;
  }
  .wb-full {
    background-image: url("../../assets/full.svg");
    background-size: 16px auto;
  }
  /*
  .winbox:not(.max) .wb-max {
    background-image: url(@restore);
    background-size: 20px auto;
    background-position: center bottom 5px;
  }
  */
  /*
  .winbox:fullscreen{
    transition: none !important;
  }
  .winbox:fullscreen .wb-full{
    background-image: url(@minimize);
  }
  .winbox:fullscreen > div,
  .winbox:fullscreen .wb-title,
  */
  .winbox.modal .wb-body ~ div,
  .winbox.modal .wb-drag,
  .winbox.min .wb-body ~ div,
  .winbox.max .wb-body ~ div {
    pointer-events: none;
  }
  .winbox.max .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-full,
  .winbox.min .wb-min {
    display: none;
  }
  .winbox.min .wb-drag {
    cursor: default;
  }
  .winbox.min .wb-body > * {
    display: none;
  }
  .winbox.hide {
    display: none;
  }
  .winbox.max {
    box-shadow: none;
  }
  .winbox.max .wb-body {
    margin: 0 !important;
  }
  .winbox iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
  }
  body.wb-lock .winbox {
    will-change: left, top, width, height;
    transition: none;
  }
  body.wb-lock iframe {
    pointer-events: none;
  }
  .winbox.modal:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    border-radius: inherit;
  }
  .winbox.modal:after {
    content: '';
    position: absolute;
    top: -50vh;
    left: -50vw;
    right: -50vw;
    bottom: -50vh;
    background: #0d1117;
    animation: wb-fade-in 0.2s ease-out forwards;
    z-index: -1;
  }
  .winbox.modal .wb-min,
  .winbox.modal .wb-max,
  .winbox.modal .wb-full {
    display: none;
  }
  @keyframes wb-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.85;
    }
  }
  .no-animation {
    transition: none;
  }
  .no-shadow {
    box-shadow: none;
  }
  .no-header .wb-header {
    display: none;
  }
  .no-header .wb-body {
    top: 0;
  }
  .no-min .wb-min {
    display: none;
  }
  .no-max .wb-max {
    display: none;
  }
  .no-full .wb-full {
    display: none;
  }
  .no-close .wb-close {
    display: none;
  }
  .no-resize .wb-body ~ div {
    display: none;
  }
  .no-move:not(.min) .wb-title {
    pointer-events: none;
  }
  .wb-body .wb-hide {
    display: none;
  }
  .wb-show {
    display: none;
  }
  .wb-body .wb-show {
    display: revert;
  }
`;function Be(n,e,i,c){n&&n.addEventListener(e,i,c||!1)}function ps(n,e,i,c){n&&n.removeEventListener(e,i,c||!1)}function Bi(n,e){n.stopPropagation(),n.cancelable&&n.preventDefault()}function Je(n,e){return n.getElementsByClassName(e)[0]}function Qd(n,e){n.classList.add(e)}function Fu(n,e){return n.classList.contains(e)}function tp(n,e){n.classList.remove(e)}function ke(n,e,i){i=""+i,n["_s_"+e]!==i&&(n.style.setProperty(e,i),n["_s_"+e]=i)}function Uu(n,e){let i=n.firstChild;i?i.nodeValue=e:n.textContent=e}var Ql=!1,Ui=[],ms={capture:!0,passive:!0},hr,eb=0,us=10,Fi,Xn,un,Gu,fn,hn,Kn=class{constructor(e,i){if(!(this instanceof Kn))return new Kn(e);hr||rb();let c,p,h,v,k,E,C,I,D,H,at,J,vt,St,Ht,Zt,Pe,ie,Gt,gr,Wt,ae,Jt,Yt,wt,Fe,Ur,Qe,br,gn,Hr,A,Le,de,bn,Gr,vr,se,_r,Qt,Wr,Ue,yr,tr,X,Zn,vn;if(e&&(i&&(k=e,e=i),typeof e=="string"?k=e:(c=e.id,p=e.index,h=e.root,v=e.template,k=k||e.title,E=e.icon,C=e.mount,I=e.html,D=e.url,H=e.shadowel,J=e.framename,vt=e.cssurl,St=e.width,Ht=e.height,Zt=e.minwidth,Pe=e.minheight,ie=e.maxwidth,Gt=e.maxheight,gr=e.autosize,Ur=e.min,Qe=e.max,br=e.hidden,gn=e.modal,Wt=e.x||(gn?"center":0),ae=e.y||(gn?"center":0),Jt=e.top,Yt=e.left,wt=e.bottom,Fe=e.right,Hr=e.background,A=e.border,Le=e.header,de=e.class,Gr=e.onclose,vr=e.onfocus,se=e.onblur,_r=e.onmove,Qt=e.onresize,Wr=e.onfullscreen,Ue=e.onmaximize,yr=e.onminimize,tr=e.onrestore,X=e.onhide,Zn=e.onshow,vn=e.onload)),this.dom=zu(v),this.dom.id=this.id=c||"winbox-"+ ++eb,this.dom.className="winbox"+(de?" "+(typeof de=="string"?de:de.join(" ")):"")+(gn?" modal":""),this.dom.winbox=this,this.window=this.dom,this.body=Je(this.dom,"wb-body"),this.header=Le||35,(p||p===0)&&(us=p),Hr&&this.setBackground(Hr),A?ke(this.body,"margin",A+(isNaN(A)?"":"px")):A=0,Le){let zt=Je(this.dom,"wb-header");ke(zt,"height",Le+"px"),ke(zt,"line-height",Le+"px"),ke(this.body,"top",Le+"px")}k&&this.setTitle(k),E&&this.setIcon(E),C?this.mount(C):I?this.body.innerHTML=I:D&&this.setUrl(D,vn),Jt=Jt?ue(Jt,hn):0,wt=wt?ue(wt,hn):0,Yt=Yt?ue(Yt,fn):0,Fe=Fe?ue(Fe,fn):0;let xr=fn-Yt-Fe,fe=hn-Jt-wt;if(ie=ie?ue(ie,xr):xr,Gt=Gt?ue(Gt,fe):fe,Zt=Zt?ue(Zt,ie):150,Pe=Pe?ue(Pe,Gt):this.header,gr?((h||hr).appendChild(this.body),St=Math.max(Math.min(this.body.clientWidth+A*2+1,ie),Zt),Ht=Math.max(Math.min(this.body.clientHeight+this.header+A+1,Gt),Pe),this.dom.appendChild(this.body)):(St=St?ue(St,ie):Math.max(ie/2,Zt)|0,Ht=Ht?ue(Ht,Gt):Math.max(Gt/2,Pe)|0),Wt=Wt?ue(Wt,xr,St):Yt,ae=ae?ue(ae,fe,Ht):Jt,this.x=Wt,this.y=ae,this.width=St,this.height=Ht,this.minwidth=Zt,this.minheight=Pe,this.maxwidth=ie,this.maxheight=Gt,this.top=Jt,this.right=Fe,this.bottom=wt,this.left=Yt,this.index=p,this.min=!1,this.max=!1,this.full=!1,this.hidden=!1,this.focused=!1,this.onclose=Gr,this.onfocus=vr,this.onblur=se,this.onmove=_r,this.onresize=Qt,this.onfullscreen=Wr,this.onmaximize=Ue,this.onminimize=yr,this.onrestore=tr,this.onhide=X,this.onshow=Zn,Qe?this.maximize():Ur?this.minimize():this.resize().move(),br?this.hide():(this.focus(),(p||p===0)&&(this.index=p,p>us&&(us=p))),ke(this.shadowdom?this.shadowdom:this.dom,"z-index",p),nb(this),H){let zt=document.createElement(H);zt.style.position="absolute";let er=document.createElement("style");if(er.textContent=Bu,zt.appendChild(er),vt){let Me=document.createElement("link");Me.rel="stylesheet",Me.type="text/css",Me.href=vt,Me.itemprop="url",zt.appendChild(Me)}zt.appendChild(this.dom),zt.attachShadow({mode:"open"}).innerHTML="<slot></slot>",this.shadowdom=zt,(h||hr).appendChild(zt)}else(h||hr).appendChild(this.dom);(bn=e.oncreate)&&bn.call(this,e)}static new(e){return new Kn(e)}mount(e){return this.unmount(),e._backstore||(e._backstore=e.parentNode),this.body.textContent="",this.body.appendChild(e),this}unmount(e){let i=this.body.firstChild;if(i){let c=e||i._backstore;c&&c.appendChild(i),i._backstore=e}return this}setTitle(e){let i=Je(this.dom,"wb-title");return Uu(i,this.title=e),this}setIcon(e){let i=Je(this.dom,"wb-icon");return ke(i,"background-image","url("+e+")"),ke(i,"display","inline-block"),this}setBackground(e){return ke(this.dom,"background",e),this}setUrl(e,i){let c=this.body.firstChild;if(c&&c.tagName.toLowerCase()==="iframe")c.src=e;else{let p=this.framename??"";this.body.innerHTML=`<iframe name="${p}" src="${e}"></iframe>`,i&&(this.body.firstChild.onload=i)}return this}focus(e){return e===!1?this.blur():(Xn!==this&&this.dom&&(Xn&&Xn.blur(),ke(this.shadowdom?this.shadowdom:this.dom,"z-index",++us),this.index=us,this.addClass("focus"),Xn=this,this.focused=!0,this.onfocus&&this.onfocus()),this)}blur(e){return e===!1?this.focus():(Xn===this&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur(),Xn=null),this)}hide(e){if(e===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")}show(e){if(e===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")}minimize(e){return e===!1?this.restore():(Fi&&ec(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(Ui.push(this),ep(),this.dom.title=this.title,this.addClass("min"),this.min=!0,this.onminimize&&this.onminimize()),this)}restore(){return Fi&&ec(),this.min&&(tc(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this}maximize(e){return e===!1?this.restore():(Fi&&ec(),this.min&&tc(this),this.max||(this.addClass("max").resize(fn-this.left-this.right,hn-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)}fullscreen(e){if(this.min&&(tc(this),this.resize().move()),!Fi||!ec())this.body[un](),Fi=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(e===!1)return this.restore();return this}close(e){if(this.onclose&&this.onclose(e))return!0;this.min&&tc(this),this.unmount(),this.dom.remove(),this.dom.textContent="",this.dom.winbox=null,this.body=null,this.dom=null,Xn===this&&(Xn=null)}move(e,i,c){return!e&&e!==0?(e=this.x,i=this.y):c||(this.x=e?e=ue(e,fn-this.left-this.right,this.width):0,this.y=i?i=ue(i,hn-this.top-this.bottom,this.height):0),ke(this.dom,"left",e+"px"),ke(this.dom,"top",i+"px"),this.onmove&&this.onmove(e,i),this}resize(e,i,c){return!e&&e!==0?(e=this.width,i=this.height):c||(this.width=e?e=ue(e,this.maxwidth):0,this.height=i?i=ue(i,this.maxheight):0,e=Math.max(e,this.minwidth),i=Math.max(i,this.minheight)),ke(this.dom,"width",e+"px"),ke(this.dom,"height",i+"px"),this.onresize&&this.onresize(e,i),this}addControl(e){let i=e.class,c=e.image,p=e.click,h=e.index,v=e.title,k=document.createElement("span"),E=Je(this.dom,"wb-control"),C=this;return i&&(k.className=i),c&&ke(k,"background-image","url("+c+")"),p&&(k.onclick=function(I){p.call(this,I,C)}),v&&(k.title=v),E.insertBefore(k,E.childNodes[h||0]),this}removeControl(e){return e=Je(this.dom,e),e&&e.remove(),this}addClass(e){return Qd(this.dom,e),this}removeClass(e){return tp(this.dom,e),this}hasClass(e){return Fu(this.dom,e)}toggleClass(e){return this.hasClass(e)?this.removeClass(e):this.addClass(e)}};function ue(n,e,i){if(typeof n=="string")if(n==="center")n=(e-i)/2|0;else if(n==="right"||n==="bottom")n=e-i;else{let c=parseFloat(n);(""+c!==n&&n.substring((""+c).length))==="%"?n=e/100*c|0:n=c}return n}function rb(){hr=document.body,hr[un="requestFullscreen"]||hr[un="msRequestFullscreen"]||hr[un="webkitRequestFullscreen"]||hr[un="mozRequestFullscreen"]||(un=""),Gu=un&&un.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),Be(window,"resize",function(){Hu(),ep()}),Hu()}function nb(n){mn(n,"drag"),mn(n,"n"),mn(n,"s"),mn(n,"w"),mn(n,"e"),mn(n,"nw"),mn(n,"ne"),mn(n,"se"),mn(n,"sw"),Be(Je(n.dom,"wb-min"),"click",function(e){Bi(e),n.min?n.focus().restore():n.blur().minimize()}),Be(Je(n.dom,"wb-max"),"click",function(e){n.max?n.restore():n.maximize()}),un?Be(Je(n.dom,"wb-full"),"click",function(e){n.fullscreen()}):n.addClass("no-full"),Be(Je(n.dom,"wb-close"),"click",function(e){Bi(e),n.close()||(n=null)}),Be(n.dom,"click",function(e){n.focus()})}function tc(n){Ui.splice(Ui.indexOf(n),1),ep(),n.removeClass("min"),n.min=!1,n.dom.title=""}function ep(){let n=Ui.length,e={},i={};for(let c=0,p,h;c<n;c++)p=Ui[c],h=(p.left||p.right)+":"+(p.top||p.bottom),i[h]?i[h]++:(e[h]=0,i[h]=1);for(let c=0,p,h,v;c<n;c++)p=Ui[c],h=(p.left||p.right)+":"+(p.top||p.bottom),v=Math.min((fn-p.left-p.right)/i[h],250),p.resize(v+1|0,p.header,!0).move(p.left+e[h]*v|0,hn-p.bottom-p.header,!0),e[h]++}function mn(n,e){let i=Je(n.dom,"wb-"+e);if(!i)return;let c,p,h,v,k,E,C=0;Be(i,"mousedown",D),Be(i,"touchstart",D,ms);function I(){v=requestAnimationFrame(I),E&&(n.resize(),E=!1),k&&(n.move(),k=!1)}function D(J){if(Bi(J),n.focus(),e==="drag"){if(n.min){n.restore();return}let vt=Date.now(),St=vt-C;if(C=vt,St<300){n.max?n.restore():n.maximize();return}}!n.max&&!n.min&&(Qd(hr,"wb-lock"),Ql&&I(),(c=J.touches)&&(c=c[0])?(J=c,Be(window,"touchmove",H,ms),Be(window,"touchend",at,ms)):(Be(window,"mousemove",H),Be(window,"mouseup",at)),p=J.pageX,h=J.pageY)}function H(J){Bi(J),c&&(J=J.touches[0]);let vt=J.pageX,St=J.pageY,Ht=vt-p,Zt=St-h,Pe=n.width,ie=n.height,Gt=n.x,gr=n.y,Wt,ae,Jt,Yt;e==="drag"?(n.x+=Ht,n.y+=Zt,Jt=Yt=1):(e==="e"||e==="se"||e==="ne"?(n.width+=Ht,Wt=1):(e==="w"||e==="sw"||e==="nw")&&(n.x+=Ht,n.width-=Ht,Wt=1,Jt=1),e==="s"||e==="se"||e==="sw"?(n.height+=Zt,ae=1):(e==="n"||e==="ne"||e==="nw")&&(n.y+=Zt,n.height-=Zt,ae=1,Yt=1)),Wt&&(n.width=Math.max(Math.min(n.width,n.maxwidth,fn-n.x-n.right),n.minwidth),Wt=n.width!==Pe),ae&&(n.height=Math.max(Math.min(n.height,n.maxheight,hn-n.y-n.bottom),n.minheight),ae=n.height!==ie),(Wt||ae)&&(Ql?E=!0:n.resize()),Jt&&(n.x=Math.max(Math.min(n.x,fn-n.width-n.right),n.left),Jt=n.x!==Gt),Yt&&(n.y=Math.max(Math.min(n.y,hn-n.height-n.bottom),n.top),Yt=n.y!==gr),(Jt||Yt)&&(Ql?k=!0:n.move()),(Wt||Jt)&&(p=vt),(ae||Yt)&&(h=St)}function at(J){Bi(J),tp(hr,"wb-lock"),Ql&&cancelAnimationFrame(v),c?(ps(window,"touchmove",H,ms),ps(window,"touchend",at,ms)):(ps(window,"mousemove",H),ps(window,"mouseup",at))}}function Hu(){let n=document.documentElement;fn=n.clientWidth,hn=n.clientHeight}function ob(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function ec(){if(Fi.full=!1,ob())return document[Gu](),!0}var rp=class{render(e){console.log("rendering options: ",e);let i=new Ao(e);document.body.appendChild(i),new Kn("Winbox Title",{width:"400px",height:"400px",shadowel:"test-shadow",html:"<h1>Hello winbox</h1>"})}},ib=[{id:"disable-extension-on-site",type:"checkbox",title:"Temporarily disable extension",description:"Turns off the extension on all websites.",value:!0},{id:"disable-sync",type:"checkbox",title:"Disable storage sync",description:"Your settings will not propagate to other browsers.",value:!0},{id:"radio-id",type:"radio",title:"Sample radio title",description:"The detail information about the radio here.",value:1},{id:"switch-id",type:"switch",title:"Sample switch title",description:"The detail information about the switch here.",value:!0},{id:"select-id",type:"select",title:"Sample select title",description:"The detail information about the select here.",value:2},{id:"range-id",type:"range",title:"Sample range title",description:"The detail information about the range here.",value:0},{id:"textarea-id",type:"textarea",title:"Sample textarea title",description:"The detail information about the textarea here.",value:"hello world"}],ab=new rp;ab.render(ib);})();
