var IS_DEV_BUILD=false;
(()=>{var uc=Object.create;var Bn=Object.defineProperty;var fc=Object.getOwnPropertyDescriptor;var gc=Object.getOwnPropertyNames;var hc=Object.getPrototypeOf,bc=Object.prototype.hasOwnProperty;var xc=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ns=(e,t)=>{for(var o in t)Bn(e,o,{get:t[o],enumerable:!0})},wc=(e,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of gc(t))!bc.call(e,s)&&s!==o&&Bn(e,s,{get:()=>t[s],enumerable:!(i=fc(t,s))||i.enumerable});return e};var vc=(e,t,o)=>(o=e!=null?uc(hc(e)):{},wc(t||!e||!e.__esModule?Bn(o,"default",{value:e,enumerable:!0}):o,e));var is=xc((Fn,Hn)=>{(function(e,t){typeof Fn=="object"&&typeof Hn<"u"?Hn.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).bootstrap=t()})(Fn,function(){"use strict";let e="transitionend",t=a=>{let r=a.getAttribute("data-bs-target");if(!r||r==="#"){let n=a.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),r=n&&n!=="#"?n.trim():null}return r},o=a=>{let r=t(a);return r&&document.querySelector(r)?r:null},i=a=>{let r=t(a);return r?document.querySelector(r):null},s=a=>{a.dispatchEvent(new Event(e))},c=a=>!(!a||typeof a!="object")&&(a.jquery!==void 0&&(a=a[0]),a.nodeType!==void 0),u=a=>c(a)?a.jquery?a[0]:a:typeof a=="string"&&a.length>0?document.querySelector(a):null,x=a=>{if(!c(a)||a.getClientRects().length===0)return!1;let r=getComputedStyle(a).getPropertyValue("visibility")==="visible",n=a.closest("details:not([open])");if(!n)return r;if(n!==a){let l=a.closest("summary");if(l&&l.parentNode!==n||l===null)return!1}return r},_=a=>!a||a.nodeType!==Node.ELEMENT_NODE||!!a.classList.contains("disabled")||(a.disabled!==void 0?a.disabled:a.hasAttribute("disabled")&&a.getAttribute("disabled")!=="false"),A=a=>{if(!document.documentElement.attachShadow)return null;if(typeof a.getRootNode=="function"){let r=a.getRootNode();return r instanceof ShadowRoot?r:null}return a instanceof ShadowRoot?a:a.parentNode?A(a.parentNode):null},L=()=>{},C=a=>{a.offsetHeight},q=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,rt=[],G=()=>document.documentElement.dir==="rtl",nt=a=>{var r;r=()=>{let n=q();if(n){let l=a.NAME,p=n.fn[l];n.fn[l]=a.jQueryInterface,n.fn[l].Constructor=a,n.fn[l].noConflict=()=>(n.fn[l]=p,a.jQueryInterface)}},document.readyState==="loading"?(rt.length||document.addEventListener("DOMContentLoaded",()=>{for(let n of rt)n()}),rt.push(r)):r()},at=a=>{typeof a=="function"&&a()},xt=(a,r,n=!0)=>{if(!n)return void at(a);let l=(b=>{if(!b)return 0;let{transitionDuration:k,transitionDelay:S}=window.getComputedStyle(b),D=Number.parseFloat(k),I=Number.parseFloat(S);return D||I?(k=k.split(",")[0],S=S.split(",")[0],1e3*(Number.parseFloat(k)+Number.parseFloat(S))):0})(r)+5,p=!1,f=({target:b})=>{b===r&&(p=!0,r.removeEventListener(e,f),at(a))};r.addEventListener(e,f),setTimeout(()=>{p||s(r)},l)},mt=(a,r,n,l)=>{let p=a.length,f=a.indexOf(r);return f===-1?!n&&l?a[p-1]:a[0]:(f+=n?1:-1,l&&(f=(f+p)%p),a[Math.max(0,Math.min(f,p-1))])},Mt=/[^.]*(?=\..*)\.|.*/,Et=/\..*/,St=/::\d+$/,ie={},vt=1,_t={mouseenter:"mouseover",mouseleave:"mouseout"},gt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ut(a,r){return r&&`${r}::${vt++}`||a.uidEvent||vt++}function $t(a){let r=ut(a);return a.uidEvent=r,ie[r]=ie[r]||{},ie[r]}function Gt(a,r,n=null){return Object.values(a).find(l=>l.callable===r&&l.delegationSelector===n)}function lr(a,r,n){let l=typeof r=="string",p=l?n:r||n,f=Ie(a);return gt.has(f)||(f=a),[l,p,f]}function Ne(a,r,n,l,p){if(typeof r!="string"||!a)return;let[f,b,k]=lr(r,n,l);r in _t&&(b=(B=>function(R){if(!R.relatedTarget||R.relatedTarget!==R.delegateTarget&&!R.delegateTarget.contains(R.relatedTarget))return B.call(this,R)})(b));let S=$t(a),D=S[k]||(S[k]={}),I=Gt(D,b,f?n:null);if(I)return void(I.oneOff=I.oneOff&&p);let N=ut(b,r.replace(Mt,"")),U=f?function(j,B,R){return function F(tt){let it=j.querySelectorAll(B);for(let{target:Y}=tt;Y&&Y!==this;Y=Y.parentNode)for(let K of it)if(K===Y)return Yt(tt,{delegateTarget:Y}),F.oneOff&&y.off(j,tt.type,B,R),R.apply(Y,[tt])}}(a,n,b):function(j,B){return function R(F){return Yt(F,{delegateTarget:j}),R.oneOff&&y.off(j,F.type,B),B.apply(j,[F])}}(a,b);U.delegationSelector=f?n:null,U.callable=b,U.oneOff=p,U.uidEvent=N,D[N]=U,a.addEventListener(k,U,f)}function Oe(a,r,n,l,p){let f=Gt(r[n],l,p);f&&(a.removeEventListener(n,f,Boolean(p)),delete r[n][f.uidEvent])}function De(a,r,n,l){let p=r[n]||{};for(let f of Object.keys(p))if(f.includes(l)){let b=p[f];Oe(a,r,n,b.callable,b.delegationSelector)}}function Ie(a){return a=a.replace(Et,""),_t[a]||a}let y={on(a,r,n,l){Ne(a,r,n,l,!1)},one(a,r,n,l){Ne(a,r,n,l,!0)},off(a,r,n,l){if(typeof r!="string"||!a)return;let[p,f,b]=lr(r,n,l),k=b!==r,S=$t(a),D=S[b]||{},I=r.startsWith(".");if(f===void 0){if(I)for(let N of Object.keys(S))De(a,S,N,r.slice(1));for(let N of Object.keys(D)){let U=N.replace(St,"");if(!k||r.includes(U)){let j=D[N];Oe(a,S,b,j.callable,j.delegationSelector)}}}else{if(!Object.keys(D).length)return;Oe(a,S,b,f,p?n:null)}},trigger(a,r,n){if(typeof r!="string"||!a)return null;let l=q(),p=null,f=!0,b=!0,k=!1;r!==Ie(r)&&l&&(p=l.Event(r,n),l(a).trigger(p),f=!p.isPropagationStopped(),b=!p.isImmediatePropagationStopped(),k=p.isDefaultPrevented());let S=new Event(r,{bubbles:f,cancelable:!0});return S=Yt(S,n),k&&S.preventDefault(),b&&a.dispatchEvent(S),S.defaultPrevented&&p&&p.preventDefault(),S}};function Yt(a,r){for(let[n,l]of Object.entries(r||{}))try{a[n]=l}catch{Object.defineProperty(a,n,{configurable:!0,get:()=>l})}return a}let W=new Map,he={set(a,r,n){W.has(a)||W.set(a,new Map);let l=W.get(a);l.has(r)||l.size===0?l.set(r,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(l.keys())[0]}.`)},get:(a,r)=>W.has(a)&&W.get(a).get(r)||null,remove(a,r){if(!W.has(a))return;let n=W.get(a);n.delete(r),n.size===0&&W.delete(a)}};function Le(a){if(a==="true")return!0;if(a==="false")return!1;if(a===Number(a).toString())return Number(a);if(a===""||a==="null")return null;if(typeof a!="string")return a;try{return JSON.parse(decodeURIComponent(a))}catch{return a}}function be(a){return a.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}let yt={setDataAttribute(a,r,n){a.setAttribute(`data-bs-${be(r)}`,n)},removeDataAttribute(a,r){a.removeAttribute(`data-bs-${be(r)}`)},getDataAttributes(a){if(!a)return{};let r={},n=Object.keys(a.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(let l of n){let p=l.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),r[p]=Le(a.dataset[l])}return r},getDataAttribute:(a,r)=>Le(a.getAttribute(`data-bs-${be(r)}`))};class zt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(r){return r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r}_mergeConfigObj(r,n){let l=c(n)?yt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof l=="object"?l:{},...c(n)?yt.getDataAttributes(n):{},...typeof r=="object"?r:{}}}_typeCheckConfig(r,n=this.constructor.DefaultType){for(let p of Object.keys(n)){let f=n[p],b=r[p],k=c(b)?"element":(l=b)==null?`${l}`:Object.prototype.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(f).test(k))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${k}" but expected type "${f}".`)}var l}}class Tt extends zt{constructor(r,n){super(),(r=u(r))&&(this._element=r,this._config=this._getConfig(n),he.set(this._element,this.constructor.DATA_KEY,this))}dispose(){he.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(let r of Object.getOwnPropertyNames(this))this[r]=null}_queueCallback(r,n,l=!0){xt(r,n,l)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(r){return he.get(u(r),this.DATA_KEY)}static getOrCreateInstance(r,n={}){return this.getInstance(r)||new this(r,typeof n=="object"?n:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}let Me=(a,r="hide")=>{let n=`click.dismiss${a.EVENT_KEY}`,l=a.NAME;y.on(document,n,`[data-bs-dismiss="${l}"]`,function(p){if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),_(this))return;let f=i(this)||this.closest(`.${l}`);a.getOrCreateInstance(f)[r]()})};class Wt extends Tt{static get NAME(){return"alert"}close(){if(y.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");let r=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),y.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(r){return this.each(function(){let n=Wt.getOrCreateInstance(this);if(typeof r=="string"){if(n[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);n[r](this)}})}}Me(Wt,"close"),nt(Wt);let qt='[data-bs-toggle="button"]';class ht extends Tt{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(r){return this.each(function(){let n=ht.getOrCreateInstance(this);r==="toggle"&&n[r]()})}}y.on(document,"click.bs.button.data-api",qt,a=>{a.preventDefault();let r=a.target.closest(qt);ht.getOrCreateInstance(r).toggle()}),nt(ht);let M={find:(a,r=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(r,a)),findOne:(a,r=document.documentElement)=>Element.prototype.querySelector.call(r,a),children:(a,r)=>[].concat(...a.children).filter(n=>n.matches(r)),parents(a,r){let n=[],l=a.parentNode.closest(r);for(;l;)n.push(l),l=l.parentNode.closest(r);return n},prev(a,r){let n=a.previousElementSibling;for(;n;){if(n.matches(r))return[n];n=n.previousElementSibling}return[]},next(a,r){let n=a.nextElementSibling;for(;n;){if(n.matches(r))return[n];n=n.nextElementSibling}return[]},focusableChildren(a){let r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(r,a).filter(n=>!_(n)&&x(n))}},jt={endCallback:null,leftCallback:null,rightCallback:null},ze={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ae extends zt{constructor(r,n){super(),this._element=r,r&&ae.isSupported()&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return jt}static get DefaultType(){return ze}static get NAME(){return"swipe"}dispose(){y.off(this._element,".bs.swipe")}_start(r){this._supportPointerEvents?this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX):this._deltaX=r.touches[0].clientX}_end(r){this._eventIsPointerPenTouch(r)&&(this._deltaX=r.clientX-this._deltaX),this._handleSwipe(),at(this._config.endCallback)}_move(r){this._deltaX=r.touches&&r.touches.length>1?0:r.touches[0].clientX-this._deltaX}_handleSwipe(){let r=Math.abs(this._deltaX);if(r<=40)return;let n=r/this._deltaX;this._deltaX=0,n&&at(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(y.on(this._element,"pointerdown.bs.swipe",r=>this._start(r)),y.on(this._element,"pointerup.bs.swipe",r=>this._end(r)),this._element.classList.add("pointer-event")):(y.on(this._element,"touchstart.bs.swipe",r=>this._start(r)),y.on(this._element,"touchmove.bs.swipe",r=>this._move(r)),y.on(this._element,"touchend.bs.swipe",r=>this._end(r)))}_eventIsPointerPenTouch(r){return this._supportPointerEvents&&(r.pointerType==="pen"||r.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}let Ct="next",ft="prev",Vt="left",Bt="right",st="slid.bs.carousel",$r="carousel",cr="active",wo={ArrowLeft:Bt,ArrowRight:Vt},kr={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Gr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Je extends Tt{constructor(r,n){super(r,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=M.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===$r&&this.cycle()}static get Default(){return kr}static get DefaultType(){return Gr}static get NAME(){return"carousel"}next(){this._slide(Ct)}nextWhenVisible(){!document.hidden&&x(this._element)&&this.next()}prev(){this._slide(ft)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?y.one(this._element,st,()=>this.cycle()):this.cycle())}to(r){let n=this._getItems();if(r>n.length-1||r<0)return;if(this._isSliding)return void y.one(this._element,st,()=>this.to(r));let l=this._getItemIndex(this._getActive());if(l===r)return;let p=r>l?Ct:ft;this._slide(p,n[r])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(r){return r.defaultInterval=r.interval,r}_addEventListeners(){this._config.keyboard&&y.on(this._element,"keydown.bs.carousel",r=>this._keydown(r)),this._config.pause==="hover"&&(y.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),y.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&ae.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let n of M.find(".carousel-item img",this._element))y.on(n,"dragstart.bs.carousel",l=>l.preventDefault());let r={leftCallback:()=>this._slide(this._directionToOrder(Vt)),rightCallback:()=>this._slide(this._directionToOrder(Bt)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new ae(this._element,r)}_keydown(r){if(/input|textarea/i.test(r.target.tagName))return;let n=wo[r.key];n&&(r.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(r){return this._getItems().indexOf(r)}_setActiveIndicatorElement(r){if(!this._indicatorsElement)return;let n=M.findOne(".active",this._indicatorsElement);n.classList.remove(cr),n.removeAttribute("aria-current");let l=M.findOne(`[data-bs-slide-to="${r}"]`,this._indicatorsElement);l&&(l.classList.add(cr),l.setAttribute("aria-current","true"))}_updateInterval(){let r=this._activeElement||this._getActive();if(!r)return;let n=Number.parseInt(r.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(r,n=null){if(this._isSliding)return;let l=this._getActive(),p=r===Ct,f=n||mt(this._getItems(),l,p,this._config.wrap);if(f===l)return;let b=this._getItemIndex(f),k=N=>y.trigger(this._element,N,{relatedTarget:f,direction:this._orderToDirection(r),from:this._getItemIndex(l),to:b});if(k("slide.bs.carousel").defaultPrevented||!l||!f)return;let S=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(b),this._activeElement=f;let D=p?"carousel-item-start":"carousel-item-end",I=p?"carousel-item-next":"carousel-item-prev";f.classList.add(I),C(f),l.classList.add(D),f.classList.add(D),this._queueCallback(()=>{f.classList.remove(D,I),f.classList.add(cr),l.classList.remove(cr,I,D),this._isSliding=!1,k(st)},l,this._isAnimated()),S&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return M.findOne(".active.carousel-item",this._element)}_getItems(){return M.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(r){return G()?r===Vt?ft:Ct:r===Vt?Ct:ft}_orderToDirection(r){return G()?r===ft?Vt:Bt:r===ft?Bt:Vt}static jQueryInterface(r){return this.each(function(){let n=Je.getOrCreateInstance(this,r);if(typeof r!="number"){if(typeof r=="string"){if(n[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);n[r]()}}else n.to(r)})}}y.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(a){let r=i(this);if(!r||!r.classList.contains($r))return;a.preventDefault();let n=Je.getOrCreateInstance(r),l=this.getAttribute("data-bs-slide-to");return l?(n.to(l),void n._maybeEnableCycle()):yt.getDataAttribute(this,"slide")==="next"?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())}),y.on(window,"load.bs.carousel.data-api",()=>{let a=M.find('[data-bs-ride="carousel"]');for(let r of a)Je.getOrCreateInstance(r)}),nt(Je);let Yr="show",Er="collapse",dr="collapsing",Wr='[data-bs-toggle="collapse"]',gn={parent:null,toggle:!0},Xt={parent:"(null|element)",toggle:"boolean"};class je extends Tt{constructor(r,n){super(r,n),this._isTransitioning=!1,this._triggerArray=[];let l=M.find(Wr);for(let p of l){let f=o(p),b=M.find(f).filter(k=>k===this._element);f!==null&&b.length&&this._triggerArray.push(p)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gn}static get DefaultType(){return Xt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let r=[];if(this._config.parent&&(r=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(p=>p!==this._element).map(p=>je.getOrCreateInstance(p,{toggle:!1}))),r.length&&r[0]._isTransitioning||y.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(let p of r)p.hide();let n=this._getDimension();this._element.classList.remove(Er),this._element.classList.add(dr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let l=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(dr),this._element.classList.add(Er,Yr),this._element.style[n]="",y.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[n]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;let r=this._getDimension();this._element.style[r]=`${this._element.getBoundingClientRect()[r]}px`,C(this._element),this._element.classList.add(dr),this._element.classList.remove(Er,Yr);for(let n of this._triggerArray){let l=i(n);l&&!this._isShown(l)&&this._addAriaAndCollapsedClass([n],!1)}this._isTransitioning=!0,this._element.style[r]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(dr),this._element.classList.add(Er),y.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(r=this._element){return r.classList.contains(Yr)}_configAfterMerge(r){return r.toggle=Boolean(r.toggle),r.parent=u(r.parent),r}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;let r=this._getFirstLevelChildren(Wr);for(let n of r){let l=i(n);l&&this._addAriaAndCollapsedClass([n],this._isShown(l))}}_getFirstLevelChildren(r){let n=M.find(":scope .collapse .collapse",this._config.parent);return M.find(r,this._config.parent).filter(l=>!n.includes(l))}_addAriaAndCollapsedClass(r,n){if(r.length)for(let l of r)l.classList.toggle("collapsed",!n),l.setAttribute("aria-expanded",n)}static jQueryInterface(r){let n={};return typeof r=="string"&&/show|hide/.test(r)&&(n.toggle=!1),this.each(function(){let l=je.getOrCreateInstance(this,n);if(typeof r=="string"){if(l[r]===void 0)throw new TypeError(`No method named "${r}"`);l[r]()}})}}y.on(document,"click.bs.collapse.data-api",Wr,function(a){(a.target.tagName==="A"||a.delegateTarget&&a.delegateTarget.tagName==="A")&&a.preventDefault();let r=o(this),n=M.find(r);for(let l of n)je.getOrCreateInstance(l,{toggle:!1}).toggle()}),nt(je);var d="top",m="bottom",g="right",w="left",h="auto",v=[d,m,g,w],E="start",T="end",O="clippingParents",P="viewport",X="popper",Re="reference",hn=v.reduce(function(a,r){return a.concat([r+"-"+E,r+"-"+T])},[]),bn=[].concat(v,[h]).reduce(function(a,r){return a.concat([r,r+"-"+E,r+"-"+T])},[]),ji="beforeRead",Ri="read",Pi="afterRead",Bi="beforeMain",Fi="main",Hi="afterMain",Ui="beforeWrite",$i="write",Gi="afterWrite",Yi=[ji,Ri,Pi,Bi,Fi,Hi,Ui,$i,Gi];function xe(a){return a?(a.nodeName||"").toLowerCase():null}function Kt(a){if(a==null)return window;if(a.toString()!=="[object Window]"){var r=a.ownerDocument;return r&&r.defaultView||window}return a}function mr(a){return a instanceof Kt(a).Element||a instanceof Element}function Jt(a){return a instanceof Kt(a).HTMLElement||a instanceof HTMLElement}function xn(a){return typeof ShadowRoot<"u"&&(a instanceof Kt(a).ShadowRoot||a instanceof ShadowRoot)}let wn={name:"applyStyles",enabled:!0,phase:"write",fn:function(a){var r=a.state;Object.keys(r.elements).forEach(function(n){var l=r.styles[n]||{},p=r.attributes[n]||{},f=r.elements[n];Jt(f)&&xe(f)&&(Object.assign(f.style,l),Object.keys(p).forEach(function(b){var k=p[b];k===!1?f.removeAttribute(b):f.setAttribute(b,k===!0?"":k)}))})},effect:function(a){var r=a.state,n={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(r.elements.popper.style,n.popper),r.styles=n,r.elements.arrow&&Object.assign(r.elements.arrow.style,n.arrow),function(){Object.keys(r.elements).forEach(function(l){var p=r.elements[l],f=r.attributes[l]||{},b=Object.keys(r.styles.hasOwnProperty(l)?r.styles[l]:n[l]).reduce(function(k,S){return k[S]="",k},{});Jt(p)&&xe(p)&&(Object.assign(p.style,b),Object.keys(f).forEach(function(k){p.removeAttribute(k)}))})}},requires:["computeStyles"]};function we(a){return a.split("-")[0]}var pr=Math.max,vo=Math.min,Sr=Math.round;function vn(){var a=navigator.userAgentData;return a!=null&&a.brands?a.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function Wi(){return!/^((?!chrome|android).)*safari/i.test(vn())}function Tr(a,r,n){r===void 0&&(r=!1),n===void 0&&(n=!1);var l=a.getBoundingClientRect(),p=1,f=1;r&&Jt(a)&&(p=a.offsetWidth>0&&Sr(l.width)/a.offsetWidth||1,f=a.offsetHeight>0&&Sr(l.height)/a.offsetHeight||1);var b=(mr(a)?Kt(a):window).visualViewport,k=!Wi()&&n,S=(l.left+(k&&b?b.offsetLeft:0))/p,D=(l.top+(k&&b?b.offsetTop:0))/f,I=l.width/p,N=l.height/f;return{width:I,height:N,top:D,right:S+I,bottom:D+N,left:S,x:S,y:D}}function _n(a){var r=Tr(a),n=a.offsetWidth,l=a.offsetHeight;return Math.abs(r.width-n)<=1&&(n=r.width),Math.abs(r.height-l)<=1&&(l=r.height),{x:a.offsetLeft,y:a.offsetTop,width:n,height:l}}function qi(a,r){var n=r.getRootNode&&r.getRootNode();if(a.contains(r))return!0;if(n&&xn(n)){var l=r;do{if(l&&a.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function Pe(a){return Kt(a).getComputedStyle(a)}function pl(a){return["table","td","th"].indexOf(xe(a))>=0}function Ze(a){return((mr(a)?a.ownerDocument:a.document)||window.document).documentElement}function _o(a){return xe(a)==="html"?a:a.assignedSlot||a.parentNode||(xn(a)?a.host:null)||Ze(a)}function Vi(a){return Jt(a)&&Pe(a).position!=="fixed"?a.offsetParent:null}function qr(a){for(var r=Kt(a),n=Vi(a);n&&pl(n)&&Pe(n).position==="static";)n=Vi(n);return n&&(xe(n)==="html"||xe(n)==="body"&&Pe(n).position==="static")?r:n||function(l){var p=/firefox/i.test(vn());if(/Trident/i.test(vn())&&Jt(l)&&Pe(l).position==="fixed")return null;var f=_o(l);for(xn(f)&&(f=f.host);Jt(f)&&["html","body"].indexOf(xe(f))<0;){var b=Pe(f);if(b.transform!=="none"||b.perspective!=="none"||b.contain==="paint"||["transform","perspective"].indexOf(b.willChange)!==-1||p&&b.willChange==="filter"||p&&b.filter&&b.filter!=="none")return f;f=f.parentNode}return null}(a)||r}function yn(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function Vr(a,r,n){return pr(a,vo(r,n))}function Xi(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function Ki(a,r){return r.reduce(function(n,l){return n[l]=a,n},{})}let Ji={name:"arrow",enabled:!0,phase:"main",fn:function(a){var r,n=a.state,l=a.name,p=a.options,f=n.elements.arrow,b=n.modifiersData.popperOffsets,k=we(n.placement),S=yn(k),D=[w,g].indexOf(k)>=0?"height":"width";if(f&&b){var I=function(et,Q){return Xi(typeof(et=typeof et=="function"?et(Object.assign({},Q.rects,{placement:Q.placement})):et)!="number"?et:Ki(et,v))}(p.padding,n),N=_n(f),U=S==="y"?d:w,j=S==="y"?m:g,B=n.rects.reference[D]+n.rects.reference[S]-b[S]-n.rects.popper[D],R=b[S]-n.rects.reference[S],F=qr(f),tt=F?S==="y"?F.clientHeight||0:F.clientWidth||0:0,it=B/2-R/2,Y=I[U],K=tt-N[D]-I[j],$=tt/2-N[D]/2+it,V=Vr(Y,$,K),Z=S;n.modifiersData[l]=((r={})[Z]=V,r.centerOffset=V-$,r)}},effect:function(a){var r=a.state,n=a.options.element,l=n===void 0?"[data-popper-arrow]":n;l!=null&&(typeof l!="string"||(l=r.elements.popper.querySelector(l)))&&qi(r.elements.popper,l)&&(r.elements.arrow=l)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Cr(a){return a.split("-")[1]}var ul={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Zi(a){var r,n=a.popper,l=a.popperRect,p=a.placement,f=a.variation,b=a.offsets,k=a.position,S=a.gpuAcceleration,D=a.adaptive,I=a.roundOffsets,N=a.isFixed,U=b.x,j=U===void 0?0:U,B=b.y,R=B===void 0?0:B,F=typeof I=="function"?I({x:j,y:R}):{x:j,y:R};j=F.x,R=F.y;var tt=b.hasOwnProperty("x"),it=b.hasOwnProperty("y"),Y=w,K=d,$=window;if(D){var V=qr(n),Z="clientHeight",et="clientWidth";V===Kt(n)&&Pe(V=Ze(n)).position!=="static"&&k==="absolute"&&(Z="scrollHeight",et="scrollWidth"),(p===d||(p===w||p===g)&&f===T)&&(K=m,R-=(N&&V===$&&$.visualViewport?$.visualViewport.height:V[Z])-l.height,R*=S?1:-1),p!==w&&(p!==d&&p!==m||f!==T)||(Y=g,j-=(N&&V===$&&$.visualViewport?$.visualViewport.width:V[et])-l.width,j*=S?1:-1)}var Q,pt=Object.assign({position:k},D&&ul),Ft=I===!0?function(le){var Ot=le.x,Zt=le.y,Dt=window.devicePixelRatio||1;return{x:Sr(Ot*Dt)/Dt||0,y:Sr(Zt*Dt)/Dt||0}}({x:j,y:R}):{x:j,y:R};return j=Ft.x,R=Ft.y,S?Object.assign({},pt,((Q={})[K]=it?"0":"",Q[Y]=tt?"0":"",Q.transform=($.devicePixelRatio||1)<=1?"translate("+j+"px, "+R+"px)":"translate3d("+j+"px, "+R+"px, 0)",Q)):Object.assign({},pt,((r={})[K]=it?R+"px":"",r[Y]=tt?j+"px":"",r.transform="",r))}let kn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var r=a.state,n=a.options,l=n.gpuAcceleration,p=l===void 0||l,f=n.adaptive,b=f===void 0||f,k=n.roundOffsets,S=k===void 0||k,D={placement:we(r.placement),variation:Cr(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:p,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,Zi(Object.assign({},D,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:b,roundOffsets:S})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,Zi(Object.assign({},D,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:S})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})},data:{}};var yo={passive:!0};let En={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var r=a.state,n=a.instance,l=a.options,p=l.scroll,f=p===void 0||p,b=l.resize,k=b===void 0||b,S=Kt(r.elements.popper),D=[].concat(r.scrollParents.reference,r.scrollParents.popper);return f&&D.forEach(function(I){I.addEventListener("scroll",n.update,yo)}),k&&S.addEventListener("resize",n.update,yo),function(){f&&D.forEach(function(I){I.removeEventListener("scroll",n.update,yo)}),k&&S.removeEventListener("resize",n.update,yo)}},data:{}};var fl={left:"right",right:"left",bottom:"top",top:"bottom"};function ko(a){return a.replace(/left|right|bottom|top/g,function(r){return fl[r]})}var gl={start:"end",end:"start"};function Qi(a){return a.replace(/start|end/g,function(r){return gl[r]})}function Sn(a){var r=Kt(a);return{scrollLeft:r.pageXOffset,scrollTop:r.pageYOffset}}function Tn(a){return Tr(Ze(a)).left+Sn(a).scrollLeft}function Cn(a){var r=Pe(a),n=r.overflow,l=r.overflowX,p=r.overflowY;return/auto|scroll|overlay|hidden/.test(n+p+l)}function ta(a){return["html","body","#document"].indexOf(xe(a))>=0?a.ownerDocument.body:Jt(a)&&Cn(a)?a:ta(_o(a))}function Xr(a,r){var n;r===void 0&&(r=[]);var l=ta(a),p=l===((n=a.ownerDocument)==null?void 0:n.body),f=Kt(l),b=p?[f].concat(f.visualViewport||[],Cn(l)?l:[]):l,k=r.concat(b);return p?k:k.concat(Xr(_o(b)))}function An(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function ea(a,r,n){return r===P?An(function(l,p){var f=Kt(l),b=Ze(l),k=f.visualViewport,S=b.clientWidth,D=b.clientHeight,I=0,N=0;if(k){S=k.width,D=k.height;var U=Wi();(U||!U&&p==="fixed")&&(I=k.offsetLeft,N=k.offsetTop)}return{width:S,height:D,x:I+Tn(l),y:N}}(a,n)):mr(r)?function(l,p){var f=Tr(l,!1,p==="fixed");return f.top=f.top+l.clientTop,f.left=f.left+l.clientLeft,f.bottom=f.top+l.clientHeight,f.right=f.left+l.clientWidth,f.width=l.clientWidth,f.height=l.clientHeight,f.x=f.left,f.y=f.top,f}(r,n):An(function(l){var p,f=Ze(l),b=Sn(l),k=(p=l.ownerDocument)==null?void 0:p.body,S=pr(f.scrollWidth,f.clientWidth,k?k.scrollWidth:0,k?k.clientWidth:0),D=pr(f.scrollHeight,f.clientHeight,k?k.scrollHeight:0,k?k.clientHeight:0),I=-b.scrollLeft+Tn(l),N=-b.scrollTop;return Pe(k||f).direction==="rtl"&&(I+=pr(f.clientWidth,k?k.clientWidth:0)-S),{width:S,height:D,x:I,y:N}}(Ze(a)))}function ra(a){var r,n=a.reference,l=a.element,p=a.placement,f=p?we(p):null,b=p?Cr(p):null,k=n.x+n.width/2-l.width/2,S=n.y+n.height/2-l.height/2;switch(f){case d:r={x:k,y:n.y-l.height};break;case m:r={x:k,y:n.y+n.height};break;case g:r={x:n.x+n.width,y:S};break;case w:r={x:n.x-l.width,y:S};break;default:r={x:n.x,y:n.y}}var D=f?yn(f):null;if(D!=null){var I=D==="y"?"height":"width";switch(b){case E:r[D]=r[D]-(n[I]/2-l[I]/2);break;case T:r[D]=r[D]+(n[I]/2-l[I]/2)}}return r}function Ar(a,r){r===void 0&&(r={});var n=r,l=n.placement,p=l===void 0?a.placement:l,f=n.strategy,b=f===void 0?a.strategy:f,k=n.boundary,S=k===void 0?O:k,D=n.rootBoundary,I=D===void 0?P:D,N=n.elementContext,U=N===void 0?X:N,j=n.altBoundary,B=j!==void 0&&j,R=n.padding,F=R===void 0?0:R,tt=Xi(typeof F!="number"?F:Ki(F,v)),it=U===X?Re:X,Y=a.rects.popper,K=a.elements[B?it:U],$=function(Ot,Zt,Dt,kt){var ve=Zt==="clippingParents"?function(ot){var It=Xr(_o(ot)),Qt=["absolute","fixed"].indexOf(Pe(ot).position)>=0&&Jt(ot)?qr(ot):ot;return mr(Qt)?It.filter(function(Qe){return mr(Qe)&&qi(Qe,Qt)&&xe(Qe)!=="body"}):[]}(Ot):[].concat(Zt),_e=[].concat(ve,[Dt]),Nr=_e[0],wt=_e.reduce(function(ot,It){var Qt=ea(Ot,It,kt);return ot.top=pr(Qt.top,ot.top),ot.right=vo(Qt.right,ot.right),ot.bottom=vo(Qt.bottom,ot.bottom),ot.left=pr(Qt.left,ot.left),ot},ea(Ot,Nr,kt));return wt.width=wt.right-wt.left,wt.height=wt.bottom-wt.top,wt.x=wt.left,wt.y=wt.top,wt}(mr(K)?K:K.contextElement||Ze(a.elements.popper),S,I,b),V=Tr(a.elements.reference),Z=ra({reference:V,element:Y,strategy:"absolute",placement:p}),et=An(Object.assign({},Y,Z)),Q=U===X?et:V,pt={top:$.top-Q.top+tt.top,bottom:Q.bottom-$.bottom+tt.bottom,left:$.left-Q.left+tt.left,right:Q.right-$.right+tt.right},Ft=a.modifiersData.offset;if(U===X&&Ft){var le=Ft[p];Object.keys(pt).forEach(function(Ot){var Zt=[g,m].indexOf(Ot)>=0?1:-1,Dt=[d,m].indexOf(Ot)>=0?"y":"x";pt[Ot]+=le[Dt]*Zt})}return pt}function hl(a,r){r===void 0&&(r={});var n=r,l=n.placement,p=n.boundary,f=n.rootBoundary,b=n.padding,k=n.flipVariations,S=n.allowedAutoPlacements,D=S===void 0?bn:S,I=Cr(l),N=I?k?hn:hn.filter(function(B){return Cr(B)===I}):v,U=N.filter(function(B){return D.indexOf(B)>=0});U.length===0&&(U=N);var j=U.reduce(function(B,R){return B[R]=Ar(a,{placement:R,boundary:p,rootBoundary:f,padding:b})[we(R)],B},{});return Object.keys(j).sort(function(B,R){return j[B]-j[R]})}let oa={name:"flip",enabled:!0,phase:"main",fn:function(a){var r=a.state,n=a.options,l=a.name;if(!r.modifiersData[l]._skip){for(var p=n.mainAxis,f=p===void 0||p,b=n.altAxis,k=b===void 0||b,S=n.fallbackPlacements,D=n.padding,I=n.boundary,N=n.rootBoundary,U=n.altBoundary,j=n.flipVariations,B=j===void 0||j,R=n.allowedAutoPlacements,F=r.options.placement,tt=we(F),it=S||(tt!==F&&B?function(ot){if(we(ot)===h)return[];var It=ko(ot);return[Qi(ot),It,Qi(It)]}(F):[ko(F)]),Y=[F].concat(it).reduce(function(ot,It){return ot.concat(we(It)===h?hl(r,{placement:It,boundary:I,rootBoundary:N,padding:D,flipVariations:B,allowedAutoPlacements:R}):It)},[]),K=r.rects.reference,$=r.rects.popper,V=new Map,Z=!0,et=Y[0],Q=0;Q<Y.length;Q++){var pt=Y[Q],Ft=we(pt),le=Cr(pt)===E,Ot=[d,m].indexOf(Ft)>=0,Zt=Ot?"width":"height",Dt=Ar(r,{placement:pt,boundary:I,rootBoundary:N,altBoundary:U,padding:D}),kt=Ot?le?g:w:le?m:d;K[Zt]>$[Zt]&&(kt=ko(kt));var ve=ko(kt),_e=[];if(f&&_e.push(Dt[Ft]<=0),k&&_e.push(Dt[kt]<=0,Dt[ve]<=0),_e.every(function(ot){return ot})){et=pt,Z=!1;break}V.set(pt,_e)}if(Z)for(var Nr=function(ot){var It=Y.find(function(Qt){var Qe=V.get(Qt);if(Qe)return Qe.slice(0,ot).every(function(Lo){return Lo})});if(It)return et=It,"break"},wt=B?3:1;wt>0&&Nr(wt)!=="break";wt--);r.placement!==et&&(r.modifiersData[l]._skip=!0,r.placement=et,r.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function na(a,r,n){return n===void 0&&(n={x:0,y:0}),{top:a.top-r.height-n.y,right:a.right-r.width+n.x,bottom:a.bottom-r.height+n.y,left:a.left-r.width-n.x}}function ia(a){return[d,g,m,w].some(function(r){return a[r]>=0})}let aa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var r=a.state,n=a.name,l=r.rects.reference,p=r.rects.popper,f=r.modifiersData.preventOverflow,b=Ar(r,{elementContext:"reference"}),k=Ar(r,{altBoundary:!0}),S=na(b,l),D=na(k,p,f),I=ia(S),N=ia(D);r.modifiersData[n]={referenceClippingOffsets:S,popperEscapeOffsets:D,isReferenceHidden:I,hasPopperEscaped:N},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":I,"data-popper-escaped":N})}},sa={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var r=a.state,n=a.options,l=a.name,p=n.offset,f=p===void 0?[0,0]:p,b=bn.reduce(function(I,N){return I[N]=function(U,j,B){var R=we(U),F=[w,d].indexOf(R)>=0?-1:1,tt=typeof B=="function"?B(Object.assign({},j,{placement:U})):B,it=tt[0],Y=tt[1];return it=it||0,Y=(Y||0)*F,[w,g].indexOf(R)>=0?{x:Y,y:it}:{x:it,y:Y}}(N,r.rects,f),I},{}),k=b[r.placement],S=k.x,D=k.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=S,r.modifiersData.popperOffsets.y+=D),r.modifiersData[l]=b}},Nn={name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var r=a.state,n=a.name;r.modifiersData[n]=ra({reference:r.rects.reference,element:r.rects.popper,strategy:"absolute",placement:r.placement})},data:{}},la={name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var r=a.state,n=a.options,l=a.name,p=n.mainAxis,f=p===void 0||p,b=n.altAxis,k=b!==void 0&&b,S=n.boundary,D=n.rootBoundary,I=n.altBoundary,N=n.padding,U=n.tether,j=U===void 0||U,B=n.tetherOffset,R=B===void 0?0:B,F=Ar(r,{boundary:S,rootBoundary:D,padding:N,altBoundary:I}),tt=we(r.placement),it=Cr(r.placement),Y=!it,K=yn(tt),$=K==="x"?"y":"x",V=r.modifiersData.popperOffsets,Z=r.rects.reference,et=r.rects.popper,Q=typeof R=="function"?R(Object.assign({},r.rects,{placement:r.placement})):R,pt=typeof Q=="number"?{mainAxis:Q,altAxis:Q}:Object.assign({mainAxis:0,altAxis:0},Q),Ft=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,le={x:0,y:0};if(V){if(f){var Ot,Zt=K==="y"?d:w,Dt=K==="y"?m:g,kt=K==="y"?"height":"width",ve=V[K],_e=ve+F[Zt],Nr=ve-F[Dt],wt=j?-et[kt]/2:0,ot=it===E?Z[kt]:et[kt],It=it===E?-et[kt]:-Z[kt],Qt=r.elements.arrow,Qe=j&&Qt?_n(Qt):{width:0,height:0},Lo=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Wa=Lo[Zt],qa=Lo[Dt],Mo=Vr(0,Z[kt],Qe[kt]),ic=Y?Z[kt]/2-wt-Mo-Wa-pt.mainAxis:ot-Mo-Wa-pt.mainAxis,ac=Y?-Z[kt]/2+wt+Mo+qa+pt.mainAxis:It+Mo+qa+pt.mainAxis,jn=r.elements.arrow&&qr(r.elements.arrow),sc=jn?K==="y"?jn.clientTop||0:jn.clientLeft||0:0,Va=(Ot=Ft?.[K])!=null?Ot:0,lc=ve+ac-Va,Xa=Vr(j?vo(_e,ve+ic-Va-sc):_e,ve,j?pr(Nr,lc):Nr);V[K]=Xa,le[K]=Xa-ve}if(k){var Ka,cc=K==="x"?d:w,dc=K==="x"?m:g,br=V[$],zo=$==="y"?"height":"width",Ja=br+F[cc],Za=br-F[dc],Rn=[d,w].indexOf(tt)!==-1,Qa=(Ka=Ft?.[$])!=null?Ka:0,ts=Rn?Ja:br-Z[zo]-et[zo]-Qa+pt.altAxis,es=Rn?br+Z[zo]+et[zo]-Qa-pt.altAxis:Za,rs=j&&Rn?function(mc,pc,Pn){var os=Vr(mc,pc,Pn);return os>Pn?Pn:os}(ts,br,es):Vr(j?ts:Ja,br,j?es:Za);V[$]=rs,le[$]=rs-br}r.modifiersData[l]=le}},requiresIfExists:["offset"]};function bl(a,r,n){n===void 0&&(n=!1);var l,p,f=Jt(r),b=Jt(r)&&function(N){var U=N.getBoundingClientRect(),j=Sr(U.width)/N.offsetWidth||1,B=Sr(U.height)/N.offsetHeight||1;return j!==1||B!==1}(r),k=Ze(r),S=Tr(a,b,n),D={scrollLeft:0,scrollTop:0},I={x:0,y:0};return(f||!f&&!n)&&((xe(r)!=="body"||Cn(k))&&(D=(l=r)!==Kt(l)&&Jt(l)?{scrollLeft:(p=l).scrollLeft,scrollTop:p.scrollTop}:Sn(l)),Jt(r)?((I=Tr(r,!0)).x+=r.clientLeft,I.y+=r.clientTop):k&&(I.x=Tn(k))),{x:S.left+D.scrollLeft-I.x,y:S.top+D.scrollTop-I.y,width:S.width,height:S.height}}function xl(a){var r=new Map,n=new Set,l=[];function p(f){n.add(f.name),[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(b){if(!n.has(b)){var k=r.get(b);k&&p(k)}}),l.push(f)}return a.forEach(function(f){r.set(f.name,f)}),a.forEach(function(f){n.has(f.name)||p(f)}),l}var ca={placement:"bottom",modifiers:[],strategy:"absolute"};function da(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return!r.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function Eo(a){a===void 0&&(a={});var r=a,n=r.defaultModifiers,l=n===void 0?[]:n,p=r.defaultOptions,f=p===void 0?ca:p;return function(b,k,S){S===void 0&&(S=f);var D,I,N={placement:"bottom",orderedModifiers:[],options:Object.assign({},ca,f),modifiersData:{},elements:{reference:b,popper:k},attributes:{},styles:{}},U=[],j=!1,B={state:N,setOptions:function(F){var tt=typeof F=="function"?F(N.options):F;R(),N.options=Object.assign({},f,N.options,tt),N.scrollParents={reference:mr(b)?Xr(b):b.contextElement?Xr(b.contextElement):[],popper:Xr(k)};var it,Y,K=function($){var V=xl($);return Yi.reduce(function(Z,et){return Z.concat(V.filter(function(Q){return Q.phase===et}))},[])}((it=[].concat(l,N.options.modifiers),Y=it.reduce(function($,V){var Z=$[V.name];return $[V.name]=Z?Object.assign({},Z,V,{options:Object.assign({},Z.options,V.options),data:Object.assign({},Z.data,V.data)}):V,$},{}),Object.keys(Y).map(function($){return Y[$]})));return N.orderedModifiers=K.filter(function($){return $.enabled}),N.orderedModifiers.forEach(function($){var V=$.name,Z=$.options,et=Z===void 0?{}:Z,Q=$.effect;if(typeof Q=="function"){var pt=Q({state:N,name:V,instance:B,options:et});U.push(pt||function(){})}}),B.update()},forceUpdate:function(){if(!j){var F=N.elements,tt=F.reference,it=F.popper;if(da(tt,it)){N.rects={reference:bl(tt,qr(it),N.options.strategy==="fixed"),popper:_n(it)},N.reset=!1,N.placement=N.options.placement,N.orderedModifiers.forEach(function(Q){return N.modifiersData[Q.name]=Object.assign({},Q.data)});for(var Y=0;Y<N.orderedModifiers.length;Y++)if(N.reset!==!0){var K=N.orderedModifiers[Y],$=K.fn,V=K.options,Z=V===void 0?{}:V,et=K.name;typeof $=="function"&&(N=$({state:N,options:Z,name:et,instance:B})||N)}else N.reset=!1,Y=-1}}},update:(D=function(){return new Promise(function(F){B.forceUpdate(),F(N)})},function(){return I||(I=new Promise(function(F){Promise.resolve().then(function(){I=void 0,F(D())})})),I}),destroy:function(){R(),j=!0}};if(!da(b,k))return B;function R(){U.forEach(function(F){return F()}),U=[]}return B.setOptions(S).then(function(F){!j&&S.onFirstUpdate&&S.onFirstUpdate(F)}),B}}var wl=Eo(),vl=Eo({defaultModifiers:[En,Nn,kn,wn]}),On=Eo({defaultModifiers:[En,Nn,kn,wn,sa,oa,la,Ji,aa]});let ma=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:Eo,detectOverflow:Ar,createPopperBase:wl,createPopper:On,createPopperLite:vl,top:d,bottom:m,right:g,left:w,auto:h,basePlacements:v,start:E,end:T,clippingParents:O,viewport:P,popper:X,reference:Re,variationPlacements:hn,placements:bn,beforeRead:ji,read:Ri,afterRead:Pi,beforeMain:Bi,main:Fi,afterMain:Hi,beforeWrite:Ui,write:$i,afterWrite:Gi,modifierPhases:Yi,applyStyles:wn,arrow:Ji,computeStyles:kn,eventListeners:En,flip:oa,hide:aa,offset:sa,popperOffsets:Nn,preventOverflow:la},Symbol.toStringTag,{value:"Module"})),pa="dropdown",_l="ArrowUp",ua="ArrowDown",fa="click.bs.dropdown.data-api",ga="keydown.bs.dropdown.data-api",Kr="show",ur='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',yl=`${ur}.show`,So=".dropdown-menu",kl=G()?"top-end":"top-start",El=G()?"top-start":"top-end",Sl=G()?"bottom-end":"bottom-start",Tl=G()?"bottom-start":"bottom-end",Cl=G()?"left-start":"right-start",Al=G()?"right-start":"left-start",Nl={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Ol={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class se extends Tt{constructor(r,n){super(r,n),this._popper=null,this._parent=this._element.parentNode,this._menu=M.next(this._element,So)[0]||M.prev(this._element,So)[0]||M.findOne(So,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Nl}static get DefaultType(){return Ol}static get NAME(){return pa}toggle(){return this._isShown()?this.hide():this.show()}show(){if(_(this._element)||this._isShown())return;let r={relatedTarget:this._element};if(!y.trigger(this._element,"show.bs.dropdown",r).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(let n of[].concat(...document.body.children))y.on(n,"mouseover",L);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Kr),this._element.classList.add(Kr),y.trigger(this._element,"shown.bs.dropdown",r)}}hide(){if(_(this._element)||!this._isShown())return;let r={relatedTarget:this._element};this._completeHide(r)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(r){if(!y.trigger(this._element,"hide.bs.dropdown",r).defaultPrevented){if("ontouchstart"in document.documentElement)for(let n of[].concat(...document.body.children))y.off(n,"mouseover",L);this._popper&&this._popper.destroy(),this._menu.classList.remove(Kr),this._element.classList.remove(Kr),this._element.setAttribute("aria-expanded","false"),yt.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,"hidden.bs.dropdown",r)}}_getConfig(r){if(typeof(r=super._getConfig(r)).reference=="object"&&!c(r.reference)&&typeof r.reference.getBoundingClientRect!="function")throw new TypeError(`${pa.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return r}_createPopper(){if(ma===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let r=this._element;this._config.reference==="parent"?r=this._parent:c(this._config.reference)?r=u(this._config.reference):typeof this._config.reference=="object"&&(r=this._config.reference);let n=this._getPopperConfig();this._popper=On(r,this._menu,n)}_isShown(){return this._menu.classList.contains(Kr)}_getPlacement(){let r=this._parent;if(r.classList.contains("dropend"))return Cl;if(r.classList.contains("dropstart"))return Al;if(r.classList.contains("dropup-center"))return"top";if(r.classList.contains("dropdown-center"))return"bottom";let n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return r.classList.contains("dropup")?n?El:kl:n?Tl:Sl}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){let{offset:r}=this._config;return typeof r=="string"?r.split(",").map(n=>Number.parseInt(n,10)):typeof r=="function"?n=>r(n,this._element):r}_getPopperConfig(){let r={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(yt.setDataAttribute(this._menu,"popper","static"),r.modifiers=[{name:"applyStyles",enabled:!1}]),{...r,...typeof this._config.popperConfig=="function"?this._config.popperConfig(r):this._config.popperConfig}}_selectMenuItem({key:r,target:n}){let l=M.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(p=>x(p));l.length&&mt(l,n,r===ua,!l.includes(n)).focus()}static jQueryInterface(r){return this.each(function(){let n=se.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0)throw new TypeError(`No method named "${r}"`);n[r]()}})}static clearMenus(r){if(r.button===2||r.type==="keyup"&&r.key!=="Tab")return;let n=M.find(yl);for(let l of n){let p=se.getInstance(l);if(!p||p._config.autoClose===!1)continue;let f=r.composedPath(),b=f.includes(p._menu);if(f.includes(p._element)||p._config.autoClose==="inside"&&!b||p._config.autoClose==="outside"&&b||p._menu.contains(r.target)&&(r.type==="keyup"&&r.key==="Tab"||/input|select|option|textarea|form/i.test(r.target.tagName)))continue;let k={relatedTarget:p._element};r.type==="click"&&(k.clickEvent=r),p._completeHide(k)}}static dataApiKeydownHandler(r){let n=/input|textarea/i.test(r.target.tagName),l=r.key==="Escape",p=[_l,ua].includes(r.key);if(!p&&!l||n&&!l)return;r.preventDefault();let f=this.matches(ur)?this:M.prev(this,ur)[0]||M.next(this,ur)[0]||M.findOne(ur,r.delegateTarget.parentNode),b=se.getOrCreateInstance(f);if(p)return r.stopPropagation(),b.show(),void b._selectMenuItem(r);b._isShown()&&(r.stopPropagation(),b.hide(),f.focus())}}y.on(document,ga,ur,se.dataApiKeydownHandler),y.on(document,ga,So,se.dataApiKeydownHandler),y.on(document,fa,se.clearMenus),y.on(document,"keyup.bs.dropdown.data-api",se.clearMenus),y.on(document,fa,ur,function(a){a.preventDefault(),se.getOrCreateInstance(this).toggle()}),nt(se);let ha=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ba=".sticky-top",To="padding-right",xa="margin-right";class Dn{constructor(){this._element=document.body}getWidth(){let r=document.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}hide(){let r=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,To,n=>n+r),this._setElementAttributes(ha,To,n=>n+r),this._setElementAttributes(ba,xa,n=>n-r)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,To),this._resetElementAttributes(ha,To),this._resetElementAttributes(ba,xa)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(r,n,l){let p=this.getWidth();this._applyManipulationCallback(r,f=>{if(f!==this._element&&window.innerWidth>f.clientWidth+p)return;this._saveInitialAttribute(f,n);let b=window.getComputedStyle(f).getPropertyValue(n);f.style.setProperty(n,`${l(Number.parseFloat(b))}px`)})}_saveInitialAttribute(r,n){let l=r.style.getPropertyValue(n);l&&yt.setDataAttribute(r,n,l)}_resetElementAttributes(r,n){this._applyManipulationCallback(r,l=>{let p=yt.getDataAttribute(l,n);p!==null?(yt.removeDataAttribute(l,n),l.style.setProperty(n,p)):l.style.removeProperty(n)})}_applyManipulationCallback(r,n){if(c(r))n(r);else for(let l of M.find(r,this._element))n(l)}}let wa="show",va="mousedown.bs.backdrop",Dl={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Il={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class _a extends zt{constructor(r){super(),this._config=this._getConfig(r),this._isAppended=!1,this._element=null}static get Default(){return Dl}static get DefaultType(){return Il}static get NAME(){return"backdrop"}show(r){if(!this._config.isVisible)return void at(r);this._append();let n=this._getElement();this._config.isAnimated&&C(n),n.classList.add(wa),this._emulateAnimation(()=>{at(r)})}hide(r){this._config.isVisible?(this._getElement().classList.remove(wa),this._emulateAnimation(()=>{this.dispose(),at(r)})):at(r)}dispose(){this._isAppended&&(y.off(this._element,va),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let r=document.createElement("div");r.className=this._config.className,this._config.isAnimated&&r.classList.add("fade"),this._element=r}return this._element}_configAfterMerge(r){return r.rootElement=u(r.rootElement),r}_append(){if(this._isAppended)return;let r=this._getElement();this._config.rootElement.append(r),y.on(r,va,()=>{at(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(r){xt(r,this._getElement(),this._config.isAnimated)}}let ya=".bs.focustrap",ka="backward",Ll={autofocus:!0,trapElement:null},Ml={autofocus:"boolean",trapElement:"element"};class Ea extends zt{constructor(r){super(),this._config=this._getConfig(r),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ll}static get DefaultType(){return Ml}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,ya),y.on(document,"focusin.bs.focustrap",r=>this._handleFocusin(r)),y.on(document,"keydown.tab.bs.focustrap",r=>this._handleKeydown(r)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,ya))}_handleFocusin(r){let{trapElement:n}=this._config;if(r.target===document||r.target===n||n.contains(r.target))return;let l=M.focusableChildren(n);l.length===0?n.focus():this._lastTabNavDirection===ka?l[l.length-1].focus():l[0].focus()}_handleKeydown(r){r.key==="Tab"&&(this._lastTabNavDirection=r.shiftKey?ka:"forward")}}let Sa="hidden.bs.modal",Ta="show.bs.modal",Ca="modal-open",Aa="show",In="modal-static",zl={backdrop:!0,focus:!0,keyboard:!0},jl={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class fr extends Tt{constructor(r,n){super(r,n),this._dialog=M.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Dn,this._addEventListeners()}static get Default(){return zl}static get DefaultType(){return jl}static get NAME(){return"modal"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||this._isTransitioning||y.trigger(this._element,Ta,{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ca),this._adjustDialog(),this._backdrop.show(()=>this._showElement(r)))}hide(){this._isShown&&!this._isTransitioning&&(y.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Aa),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){for(let r of[window,this._dialog])y.off(r,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _a({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ea({trapElement:this._element})}_showElement(r){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let n=M.findOne(".modal-body",this._dialog);n&&(n.scrollTop=0),C(this._element),this._element.classList.add(Aa),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,"shown.bs.modal",{relatedTarget:r})},this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,"keydown.dismiss.bs.modal",r=>{if(r.key==="Escape")return this._config.keyboard?(r.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),y.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,"mousedown.dismiss.bs.modal",r=>{y.one(this._element,"click.dismiss.bs.modal",n=>{this._element===r.target&&this._element===n.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ca),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,Sa)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(y.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;let r=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(In)||(r||(this._element.style.overflowY="hidden"),this._element.classList.add(In),this._queueCallback(()=>{this._element.classList.remove(In),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let r=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),l=n>0;if(l&&!r){let p=G()?"paddingLeft":"paddingRight";this._element.style[p]=`${n}px`}if(!l&&r){let p=G()?"paddingRight":"paddingLeft";this._element.style[p]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(r,n){return this.each(function(){let l=fr.getOrCreateInstance(this,r);if(typeof r=="string"){if(l[r]===void 0)throw new TypeError(`No method named "${r}"`);l[r](n)}})}}y.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(a){let r=i(this);["A","AREA"].includes(this.tagName)&&a.preventDefault(),y.one(r,Ta,l=>{l.defaultPrevented||y.one(r,Sa,()=>{x(this)&&this.focus()})});let n=M.findOne(".modal.show");n&&fr.getInstance(n).hide(),fr.getOrCreateInstance(r).toggle(this)}),Me(fr),nt(fr);let Na="show",Oa="showing",Da="hiding",Ia=".offcanvas.show",La="hidePrevented.bs.offcanvas",Ma="hidden.bs.offcanvas",Rl={backdrop:!0,keyboard:!0,scroll:!1},Pl={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Be extends Tt{constructor(r,n){super(r,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Rl}static get DefaultType(){return Pl}static get NAME(){return"offcanvas"}toggle(r){return this._isShown?this.hide():this.show(r)}show(r){this._isShown||y.trigger(this._element,"show.bs.offcanvas",{relatedTarget:r}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Dn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Oa),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Na),this._element.classList.remove(Oa),y.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:r})},this._element,!0))}hide(){this._isShown&&(y.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Da),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Na,Da),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Dn().reset(),y.trigger(this._element,Ma)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let r=Boolean(this._config.backdrop);return new _a({className:"offcanvas-backdrop",isVisible:r,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:r?()=>{this._config.backdrop!=="static"?this.hide():y.trigger(this._element,La)}:null})}_initializeFocusTrap(){return new Ea({trapElement:this._element})}_addEventListeners(){y.on(this._element,"keydown.dismiss.bs.offcanvas",r=>{r.key==="Escape"&&(this._config.keyboard?this.hide():y.trigger(this._element,La))})}static jQueryInterface(r){return this.each(function(){let n=Be.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);n[r](this)}})}}y.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(a){let r=i(this);if(["A","AREA"].includes(this.tagName)&&a.preventDefault(),_(this))return;y.one(r,Ma,()=>{x(this)&&this.focus()});let n=M.findOne(Ia);n&&n!==r&&Be.getInstance(n).hide(),Be.getOrCreateInstance(r).toggle(this)}),y.on(window,"load.bs.offcanvas.data-api",()=>{for(let a of M.find(Ia))Be.getOrCreateInstance(a).show()}),y.on(window,"resize.bs.offcanvas",()=>{for(let a of M.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(a).position!=="fixed"&&Be.getOrCreateInstance(a).hide()}),Me(Be),nt(Be);let Bl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Fl=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Hl=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ul=(a,r)=>{let n=a.nodeName.toLowerCase();return r.includes(n)?!Bl.has(n)||Boolean(Fl.test(a.nodeValue)||Hl.test(a.nodeValue)):r.filter(l=>l instanceof RegExp).some(l=>l.test(n))},za={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$l={allowList:za,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Gl={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Yl={entry:"(string|element|function|null)",selector:"(string|element)"};class Wl extends zt{constructor(r){super(),this._config=this._getConfig(r)}static get Default(){return $l}static get DefaultType(){return Gl}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(r=>this._resolvePossibleFunction(r)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(r){return this._checkContent(r),this._config.content={...this._config.content,...r},this}toHtml(){let r=document.createElement("div");r.innerHTML=this._maybeSanitize(this._config.template);for(let[p,f]of Object.entries(this._config.content))this._setContent(r,f,p);let n=r.children[0],l=this._resolvePossibleFunction(this._config.extraClass);return l&&n.classList.add(...l.split(" ")),n}_typeCheckConfig(r){super._typeCheckConfig(r),this._checkContent(r.content)}_checkContent(r){for(let[n,l]of Object.entries(r))super._typeCheckConfig({selector:n,entry:l},Yl)}_setContent(r,n,l){let p=M.findOne(l,r);p&&((n=this._resolvePossibleFunction(n))?c(n)?this._putElementInTemplate(u(n),p):this._config.html?p.innerHTML=this._maybeSanitize(n):p.textContent=n:p.remove())}_maybeSanitize(r){return this._config.sanitize?function(n,l,p){if(!n.length)return n;if(p&&typeof p=="function")return p(n);let f=new window.DOMParser().parseFromString(n,"text/html"),b=[].concat(...f.body.querySelectorAll("*"));for(let k of b){let S=k.nodeName.toLowerCase();if(!Object.keys(l).includes(S)){k.remove();continue}let D=[].concat(...k.attributes),I=[].concat(l["*"]||[],l[S]||[]);for(let N of D)Ul(N,I)||k.removeAttribute(N.nodeName)}return f.body.innerHTML}(r,this._config.allowList,this._config.sanitizeFn):r}_resolvePossibleFunction(r){return typeof r=="function"?r(this):r}_putElementInTemplate(r,n){if(this._config.html)return n.innerHTML="",void n.append(r);n.textContent=r.textContent}}let ql=new Set(["sanitize","allowList","sanitizeFn"]),Ln="fade",Co="show",ja=".modal",Ra="hide.bs.modal",Ao="hover",Pa="focus",Vl={AUTO:"auto",TOP:"top",RIGHT:G()?"left":"right",BOTTOM:"bottom",LEFT:G()?"right":"left"},Xl={allowList:za,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Kl={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class gr extends Tt{constructor(r,n){if(ma===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(r,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Xl}static get DefaultType(){return Kl}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(ja),Ra,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;let r=y.trigger(this._element,this.constructor.eventName("show")),n=(A(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(r.defaultPrevented||!n)return;this._disposePopper();let l=this._getTipElement();this._element.setAttribute("aria-describedby",l.getAttribute("id"));let{container:p}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(p.append(l),y.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(l),l.classList.add(Co),"ontouchstart"in document.documentElement)for(let f of[].concat(...document.body.children))y.on(f,"mouseover",L);this._queueCallback(()=>{y.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!y.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Co),"ontouchstart"in document.documentElement)for(let r of[].concat(...document.body.children))y.off(r,"mouseover",L);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(r){let n=this._getTemplateFactory(r).toHtml();if(!n)return null;n.classList.remove(Ln,Co),n.classList.add(`bs-${this.constructor.NAME}-auto`);let l=(p=>{do p+=Math.floor(1e6*Math.random());while(document.getElementById(p));return p})(this.constructor.NAME).toString();return n.setAttribute("id",l),this._isAnimated()&&n.classList.add(Ln),n}setContent(r){this._newContent=r,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(r){return this._templateFactory?this._templateFactory.changeContent(r):this._templateFactory=new Wl({...this._config,content:r,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(r){return this.constructor.getOrCreateInstance(r.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ln)}_isShown(){return this.tip&&this.tip.classList.contains(Co)}_createPopper(r){let n=typeof this._config.placement=="function"?this._config.placement.call(this,r,this._element):this._config.placement,l=Vl[n.toUpperCase()];return On(this._element,r,this._getPopperConfig(l))}_getOffset(){let{offset:r}=this._config;return typeof r=="string"?r.split(",").map(n=>Number.parseInt(n,10)):typeof r=="function"?n=>r(n,this._element):r}_resolvePossibleFunction(r){return typeof r=="function"?r.call(this._element):r}_getPopperConfig(r){let n={placement:r,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:l=>{this._getTipElement().setAttribute("data-popper-placement",l.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){let r=this._config.trigger.split(" ");for(let n of r)if(n==="click")y.on(this._element,this.constructor.eventName("click"),this._config.selector,l=>{this._initializeOnDelegatedTarget(l).toggle()});else if(n!=="manual"){let l=n===Ao?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),p=n===Ao?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");y.on(this._element,l,this._config.selector,f=>{let b=this._initializeOnDelegatedTarget(f);b._activeTrigger[f.type==="focusin"?Pa:Ao]=!0,b._enter()}),y.on(this._element,p,this._config.selector,f=>{let b=this._initializeOnDelegatedTarget(f);b._activeTrigger[f.type==="focusout"?Pa:Ao]=b._element.contains(f.relatedTarget),b._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(ja),Ra,this._hideModalHandler)}_fixTitle(){let r=this._element.getAttribute("title");r&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",r),this._element.setAttribute("data-bs-original-title",r),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(r,n){clearTimeout(this._timeout),this._timeout=setTimeout(r,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(r){let n=yt.getDataAttributes(this._element);for(let l of Object.keys(n))ql.has(l)&&delete n[l];return r={...n,...typeof r=="object"&&r?r:{}},r=this._mergeConfigObj(r),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}_configAfterMerge(r){return r.container=r.container===!1?document.body:u(r.container),typeof r.delay=="number"&&(r.delay={show:r.delay,hide:r.delay}),typeof r.title=="number"&&(r.title=r.title.toString()),typeof r.content=="number"&&(r.content=r.content.toString()),r}_getDelegateConfig(){let r={};for(let n in this._config)this.constructor.Default[n]!==this._config[n]&&(r[n]=this._config[n]);return r.selector=!1,r.trigger="manual",r}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(r){return this.each(function(){let n=gr.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0)throw new TypeError(`No method named "${r}"`);n[r]()}})}}nt(gr);let Jl={...gr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Zl={...gr.DefaultType,content:"(null|string|element|function)"};class No extends gr{static get Default(){return Jl}static get DefaultType(){return Zl}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(r){return this.each(function(){let n=No.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0)throw new TypeError(`No method named "${r}"`);n[r]()}})}}nt(No);let Ba="click.bs.scrollspy",Jr="active",Fa="[href]",Ql={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},tc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Zr extends Tt{constructor(r,n){super(r,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ql}static get DefaultType(){return tc}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let r of this._observableSections.values())this._observer.observe(r)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(r){return r.target=u(r.target)||document.body,r.rootMargin=r.offset?`${r.offset}px 0px -30%`:r.rootMargin,typeof r.threshold=="string"&&(r.threshold=r.threshold.split(",").map(n=>Number.parseFloat(n))),r}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,Ba),y.on(this._config.target,Ba,Fa,r=>{let n=this._observableSections.get(r.target.hash);if(n){r.preventDefault();let l=this._rootElement||window,p=n.offsetTop-this._element.offsetTop;if(l.scrollTo)return void l.scrollTo({top:p,behavior:"smooth"});l.scrollTop=p}}))}_getNewObserver(){let r={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),r)}_observerCallback(r){let n=b=>this._targetLinks.get(`#${b.target.id}`),l=b=>{this._previousScrollData.visibleEntryTop=b.target.offsetTop,this._process(n(b))},p=(this._rootElement||document.documentElement).scrollTop,f=p>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=p;for(let b of r){if(!b.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(b));continue}let k=b.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(f&&k){if(l(b),!p)return}else f||k||l(b)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let r=M.find(Fa,this._config.target);for(let n of r){if(!n.hash||_(n))continue;let l=M.findOne(n.hash,this._element);x(l)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,l))}}_process(r){this._activeTarget!==r&&(this._clearActiveClass(this._config.target),this._activeTarget=r,r.classList.add(Jr),this._activateParents(r),y.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:r}))}_activateParents(r){if(r.classList.contains("dropdown-item"))M.findOne(".dropdown-toggle",r.closest(".dropdown")).classList.add(Jr);else for(let n of M.parents(r,".nav, .list-group"))for(let l of M.prev(n,".nav-link, .nav-item > .nav-link, .list-group-item"))l.classList.add(Jr)}_clearActiveClass(r){r.classList.remove(Jr);let n=M.find("[href].active",r);for(let l of n)l.classList.remove(Jr)}static jQueryInterface(r){return this.each(function(){let n=Zr.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);n[r]()}})}}y.on(window,"load.bs.scrollspy.data-api",()=>{for(let a of M.find('[data-bs-spy="scroll"]'))Zr.getOrCreateInstance(a)}),nt(Zr);let ec="ArrowLeft",Ha="ArrowRight",rc="ArrowUp",Ua="ArrowDown",Oo="active",$a="fade",Mn="show",Ga='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ga}`;class hr extends Tt{constructor(r){super(r),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,"keydown.bs.tab",n=>this._keydown(n)))}static get NAME(){return"tab"}show(){let r=this._element;if(this._elemIsActive(r))return;let n=this._getActiveElem(),l=n?y.trigger(n,"hide.bs.tab",{relatedTarget:r}):null;y.trigger(r,"show.bs.tab",{relatedTarget:n}).defaultPrevented||l&&l.defaultPrevented||(this._deactivate(n,r),this._activate(r,n))}_activate(r,n){r&&(r.classList.add(Oo),this._activate(i(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.removeAttribute("tabindex"),r.setAttribute("aria-selected",!0),this._toggleDropDown(r,!0),y.trigger(r,"shown.bs.tab",{relatedTarget:n})):r.classList.add(Mn)},r,r.classList.contains($a)))}_deactivate(r,n){r&&(r.classList.remove(Oo),r.blur(),this._deactivate(i(r)),this._queueCallback(()=>{r.getAttribute("role")==="tab"?(r.setAttribute("aria-selected",!1),r.setAttribute("tabindex","-1"),this._toggleDropDown(r,!1),y.trigger(r,"hidden.bs.tab",{relatedTarget:n})):r.classList.remove(Mn)},r,r.classList.contains($a)))}_keydown(r){if(![ec,Ha,rc,Ua].includes(r.key))return;r.stopPropagation(),r.preventDefault();let n=[Ha,Ua].includes(r.key),l=mt(this._getChildren().filter(p=>!_(p)),r.target,n,!0);l&&(l.focus({preventScroll:!0}),hr.getOrCreateInstance(l).show())}_getChildren(){return M.find(zn,this._parent)}_getActiveElem(){return this._getChildren().find(r=>this._elemIsActive(r))||null}_setInitialAttributes(r,n){this._setAttributeIfNotExists(r,"role","tablist");for(let l of n)this._setInitialAttributesOnChild(l)}_setInitialAttributesOnChild(r){r=this._getInnerElement(r);let n=this._elemIsActive(r),l=this._getOuterElement(r);r.setAttribute("aria-selected",n),l!==r&&this._setAttributeIfNotExists(l,"role","presentation"),n||r.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(r,"role","tab"),this._setInitialAttributesOnTargetPanel(r)}_setInitialAttributesOnTargetPanel(r){let n=i(r);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),r.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${r.id}`))}_toggleDropDown(r,n){let l=this._getOuterElement(r);if(!l.classList.contains("dropdown"))return;let p=(f,b)=>{let k=M.findOne(f,l);k&&k.classList.toggle(b,n)};p(".dropdown-toggle",Oo),p(".dropdown-menu",Mn),l.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(r,n,l){r.hasAttribute(n)||r.setAttribute(n,l)}_elemIsActive(r){return r.classList.contains(Oo)}_getInnerElement(r){return r.matches(zn)?r:M.findOne(zn,r)}_getOuterElement(r){return r.closest(".nav-item, .list-group-item")||r}static jQueryInterface(r){return this.each(function(){let n=hr.getOrCreateInstance(this);if(typeof r=="string"){if(n[r]===void 0||r.startsWith("_")||r==="constructor")throw new TypeError(`No method named "${r}"`);n[r]()}})}}y.on(document,"click.bs.tab",Ga,function(a){["A","AREA"].includes(this.tagName)&&a.preventDefault(),_(this)||hr.getOrCreateInstance(this).show()}),y.on(window,"load.bs.tab",()=>{for(let a of M.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))hr.getOrCreateInstance(a)}),nt(hr);let Ya="hide",Do="show",Io="showing",oc={animation:"boolean",autohide:"boolean",delay:"number"},nc={animation:!0,autohide:!0,delay:5e3};class Qr extends Tt{constructor(r,n){super(r,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return nc}static get DefaultType(){return oc}static get NAME(){return"toast"}show(){y.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ya),C(this._element),this._element.classList.add(Do,Io),this._queueCallback(()=>{this._element.classList.remove(Io),y.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(y.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Io),this._queueCallback(()=>{this._element.classList.add(Ya),this._element.classList.remove(Io,Do),y.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Do),super.dispose()}isShown(){return this._element.classList.contains(Do)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(r,n){switch(r.type){case"mouseover":case"mouseout":this._hasMouseInteraction=n;break;case"focusin":case"focusout":this._hasKeyboardInteraction=n}if(n)return void this._clearTimeout();let l=r.relatedTarget;this._element===l||this._element.contains(l)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,"mouseover.bs.toast",r=>this._onInteraction(r,!0)),y.on(this._element,"mouseout.bs.toast",r=>this._onInteraction(r,!1)),y.on(this._element,"focusin.bs.toast",r=>this._onInteraction(r,!0)),y.on(this._element,"focusout.bs.toast",r=>this._onInteraction(r,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(r){return this.each(function(){let n=Qr.getOrCreateInstance(this,r);if(typeof r=="string"){if(n[r]===void 0)throw new TypeError(`No method named "${r}"`);n[r](this)}})}}return Me(Qr),nt(Qr),{Alert:Wt,Button:ht,Carousel:Je,Collapse:je,Dropdown:se,Modal:fr,Offcanvas:Be,Popover:No,ScrollSpy:Zr,Tab:hr,Toast:Qr,Tooltip:gr}})});(function(){"use strict";var e=window.Document.prototype.createElement,t=window.Document.prototype.createElementNS,o=window.Document.prototype.importNode,i=window.Document.prototype.prepend,s=window.Document.prototype.append,c=window.DocumentFragment.prototype.prepend,u=window.DocumentFragment.prototype.append,x=window.Node.prototype.cloneNode,_=window.Node.prototype.appendChild,A=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,C=window.Node.prototype.replaceChild,q=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),rt=window.Element.prototype.attachShadow,G=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),nt=window.Element.prototype.getAttribute,at=window.Element.prototype.setAttribute,xt=window.Element.prototype.removeAttribute,mt=window.Element.prototype.getAttributeNS,Mt=window.Element.prototype.setAttributeNS,Et=window.Element.prototype.removeAttributeNS,St=window.Element.prototype.insertAdjacentElement,ie=window.Element.prototype.insertAdjacentHTML,vt=window.Element.prototype.prepend,_t=window.Element.prototype.append,gt=window.Element.prototype.before,ut=window.Element.prototype.after,$t=window.Element.prototype.replaceWith,Gt=window.Element.prototype.remove,lr=window.HTMLElement,Ne=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Oe=window.HTMLElement.prototype.insertAdjacentElement,De=window.HTMLElement.prototype.insertAdjacentHTML,Ie=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(d){return Ie.add(d)});function y(d){var m=Ie.has(d);return d=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(d),!m&&d}var Yt=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function W(d){var m=d.isConnected;if(m!==void 0)return m;if(Yt(d))return!0;for(;d&&!(d.__CE_isImportDocument||d instanceof Document);)d=d.parentNode||(window.ShadowRoot&&d instanceof ShadowRoot?d.host:void 0);return!(!d||!(d.__CE_isImportDocument||d instanceof Document))}function he(d){var m=d.children;if(m)return Array.prototype.slice.call(m);for(m=[],d=d.firstChild;d;d=d.nextSibling)d.nodeType===Node.ELEMENT_NODE&&m.push(d);return m}function Le(d,m){for(;m&&m!==d&&!m.nextSibling;)m=m.parentNode;return m&&m!==d?m.nextSibling:null}function be(d,m,g){for(var w=d;w;){if(w.nodeType===Node.ELEMENT_NODE){var h=w;m(h);var v=h.localName;if(v==="link"&&h.getAttribute("rel")==="import"){if(w=h.import,g===void 0&&(g=new Set),w instanceof Node&&!g.has(w))for(g.add(w),w=w.firstChild;w;w=w.nextSibling)be(w,m,g);w=Le(d,h);continue}else if(v==="template"){w=Le(d,h);continue}if(h=h.__CE_shadowRoot)for(h=h.firstChild;h;h=h.nextSibling)be(h,m,g)}w=w.firstChild?w.firstChild:Le(d,w)}}function yt(){var d=!(Xt==null||!Xt.noDocumentConstructionObserver),m=!(Xt==null||!Xt.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=m,this.I=!d}function zt(d,m,g,w){var h=window.ShadyDOM;if(d.shadyDomFastWalk&&h&&h.inUse){if(m.nodeType===Node.ELEMENT_NODE&&g(m),m.querySelectorAll)for(d=h.nativeMethods.querySelectorAll.call(m,"*"),m=0;m<d.length;m++)g(d[m])}else be(m,g,w)}function Tt(d,m){d.j=!0,d.m.push(m)}function Me(d,m){d.j=!0,d.g.push(m)}function Wt(d,m){d.j&&zt(d,m,function(g){return qt(d,g)})}function qt(d,m){if(d.j&&!m.__CE_patched){m.__CE_patched=!0;for(var g=0;g<d.m.length;g++)d.m[g](m);for(g=0;g<d.g.length;g++)d.g[g](m)}}function ht(d,m){var g=[];for(zt(d,m,function(h){return g.push(h)}),m=0;m<g.length;m++){var w=g[m];w.__CE_state===1?d.connectedCallback(w):ze(d,w)}}function M(d,m){var g=[];for(zt(d,m,function(h){return g.push(h)}),m=0;m<g.length;m++){var w=g[m];w.__CE_state===1&&d.disconnectedCallback(w)}}function jt(d,m,g){g=g===void 0?{}:g;var w=g.J,h=g.upgrade||function(E){return ze(d,E)},v=[];for(zt(d,m,function(E){if(d.j&&qt(d,E),E.localName==="link"&&E.getAttribute("rel")==="import"){var T=E.import;T instanceof Node&&(T.__CE_isImportDocument=!0,T.__CE_registry=document.__CE_registry),T&&T.readyState==="complete"?T.__CE_documentLoadHandled=!0:E.addEventListener("load",function(){var O=E.import;if(!O.__CE_documentLoadHandled){O.__CE_documentLoadHandled=!0;var P=new Set;w&&(w.forEach(function(X){return P.add(X)}),P.delete(O)),jt(d,O,{J:P,upgrade:h})}})}else v.push(E)},w),m=0;m<v.length;m++)h(v[m])}function ze(d,m){try{var g=m.ownerDocument,w=g.__CE_registry,h=w&&(g.defaultView||g.__CE_isImportDocument)?kr(w,m.localName):void 0;if(h&&m.__CE_state===void 0){h.constructionStack.push(m);try{try{if(new h.constructorFunction!==m)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{h.constructionStack.pop()}}catch(O){throw m.__CE_state=2,O}if(m.__CE_state=1,m.__CE_definition=h,h.attributeChangedCallback&&m.hasAttributes()){var v=h.observedAttributes;for(h=0;h<v.length;h++){var E=v[h],T=m.getAttribute(E);T!==null&&d.attributeChangedCallback(m,E,null,T,null)}}W(m)&&d.connectedCallback(m)}}catch(O){Ct(O)}}yt.prototype.connectedCallback=function(d){var m=d.__CE_definition;if(m.connectedCallback)try{m.connectedCallback.call(d)}catch(g){Ct(g)}},yt.prototype.disconnectedCallback=function(d){var m=d.__CE_definition;if(m.disconnectedCallback)try{m.disconnectedCallback.call(d)}catch(g){Ct(g)}},yt.prototype.attributeChangedCallback=function(d,m,g,w,h){var v=d.__CE_definition;if(v.attributeChangedCallback&&-1<v.observedAttributes.indexOf(m))try{v.attributeChangedCallback.call(d,m,g,w,h)}catch(E){Ct(E)}};function ae(d,m,g,w){var h=m.__CE_registry;if(h&&(w===null||w==="http://www.w3.org/1999/xhtml")&&(h=kr(h,g)))try{var v=new h.constructorFunction;if(v.__CE_state===void 0||v.__CE_definition===void 0)throw Error("Failed to construct '"+g+"': The returned value was not constructed with the HTMLElement constructor.");if(v.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+g+"': The constructed element's namespace must be the HTML namespace.");if(v.hasAttributes())throw Error("Failed to construct '"+g+"': The constructed element must not have any attributes.");if(v.firstChild!==null)throw Error("Failed to construct '"+g+"': The constructed element must not have any children.");if(v.parentNode!==null)throw Error("Failed to construct '"+g+"': The constructed element must not have a parent node.");if(v.ownerDocument!==m)throw Error("Failed to construct '"+g+"': The constructed element's owner document is incorrect.");if(v.localName!==g)throw Error("Failed to construct '"+g+"': The constructed element's local name is incorrect.");return v}catch(E){return Ct(E),m=w===null?e.call(m,g):t.call(m,w,g),Object.setPrototypeOf(m,HTMLUnknownElement.prototype),m.__CE_state=2,m.__CE_definition=void 0,qt(d,m),m}return m=w===null?e.call(m,g):t.call(m,w,g),qt(d,m),m}function Ct(d){var m="",g="",w=0,h=0;d instanceof Error?(m=d.message,g=d.sourceURL||d.fileName||"",w=d.line||d.lineNumber||0,h=d.column||d.columnNumber||0):m="Uncaught "+String(d);var v=void 0;ErrorEvent.prototype.initErrorEvent===void 0?v=new ErrorEvent("error",{cancelable:!0,message:m,filename:g,lineno:w,colno:h,error:d}):(v=document.createEvent("ErrorEvent"),v.initErrorEvent("error",!1,!0,m,g,w),v.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),v.error===void 0&&Object.defineProperty(v,"error",{configurable:!0,enumerable:!0,get:function(){return d}}),window.dispatchEvent(v),v.defaultPrevented||console.error(d)}function ft(){var d=this;this.g=void 0,this.F=new Promise(function(m){d.l=m})}ft.prototype.resolve=function(d){if(this.g)throw Error("Already resolved.");this.g=d,this.l(d)};function Vt(d){var m=document;this.l=void 0,this.h=d,this.g=m,jt(this.h,this.g),this.g.readyState==="loading"&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function Bt(d){d.l&&d.l.disconnect()}Vt.prototype.G=function(d){var m=this.g.readyState;for(m!=="interactive"&&m!=="complete"||Bt(this),m=0;m<d.length;m++)for(var g=d[m].addedNodes,w=0;w<g.length;w++)jt(this.h,g[w])};function st(d){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(m){return m()},this.i=!1,this.v=[],this.h=d,this.D=d.I?new Vt(d):void 0}st.prototype.H=function(d,m){var g=this;if(!(m instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");$r(this,d),this.s.set(d,m),this.v.push(d),this.i||(this.i=!0,this.o(function(){return wo(g)}))},st.prototype.define=function(d,m){var g=this;if(!(m instanceof Function))throw new TypeError("Custom element constructors must be functions.");$r(this,d),cr(this,d,m),this.v.push(d),this.i||(this.i=!0,this.o(function(){return wo(g)}))};function $r(d,m){if(!y(m))throw new SyntaxError("The element name '"+m+"' is not valid.");if(kr(d,m))throw Error("A custom element with name '"+(m+"' has already been defined."));if(d.A)throw Error("A custom element is already being defined.")}function cr(d,m,g){d.A=!0;var w;try{var h=g.prototype;if(!(h instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var v=function(X){var Re=h[X];if(Re!==void 0&&!(Re instanceof Function))throw Error("The '"+X+"' callback must be a function.");return Re},E=v("connectedCallback"),T=v("disconnectedCallback"),O=v("adoptedCallback"),P=(w=v("attributeChangedCallback"))&&g.observedAttributes||[]}catch(X){throw X}finally{d.A=!1}return g={localName:m,constructorFunction:g,connectedCallback:E,disconnectedCallback:T,adoptedCallback:O,attributeChangedCallback:w,observedAttributes:P,constructionStack:[]},d.u.set(m,g),d.C.set(g.constructorFunction,g),g}st.prototype.upgrade=function(d){jt(this.h,d)};function wo(d){if(d.i!==!1){d.i=!1;for(var m=[],g=d.v,w=new Map,h=0;h<g.length;h++)w.set(g[h],[]);for(jt(d.h,document,{upgrade:function(O){if(O.__CE_state===void 0){var P=O.localName,X=w.get(P);X?X.push(O):d.u.has(P)&&m.push(O)}}}),h=0;h<m.length;h++)ze(d.h,m[h]);for(h=0;h<g.length;h++){for(var v=g[h],E=w.get(v),T=0;T<E.length;T++)ze(d.h,E[T]);(v=d.B.get(v))&&v.resolve(void 0)}g.length=0}}st.prototype.get=function(d){if(d=kr(this,d))return d.constructorFunction},st.prototype.whenDefined=function(d){if(!y(d))return Promise.reject(new SyntaxError("'"+d+"' is not a valid custom element name."));var m=this.B.get(d);if(m)return m.F;m=new ft,this.B.set(d,m);var g=this.u.has(d)||this.s.has(d);return d=this.v.indexOf(d)===-1,g&&d&&m.resolve(void 0),m.F},st.prototype.polyfillWrapFlushCallback=function(d){this.D&&Bt(this.D);var m=this.o;this.o=function(g){return d(function(){return m(g)})}};function kr(d,m){var g=d.u.get(m);if(g)return g;if(g=d.s.get(m)){d.s.delete(m);try{return cr(d,m,g())}catch(w){Ct(w)}}}st.prototype.define=st.prototype.define,st.prototype.upgrade=st.prototype.upgrade,st.prototype.get=st.prototype.get,st.prototype.whenDefined=st.prototype.whenDefined,st.prototype.polyfillDefineLazy=st.prototype.H,st.prototype.polyfillWrapFlushCallback=st.prototype.polyfillWrapFlushCallback;function Gr(d,m,g){function w(h){return function(v){for(var E=[],T=0;T<arguments.length;++T)E[T]=arguments[T];T=[];for(var O=[],P=0;P<E.length;P++){var X=E[P];if(X instanceof Element&&W(X)&&O.push(X),X instanceof DocumentFragment)for(X=X.firstChild;X;X=X.nextSibling)T.push(X);else T.push(X)}for(h.apply(this,E),E=0;E<O.length;E++)M(d,O[E]);if(W(this))for(E=0;E<T.length;E++)O=T[E],O instanceof Element&&ht(d,O)}}g.prepend!==void 0&&(m.prepend=w(g.prepend)),g.append!==void 0&&(m.append=w(g.append))}function Je(d){Document.prototype.createElement=function(m){return ae(d,this,m,null)},Document.prototype.importNode=function(m,g){return m=o.call(this,m,!!g),this.__CE_registry?jt(d,m):Wt(d,m),m},Document.prototype.createElementNS=function(m,g){return ae(d,this,g,m)},Gr(d,Document.prototype,{prepend:i,append:s})}function Yr(d){function m(w){return function(h){for(var v=[],E=0;E<arguments.length;++E)v[E]=arguments[E];E=[];for(var T=[],O=0;O<v.length;O++){var P=v[O];if(P instanceof Element&&W(P)&&T.push(P),P instanceof DocumentFragment)for(P=P.firstChild;P;P=P.nextSibling)E.push(P);else E.push(P)}for(w.apply(this,v),v=0;v<T.length;v++)M(d,T[v]);if(W(this))for(v=0;v<E.length;v++)T=E[v],T instanceof Element&&ht(d,T)}}var g=Element.prototype;gt!==void 0&&(g.before=m(gt)),ut!==void 0&&(g.after=m(ut)),$t!==void 0&&(g.replaceWith=function(w){for(var h=[],v=0;v<arguments.length;++v)h[v]=arguments[v];v=[];for(var E=[],T=0;T<h.length;T++){var O=h[T];if(O instanceof Element&&W(O)&&E.push(O),O instanceof DocumentFragment)for(O=O.firstChild;O;O=O.nextSibling)v.push(O);else v.push(O)}for(T=W(this),$t.apply(this,h),h=0;h<E.length;h++)M(d,E[h]);if(T)for(M(d,this),h=0;h<v.length;h++)E=v[h],E instanceof Element&&ht(d,E)}),Gt!==void 0&&(g.remove=function(){var w=W(this);Gt.call(this),w&&M(d,this)})}function Er(d){function m(h,v){Object.defineProperty(h,"innerHTML",{enumerable:v.enumerable,configurable:!0,get:v.get,set:function(E){var T=this,O=void 0;if(W(this)&&(O=[],zt(d,this,function(Re){Re!==T&&O.push(Re)})),v.set.call(this,E),O)for(var P=0;P<O.length;P++){var X=O[P];X.__CE_state===1&&d.disconnectedCallback(X)}return this.ownerDocument.__CE_registry?jt(d,this):Wt(d,this),E}})}function g(h,v){h.insertAdjacentElement=function(E,T){var O=W(T);return E=v.call(this,E,T),O&&M(d,T),W(E)&&ht(d,T),E}}function w(h,v){function E(T,O){for(var P=[];T!==O;T=T.nextSibling)P.push(T);for(O=0;O<P.length;O++)jt(d,P[O])}h.insertAdjacentHTML=function(T,O){if(T=T.toLowerCase(),T==="beforebegin"){var P=this.previousSibling;v.call(this,T,O),E(P||this.parentNode.firstChild,this)}else if(T==="afterbegin")P=this.firstChild,v.call(this,T,O),E(this.firstChild,P);else if(T==="beforeend")P=this.lastChild,v.call(this,T,O),E(P||this.firstChild,null);else if(T==="afterend")P=this.nextSibling,v.call(this,T,O),E(this.nextSibling,P);else throw new SyntaxError("The value provided ("+String(T)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}rt&&(Element.prototype.attachShadow=function(h){if(h=rt.call(this,h),d.j&&!h.__CE_patched){h.__CE_patched=!0;for(var v=0;v<d.m.length;v++)d.m[v](h)}return this.__CE_shadowRoot=h}),G&&G.get?m(Element.prototype,G):Ne&&Ne.get?m(HTMLElement.prototype,Ne):Me(d,function(h){m(h,{enumerable:!0,configurable:!0,get:function(){return x.call(this,!0).innerHTML},set:function(v){var E=this.localName==="template",T=E?this.content:this,O=t.call(document,this.namespaceURI,this.localName);for(O.innerHTML=v;0<T.childNodes.length;)L.call(T,T.childNodes[0]);for(v=E?O.content:O;0<v.childNodes.length;)_.call(T,v.childNodes[0])}})}),Element.prototype.setAttribute=function(h,v){if(this.__CE_state!==1)return at.call(this,h,v);var E=nt.call(this,h);at.call(this,h,v),v=nt.call(this,h),d.attributeChangedCallback(this,h,E,v,null)},Element.prototype.setAttributeNS=function(h,v,E){if(this.__CE_state!==1)return Mt.call(this,h,v,E);var T=mt.call(this,h,v);Mt.call(this,h,v,E),E=mt.call(this,h,v),d.attributeChangedCallback(this,v,T,E,h)},Element.prototype.removeAttribute=function(h){if(this.__CE_state!==1)return xt.call(this,h);var v=nt.call(this,h);xt.call(this,h),v!==null&&d.attributeChangedCallback(this,h,v,null,null)},Element.prototype.removeAttributeNS=function(h,v){if(this.__CE_state!==1)return Et.call(this,h,v);var E=mt.call(this,h,v);Et.call(this,h,v);var T=mt.call(this,h,v);E!==T&&d.attributeChangedCallback(this,v,E,T,h)},Oe?g(HTMLElement.prototype,Oe):St&&g(Element.prototype,St),De?w(HTMLElement.prototype,De):ie&&w(Element.prototype,ie),Gr(d,Element.prototype,{prepend:vt,append:_t}),Yr(d)}var dr={};function Wr(d){function m(){var g=this.constructor,w=document.__CE_registry.C.get(g);if(!w)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var h=w.constructionStack;if(h.length===0)return h=e.call(document,w.localName),Object.setPrototypeOf(h,g.prototype),h.__CE_state=1,h.__CE_definition=w,qt(d,h),h;var v=h.length-1,E=h[v];if(E===dr)throw Error("Failed to construct '"+w.localName+"': This element was already constructed.");return h[v]=dr,Object.setPrototypeOf(E,g.prototype),qt(d,E),E}m.prototype=lr.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:m}),window.HTMLElement=m}function gn(d){function m(g,w){Object.defineProperty(g,"textContent",{enumerable:w.enumerable,configurable:!0,get:w.get,set:function(h){if(this.nodeType===Node.TEXT_NODE)w.set.call(this,h);else{var v=void 0;if(this.firstChild){var E=this.childNodes,T=E.length;if(0<T&&W(this)){v=Array(T);for(var O=0;O<T;O++)v[O]=E[O]}}if(w.set.call(this,h),v)for(h=0;h<v.length;h++)M(d,v[h])}}})}Node.prototype.insertBefore=function(g,w){if(g instanceof DocumentFragment){var h=he(g);if(g=A.call(this,g,w),W(this))for(w=0;w<h.length;w++)ht(d,h[w]);return g}return h=g instanceof Element&&W(g),w=A.call(this,g,w),h&&M(d,g),W(this)&&ht(d,g),w},Node.prototype.appendChild=function(g){if(g instanceof DocumentFragment){var w=he(g);if(g=_.call(this,g),W(this))for(var h=0;h<w.length;h++)ht(d,w[h]);return g}return w=g instanceof Element&&W(g),h=_.call(this,g),w&&M(d,g),W(this)&&ht(d,g),h},Node.prototype.cloneNode=function(g){return g=x.call(this,!!g),this.ownerDocument.__CE_registry?jt(d,g):Wt(d,g),g},Node.prototype.removeChild=function(g){var w=g instanceof Element&&W(g),h=L.call(this,g);return w&&M(d,g),h},Node.prototype.replaceChild=function(g,w){if(g instanceof DocumentFragment){var h=he(g);if(g=C.call(this,g,w),W(this))for(M(d,w),w=0;w<h.length;w++)ht(d,h[w]);return g}h=g instanceof Element&&W(g);var v=C.call(this,g,w),E=W(this);return E&&M(d,w),h&&M(d,g),E&&ht(d,g),v},q&&q.get?m(Node.prototype,q):Tt(d,function(g){m(g,{enumerable:!0,configurable:!0,get:function(){for(var w=[],h=this.firstChild;h;h=h.nextSibling)h.nodeType!==Node.COMMENT_NODE&&w.push(h.textContent);return w.join("")},set:function(w){for(;this.firstChild;)L.call(this,this.firstChild);w!=null&&w!==""&&_.call(this,document.createTextNode(w))}})})}var Xt=window.customElements;function je(){var d=new yt;Wr(d),Je(d),Gr(d,DocumentFragment.prototype,{prepend:c,append:u}),gn(d),Er(d),window.CustomElementRegistry=st,d=new st(d),document.__CE_registry=d,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:d})}Xt&&!Xt.forcePolyfill&&typeof Xt.define=="function"&&typeof Xt.get=="function"||je(),window.__CE_installPolyfill=je}).call(self);var Un=vc(is());var as=`@charset "UTF-8";
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
  content: "\u2014 ";
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
`;var ss=`<div class="container" style="margin-top: 100px;">  
    <div class="options-container"></div>
    <div class="row" style="display:none">
      <div class="col">
        <ul class="list-group">

          <!--Checkbox -->
          <li class="checkbox-template list-group-item p-4 d-flex justify-content-between align-items-center">
            <div class="ms-2 me-5">
              <div class="fw-bold control-title">Subheading title</div>
              <small class="control-description disabled">Content for list item ent for list item ent for list ent for
                list item ent for list ent for list item ent for list ent for list item ent for list</small>
            </div>
            <input class="control-input form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
          </li>


          <!--Select -->
          <li class="select-template list-group-item p-4 d-flex justify-content-between align-items-center">
            <div class="ms-2 me-5">
              <div class="control-title fw-bold">Subheading title</div>
              <small class="control-description disabled">Content for list item ent for for list ent for list item ent
                for list</small>
            </div>
            <select class="control-input form-select form-select-md" aria-label="example" style="max-width: 200px">
              <!--<option>Open this select menu</option>-->
            </select>
          </li>

          <!--Range -->
          <li class="range-template list-group-item p-4">
            <div class="ms-2">
              <div class="control-title fw-bold">Subheading title</div>
              <small class="control-description disabled">Content for list item ent for list item ent for list</small>
              <input type="range" class="control-input form-range" min="0" max="5" id="customRange2" />
            </div>
          </li>

          <!--Switch  -->
          <li class="switch-template list-group-item p-4 d-flex justify-content-between align-items-center">
            <div class="ms-2 me-auto">
              <div class="control-title fw-bold">Subheading title</div>
              <small class="control-description disabled">Content for list item ent for list item ent for list</small>
            </div>
            <div class="form-check form-switch">
              <input class="control-input form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="true" />
            </div>
          </li>

          <!--Radio -->
          <li class="radio-template list-group-item p-4 d-flex justify-content-between align-items-center">
            <div class="ms-2 me-5">
              <div class="control-title fw-bold">Subheading title</div>
              <small class="control-description disabled">Content for list item ent for list item ent for list ent for
                list item ent for list ent for list item ent for list ent for list item ent for list</small>
            </div>
            <div class="control-input btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">Left</button>
              <button type="button" class="btn btn-primary">Middle</button>
              <button type="button" class="btn btn-primary">Right</button>
            </div>
          </li>

          <!--TextArea -->
          <li class="textarea-template list-group-item p-4 ">
            <div class="d-flex justify-content-between align-items-center">
              <div class="ms-2 me-auto">
                <div class="control-title fw-bold">Subheading title</div>
                <small class="control-description disabled">Content for list item ent for list item ent for list</small>

              </div>
              <div class="form-check form-switch">
                <i style="font-size: 1.5rem" data-bs-toggle="collapse"
                  data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
              </div>
            </div>
            <div class="collapse ms-2" id="collapseExample">
              <div class="form-group">
                <textarea class="control-input form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="../assets/logo-24x24.png" class="rounded me-2" alt="Logo" />
          <strong class="me-auto">Better Previews</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Successfully updated settings
        </div>
      </div>
    </div>
  </div>`;var to=class extends HTMLElement{constructor(o){super();this.configItems=o,this.attachShadow({mode:"open"})}connectedCallback(){console.log("SettingsUI added to page."),this.render(this.configItems)}disconnectedCallback(){console.log("SettingsUI element removed from page.")}adoptedCallback(){console.log("SettingsUI element moved to new page.")}render(o){let i=document.createElement("style");i.textContent=`
    ${as}
    
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
  `,this.template=document.createElement("div"),this.template.innerHTML=ss;let s=document.createElement("ul");s.className="list-group",o.forEach(c=>s.appendChild(this.cloneInput(c))),this.shadowRoot?.append(i,s)}async saveChange(o,i){console.debug("saving: ",o.id,i);let s={};o.value=i,s[o.id]=o,await chrome.storage.sync.set(s),this.showToast()}cloneInput(o){let i=this.template.getElementsByClassName(`${o.type}-template`)[0].cloneNode(!0);i.getElementsByClassName("control-title")[0].innerHTML=o.title,i.getElementsByClassName("control-description")[0].innerHTML=o.description;let s=u=>{let x=["checkbox","switch"].indexOf(o.type)>=0?u.target?.checked:u.target?.value;this.saveChange(o,x)},c=i.getElementsByClassName("control-input")[0];return["checkbox","switch"].indexOf(o.type)>=0?c.checked=!!o.value:c.value=o.value,o.type==="select"?c.addEventListener("change",s):c.addEventListener("input",s),o.type==="range"&&(c.min=o.min,c.max=o.max),o.type,i}showToast(){let o=this.shadowRoot?.querySelector(".toast-container");o||(o=this.template.querySelector(".toast-container"),this.shadowRoot?.append(o));let i=new Un.default.Toast(o.querySelector("#liveToast"));console.log("showing toast: ",Un.default,i),i.show()}};customElements.define("settings-ui",to);var ls=Object.prototype.toString;function eo(e){switch(ls.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return ee(e,Error)}}function Or(e,t){return ls.call(e)===`[object ${t}]`}function ro(e){return Or(e,"ErrorEvent")}function jo(e){return Or(e,"DOMError")}function $n(e){return Or(e,"DOMException")}function te(e){return Or(e,"String")}function Dr(e){return e===null||typeof e!="object"&&typeof e!="function"}function ce(e){return Or(e,"Object")}function Ir(e){return typeof Event<"u"&&ee(e,Event)}function Gn(e){return typeof Element<"u"&&ee(e,Element)}function Yn(e){return Or(e,"RegExp")}function xr(e){return Boolean(e&&e.then&&typeof e.then=="function")}function Wn(e){return ce(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function qn(e){return typeof e=="number"&&e!==e}function ee(e,t){try{return e instanceof t}catch{return!1}}function Ro(e){return e&&e.Math==Math?e:void 0}var At=typeof globalThis=="object"&&Ro(globalThis)||typeof window=="object"&&Ro(window)||typeof self=="object"&&Ro(self)||typeof global=="object"&&Ro(global)||function(){return this}()||{};function Fe(){return At}function wr(e,t,o){let i=o||At,s=i.__SENTRY__=i.__SENTRY__||{};return s[e]||(s[e]=t())}var kc=Fe(),Ec=80;function Lr(e,t={}){try{let o=e,i=5,s=[],c=0,u=0,x=" > ",_=x.length,A,L=Array.isArray(t)?t:t.keyAttrs,C=!Array.isArray(t)&&t.maxStringLength||Ec;for(;o&&c++<i&&(A=Sc(o,L),!(A==="html"||c>1&&u+s.length*_+A.length>=C));)s.push(A),u+=A.length,o=o.parentNode;return s.reverse().join(x)}catch{return"<unknown>"}}function Sc(e,t){let o=e,i=[],s,c,u,x,_;if(!o||!o.tagName)return"";i.push(o.tagName.toLowerCase());let A=t&&t.length?t.filter(C=>o.getAttribute(C)).map(C=>[C,o.getAttribute(C)]):null;if(A&&A.length)A.forEach(C=>{i.push(`[${C[0]}="${C[1]}"]`)});else if(o.id&&i.push(`#${o.id}`),s=o.className,s&&te(s))for(c=s.split(/\s+/),_=0;_<c.length;_++)i.push(`.${c[_]}`);let L=["aria-label","type","name","title","alt"];for(_=0;_<L.length;_++)u=L[_],x=o.getAttribute(u),x&&i.push(`[${u}="${x}"]`);return i.join("")}function Vn(){try{return kc.document.location.href}catch{return""}}var ct=class extends Error{constructor(t,o="warn"){super(t),this.message=t,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=o}};var Tc=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Cc(e){return e==="http"||e==="https"}function tr(e,t=!1){let{host:o,path:i,pass:s,port:c,projectId:u,protocol:x,publicKey:_}=e;return`${x}://${_}${t&&s?`:${s}`:""}@${o}${c?`:${c}`:""}/${i&&`${i}/`}${u}`}function cs(e){let t=Tc.exec(e);if(!t)throw new ct(`Invalid Sentry Dsn: ${e}`);let[o,i,s="",c,u="",x]=t.slice(1),_="",A=x,L=A.split("/");if(L.length>1&&(_=L.slice(0,-1).join("/"),A=L.pop()),A){let C=A.match(/^\d+/);C&&(A=C[0])}return ds({host:c,pass:s,path:_,projectId:A,port:u,protocol:o,publicKey:i})}function ds(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function Ac(e){if(!(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__))return;let{port:t,projectId:o,protocol:i}=e;if(["protocol","publicKey","host","projectId"].forEach(c=>{if(!e[c])throw new ct(`Invalid Sentry Dsn: ${c} missing`)}),!o.match(/^\d+$/))throw new ct(`Invalid Sentry Dsn: Invalid projectId ${o}`);if(!Cc(i))throw new ct(`Invalid Sentry Dsn: Invalid protocol ${i}`);if(t&&isNaN(parseInt(t,10)))throw new ct(`Invalid Sentry Dsn: Invalid port ${t}`);return!0}function Po(e){let t=typeof e=="string"?cs(e):ds(e);return Ac(t),t}var Nc="Sentry Logger ",Mr=["debug","info","warn","error","log","assert","trace"];function Bo(e){if(!("console"in At))return e();let t=At.console,o={};Mr.forEach(i=>{let s=t[i]&&t[i].__sentry_original__;i in t&&s&&(o[i]=t[i],t[i]=s)});try{return e()}finally{Object.keys(o).forEach(i=>{t[i]=o[i]})}}function ms(){let e=!1,t={enable:()=>{e=!0},disable:()=>{e=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?Mr.forEach(o=>{t[o]=(...i)=>{e&&Bo(()=>{At.console[o](`${Nc}[${o}]:`,...i)})}}):Mr.forEach(o=>{t[o]=()=>{}}),t}var z;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?z=wr("logger",ms):z=ms();function er(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function Fo(e,t){if(!Array.isArray(e))return"";let o=[];for(let i=0;i<e.length;i++){let s=e[i];try{o.push(String(s))}catch{o.push("[value cannot be serialized]")}}return o.join(t)}function ps(e,t,o=!1){return te(e)?Yn(t)?t.test(e):te(t)?o?e===t:e.includes(t):!1:!1}function oo(e,t=[],o=!1){return t.some(i=>ps(e,i,o))}function bt(e,t,o){if(!(t in e))return;let i=e[t],s=o(i);if(typeof s=="function")try{Ho(s,i)}catch{}e[t]=s}function zr(e,t,o){Object.defineProperty(e,t,{value:o,writable:!0,configurable:!0})}function Ho(e,t){let o=t.prototype||{};e.prototype=t.prototype=o,zr(e,"__sentry_original__",t)}function vr(e){return e.__sentry_original__}function Kn(e){return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&")}function Uo(e){if(eo(e))return{message:e.message,name:e.name,stack:e.stack,...fs(e)};if(Ir(e)){let t={type:e.type,target:us(e.target),currentTarget:us(e.currentTarget),...fs(e)};return typeof CustomEvent<"u"&&ee(e,CustomEvent)&&(t.detail=e.detail),t}else return e}function us(e){try{return Gn(e)?Lr(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function fs(e){if(typeof e=="object"&&e!==null){let t={};for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}else return{}}function Jn(e,t=40){let o=Object.keys(Uo(e));if(o.sort(),!o.length)return"[object has no keys]";if(o[0].length>=t)return er(o[0],t);for(let i=o.length;i>0;i--){let s=o.slice(0,i).join(", ");if(!(s.length>t))return i===o.length?s:er(s,t)}return""}function jr(e){return Xn(e,new Map)}function Xn(e,t){if(ce(e)){let o=t.get(e);if(o!==void 0)return o;let i={};t.set(e,i);for(let s of Object.keys(e))typeof e[s]<"u"&&(i[s]=Xn(e[s],t));return i}if(Array.isArray(e)){let o=t.get(e);if(o!==void 0)return o;let i=[];return t.set(e,i),e.forEach(s=>{i.push(Xn(s,t))}),i}return e}function $o(...e){let t=e.sort((o,i)=>o[0]-i[0]).map(o=>o[1]);return(o,i=0)=>{let s=[];for(let c of o.split(`
`).slice(i)){if(c.length>1024)continue;let u=c.replace(/\(error: (.*)\)/,"$1");for(let x of t){let _=x(u);if(_){s.push(_);break}}}return gs(s)}}function Qn(e){return Array.isArray(e)?$o(...e):e}function gs(e){if(!e.length)return[];let t=e,o=t[0].function||"",i=t[t.length-1].function||"";return(o.indexOf("captureMessage")!==-1||o.indexOf("captureException")!==-1)&&(t=t.slice(1)),i.indexOf("sentryWrapped")!==-1&&(t=t.slice(0,-1)),t.slice(0,50).map(s=>({...s,filename:s.filename||t[0].filename,function:s.function||"?"})).reverse()}var Zn="<anonymous>";function re(e){try{return!e||typeof e!="function"?Zn:e.name||Zn}catch{return Zn}}var _r=Fe();function Go(){if(!("fetch"in _r))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function no(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function ti(){if(!Go())return!1;if(no(_r.fetch))return!0;let e=!1,t=_r.document;if(t&&typeof t.createElement=="function")try{let o=t.createElement("iframe");o.hidden=!0,t.head.appendChild(o),o.contentWindow&&o.contentWindow.fetch&&(e=no(o.contentWindow.fetch)),t.head.removeChild(o)}catch(o){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return e}function ei(){let e=_r.chrome,t=e&&e.app&&e.app.runtime,o="history"in _r&&!!_r.history.pushState&&!!_r.history.replaceState;return!t&&o}var lt=Fe(),io={},hs={};function Oc(e){if(!hs[e])switch(hs[e]=!0,e){case"console":Dc();break;case"dom":Fc();break;case"xhr":zc();break;case"fetch":Ic();break;case"history":jc();break;case"error":Hc();break;case"unhandledrejection":Uc();break;default:(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("unknown instrumentation type:",e);return}}function oe(e,t){io[e]=io[e]||[],io[e].push(t),Oc(e)}function de(e,t){if(!(!e||!io[e]))for(let o of io[e]||[])try{o(t)}catch(i){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${re(o)}
Error:`,i)}}function Dc(){"console"in lt&&Mr.forEach(function(e){e in lt.console&&bt(lt.console,e,function(t){return function(...o){de("console",{args:o,level:e}),t&&t.apply(lt.console,o)}})})}function Ic(){!ti()||bt(lt,"fetch",function(e){return function(...t){let o={args:t,fetchData:{method:Lc(t),url:Mc(t)},startTimestamp:Date.now()};return de("fetch",{...o}),e.apply(lt,t).then(i=>(de("fetch",{...o,endTimestamp:Date.now(),response:i}),i),i=>{throw de("fetch",{...o,endTimestamp:Date.now(),error:i}),i})}})}function Lc(e=[]){return"Request"in lt&&ee(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function Mc(e=[]){return typeof e[0]=="string"?e[0]:"Request"in lt&&ee(e[0],Request)?e[0].url:String(e[0])}function zc(){if(!("XMLHttpRequest"in lt))return;let e=XMLHttpRequest.prototype;bt(e,"open",function(t){return function(...o){let i=this,s=o[1],c=i.__sentry_xhr__={method:te(o[0])?o[0].toUpperCase():o[0],url:o[1]};te(s)&&c.method==="POST"&&s.match(/sentry_key/)&&(i.__sentry_own_request__=!0);let u=function(){if(i.readyState===4){try{c.status_code=i.status}catch{}de("xhr",{args:o,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:i})}};return"onreadystatechange"in i&&typeof i.onreadystatechange=="function"?bt(i,"onreadystatechange",function(x){return function(..._){return u(),x.apply(i,_)}}):i.addEventListener("readystatechange",u),t.apply(i,o)}}),bt(e,"send",function(t){return function(...o){return this.__sentry_xhr__&&o[0]!==void 0&&(this.__sentry_xhr__.body=o[0]),de("xhr",{args:o,startTimestamp:Date.now(),xhr:this}),t.apply(this,o)}})}var Yo;function jc(){if(!ei())return;let e=lt.onpopstate;lt.onpopstate=function(...o){let i=lt.location.href,s=Yo;if(Yo=i,de("history",{from:s,to:i}),e)try{return e.apply(this,o)}catch{}};function t(o){return function(...i){let s=i.length>2?i[2]:void 0;if(s){let c=Yo,u=String(s);Yo=u,de("history",{from:c,to:u})}return o.apply(this,i)}}bt(lt.history,"pushState",t),bt(lt.history,"replaceState",t)}var Rc=1e3,Wo,qo;function Pc(e,t){if(!e||e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch{}return!1}function Bc(e){if(e.type!=="keypress")return!1;try{let t=e.target;if(!t||!t.tagName)return!0;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)return!1}catch{}return!0}function bs(e,t=!1){return o=>{if(!o||qo===o||Bc(o))return;let i=o.type==="keypress"?"input":o.type;Wo===void 0?(e({event:o,name:i,global:t}),qo=o):Pc(qo,o)&&(e({event:o,name:i,global:t}),qo=o),clearTimeout(Wo),Wo=lt.setTimeout(()=>{Wo=void 0},Rc)}}function Fc(){if(!("document"in lt))return;let e=de.bind(null,"dom"),t=bs(e,!0);lt.document.addEventListener("click",t,!1),lt.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(o=>{let i=lt[o]&&lt[o].prototype;!i||!i.hasOwnProperty||!i.hasOwnProperty("addEventListener")||(bt(i,"addEventListener",function(s){return function(c,u,x){if(c==="click"||c=="keypress")try{let _=this,A=_.__sentry_instrumentation_handlers__=_.__sentry_instrumentation_handlers__||{},L=A[c]=A[c]||{refCount:0};if(!L.handler){let C=bs(e);L.handler=C,s.call(this,c,C,x)}L.refCount++}catch{}return s.call(this,c,u,x)}}),bt(i,"removeEventListener",function(s){return function(c,u,x){if(c==="click"||c=="keypress")try{let _=this,A=_.__sentry_instrumentation_handlers__||{},L=A[c];L&&(L.refCount--,L.refCount<=0&&(s.call(this,c,L.handler,x),L.handler=void 0,delete A[c]),Object.keys(A).length===0&&delete _.__sentry_instrumentation_handlers__)}catch{}return s.call(this,c,u,x)}}))})}var ri=null;function Hc(){ri=lt.onerror,lt.onerror=function(e,t,o,i,s){return de("error",{column:i,error:s,line:o,msg:e,url:t}),ri?ri.apply(this,arguments):!1}}var oi=null;function Uc(){oi=lt.onunhandledrejection,lt.onunhandledrejection=function(e){return de("unhandledrejection",e),oi?oi.apply(this,arguments):!0}}function xs(){let e=typeof WeakSet=="function",t=e?new WeakSet:[];function o(s){if(e)return t.has(s)?!0:(t.add(s),!1);for(let c=0;c<t.length;c++)if(t[c]===s)return!0;return t.push(s),!1}function i(s){if(e)t.delete(s);else for(let c=0;c<t.length;c++)if(t[c]===s){t.splice(c,1);break}}return[o,i]}function ye(){let e=At,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");let o=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>Math.random()*16;return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,i=>(i^(o()&15)>>i/4).toString(16))}function ws(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function ke(e){let{message:t,event_id:o}=e;if(t)return t;let i=ws(e);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||o||"<unknown>":o||"<unknown>"}function Rr(e,t,o){let i=e.exception=e.exception||{},s=i.values=i.values||[],c=s[0]=s[0]||{};c.value||(c.value=t||""),c.type||(c.type=o||"Error")}function He(e,t){let o=ws(e);if(!o)return;let i={type:"generic",handled:!0},s=o.mechanism;if(o.mechanism={...i,...s,...t},t&&"data"in t){let c={...s&&s.data,...t.data};o.mechanism.data=c}}function Vo(e){if(e&&e.__sentry_captured__)return!0;try{zr(e,"__sentry_captured__",!0)}catch{}return!1}function ao(e){return Array.isArray(e)?e:[e]}function ni(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function ii(){return"npm"}function so(){return!ni()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function ai(e,t){return e.require(t)}function me(e,t=1/0,o=1/0){try{return Xo("",e,t,o)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function Ko(e,t=3,o=100*1024){let i=me(e,t);return Wc(i)>o?Ko(e,t-1,o):i}function Xo(e,t,o=1/0,i=1/0,s=xs()){let[c,u]=s;if(t===null||["number","boolean","string"].includes(typeof t)&&!qn(t))return t;let x=$c(e,t);if(!x.startsWith("[object "))return x;if(t.__sentry_skip_normalization__)return t;if(o===0)return x.replace("object ","");if(c(t))return"[Circular ~]";let _=t;if(_&&typeof _.toJSON=="function")try{let q=_.toJSON();return Xo("",q,o-1,i,s)}catch{}let A=Array.isArray(t)?[]:{},L=0,C=Uo(t);for(let q in C){if(!Object.prototype.hasOwnProperty.call(C,q))continue;if(L>=i){A[q]="[MaxProperties ~]";break}let rt=C[q];A[q]=Xo(q,rt,o-1,i,s),L++}return u(t),A}function $c(e,t){try{return e==="domain"&&t&&typeof t=="object"&&t._events?"[Domain]":e==="domainEmitter"?"[DomainEmitter]":typeof global<"u"&&t===global?"[Global]":typeof window<"u"&&t===window?"[Window]":typeof document<"u"&&t===document?"[Document]":Wn(t)?"[SyntheticEvent]":typeof t=="number"&&t!==t?"[NaN]":t===void 0?"[undefined]":typeof t=="function"?`[Function: ${re(t)}]`:typeof t=="symbol"?`[${String(t)}]`:typeof t=="bigint"?`[BigInt: ${String(t)}]`:`[object ${Gc(t)}]`}catch(o){return`**non-serializable** (${o})`}}function Gc(e){let t=Object.getPrototypeOf(e);return t?t.constructor.name:"null prototype"}function Yc(e){return~-encodeURI(e).split(/%..|./).length}function Wc(e){return Yc(JSON.stringify(e))}var Ue;(function(e){e[e.PENDING=0]="PENDING";let o=1;e[e.RESOLVED=o]="RESOLVED";let i=2;e[e.REJECTED=i]="REJECTED"})(Ue||(Ue={}));function Rt(e){return new dt(t=>{t(e)})}function rr(e){return new dt((t,o)=>{o(e)})}var dt=class{__init(){this._state=Ue.PENDING}__init2(){this._handlers=[]}constructor(t){dt.prototype.__init.call(this),dt.prototype.__init2.call(this),dt.prototype.__init3.call(this),dt.prototype.__init4.call(this),dt.prototype.__init5.call(this),dt.prototype.__init6.call(this);try{t(this._resolve,this._reject)}catch(o){this._reject(o)}}then(t,o){return new dt((i,s)=>{this._handlers.push([!1,c=>{if(!t)i(c);else try{i(t(c))}catch(u){s(u)}},c=>{if(!o)s(c);else try{i(o(c))}catch(u){s(u)}}]),this._executeHandlers()})}catch(t){return this.then(o=>o,t)}finally(t){return new dt((o,i)=>{let s,c;return this.then(u=>{c=!1,s=u,t&&t()},u=>{c=!0,s=u,t&&t()}).then(()=>{if(c){i(s);return}o(s)})})}__init3(){this._resolve=t=>{this._setResult(Ue.RESOLVED,t)}}__init4(){this._reject=t=>{this._setResult(Ue.REJECTED,t)}}__init5(){this._setResult=(t,o)=>{if(this._state===Ue.PENDING){if(xr(o)){o.then(this._resolve,this._reject);return}this._state=t,this._value=o,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===Ue.PENDING)return;let t=this._handlers.slice();this._handlers=[],t.forEach(o=>{o[0]||(this._state===Ue.RESOLVED&&o[1](this._value),this._state===Ue.REJECTED&&o[2](this._value),o[0]=!0)})}}};function si(e){let t=[];function o(){return e===void 0||t.length<e}function i(u){return t.splice(t.indexOf(u),1)[0]}function s(u){if(!o())return rr(new ct("Not adding Promise because buffer limit was reached."));let x=u();return t.indexOf(x)===-1&&t.push(x),x.then(()=>i(x)).then(null,()=>i(x).then(null,()=>{})),x}function c(u){return new dt((x,_)=>{let A=t.length;if(!A)return x(!0);let L=setTimeout(()=>{u&&u>0&&x(!1)},u);t.forEach(C=>{Rt(C).then(()=>{--A||(clearTimeout(L),x(!0))},_)})})}return{$:t,add:s,drain:c}}function lo(e){if(!e)return{};let t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};let o=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+o+i}}var vs=["fatal","error","warning","log","info","debug"];function li(e){return e==="warn"?"warning":vs.includes(e)?e:"log"}var ys=Fe(),di={nowSeconds:()=>Date.now()/1e3};function qc(){let{performance:e}=ys;if(!e||!e.now)return;let t=Date.now()-e.now();return{now:()=>e.now(),timeOrigin:t}}function Vc(){try{return ai(module,"perf_hooks").performance}catch{return}}var ci=so()?Vc():qc(),_s=ci===void 0?di:{nowSeconds:()=>(ci.timeOrigin+ci.now())/1e3},$e=di.nowSeconds.bind(di),Jo=_s.nowSeconds.bind(_s);var co,Xc=(()=>{let{performance:e}=ys;if(!e||!e.now){co="none";return}let t=3600*1e3,o=e.now(),i=Date.now(),s=e.timeOrigin?Math.abs(e.timeOrigin+o-i):t,c=s<t,u=e.timing&&e.timing.navigationStart,_=typeof u=="number"?Math.abs(u+o-i):t,A=_<t;return c||A?s<=_?(co="timeOrigin",e.timeOrigin):(co="navigationStart",u):(co="dateNow",i)})();function or(e,t=[]){return[e,t]}function pi(e,t){let[o,i]=e;return[o,[...i,t]]}function Zo(e,t){e[1].forEach(i=>{let s=i[0].type;t(i,s)})}function mi(e,t){return(t||new TextEncoder).encode(e)}function mo(e,t){let[o,i]=e,s=JSON.stringify(o);function c(u){typeof s=="string"?s=typeof u=="string"?s+u:[mi(s,t),u]:s.push(typeof u=="string"?mi(u,t):u)}for(let u of i){let[x,_]=u;if(c(`
${JSON.stringify(x)}
`),typeof _=="string"||_ instanceof Uint8Array)c(_);else{let A;try{A=JSON.stringify(_)}catch{A=JSON.stringify(me(_))}c(A)}}return typeof s=="string"?s:Kc(s)}function Kc(e){let t=e.reduce((s,c)=>s+c.length,0),o=new Uint8Array(t),i=0;for(let s of e)o.set(s,i),i+=s.length;return o}function ui(e,t){let o=typeof e.data=="string"?mi(e.data,t):e.data;return[jr({type:"attachment",length:o.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),o]}var Jc={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay"};function Qo(e){return Jc[e]}function tn(e){if(!e||!e.sdk)return;let{name:t,version:o}=e.sdk;return{name:t,version:o}}function fi(e,t,o,i){let s=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!o&&{dsn:tr(i)},...e.type==="transaction"&&s&&{trace:jr({...s})}}}function gi(e,t,o){let i=[{type:"client_report"},{timestamp:o||$e(),discarded_events:e}];return or(t?{dsn:t}:{},[i])}function ks(e,t=Date.now()){let o=parseInt(`${e}`,10);if(!isNaN(o))return o*1e3;let i=Date.parse(`${e}`);return isNaN(i)?6e4:i-t}function Es(e,t){return e[t]||e.all||0}function hi(e,t,o=Date.now()){return Es(e,t)>o}function bi(e,{statusCode:t,headers:o},i=Date.now()){let s={...e},c=o&&o["x-sentry-rate-limits"],u=o&&o["retry-after"];if(c)for(let x of c.trim().split(",")){let[_,A]=x.split(":",2),L=parseInt(_,10),C=(isNaN(L)?60:L)*1e3;if(!A)s.all=i+C;else for(let q of A.split(";"))s[q]=i+C}else u?s.all=i+ks(u,i):t===429&&(s.all=i+60*1e3);return s}function Ss(e){let t=Jo(),o={sid:ye(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Zc(o)};return e&&Ge(o,e),o}function Ge(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||Jo(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:ye()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{let o=e.timestamp-e.started;e.duration=o>=0?o:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function Ts(e,t){let o={};t?o={status:t}:e.status==="ok"&&(o={status:"exited"}),Ge(e,o)}function Zc(e){return jr({sid:`${e.sid}`,init:e.init,started:new Date(e.started*1e3).toISOString(),timestamp:new Date(e.timestamp*1e3).toISOString(),status:e.status,errors:e.errors,did:typeof e.did=="number"||typeof e.did=="string"?`${e.did}`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}var Qc=100,Pt=class{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(t){let o=new Pt;return t&&(o._breadcrumbs=[...t._breadcrumbs],o._tags={...t._tags},o._extra={...t._extra},o._contexts={...t._contexts},o._user=t._user,o._level=t._level,o._span=t._span,o._session=t._session,o._transactionName=t._transactionName,o._fingerprint=t._fingerprint,o._eventProcessors=[...t._eventProcessors],o._requestSession=t._requestSession,o._attachments=[...t._attachments],o._sdkProcessingMetadata={...t._sdkProcessingMetadata}),o}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{},this._session&&Ge(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,o){return this._tags={...this._tags,[t]:o},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,o){return this._extra={...this._extra,[t]:o},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,o){return o===null?delete this._contexts[t]:this._contexts[t]=o,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){let t=this.getSpan();return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;if(typeof t=="function"){let o=t(this);return o instanceof Pt?o:this}return t instanceof Pt?(this._tags={...this._tags,...t._tags},this._extra={...this._extra,...t._extra},this._contexts={...this._contexts,...t._contexts},t._user&&Object.keys(t._user).length&&(this._user=t._user),t._level&&(this._level=t._level),t._fingerprint&&(this._fingerprint=t._fingerprint),t._requestSession&&(this._requestSession=t._requestSession)):ce(t)&&(t=t,this._tags={...this._tags,...t.tags},this._extra={...this._extra,...t.extra},this._contexts={...this._contexts,...t.contexts},t.user&&(this._user=t.user),t.level&&(this._level=t.level),t.fingerprint&&(this._fingerprint=t.fingerprint),t.requestSession&&(this._requestSession=t.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(t,o){let i=typeof o=="number"?o:Qc;if(i<=0)return this;let s={timestamp:$e(),...t};return this._breadcrumbs=[...this._breadcrumbs,s].slice(-i),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(t,o={}){if(this._extra&&Object.keys(this._extra).length&&(t.extra={...this._extra,...t.extra}),this._tags&&Object.keys(this._tags).length&&(t.tags={...this._tags,...t.tags}),this._user&&Object.keys(this._user).length&&(t.user={...this._user,...t.user}),this._contexts&&Object.keys(this._contexts).length&&(t.contexts={...this._contexts,...t.contexts}),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span){t.contexts={trace:this._span.getTraceContext(),...t.contexts};let i=this._span.transaction&&this._span.transaction.name;i&&(t.tags={transaction:i,...t.tags})}return this._applyFingerprint(t),t.breadcrumbs=[...t.breadcrumbs||[],...this._breadcrumbs],t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,t.sdkProcessingMetadata={...t.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...Cs(),...this._eventProcessors],t,o)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}_notifyEventProcessors(t,o,i,s=0){return new dt((c,u)=>{let x=t[s];if(o===null||typeof x!="function")c(o);else{let _=x({...o},i);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&x.id&&_===null&&z.log(`Event processor "${x.id}" dropped event`),xr(_)?_.then(A=>this._notifyEventProcessors(t,A,i,s+1).then(c)).then(null,u):this._notifyEventProcessors(t,_,i,s+1).then(c).then(null,u)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}_applyFingerprint(t){t.fingerprint=t.fingerprint?ao(t.fingerprint):[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint}};function Cs(){return wr("globalEventProcessors",()=>[])}function nr(e){Cs().push(e)}var xi=4,td=100,Ye=class{__init(){this._stack=[{}]}constructor(t,o=new Pt,i=xi){this._version=i,Ye.prototype.__init.call(this),this.getStackTop().scope=o,t&&this.bindClient(t)}isOlderThan(t){return this._version<t}bindClient(t){let o=this.getStackTop();o.client=t,t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){let t=Pt.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){let o=this.pushScope();try{t(o)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,o){let i=this._lastEventId=o&&o.event_id?o.event_id:ye(),s=new Error("Sentry syntheticException");return this._withClient((c,u)=>{c.captureException(t,{originalException:t,syntheticException:s,...o,event_id:i},u)}),i}captureMessage(t,o,i){let s=this._lastEventId=i&&i.event_id?i.event_id:ye(),c=new Error(t);return this._withClient((u,x)=>{u.captureMessage(t,o,{originalException:t,syntheticException:c,...i,event_id:s},x)}),s}captureEvent(t,o){let i=o&&o.event_id?o.event_id:ye();return t.type||(this._lastEventId=i),this._withClient((s,c)=>{s.captureEvent(t,{...o,event_id:i},c)}),i}lastEventId(){return this._lastEventId}addBreadcrumb(t,o){let{scope:i,client:s}=this.getStackTop();if(!i||!s)return;let{beforeBreadcrumb:c=null,maxBreadcrumbs:u=td}=s.getOptions&&s.getOptions()||{};if(u<=0)return;let _={timestamp:$e(),...t},A=c?Bo(()=>c(_,o)):_;A!==null&&i.addBreadcrumb(A,u)}setUser(t){let o=this.getScope();o&&o.setUser(t)}setTags(t){let o=this.getScope();o&&o.setTags(t)}setExtras(t){let o=this.getScope();o&&o.setExtras(t)}setTag(t,o){let i=this.getScope();i&&i.setTag(t,o)}setExtra(t,o){let i=this.getScope();i&&i.setExtra(t,o)}setContext(t,o){let i=this.getScope();i&&i.setContext(t,o)}configureScope(t){let{scope:o,client:i}=this.getStackTop();o&&i&&t(o)}run(t){let o=en(this);try{t(this)}finally{en(o)}}getIntegration(t){let o=this.getClient();if(!o)return null;try{return o.getIntegration(t)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,o){return this._callExtensionMethod("startTransaction",t,o)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){let t=this.getStackTop(),o=t&&t.scope,i=o&&o.getSession();i&&Ts(i),this._sendSessionUpdate(),o&&o.setSession()}startSession(t){let{scope:o,client:i}=this.getStackTop(),{release:s,environment:c}=i&&i.getOptions()||{},{userAgent:u}=At.navigator||{},x=Ss({release:s,environment:c,...o&&{user:o.getUser()},...u&&{userAgent:u},...t});if(o){let _=o.getSession&&o.getSession();_&&_.status==="ok"&&Ge(_,{status:"exited"}),this.endSession(),o.setSession(x)}return x}shouldSendDefaultPii(){let t=this.getClient(),o=t&&t.getOptions();return Boolean(o&&o.sendDefaultPii)}_sendSessionUpdate(){let{scope:t,client:o}=this.getStackTop();if(!t)return;let i=t.getSession();i&&o&&o.captureSession&&o.captureSession(i)}_withClient(t){let{scope:o,client:i}=this.getStackTop();i&&t(i,o)}_callExtensionMethod(t,...o){let s=po().__SENTRY__;if(s&&s.extensions&&typeof s.extensions[t]=="function")return s.extensions[t].apply(this,o);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Extension method ${t} couldn't be found, doing nothing.`)}};function po(){return At.__SENTRY__=At.__SENTRY__||{extensions:{},hub:void 0},At}function en(e){let t=po(),o=Ee(t);return rn(t,e),o}function J(){let e=po();return(!As(e)||Ee(e).isOlderThan(xi))&&rn(e,new Ye),so()?ed(e):Ee(e)}function ed(e){try{let t=po().__SENTRY__,o=t&&t.extensions&&t.extensions.domain&&t.extensions.domain.active;if(!o)return Ee(e);if(!As(o)||Ee(o).isOlderThan(xi)){let i=Ee(e).getStackTop();rn(o,new Ye(i.client,Pt.clone(i.scope)))}return Ee(o)}catch{return Ee(e)}}function As(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function Ee(e){return wr("hub",()=>new Ye,e)}function rn(e,t){if(!e)return!1;let o=e.__SENTRY__=e.__SENTRY__||{};return o.hub=t,!0}function Pr(e,t){return J().captureException(e,{captureContext:t})}function on(e,t){let o=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return J().captureMessage(e,o,i)}function nn(e){J().withScope(e)}var rd="7";function od(e){let t=e.protocol?`${e.protocol}:`:"",o=e.port?`:${e.port}`:"";return`${t}//${e.host}${o}${e.path?`/${e.path}`:""}/api/`}function nd(e){return`${od(e)}${e.projectId}/envelope/`}function id(e,t){return Kn({sentry_key:e.publicKey,sentry_version:rd,...t&&{sentry_client:`${t.name}/${t.version}`}})}function uo(e,t={}){let o=typeof t=="string"?t:t.tunnel,i=typeof t=="string"||!t._metadata?void 0:t._metadata.sdk;return o||`${nd(e)}?${id(e,i)}`}function ad(e,t){return t&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||t.name,e.sdk.version=e.sdk.version||t.version,e.sdk.integrations=[...e.sdk.integrations||[],...t.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...t.packages||[]]),e}function Ns(e,t,o,i){let s=tn(o),c={sent_at:new Date().toISOString(),...s&&{sdk:s},...!!i&&{dsn:tr(t)}},u="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e];return or(c,[u])}function Os(e,t,o,i){let s=tn(o),c=e.type&&e.type!=="replay_event"?e.type:"event";ad(e,o&&o.sdk);let u=fi(e,s,i,t);return delete e.sdkProcessingMetadata,or(u,[[{type:c},e]])}var Ds=[];function sd(e){let t={};return e.forEach(o=>{let{name:i}=o,s=t[i];s&&!s.isDefaultInstance&&o.isDefaultInstance||(t[i]=o)}),Object.values(t)}function wi(e){let t=e.defaultIntegrations||[],o=e.integrations;t.forEach(u=>{u.isDefaultInstance=!0});let i;Array.isArray(o)?i=[...t,...o]:typeof o=="function"?i=ao(o(t)):i=t;let s=sd(i),c=s.findIndex(u=>u.name==="Debug");if(c!==-1){let[u]=s.splice(c,1);s.push(u)}return s}function Is(e){let t={};return e.forEach(o=>{vi(o,t)}),t}function vi(e,t){t[e.name]=e,Ds.indexOf(e.name)===-1&&(e.setupOnce(nr,J),Ds.push(e.name),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log(`Integration installed: ${e.name}`))}function Ls(e,t,o,i){let{normalizeDepth:s=3,normalizeMaxBreadth:c=1e3}=e,u={...t,event_id:t.event_id||o.event_id||ye(),timestamp:t.timestamp||$e()},x=o.integrations||e.integrations.map(L=>L.name);ld(u,e),cd(u,x);let _=i;o.captureContext&&(_=Pt.clone(_).update(o.captureContext));let A=Rt(u);if(_){if(_.getAttachments){let L=[...o.attachments||[],..._.getAttachments()];L.length&&(o.attachments=L)}A=_.applyToEvent(u,o)}return A.then(L=>typeof s=="number"&&s>0?dd(L,s,c):L)}function ld(e,t){let{environment:o,release:i,dist:s,maxValueLength:c=250}=t;"environment"in e||(e.environment="environment"in t?o:"production"),e.release===void 0&&i!==void 0&&(e.release=i),e.dist===void 0&&s!==void 0&&(e.dist=s),e.message&&(e.message=er(e.message,c));let u=e.exception&&e.exception.values&&e.exception.values[0];u&&u.value&&(u.value=er(u.value,c));let x=e.request;x&&x.url&&(x.url=er(x.url,c))}function cd(e,t){t.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...t])}function dd(e,t,o){if(!e)return null;let i={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(s=>({...s,...s.data&&{data:me(s.data,t,o)}}))},...e.user&&{user:me(e.user,t,o)},...e.contexts&&{contexts:me(e.contexts,t,o)},...e.extra&&{extra:me(e.extra,t,o)}};return e.contexts&&e.contexts.trace&&i.contexts&&(i.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(i.contexts.trace.data=me(e.contexts.trace.data,t,o))),e.spans&&(i.spans=e.spans.map(s=>(s.data&&(s.data=me(s.data,t,o)),s))),i}var Ms="Not capturing exception because it's already been captured.",Se=class{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}constructor(t){if(Se.prototype.__init.call(this),Se.prototype.__init2.call(this),Se.prototype.__init3.call(this),Se.prototype.__init4.call(this),this._options=t,t.dsn){this._dsn=Po(t.dsn);let o=uo(this._dsn,t);this._transport=t.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:o})}else(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("No DSN provided, client will not do anything.")}captureException(t,o,i){if(Vo(t)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log(Ms);return}let s=o&&o.event_id;return this._process(this.eventFromException(t,o).then(c=>this._captureEvent(c,o,i)).then(c=>{s=c})),s}captureMessage(t,o,i,s){let c=i&&i.event_id,u=Dr(t)?this.eventFromMessage(String(t),o,i):this.eventFromException(t,i);return this._process(u.then(x=>this._captureEvent(x,i,s)).then(x=>{c=x})),c}captureEvent(t,o,i){if(o&&o.originalException&&Vo(o.originalException)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log(Ms);return}let s=o&&o.event_id;return this._process(this._captureEvent(t,o,i).then(c=>{s=c})),s}captureSession(t){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("SDK not enabled, will not capture session.");return}typeof t.release!="string"?(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("Discarded session because of missing or non-string release"):(this.sendSession(t),Ge(t,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){let o=this._transport;return o?this._isClientDoneProcessing(t).then(i=>o.flush(t).then(s=>i&&s)):Rt(!0)}close(t){return this.flush(t).then(o=>(this.getOptions().enabled=!1,o))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=Is(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(t){return this._integrations[t]}getIntegration(t){try{return this._integrations[t.id]||null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Cannot retrieve integration ${t.id} from the current Client`),null}}addIntegration(t){vi(t,this._integrations)}sendEvent(t,o={}){if(this._dsn){let i=Os(t,this._dsn,this._options._metadata,this._options.tunnel);for(let s of o.attachments||[])i=pi(i,ui(s,this._options.transportOptions&&this._options.transportOptions.textEncoder));this._sendEnvelope(i)}}sendSession(t){if(this._dsn){let o=Ns(t,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(o)}}recordDroppedEvent(t,o,i){if(this._options.sendClientReports){let s=`${t}:${o}`;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log(`Adding outcome: "${s}"`),this._outcomes[s]=this._outcomes[s]+1||1}}_updateSessionFromEvent(t,o){let i=!1,s=!1,c=o.exception&&o.exception.values;if(c){s=!0;for(let _ of c){let A=_.mechanism;if(A&&A.handled===!1){i=!0;break}}}let u=t.status==="ok";(u&&t.errors===0||u&&i)&&(Ge(t,{...i&&{status:"crashed"},errors:t.errors||Number(s||i)}),this.captureSession(t))}_isClientDoneProcessing(t){return new dt(o=>{let i=0,s=1,c=setInterval(()=>{this._numProcessing==0?(clearInterval(c),o(!0)):(i+=s,t&&i>=t&&(clearInterval(c),o(!1)))},s)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._dsn!==void 0}_prepareEvent(t,o,i){let s=this.getOptions(),c=Object.keys(this._integrations);return!o.integrations&&c.length>0&&(o.integrations=c),Ls(s,t,o,i)}_captureEvent(t,o={},i){return this._processEvent(t,o,i).then(s=>s.event_id,s=>{if(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__){let c=s;c.logLevel==="log"?z.log(c.message):z.warn(c)}})}_processEvent(t,o,i){let s=this.getOptions(),{sampleRate:c}=s;if(!this._isEnabled())return rr(new ct("SDK not enabled, will not capture event.","log"));let u=js(t),x=zs(t),_=t.type||"error",A=`before send for type \`${_}\``;if(x&&typeof c=="number"&&Math.random()>c)return this.recordDroppedEvent("sample_rate","error",t),rr(new ct(`Discarding event because it's not included in the random sample (sampling rate = ${c})`,"log"));let L=_==="replay_event"?"replay":_;return this._prepareEvent(t,o,i).then(C=>{if(C===null)throw this.recordDroppedEvent("event_processor",L,t),new ct("An event processor returned `null`, will not send event.","log");if(o.data&&o.data.__sentry__===!0)return C;let rt=pd(s,C,o);return md(rt,A)}).then(C=>{if(C===null)throw this.recordDroppedEvent("before_send",L,t),new ct(`${A} returned \`null\`, will not send event.`,"log");let q=i&&i.getSession();!u&&q&&this._updateSessionFromEvent(q,C);let rt=C.transaction_info;if(u&&rt&&C.transaction!==t.transaction){let G="custom";C.transaction_info={...rt,source:G,changes:[...rt.changes,{source:G,timestamp:C.timestamp,propagations:rt.propagations}]}}return this.sendEvent(C,o),C}).then(null,C=>{throw C instanceof ct?C:(this.captureException(C,{data:{__sentry__:!0},originalException:C}),new ct(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${C}`))})}_process(t){this._numProcessing++,t.then(o=>(this._numProcessing--,o),o=>(this._numProcessing--,o))}_sendEnvelope(t){this._transport&&this._dsn?this._transport.send(t).then(null,o=>{(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error("Error while sending event:",o)}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error("Transport disabled")}_clearOutcomes(){let t=this._outcomes;return this._outcomes={},Object.keys(t).map(o=>{let[i,s]=o.split(":");return{reason:i,category:s,quantity:t[o]}})}};function md(e,t){let o=`${t} must return \`null\` or a valid event.`;if(xr(e))return e.then(i=>{if(!ce(i)&&i!==null)throw new ct(o);return i},i=>{throw new ct(`${t} rejected with ${i}`)});if(!ce(e)&&e!==null)throw new ct(o);return e}function pd(e,t,o){let{beforeSend:i,beforeSendTransaction:s}=e;return zs(t)&&i?i(t,o):js(t)&&s?s(t,o):t}function zs(e){return e.type===void 0}function js(e){return e.type==="transaction"}function _i(e,t){t.debug===!0&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?z.enable():console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));let o=J(),i=o.getScope();i&&i.update(t.initialScope);let s=new e(t);o.bindClient(s)}var ud=30;function Br(e,t,o=si(e.bufferSize||ud)){let i={},s=u=>o.drain(u);function c(u){let x=[];if(Zo(u,(C,q)=>{let rt=Qo(q);if(hi(i,rt)){let G=Rs(C,q);e.recordDroppedEvent("ratelimit_backoff",rt,G)}else x.push(C)}),x.length===0)return Rt();let _=or(u[0],x),A=C=>{Zo(_,(q,rt)=>{let G=Rs(q,rt);e.recordDroppedEvent(C,Qo(rt),G)})},L=()=>t({body:mo(_,e.textEncoder)}).then(C=>(C.statusCode!==void 0&&(C.statusCode<200||C.statusCode>=300)&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Sentry responded with status code ${C.statusCode} to sent event.`),i=bi(i,C),C),C=>{throw A("network_error"),C});return o.add(L).then(C=>C,C=>{if(C instanceof ct)return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error("Skipped sending event because buffer is full."),A("queue_overflow"),Rt();throw C})}return{send:c,flush:s}}function Rs(e,t){if(!(t!=="event"&&t!=="transaction"))return Array.isArray(e)?e[1]:void 0}var fo="7.36.0";var yr={};ns(yr,{FunctionToString:()=>We,InboundFilters:()=>Te});var Ps,We=class{constructor(){We.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=We.id}setupOnce(){Ps=Function.prototype.toString,Function.prototype.toString=function(...t){let o=vr(this)||this;return Ps.apply(o,t)}}};We.__initStatic();var fd=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],Te=class{static __initStatic(){this.id="InboundFilters"}__init(){this.name=Te.id}constructor(t={}){this._options=t,Te.prototype.__init.call(this)}setupOnce(t,o){let i=s=>{let c=o();if(c){let u=c.getIntegration(Te);if(u){let x=c.getClient(),_=x?x.getOptions():{},A=gd(u._options,_);return hd(s,A)?null:s}}return s};i.id=this.name,t(i)}};Te.__initStatic();function gd(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...fd],ignoreInternal:e.ignoreInternal!==void 0?e.ignoreInternal:!0}}function hd(e,t){return t.ignoreInternal&&_d(e)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Event dropped due to being internal Sentry Error.
Event: ${ke(e)}`),!0):bd(e,t.ignoreErrors)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${ke(e)}`),!0):xd(e,t.denyUrls)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${ke(e)}.
Url: ${an(e)}`),!0):wd(e,t.allowUrls)?!1:((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${ke(e)}.
Url: ${an(e)}`),!0)}function bd(e,t){return!t||!t.length?!1:vd(e).some(o=>oo(o,t))}function xd(e,t){if(!t||!t.length)return!1;let o=an(e);return o?oo(o,t):!1}function wd(e,t){if(!t||!t.length)return!0;let o=an(e);return o?oo(o,t):!0}function vd(e){if(e.message)return[e.message];if(e.exception)try{let{type:t="",value:o=""}=e.exception.values&&e.exception.values[0]||{};return[`${o}`,`${t}: ${o}`]}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error(`Cannot extract message for event ${ke(e)}`),[]}return[]}function _d(e){try{return e.exception.values[0].type==="SentryError"}catch{}return!1}function yd(e=[]){for(let t=e.length-1;t>=0;t--){let o=e[t];if(o&&o.filename!=="<anonymous>"&&o.filename!=="[native code]")return o.filename||null}return null}function an(e){try{let t;try{t=e.exception.values[0].stacktrace.frames}catch{}return t?yd(t):null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error(`Cannot extract url for event ${ke(e)}`),null}}var H=At,yi=0;function ki(){return yi>0}function Md(){yi++,setTimeout(()=>{yi--})}function ir(e,t={},o){if(typeof e!="function")return e;try{let s=e.__sentry_wrapped__;if(s)return s;if(vr(e))return e}catch{return e}let i=function(){let s=Array.prototype.slice.call(arguments);try{o&&typeof o=="function"&&o.apply(this,arguments);let c=s.map(u=>ir(u,t));return e.apply(this,c)}catch(c){throw Md(),nn(u=>{u.addEventProcessor(x=>(t.mechanism&&(Rr(x,void 0,void 0),He(x,t.mechanism)),x.extra={...x.extra,arguments:s},x)),Pr(c)}),c}};try{for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=e[s])}catch{}Ho(i,e),zr(e,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return e.name}})}catch{}return i}function Ti(e,t){let o=Ci(e,t),i={type:t&&t.name,value:Pd(t)};return o.length&&(i.stacktrace={frames:o}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function zd(e,t,o,i){let c=J().getClient(),u=c&&c.getOptions().normalizeDepth,x={exception:{values:[{type:Ir(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:`Non-Error ${i?"promise rejection":"exception"} captured with keys: ${Jn(t)}`}]},extra:{__serialized__:Ko(t,u)}};if(o){let _=Ci(e,o);_.length&&(x.exception.values[0].stacktrace={frames:_})}return x}function Ei(e,t){return{exception:{values:[Ti(e,t)]}}}function Ci(e,t){let o=t.stacktrace||t.stack||"",i=Rd(t);try{return e(o,i)}catch{}return[]}var jd=/Minified React error #\d+;/i;function Rd(e){if(e){if(typeof e.framesToPop=="number")return e.framesToPop;if(jd.test(e.message))return 1}return 0}function Pd(e){let t=e&&e.message;return t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}function Bs(e,t,o,i){let s=o&&o.syntheticException||void 0,c=sn(e,t,s,i);return He(c),c.level="error",o&&o.event_id&&(c.event_id=o.event_id),Rt(c)}function Fs(e,t,o="info",i,s){let c=i&&i.syntheticException||void 0,u=Si(e,t,c,s);return u.level=o,i&&i.event_id&&(u.event_id=i.event_id),Rt(u)}function sn(e,t,o,i,s){let c;if(ro(t)&&t.error)return Ei(e,t.error);if(jo(t)||$n(t)){let u=t;if("stack"in t)c=Ei(e,t);else{let x=u.name||(jo(u)?"DOMError":"DOMException"),_=u.message?`${x}: ${u.message}`:x;c=Si(e,_,o,i),Rr(c,_)}return"code"in u&&(c.tags={...c.tags,"DOMException.code":`${u.code}`}),c}return eo(t)?Ei(e,t):ce(t)||Ir(t)?(c=zd(e,t,o,s),He(c,{synthetic:!0}),c):(c=Si(e,t,o,i),Rr(c,`${t}`,void 0),He(c,{synthetic:!0}),c)}function Si(e,t,o,i){let s={message:t};if(i&&o){let c=Ci(e,o);c.length&&(s.exception={values:[{value:t,stacktrace:{frames:c}}]})}return s}var ln=1024,Ai="Breadcrumbs",Ce=class{static __initStatic(){this.id=Ai}__init(){this.name=Ce.id}constructor(t){Ce.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...t}}setupOnce(){this.options.console&&oe("console",Fd),this.options.dom&&oe("dom",Bd(this.options.dom)),this.options.xhr&&oe("xhr",Hd),this.options.fetch&&oe("fetch",Ud),this.options.history&&oe("history",$d)}addSentryBreadcrumb(t){this.options.sentry&&J().addBreadcrumb({category:`sentry.${t.type==="transaction"?"transaction":"event"}`,event_id:t.event_id,level:t.level,message:ke(t)},{event:t})}};Ce.__initStatic();function Bd(e){function t(o){let i,s=typeof e=="object"?e.serializeAttribute:void 0,c=typeof e=="object"&&typeof e.maxStringLength=="number"?e.maxStringLength:void 0;c&&c>ln&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn(`\`dom.maxStringLength\` cannot exceed ${ln}, but a value of ${c} was configured. Sentry will use ${ln} instead.`),c=ln),typeof s=="string"&&(s=[s]);try{i=o.event.target?Lr(o.event.target,{keyAttrs:s,maxStringLength:c}):Lr(o.event,{keyAttrs:s,maxStringLength:c})}catch{i="<unknown>"}i.length!==0&&J().addBreadcrumb({category:`ui.${o.name}`,message:i},{event:o.event,name:o.name,global:o.global})}return t}function Fd(e){for(let o=0;o<e.args.length;o++)if(e.args[o]==="ref=Ref<"){e.args[o+1]="viewRef";break}let t={category:"console",data:{arguments:e.args,logger:"console"},level:li(e.level),message:Fo(e.args," ")};if(e.level==="assert")if(e.args[0]===!1)t.message=`Assertion failed: ${Fo(e.args.slice(1)," ")||"console.assert"}`,t.data.arguments=e.args.slice(1);else return;J().addBreadcrumb(t,{input:e.args,level:e.level})}function Hd(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;let{method:t,url:o,status_code:i,body:s}=e.xhr.__sentry_xhr__||{};J().addBreadcrumb({category:"xhr",data:{method:t,url:o,status_code:i},type:"http"},{xhr:e.xhr,input:s});return}}function Ud(e){!e.endTimestamp||e.fetchData.url.match(/sentry_key/)&&e.fetchData.method==="POST"||(e.error?J().addBreadcrumb({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args}):J().addBreadcrumb({category:"fetch",data:{...e.fetchData,status_code:e.response.status},type:"http"},{input:e.args,response:e.response}))}function $d(e){let t=e.from,o=e.to,i=lo(H.location.href),s=lo(t),c=lo(o);s.path||(s=i),i.protocol===c.protocol&&i.host===c.host&&(o=c.relative),i.protocol===s.protocol&&i.host===s.host&&(t=s.relative),J().addBreadcrumb({category:"navigation",data:{from:t,to:o}})}var cn=class extends Se{constructor(t){let o=H.SENTRY_SDK_SOURCE||ii();t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:`${o}:@sentry/browser`,version:fo}],version:fo},super(t),t.sendClientReports&&H.document&&H.document.addEventListener("visibilitychange",()=>{H.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(t,o){return Bs(this._options.stackParser,t,o,this._options.attachStacktrace)}eventFromMessage(t,o="info",i){return Fs(this._options.stackParser,t,o,i,this._options.attachStacktrace)}sendEvent(t,o){let i=this.getIntegrationById(Ai);i&&i.addSentryBreadcrumb&&i.addSentryBreadcrumb(t),super.sendEvent(t,o)}_prepareEvent(t,o,i){return t.platform=t.platform||"javascript",super._prepareEvent(t,o,i)}_flushOutcomes(){let t=this._clearOutcomes();if(t.length===0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log("No outcomes to send");return}if(!this._dsn){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log("No dsn provided, will not send outcomes");return}(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log("Sending outcomes:",t);let o=uo(this._dsn,this._options),i=gi(t,this._options.tunnel&&tr(this._dsn));try{Object.prototype.toString.call(H&&H.navigator)==="[object Navigator]"&&typeof H.navigator.sendBeacon=="function"&&!this._options.transportOptions?H.navigator.sendBeacon.bind(H.navigator)(o,mo(i)):this._sendEnvelope(i)}catch(s){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.error(s)}}};var go;function Hs(){if(go)return go;if(no(H.fetch))return go=H.fetch.bind(H);let e=H.document,t=H.fetch;if(e&&typeof e.createElement=="function")try{let o=e.createElement("iframe");o.hidden=!0,e.head.appendChild(o);let i=o.contentWindow;i&&i.fetch&&(t=i.fetch),e.head.removeChild(o)}catch(o){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return go=t.bind(H)}function Us(){go=void 0}function $s(e,t=Hs()){function o(i){let s={body:i.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:i.body.length<=65536,...e.fetchOptions};try{return t(e.url,s).then(c=>({statusCode:c.status,headers:{"x-sentry-rate-limits":c.headers.get("X-Sentry-Rate-Limits"),"retry-after":c.headers.get("Retry-After")}}))}catch(c){return Us(),rr(c)}}return Br(e,o)}var Gd=4;function Gs(e){function t(o){return new dt((i,s)=>{let c=new XMLHttpRequest;c.onerror=s,c.onreadystatechange=()=>{c.readyState===Gd&&i({statusCode:c.status,headers:{"x-sentry-rate-limits":c.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":c.getResponseHeader("Retry-After")}})},c.open("POST",e.url);for(let u in e.headers)Object.prototype.hasOwnProperty.call(e.headers,u)&&c.setRequestHeader(u,e.headers[u]);c.send(o.body)})}return Br(e,t)}var dn="?";var Yd=30,Wd=40,qd=50;function Ni(e,t,o,i){let s={filename:e,function:t,in_app:!0};return o!==void 0&&(s.lineno=o),i!==void 0&&(s.colno=i),s}var Vd=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Xd=/\((\S*)(?::(\d+))(?::(\d+))\)/,Kd=e=>{let t=Vd.exec(e);if(t){if(t[2]&&t[2].indexOf("eval")===0){let c=Xd.exec(t[2]);c&&(t[2]=c[1],t[3]=c[2],t[4]=c[3])}let[i,s]=Ws(t[1]||dn,t[2]);return Ni(s,i,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}},Jd=[Yd,Kd],Zd=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Qd=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,tm=e=>{let t=Zd.exec(e);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){let c=Qd.exec(t[3]);c&&(t[1]=t[1]||"eval",t[3]=c[1],t[4]=c[2],t[5]="")}let i=t[3],s=t[1]||dn;return[s,i]=Ws(s,i),Ni(i,s,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}},em=[qd,tm],rm=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,om=e=>{let t=rm.exec(e);return t?Ni(t[2],t[1]||dn,+t[3],t[4]?+t[4]:void 0):void 0},nm=[Wd,om];var im=[Jd,em,nm],Ys=$o(...im),Ws=(e,t)=>{let o=e.indexOf("safari-extension")!==-1,i=e.indexOf("safari-web-extension")!==-1;return o||i?[e.indexOf("@")!==-1?e.split("@")[0]:dn,o?`safari-extension:${t}`:`safari-web-extension:${t}`]:[e,t]};var Ht=class{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=Ht.id}__init2(){this._installFunc={onerror:am,onunhandledrejection:sm}}constructor(t){Ht.prototype.__init.call(this),Ht.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...t}}setupOnce(){Error.stackTraceLimit=50;let t=this._options;for(let o in t){let i=this._installFunc[o];i&&t[o]&&(dm(o),i(),this._installFunc[o]=void 0)}}};Ht.__initStatic();function am(){oe("error",e=>{let[t,o,i]=Xs();if(!t.getIntegration(Ht))return;let{msg:s,url:c,line:u,column:x,error:_}=e;if(ki()||_&&_.__sentry_own_request__)return;let A=_===void 0&&te(s)?cm(s,c,u,x):qs(sn(o,_||s,void 0,i,!1),c,u,x);A.level="error",Vs(t,_,A,"onerror")})}function sm(){oe("unhandledrejection",e=>{let[t,o,i]=Xs();if(!t.getIntegration(Ht))return;let s=e;try{"reason"in e?s=e.reason:"detail"in e&&"reason"in e.detail&&(s=e.detail.reason)}catch{}if(ki()||s&&s.__sentry_own_request__)return!0;let c=Dr(s)?lm(s):sn(o,s,void 0,i,!0);c.level="error",Vs(t,s,c,"onunhandledrejection")})}function lm(e){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(e)}`}]}}}function cm(e,t,o,i){let s=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,c=ro(e)?e.message:e,u="Error",x=c.match(s);return x&&(u=x[1],c=x[2]),qs({exception:{values:[{type:u,value:c}]}},t,o,i)}function qs(e,t,o,i){let s=e.exception=e.exception||{},c=s.values=s.values||[],u=c[0]=c[0]||{},x=u.stacktrace=u.stacktrace||{},_=x.frames=x.frames||[],A=isNaN(parseInt(i,10))?void 0:i,L=isNaN(parseInt(o,10))?void 0:o,C=te(t)&&t.length>0?t:Vn();return _.length===0&&_.push({colno:A,filename:C,function:"?",in_app:!0,lineno:L}),e}function dm(e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.log(`Global Handler attached: ${e}`)}function Vs(e,t,o,i){He(o,{handled:!1,type:i}),e.captureEvent(o,{originalException:t})}function Xs(){let e=J(),t=e.getClient(),o=t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[e,o.stackParser,o.attachStacktrace]}var mm=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Ae=class{static __initStatic(){this.id="TryCatch"}__init(){this.name=Ae.id}constructor(t){Ae.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...t}}setupOnce(){this._options.setTimeout&&bt(H,"setTimeout",Ks),this._options.setInterval&&bt(H,"setInterval",Ks),this._options.requestAnimationFrame&&bt(H,"requestAnimationFrame",pm),this._options.XMLHttpRequest&&"XMLHttpRequest"in H&&bt(XMLHttpRequest.prototype,"send",um);let t=this._options.eventTarget;t&&(Array.isArray(t)?t:mm).forEach(fm)}};Ae.__initStatic();function Ks(e){return function(...t){let o=t[0];return t[0]=ir(o,{mechanism:{data:{function:re(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}}function pm(e){return function(t){return e.apply(this,[ir(t,{mechanism:{data:{function:"requestAnimationFrame",handler:re(e)},handled:!0,type:"instrument"}})])}}function um(e){return function(...t){let o=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(s=>{s in o&&typeof o[s]=="function"&&bt(o,s,function(c){let u={mechanism:{data:{function:s,handler:re(c)},handled:!0,type:"instrument"}},x=vr(c);return x&&(u.mechanism.data.handler=re(x)),ir(c,u)})}),e.apply(this,t)}}function fm(e){let t=H,o=t[e]&&t[e].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(bt(o,"addEventListener",function(i){return function(s,c,u){try{typeof c.handleEvent=="function"&&(c.handleEvent=ir(c.handleEvent,{mechanism:{data:{function:"handleEvent",handler:re(c),target:e},handled:!0,type:"instrument"}}))}catch{}return i.apply(this,[s,ir(c,{mechanism:{data:{function:"addEventListener",handler:re(c),target:e},handled:!0,type:"instrument"}}),u])}}),bt(o,"removeEventListener",function(i){return function(s,c,u){let x=c;try{let _=x&&x.__sentry_wrapped__;_&&i.call(this,s,_,u)}catch{}return i.call(this,s,x,u)}}))}var gm="cause",hm=5,pe=class{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=pe.id}constructor(t={}){pe.prototype.__init.call(this),this._key=t.key||gm,this._limit=t.limit||hm}setupOnce(){let t=J().getClient();!t||nr((o,i)=>{let s=J().getIntegration(pe);return s?bm(t.getOptions().stackParser,s._key,s._limit,o,i):o})}};pe.__initStatic();function bm(e,t,o,i,s){if(!i.exception||!i.exception.values||!s||!ee(s.originalException,Error))return i;let c=Js(e,o,s.originalException,t);return i.exception.values=[...c,...i.exception.values],i}function Js(e,t,o,i,s=[]){if(!ee(o[i],Error)||s.length+1>=t)return s;let c=Ti(e,o[i]);return Js(e,t,o[i],i,[c,...s])}var ue=class{constructor(){ue.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=ue.id}setupOnce(){nr(t=>{if(J().getIntegration(ue)){if(!H.navigator&&!H.location&&!H.document)return t;let o=t.request&&t.request.url||H.location&&H.location.href,{referrer:i}=H.document||{},{userAgent:s}=H.navigator||{},c={...t.request&&t.request.headers,...i&&{Referer:i},...s&&{"User-Agent":s}},u={...t.request,...o&&{url:o},headers:c};return{...t,request:u}}return t})}};ue.__initStatic();var fe=class{constructor(){fe.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=fe.id}setupOnce(t,o){let i=s=>{let c=o().getIntegration(fe);if(c){try{if(xm(s,c._previousEvent))return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return c._previousEvent=s}return c._previousEvent=s}return s};i.id=this.name,t(i)}};fe.__initStatic();function xm(e,t){return t?!!(wm(e,t)||vm(e,t)):!1}function wm(e,t){let o=e.message,i=t.message;return!(!o&&!i||o&&!i||!o&&i||o!==i||!el(e,t)||!tl(e,t))}function vm(e,t){let o=Zs(t),i=Zs(e);return!(!o||!i||o.type!==i.type||o.value!==i.value||!el(e,t)||!tl(e,t))}function tl(e,t){let o=Qs(e),i=Qs(t);if(!o&&!i)return!0;if(o&&!i||!o&&i||(o=o,i=i,i.length!==o.length))return!1;for(let s=0;s<i.length;s++){let c=i[s],u=o[s];if(c.filename!==u.filename||c.lineno!==u.lineno||c.colno!==u.colno||c.function!==u.function)return!1}return!0}function el(e,t){let o=e.fingerprint,i=t.fingerprint;if(!o&&!i)return!0;if(o&&!i||!o&&i)return!1;o=o,i=i;try{return o.join("")===i.join("")}catch{return!1}}function Zs(e){return e.exception&&e.exception.values&&e.exception.values[0]}function Qs(e){let t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch{return}}var ol=[new yr.InboundFilters,new yr.FunctionToString,new Ae,new Ce,new Ht,new pe,new fe,new ue];function Oi(e={}){e.defaultIntegrations===void 0&&(e.defaultIntegrations=ol),e.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(e.release=__SENTRY_RELEASE__),H.SENTRY_RELEASE&&H.SENTRY_RELEASE.id&&(e.release=H.SENTRY_RELEASE.id)),e.autoSessionTracking===void 0&&(e.autoSessionTracking=!0),e.sendClientReports===void 0&&(e.sendClientReports=!0);let t={...e,stackParser:Qn(e.stackParser||Ys),integrations:wi(e),transport:e.transport||(Go()?$s:Gs)};_i(cn,t),e.autoSessionTracking&&_m()}function rl(e){e.startSession({ignoreDuration:!0}),e.captureSession()}function _m(){if(typeof H.document>"u"){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&z.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}let e=J();!e.captureSession||(rl(e),oe("history",({from:t,to:o})=>{t===void 0||t===o||rl(J())}))}var Di={};ns(Di,{Breadcrumbs:()=>Ce,Dedupe:()=>fe,GlobalHandlers:()=>Ht,HttpContext:()=>ue,LinkedErrors:()=>pe,TryCatch:()=>Ae});var nl={};H.Sentry&&H.Sentry.Integrations&&(nl=H.Sentry.Integrations);var Jg={...nl,...yr,...Di};var mn=class{constructor(t){this.tag="";this.debug=(...t)=>this.internalLog(3,...t);this.log=(...t)=>this.internalLog(2,...t);this.warn=(...t)=>this.internalLog(1,...t);this.error=(...t)=>this.internalLog(0,...t);this.tag=t,console.error(t,": is_dev_build? ",IS_DEV_BUILD),IS_DEV_BUILD||this.initSentry(),this.listenForBgLogs()}initSentry(){Oi({dsn:"https://b1d81a9e5f1546f79885a473ce33128c@o526305.ingest.sentry.io/6244539",tracesSampleRate:.1,release:"xtension@23.01.10",environment:"PROD"})}listenForBgLogs(){chrome.runtime.onMessage.addListener((t,o)=>{o.id!==chrome.runtime.id||t.action!="log"||this.internalLogTagOverride(t.data.level,t.data.tag,...t.data.messages)})}internalLog(t,...o){this.internalLogTagOverride(t,this.tag,...o)}internalLogTagOverride(t,o,...i){let s=new Date(Date.now()),c=["%c%s %s","color: blue",`[${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}]`,o,...i];if(IS_DEV_BUILD)switch(t){case 3:console.debug(...c);break;case 1:console.warn(...c);break;case 2:console.log(...c);break;case 0:console.error(...c);break}else{switch(t){case 1:case 2:on(c.join(" "));break;case 0:Pr(c.join(" "));break}return}}};var km=new mn("translate");function Em(){let e=[];document.querySelectorAll("[translate-key]").forEach(t=>{let o=t.getAttribute("translate-key");!o||(t.innerHTML=chrome.i18n.getMessage(o),e.push(o))}),km.debug("Translated ",e)}window.addEventListener("load",()=>{Em()});var il=document.createElement("div");il.innerHTML='<div class=wb-header><div class=wb-control><span title="Minimize" class=wb-min></span><span title="Maximize" class=wb-max></span><span title="Fullscreen" class=wb-full></span><span title="Close" class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>';function al(e){return(e||il).cloneNode(!0)}var sl=`
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
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);
    background-size: 14px auto;
    background-position: center calc(50% + 6px);
  }
  .wb-max {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);
    background-size: 17px auto;
  }
  .wb-close {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);
    background-size: 15px auto;
    background-position: 5px center;
  }
  .wb-full {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);
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
`;function Ut(e,t,o,i){e&&e.addEventListener(t,o,i||!1)}function ho(e,t,o,i){e&&e.removeEventListener(t,o,i||!1)}function Fr(e,t){e.stopPropagation(),e.cancelable&&e.preventDefault()}function ne(e,t){return e.getElementsByClassName(t)[0]}function Ii(e,t){e.classList.add(t)}function ll(e,t){return e.classList.contains(t)}function Li(e,t){e.classList.remove(t)}function Lt(e,t,o){o=""+o,e["_s_"+t]!==o&&(e.style.setProperty(t,o),e["_s_"+t]=o)}function cl(e,t){let o=e.firstChild;o?o.nodeValue=t:e.textContent=t}var pn=!1,Ur=[],bo={capture:!0,passive:!0},ge,Sm=0,xo=10,Hr,ar,Ve,ml,Xe,Ke,sr=class{constructor(t,o){if(!(this instanceof sr))return new sr(t);ge||Tm();let i,s,c,u,x,_,A,L,C,q,rt,G,nt,at,xt,mt,Mt,Et,St,ie,vt,_t,gt,ut,$t,Gt,lr,Ne,Oe,De,Ie,y,Yt,W,he,Le,be,yt,zt,Tt,Me,Wt,qt,ht,M,jt,ze;if(t&&(o&&(x=t,t=o),typeof t=="string"?x=t:(i=t.id,s=t.index,c=t.root,u=t.template,x=x||t.title,_=t.icon,A=t.mount,L=t.html,C=t.url,q=t.shadowel,G=t.framename,nt=t.cssurl,at=t.width,xt=t.height,mt=t.minwidth,Mt=t.minheight,Et=t.maxwidth,St=t.maxheight,ie=t.autosize,lr=t.min,Ne=t.max,Oe=t.hidden,De=t.modal,vt=t.x||(De?"center":0),_t=t.y||(De?"center":0),gt=t.top,ut=t.left,$t=t.bottom,Gt=t.right,Ie=t.background,y=t.border,Yt=t.header,W=t.class,Le=t.onclose,be=t.onfocus,yt=t.onblur,zt=t.onmove,Tt=t.onresize,Me=t.onfullscreen,Wt=t.onmaximize,qt=t.onminimize,ht=t.onrestore,M=t.onhide,jt=t.onshow,ze=t.onload)),this.dom=al(u),this.dom.id=this.id=i||"winbox-"+ ++Sm,this.dom.className="winbox"+(W?" "+(typeof W=="string"?W:W.join(" ")):"")+(De?" modal":""),this.dom.winbox=this,this.window=this.dom,this.body=ne(this.dom,"wb-body"),this.header=Yt||35,(s||s===0)&&(xo=s),Ie&&this.setBackground(Ie),y?Lt(this.body,"margin",y+(isNaN(y)?"":"px")):y=0,Yt){let ft=ne(this.dom,"wb-header");Lt(ft,"height",Yt+"px"),Lt(ft,"line-height",Yt+"px"),Lt(this.body,"top",Yt+"px")}x&&this.setTitle(x),_&&this.setIcon(_),A?this.mount(A):L?this.body.innerHTML=L:C&&this.setUrl(C,ze),gt=gt?Nt(gt,Ke):0,$t=$t?Nt($t,Ke):0,ut=ut?Nt(ut,Xe):0,Gt=Gt?Nt(Gt,Xe):0;let ae=Xe-ut-Gt,Ct=Ke-gt-$t;if(Et=Et?Nt(Et,ae):ae,St=St?Nt(St,Ct):Ct,mt=mt?Nt(mt,Et):150,Mt=Mt?Nt(Mt,St):this.header,ie?((c||ge).appendChild(this.body),at=Math.max(Math.min(this.body.clientWidth+y*2+1,Et),mt),xt=Math.max(Math.min(this.body.clientHeight+this.header+y+1,St),Mt),this.dom.appendChild(this.body)):(at=at?Nt(at,Et):Math.max(Et/2,mt)|0,xt=xt?Nt(xt,St):Math.max(St/2,Mt)|0),vt=vt?Nt(vt,ae,at):ut,_t=_t?Nt(_t,Ct,xt):gt,this.x=vt,this.y=_t,this.width=at,this.height=xt,this.minwidth=mt,this.minheight=Mt,this.maxwidth=Et,this.maxheight=St,this.top=gt,this.right=Gt,this.bottom=$t,this.left=ut,this.index=s,this.min=!1,this.max=!1,this.full=!1,this.hidden=!1,this.focused=!1,this.onclose=Le,this.onfocus=be,this.onblur=yt,this.onmove=zt,this.onresize=Tt,this.onfullscreen=Me,this.onmaximize=Wt,this.onminimize=qt,this.onrestore=ht,this.onhide=M,this.onshow=jt,Ne?this.maximize():lr?this.minimize():this.resize().move(),Oe?this.hide():(this.focus(),(s||s===0)&&(this.index=s,s>xo&&(xo=s))),Lt(this.shadowdom?this.shadowdom:this.dom,"z-index",s),Cm(this),q){let ft=document.createElement(q);ft.style.position="absolute";let Vt=document.createElement("style");if(Vt.textContent=sl,ft.appendChild(Vt),nt){let Bt=document.createElement("link");Bt.rel="stylesheet",Bt.type="text/css",Bt.href=nt,Bt.itemprop="url",ft.appendChild(Bt)}ft.appendChild(this.dom),ft.attachShadow({mode:"open"}).innerHTML="<slot></slot>",this.shadowdom=ft,(c||ge).appendChild(ft)}else(c||ge).appendChild(this.dom);(he=t.oncreate)&&he.call(this,t)}static new(t){return new sr(t)}mount(t){return this.unmount(),t._backstore||(t._backstore=t.parentNode),this.body.textContent="",this.body.appendChild(t),this}unmount(t){let o=this.body.firstChild;if(o){let i=t||o._backstore;i&&i.appendChild(o),o._backstore=t}return this}setTitle(t){let o=ne(this.dom,"wb-title");return cl(o,this.title=t),this}setIcon(t){let o=ne(this.dom,"wb-icon");return Lt(o,"background-image","url("+t+")"),Lt(o,"display","inline-block"),this}setBackground(t){return Lt(this.dom,"background",t),this}setUrl(t,o){let i=this.body.firstChild;if(i&&i.tagName.toLowerCase()==="iframe")i.src=t;else{let s=this.framename??"";this.body.innerHTML=`<iframe name="${s}" src="${t}"></iframe>`,o&&(this.body.firstChild.onload=o)}return this}focus(t){return t===!1?this.blur():(ar!==this&&this.dom&&(ar&&ar.blur(),Lt(this.shadowdom?this.shadowdom:this.dom,"z-index",++xo),this.index=xo,this.addClass("focus"),ar=this,this.focused=!0,this.onfocus&&this.onfocus()),this)}blur(t){return t===!1?this.focus():(ar===this&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur(),ar=null),this)}hide(t){if(t===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")}show(t){if(t===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")}minimize(t){return t===!1?this.restore():(Hr&&fn(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(Ur.push(this),Mi(),this.dom.title=this.title,this.addClass("min"),this.min=!0,this.onminimize&&this.onminimize()),this)}restore(){return Hr&&fn(),this.min&&(un(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this}maximize(t){return t===!1?this.restore():(Hr&&fn(),this.min&&un(this),this.max||(this.addClass("max").resize(Xe-this.left-this.right,Ke-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)}fullscreen(t){if(this.min&&(un(this),this.resize().move()),!Hr||!fn())this.body[Ve](),Hr=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(t===!1)return this.restore();return this}close(t){if(this.onclose&&this.onclose(t))return!0;this.min&&un(this),this.unmount(),this.dom.remove(),this.dom.textContent="",this.dom.winbox=null,this.body=null,this.dom=null,ar===this&&(ar=null)}move(t,o,i){return!t&&t!==0?(t=this.x,o=this.y):i||(this.x=t?t=Nt(t,Xe-this.left-this.right,this.width):0,this.y=o?o=Nt(o,Ke-this.top-this.bottom,this.height):0),Lt(this.dom,"left",t+"px"),Lt(this.dom,"top",o+"px"),this.onmove&&this.onmove(t,o),this}resize(t,o,i){return!t&&t!==0?(t=this.width,o=this.height):i||(this.width=t?t=Nt(t,this.maxwidth):0,this.height=o?o=Nt(o,this.maxheight):0,t=Math.max(t,this.minwidth),o=Math.max(o,this.minheight)),Lt(this.dom,"width",t+"px"),Lt(this.dom,"height",o+"px"),this.onresize&&this.onresize(t,o),this}addControl(t){let o=t.class,i=t.image,s=t.click,c=t.index,u=t.title,x=document.createElement("span"),_=ne(this.dom,"wb-control"),A=this;return o&&(x.className=o),i&&Lt(x,"background-image","url("+i+")"),s&&(x.onclick=function(L){s.call(this,L,A)}),u&&(x.title=u),_.insertBefore(x,_.childNodes[c||0]),this}removeControl(t){return t=ne(this.dom,t),t&&t.remove(),this}addClass(t){return Ii(this.dom,t),this}removeClass(t){return Li(this.dom,t),this}hasClass(t){return ll(this.dom,t)}toggleClass(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)}};function Nt(e,t,o){if(typeof e=="string")if(e==="center")e=(t-o)/2|0;else if(e==="right"||e==="bottom")e=t-o;else{let i=parseFloat(e);(""+i!==e&&e.substring((""+i).length))==="%"?e=t/100*i|0:e=i}return e}function Tm(){ge=document.body,ge[Ve="requestFullscreen"]||ge[Ve="msRequestFullscreen"]||ge[Ve="webkitRequestFullscreen"]||ge[Ve="mozRequestFullscreen"]||(Ve=""),ml=Ve&&Ve.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),Ut(window,"resize",function(){dl(),Mi()}),dl()}function Cm(e){qe(e,"drag"),qe(e,"n"),qe(e,"s"),qe(e,"w"),qe(e,"e"),qe(e,"nw"),qe(e,"ne"),qe(e,"se"),qe(e,"sw"),Ut(ne(e.dom,"wb-min"),"click",function(t){Fr(t),e.min?e.focus().restore():e.blur().minimize()}),Ut(ne(e.dom,"wb-max"),"click",function(t){e.max?e.restore():e.maximize()}),Ve?Ut(ne(e.dom,"wb-full"),"click",function(t){e.fullscreen()}):e.addClass("no-full"),Ut(ne(e.dom,"wb-close"),"click",function(t){Fr(t),e.close()||(e=null)}),Ut(e.dom,"click",function(t){e.focus()})}function un(e){Ur.splice(Ur.indexOf(e),1),Mi(),e.removeClass("min"),e.min=!1,e.dom.title=""}function Mi(){let e=Ur.length,t={},o={};for(let i=0,s,c;i<e;i++)s=Ur[i],c=(s.left||s.right)+":"+(s.top||s.bottom),o[c]?o[c]++:(t[c]=0,o[c]=1);for(let i=0,s,c,u;i<e;i++)s=Ur[i],c=(s.left||s.right)+":"+(s.top||s.bottom),u=Math.min((Xe-s.left-s.right)/o[c],250),s.resize(u+1|0,s.header,!0).move(s.left+t[c]*u|0,Ke-s.bottom-s.header,!0),t[c]++}function qe(e,t){let o=ne(e.dom,"wb-"+t);if(!o)return;let i,s,c,u,x,_,A=0;Ut(o,"mousedown",C),Ut(o,"touchstart",C,bo);function L(){u=requestAnimationFrame(L),_&&(e.resize(),_=!1),x&&(e.move(),x=!1)}function C(G){if(Fr(G),e.focus(),t==="drag"){if(e.min){e.restore();return}let nt=Date.now(),at=nt-A;if(A=nt,at<300&&!e.dom.classList.contains("no-max")){e.max?e.restore():e.maximize();return}}!e.max&&!e.min&&(Ii(ge,"wb-lock"),pn&&L(),(i=G.touches)&&(i=i[0])?(G=i,Ut(window,"touchmove",q,bo),Ut(window,"touchend",rt,bo)):(Ut(window,"mousemove",q),Ut(window,"mouseup",rt)),s=G.pageX,c=G.pageY)}function q(G){Fr(G),i&&(G=G.touches[0]);let nt=G.pageX,at=G.pageY,xt=nt-s,mt=at-c,Mt=e.width,Et=e.height,St=e.x,ie=e.y,vt,_t,gt,ut;t==="drag"?(e.x+=xt,e.y+=mt,gt=ut=1):(t==="e"||t==="se"||t==="ne"?(e.width+=xt,vt=1):(t==="w"||t==="sw"||t==="nw")&&(e.x+=xt,e.width-=xt,vt=1,gt=1),t==="s"||t==="se"||t==="sw"?(e.height+=mt,_t=1):(t==="n"||t==="ne"||t==="nw")&&(e.y+=mt,e.height-=mt,_t=1,ut=1)),vt&&(e.width=Math.max(Math.min(e.width,e.maxwidth,Xe-e.x-e.right),e.minwidth),vt=e.width!==Mt),_t&&(e.height=Math.max(Math.min(e.height,e.maxheight,Ke-e.y-e.bottom),e.minheight),_t=e.height!==Et),(vt||_t)&&(pn?_=!0:e.resize()),gt&&(e.x=Math.max(Math.min(e.x,Xe-e.width-e.right),e.left),gt=e.x!==St),ut&&(e.y=Math.max(Math.min(e.y,Ke-e.height-e.bottom),e.top),ut=e.y!==ie),(gt||ut)&&(pn?x=!0:e.move()),(vt||gt)&&(s=nt),(_t||ut)&&(c=at)}function rt(G){Fr(G),Li(ge,"wb-lock"),pn&&cancelAnimationFrame(u),i?(ho(window,"touchmove",q,bo),ho(window,"touchend",rt,bo)):(ho(window,"mousemove",q),ho(window,"mouseup",rt))}}function dl(){let e=document.documentElement;Xe=e.clientWidth,Ke=e.clientHeight}function Am(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function fn(){if(Hr.full=!1,Am())return document[ml](),!0}var zi=class{render(t){console.log("rendering options: ",t);let o=new to(t);document.body.appendChild(o),new sr("Winbox Title",{width:"400px",height:"400px",shadowel:"test-shadow",html:"<h1>Hello winbox</h1>"})}},Nm=[{id:"disable-extension-on-site",type:"checkbox",title:"Temporarily disable extension",description:"Turns off the extension on all websites.",value:!0},{id:"disable-sync",type:"checkbox",title:"Disable storage sync",description:"Your settings will not propagate to other browsers.",value:!0},{id:"radio-id",type:"radio",title:"Sample radio title",description:"The detail information about the radio here.",value:1},{id:"switch-id",type:"switch",title:"Sample switch title",description:"The detail information about the switch here.",value:!0},{id:"select-id",type:"select",title:"Sample select title",description:"The detail information about the select here.",value:2},{id:"range-id",type:"range",title:"Sample range title",description:"The detail information about the range here.",value:0},{id:"textarea-id",type:"textarea",title:"Sample textarea title",description:"The detail information about the textarea here.",value:"hello world"}],Om=new zi;Om.render(Nm);})();
