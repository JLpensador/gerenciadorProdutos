import{$ as g,D as Q,Da as D,F as Ie,H as Ae,Ma as Me,O as V,P as De,R as H,Sb as y,V as h,W as _,Y as E,Zb as Ce,_ as c,_a as xe,a as u,ca as b,da as F,g as ge,j as R,k as be,n as ve,na as Te,pa as K,qa as v,r as U,s as ye,ta as A,u as Ee,xa as we,ya as X,za as ke}from"./chunk-TZXYH6OG.js";var J;try{J=typeof Intl<"u"&&Intl.v8BreakIterator}catch{J=!1}var f=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Ce(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||J)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(c(we))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var C,Oe=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Yt(){if(C)return C;if(typeof document!="object"||!document)return C=new Set(Oe),C;let i=document.createElement("input");return C=new Set(Oe.filter(e=>(i.setAttribute("type",e),i.type===e))),C}var L;function it(){if(L==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>L=!0}))}finally{L=L||!1}return L}function O(i){return it()?i:!!i.capture}var S=function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i}(S||{}),W,w;function Qt(){if(w==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return w=!1,w;if("scrollBehavior"in document.documentElement.style)w=!0;else{let i=Element.prototype.scrollTo;i?w=!/\{\s*\[native code\]\s*\}/.test(i.toString()):w=!1}}return w}function Xt(){if(typeof document!="object"||!document)return S.NORMAL;if(W==null){let i=document.createElement("div"),e=i.style;i.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let o=document.createElement("div"),t=o.style;t.width="2px",t.height="1px",i.appendChild(o),document.body.appendChild(i),W=S.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,W=i.scrollLeft===0?S.NEGATED:S.INVERTED),i.remove()}return W}var q;function nt(){if(q==null){let i=typeof document<"u"?document.head:null;q=!!(i&&(i.createShadowRoot||i.attachShadow))}return q}function Ne(i){if(nt()){let e=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function st(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let e=i.shadowRoot.activeElement;if(e===i)break;i=e}return i}function I(i){return i.composedPath?i.composedPath()[0]:i.target}function Re(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ot(i){return i!=null&&`${i}`!="false"}function rt(i,e=0){return at(i)?Number(i):arguments.length===2?e:0}function at(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function te(i){return Array.isArray(i)?i:[i]}function Jt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function k(i){return i instanceof A?i.nativeElement:i}var Fe=new Set,M,ct=(()=>{let e=class e{constructor(t,n){this._platform=t,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):lt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&dt(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(n){return new(n||e)(c(f),c(ke,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function dt(i,e){if(!Fe.has(i))try{M||(M=document.createElement("style"),e&&M.setAttribute("nonce",e),M.setAttribute("type","text/css"),document.head.appendChild(M)),M.sheet&&(M.sheet.insertRule(`@media ${i} {body{ }}`,0),Fe.add(i))}catch(o){console.error(o)}}function lt(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Se=(()=>{let e=class e{constructor(t,n){this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new R}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Le(te(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=Le(te(t)).map(a=>this._registerQuery(a).observable),r=ye(s);return r=Ee(r.pipe(Ie(1)),r.pipe(V(1),Q(0))),r.pipe(U(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:l})=>{d.matches=d.matches||m,d.breakpoints[l]=m}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new ge(a=>{let d=m=>this._zone.run(()=>a.next(m));return n.addListener(d),()=>{n.removeListener(d)}}).pipe(De(n),U(({matches:a})=>({query:t,matches:a})),H(this._destroySubject)),mql:n};return this._queries.set(t,r),r}};e.\u0275fac=function(n){return new(n||e)(c(ct),c(v))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Le(i){return i.map(e=>e.split(",")).reduce((e,o)=>e.concat(o)).map(e=>e.trim())}var di={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function hi(i,...e){return e.length?e.some(o=>i[o]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ht=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=_({providers:[ht]});let i=e;return i})();var mt=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return pt(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=ft(At(t));if(n&&(Be(n)===-1||!this.isVisible(n)))return!1;let s=t.nodeName.toLowerCase(),r=Be(t);return t.hasAttribute("contenteditable")?r!==-1:s==="iframe"||s==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Et(t)?!1:s==="audio"?t.hasAttribute("controls")?r!==-1:!1:s==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,n){return It(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(n){return new(n||e)(c(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function ft(i){try{return i.frameElement}catch{return null}}function pt(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function _t(i){let e=i.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function gt(i){return vt(i)&&i.type=="hidden"}function bt(i){return yt(i)&&i.hasAttribute("href")}function vt(i){return i.nodeName.toLowerCase()=="input"}function yt(i){return i.nodeName.toLowerCase()=="a"}function He(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let e=i.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Be(i){if(!He(i))return null;let e=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function Et(i){let e=i.nodeName.toLowerCase(),o=e==="input"&&i.type;return o==="text"||o==="password"||e==="select"||e==="textarea"}function It(i){return gt(i)?!1:_t(i)||bt(i)||i.hasAttribute("contenteditable")||He(i)}function At(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var ne=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,o,t,n,s=!1,r){this._element=e,this._checker=o,this._ngZone=t,this._document=n,this._injector=r,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}destroy(){let e=this._startAnchor,o=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),o&&(o.removeEventListener("focus",this.endAnchorListener),o.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let o=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?o.length?o[0]:this._getFirstTabbableElement(this._element):o.length?o[o.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let o=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(o){if(!this._checker.isFocusable(o)){let t=this._getFirstTabbableElement(o);return t?.focus(e),!!t}return o.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let o=this._getRegionBoundary("start");return o&&o.focus(e),!!o}focusLastTabbableElement(e){let o=this._getRegionBoundary("end");return o&&o.focus(e),!!o}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=0;t<o.length;t++){let n=o[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(o[t]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=o.length-1;t>=0;t--){let n=o[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(o[t]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,o){e?o.setAttribute("tabindex","0"):o.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._injector?Me(e,{injector:this._injector}):setTimeout(e)}},Hi=(()=>{let e=class e{constructor(t,n,s){this._checker=t,this._ngZone=n,this._injector=g(Te),this._document=s}create(t,n=!1){return new ne(t,this._checker,this._ngZone,this._document,n,this._injector)}};e.\u0275fac=function(n){return new(n||e)(c(mt),c(v),c(y))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function se(i){return i.buttons===0||i.detail===0}function oe(i){let e=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Dt=new E("cdk-input-modality-detector-options"),Tt={ignoreKeys:[18,17,224,91,16]},Ke=650,N=O({passive:!0,capture:!0}),wt=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,n,s,r){this._platform=t,this._mostRecentTarget=null,this._modality=new be(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=I(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<Ke||(this._modality.next(se(a)?"keyboard":"mouse"),this._mostRecentTarget=I(a))},this._onTouchstart=a=>{if(oe(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=I(a)},this._options=u(u({},Tt),r),this.modalityDetected=this._modality.pipe(V(1)),this.modalityChanged=this.modalityDetected.pipe(Ae()),t.isBrowser&&n.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,N),s.addEventListener("mousedown",this._onMousedown,N),s.addEventListener("touchstart",this._onTouchstart,N)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,N),document.removeEventListener("mousedown",this._onMousedown,N),document.removeEventListener("touchstart",this._onTouchstart,N))}};e.\u0275fac=function(n){return new(n||e)(c(f),c(v),c(y),c(Dt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),kt=new E("liveAnnouncerElement",{providedIn:"root",factory:Mt});function Mt(){return null}var xt=new E("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ct=0,Ki=(()=>{let e=class e{constructor(t,n,s,r){this._ngZone=n,this._defaultOptions=r,this._document=s,this._liveElement=t||this._createLiveElement()}announce(t,...n){let s=this._defaultOptions,r,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[r,a]=n,this.clear(),clearTimeout(this._previousTimeout),r||(r=s&&s.politeness?s.politeness:"polite"),a==null&&s&&(a=s.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=t,typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",n=this._document.getElementsByClassName(t),s=this._document.createElement("div");for(let r=0;r<n.length;r++)n[r].remove();return s.classList.add(t),s.classList.add("cdk-visually-hidden"),s.setAttribute("aria-atomic","true"),s.setAttribute("aria-live","polite"),s.id=`cdk-live-announcer-${Ct++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<n.length;s++){let r=n[s],a=r.getAttribute("aria-owns");a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}};e.\u0275fac=function(n){return new(n||e)(c(kt,8),c(v),c(y),c(xt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var z=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(z||{}),Ot=new E("cdk-focus-monitor-default-options"),$=O({passive:!0,capture:!0}),Wi=(()=>{let e=class e{constructor(t,n,s,r,a){this._ngZone=t,this._platform=n,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new R,this._rootNodeFocusAndBlurListener=d=>{let m=I(d);for(let l=m;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=r,this._detectionMode=a?.detectionMode||z.IMMEDIATE}monitor(t,n=!1){let s=k(t);if(!this._platform.isBrowser||s.nodeType!==1)return ve();let r=Ne(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return n&&(a.checkChildren=!0),a.subject;let d={checkChildren:n,subject:new R,rootNode:r};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let n=k(t),s=this._elementInfo.get(n);s&&(s.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(s))}focusVia(t,n,s){let r=k(t),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([d,m])=>this._originChanged(d,n,m)):(this._setOrigin(n),typeof r.focus=="function"&&r.focus(s))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===z.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle("cdk-focused",!!n),t.classList.toggle("cdk-touch-focused",n==="touch"),t.classList.toggle("cdk-keyboard-focused",n==="keyboard"),t.classList.toggle("cdk-mouse-focused",n==="mouse"),t.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&n,this._detectionMode===z.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Ke:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(t,n){let s=this._elementInfo.get(n),r=I(t);!s||!s.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),s)}_onBlur(t,n){let s=this._elementInfo.get(n);!s||s.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(s,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,s=this._rootNodeFocusListenerCount.get(n)||0;s||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,$),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,$)}),this._rootNodeFocusListenerCount.set(n,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(H(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let s=this._rootNodeFocusListenerCount.get(n);s>1?this._rootNodeFocusListenerCount.set(n,s-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,$),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,$),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,s){this._setClasses(t,n),this._emitOrigin(s,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((s,r)=>{(r===t||s.checkChildren&&r.contains(t))&&n.push([r,s])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!n||n===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}};e.\u0275fac=function(n){return new(n||e)(c(v),c(f),c(wt),c(y,8),c(Ot,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var x=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(x||{}),Ue="cdk-high-contrast-black-on-white",Ve="cdk-high-contrast-white-on-black",ie="cdk-high-contrast-active",re=(()=>{let e=class e{constructor(t,n){this._platform=t,this._document=n,this._breakpointSubscription=g(Se).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return x.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let n=this._document.defaultView||window,s=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return x.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return x.BLACK_ON_WHITE}return x.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ie,Ue,Ve),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===x.BLACK_ON_WHITE?t.add(ie,Ue):n===x.WHITE_ON_BLACK&&t.add(ie,Ve)}}};e.\u0275fac=function(n){return new(n||e)(c(f),c(y))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),$i=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(n){return new(n||e)(c(re))},e.\u0275mod=b({type:e}),e.\u0275inj=_({imports:[Pe]});let i=e;return i})();var Lt=new E("cdk-dir-doc",{providedIn:"root",factory:St});function St(){return g(y)}var jt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Pt(i){let e=i?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?jt.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var nn=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new K,t){let n=t.body?t.body.dir:null,s=t.documentElement?t.documentElement.dir:null;this.value=Pt(n||s||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(n){return new(n||e)(c(Lt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ae=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=_({});let i=e;return i})();function Bt(){return!0}var Ut=new E("mat-sanity-checks",{providedIn:"root",factory:Bt}),We=(()=>{let e=class e{constructor(t,n,s){this._sanityChecks=n,this._document=s,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return Re()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(n){return new(n||e)(c(re),c(Ut,8),c(y))},e.\u0275mod=b({type:e}),e.\u0275inj=_({imports:[ae,ae]});let i=e;return i})();var $e=class{constructor(e,o,t,n,s){this._defaultMatcher=e,this.ngControl=o,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=s,this.errorState=!1}updateErrorState(){let e=this.errorState,o=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,s=t?.isErrorState(n,o)??!1;s!==e&&(this.errorState=s,this._stateChanges.next())}};var $n=(()=>{let e=class e{isErrorState(t,n){return!!(t&&t.invalid&&(t.touched||n&&n.submitted))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var p=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(p||{}),le=class{constructor(e,o,t,n=!1){this._renderer=e,this.element=o,this.config=t,this._animationForciblyDisabledThroughCss=n,this.state=p.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},ze=O({passive:!0,capture:!0}),he=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let o=I(e);o&&this._events.get(e.type)?.forEach((t,n)=>{(n===o||n.contains(o))&&t.forEach(s=>s.handleEvent(e))})}}addHandler(e,o,t,n){let s=this._events.get(o);if(s){let r=s.get(t);r?r.add(n):s.set(t,new Set([n]))}else this._events.set(o,new Map([[t,new Set([n])]])),e.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,ze)})}removeHandler(e,o,t){let n=this._events.get(e);if(!n)return;let s=n.get(o);s&&(s.delete(t),s.size===0&&n.delete(o),n.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,ze)))}},Ge={enterDuration:225,exitDuration:150},Vt=800,Ze=O({passive:!0,capture:!0}),Ye=["mousedown","touchstart"],Qe=["mouseup","mouseleave","touchend","touchcancel"],P=class P{constructor(e,o,t,n){this._target=e,this._ngZone=o,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=k(t))}fadeInRipple(e,o,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=u(u({},Ge),t.animation);t.centered&&(e=n.left+n.width/2,o=n.top+n.height/2);let r=t.radius||Ht(e,o,n),a=e-n.left,d=o-n.top,m=s.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let me=window.getComputedStyle(l),tt=me.transitionProperty,fe=me.transitionDuration,Z=tt==="none"||fe==="0s"||fe==="0s, 0s"||n.width===0&&n.height===0,T=new le(this,l,t,Z);l.style.transform="scale3d(1, 1, 1)",T.state=p.FADING_IN,t.persistent||(this._mostRecentTransientRipple=T);let B=null;return!Z&&(m||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let pe=()=>{B&&(B.fallbackTimer=null),clearTimeout(_e),this._finishRippleTransition(T)},Y=()=>this._destroyRipple(T),_e=setTimeout(Y,m+100);l.addEventListener("transitionend",pe),l.addEventListener("transitioncancel",Y),B={onTransitionEnd:pe,onTransitionCancel:Y,fallbackTimer:_e}}),this._activeRipples.set(T,B),(Z||!m)&&this._finishRippleTransition(T),T}fadeOutRipple(e){if(e.state===p.FADING_OUT||e.state===p.HIDDEN)return;let o=e.element,t=u(u({},Ge),e.config.animation);o.style.transitionDuration=`${t.exitDuration}ms`,o.style.opacity="0",e.state=p.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let o=k(e);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Ye.forEach(t=>{P._eventManager.addHandler(this._ngZone,t,o,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Qe.forEach(o=>{this._triggerElement.addEventListener(o,this,Ze)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===p.FADING_IN?this._startFadeOutTransition(e):e.state===p.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let o=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=p.VISIBLE,!t&&(!o||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let o=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=p.HIDDEN,o!==null&&(e.element.removeEventListener("transitionend",o.onTransitionEnd),e.element.removeEventListener("transitioncancel",o.onTransitionCancel),o.fallbackTimer!==null&&clearTimeout(o.fallbackTimer)),e.element.remove()}_onMousedown(e){let o=se(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Vt;!this._target.rippleDisabled&&!o&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!oe(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=e.changedTouches;if(o)for(let t=0;t<o.length;t++)this.fadeInRipple(o[t].clientX,o[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let o=e.state===p.VISIBLE||e.config.terminateOnPointerUp&&e.state===p.FADING_IN;!e.config.persistent&&o&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Ye.forEach(o=>P._eventManager.removeHandler(o,e,this)),this._pointerUpEventsRegistered&&(Qe.forEach(o=>e.removeEventListener(o,this,Ze)),this._pointerUpEventsRegistered=!1))}};P._eventManager=new he;var ue=P;function Ht(i,e,o){let t=Math.max(Math.abs(i-o.left),Math.abs(i-o.right)),n=Math.max(Math.abs(e-o.top),Math.abs(e-o.bottom));return Math.sqrt(t*t+n*n)}var et=new E("mat-ripple-global-options"),Kt=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,n,s,r,a){this._elementRef=t,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new ue(this,n,t,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,s){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,n,u(u({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}};e.\u0275fac=function(n){return new(n||e)(D(A),D(v),D(f),D(et,8),D(X,8))},e.\u0275dir=F({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,s){n&2&&xe("mat-ripple-unbounded",s.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let i=e;return i})(),zn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b({type:e}),e.\u0275inj=_({imports:[We,We]});let i=e;return i})();var Xe={capture:!0},qe=["focus","mousedown","mouseenter","touchstart"],ce="mat-ripple-loader-uninitialized",de="mat-ripple-loader-class-name",Je="mat-ripple-loader-centered",G="mat-ripple-loader-disabled",Gn=(()=>{let e=class e{constructor(){this._document=g(y,{optional:!0}),this._animationMode=g(X,{optional:!0}),this._globalRippleOptions=g(et,{optional:!0}),this._platform=g(f),this._ngZone=g(v),this._hosts=new Map,this._onInteraction=t=>{let n=I(t);if(n instanceof HTMLElement){let s=n.closest(`[${ce}="${this._globalRippleOptions?.namespace??""}"]`);s&&this._createRipple(s)}},this._ngZone.runOutsideAngular(()=>{for(let t of qe)this._document?.addEventListener(t,this._onInteraction,Xe)})}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);for(let n of qe)this._document?.removeEventListener(n,this._onInteraction,Xe)}configureRipple(t,n){t.setAttribute(ce,this._globalRippleOptions?.namespace??""),(n.className||!t.hasAttribute(de))&&t.setAttribute(de,n.className||""),n.centered&&t.setAttribute(Je,""),n.disabled&&t.setAttribute(G,"")}getRipple(t){return this._hosts.get(t)||this._createRipple(t)}setDisabled(t,n){let s=this._hosts.get(t);if(s){s.disabled=n;return}n?t.setAttribute(G,""):t.removeAttribute(G)}_createRipple(t){if(!this._document)return;let n=this._hosts.get(t);if(n)return n;t.querySelector(".mat-ripple")?.remove();let s=this._document.createElement("span");s.classList.add("mat-ripple",t.getAttribute(de)),t.append(s);let r=new Kt(new A(s),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return r._isInitialized=!0,r.trigger=t,r.centered=t.hasAttribute(Je),r.disabled=t.hasAttribute(G),this.attachRipple(t,r),r}attachRipple(t,n){t.removeAttribute(ce),this._hosts.set(t,n)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.ngOnDestroy(),this._hosts.delete(t))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{f as a,Yt as b,O as c,S as d,Qt as e,Xt as f,st as g,I as h,Re as i,hi as j,ot as k,rt as l,te as m,Jt as n,k as o,Pe as p,Se as q,di as r,mt as s,Hi as t,Ki as u,Wi as v,$i as w,nn as x,ae as y,We as z,$e as A,$n as B,zn as C,Gn as D};
