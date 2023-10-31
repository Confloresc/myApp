"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var y=h(5861),P=h(8360),m=h(839),K=h(7484);h(4874),h(6225);const b=new WeakMap,I=(t,e,s,o=0,r=!1)=>{b.has(t)!==s&&(s?H(t,e,o,r):k(t,e))},H=(t,e,s,o=!1)=>{const r=e.parentNode,n=e.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),b.set(t,n);const d="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},k=(t,e)=>{const s=b.get(t);s&&(b.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",T=(t,e,s)=>{const o=t[N];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[N]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&T(e,0,s)},{once:!0})};let g=0;const C="data-ionic-skip-scroll-assist",V=(t,e,s,o,r,n,a,d=!1)=>{const i=n&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(C)?e.removeAttribute(C):J(t,e,s,o,r,i,d)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},w=t=>{document.activeElement!==t&&(t.setAttribute(C,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,o,r,n,a,d=!1){if(!o&&!r)return;const i=((t,e,s)=>{var o;return((t,e,s,o)=>{const r=t.top,n=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,o-s)-50-n,v=i-r,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,r-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,o||r,n);if(o&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==o&&(T(o,g),U(s,o,()=>g=0)));if(I(e,s,!0,i.inputSafeY,d),w(s),(0,m.r)(()=>e.click()),a&&o&&(g=i.scrollPadding,T(o,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,P.c)(o,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),w(s),a&&U(s,o,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,P.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,o,r,n,a,d){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const o=document,r="ios"===s,n="android"===s,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",r),S=e.getBoolean("inputBlurring",r),u=e.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(A=>(0,m.c)(c,A));const x=c.shadowRoot||c,D=x.querySelector("input")||x.querySelector("textarea"),L=(0,P.f)(c),j=L?null:c.closest("ion-footer");if(D){if(L&&i&&!l.has(c)){const A=((t,e,s)=>{if(!s||!e)return()=>{};const o=d=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,d)},r=()=>I(t,e,!1),n=()=>o(!0),a=()=>o(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),e.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",r)}})(c,D,L);l.set(c,A)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||j)&&d&&!_.has(c)){const A=V(c,D,L,j,a,u,W,n);_.set(c,A)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const d=s.activeElement;if(!d||d.matches(p))return;const i=a.target;i!==d&&(i.matches(p)||i.closest(p)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})();for(const f of v)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,o){return t.apply(this,arguments)}}()}}]);