var wy=Object.defineProperty;var zd=n=>{throw TypeError(n)};var Ty=(n,e,t)=>e in n?wy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var En=(n,e,t)=>Ty(n,typeof e!="symbol"?e+"":e,t),lu=(n,e,t)=>e.has(n)||zd("Cannot "+t);var N=(n,e,t)=>(lu(n,e,"read from private field"),t?t.call(n):e.get(n)),Ie=(n,e,t)=>e.has(n)?zd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),_e=(n,e,t,r)=>(lu(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),oe=(n,e,t)=>(lu(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dm=!1;var Sc=Array.isArray,Iy=Array.prototype.indexOf,Va=Array.prototype.includes,Rc=Array.from,fm=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,Ay=Object.getOwnPropertyDescriptors,by=Object.prototype,Sy=Array.prototype,pm=Object.getPrototypeOf,jd=Object.isExtensible;function la(n){return typeof n=="function"}const Nh=()=>{};function Ry(n){for(var e=0;e<n.length;e++)n[e]()}function mm(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}function Cy(n,e,t=!1){return n===void 0?t?e():e:n}function Hd(n,e){if(Array.isArray(n))return n;if(e===void 0||!(Symbol.iterator in n))return Array.from(n);const t=[];for(const r of n)if(t.push(r),t.length===e)break;return t}const Rn=2,bo=4,Cc=8,Oh=1<<24,wr=16,Rr=32,zi=64,Vu=128,Dh=256,Ar=512,zt=1024,it=2048,tr=4096,Ln=8192,bn=16384,$o=32768,Jl=1<<25,ji=65536,Xl=1<<17,gm=1<<18,Bo=1<<19,Py=1<<20,qr=1<<25,Zl=1<<21,oo=1<<22,Fi=1<<23,ao=Symbol("$state"),_m=Symbol("component"),ky=Symbol("legacy props"),Ny=Symbol(""),xl=Symbol("attributes"),Mu=Symbol("class"),xu=Symbol("style"),pa=Symbol("text"),Ll=Symbol("form reset"),Ka=new class extends Error{constructor(){super(...arguments);En(this,"name","StaleReactionError");En(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var cm;const Pc=!!((cm=globalThis.document)!=null&&cm.contentType)&&globalThis.document.contentType.includes("xml"),Oy=1,Dy=2,vm=4,Vy=8,My=16,xy=1,Ly=2,ym={},xt=Symbol("uninitialized"),Em="http://www.w3.org/1999/xhtml",Fy="http://www.w3.org/2000/svg",Uy="@attach";function $y(){console.warn("https://svelte.dev/e/derived_inert")}function By(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function qy(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let wm=!1;function Tm(n){return n===this.v}function zy(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Im(n){return!zy(n,this.v)}function Am(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function jy(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Hy(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Wy(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Gy(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ky(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Qy(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yy(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jy(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xy(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Zy(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let eE=!1;function tE(n){let e=n.p;for(;e!==null&&e.c===null;)e=e.p;return(e==null?void 0:e.c)??null}function nE(n,e){return n===null&&Am(),n.c??(n.c=new Map(tE(n)||void 0))}let Sn=null;function So(n){Sn=n}function rE(n){return nE(Sn).get(n)}function Vh(n,e=!1,t){Sn={p:Sn,i:!1,c:null,e:null,s:n,x:null,r:Le,l:null}}function Mh(n){var e=Sn,t=e.e;if(t!==null){e.e=null;for(var r of t)Qm(r)}return e.i=!0,Sn=e.p,bm(n)}function bm(n={}){return fm(n,_m,{value:!0}),n}function Sm(){return!0}let ds=[];function Rm(){var n=ds;ds=[],Ry(n)}function zr(n){if(ds.length===0&&!Sa){var e=ds;queueMicrotask(()=>{e===ds&&Rm()})}ds.push(n)}function iE(){for(;ds.length>0;)Rm()}const sE=-7169;function Rt(n,e){n.f=n.f&sE|e}function xh(n){(n.f&Ar)!==0||n.deps===null?Rt(n,zt):Rt(n,tr)}function Cm(n,e){(n.f&it)!==0?e.set(n,it):(n.f&tr)!==0&&e.get(n)!==it&&e.set(n,tr),Rt(n,zt)}function oE(n,e){if(e){const t=document.body;n.autofocus=!0,zr(()=>{document.activeElement===t&&n.focus()})}}let Wd=!1;function aE(){Wd||(Wd=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t[Ll])==null||e.call(t)})},{capture:!0}))}function qo(n){var e=ve,t=Le;ur(null),Jr(null);try{return n()}finally{ur(e),Jr(t)}}function Lh(n,e,t,r=t){n.addEventListener(e,()=>qo(t));const i=n[Ll];i?n[Ll]=()=>{i(),r(!0)}:n[Ll]=()=>r(!0),aE()}function Pm(n,e,t,r){const i=kc;var s=n.filter(w=>!w.settled),a=e.map(i);if(t.length===0&&s.length===0){r(a);return}var l=Le,c=lE(),h=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(w=>w.promise)):null;function f(w){if((l.f&bn)===0){c();try{r([...a,...w])}catch(b){$r(b,l)}ec()}}var _=km();if(t.length===0){h.then(()=>f([])).finally(_);return}function g(){Promise.all(t.map(w=>cE(w))).then(f).catch(w=>$r(w,l)).finally(_)}h?h.then(()=>{if((l.f&bn)!==0){_();return}c(),g(),ec()}):g()}function lE(){var n=Le,e=ve,t=Sn,r=ee;return function(s=!0){Jr(n),ur(e),So(t),s&&(n.f&bn)===0&&(r==null||r.activate(),r==null||r.apply())}}function ec(n=!0){Jr(null),ur(null),So(null),n&&(ee==null||ee.deactivate())}function km(){var n=Le,e=n.b,t=ee,r=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(r,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(r,n)}}function kc(n){var e=Rn|it;return Le!==null&&(Le.f|=Bo),{ctx:Sn,deps:null,effects:null,equals:Tm,f:e,fn:n,reactions:null,rv:0,v:xt,wv:0,parent:Le,ac:null}}const ma=Symbol("obsolete");function cE(n,e,t){let r=Le;r===null&&jy();var i=void 0,s=Ss(xt),a=!ve,l=new Set;return bE(()=>{var w,b;var c=Le,h=mm();i=h.promise;try{Promise.resolve(n()).then(h.resolve,O=>{O!==Ka&&h.reject(O)}).finally(ec)}catch(O){h.reject(O),ec()}var f=ee;if(a){if((c.f&$o)!==0)var _=km();if((w=r.b)!=null&&w.is_rendered())(b=f.async_deriveds.get(c))==null||b.reject(ma);else for(const O of l.values())O.reject(ma);l.add(h),f.async_deriveds.set(c,h)}const g=(O,C=void 0)=>{_==null||_(),l.delete(h),C!==ma&&(f.activate(),C?(s.f|=Fi,Ro(s,C)):((s.f&Fi)!==0&&(s.f^=Fi),Ro(s,O)),f.deactivate())};h.promise.then(g,O=>g(null,O||"unknown"))}),Nc(()=>{for(const c of l)c.reject(ma)}),new Promise(c=>{function h(f){function _(){f===i?c(s):h(i)}f.then(_,_)}h(i)})}function Zn(n){const e=kc(n);return tg(e),e}function uE(n){const e=kc(n);return e.equals=Im,e}function hE(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)un(e[t])}}function Fh(n){var e,t=Le,r=n.parent;if(!Hi&&r!==null&&n.v!==xt&&(r.f&(bn|Ln))!==0)return $y(),n.v;Jr(r);try{hE(n),e=sg(n)}finally{Jr(t)}return e}function Nm(n){var e=Fh(n);if(!n.equals(e)&&(n.wv=rg(),(!(ee!=null&&ee.is_fork)||n.deps===null)&&(ee!==null?(ee.capture(n,e,!0),Ui==null||Ui.capture(n,e,!0)):n.v=e,n.deps===null))){Rt(n,zt);return}Hi||(cn!==null?(Bh()||ee!=null&&ee.is_fork)&&cn.set(n,e):xh(n))}function dE(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&qo(()=>{t.ac.abort(Ka),t.ac=null}),t.fn!==null&&(t.teardown=Nh),Ma(t,0),zh(t))}function Om(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&Co(e)}let cu=null,Ys=null,ee=null,Ui=null,cn=null,Lu=null,Sa=!1,uu=!1,Ra=null,Fl=null;var Gd=0;let fE=1;var yo,Eo,wo,ai,To,li,ja,xr,Lr,Io,gs,be,Fu,Dm,Uu,ga,$u,Vm,Mm,xm,eo,pE,_a;const Ic=class Ic{constructor(){Ie(this,be);En(this,"id",fE++);En(this,"started",!1);En(this,"linked",!0);En(this,"prev",null);En(this,"next",null);En(this,"async_deriveds",new Map);En(this,"current",new Map);En(this,"previous",new Map);Ie(this,yo,new Set);Ie(this,Eo,new Set);Ie(this,wo,0);Ie(this,ai,new Map);Ie(this,To,null);Ie(this,li,[]);Ie(this,ja,[]);Ie(this,xr,new Map);Ie(this,Lr,new Map);Ie(this,Io,new Set);En(this,"is_fork",!1);Ie(this,gs,!1);Ys===null?cu=Ys=this:(Ys.next=this,this.prev=Ys),Ys=this}skip_effect(e){N(this,Lr).has(e)||N(this,Lr).set(e,{d:[],m:[]}),N(this,Io).delete(e)}unskip_effect(e,t=r=>this.schedule(r)){var r=N(this,Lr).get(e);if(r){N(this,Lr).delete(e);for(var i of r.d)Rt(i,it),t(i);for(i of r.m)Rt(i,tr),t(i)}N(this,Io).add(e)}capture(e,t,r=!1){e.v!==xt&&!this.previous.has(e)&&this.previous.set(e,e.v),(e.f&Fi)===0&&(this.current.set(e,[t,r]),cn==null||cn.set(e,t)),this.is_fork||(e.v=t)}activate(){ee=this}deactivate(){ee=null,cn=null}flush(){try{uu=!0,ee=this,oe(this,be,ga).call(this)}finally{Gd=0,Lu=null,Ra=null,Fl=null,uu=!1,ee=null,cn=null,jr.clear()}}discard(){var e;for(const t of N(this,Eo))t(this);N(this,Eo).clear();for(const t of this.async_deriveds.values())t.reject(ma);oe(this,be,_a).call(this),(e=N(this,To))==null||e.resolve()}register_created_effect(e){N(this,ja).push(e)}increment(e,t){if(_e(this,wo,N(this,wo)+1),e){let r=N(this,ai).get(t)??0;N(this,ai).set(t,r+1)}}decrement(e,t){if(_e(this,wo,N(this,wo)-1),e){let r=N(this,ai).get(t)??0;r===1?N(this,ai).delete(t):N(this,ai).set(t,r-1)}N(this,gs)||(_e(this,gs,!0),zr(()=>{_e(this,gs,!1),this.linked&&this.flush()}))}transfer_reactions(e){for(const[t,r]of e)this.add_dirty_reaction(t,r);e.clear()}add_dirty_reaction(e,t){(t===it||N(this,xr).get(e)!==it)&&N(this,xr).set(e,t)}oncommit(e){N(this,yo).add(e)}ondiscard(e){N(this,Eo).add(e)}settled(){return(N(this,To)??_e(this,To,mm())).promise}static ensure(){if(ee===null){const e=ee=new Ic;!uu&&!Sa&&zr(()=>{e.started||e.flush()})}return ee}apply(){{cn=null;return}}schedule(e){var t;if(Lu=e,(t=e.b)!=null&&t.is_pending&&(e.f&(bo|Cc|Oh))!==0&&(e.f&$o)===0){e.b.defer_effect(e);return}N(this,li).push(e)}};yo=new WeakMap,Eo=new WeakMap,wo=new WeakMap,ai=new WeakMap,To=new WeakMap,li=new WeakMap,ja=new WeakMap,xr=new WeakMap,Lr=new WeakMap,Io=new WeakMap,gs=new WeakMap,be=new WeakSet,Fu=function(){if(this.is_fork)return!0;for(const e of N(this,ai).keys())if(!oe(this,be,Dm).call(this,e))return!0;return!1},Dm=function(e){for(var t=e;t!==null;t=t.parent)if(N(this,Lr).has(t))return!0;return!1},Uu=function(){var e=[];for(const s of N(this,li))if(!((s.f&bn)!==0||(s.f&(it|tr))===0)){for(var t=s,r=!1;t.parent!==null;){t=t.parent;var i=t.f;if((i&(zi|Rr))!==0){if((i&zt)===0){r=!0;break}t.f^=zt}}r||e.push(t)}return _e(this,li,[]),e},ga=function(){var l,c,h,f;this.started=!0;for(const[_,g]of N(this,xr))Rt(_,g),this.schedule(_);this.apply();for(var e=Ra=[],t=[],r=Fl=[];N(this,li).length>0;){Gd++>1e3&&(oe(this,be,_a).call(this),gE());for(const _ of oe(this,be,Uu).call(this))try{oe(this,be,$u).call(this,_,e,t)}catch(g){throw Um(_),oe(this,be,Fu).call(this)||this.discard(),g}}if(ee=null,r.length>0){var i=Ic.ensure();for(const _ of r)i.schedule(_)}if(Ra=null,Fl=null,oe(this,be,Fu).call(this)){oe(this,be,eo).call(this,t),oe(this,be,eo).call(this,e);for(const[_,g]of N(this,Lr))Fm(_,g);r.length>0&&oe(l=ee,be,ga).call(l);return}const s=oe(this,be,Vm).call(this);if(s){oe(this,be,eo).call(this,t),oe(this,be,eo).call(this,e),oe(c=s,be,xm).call(c,this);return}N(this,xr).clear();for(const _ of N(this,yo))_(this);N(this,yo).clear(),Ui=this,Kd(t),Kd(e),Ui=null,(h=N(this,To))==null||h.resolve();var a=ee;N(this,wo)===0&&(N(this,li).length===0||a!==null)&&oe(this,be,_a).call(this),a!==null&&(jr.clear(),oe(f=a,be,ga).call(f))},$u=function(e,t,r){e.f^=zt;for(var i=e.first;i!==null;){var s=i.f,a=(s&(Rr|zi))!==0,l=a&&(s&zt)!==0,c=l||(s&Ln)!==0||N(this,Lr).has(i);if(!c&&i.fn!==null){a?i.f^=zt:(s&bo)!==0?t.push(i):Ya(i)&&((s&wr)!==0&&this.add_dirty_reaction(i,tr),Co(i));var h=i.first;if(h!==null){i=h;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Vm=function(){for(var e=this.prev;e!==null;e=e.prev)if(!e.is_fork&&oe(this,be,Mm).call(this,e))return e;return null},Mm=function(e){for(const[t,[,r]]of this.current)if(!r&&e.current.has(t))return!0;return!1},xm=function(e){var r;for(const[i,s]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,s);for(const[i,s]of e.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}e.async_deriveds.clear(),this.transfer_reactions(N(e,xr));const t=i=>{var s=i.reactions;if(s!==null&&!((i.f&Rn)!==0&&(i.f&(it|tr))===0))for(const c of s){var a=c.f;if((a&Rn)!==0)t(c);else{var l=c;a&(oo|wr)&&!this.async_deriveds.has(l)&&(N(this,xr).delete(l),Rt(l,it),this.schedule(l))}}};for(const i of this.current.keys())t(i);this.oncommit(()=>e.discard()),oe(r=e,be,_a).call(r),ee=this,oe(this,be,ga).call(this)},eo=function(e){for(var t=0;t<e.length;t+=1)Cm(e[t],N(this,xr))},pE=function(){var _,g;for(let w=cu;w!==null;w=w.next){var e=w.id<this.id,t=[];for(const[b,[O,C]]of this.current){if(w.current.has(b)){var r=w.current.get(b)[0];if(e&&O!==r)w.current.set(b,[O,C]);else continue}t.push(b)}if(e)for(const[b,O]of this.async_deriveds){const C=w.async_deriveds.get(b);C&&O.promise.then(C.resolve).catch(C.reject)}var i=[...w.current.keys()].filter(b=>!w.current.get(b)[1]);if(!(!w.started||i.length===0)){var s=i.filter(b=>!this.current.has(b));if(s.length===0)e&&w.discard();else if(t.length>0){if(e)for(const b of N(this,Io))w.unskip_effect(b,O=>{var C;(O.f&(wr|oo))!==0?w.schedule(O):oe(C=w,be,eo).call(C,[O])});w.activate();var a=new Set,l=new Map;for(var c of t)Lm(c,s,a,l);l=new Map;var h=[...w.current].filter(([b,O])=>{const C=this.current.get(b);return C?C[0]!==O[0]||C[1]!==O[1]:!0}).map(([b])=>b);if(h.length>0)for(const b of N(this,ja))(b.f&(bn|Ln|Xl))===0&&Uh(b,h,l)&&((b.f&(oo|wr))!==0?(Rt(b,it),w.schedule(b)):w.add_dirty_reaction(b,it));if(N(w,li).length>0&&!N(w,gs)){w.apply();for(var f of oe(_=w,be,Uu).call(_))oe(g=w,be,$u).call(g,f,[],[])}w.deactivate()}}}},_a=function(){if(this.linked){var e=this.prev,t=this.next;e===null?cu=t:e.next=t,t===null?Ys=e:t.prev=e,this.linked=!1}};let bs=Ic;function mE(n){var e=Sa,t=Ui;Ui=null,Sa=!0;try{for(var r;;){if(iE(),ee===null)return r;ee.flush()}}finally{Sa=e,Ui=t}}function gE(){try{Qy()}catch(n){$r(n,Lu)}}let yr=null;function Kd(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if((r.f&(bn|Ln))===0&&Ya(r)&&(yr=new Set,Co(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Xm(r),(yr==null?void 0:yr.size)>0)){jr.clear();for(const i of yr){if((i.f&(bn|Ln))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)yr.has(a)&&(yr.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const c=s[l];(c.f&(bn|Ln))===0&&Co(c)}}yr.clear()}}yr=null}}function Lm(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;(s&Rn)!==0?Lm(i,e,t,r):(s&(oo|wr))!==0&&(s&it)===0&&Uh(i,e,r)&&(Rt(i,it),$h(i))}}function Uh(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(Va.call(e,i))return!0;if((i.f&Rn)!==0&&Uh(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function $h(n){ee.schedule(n)}function Fm(n,e){if(!((n.f&Rr)!==0&&(n.f&zt)!==0)){(n.f&it)!==0?e.d.push(n):(n.f&tr)!==0&&e.m.push(n),Rt(n,zt);for(var t=n.first;t!==null;)Fm(t,e),t=t.next}}function Um(n){Rt(n,zt);for(var e=n.first;e!==null;)Um(e),e=e.next}let tc=new Set;const jr=new Map;let $m=!1;function Ss(n,e){var t={f:0,v:n,reactions:null,equals:Tm,rv:0,wv:0};return t}function re(n,e){const t=Ss(n);return tg(t),t}function _E(n,e=!1,t=!0){const r=Ss(n);return e||(r.equals=Im),r}function D(n,e,t=!1){ve!==null&&(!Tr||(ve.f&Xl)!==0)&&Sm()&&(ve.f&(Rn|wr|oo|Xl))!==0&&(Hr===null||!Hr.has(n))&&Xy();let r=t?lr(e):e;return Ro(n,r,Fl)}var hs=null,Bu=0;function Ro(n,e,t=null){if(!n.equals(e)){Hi?jr.set(n,e):jr.has(n)||jr.set(n,n.v);var r=bs.ensure();if(r.capture(n,e),(n.f&Rn)!==0){const i=n;(n.f&it)!==0&&Fh(i),cn===null&&xh(i)}n.wv=rg(),hs=null,Bu=0,Bm(n,it,t),hs=null,Le!==null&&(Le.f&zt)!==0&&(Le.f&(Rr|zi))===0&&(sr===null?CE([n]):sr.push(n)),!r.is_fork&&tc.size>0&&!$m&&vE()}return e}function vE(){$m=!1;for(const n of tc){(n.f&zt)!==0&&Rt(n,tr);let e;try{e=Ya(n)}catch{e=!0}e&&Co(n)}tc.clear()}function Ca(n){D(n,n.v+1)}function Bm(n,e,t){var r=n.reactions;if(r!==null){var i=r.length;if(Bu+=i,Bu>1e5&&hs===null&&(hs=new Set),hs!==null){if(hs.has(n))return;hs.add(n)}for(var s=0;s<i;s++){var a=r[s],l=a.f,c=(l&it)===0;if(c&&Rt(a,e),(l&Xl)!==0)tc.add(a);else if((l&Rn)!==0){var h=a;cn==null||cn.delete(h),Bm(h,tr,t)}else if(c){var f=a;(l&wr)!==0&&yr!==null&&yr.add(f),t!==null?t.push(f):$h(f)}}}}function lr(n){if(typeof n!="object"||n===null||ao in n||_m in n)return n;const e=pm(n);if(e!==by&&e!==Sy)return n;var t=new Map,r=Sc(n),i=re(0),s=Ts,a=l=>{if(Ts===s)return l();var c=ve,h=Ts;ur(null),Xd(s);var f=l();return ur(c),Xd(h),f};return r&&t.set("length",re(n.length)),new Proxy(n,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Yy();var f=t.get(c);return f===void 0?a(()=>{var _=re(h.value);return t.set(c,_),_}):D(f,h.value,!0),!0},deleteProperty(l,c){var h=t.get(c);if(h===void 0){if(c in l){const f=a(()=>re(xt));t.set(c,f),Ca(i)}}else D(h,xt),Ca(i);return!0},get(l,c,h){var w;if(c===ao)return n;var f=t.get(c),_=c in l;if(f===void 0&&(!_||(w=Es(l,c))!=null&&w.writable)&&(f=a(()=>{var b=lr(_?l[c]:xt),O=re(b);return O}),t.set(c,f)),f!==void 0){var g=p(f);return g===xt?void 0:g}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var g;(g=this.has)==null||g.call(this,l,c);var h=Reflect.getOwnPropertyDescriptor(l,c),f=t.get(c);if(f!==void 0){var _=p(f);if(_===xt)return;if(h&&"value"in h)h.value=_;else return{enumerable:!0,configurable:!0,value:_,writable:!0}}return h},has(l,c){var g;if(c===ao)return!0;var h=t.get(c),f=h!==void 0&&h.v!==xt||Reflect.has(l,c);if(h!==void 0||(Le!==null||ve!==null)&&(!f||(g=Es(l,c))!=null&&g.writable)){h===void 0&&(h=a(()=>{var w=f?lr(l[c]):xt,b=re(w);return b}),t.set(c,h));var _=p(h);if(_===xt)return!1}return f},set(l,c,h,f){var z;var _=t.get(c),g=c in l;if(r&&c==="length")for(var w=h;w<_.v;w+=1){var b=t.get(w+"");b!==void 0?D(b,xt):w in l&&(b=a(()=>re(xt)),t.set(w+"",b))}if(_===void 0)(!g||(z=Es(l,c))!=null&&z.writable)&&(_=a(()=>re(void 0)),D(_,lr(h)),t.set(c,_));else{g=_.v!==xt;var O=a(()=>lr(h));D(_,O)}var C=Reflect.getOwnPropertyDescriptor(l,c);if(C!=null&&C.set&&C.set.call(f,h),!g){if(r&&typeof c=="string"){var F=t.get("length"),$=Number(c);Number.isInteger($)&&$>=F.v&&D(F,$+1)}Ca(i)}return!0},ownKeys(l){p(i);var c=Reflect.ownKeys(l).filter(_=>{var g=t.get(_);return g===void 0||g.v!==xt});for(var[h,f]of t)f.v!==xt&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Jy()}})}function Qd(n){try{if(n!==null&&typeof n=="object"&&ao in n)return n[ao]}catch{}return n}function qm(n,e){return Object.is(Qd(n),Qd(e))}var Yd,zm,jm,Hm,Wm;function yE(){if(Yd===void 0){Yd=window,zm=document,jm=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Hm=Es(e,"firstChild").get,Wm=Es(e,"nextSibling").get,jd(n)&&(n[Mu]=void 0,n[xl]=null,n[xu]=void 0,n.__e=void 0),jd(t)&&(t[pa]=void 0)}}function br(n=""){return document.createTextNode(n)}function Rs(n){return Hm.call(n)}function Qa(n){return Wm.call(n)}function S(n,e){return Rs(n)}function Ul(n,e=!1){{var t=Rs(n);return t instanceof Comment&&t.data===""?Qa(t):t}}function K(n,e=!1){return Rs(n)}function E(n,e=1,t=!1){let r=n;for(;e--;)r=Qa(r);return r}function EE(n){n.textContent=""}function Gm(){return!1}function Km(n,e,t){return e==null||e===Em?t?document.createElement(n,{is:t}):document.createElement(n):t?document.createElementNS(e,n,{is:t}):document.createElementNS(e,n)}function wE(n){var e=Le;if(e===null)return ve.f|=Fi,n;if((e.f&$o)===0&&(e.f&bo)===0)throw n;$r(n,e)}function $r(n,e){if(n===ym)throw n;if(!(e!==null&&(e.f&bn)!==0)){for(;e!==null;){if((e.f&Vu)!==0&&(e.f&(bn|Jl))===0){if((e.f&$o)===0)throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}function TE(n){Le===null&&(ve===null&&Ky(),Gy()),Hi&&Wy()}function IE(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function ei(n,e){var t=Le;t!==null&&(t.f&Ln)!==0&&(n|=Ln);var r={ctx:Sn,deps:null,nodes:null,f:n|it|Ar,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};ee==null||ee.register_created_effect(r);var i=r;if((n&bo)!==0)Ra!==null?Ra.push(r):bs.ensure().schedule(r);else if(e!==null){try{Co(r)}catch(a){throw un(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Bo)===0&&(i=i.first,(n&wr)!==0&&(n&ji)!==0&&i!==null&&(i.f|=ji))}if(i!==null&&(i.parent=t,t!==null&&IE(i,t),ve!==null&&(ve.f&Rn)!==0&&(n&zi)===0)){var s=ve;(s.effects??(s.effects=[])).push(i)}return r}function Bh(){return ve!==null&&!Tr}function Nc(n){const e=ei(Cc,null);return Rt(e,zt),e.teardown=n,e}function qu(n){TE();var e=Le.f,t=!ve&&(e&Rr)!==0&&Sn!==null&&!Sn.i;if(t){var r=Sn;(r.e??(r.e=[])).push(n)}else return Qm(n)}function Qm(n){return ei(bo|Py,n)}function AE(n){bs.ensure();const e=ei(zi|Bo,n);return(t={})=>new Promise(r=>{t.outro?ws(e,()=>{un(e),r(void 0)}):(un(e),r(void 0))})}function Oc(n){return ei(bo,n)}function bE(n){return ei(oo|Bo,n)}function qh(n,e=0){return ei(Cc|e,n)}function Ce(n,e=[],t=[],r=[]){Pm(r,e,t,i=>{ei(Cc,()=>{n(...i.map(p))})})}function zo(n,e=0){var t=ei(wr|e,n);return t}function Ym(n,e=0){var t=ei(Oh|e,n);return t}function Mn(n){return ei(Rr|Bo,n)}function Jm(n){var e=n.teardown;if(e!==null){const t=Hi,r=ve;Jd(!0),ur(null);try{e.call(null)}catch(i){$r(i,n.parent)}finally{Jd(t),ur(r)}}}function zh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&qo(()=>{i.abort(Ka)});var r=t.next;(t.f&zi)!==0?t.parent=null:un(t,e),t=r}}function SE(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Rr)===0&&un(e),e=t}}function un(n,e=!0){var t=!1;(e||(n.f&gm)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(RE(n.nodes.start,n.nodes.end),t=!0),n.f|=Jl,zh(n,e&&!t),Ma(n,0);var r=n.nodes&&n.nodes.t;if(r!==null)for(const s of r)s.stop();Jm(n),n.f^=Jl,n.f|=bn;var i=n.parent;i!==null&&i.first!==null&&Xm(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function RE(n,e){for(;n!==null;){var t=n===e?null:Qa(n);n.remove(),n=t}}function Xm(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function ws(n,e,t=!0){var r=[];n.f|=Dh,Zm(n,r,!0);var i=()=>{t&&un(n),e&&e()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function Zm(n,e,t){if((n.f&Ln)===0){n.f^=Ln;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var i=n.first;i!==null;){var s=i.next;if((i.f&zi)===0){var a=(i.f&ji)!==0||(i.f&Rr)!==0&&(n.f&wr)!==0;Zm(i,e,a?t:!1)}i=s}}}function nc(n){n.f&=~Dh,eg(n,!0)}function eg(n,e){if((n.f&Dh)===0&&(n.f&Ln)!==0){n.f^=Ln,(n.f&zt)===0&&(Rt(n,it),bs.ensure().schedule(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&ji)!==0||(t.f&Rr)!==0;eg(t,i?e:!1),t=r}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function jh(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var i=t===r?null:Qa(t);e.append(t),t=i}}let Hi=!1;function Jd(n){Hi=n}let ve=null,Tr=!1;function ur(n){ve=n}let Le=null;function Jr(n){Le=n}let Hr=null;function tg(n){ve!==null&&((ve.f&Zl)!==0||(ve.f&Rn)!==0)&&(Hr??(Hr=new Set)).add(n)}let Wn=null,Xn=0,sr=null;function CE(n){sr=n}let ng=1,fs=0,Ts=fs;function Xd(n){Ts=n}function rg(){return++ng}function Ya(n){var e=n.f;if((e&it)!==0)return!0;if((e&tr)!==0){for(var t=n.deps,r=t.length,i=0;i<r;i++){var s=t[i];if(Ya(s)&&Nm(s),s.wv>n.wv)return!0}(e&Ar)!==0&&cn===null&&Rt(n,zt)}return!1}function ig(n,e,t=!0){var r=n.reactions;if(r!==null&&!(Hr!==null&&Hr.has(n)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&Rn)!==0?ig(s,e,!1):e===s&&(t?Rt(s,it):(s.f&zt)!==0&&Rt(s,tr),$h(s))}}function sg(n){var e=Wn,t=Xn,r=sr,i=ve,s=Hr,a=Sn,l=Tr,c=Ts,h=n.f;Wn=null,Xn=0,sr=null,ve=(h&(Rr|zi))===0?n:null,Hr=null,So(n.ctx),Tr=!1,Ts=++fs,n.ac!==null&&(qo(()=>{n.ac.abort(Ka)}),n.ac=null);try{n.f|=Zl;var f=n.fn,_=f();n.f|=$o;var g=Zd(n);if(Sm()&&sr!==null&&!Tr&&g!==null&&(n.f&(Rn|tr|it))===0)for(var w=0;w<sr.length;w++)ig(sr[w],n);if(i!==null&&i!==n){if(fs++,i.deps!==null)for(let b=0;b<t;b+=1)i.deps[b].rv=fs;if(e!==null)for(const b of e)b.rv=fs;sr!==null&&(r===null?r=sr:r.push(...sr))}return(n.f&Fi)!==0&&(n.f^=Fi),_}catch(b){return Zd(n),wE(b)}finally{n.f^=Zl,Wn=e,Xn=t,sr=r,ve=i,Hr=s,So(a),Tr=l,Ts=c}}function Zd(n){var i;var e=n.deps,t=ee==null?void 0:ee.is_fork;if(Wn!==null){var r;if(t||Ma(n,Xn),e!==null&&Xn>0)for(e.length=Xn+Wn.length,r=0;r<Wn.length;r++)e[Xn+r]=Wn[r];else n.deps=e=Wn;if(Bh()&&(n.f&Ar)!==0)for(r=Xn;r<e.length;r++)((i=e[r]).reactions??(i.reactions=[])).push(n)}else!t&&e!==null&&Xn<e.length&&(Ma(n,Xn),e.length=Xn);return e}function PE(n,e){let t=e.reactions;if(t!==null){var r=Iy.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}if(t===null&&(e.f&Rn)!==0&&(Wn===null||!Va.call(Wn,e))){var s=e;(s.f&Ar)!==0&&(s.f^=Ar),s.v!==xt&&xh(s),s.ac!==null&&qo(()=>{s.ac.abort(Ka),s.ac=null,Rt(s,it)}),dE(s),Ma(s,0)}}function Ma(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)PE(n,t[r])}function Co(n){var e=n.f;if((e&bn)===0){Rt(n,zt);var t=Le;Le=n;try{(e&(wr|Oh))!==0?SE(n):zh(n),Jm(n);var r=sg(n);n.teardown=typeof r=="function"?r:null,n.wv=ng;var i;dm&&eE&&(n.f&it)!==0&&n.deps}finally{Le=t}}}async function kE(){await Promise.resolve(),mE()}function p(n){var e=n.f,t=(e&Rn)!==0;if(ve!==null&&!Tr){var r=Le!==null&&(Le.f&bn)!==0;if(!r&&(Hr===null||!Hr.has(n))){var i=ve.deps;if((ve.f&Zl)!==0)n.rv<fs&&(n.rv=fs,Wn===null&&i!==null&&i[Xn]===n?Xn++:Wn===null?Wn=[n]:Wn.push(n));else{ve.deps??(ve.deps=[]),Va.call(ve.deps,n)||ve.deps.push(n);var s=n.reactions;s===null?n.reactions=[ve]:Va.call(s,ve)||s.push(ve)}}}if(Hi&&jr.has(n))return jr.get(n);if(t){var a=n;if(Hi){var l=a.v;return((a.f&zt)===0&&a.reactions!==null||ag(a))&&(l=Fh(a)),jr.set(a,l),l}var c=(a.f&Ar)===0&&!Tr&&ve!==null&&(ve.f&Ar)!==0,h=(a.f&$o)===0;Ya(a)&&(c&&(a.f|=Ar),Nm(a)),c&&!h&&(Om(a),og(a))}if(cn!=null&&cn.has(n))return cn.get(n);if((n.f&Fi)!==0)throw n.v;return n.v}function og(n){if(n.f|=Ar,n.deps!==null)for(const t of n.deps){var e=t.reactions;e===null?t.reactions=[n]:Va.call(e,n)||e.push(n),(t.f&Rn)!==0&&(t.f&Ar)===0&&(Om(t),og(t))}}function ag(n){if(n.v===xt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(jr.has(e)||(e.f&Rn)!==0&&ag(e))return!0;return!1}function Dc(n){var e=Tr;try{return Tr=!0,n()}finally{Tr=e}}function NE(n){return n.endsWith("capture")&&n!=="gotpointercapture"&&n!=="lostpointercapture"}const OE=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function DE(n){return OE.includes(n)}const VE={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ME(n){return n=n.toLowerCase(),VE[n]??n}const xE=["touchstart","touchmove"];function LE(n){return xE.includes(n)}const ps=Symbol("events"),lg=new Set,zu=new Set;function cg(n,e,t,r={}){function i(s){if(r.capture||ju.call(e,s),!s.cancelBubble)return qo(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(i.__removed=!1,zr(()=>{i.__removed||e.addEventListener(n,i,r)})):e.addEventListener(n,i,r),i}function Js(n,e,t,r,i){var s={capture:r,passive:i},a=cg(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Nc(()=>{a.__removed=!0,e.removeEventListener(n,a,s)})}function ce(n,e,t){(e[ps]??(e[ps]={}))[n]=t}function ug(n){for(var e=0;e<n.length;e++)lg.add(n[e]);for(var t of zu)t(n)}let hu=null,du=!1;function ju(n){var O,C;var e=this,t=e.ownerDocument,r=n.type,i=((O=n.composedPath)==null?void 0:O.call(n))||[],s=i[0]||n.target;hu=n,du||(du=!0,setTimeout(()=>{du=!1,hu=null}));var a=0,l=hu===n&&n[ps];if(l){var c=i.indexOf(l);if(c!==-1&&(e===document||e===window)){n[ps]=e;return}var h=i.indexOf(e);if(h===-1)return;c<=h&&(a=c)}if(s=i[a]||n.target,s!==e){fm(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=ve,_=Le;ur(null),Jr(null);try{for(var g,w=[];s!==null&&s!==e;){try{var b=(C=s[ps])==null?void 0:C[r];b!=null&&(!s.disabled||n.target===s)&&b.call(s,n)}catch(F){g?w.push(F):g=F}if(n.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(g){for(let F of w)queueMicrotask(()=>{throw F});throw g}}finally{n[ps]=e,delete n.currentTarget,ur(f),Jr(_)}}}var um;const fu=((um=globalThis==null?void 0:globalThis.window)==null?void 0:um.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function FE(n){return(fu==null?void 0:fu.createHTML(n))??n}function hg(n){var e=Km("template");return e.innerHTML=FE(n.replaceAll("<!>","<!---->")),e.content}function Po(n,e){var t=Le;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function ie(n,e){var t=(e&xy)!==0,r=(e&Ly)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=hg(s?n:"<!>"+n),t||(i=Rs(i)));var a=r||jm?document.importNode(i,!0):i.cloneNode(!0);if(t){var l=Rs(a),c=a.lastChild;Po(l,c)}else Po(a,a);return a}}function UE(n,e,t="svg"){var r=!n.startsWith("<!>"),i=`<${t}>${r?n:"<!>"+n}</${t}>`,s;return()=>{if(!s){var a=hg(i),l=Rs(a);s=Rs(l)}var c=s.cloneNode(!0);return Po(c,c),c}}function $E(n,e){return UE(n,e,"svg")}function BE(n=""){{var e=br(n+"");return Po(e,e),e}}function qE(){var n=document.createDocumentFragment(),e=document.createComment(""),t=br();return n.append(e,t),Po(e,t),n}function Z(n,e){n!==null&&n.before(e)}function zE(n){let e=0,t=Ss(0),r;return()=>{Bh()&&(p(t),qh(()=>(e===0&&(r=Dc(()=>n(()=>Ca(t)))),e+=1,()=>{zr(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Ca(t))})})))}}var jE=ji|Bo;function HE(n,e,t,r){new WE(n,e,t,r)}var or,kh,ar,_s,Tn,Qn,Vn,Yn,Fr,vs,Mi,Ao,Ha,ci,Ac,ke,GE,KE,Hu,Oi,QE,Wu,va,$l,Gu,Ku;class WE{constructor(e,t,r,i){Ie(this,ke);En(this,"parent");En(this,"is_pending",!1);En(this,"transform_error");Ie(this,or);Ie(this,kh,null);Ie(this,ar);Ie(this,_s);Ie(this,Tn);Ie(this,Qn,null);Ie(this,Vn,null);Ie(this,Yn,null);Ie(this,Fr,null);Ie(this,vs,0);Ie(this,Mi,0);Ie(this,Ao,!1);Ie(this,Ha,new Map);Ie(this,ci,null);Ie(this,Ac,zE(()=>(_e(this,ci,Ss(N(this,vs))),()=>{_e(this,ci,null)})));var s;_e(this,or,e),_e(this,ar,t),_e(this,_s,a=>{var l=Le;l.b=this,l.f|=Vu,r(a)}),this.parent=Le.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),_e(this,Tn,zo(()=>{oe(this,ke,Wu).call(this)},jE))}defer_effect(e){Cm(e,N(this,Ha))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!N(this,ar).pending}update_pending_count(e,t){oe(this,ke,Gu).call(this,e,t),_e(this,vs,N(this,vs)+e),!(!N(this,ci)||N(this,Ao))&&(_e(this,Ao,!0),zr(()=>{_e(this,Ao,!1),N(this,ci)&&Ro(N(this,ci),N(this,vs))}))}get_effect_pending(){return N(this,Ac).call(this),p(N(this,ci))}error(e){if(e===ym||!N(this,ar).onerror&&!N(this,ar).failed)throw e;ee!=null&&ee.is_fork?(N(this,Qn)&&ee.skip_effect(N(this,Qn)),N(this,Vn)&&ee.skip_effect(N(this,Vn)),N(this,Yn)&&ee.skip_effect(N(this,Yn)),ee.oncommit(()=>{oe(this,ke,Oi).call(this)||oe(this,ke,Ku).call(this,e)})):oe(this,ke,Ku).call(this,e)}}or=new WeakMap,kh=new WeakMap,ar=new WeakMap,_s=new WeakMap,Tn=new WeakMap,Qn=new WeakMap,Vn=new WeakMap,Yn=new WeakMap,Fr=new WeakMap,vs=new WeakMap,Mi=new WeakMap,Ao=new WeakMap,Ha=new WeakMap,ci=new WeakMap,Ac=new WeakMap,ke=new WeakSet,GE=function(){try{_e(this,Qn,Mn(()=>N(this,_s).call(this,N(this,or))))}catch(e){this.error(e)}},KE=function(e){const t=N(this,ar).failed,{reset:r,invoke_onerror:i}=oe(this,ke,Hu).call(this,e);zr(i),t&&_e(this,Yn,Mn(()=>{t(N(this,or),()=>e,()=>r)}))},Hu=function(e){var t=!1,r=!1;const i=()=>{if(!oe(this,ke,Oi).call(this)){if(t){qy();return}t=!0,r&&Zy(),N(this,Yn)!==null&&ws(N(this,Yn),()=>{_e(this,Yn,null)}),oe(this,ke,$l).call(this,()=>{oe(this,ke,Wu).call(this)})}};return{reset:i,invoke_onerror:()=>{var a,l;if(!oe(this,ke,Oi).call(this))try{r=!0,(l=(a=N(this,ar)).onerror)==null||l.call(a,e,i),r=!1}catch(c){$r(c,N(this,Tn)&&N(this,Tn).parent)}}}},Oi=function(){return(N(this,Tn).f&(bn|Jl))!==0},QE=function(){const e=N(this,ar).pending;e&&(this.is_pending=!0,_e(this,Vn,Mn(()=>e(N(this,or)))),zr(()=>{if(!oe(this,ke,Oi).call(this)){var t=_e(this,Fr,document.createDocumentFragment()),r=br(),i=!1;if(t.append(r),_e(this,Qn,oe(this,ke,$l).call(this,()=>{try{return Mn(()=>N(this,_s).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){$r(a,N(this,Tn).parent)}return null}})),N(this,Qn)===null){_e(this,Fr,null),i&&oe(this,ke,va).call(this,ee);return}N(this,Mi)===0&&(N(this,or).before(t),_e(this,Fr,null),ws(N(this,Vn),()=>{_e(this,Vn,null)}),oe(this,ke,va).call(this,ee))}}))},Wu=function(){try{if(this.is_pending=this.has_pending_snippet(),_e(this,Mi,0),_e(this,vs,0),_e(this,Qn,Mn(()=>{N(this,_s).call(this,N(this,or))})),N(this,Mi)>0){var e=_e(this,Fr,document.createDocumentFragment());jh(N(this,Qn),e);const t=N(this,ar).pending;_e(this,Vn,Mn(()=>t(N(this,or))))}else oe(this,ke,va).call(this,ee)}catch(t){this.error(t)}},va=function(e){this.is_pending=!1,e.transfer_reactions(N(this,Ha))},$l=function(e){var t=Le,r=ve,i=Sn;Jr(N(this,Tn)),ur(N(this,Tn)),So(N(this,Tn).ctx);try{return bs.ensure(),e()}finally{Jr(t),ur(r),So(i)}},Gu=function(e,t){var r;if(!this.has_pending_snippet()){this.parent&&oe(r=this.parent,ke,Gu).call(r,e,t);return}_e(this,Mi,N(this,Mi)+e),N(this,Mi)===0&&(oe(this,ke,va).call(this,t),N(this,Vn)&&ws(N(this,Vn),()=>{_e(this,Vn,null)}),N(this,Fr)&&(N(this,or).before(N(this,Fr)),_e(this,Fr,null)))},Ku=function(e){N(this,Qn)&&(un(N(this,Qn)),_e(this,Qn,null)),N(this,Vn)&&(un(N(this,Vn)),_e(this,Vn,null)),N(this,Yn)&&(un(N(this,Yn)),_e(this,Yn,null));let t=N(this,ar).failed;const r=i=>{if(oe(this,ke,Oi).call(this))return;const{reset:s,invoke_onerror:a}=oe(this,ke,Hu).call(this,i);a(),t&&!oe(this,ke,Oi).call(this)&&_e(this,Yn,oe(this,ke,$l).call(this,()=>{try{return Mn(()=>{var l=Le;l.b=this,l.f|=Vu,t(N(this,or),()=>i,()=>s)})}catch(l){return $r(l,N(this,Tn).parent),null}}))};zr(()=>{if(!oe(this,ke,Oi).call(this)){var i;try{i=this.transform_error(e)}catch(s){$r(s,N(this,Tn)&&N(this,Tn).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>$r(s,N(this,Tn)&&N(this,Tn).parent)):r(i)}})};function j(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[pa]??(n[pa]=n.nodeValue))&&(n[pa]=t,n.nodeValue=`${t}`)}function YE(n,e){return JE(n,e)}const El=new Map;function JE(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0,transformError:l}){yE();var c=void 0,h=AE(()=>{var f=t??e.appendChild(br());HE(f,{pending:()=>{}},w=>{Vh({});var b=Sn;s&&(b.c=s),i&&(r.$$events=i),c=n(w,r)||bm(),Mh()},l);var _=new Set,g=w=>{for(var b=0;b<w.length;b++){var O=w[b];if(!_.has(O)){_.add(O);var C=LE(O);for(const z of[e,document]){var F=El.get(z);F===void 0&&(F=new Map,El.set(z,F));var $=F.get(O);$===void 0?(z.addEventListener(O,ju,{passive:C}),F.set(O,1)):F.set(O,$+1)}}}};return g(Rc(lg)),zu.add(g),()=>{var C;for(var w of _)for(const F of[e,document]){var b=El.get(F),O=b.get(w);--O==0?(F.removeEventListener(w,ju),b.delete(w),b.size===0&&El.delete(F)):b.set(w,O)}zu.delete(g),f!==t&&((C=f.parentNode)==null||C.removeChild(f))}});return XE.set(c,h),c}let XE=new WeakMap;var Er,Ur,Jn,ys,Wa,Ga,bc;class Hh{constructor(e,t=!0){En(this,"anchor");Ie(this,Er,new Map);Ie(this,Ur,new Map);Ie(this,Jn,new Map);Ie(this,ys,new Set);Ie(this,Wa,!0);Ie(this,Ga,e=>{if(N(this,Er).has(e)){var t=N(this,Er).get(e),r=N(this,Ur).get(t);if(r)nc(r),N(this,ys).delete(t);else{var i=N(this,Jn).get(t);i&&(nc(i.effect),N(this,Ur).set(t,i.effect),N(this,Jn).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of N(this,Er)){if(N(this,Er).delete(s),s===e)break;const l=N(this,Jn).get(a);l&&(un(l.effect),N(this,Jn).delete(a))}for(const[s,a]of N(this,Ur)){if(s===t||N(this,ys).has(s))continue;const l=()=>{if(Array.from(N(this,Er).values()).includes(s)){var h=document.createDocumentFragment();jh(a,h),h.append(br()),N(this,Jn).set(s,{effect:a,fragment:h})}else un(a);N(this,ys).delete(s),N(this,Ur).delete(s)};N(this,Wa)||!r?(N(this,ys).add(s),ws(a,l,!1)):l()}}});Ie(this,bc,e=>{N(this,Er).delete(e);const t=Array.from(N(this,Er).values());for(const[r,i]of N(this,Jn))t.includes(r)||(un(i.effect),N(this,Jn).delete(r))});this.anchor=e,_e(this,Wa,t)}ensure(e,t){var r=ee,i=Gm();if(t&&!N(this,Ur).has(e)&&!N(this,Jn).has(e))if(i){var s=document.createDocumentFragment(),a=br();s.append(a),N(this,Jn).set(e,{effect:Mn(()=>t(a)),fragment:s})}else N(this,Ur).set(e,Mn(()=>t(this.anchor)));if(N(this,Er).set(r,e),i){for(const[l,c]of N(this,Ur))l===e?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of N(this,Jn))l===e?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(N(this,Ga)),r.ondiscard(N(this,bc))}else N(this,Ga).call(this,r)}}Er=new WeakMap,Ur=new WeakMap,Jn=new WeakMap,ys=new WeakMap,Wa=new WeakMap,Ga=new WeakMap,bc=new WeakMap;function Ve(n,e,t=!1){var r=new Hh(n),i=t?ji:0;function s(a,l){r.ensure(a,l)}zo(()=>{var a=!1;e((l,c=0)=>{a=!0,s(c,l)}),a||s(-1,null)},i)}function ZE(n,e){return e}function ew(n,e,t){for(var r=[],i=e.length,s,a=e.length,l=0;l<i;l++){let _=e[l];ws(_,()=>{if(s){if(s.pending.delete(_),s.done.add(_),s.pending.size===0){var g=n.outrogroups;Qu(n,Rc(s.done)),g.delete(s),g.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&t!==null&&n.pending.size===0;if(c){var h=t,f=h.parentNode;EE(f),f.append(h),n.items.clear()}Qu(n,e,!c)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Qu(n,e,t=!0){var r;if(n.pending.size>0){r=new Set;for(const a of n.pending.values())for(const l of a)r.add(n.items.get(l).e)}for(var i=0;i<e.length;i++){var s=e[i];if(r!=null&&r.has(s)){s.f|=qr;const a=document.createDocumentFragment();jh(s,a)}else un(e[i],t)}}var ef;function Di(n,e,t,r,i,s=null){var a=n,l=new Map,c=(e&vm)!==0;if(c){var h=n;a=h.appendChild(br())}var f=null,_=uE(()=>{var $=t();return Sc($)?$:$==null?[]:Rc($)}),g=new Map,w=!0;function b($){if((F.effect.f&bn)===0){F.pending.delete($);var z=p(_);F.fallback=f,tw(F,z,a,e,r),f!==null&&(z.length===0?(f.f&qr)===0?nc(f):(f.f^=qr,ya(f,null,a)):ws(f,()=>{f=null}))}}function O($){F.pending.delete($)}var C=zo(()=>{for(var $=p(_),z=$.length,se=new Set,Se=ee,Y=Gm(),A=0;A<z;A+=1){var y=$[A],v=r(y,A),T=w?null:l.get(v);T?(T.v&&Ro(T.v,y),T.i&&Ro(T.i,A),Y&&Se.unskip_effect(T.e)):(T=nw(l,w?a:ef??(ef=br()),y,v,A,i,e,t),w||(T.e.f|=qr),l.set(v,T)),se.add(v)}if(z===0&&s&&!f&&(w?f=Mn(()=>s(a)):(f=Mn(()=>s(ef??(ef=br()))),f.f|=qr)),z>se.size&&Hy(),!w)if(g.set(Se,se),Y){for(const[R,P]of l)se.has(R)||Se.skip_effect(P.e);Se.oncommit(b),Se.ondiscard(O)}else b(Se);p(_)}),F={effect:C,items:l,pending:g,outrogroups:null,fallback:f};w=!1}function ca(n){for(;n!==null&&(n.f&Rr)===0;)n=n.next;return n}function tw(n,e,t,r,i){var T,R,P,I,Ut,fn,nr,Pn,$t;var s=(r&Vy)!==0,a=e.length,l=n.items,c=ca(n.effect.first),h,f=null,_,g=[],w=[],b,O,C,F;if(s)for(F=0;F<a;F+=1)b=e[F],O=i(b,F),C=l.get(O).e,(C.f&qr)===0&&((R=(T=C.nodes)==null?void 0:T.a)==null||R.measure(),(_??(_=new Set)).add(C));for(F=0;F<a;F+=1){if(b=e[F],O=i(b,F),C=l.get(O).e,n.outrogroups!==null)for(const Et of n.outrogroups)Et.pending.delete(C),Et.done.delete(C);if((C.f&Ln)!==0&&(nc(C),s&&((I=(P=C.nodes)==null?void 0:P.a)==null||I.unfix(),(_??(_=new Set)).delete(C))),(C.f&qr)!==0)if(C.f^=qr,C===c)ya(C,null,t);else{var $=f?f.next:c;C===n.effect.last&&(n.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),ki(n,f,C),ki(n,C,$),ya(C,$,t),f=C,g=[],w=[],c=ca(f.next);continue}if(C!==c){if(h!==void 0&&h.has(C)){if(g.length<w.length){var z=w[0],se;f=z.prev;var Se=g[0],Y=g[g.length-1];for(se=0;se<g.length;se+=1)ya(g[se],z,t);for(se=0;se<w.length;se+=1)h.delete(w[se]);ki(n,Se.prev,Y.next),ki(n,f,Se),ki(n,Y,z),c=z,f=Y,F-=1,g=[],w=[]}else h.delete(C),ya(C,c,t),ki(n,C.prev,C.next),ki(n,C,f===null?n.effect.first:f.next),ki(n,f,C),f=C;continue}for(g=[],w=[];c!==null&&c!==C;)(h??(h=new Set)).add(c),w.push(c),c=ca(c.next);if(c===null)continue}(C.f&qr)===0&&g.push(C),f=C,c=ca(C.next)}if(n.outrogroups!==null){for(const Et of n.outrogroups)Et.pending.size===0&&(Qu(n,Rc(Et.done)),(Ut=n.outrogroups)==null||Ut.delete(Et));n.outrogroups.size===0&&(n.outrogroups=null)}if(c!==null||h!==void 0){var A=[];if(h!==void 0)for(C of h)(C.f&Ln)===0&&A.push(C);for(;c!==null;)(c.f&Ln)===0&&c!==n.fallback&&A.push(c),c=ca(c.next);var y=A.length;if(y>0){var v=(r&vm)!==0&&a===0?t:null;if(s){for(F=0;F<y;F+=1)(nr=(fn=A[F].nodes)==null?void 0:fn.a)==null||nr.measure();for(F=0;F<y;F+=1)($t=(Pn=A[F].nodes)==null?void 0:Pn.a)==null||$t.fix()}ew(n,A,v)}}s&&zr(()=>{var Et,rr;if(_!==void 0)for(C of _)(rr=(Et=C.nodes)==null?void 0:Et.a)==null||rr.apply()})}function nw(n,e,t,r,i,s,a,l){var c=(a&Oy)!==0?(a&My)===0?_E(t,!1,!1):Ss(t):null,h=(a&Dy)!==0?Ss(i):null;return{v:c,i:h,e:Mn(()=>(s(e,c??t,h??i,l),()=>{n.delete(r)}))}}function ya(n,e,t){if(n.nodes)for(var r=n.nodes.start,i=n.nodes.end,s=e&&(e.f&qr)===0?e.nodes.start:t;r!==null;){var a=Qa(r);if(s.before(r),r===i)return;r=a}}function ki(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function rw(n,e,...t){var r=new Hh(n);zo(()=>{const i=e()??null;r.ensure(i,i&&(s=>i(s,...t)))},ji)}function iw(n,e,t,r,i,s){var a=null,l=n,c=new Hh(l,!1);zo(()=>{const h=e()||null;var f=Fy;if(h===null){c.ensure(null,null);return}return c.ensure(h,_=>{if(h){var g=wm;if(a=Km(h,f),Po(a,a),r){var w=null,b=a.appendChild(br());r(a,b),w==null||w.remove()}Le.nodes.end=a,g||_.before(a)}}),()=>{}},ji),Nc(()=>{})}function sw(n,e){var t;t=document.head.appendChild(br());try{zo(()=>{var r=Mn(()=>e(t));r.f|=gm,wm||(r.nodes===null?r.nodes={start:t,end:t,a:null,t:null}:r.nodes.end=t)})}finally{}}function ow(n,e){var t=void 0,r;Ym(()=>{t!==(t=e())&&(r&&(un(r),r=null),t&&(r=Mn(()=>{Oc(()=>t(n))})))})}function dg(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=dg(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function aw(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=dg(n))&&(r&&(r+=" "),r+=e);return r}function lw(n){return typeof n=="object"?aw(n):n??""}const tf=[...` 	
\r\f \v\uFEFF`];function cw(n,e,t){var r=n==null?"":""+n;if(e&&(r=r?r+" "+e:e),t){for(var i of Object.keys(t))if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||tf.includes(r[a-1]))&&(l===r.length||tf.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function nf(n,e=!1){var t=e?" !important;":";",r="";for(var i of Object.keys(n)){var s=n[i];s!=null&&s!==""&&(r+=" "+i+": "+s+t)}return r}function pu(n){return n[0]!=="-"||n[1]!=="-"?n.toLowerCase():n}function uw(n,e){if(e){var t="",r,i;if(Array.isArray(e)?(r=e[0],i=e[1]):r=e,n){n=String(n).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(pu)),i&&c.push(...Object.keys(i).map(pu));var h=0,f=-1;const O=n.length;for(var _=0;_<O;_++){var g=n[_];if(l?g==="/"&&n[_-1]==="*"&&(l=!1):s?s===g&&(s=!1):g==="/"&&n[_+1]==="*"?l=!0:g==='"'||g==="'"?s=g:g==="("?a++:g===")"&&a--,!l&&s===!1&&a===0){if(g===":"&&f===-1)f=_;else if(g===";"||_===O-1){if(f!==-1){var w=pu(n.substring(h,f).trim());if(!c.includes(w)){g!==";"&&_++;var b=n.substring(h,_).trim();t+=" "+b+";"}}h=_+1,f=-1}}}}return r&&(t+=nf(r)),i&&(t+=nf(i,!0)),t=t.trim(),t===""?null:t}return n==null?null:String(n)}function an(n,e,t,r,i,s){var a=n[Mu];if(a!==t||a===void 0){var l=cw(t,r,s);l==null?n.removeAttribute("class"):e?n.className=l:n.setAttribute("class",l),n[Mu]=t}else if(s&&i!==s)for(var c in s){var h=!!s[c];(i==null||h!==!!i[c])&&n.classList.toggle(c,h)}return s}function mu(n,e={},t,r){for(var i in t){var s=t[i];e[i]!==s&&(t[i]==null?n.style.removeProperty(i):n.style.setProperty(i,s,r))}}function hw(n,e,t,r){var i=n[xu];if(i!==e){var s=uw(e,r);s==null?n.removeAttribute("style"):n.style.cssText=s,n[xu]=e}else r&&(Array.isArray(r)?(mu(n,t==null?void 0:t[0],r[0]),mu(n,t==null?void 0:t[1],r[1],"important")):mu(n,t,r));return r}function fg(n,e){e?n.hasAttribute("selected")||n.setAttribute("selected",""):n.removeAttribute("selected")}function rf(n,e){var t=!("__defaultValue"in n);!t&&n.__defaultValue===e||(n.__defaultValue=e,pg(n,!t||"__value"in n))}function pg(n,e){var t=n.__defaultValue,r=n.multiple,i=r?t??[]:null;if(!(r&&!Sc(i))){var s=n.selectedIndex,a=e&&r?new Set(n.selectedOptions):null;for(var l of n.options){var c=lo(l);fg(l,r?i.includes(c):qm(c,t))}if(e)if(a!==null)for(l of n.options){var h=a.has(l);l.selected!==h&&(l.selected=h)}else n.selectedIndex!==s&&(n.selectedIndex=s)}}function rc(n,e,t=!1){if(n.multiple){if(e==null)return;if(!Sc(e))return By();for(var r of n.options)r.selected=e.includes(lo(r));return}for(r of n.options){var i=lo(r);if(qm(i,e)){r.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function Bl(n){var e=new MutationObserver(t=>{t.every(dw)||("__defaultValue"in n&&pg(n,!1),"__value"in n&&rc(n,n.__value))});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Nc(()=>{e.disconnect()})}function gu(n,e,t=e){var r=new WeakSet,i=!0;Lh(n,"change",s=>{var a=s?"[selected]":":checked",l;if(n.multiple)l=[].map.call(n.querySelectorAll(a),lo);else{var c=n.querySelector(a)??n.querySelector("option:not([disabled])");l=c&&lo(c)}t(l),n.__value=l,ee!==null&&r.add(ee)}),Oc(()=>{var s=e();if(n===document.activeElement){var a=ee;if(r.has(a))return}if(rc(n,s,i),i&&s===void 0){var l=n.querySelector(":checked");l!==null&&(s=lo(l),t(s))}n.__value=s,i=!1})}function lo(n){return"__value"in n?n.__value:n.value}function dw(n){if(n.target.closest("selectedcontent")!==null)return!0;if(n.type==="childList"){var e=[...n.addedNodes,...n.removedNodes];return e.length>0&&e.every(t=>t.nodeName==="SELECTEDCONTENT")}return!1}const ua=Symbol("class"),ha=Symbol("style"),mg=Symbol("is custom element"),gg=Symbol("is html"),fw=Pc?"input":"INPUT",pw=Pc?"option":"OPTION",_g=Pc?"select":"SELECT",mw=Pc?"progress":"PROGRESS";function Vi(n,e,t,r){var i=vg(n),s=i[e];s!==(i[e]=t)&&(e==="loading"&&(n[Ny]=t),t==null?n.removeAttribute(e):typeof t!="string"&&yg(n).has(e)?n[e]=t:n.setAttribute(e,t))}function gw(n,e,t,r,i=!1,s=!1){var a=vg(n),l=a[mg],c=!a[gg],h=e||{},f=n.nodeName===pw,_=n.nodeName===_g;try{for(var g in e)!(g in t)&&g[0]+g[1]!=="$$"&&(t[g]=null);t.class?t.class=lw(t.class):(r||t[ua])&&(t.class=null),t[ha]&&(t.style??(t.style=null));var w=yg(n);if(n.nodeName===fw&&"type"in t&&("value"in t||"__value"in t)){var b=t.type;(b!==h.type||b===void 0&&n.hasAttribute("type"))&&(h.type=b,Vi(n,"type",b,s))}for(const Y in t){let A=t[Y];if(f&&Y==="value"&&A==null){n.value=n.__value="",h[Y]=A;continue}if(Y==="class"){var O=n.namespaceURI==="http://www.w3.org/1999/xhtml";an(n,O,A,r,e==null?void 0:e[ua],t[ua]),h[Y]=A,h[ua]=t[ua];continue}if(Y==="style"){hw(n,A,e==null?void 0:e[ha],t[ha]),h[Y]=A,h[ha]=t[ha];continue}var C=h[Y];if(!(A===C&&!(A===void 0&&n.hasAttribute(Y)))){h[Y]=A;var F=Y[0]+Y[1];if(F!=="$$")if(F==="on"){const y={},v="$$"+Y;let T=Y.slice(2);var $=DE(T);if(NE(T)&&(T=T.slice(0,-7),y.capture=!0),!$&&C){if(A!=null)continue;n.removeEventListener(T,h[v],y),h[v]=null}if($)ce(T,n,A),ug([T]);else if(A!=null){let R=function(P){h[Y].call(this,P)};var Se=R;h[v]=cg(T,n,R,y)}}else if(Y==="style")Vi(n,Y,A);else if(Y==="autofocus")oE(n,!!A);else if(!l&&(Y==="__value"||Y==="value"&&A!=null))n.__value=A,(C==null||n.value!==A||A===0&&n.nodeName===mw)&&(n.value=A);else if(Y==="selected"&&f)fg(n,A);else{var z=Y;c||(z=ME(z));var se=z==="defaultValue"||z==="defaultChecked";if(_&&z==="defaultValue")continue;if(A==null&&!l&&!se)if(a[Y]=null,z==="value"||z==="checked"){let y=n;const v=e===void 0;if(z==="value"){let T=y.defaultValue;y.removeAttribute(z),y.defaultValue=T,y.value=y.__value=v?T:null}else{let T=y.defaultChecked;y.removeAttribute(z),y.defaultChecked=T,y.checked=v?T:!1}}else n.removeAttribute(Y);else se||(l||typeof A!="string")&&w.has(z)?(n[z]=A,z in a&&(a[z]=xt)):typeof A!="function"&&Vi(n,z,A,s)}}}}finally{}return h}function sf(n,e,t=[],r=[],i=[],s,a=!1,l=!1){Pm(i,t,r,c=>{var h=void 0,f={},_=n.nodeName===_g,g=!1;if(Ym(()=>{var b=e(...c.map(p)),O=gw(n,h,b,s,a,l);if(g&&_){var C=n;"defaultValue"in b&&rf(C,b.defaultValue),"value"in b&&rc(C,b.value)}for(let $ of Object.getOwnPropertySymbols(f))b[$]||un(f[$]);for(let $ of Object.getOwnPropertySymbols(b)){var F=b[$];$.description===Uy&&(!h||F!==h[$])&&(f[$]&&un(f[$]),f[$]=Mn(()=>ow(n,()=>F))),O[$]=F}h=O}),_){var w=n;Oc(()=>{var b=h;"defaultValue"in b&&rf(w,b.defaultValue),rc(w,b.value,!0),Bl(w)})}g=!0})}function vg(n){return n[xl]??(n[xl]={[mg]:n.nodeName.includes("-"),[gg]:n.namespaceURI===Em})}var of=new Map;function yg(n){var e=n.getAttribute("is")||n.nodeName,t=of.get(e);if(t)return t;of.set(e,t=new Set);for(var r,i=n,s=Element.prototype;s!==i;){r=Ay(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&t.add(a);i=pm(i)}return t}function Qe(n,e,t=e){var r=new WeakSet;Lh(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=_u(n)?vu(s):s,t(s),ee!==null&&r.add(ee),await kE(),s!==(s=e())){var a=n.selectionStart,l=n.selectionEnd,c=n.value.length;if(n.value=s??"",l!==null){var h=n.value.length;a===l&&l===c&&h>c?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),Dc(e)==null&&n.value&&(t(_u(n)?vu(n.value):n.value),ee!==null&&r.add(ee)),qh(()=>{var i=e();if(n===document.activeElement){var s=ee;if(r.has(s))return}_u(n)&&i===vu(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function wl(n,e,t=e){Lh(n,"change",r=>{var i=r?n.defaultChecked:n.checked;t(i)}),Dc(e)==null&&t(n.checked),qh(()=>{var r=e();n.checked=!!r})}function _u(n){var e=n.type;return e==="number"||e==="range"}function vu(n){return n===""?null:+n}const _w={get(n,e){if(!n.exclude.has(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.has(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.has(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.has(e))}};function ft(n,e,t){return new Proxy({props:n,exclude:e},_w)}const vw={get(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(la(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(n,e,t){let r=n.props.length;for(;r--;){let i=n.props[r];la(i)&&(i=i());const s=Es(i,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let r=n.props[t];if(la(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const i=Es(r,e);return i&&!i.configurable&&(i.configurable=!0),i}}},has(n,e){if(e===ao||e===ky)return!1;for(let t of n.props)if(la(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(la(t)&&(t=t()),!!t){for(const r in t)e.includes(r)||e.push(r);for(const r of Object.getOwnPropertySymbols(t))e.includes(r)||e.push(r)}return e}};function vt(...n){return new Proxy({props:n},vw)}function oi(n,e,t,r){var i=void 0,s=()=>(i??(i=kc(r)),p(i)),a;a=n[e],a===void 0&&r!==void 0&&(a=s());var l;return l=()=>{var c=n[e];return c===void 0?s():c},l}function yw(n){Sn===null&&Am(),qu(()=>{const e=Dc(n);if(typeof e=="function")return e})}const Ew="5";var hm;typeof window<"u"&&((hm=window.__svelte??(window.__svelte={})).v??(hm.v=new Set)).add(Ew);/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yu(n){return n!=null}function ww(n,e={}){var g,w;const t=e.attributeNames??{},r=b=>t[b]??b,i=n.size??n.width??cs.width,s=n.size??n.height??cs.height,a=((g=n.aliases)==null?void 0:g.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],l=[...n.name?[`lucide-${n.name}`]:[],...a],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?Yu(...c):Yu("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??cs["stroke-width"])*Number(n.size??n.width??cs.width)/Number(e.size??e.width??cs.width):e.strokeWidth??cs["stroke-width"];return["svg",{...Object.entries(cs).reduce((b,[O,C])=>(b[r(O)]=C,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yu(e.width)&&{[r("width")]:e.width},..."height"in e&&yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:f,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},n.node.map(b=>{const[O,C,F]=b,$=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...C}:C;return F?[O,$,F]:[O,$]})]}/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @file
 * @license @lucide/svelte v1.69.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=Symbol("lucide-context"),Aw=()=>rE(Iw);var bw=new Set(["$$slots","$$events","$$legacy","color","size","width","height","strokeWidth","absoluteStrokeWidth","nonScalingStroke","iconNode","icon","class","children"]),Sw=$E("<svg><!><!></svg>");function yt(n,e){Vh(e,!0);const t=Aw()??{},r=oi(e,"color",19,()=>t.color??"currentColor"),i=oi(e,"size",19,()=>t.size??24),s=oi(e,"width",19,i),a=oi(e,"height",19,i),l=oi(e,"strokeWidth",19,()=>t.strokeWidth??2),c=oi(e,"absoluteStrokeWidth",19,()=>t.absoluteStrokeWidth??!1),h=oi(e,"nonScalingStroke",19,()=>t.nonScalingStroke??!1),f=oi(e,"iconNode",19,()=>[]),_=oi(e,"icon",19,()=>({node:f(),aliases:[],size:24})),g=ft(e,bw),w=Zn(()=>!!e.children||Tw(g)),b=Zn(()=>ww(_(),{color:r(),width:s(),height:a(),strokeWidth:l(),absoluteStrokeWidth:c(),nonScalingStroke:h(),className:Yu("lucide-icon",t.class),hasA11yProp:p(w),attributes:g})),O=Zn(()=>Hd(p(b),3)),C=Zn(()=>p(O)[1]),F=Zn(()=>Cy(p(O)[2],()=>[],!0)),$=Zn(()=>({...p(C),class:[...p(C).class.split(" "),e.class]}));var z=Sw();sf(z,()=>({...p($)}));var se=S(z);Di(se,17,()=>p(F),ZE,(Y,A)=>{var y=Zn(()=>Hd(p(A),2));let v=()=>p(y)[0],T=()=>p(y)[1];var R=qE(),P=Ul(R);iw(P,v,!0,(I,Ut)=>{sf(I,()=>({...T()}))}),Z(Y,R)});var Se=E(se);rw(Se,()=>e.children??Nh),Z(n,z),Mh()}const Eg={name:"arrow-down-left",size:24,node:[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]};Eg.node;var Rw=new Set(["$$slots","$$events","$$legacy"]);function Tl(n,e){let t=ft(e,Rw);yt(n,vt(()=>t,{get icon(){return Eg}}))}const wg={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]};wg.node;var Cw=new Set(["$$slots","$$events","$$legacy"]);function af(n,e){let t=ft(e,Cw);yt(n,vt(()=>t,{get icon(){return wg}}))}const Tg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]};Tg.node;var Pw=new Set(["$$slots","$$events","$$legacy"]);function Il(n,e){let t=ft(e,Pw);yt(n,vt(()=>t,{get icon(){return Tg}}))}const Ig={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]};Ig.node;var kw=new Set(["$$slots","$$events","$$legacy"]);function Xs(n,e){let t=ft(e,kw);yt(n,vt(()=>t,{get icon(){return Ig}}))}const Ag={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5"}]]};Ag.node;var Nw=new Set(["$$slots","$$events","$$legacy"]);function da(n,e){let t=ft(e,Nw);yt(n,vt(()=>t,{get icon(){return Ag}}))}const bg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6"}]]};bg.node;var Ow=new Set(["$$slots","$$events","$$legacy"]);function lf(n,e){let t=ft(e,Ow);yt(n,vt(()=>t,{get icon(){return bg}}))}const Sg={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]],aliases:["alert-circle","circle-alert"]};Sg.node;var Dw=new Set(["$$slots","$$events","$$legacy"]);function cf(n,e){let t=ft(e,Dw);yt(n,vt(()=>t,{get icon(){return Sg}}))}const Rg={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]};Rg.node;var Vw=new Set(["$$slots","$$events","$$legacy"]);function uf(n,e){let t=ft(e,Vw);yt(n,vt(()=>t,{get icon(){return Rg}}))}const Cg={name:"lock-keyhole",size:24,node:[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]};Cg.node;var Mw=new Set(["$$slots","$$events","$$legacy"]);function hf(n,e){let t=ft(e,Mw);yt(n,vt(()=>t,{get icon(){return Cg}}))}const Pg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]]};Pg.node;var xw=new Set(["$$slots","$$events","$$legacy"]);function Eu(n,e){let t=ft(e,xw);yt(n,vt(()=>t,{get icon(){return Pg}}))}const kg={name:"minus",size:24,node:[["path",{d:"M5 12h14"}]]};kg.node;var Lw=new Set(["$$slots","$$events","$$legacy"]);function df(n,e){let t=ft(e,Lw);yt(n,vt(()=>t,{get icon(){return kg}}))}const Ng={name:"package-plus",size:24,node:[["path",{d:"M12 22V12"}],["path",{d:"M16 17h6"}],["path",{d:"M19 14v6"}],["path",{d:"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"}],["path",{d:"M3.29 7 12 12l8.71-5"}],["path",{d:"m7.5 4.27 8.997 5.148"}]]};Ng.node;var Fw=new Set(["$$slots","$$events","$$legacy"]);function wu(n,e){let t=ft(e,Fw);yt(n,vt(()=>t,{get icon(){return Ng}}))}const Og={name:"plus",size:24,node:[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]};Og.node;var Uw=new Set(["$$slots","$$events","$$legacy"]);function fa(n,e){let t=ft(e,Uw);yt(n,vt(()=>t,{get icon(){return Og}}))}const Dg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]]};Dg.node;var $w=new Set(["$$slots","$$events","$$legacy"]);function Al(n,e){let t=ft(e,$w);yt(n,vt(()=>t,{get icon(){return Dg}}))}const Vg={name:"settings-2",size:24,node:[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]};Vg.node;var Bw=new Set(["$$slots","$$events","$$legacy"]);function bl(n,e){let t=ft(e,Bw);yt(n,vt(()=>t,{get icon(){return Vg}}))}const Mg={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]};Mg.node;var qw=new Set(["$$slots","$$events","$$legacy"]);function zw(n,e){let t=ft(e,qw);yt(n,vt(()=>t,{get icon(){return Mg}}))}const xg={name:"trash",size:24,node:[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]],aliases:["trash-2"]};xg.node;var jw=new Set(["$$slots","$$events","$$legacy"]);function ff(n,e){let t=ft(e,jw);yt(n,vt(()=>t,{get icon(){return xg}}))}const Lg={name:"upload",size:24,node:[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]]};Lg.node;var Hw=new Set(["$$slots","$$events","$$legacy"]);function Ww(n,e){let t=ft(e,Hw);yt(n,vt(()=>t,{get icon(){return Lg}}))}const Fg={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]],aliases:["user-2"]};Fg.node;var Gw=new Set(["$$slots","$$events","$$legacy"]);function Kw(n,e){let t=ft(e,Gw);yt(n,vt(()=>t,{get icon(){return Fg}}))}const Ug={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]]};Ug.node;var Qw=new Set(["$$slots","$$events","$$legacy"]);function Yw(n,e){let t=ft(e,Qw);yt(n,vt(()=>t,{get icon(){return Ug}}))}const $g={name:"warehouse",size:24,node:[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"}],["path",{d:"M6 13h12"}],["path",{d:"M6 17h12"}]]};$g.node;var Jw=new Set(["$$slots","$$events","$$legacy"]);function Sl(n,e){let t=ft(e,Jw);yt(n,vt(()=>t,{get icon(){return $g}}))}const Bg={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]]};Bg.node;var Xw=new Set(["$$slots","$$events","$$legacy"]);function Zw(n,e){let t=ft(e,Xw);yt(n,vt(()=>t,{get icon(){return Bg}}))}const qg={name:"x",size:24,node:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]};qg.node;var eT=new Set(["$$slots","$$events","$$legacy"]);function Zs(n,e){let t=ft(e,eT);yt(n,vt(()=>t,{get icon(){return qg}}))}const tT=()=>{};var pf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},nT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,_=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(g=64)),r.push(t[f],t[_],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zg(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||_==null)throw new rT;const g=s<<2|l>>4;if(r.push(g),h!==64){const w=l<<4&240|h>>2;if(r.push(w),_!==64){const b=h<<6&192|_;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iT=function(n){const e=zg(n);return Wh.encodeByteArray(e,!0)},jg=function(n){return iT(n).replace(/\./g,"")},Hg=function(n){try{return Wh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=()=>sT().__FIREBASE_DEFAULTS__,aT=()=>{if(typeof process>"u"||typeof pf>"u")return;const n=pf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hg(n[1]);return e&&JSON.parse(e)},Vc=()=>{try{return tT()||oT()||aT()||lT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wg=n=>{var e,t;return(t=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cT=n=>{const e=Wg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gg=()=>{var n;return(n=Vc())===null||n===void 0?void 0:n.config},Kg=n=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gh(n){return(await fetch(n,{credentials:"include"})).ok}const Pa={};function uT(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pa))Pa[e]?n.emulator.push(e):n.prod.push(e);return n}function hT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mf=!1;function Qg(n,e){if(typeof window>"u"||typeof document>"u"||!Os(window.location.host)||Pa[n]===e||Pa[n]||mf)return;Pa[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=uT().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{mf=!0,a()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function _(){const g=hT(r),w=t("text"),b=document.getElementById(w)||document.createElement("span"),O=t("learnmore"),C=document.getElementById(O)||document.createElement("a"),F=t("preprendIcon"),$=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const z=g.element;l(z),f(C,O);const se=h();c($,F),z.append($,b,C,se),document.body.appendChild(z)}s?(b.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cn())}function fT(){var n;const e=(n=Vc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _T(){const n=Cn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vT(){return!fT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yg(){try{return typeof indexedDB=="object"}catch{return!1}}function yT(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="FirebaseError";class ti extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ET,Object.setPrototypeOf(this,ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?wT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ti(i,l,r)}}function wT(n,e){return n.replace(TT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TT=/\{\$([^}]+)}/g;function IT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(gf(s)&&gf(a)){if(!Cs(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function gf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ea(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function AT(n,e){const t=new bT(n,e);return t.subscribe.bind(t)}class bT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ST(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Tu),i.error===void 0&&(i.error=Tu),i.complete===void 0&&(i.complete=Tu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ST(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(n){return n&&n._delegate?n._delegate:n}class Xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ju;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PT(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CT(n){return n===us?void 0:n}function PT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const NT={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},OT=Ae.INFO,DT={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},VT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=DT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=OT,this._logHandler=VT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const MT=(n,e)=>e.some(t=>n instanceof t);let _f,vf;function xT(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LT(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jg=new WeakMap,Xu=new WeakMap,Xg=new WeakMap,Iu=new WeakMap,Kh=new WeakMap;function FT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t($i(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Jg.set(t,n)}).catch(()=>{}),Kh.set(e,n),e}function UT(n){if(Xu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xu.set(n,e)}let Zu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $i(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $T(n){Zu=n(Zu)}function BT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Au(this),e,...t);return Xg.set(r,e.sort?e.sort():[e]),$i(r)}:LT().includes(n)?function(...e){return n.apply(Au(this),e),$i(Jg.get(this))}:function(...e){return $i(n.apply(Au(this),e))}}function qT(n){return typeof n=="function"?BT(n):(n instanceof IDBTransaction&&UT(n),MT(n,xT())?new Proxy(n,Zu):n)}function $i(n){if(n instanceof IDBRequest)return FT(n);if(Iu.has(n))return Iu.get(n);const e=qT(n);return e!==n&&(Iu.set(n,e),Kh.set(e,n)),e}const Au=n=>Kh.get(n);function zT(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=$i(a);return r&&a.addEventListener("upgradeneeded",c=>{r($i(a.result),c.oldVersion,c.newVersion,$i(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const jT=["get","getKey","getAll","getAllKeys","count"],HT=["put","add","delete","clear"],bu=new Map;function yf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bu.get(e))return bu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=HT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jT.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return bu.set(e,s),s}$T(n=>({...n,get:(e,t,r)=>yf(e,t)||n.get(e,t,r),has:(e,t)=>!!yf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function GT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eh="@firebase/app",Ef="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Mc("@firebase/app"),KT="@firebase/app-compat",QT="@firebase/analytics-compat",YT="@firebase/analytics",JT="@firebase/app-check-compat",XT="@firebase/app-check",ZT="@firebase/auth",eI="@firebase/auth-compat",tI="@firebase/database",nI="@firebase/data-connect",rI="@firebase/database-compat",iI="@firebase/functions",sI="@firebase/functions-compat",oI="@firebase/installations",aI="@firebase/installations-compat",lI="@firebase/messaging",cI="@firebase/messaging-compat",uI="@firebase/performance",hI="@firebase/performance-compat",dI="@firebase/remote-config",fI="@firebase/remote-config-compat",pI="@firebase/storage",mI="@firebase/storage-compat",gI="@firebase/firestore",_I="@firebase/ai",vI="@firebase/firestore-compat",yI="firebase",EI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="[DEFAULT]",wI={[eh]:"fire-core",[KT]:"fire-core-compat",[YT]:"fire-analytics",[QT]:"fire-analytics-compat",[XT]:"fire-app-check",[JT]:"fire-app-check-compat",[ZT]:"fire-auth",[eI]:"fire-auth-compat",[tI]:"fire-rtdb",[nI]:"fire-data-connect",[rI]:"fire-rtdb-compat",[iI]:"fire-fn",[sI]:"fire-fn-compat",[oI]:"fire-iid",[aI]:"fire-iid-compat",[lI]:"fire-fcm",[cI]:"fire-fcm-compat",[uI]:"fire-perf",[hI]:"fire-perf-compat",[dI]:"fire-rc",[fI]:"fire-rc-compat",[pI]:"fire-gcs",[mI]:"fire-gcs-compat",[gI]:"fire-fst",[vI]:"fire-fst-compat",[_I]:"fire-vertex","fire-js":"fire-js",[yI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Map,TI=new Map,nh=new Map;function wf(n,e){try{n.container.addComponent(e)}catch(t){_i.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vi(n){const e=n.name;if(nh.has(e))return _i.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,n);for(const t of xa.values())wf(t,n);for(const t of TI.values())wf(t,n);return!0}function xc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function er(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bi=new jo("app","Firebase",II);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=EI;function Zg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:th,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Bi.create("bad-app-name",{appName:String(i)});if(t||(t=Gg()),!t)throw Bi.create("no-options");const s=xa.get(i);if(s){if(Cs(t,s.options)&&Cs(r,s.config))return s;throw Bi.create("duplicate-app",{appName:i})}const a=new kT(i);for(const c of nh.values())a.addComponent(c);const l=new AI(t,r,a);return xa.set(i,l),l}function Qh(n=th){const e=xa.get(n);if(!e&&n===th&&Gg())return Zg();if(!e)throw Bi.create("no-app",{appName:n});return e}function bI(){return Array.from(xa.values())}function Sr(n,e,t){var r;let i=(r=wI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_i.warn(l.join(" "));return}vi(new Xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebase-heartbeat-database",RI=1,La="firebase-heartbeat-store";let Su=null;function e_(){return Su||(Su=zT(SI,RI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bi.create("idb-open",{originalErrorMessage:n.message})})),Su}async function CI(n){try{const t=(await e_()).transaction(La),r=await t.objectStore(La).get(t_(n));return await t.done,r}catch(e){if(e instanceof ti)_i.warn(e.message);else{const t=Bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_i.warn(t.message)}}}async function Tf(n,e){try{const r=(await e_()).transaction(La,"readwrite");await r.objectStore(La).put(e,t_(n)),await r.done}catch(t){if(t instanceof ti)_i.warn(t.message);else{const r=Bi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_i.warn(r.message)}}}function t_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1024,kI=30;class NI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=If();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>kI){const a=VI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_i.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=If(),{heartbeatsToSend:r,unsentEntries:i}=OI(this._heartbeatsCache.heartbeats),s=jg(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return _i.warn(t),""}}}function If(){return new Date().toISOString().substring(0,10)}function OI(n,e=PI){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Af(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Af(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class DI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yg()?yT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Af(n){return jg(JSON.stringify({version:2,heartbeats:n})).length}function VI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n){vi(new Xr("platform-logger",e=>new WT(e),"PRIVATE")),vi(new Xr("heartbeat",e=>new NI(e),"PRIVATE")),Sr(eh,Ef,n),Sr(eh,Ef,"esm2017"),Sr("fire-js","")}MI("");function Yh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function n_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r_=n_,i_=new jo("auth","Firebase",n_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Mc("@firebase/auth");function xI(n,...e){ic.logLevel<=Ae.WARN&&ic.warn(`Auth (${Ho}): ${n}`,...e)}function ql(n,...e){ic.logLevel<=Ae.ERROR&&ic.error(`Auth (${Ho}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,...e){throw Jh(n,...e)}function Wr(n,...e){return Jh(n,...e)}function s_(n,e,t){const r=Object.assign(Object.assign({},r_()),{[e]:t});return new jo("auth","Firebase",r).create(e,{appName:n.name})}function gi(n){return s_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jh(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return i_.create(n,...e)}function te(n,e,...t){if(!n)throw Jh(e,...t)}function pi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ql(e),new Error(e)}function yi(n,e){n||pi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function LI(){return bf()==="http:"||bf()==="https:"}function bf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LI()||mT()||"connection"in navigator)?navigator.onLine:!0}function UI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.shortDelay=e,this.longDelay=t,yi(t>e,"Short delay should be less than long delay!"),this.isMobile=dT()||gT()}get(){return FI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e){yi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qI=new Xa(3e4,6e4);function wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ti(n,e,t,r,i={}){return a_(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Ja(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return pT()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Os(n.emulatorConfig.host)&&(h.credentials="include"),o_.fetch()(await l_(n,n.config.apiHost,t,l),h)})}async function a_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},$I),e);try{const i=new jI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Rl(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Rl(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Rl(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw s_(n,f,h);Cr(n,f)}}catch(i){if(i instanceof ti)throw i;Cr(n,"network-request-failed",{message:String(i)})}}async function Za(n,e,t,r,i={}){const s=await Ti(n,e,t,r,i);return"mfaPendingCredential"in s&&Cr(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function l_(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Xh(n.config,i):`${n.config.apiScheme}://${i}`;return BI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function zI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Wr(this.auth,"network-request-failed")),qI.get())})}}function Rl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Wr(n,e,r);return i.customData._tokenResponse=t,i}function Sf(n){return n!==void 0&&n.enterprise!==void 0}class HI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WI(n,e){return Ti(n,"GET","/v2/recaptchaConfig",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(n,e){return Ti(n,"POST","/v1/accounts:delete",e)}async function sc(n,e){return Ti(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c_(n,e=!1){const t=hn(n),r=await t.getIdToken(e),i=Zh(r);te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(Ru(i.auth_time)),issuedAtTime:ka(Ru(i.iat)),expirationTime:ka(Ru(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ru(n){return Number(n)*1e3}function Zh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hg(t);return i?JSON.parse(i):(ql("Failed to decode base64 JWT payload"),null)}catch(i){return ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rf(n){const e=Zh(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ti&&KI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function KI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Fa(n,sc(t,{idToken:r}));te(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h_(s.providerUserInfo):[],l=YI(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ih(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function u_(n){const e=hn(n);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h_(n){return n.map(e=>{var{providerId:t}=e,r=Yh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e){const t=await a_(n,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await l_(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Os(n.emulatorConfig.host)&&(c.credentials="include"),o_.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function XI(n,e){return Ti(n,"POST","/v2/accounts:revokeToken",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Rf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await JI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new co;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return pi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Yh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ih(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c_(this,e)}reload(){return u_(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(er(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await Fa(this,GI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,w=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:se,isAnonymous:Se,providerData:Y,stsTokenManager:A}=t;te(z&&A,e,"internal-error");const y=co.fromJSON(this.name,A);te(typeof z=="string",e,"internal-error"),Ni(_,e.name),Ni(g,e.name),te(typeof se=="boolean",e,"internal-error"),te(typeof Se=="boolean",e,"internal-error"),Ni(w,e.name),Ni(b,e.name),Ni(O,e.name),Ni(C,e.name),Ni(F,e.name),Ni($,e.name);const v=new Ir({uid:z,auth:e,email:g,emailVerified:se,displayName:_,isAnonymous:Se,photoURL:b,phoneNumber:w,tenantId:O,stsTokenManager:y,createdAt:F,lastLoginAt:$});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(T=>Object.assign({},T))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new co;i.updateFromServerResponse(t);const s=new Ir({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new co;l.updateFromIdToken(r);const c=new Ir({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ih(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;function mi(n){yi(n instanceof Function,"Expected a class definition");let e=Cf.get(n);return e?(yi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cf.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}d_.type="NONE";const sh=d_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n,e,t){return`firebase:${n}:${e}:${t}`}class uo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await sc(this.auth,{idToken:e}).catch(()=>{});return t?Ir._fromGetAccountInfoResponse(this.auth,t,e):null}return Ir._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new uo(mi(sh),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mi(sh);const a=zl(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let _;if(typeof f=="string"){const g=await sc(e,{idToken:f}).catch(()=>{});if(!g)break;_=await Ir._fromGetAccountInfoResponse(e,g,f)}else _=Ir._fromJSON(e,f);h!==s&&(l=_),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new uo(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new uo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(g_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(f_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v_(e))return"Blackberry";if(y_(e))return"Webos";if(p_(e))return"Safari";if((e.includes("chrome/")||m_(e))&&!e.includes("edge/"))return"Chrome";if(__(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function f_(n=Cn()){return/firefox\//i.test(n)}function p_(n=Cn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m_(n=Cn()){return/crios\//i.test(n)}function g_(n=Cn()){return/iemobile/i.test(n)}function __(n=Cn()){return/android/i.test(n)}function v_(n=Cn()){return/blackberry/i.test(n)}function y_(n=Cn()){return/webos/i.test(n)}function ed(n=Cn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZI(n=Cn()){var e;return ed(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e0(){return _T()&&document.documentMode===10}function E_(n=Cn()){return ed(n)||__(n)||y_(n)||v_(n)||/windows phone/i.test(n)||g_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n,e=[]){let t;switch(n){case"Browser":t=Pf(Cn());break;case"Worker":t=`${Pf(Cn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ho}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(n,e={}){return Ti(n,"GET","/v2/passwordPolicy",wi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=6;class i0{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:r0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kf(this),this.idTokenSubscription=new kf(this),this.beforeStateQueue=new t0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mi(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sc(this,{idToken:e}),r=await Ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(er(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(er(this.app))return Promise.reject(gi(this));const t=e?hn(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return er(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return er(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n0(this),t=new i0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await XI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mi(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[mi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(er(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zi(n){return hn(n)}class kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=AT(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o0(n){Lc=n}function T_(n){return Lc.loadJS(n)}function a0(){return Lc.recaptchaEnterpriseScript}function l0(){return Lc.gapiScript}function c0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class u0{constructor(){this.enterprise=new h0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class h0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const d0="recaptcha-enterprise",I_="NO_RECAPTCHA";class f0{constructor(e){this.type=d0,this.auth=Zi(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{WI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new HI(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Sf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(I_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u0().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Sf(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=a0();c.length!==0&&(c+=l),T_(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function Nf(n,e,t,r=!1,i=!1){const s=new f0(n);let a;if(i)a=I_;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oh(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Nf(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Nf(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){const t=xc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Cs(s,e??{}))return i;Cr(i,"already-initialized")}return t.initialize({options:e})}function p0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function b_(n,e,t){const r=Zi(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=S_(e),{host:a,port:l}=m0(e),c=l===null?"":`:${l}`,h={url:`${s}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Cs(h,r.config.emulator)&&Cs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Os(a)?(Gh(`${s}//${a}${c}`),Qg("Auth",!0)):g0()}function S_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function m0(n){const e=S_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Of(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Of(a)}}}function Of(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function g0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pi("not implemented")}_getIdTokenResponse(e){return pi("not implemented")}_linkToIdToken(e,t){return pi("not implemented")}_getReauthenticationResolver(e){return pi("not implemented")}}async function _0(n,e){return Ti(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n,e){return Za(n,"POST","/v1/accounts:signInWithPassword",wi(n,e))}async function y0(n,e){return Ti(n,"POST","/v1/accounts:sendOobCode",wi(n,e))}async function E0(n,e){return y0(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(n,e){return Za(n,"POST","/v1/accounts:signInWithEmailLink",wi(n,e))}async function T0(n,e){return Za(n,"POST","/v1/accounts:signInWithEmailLink",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Fc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ko(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ko(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,t,"signInWithPassword",v0);case"emailLink":return w0(e,{email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,r,"signUpPassword",_0);case"emailLink":return T0(e,{idToken:t,email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(n,e){return Za(n,"POST","/v1/accounts:signInWithIdp",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="http://localhost";class Wi extends Fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Yh(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Wi(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ho(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:I0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b0(n){const e=Ea(wa(n)).link,t=e?Ea(wa(e)).deep_link_id:null,r=Ea(wa(n)).deep_link_id;return(r?Ea(wa(r)).link:null)||r||t||e||n}class Uc{constructor(e){var t,r,i,s,a,l;const c=Ea(wa(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,_=A0((i=c.mode)!==null&&i!==void 0?i:null);te(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=b0(e);try{return new Uc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,t){return ko._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Uc.parseLink(t);return te(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends R_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends el{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wi._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hi.credential(t,r)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends el{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends el{constructor(){super("twitter.com")}static credential(e,t){return Wi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return fi.credential(t,r)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ir._fromIdTokenResponse(e,r,i),a=Df(r);return new Ps({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Df(r);return new Ps({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Df(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends ti{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ac(e,t,r,i)}}function C_(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(n,s,e,r):s})}async function S0(n,e,t=!1){const r=await Fa(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ps._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(n,e,t=!1){const{auth:r}=n;if(er(r.app))return Promise.reject(gi(r));const i="reauthenticate";try{const s=await Fa(n,C_(r,i,e,n),t);te(s.idToken,r,"internal-error");const a=Zh(s.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(n.uid===l,r,"user-mismatch"),Ps._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,e,t=!1){if(er(n.app))return Promise.reject(gi(n));const r="signIn",i=await C_(n,r,e),s=await Ps._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function k_(n,e){return P_(Zi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(n,e){return Za(n,"POST","/v1/accounts:signInWithCustomToken",wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(n,e){if(er(n.app))return Promise.reject(gi(n));const t=Zi(n),r=await C0(t,{token:e,returnSecureToken:!0}),i=await Ps._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(n,e,t){var r;te(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),te(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),te(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(te(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(te(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(n){const e=Zi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function N0(n,e,t){const r=Zi(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&P0(r,i,t),await oh(r,i,"getOobCode",E0)}function O_(n,e,t){return er(n.app)?Promise.reject(gi(n)):k_(hn(n),Ds.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k0(n),r})}function D_(n,e,t,r){return hn(n).onIdTokenChanged(e,t,r)}function V_(n,e,t){return hn(n).beforeAuthStateChanged(e,t)}function M_(n,e,t,r){return hn(n).onAuthStateChanged(e,t,r)}function td(n){return hn(n).signOut()}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=1e3,D0=10;class L_ extends x_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);e0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},O0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const F_=L_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends x_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}U_.type="SESSION";const nd=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await V0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=rd("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const g=_;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){return window}function x0(n){Gr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(){return typeof Gr().WorkerGlobalScope<"u"&&typeof Gr().importScripts=="function"}async function L0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function U0(){return $_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="firebaseLocalStorageDb",$0=1,cc="firebaseLocalStorage",q_="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bc(n,e){return n.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function B0(){const n=indexedDB.deleteDatabase(B_);return new tl(n).toPromise()}function ah(){const n=indexedDB.open(B_,$0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(cc,{keyPath:q_})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await B0(),e(await ah()))})})}async function Vf(n,e,t){const r=Bc(n,!0).put({[q_]:e,value:t});return new tl(r).toPromise()}async function q0(n,e){const t=Bc(n,!1).get(e),r=await new tl(t).toPromise();return r===void 0?null:r.value}function Mf(n,e){const t=Bc(n,!0).delete(e);return new tl(t).toPromise()}const z0=800,j0=3;class z_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>j0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(U0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await L0(),!this.activeServiceWorker)return;this.sender=new M0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Vf(e,lc,"1"),await Mf(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>q0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bc(i,!1).getAll();return new tl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z_.type="LOCAL";const j_=z_;new Xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(n,e){return e?mi(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id extends Fc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function W0(n){return P_(n.auth,new id(n),n.bypassAuthState)}function G0(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),R0(t,new id(n),n.bypassAuthState)}async function K0(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),S0(t,new id(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return K0;case"reauthViaPopup":case"reauthViaRedirect":return G0;default:Cr(this.auth,"internal-error")}}resolve(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Xa(2e3,1e4);class so extends H_{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){yi(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q0.get())};e()}}so.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="pendingRedirect",jl=new Map;class J0 extends H_{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await X0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X0(n,e){const t=tA(e),r=eA(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Z0(n,e){jl.set(n._key(),e)}function eA(n){return mi(n._redirectPersistence)}function tA(n){return zl(Y0,n.config.apiKey,n.name)}async function nA(n,e,t=!1){if(er(n.app))return Promise.reject(gi(n));const r=Zi(n),i=H0(r,e),a=await new J0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=600*1e3;class iA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!W_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Wr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rA&&this.cachedEventUids.clear(),this.cachedEventUids.has(xf(e))}saveEventToCache(e){this.cachedEventUids.add(xf(e)),this.lastProcessedEventTime=Date.now()}}function xf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function W_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(n,e={}){return Ti(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function cA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await oA(n);for(const t of e)try{if(uA(t))return}catch{}Cr(n,"unauthorized-domain")}function uA(n){const e=rh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!lA.test(t))return!1;if(aA.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Xa(3e4,6e4);function Lf(){const n=Gr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dA(n){return new Promise((e,t)=>{var r,i,s;function a(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),t(Wr(n,"network-request-failed"))},timeout:hA.get()})}if(!((i=(r=Gr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Gr().gapi)===null||s===void 0)&&s.load)a();else{const l=c0("iframefcb");return Gr()[l]=()=>{gapi.load?a():t(Wr(n,"network-request-failed"))},T_(`${l0()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function fA(n){return Hl=Hl||dA(n),Hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Xa(5e3,15e3),mA="__/auth/iframe",gA="emulator/auth/iframe",_A={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xh(e,gA):`https://${n.config.authDomain}/${mA}`,r={apiKey:e.apiKey,appName:n.name,v:Ho},i=vA.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ja(r).slice(1)}`}async function EA(n){const e=await fA(n),t=Gr().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:yA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_A,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Wr(n,"network-request-failed"),l=Gr().setTimeout(()=>{s(a)},pA.get());function c(){Gr().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TA=500,IA=600,AA="_blank",bA="http://localhost";class Ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SA(n,e,t,r=TA,i=IA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},wA),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Cn().toLowerCase();t&&(l=m_(h)?AA:t),f_(h)&&(e=e||bA,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[w,b])=>`${g}${w}=${b},`,"");if(ZI(h)&&l!=="_self")return RA(e||"",l),new Ff(null);const _=window.open(e||"",l,f);te(_,n,"popup-blocked");try{_.focus()}catch{}return new Ff(_)}function RA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="__/auth/handler",PA="emulator/auth/handler",kA=encodeURIComponent("fac");async function Uf(n,e,t,r,i,s){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ho,eventId:i};if(e instanceof R_){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",IT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof el){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${kA}=${encodeURIComponent(c)}`:"";return`${NA(n)}?${Ja(l).slice(1)}${h}`}function NA({config:n}){return n.emulator?Xh(n,PA):`https://${n.authDomain}/${CA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="webStorageSupport";class OA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nd,this._completeRedirectFn=nA,this._overrideRedirectResult=Z0}async _openPopup(e,t,r,i){var s;yi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Uf(e,t,r,rh(),i);return SA(e,a,rd())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Uf(e,t,r,rh(),i);return x0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(yi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await EA(e),r=new iA(e);return t.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cu,{type:Cu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cu];a!==void 0&&t(!!a),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return E_()||p_()||ed()}}const G_=OA;var $f="@firebase/auth",Bf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MA(n){vi(new Xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(n)},h=new s0(r,i,s,c);return p0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vi(new Xr("auth-internal",e=>{const t=Zi(e.getProvider("auth").getImmediate());return(r=>new DA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr($f,Bf,VA(n)),Sr($f,Bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=300,LA=Kg("authIdTokenMaxAge")||xA;let qf=null;const FA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>LA)return;const i=t==null?void 0:t.token;qf!==i&&(qf=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K_(n=Qh()){const e=xc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=A_(n,{popupRedirectResolver:G_,persistence:[j_,F_,nd]}),r=Kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=FA(s.toString());V_(t,a,()=>a(t.currentUser)),D_(t,l=>a(l))}}const i=Wg("auth");return i&&b_(t,`http://${i}`),t}function UA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}o0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Wr("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",UA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MA("Browser");const $A=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:Uc,AuthCredential:Fc,EmailAuthCredential:ko,EmailAuthProvider:Ds,FacebookAuthProvider:ui,GithubAuthProvider:di,GoogleAuthProvider:hi,OAuthCredential:Wi,TwitterAuthProvider:fi,beforeAuthStateChanged:V_,browserLocalPersistence:F_,browserPopupRedirectResolver:G_,browserSessionPersistence:nd,connectAuthEmulator:b_,getAuth:K_,getIdTokenResult:c_,inMemoryPersistence:sh,indexedDBLocalPersistence:j_,initializeAuth:A_,onAuthStateChanged:M_,onIdTokenChanged:D_,prodErrorMap:r_,reload:u_,sendPasswordResetEmail:N0,signInWithCredential:k_,signInWithCustomToken:N_,signInWithEmailAndPassword:O_,signOut:td},Symbol.toStringTag,{value:"Module"}));var BA="firebase",qA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr(BA,qA,"app");var zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,Q_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function v(){}v.prototype=y.prototype,A.D=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(T,R,P){for(var I=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)I[Ut-2]=arguments[Ut];return y.prototype[R].apply(T,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)T[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],R=A.g[2];var P=A.g[3],I=y+(P^v&(R^P))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[2]+606105819&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[3]+3250441966&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[6]+2821735955&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[7]+4249261313&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[10]+4294925233&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[11]+2304563134&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(P^v&(R^P))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(R^y&(v^R))+T[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=R+(v^P&(y^v))+T[14]+2792965006&4294967295,R=P+(I<<17&4294967295|I>>>15),I=v+(y^R&(P^y))+T[15]+1236535329&4294967295,v=R+(I<<22&4294967295|I>>>10),I=y+(R^P&(v^R))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[11]+643717713&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[0]+3921069994&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[15]+3634488961&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[4]+3889429448&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[3]+4107603335&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[8]+1163531501&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(R^P&(v^R))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^R&(y^v))+T[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=R+(y^v&(P^y))+T[7]+1735328473&4294967295,R=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(R^P))+T[12]+2368359562&4294967295,v=R+(I<<20&4294967295|I>>>12),I=y+(v^R^P)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[11]+1839030562&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[14]+4259657740&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[7]+4139469664&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[10]+3200236656&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[3]+3572445317&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[6]+76029189&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(v^R^P)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^R)+T[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=R+(P^y^v)+T[15]+530742520&4294967295,R=P+(I<<16&4294967295|I>>>16),I=v+(R^P^y)+T[2]+3299628645&4294967295,v=R+(I<<23&4294967295|I>>>9),I=y+(R^(v|~P))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[14]+2878612391&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[5]+4237533241&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[10]+4293915773&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[1]+2240044497&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[6]+2734768916&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[13]+1309151649&4294967295,v=R+(I<<21&4294967295|I>>>11),I=y+(R^(v|~P))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~R))+T[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=R+(y^(P|~v))+T[2]+718787259&4294967295,R=P+(I<<15&4294967295|I>>>17),I=v+(P^(R|~y))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var v=y-this.blockSize,T=this.B,R=this.h,P=0;P<y;){if(R==0)for(;P<=v;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<y;)if(T[R++]=A.charCodeAt(P++),R==this.blockSize){i(this,T),R=0;break}}else for(;P<y;)if(T[R++]=A[P++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var v=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.u(A),A=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)A[v++]=this.g[y]>>>T&255;return A};function s(A,y){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function a(A,y){this.h=y;for(var v=[],T=!0,R=A.length-1;0<=R;R--){var P=A[R]|0;T&&P==y||(v[R]=P,T=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?s(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return _;if(0>A)return C(h(-A));for(var y=[],v=1,T=0;A>=v;T++)y[T]=A/v|0,v*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return C(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=_,R=0;R<A.length;R+=8){var P=Math.min(8,A.length-R),I=parseInt(A.substring(R,R+P),y);8>P?(P=h(Math.pow(y,P)),T=T.j(P).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var _=c(0),g=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(O(this))return-C(this).m();for(var A=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);A+=(0<=T?T:4294967296+T)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(O(this))return"-"+C(this).toString(A);for(var y=h(Math.pow(A,6)),v=this,T="";;){var R=se(v,y).g;v=F(v,R.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=R,b(v))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function O(A){return A.h==-1}n.l=function(A){return A=F(this,A),O(A)?-1:b(A)?0:1};function C(A){for(var y=A.g.length,v=[],T=0;T<y;T++)v[T]=~A.g[T];return new a(v,~A.h).add(g)}n.abs=function(){return O(this)?C(this):this},n.add=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],T=0,R=0;R<=y;R++){var P=T+(this.i(R)&65535)+(A.i(R)&65535),I=(P>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);T=I>>>16,P&=65535,I&=65535,v[R]=I<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function F(A,y){return A.add(C(y))}n.j=function(A){if(b(this)||b(A))return _;if(O(this))return O(A)?C(this).j(C(A)):C(C(this).j(A));if(O(A))return C(this.j(C(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<A.g.length;R++){var P=this.i(T)>>>16,I=this.i(T)&65535,Ut=A.i(R)>>>16,fn=A.i(R)&65535;v[2*T+2*R]+=I*fn,$(v,2*T+2*R),v[2*T+2*R+1]+=P*fn,$(v,2*T+2*R+1),v[2*T+2*R+1]+=I*Ut,$(v,2*T+2*R+1),v[2*T+2*R+2]+=P*Ut,$(v,2*T+2*R+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function $(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function z(A,y){this.g=A,this.h=y}function se(A,y){if(b(y))throw Error("division by zero");if(b(A))return new z(_,_);if(O(A))return y=se(C(A),y),new z(C(y.g),C(y.h));if(O(y))return y=se(A,C(y)),new z(C(y.g),y.h);if(30<A.g.length){if(O(A)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(A);)v=Se(v),T=Se(T);var R=Y(v,1),P=Y(T,1);for(T=Y(T,2),v=Y(v,2);!b(T);){var I=P.add(T);0>=I.l(A)&&(R=R.add(v),P=I),T=Y(T,1),v=Y(v,1)}return y=F(A,R.j(y)),new z(R,y)}for(R=_;0<=A.l(y);){for(v=Math.max(1,Math.floor(A.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(v),I=P.j(y);O(I)||0<I.l(A);)v-=T,P=h(v),I=P.j(y);b(P)&&(P=g),R=R.add(P),A=F(A,I)}return new z(R,A)}n.A=function(A){return se(this,A).h},n.and=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&A.i(T);return new a(v,this.h&A.h)},n.or=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|A.i(T);return new a(v,this.h|A.h)},n.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^A.i(T);return new a(v,this.h^A.h)};function Se(A){for(var y=A.g.length+1,v=[],T=0;T<y;T++)v[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(v,A.h)}function Y(A,y){var v=y>>5;y%=32;for(var T=A.g.length-v,R=[],P=0;P<T;P++)R[P]=0<y?A.i(P+v)>>>y|A.i(P+v+1)<<32-y:A.i(P+v);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Q_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,qi=a}).apply(typeof zf<"u"?zf:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y_,Ta,J_,Wl,lh,X_,Z_,ev;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in d))break e;d=d[k]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,m=!1,k={next:function(){if(!m&&d<o.length){var V=d++;return{value:u(V,o[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function _(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,g.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function b(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,k,V){for(var B=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)B[Je-2]=arguments[Je];return u.prototype[k].apply(m,B)}}function O(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function C(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const k=o.length||0,V=m.length||0;o.length=k+V;for(let B=0;B<V;B++)o[k+B]=m[B]}else o.push(m)}}class F{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function se(o){return se[" "](o),o}se[" "]=function(){};var Se=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function Y(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)o[d]=m[d];for(let V=0;V<v.length;V++)d=v[V],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function P(o){l.setTimeout(()=>{throw o},0)}function I(){var o=Et;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ut{constructor(){this.h=this.g=null}add(u,d){const m=fn.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var fn=new F(()=>new nr,o=>o.reset());class nr{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pn,$t=!1,Et=new Ut,rr=()=>{const o=l.Promise.resolve(void 0);Pn=()=>{o.then(xs)}};var xs=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){P(d)}var u=fn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}$t=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var kn=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o})();function hr(o,u){if(ot.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Se){e:{try{se(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:dr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&hr.aa.h.call(this)}}b(hr,ot);var dr={2:"touch",3:"pen",4:"mouse"};hr.prototype.h=function(){hr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var bi="closure_listenable_"+(1e6*Math.random()|0),Ls=0;function Fs(o,u,d,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=k,this.key=++Ls,this.da=this.fa=!1}function ni(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Si(o){this.src=o,this.g={},this.h=0}Si.prototype.add=function(o,u,d,m,k){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var B=Ri(o,u,m,k);return-1<B?(u=o[B],d||(u.fa=!1)):(u=new Fs(u,this.src,V,!!m,k),u.fa=d,o.push(u)),u};function Yo(o,u){var d=u.type;if(d in o.g){var m=o.g[d],k=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=k)&&Array.prototype.splice.call(m,k,1),V&&(ni(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ri(o,u,d,m){for(var k=0;k<o.length;++k){var V=o[k];if(!V.da&&V.listener==u&&V.capture==!!d&&V.ha==m)return k}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),es={};function Jo(o,u,d,m,k){if(Array.isArray(u)){for(var V=0;V<u.length;V++)Jo(o,u[V],d,m,k);return null}return d=al(d),o&&o[bi]?o.K(u,d,h(m)?!!m.capture:!1,k):Us(o,u,d,!1,m,k)}function Us(o,u,d,m,k,V){if(!u)throw Error("Invalid event type");var B=h(k)?!!k.capture:!!k,Je=Zo(o);if(Je||(o[Ci]=Je=new Si(o)),d=Je.add(u,d,m,B,V),d.proxy)return d;if(m=iu(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)kn||(k=B),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent($s(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function iu(){function o(d){return u.call(o.src,o.listener,d)}const u=su;return o}function ol(o,u,d,m,k){if(Array.isArray(u))for(var V=0;V<u.length;V++)ol(o,u[V],d,m,k);else m=h(m)?!!m.capture:!!m,d=al(d),o&&o[bi]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],d=Ri(V,d,m,k),-1<d&&(ni(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=Zo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ri(u,d,m,k)),(d=-1<o?u[o]:null)&&Xo(d))}function Xo(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[bi])Yo(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent($s(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Zo(u))?(Yo(d,o),d.h==0&&(d.src=null,u[Ci]=null)):ni(o)}}}function $s(o){return o in es?es[o]:es[o]="on"+o}function su(o,u){if(o.da)o=!0;else{u=new hr(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&Xo(o),o=d.call(m,u)}return o}function Zo(o){return o=o[Ci],o instanceof Si?o:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(o){return typeof o=="function"?o:(o[Bs]||(o[Bs]=function(u){return o.handleEvent(u)}),o[Bs])}function Ht(){X.call(this),this.i=new Si(this),this.M=this,this.F=null}b(Ht,X),Ht.prototype[bi]=!0,Ht.prototype.removeEventListener=function(o,u,d,m){ol(this,o,u,d,m)};function Zt(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new ot(u,o);else if(u instanceof ot)u.target=u.target||o;else{var k=u;u=new ot(m,o),T(u,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var B=u.g=d[V];k=qs(B,m,!0,u)&&k}if(B=u.g=o,k=qs(B,m,!0,u)&&k,k=qs(B,m,!1,u)&&k,d)for(V=0;V<d.length;V++)B=u.g=d[V],k=qs(B,m,!1,u)&&k}Ht.prototype.N=function(){if(Ht.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)ni(d[m]);delete o.g[u],o.h--}}this.F=null},Ht.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},Ht.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function qs(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,V=0;V<u.length;++V){var B=u[V];if(B&&!B.da&&B.capture==d){var Je=B.listener,on=B.ha||B.src;B.fa&&Yo(o.i,B),k=Je.call(on,m)!==!1&&k}}return k&&!m.defaultPrevented}function ll(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function cl(o){o.g=ll(()=>{o.g=null,o.i&&(o.i=!1,cl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ul extends X{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:cl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(o){X.call(this),this.h=o,this.g={}}b(ts,X);var en=[];function Un(o){Y(o.g,function(u,d){this.g.hasOwnProperty(d)&&Xo(u)},o),o.g={}}ts.prototype.N=function(){ts.aa.N.call(this),Un(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=l.JSON.stringify,ir=l.JSON.parse,ou=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ea(){}ea.prototype.h=null;function ta(o){return o.h||(o.h=o.i())}function hl(){}var ns={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zs(){ot.call(this,"d")}b(zs,ot);function js(){ot.call(this,"c")}b(js,ot);var ri={},dl=null;function Hs(){return dl=dl||new Ht}ri.La="serverreachability";function na(o){ot.call(this,ri.La,o)}b(na,ot);function rs(o){const u=Hs();Zt(u,new na(u))}ri.STAT_EVENT="statevent";function ra(o,u){ot.call(this,ri.STAT_EVENT,o),this.stat=u}b(ra,ot);function tn(o){const u=Hs();Zt(u,new ra(u,o))}ri.Ma="timingevent";function fl(o,u){ot.call(this,ri.Ma,o),this.size=u}b(fl,ot);function is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function M(){this.g=!0}M.prototype.xa=function(){this.g=!1};function U(o,u,d,m,k,V){o.info(function(){if(o.g)if(V)for(var B="",Je=V.split("&"),on=0;on<Je.length;on++){var xe=Je[on].split("=");if(1<xe.length){var vn=xe[0];xe=xe[1];var yn=vn.split("_");B=2<=yn.length&&yn[1]=="type"?B+(vn+"="+xe+"&"):B+(vn+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+d+`
`+B})}function we(o,u,d,m,k,V,B){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+d+`
`+V+" "+B})}function Ee(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+wt(o,d)+(m?" "+m:"")})}function le(o,u){o.info(function(){return"TIMEOUT: "+u})}M.prototype.info=function(){};function wt(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<k.length;B++)k[B]=""}}}}return Pi(d)}catch{return u}}var Xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ge={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wt;function at(){}b(at,ea),at.prototype.g=function(){return new XMLHttpRequest},at.prototype.i=function(){return{}},Wt=new at;function Ze(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pt}function Pt(){this.i=null,this.g="",this.h=!1}var Tt={},lt={};function kt(o,u,d){o.L=1,o.v=nt(Fe(u)),o.m=d,o.P=!0,Nt(o,null)}function Nt(o,u){o.F=Date.now(),pt(o),o.A=Fe(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Vt(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Pt,o.g=_l(o.j,d?u:null,!o.m),0<o.O&&(o.M=new ul(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(en[0]=k.toString()),k=en);for(var V=0;V<k.length;V++){var B=Jo(d,k[V],m||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),rs(),U(o.i,o.u,o.A,o.l,o.R,o.m)}Ze.prototype.ca=function(o){o=o.target;const u=this.M;u&&gn(o)==3?u.j():this.Y(o)},Ze.prototype.Y=function(o){try{if(o==this.g)e:{const yn=gn(this.g);var u=this.g.Ba();const Qs=this.g.Z();if(!(3>yn)&&(yn!=3||this.g&&(this.h.h||this.g.oa()||Dr(this.g)))){this.J||yn!=4||u==7||(u==8||0>=Qs?rs(3):rs(2)),At(this);var d=this.g.Z();this.X=d;t:if(It(this)){var m=Dr(this.g);o="";var k=m.length,V=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Q(this),pe(this);var B="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(V&&u==k-1)});m.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,we(this.i,this.u,this.A,this.l,this.R,yn,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Je,on=this.g;if((Je=on.g?on.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Je)){var xe=Je;break t}}xe=null}if(d=xe)Ee(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,de(this,d);else{this.o=!1,this.s=3,tn(12),Q(this),pe(this);break e}}if(this.P){d=!0;let vr;for(;!this.J&&this.C<B.length;)if(vr=Gt(this,B),vr==lt){yn==4&&(this.s=4,tn(14),d=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(vr==Tt){this.s=4,tn(15),Ee(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Ee(this.i,this.l,vr,null),de(this,vr);if(It(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yn!=4||B.length!=0||this.h.h||(this.s=1,tn(16),d=!1),this.o=this.o&&d,!d)Ee(this.i,this.l,B,"[Invalid Chunked Response]"),Q(this),pe(this);else if(0<B.length&&!this.W){this.W=!0;var vn=this.j;vn.g==this&&vn.ba&&!vn.M&&(vn.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Gs(vn),vn.M=!0,tn(11))}}else Ee(this.i,this.l,B,null),de(this,B);yn==4&&Q(this),this.o&&!this.J&&(yn==4?oa(this.j,this):(this.o=!1,pt(this)))}else ss(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,tn(12)):(this.s=0,tn(13)),Q(this),pe(this)}}}catch{}finally{}};function It(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Gt(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?lt:(d=Number(u.substring(d,m)),isNaN(d)?Tt:(m+=1,m+d>u.length?lt:(u=u.slice(m,m+d),o.C=m+d,u)))}Ze.prototype.cancel=function(){this.J=!0,Q(this)};function pt(o){o.S=Date.now()+o.I,Ot(o,o.I)}function Ot(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=is(g(o.ba,o),u)}function At(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Ze.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(le(this.i,this.A),this.L!=2&&(rs(),tn(17)),Q(this),this.s=2,pe(this)):Ot(this,this.S-o)};function pe(o){o.j.G==0||o.J||oa(o.j,o)}function Q(o){At(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Un(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function de(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Te(d.h,o))){if(!o.K&&Te(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ls(d),_n(d);else break e;sa(d),tn(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=is(g(d.Za,d),6e3));if(1>=ct(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else si(d,11)}else if((o.K||d.g==o)&&ls(d),!$(u))for(k=d.Da.g.parse(u),u=0;u<k.length;u++){let xe=k[u];if(d.T=xe[0],xe=xe[1],d.G==2)if(xe[0]=="c"){d.K=xe[1],d.ia=xe[2];const vn=xe[3];vn!=null&&(d.la=vn,d.j.info("VER="+d.la));const yn=xe[4];yn!=null&&(d.Aa=yn,d.j.info("SVER="+d.Aa));const Qs=xe[5];Qs!=null&&typeof Qs=="number"&&0<Qs&&(m=1.5*Qs,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const vr=o.g;if(vr){const yl=vr.g?vr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yl){var V=m.h;V.g||yl.indexOf("spdy")==-1&&yl.indexOf("quic")==-1&&yl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(et(V,V.h),V.h=null))}if(m.D){const au=vr.g?vr.g.getResponseHeader("X-HTTP-Session-Id"):null;au&&(m.ya=au,J(m.I,m.D,au))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=o;if(m.qa=gl(m,m.J?m.ia:null,m.W),B.K){Bt(m.h,B);var Je=B,on=m.L;on&&(Je.I=on),Je.B&&(At(Je),pt(Je)),m.g=B}else ia(m);0<d.i.length&&sn(d)}else xe[0]!="stop"&&xe[0]!="close"||si(d,7);else d.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?si(d,7):gt(d):xe[0]!="noop"&&d.l&&d.l.ta(xe),d.v=0)}}rs(4)}catch{}}var ae=class{constructor(o,u){this.g=o,this.map=u}};function He(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ct(o){return o.h?1:o.g?o.g.size:0}function Te(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function et(o,u){o.g?o.g.add(u):o.h=u}function Bt(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}He.prototype.cancel=function(){if(this.i=tt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tt(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return O(o.i)}function Nn(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function Kt(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function Nr(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Kt(o),m=Nn(o),k=m.length,V=0;V<k;V++)u.call(void 0,m[V],d&&d[V],o)}var fr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ut(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),k=null;if(0<=m){var V=o[d].substring(0,m);k=o[d].substring(m+1)}else V=o[d];u(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Be){this.h=o.h,me(this,o.j),this.o=o.o,this.g=o.g,Oe(this,o.s),this.l=o.l;var u=o.i,d=new ge;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),qe(this,d),this.m=o.m}else o&&(u=String(o).match(fr))?(this.h=!1,me(this,u[1]||"",!0),this.o=Ke(u[2]||""),this.g=Ke(u[3]||"",!0),Oe(this,u[4]),this.l=Ke(u[5]||"",!0),qe(this,u[6]||"",!0),this.m=Ke(u[7]||"")):(this.h=!1,this.i=new ge(null,this.h))}Be.prototype.toString=function(){var o=[],u=this.j;u&&o.push(We(u,Yt,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(We(u,Yt,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(We(d,d.charAt(0)=="/"?pn:Jt,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",We(d,ze)),o.join("")};function Fe(o){return new Be(o)}function me(o,u,d){o.j=d?Ke(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Oe(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function qe(o,u,d){u instanceof ge?(o.i=u,$n(o.i,o.h)):(d||(u=We(u,qt)),o.i=new ge(u,o.h))}function J(o,u,d){o.i.set(u,d)}function nt(o){return J(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ke(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function We(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Qt),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Qt(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yt=/[#\/\?@]/g,Jt=/[#\?:]/g,pn=/[#\?]/g,qt=/[#\?@]/g,ze=/#/g;function ge(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ht(o){o.g||(o.g=new Map,o.h=0,o.i&&ut(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=ge.prototype,n.add=function(o,u){ht(this),this.i=null,o=bt(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Dt(o,u){ht(o),u=bt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function je(o,u){return ht(o),u=bt(o,u),o.g.has(u)}n.forEach=function(o,u){ht(this),this.g.forEach(function(d,m){d.forEach(function(k){o.call(u,k,m,this)},this)},this)},n.na=function(){ht(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const k=o[m];for(let V=0;V<k.length;V++)d.push(u[m])}return d},n.V=function(o){ht(this);let u=[];if(typeof o=="string")je(this,o)&&(u=u.concat(this.g.get(bt(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return ht(this),this.i=null,o=bt(this,o),je(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Vt(o,u,d){Dt(o,u),0<d.length&&(o.i=null,o.g.set(bt(o,u),O(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const V=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var k=V;B[m]!==""&&(k+="="+encodeURIComponent(String(B[m]))),o.push(k)}}return this.i=o.join("&")};function bt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function $n(o,u){u&&!o.j&&(ht(o),o.i=null,o.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(Dt(this,m),Vt(this,k,d))},o)),o.j=u}function nn(o,u){const d=new M;if(l.Image){const m=new Image;m.onload=w(mt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=w(mt,d,"TestLoadImage: error",!1,u,m),m.onabort=w(mt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=w(mt,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function rn(o,u){const d=new M,m=new AbortController,k=setTimeout(()=>{m.abort(),mt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(V=>{clearTimeout(k),V.ok?mt(d,"TestPingServer: ok",!0,u):mt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),mt(d,"TestPingServer: error",!1,u)})}function mt(o,u,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function On(){this.g=new ou}function Bn(o,u,d){const m=d||"";try{Nr(o,function(k,V){let B=k;h(k)&&(B=Pi(k)),u.push(m+V+"="+encodeURIComponent(B))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function W(o){this.l=o.Ub||null,this.j=o.eb||!1}b(W,ea),W.prototype.g=function(){return new Ue(this.l,this.j)},W.prototype.i=(function(o){return function(){return o}})({});function Ue(o,u){Ht.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Ue,Ht),n=Ue.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,rt(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,De(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rt(this)),this.g&&(this.readyState=3,rt(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Re(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Re(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?De(this):rt(this),this.readyState==3&&Re(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,De(this))},n.Qa=function(o){this.g&&(this.response=o,De(this))},n.ga=function(){this.g&&De(this)};function De(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rt(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function rt(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ue.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function qn(o){let u="";return Y(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function mn(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=qn(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):J(o,u,d))}function $e(o){Ht.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b($e,Ht);var pr=/^https?$/i,ii=["POST","PUT"];n=$e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wt.g(),this.v=this.o?ta(this.o):ta(Wt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){zn(this,V);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ii,u,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of d)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Or(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){zn(this,V)}};function zn(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,mr(o),_r(o)}function mr(o){o.A||(o.A=!0,Zt(o,"complete"),Zt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Zt(this,"complete"),Zt(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),$e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gr(this):this.bb())},n.bb=function(){gr(this)};function gr(o){if(o.h&&typeof a<"u"&&(!o.v[1]||gn(o)!=4||o.Z()!=2)){if(o.u&&gn(o)==4)ll(o.Ea,0,o);else if(Zt(o,"readystatechange"),gn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=B===0){var k=String(o.D).match(fr)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!pr.test(k?k.toLowerCase():"")}d=m}if(d)Zt(o,"complete"),Zt(o,"success");else{o.m=6;try{var V=2<gn(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",mr(o)}}finally{_r(o)}}}}function _r(o,u){if(o.g){Or(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Zt(o,"ready");try{d.onreadystatechange=m}catch{}}}function Or(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function gn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ir(u)}};function Dr(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ss(o){const u={};o=(o.g&&2<=gn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if($(o[m]))continue;var d=R(o[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=u[k]||[];u[k]=V,V.push(d)}A(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function G(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function fe(o){this.Aa=0,this.i=[],this.j=new M,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=G("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=G("baseRetryDelayMs",5e3,o),this.cb=G("retryDelaySeedMs",1e4,o),this.Wa=G("forwardChannelMaxRetries",2,o),this.wa=G("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new He(o&&o.concurrentRequestLimit),this.Da=new On,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fe.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){tn(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=gl(this,null,this.W),sn(this)};function gt(o){if(Dn(o),o.G==3){var u=o.U++,d=Fe(o.I);if(J(d,"SID",o.K),J(d,"RID",u),J(d,"TYPE","terminate"),Vr(o,d),u=new Ze(o,o.j,u),u.L=2,u.v=nt(Fe(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=_l(u.j,null),u.g.ea(u.v)),u.F=Date.now(),pt(u)}ml(o)}function _n(o){o.g&&(Gs(o),o.g.cancel(),o.g=null)}function Dn(o){_n(o),o.u&&(l.clearTimeout(o.u),o.u=null),ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function sn(o){if(!Ye(o.h)&&!o.s){o.s=!0;var u=o.Ga;Pn||rr(),$t||(Pn(),$t=!0),Et.add(u,o),o.B=0}}function os(o,u){return ct(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=is(g(o.Ga,o,u),aa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Ze(this,this.j,o);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Ws(this,k,u),d=Fe(this.I),J(d,"RID",o),J(d,"CVER",22),this.D&&J(d,"X-HTTP-Session-Id",this.D),Vr(this,d),V&&(this.O?u="headers="+encodeURIComponent(String(qn(V)))+"&"+u:this.m&&mn(d,this.m,V)),et(this.h,k),this.Ua&&J(d,"TYPE","init"),this.P?(J(d,"$req",u),J(d,"SID","null"),k.T=!0,kt(k,d,null)):kt(k,d,u),this.G=2}}else this.G==3&&(o?as(this,o):this.i.length==0||Ye(this.h)||as(this))};function as(o,u){var d;u?d=u.l:d=o.U++;const m=Fe(o.I);J(m,"SID",o.K),J(m,"RID",d),J(m,"AID",o.T),Vr(o,m),o.m&&o.o&&mn(m,o.m,o.o),d=new Ze(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ws(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),et(o.h,d),kt(d,m,u)}function Vr(o,u){o.H&&Y(o.H,function(d,m){J(u,m,d)}),o.l&&Nr({},function(d,m){J(u,m,d)})}function Ws(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var k=o.i;let V=-1;for(;;){const B=["count="+d];V==-1?0<d?(V=k[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let Je=!0;for(let on=0;on<d;on++){let xe=k[on].g;const vn=k[on].map;if(xe-=V,0>xe)V=Math.max(0,k[on].g-100),Je=!1;else try{Bn(vn,B,"req"+xe+"_")}catch{m&&m(vn)}}if(Je){m=B.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function ia(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Pn||rr(),$t||(Pn(),$t=!0),Et.add(u,o),o.v=0}}function sa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=is(g(o.Fa,o),aa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=is(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tn(10),_n(this),pl(this))};function Gs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pl(o){o.g=new Ze(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Fe(o.qa);J(u,"RID","rpc"),J(u,"SID",o.K),J(u,"AID",o.T),J(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&J(u,"TO",o.ja),J(u,"TYPE","xmlhttp"),Vr(o,u),o.m&&o.o&&mn(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=nt(Fe(u)),d.m=null,d.P=!0,Nt(d,o)}n.Za=function(){this.C!=null&&(this.C=null,_n(this),sa(this),tn(19))};function ls(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function oa(o,u){var d=null;if(o.g==u){ls(o),Gs(o),o.g=null;var m=2}else if(Te(o.h,u))d=u.D,Bt(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;m=Hs(),Zt(m,new fl(m,d)),sn(o)}else ia(o);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&os(o,u)||m==2&&sa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),k){case 1:si(o,5);break;case 4:si(o,10);break;case 3:si(o,6);break;default:si(o,2)}}}function aa(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function si(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const k=!m;m=new Be(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||me(m,"https"),nt(m),k?nn(m.toString(),d):rn(m.toString(),d)}else tn(2);o.G=0,o.l&&o.l.sa(u),ml(o),Dn(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tn(2)):(this.j.info("Failed to ping google.com"),tn(1))};function ml(o){if(o.G=0,o.ka=[],o.l){const u=tt(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function gl(o,u,d){var m=d instanceof Be?Fe(d):new Be(d);if(m.g!="")u&&(m.g=u+"."+m.g),Oe(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var V=new Be(null);m&&me(V,m),u&&(V.g=u),k&&Oe(V,k),d&&(V.l=d),m=V}return d=o.D,u=o.ya,d&&u&&J(m,d,u),J(m,"VER",o.la),Vr(o,m),m}function _l(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new $e(new W({eb:d})):new $e(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $d(){}n=$d.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vl(){}vl.prototype.g=function(o,u){return new Kn(o,u)};function Kn(o,u){Ht.call(this),this.g=new fe(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ks(this)}b(Kn,Ht),Kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kn.prototype.close=function(){gt(this.g)},Kn.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Pi(o),o=d);u.i.push(new ae(u.Ya++,o)),u.G==3&&sn(u)},Kn.prototype.N=function(){this.g.l=null,delete this.j,gt(this.g),delete this.g,Kn.aa.N.call(this)};function Bd(o){zs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}b(Bd,zs);function qd(){js.call(this),this.status=1}b(qd,js);function Ks(o){this.g=o}b(Ks,$d),Ks.prototype.ua=function(){Zt(this.g,"a")},Ks.prototype.ta=function(o){Zt(this.g,new Bd(o))},Ks.prototype.sa=function(o){Zt(this.g,new qd)},Ks.prototype.ra=function(){Zt(this.g,"b")},vl.prototype.createWebChannel=vl.prototype.g,Kn.prototype.send=Kn.prototype.o,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,ev=function(){return new vl},Z_=function(){return Hs()},X_=ri,lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,Wl=Xe,Ge.COMPLETE="complete",J_=Ge,hl.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",Ht.prototype.listen=Ht.prototype.K,Ta=hl,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,Y_=$e}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const jf="@firebase/firestore",Hf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jn.UNAUTHENTICATED=new jn(null),jn.GOOGLE_CREDENTIALS=new jn("google-credentials-uid"),jn.FIRST_PARTY=new jn("first-party-uid"),jn.MOCK_USER=new jn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Mc("@firebase/firestore");function to(){return ks.logLevel}function H(n,...e){if(ks.logLevel<=Ae.DEBUG){const t=e.map(sd);ks.debug(`Firestore (${Wo}): ${n}`,...t)}}function Ei(n,...e){if(ks.logLevel<=Ae.ERROR){const t=e.map(sd);ks.error(`Firestore (${Wo}): ${n}`,...t)}}function Ns(n,...e){if(ks.logLevel<=Ae.WARN){const t=e.map(sd);ks.warn(`Firestore (${Wo}): ${n}`,...t)}}function sd(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,tv(n,r,t)}function tv(n,e,t){let r=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ei(r),new Error(r)}function _t(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||tv(e,i,r)}function Ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends ti{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jn.UNAUTHENTICATED)))}shutdown(){}}class HA{constructor(e){this.t=e,this.currentUser=jn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){_t(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Is,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Is)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_t(typeof r.accessToken=="string",31837,{l:r}),new zA(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _t(e===null||typeof e=="string",2055,{h:e}),new jn(e)}}class WA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=jn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new WA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,er(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){_t(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(_t(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=QA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function ch(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ye(r,i);{const s=nv(),a=YA(s.encode(Gf(n,t)),s.encode(Gf(e,t)));return a!==0?a:ye(r,i)}}t+=r>65535?2:1}return ye(n.length,e.length)}function Gf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function YA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ye(n[t],e[t]);return ye(n.length,e.length)}function No(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="__name__";class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&he(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&he(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Mr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ye(e.length,t.length)}static compareSegments(e,t){const r=Mr.isNumericId(e),i=Mr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Mr.extractNumericId(e).compare(Mr.extractNumericId(t)):ch(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qi.fromString(e.substring(4,e.length-2))}}class st extends Mr{construct(e,t,r){return new st(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new st(t)}static emptyPath(){return new st([])}}const JA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class An extends Mr{construct(e,t,r){return new An(e,t,r)}static isValidIdentifier(e){return JA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),An.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kf}static keyField(){return new An([Kf])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new An(t)}static emptyPath(){return new An([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(st.fromString(e))}static fromName(e){return new ne(st.fromString(e).popFirst(5))}static empty(){return new ne(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new st(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(n,e,t){if(!t)throw new q(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZA(n,e,t,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qf(n){if(ne.isDocumentKey(n))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function iv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":he(12329,{type:typeof n})}function Yf(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qc(n);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function eb(n,e){if(e<=0)throw new q(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){const t={typeString:n};return e&&(t.value=e),t}function nl(n,e){if(!iv(n))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new q(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=-62135596800,Xf=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Xf);return new dt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jf)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xf}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nl(e,dt._jsonSchema))return new dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:Ft("string",dt._jsonSchemaVersion),seconds:Ft("number"),nanoseconds:Ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new dt(0,0))}static max(){return new ue(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=-1;function tb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new dt(t+1,0):new dt(t,r));return new Gi(i,ne.empty(),e)}function nb(n){return new Gi(n.readTime,n.key,Ua)}class Gi{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Gi(ue.min(),ne.empty(),Ua)}static max(){return new Gi(ue.max(),ne.empty(),Ua)}}function rb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==ib)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,r)=>{t(e)}))}static reject(e){return new x(((t,r)=>{r(e)}))}static waitFor(e){return new x(((t,r)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(c=>r(c)))})),a=!0,s===i&&t()}))}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next((i=>i?x.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new x(((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next((f=>{a[h]=f,++l,l===s&&r(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new x(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function ob(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Go(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}jc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=-1;function Hc(n){return n==null}function uc(n){return n===0&&1/n==-1/0}function lb(n){return typeof n=="number"&&Number.isInteger(n)&&!uc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="";function cb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zf(e)),e=ub(n.get(t),e);return Zf(e)}function ub(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case sv:t+="";break;default:t+=s}}return t}function Zf(n){return n+sv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ko(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ov(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t){this.comparator=e,this.root=t||ln.EMPTY}insert(e,t){return new Ct(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ln.RED,this.left=i??ln.EMPTY,this.right=s??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ln(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ln.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tp(this.data.getIterator())}getIteratorFrom(e){return new tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new jt(this.comparator);return t.data=e,t}}class tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.fields=e,e.sort(An.comparator)}static empty(){return new xi([])}unionWith(e){let t=new jt(An.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new av("Invalid base64 string: "+s):s}})(e);return new dn(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new dn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const hb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ki(n){if(_t(!!n,39018),typeof n=="string"){let e=0;const t=hb.exec(n);if(_t(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qi(n){return typeof n=="string"?dn.fromBase64String(n):dn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="server_timestamp",cv="__type__",uv="__previous_value__",hv="__local_write_time__";function Wc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[cv])===null||t===void 0?void 0:t.stringValue)===lv}function Gc(n){const e=n.mapValue.fields[uv];return Wc(e)?Gc(e):e}function $a(n){const e=Ki(n.mapValue.fields[hv].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,r,i,s,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const hc="(default)";class Ba{constructor(e,t){this.projectId=e,this.database=t||hc}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database===hc}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="__type__",fb="__max__",kl={mapValue:{}},fv="__vector__",dc="value";function Yi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:mb(n)?9007199254740991:pb(n)?10:11:he(28295,{value:n})}function Zr(n,e){if(n===e)return!0;const t=Yi(n);if(t!==Yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $a(n).isEqual($a(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ki(i.timestampValue),l=Ki(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return Qi(i.bytesValue).isEqual(Qi(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return St(i.geoPointValue.latitude)===St(s.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return St(i.integerValue)===St(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=St(i.doubleValue),l=St(s.doubleValue);return a===l?uc(a)===uc(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return No(n.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ep(a)!==ep(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Zr(a[c],l[c])))return!1;return!0})(n,e);default:return he(52216,{left:n})}}function qa(n,e){return(n.values||[]).find((t=>Zr(t,e)))!==void 0}function Oo(n,e){if(n===e)return 0;const t=Yi(n),r=Yi(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=St(s.integerValue||s.doubleValue),c=St(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return np(n.timestampValue,e.timestampValue);case 4:return np($a(n),$a(e));case 5:return ch(n.stringValue,e.stringValue);case 6:return(function(s,a){const l=Qi(s),c=Qi(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ye(l[h],c[h]);if(f!==0)return f}return ye(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=ye(St(s.latitude),St(a.latitude));return l!==0?l:ye(St(s.longitude),St(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return rp(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var l,c,h,f;const _=s.fields||{},g=a.fields||{},w=(l=_[dc])===null||l===void 0?void 0:l.arrayValue,b=(c=g[dc])===null||c===void 0?void 0:c.arrayValue,O=ye(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:rp(w,b)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===kl.mapValue&&a===kl.mapValue)return 0;if(s===kl.mapValue)return 1;if(a===kl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let _=0;_<c.length&&_<f.length;++_){const g=ch(c[_],f[_]);if(g!==0)return g;const w=Oo(l[c[_]],h[f[_]]);if(w!==0)return w}return ye(c.length,f.length)})(n.mapValue,e.mapValue);default:throw he(23264,{le:t})}}function np(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Ki(n),r=Ki(e),i=ye(t.seconds,r.seconds);return i!==0?i:ye(t.nanos,r.nanos)}function rp(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Oo(t[i],r[i]);if(s)return s}return ye(t.length,r.length)}function Do(n){return uh(n)}function uh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ki(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Qi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ne.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=uh(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${uh(t.fields[a])}`;return i+"}"})(n.mapValue):he(61005,{value:n})}function Gl(n){switch(Yi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gc(n);return e?16+Gl(e):16;case 5:return 2*n.stringValue.length;case 6:return Qi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Gl(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Ko(r.fields,((s,a)=>{i+=s.length+Gl(a)})),i})(n.mapValue);default:throw he(13486,{value:n})}}function fc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hh(n){return!!n&&"integerValue"in n}function od(n){return!!n&&"arrayValue"in n}function ip(n){return!!n&&"nullValue"in n}function sp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pu(n){return!!n&&"mapValue"in n}function pb(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[dv])===null||t===void 0?void 0:t.stringValue)===fv}function Na(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ko(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Na(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Na(n.arrayValue.values[t]);return e}return Object.assign({},n)}function mb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===fb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.value=e}static empty(){return new Br({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(t)}setAll(e){let t=An.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Na(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Pu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Pu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ko(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new Br(Na(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new In(e,0,ue.min(),ue.min(),ue.min(),Br.empty(),0)}static newFoundDocument(e,t,r,i){return new In(e,1,t,ue.min(),r,i,0)}static newNoDocument(e,t){return new In(e,2,t,ue.min(),ue.min(),Br.empty(),0)}static newUnknownDocument(e,t){return new In(e,3,t,ue.min(),ue.min(),Br.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Br.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Br.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof In&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new In(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.position=e,this.inclusive=t}}function op(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=Oo(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ap(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t="asc"){this.field=e,this.dir=t}}function gb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{}class Lt extends pv{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vb(e,t,r):t==="array-contains"?new wb(e,r):t==="in"?new Tb(e,r):t==="not-in"?new Ib(e,r):t==="array-contains-any"?new Ab(e,r):new Lt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new yb(e,r):new Eb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oo(t,this.value)):t!==null&&Yi(this.value)===Yi(t)&&this.matchesComparison(Oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pr extends pv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Pr(e,t)}matches(e){return mv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function mv(n){return n.op==="and"}function gv(n){return _b(n)&&mv(n)}function _b(n){for(const e of n.filters)if(e instanceof Pr)return!1;return!0}function dh(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Do(n.value);if(gv(n))return n.filters.map((e=>dh(e))).join(",");{const e=n.filters.map((t=>dh(t))).join(",");return`${n.op}(${e})`}}function _v(n,e){return n instanceof Lt?(function(r,i){return i instanceof Lt&&r.op===i.op&&r.field.isEqual(i.field)&&Zr(r.value,i.value)})(n,e):n instanceof Pr?(function(r,i){return i instanceof Pr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,l)=>s&&_v(a,i.filters[l])),!0):!1})(n,e):void he(19439)}function vv(n){return n instanceof Lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`})(n):n instanceof Pr?(function(t){return t.op.toString()+" {"+t.getFilters().map(vv).join(" ,")+"}"})(n):"Filter"}class vb extends Lt{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class yb extends Lt{constructor(e,t){super(e,"in",t),this.keys=yv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Eb extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=yv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function yv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>ne.fromName(r.referenceValue)))}class wb extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return od(t)&&qa(t.arrayValue,this.value)}}class Tb extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qa(this.value.arrayValue,t)}}class Ib extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qa(this.value.arrayValue,t)}}class Ab extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!od(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>qa(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function lp(n,e=null,t=[],r=[],i=null,s=null,a=null){return new bb(n,e,t,r,i,s,a)}function ad(n){const e=Ne(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>dh(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Do(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Do(r))).join(",")),e.Pe=t}return e.Pe}function ld(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_v(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ap(n.startAt,e.startAt)&&ap(n.endAt,e.endAt)}function fh(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Sb(n,e,t,r,i,s,a,l){return new Vs(n,e,t,r,i,s,a,l)}function Ev(n){return new Vs(n)}function cp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cd(n){return n.collectionGroup!==null}function fo(n){const e=Ne(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new jt(An.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new za(s,r))})),t.has(An.keyField().canonicalString())||e.Te.push(new za(An.keyField(),r))}return e.Te}function Kr(n){const e=Ne(n);return e.Ie||(e.Ie=Rb(e,fo(n))),e.Ie}function Rb(n,e){if(n.limitType==="F")return lp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new za(i.field,s)}));const t=n.endAt?new Vo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vo(n.startAt.position,n.startAt.inclusive):null;return lp(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ph(n,e){const t=n.filters.concat([e]);return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pc(n,e,t){return new Vs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kc(n,e){return ld(Kr(n),Kr(e))&&n.limitType===e.limitType}function wv(n){return`${ad(Kr(n))}|lt:${n.limitType}`}function no(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>vv(i))).join(", ")}]`),Hc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Do(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Do(i))).join(",")),`Target(${r})`})(Kr(n))}; limitType=${n.limitType})`}function Qc(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,c){const h=op(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,fo(r),i)||r.endAt&&!(function(a,l,c){const h=op(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,fo(r),i))})(n,e)}function Cb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tv(n){return(e,t)=>{let r=!1;for(const i of fo(n)){const s=Pb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Pb(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):(function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Oo(c,h):he(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ko(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return ov(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Ct(ne.comparator);function Ji(){return kb}const Iv=new Ct(ne.comparator);function Ia(...n){let e=Iv;for(const t of n)e=e.insert(t.key,t);return e}function Nb(n){let e=Iv;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ms(){return Oa()}function Av(){return Oa()}function Oa(){return new Ms((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ob=new jt(ne.comparator);function Me(...n){let e=Ob;for(const t of n)e=e.add(t);return e}const Db=new jt(ye);function Vb(){return Db}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function bv(n){return{integerValue:""+n}}function Mb(n,e){return lb(e)?bv(e):ud(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this._=void 0}}function xb(n,e,t){return n instanceof mh?(function(i,s){const a={fields:{[cv]:{stringValue:lv},[hv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wc(s)&&(s=Gc(s)),s&&(a.fields[uv]=s),{mapValue:a}})(t,e):n instanceof mc?Sv(n,e):n instanceof gc?Rv(n,e):(function(i,s){const a=Fb(i,s),l=up(a)+up(i.Ee);return hh(a)&&hh(i.Ee)?bv(l):ud(i.serializer,l)})(n,e)}function Lb(n,e,t){return n instanceof mc?Sv(n,e):n instanceof gc?Rv(n,e):t}function Fb(n,e){return n instanceof gh?(function(r){return hh(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class mh extends Yc{}class mc extends Yc{constructor(e){super(),this.elements=e}}function Sv(n,e){const t=Cv(e);for(const r of n.elements)t.some((i=>Zr(i,r)))||t.push(r);return{arrayValue:{values:t}}}class gc extends Yc{constructor(e){super(),this.elements=e}}function Rv(n,e){let t=Cv(e);for(const r of n.elements)t=t.filter((i=>!Zr(i,r)));return{arrayValue:{values:t}}}class gh extends Yc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function up(n){return St(n.integerValue||n.doubleValue)}function Cv(n){return od(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ub(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof mc&&i instanceof mc||r instanceof gc&&i instanceof gc?No(r.elements,i.elements,Zr):r instanceof gh&&i instanceof gh?Zr(r.Ee,i.Ee):r instanceof mh&&i instanceof mh})(n.transform,e.transform)}class As{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new As}static exists(e){return new As(void 0,e)}static updateTime(e){return new As(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hd{}function Pv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bb(n.key,As.none()):new dd(n.key,n.data,As.none());{const t=n.data,r=Br.empty();let i=new jt(An.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Jc(n.key,r,new xi(i.toArray()),As.none())}}function $b(n,e,t){n instanceof dd?(function(i,s,a){const l=i.value.clone(),c=dp(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Jc?(function(i,s,a){if(!Kl(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=dp(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(kv(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Da(n,e,t,r){return n instanceof dd?(function(s,a,l,c){if(!Kl(s.precondition,a))return l;const h=s.value.clone(),f=fp(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Jc?(function(s,a,l,c){if(!Kl(s.precondition,a))return l;const h=fp(s.fieldTransforms,c,a),f=a.data;return f.setAll(kv(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((_=>_.field)))})(n,e,t,r):(function(s,a,l){return Kl(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function hp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&No(r,i,((s,a)=>Ub(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dd extends hd{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jc extends hd{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kv(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function dp(n,e,t){const r=new Map;_t(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,Lb(a,l,t[i]))}return r}function fp(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,xb(s,a,e))}return r}class Bb extends hd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&$b(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Da(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Da(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Av();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=Pv(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Me())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,((t,r)=>hp(t,r)))&&No(this.baseMutations,e.baseMutations,((t,r)=>hp(t,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Pe;function Nv(n){if(n===void 0)return Ei("GRPC error has no .code"),L.UNKNOWN;switch(n){case Mt.OK:return L.OK;case Mt.CANCELLED:return L.CANCELLED;case Mt.UNKNOWN:return L.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return L.INTERNAL;case Mt.UNAVAILABLE:return L.UNAVAILABLE;case Mt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Mt.NOT_FOUND:return L.NOT_FOUND;case Mt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Mt.ABORTED:return L.ABORTED;case Mt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Mt.DATA_LOSS:return L.DATA_LOSS;default:return he(39323,{code:n})}}(Pe=Mt||(Mt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new qi([4294967295,4294967295],0);function pp(n){const e=nv().encode(n),t=new Q_;return t.update(e),new Uint8Array(t.digest())}function mp(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([t,r],0),new qi([i,s],0)]}class fd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=qi.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(qi.fromNumber(r)));return i.compare(Hb)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=pp(e),[r,i]=mp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new fd(s,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=pp(e),[r,i]=mp(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xc(ue.min(),i,new Ct(ye),Ji(),Me())}}class rl{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new rl(r,t,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Ov{constructor(e,t){this.targetId=e,this.De=t}}class Dv{constructor(e,t,r=dn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class gp{constructor(){this.ve=0,this.Ce=_p(),this.Fe=dn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Me(),t=Me(),r=Me();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:he(38017,{changeType:s})}})),new rl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=_p()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,_t(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Wb{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ji(),this.je=Nl(),this.Je=Nl(),this.He=new Ct(ye)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:he(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(fh(s))if(r===0){const a=new ne(s.path);this.Xe(t,a,In.newNoDocument(a,ue.min()))}else _t(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Qi(r).toUint8Array()}catch(c){if(c instanceof av)return Ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new fd(a,i,s)}catch(c){return Ns(c instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const l=this.st(a);if(l){if(s.current&&fh(l.target)){const c=new ne(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,In.newNoDocument(c,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=Me();this.Je.forEach(((s,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new Xc(e,t,this.He,this.ze,r);return this.ze=Ji(),this.je=Nl(),this.Je=Nl(),this.He=new Ct(ye),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new gp,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new jt(ye),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new jt(ye),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new gp),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Nl(){return new Ct(ne.comparator)}function _p(){return new Ct(ne.comparator)}const Gb={asc:"ASCENDING",desc:"DESCENDING"},Kb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qb={and:"AND",or:"OR"};class Yb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _h(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function vh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function po(n){return _t(!!n,49232),ue.fromTimestamp((function(t){const r=Ki(t);return new dt(r.seconds,r.nanos)})(n))}function Mv(n,e){return yh(n,e).canonicalString()}function yh(n,e){const t=(function(i){return new st(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function xv(n){const e=st.fromString(n);return _t(Bv(e),10190,{key:e.toString()}),e}function ku(n,e){const t=xv(e);if(t.get(1)!==n.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(Fv(t))}function Lv(n,e){return Mv(n.databaseId,e)}function Jb(n){const e=xv(n);return e.length===4?st.emptyPath():Fv(e)}function vp(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fv(n){return _t(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(_t(f===void 0||typeof f=="string",58123),dn.fromBase64String(f||"")):(_t(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),dn.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?L.UNKNOWN:Nv(h.code);return new q(f,h.message||"")})(a);t=new Dv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ku(n,r.document.name),s=po(r.document.updateTime),a=r.document.createTime?po(r.document.createTime):ue.min(),l=new Br({mapValue:{fields:r.document.fields}}),c=In.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ql(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ku(n,r.document),s=r.readTime?po(r.readTime):ue.min(),a=In.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ql([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ku(n,r.document),s=r.removedTargetIds||[];t=new Ql([],s,i,null)}else{if(!("filter"in e))return he(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new jb(i,s),l=r.targetId;t=new Ov(l,a)}}return t}function Zb(n,e){return{documents:[Lv(n,e.path)]}}function e1(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Lv(n,i);const s=(function(h){if(h.length!==0)return $v(Pr.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:ro(g.field),direction:r1(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=_h(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function t1(n){let e=Jb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){_t(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(_){const g=Uv(_);return g instanceof Pr&&gv(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(_){return _.map((g=>(function(b){return new za(io(b.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(_){let g;return g=typeof _=="object"?_.value:_,Hc(g)?null:g})(t.limit));let c=null;t.startAt&&(c=(function(_){const g=!!_.before,w=_.values||[];return new Vo(w,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(_){const g=!_.before,w=_.values||[];return new Vo(w,g)})(t.endAt)),Sb(e,i,a,s,l,"F",c,h)}function n1(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uv(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=io(t.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=io(t.unaryFilter.field);return Lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=io(t.unaryFilter.field);return Lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=io(t.unaryFilter.field);return Lt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Lt.create(io(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Pr.create(t.compositeFilter.filters.map((r=>Uv(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he(1026)}})(t.compositeFilter.op))})(n):he(30097,{filter:n})}function r1(n){return Gb[n]}function i1(n){return Kb[n]}function s1(n){return Qb[n]}function ro(n){return{fieldPath:n.canonicalString()}}function io(n){return An.fromServerFormat(n.fieldPath)}function $v(n){return n instanceof Lt?(function(t){if(t.op==="=="){if(sp(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NAN"}};if(ip(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sp(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NAN"}};if(ip(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(t.field),op:i1(t.op),value:t.value}}})(n):n instanceof Pr?(function(t){const r=t.getFilters().map((i=>$v(i)));return r.length===1?r[0]:{compositeFilter:{op:s1(t.op),filters:r}}})(n):he(54877,{filter:n})}function Bv(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,r,i,s=ue.min(),a=ue.min(),l=dn.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.gt=e}}function a1(n){const e=t1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.Dn=new c1}addToCollectionParentIndex(e,t){return this.Dn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Gi.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Gi.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class c1{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new jt(st.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new jt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qv=41943040;class Hn{static withCacheSize(e){return new Hn(e,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.DEFAULT_COLLECTION_PERCENTILE=10,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hn.DEFAULT=new Hn(qv,Hn.DEFAULT_COLLECTION_PERCENTILE,Hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hn.DISABLED=new Hn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mo(0)}static ur(){return new Mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="LruGarbageCollector",zv=1048576;function wp([n,e],[t,r]){const i=ye(n,t);return i===0?ye(e,r):i}class u1{constructor(e){this.Tr=e,this.buffer=new jt(wp),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class h1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){H(Ep,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Go(t)?H(Ep,"Ignoring IndexedDB error during garbage collection: ",t):await zc(t)}await this.Rr(3e5)}))}}class d1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(jc.ue);const r=new u1(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(yp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yp):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((_=>(_>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i)))).next((_=>(r=_,l=Date.now(),this.removeTargets(e,r,t)))).next((_=>(s=_,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((_=>(h=Date.now(),to()<=Ae.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${_} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_}))))}}function f1(n,e){return new d1(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.changes=new Ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,In.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Da(r.mutation,i,xi.empty(),dt.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Me()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Me()){const i=ms();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=Ia();return s.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ms();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Me())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let s=Ji();const a=Oa(),l=(function(){return Oa()})();return t.forEach(((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jc)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Da(f.mutation,h,f.mutation.getFieldMask(),dt.now())):a.set(h.key,xi.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>{var _;return l.set(h,new m1(f,(_=a.get(h))!==null&&_!==void 0?_:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Oa();let i=new Ct(((a,l)=>a-l)),s=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||xi.empty();f=l.applyToLocalView(h,f),r.set(c,f);const _=(i.get(l.batchId)||Me()).add(c);i=i.insert(l.batchId,_)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,_=Av();f.forEach((g=>{if(!s.has(g)){const w=Pv(t.get(g),r.get(g));w!==null&&_.set(g,w),s=s.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return x.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):x.resolve(ms());let l=Ua,c=s;return a.next((h=>x.forEach(h,((f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{c=c.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,c,h,Me()))).next((f=>({batchId:l,changes:Nb(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next((r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Ia();return this.indexManager.getCollectionParents(e,s).next((l=>x.forEach(l,(c=>{const h=(function(_,g){return new Vs(g,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((f=>{f.forEach(((_,g)=>{a=a.insert(_,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,In.newInvalidDocument(f)))}));let l=Ia();return a.forEach(((c,h)=>{const f=s.get(c);f!==void 0&&Da(f.mutation,h,xi.empty(),dt.now()),Qc(t,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return x.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:po(i.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:a1(i.bundledQuery),readTime:po(i.readTime)}})(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.overlays=new Ct(ne.comparator),this.kr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ms();return x.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=ms(),s=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ct(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ms(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ms(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=i)););return x.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zb(t,r));let s=this.kr.get(t);s===void 0&&(s=Me(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.qr=new jt(Xt.Qr),this.$r=new jt(Xt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Xt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Xt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new ne(new st([])),r=new Xt(t,e),i=new Xt(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ne(new st([])),r=new Xt(t,e),i=new Xt(t,e+1);let s=Me();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new Xt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ne.comparator(e.key,t.key)||ye(e.Hr,t.Hr)}static Ur(e,t){return ye(e.Hr,t.Hr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new jt(Xt.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new qb(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new Xt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?ab:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xt(t,0),i=new Xt(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const l=this.Zr(a.Hr);s.push(l)})),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new jt(ye);return t.forEach((i=>{const s=new Xt(i,0),a=new Xt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(l=>{r=r.add(l.Hr)}))})),x.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const a=new Xt(new ne(s),0);let l=new jt(ye);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.Hr)),!0)}),a),x.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){_t(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return x.forEach(t.mutations,(i=>{const s=new Xt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Xt(t,0),i=this.Yr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.ni=e,this.docs=(function(){return new Ct(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():In.newInvalidDocument(t))}getEntries(e,t){let r=Ji();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():In.newInvalidDocument(i))})),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ji();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||rb(nb(f),r)<=0||(i.has(f.key)||Qc(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,t,r,i){he(9500)}ri(e,t){return x.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new T1(this)}getSize(e){return x.resolve(this.size)}}class T1 extends p1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),x.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.persistence=e,this.ii=new Ms((t=>ad(t)),ld),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.si=0,this.oi=new pd,this.targetCount=0,this._i=Mo.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),x.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.hr(t),x.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),x.waitFor(s).next((()=>i))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),x.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t){this.ai={},this.overlays={},this.ui=new jc(0),this.ci=!1,this.ci=!0,this.li=new y1,this.referenceDelegate=e(this),this.hi=new I1(this),this.indexManager=new l1,this.remoteDocumentCache=(function(i){return new w1(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new o1(t),this.Ti=new _1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new v1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new E1(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const i=new A1(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return x.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class A1 extends sb{constructor(e){super(),this.currentSequenceNumber=e}}class md{constructor(e){this.persistence=e,this.Ai=new pd,this.Ri=null}static Vi(e){return new md(e)}get mi(){if(this.Ri)return this.Ri;throw he(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,(r=>{const i=ne.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,ue.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return x.or([()=>x.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class _c{constructor(e,t){this.persistence=e,this.gi=new Ms((r=>cb(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=f1(this,t)}static Vi(e,t){return new _c(e,t)}Ii(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return x.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?x.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,s.removeEntry(a,ue.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gl(e.data.value)),t}Sr(e,t,r){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Me(),i=Me();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gd(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return vT()?8:ob(Cn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new b1;return this.ws(e,t,a).next((l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(to()<=Ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(to()<=Ae.DEBUG&&H("QueryEngine","Query:",no(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(to()<=Ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kr(t))):x.resolve())}ps(e,t){if(cp(t))return x.resolve(null);let r=Kr(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=pc(t,null,"F"),r=Kr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=Me(...s);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,pc(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,i){return cp(t)||i.isEqual(ue.min())?x.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?x.resolve(null):(to()<=Ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),no(t)),this.vs(e,a,t,tb(i,Ua)).next((l=>l)))}))}bs(e,t){let r=new jt(Tv(e));return t.forEach(((i,s)=>{Qc(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return to()<=Ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",no(t)),this.gs.getDocumentsMatchingQuery(e,t,Gi.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="LocalStore",R1=3e8;class C1{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new Ct(ye),this.Ms=new Ms((s=>ad(s)),ld),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function P1(n,e,t,r){return new C1(n,e,t,r)}async function Hv(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],l=[];let c=Me();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function Wv(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function k1(n,e){const t=Ne(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach(((f,_)=>{const g=i.get(_);if(!g)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,_).next((()=>t.hi.addMatchingKeys(s,f.addedDocuments,_))));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?w=w.withResumeToken(dn.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(_,w),(function(O,C,F){return O.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=R1?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(g,w,f)&&l.push(t.hi.updateTargetData(s,w))}));let c=Ji(),h=Me();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(N1(s,a,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!r.isEqual(ue.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next((_=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(f)}return x.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,h))).next((()=>c))})).then((s=>(t.Fs=i,s)))}function N1(n,e,t){let r=Me(),i=Me();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=Ji();return t.forEach(((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):H(_d,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:i}}))}function O1(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,x.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Li(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Eh(n,e,t){const r=Ne(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!Go(a))throw a;H(_d,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Tp(n,e,t){const r=Ne(n);let i=ue.min(),s=Me();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,f){const _=Ne(c),g=_.Ms.get(f);return g!==void 0?x.resolve(_.Fs.get(g)):_.hi.getTargetData(h,f)})(r,a,Kr(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{s=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:ue.min(),t?s:Me()))).next((l=>(D1(r,Cb(e),l),{documents:l,qs:s})))))}function D1(n,e,t){let r=n.xs.get(e)||ue.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Ip{constructor(){this.activeTargetIds=Vb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V1{constructor(){this.Fo=new Ip,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ip,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="ConnectivityMonitor";class bp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(Ap,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){H(Ap,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol=null;function wh(){return Ol===null?Ol=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ol++,"0x"+Ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="RestConnection",x1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class L1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===hc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=wh(),l=this.Go(e,t.toUriEncodedString());H(Nu,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(l),f=Os(h);return this.jo(e,l,c,r,f).then((_=>(H(Nu,`Received RPC '${e}' ${a}: `,_),_)),(_=>{throw Ns(Nu,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",r),_}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=x1[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="WebChannelConnection";class U1 extends L1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=wh();return new Promise(((l,c)=>{const h=new Y_;h.setWithCredentials(!0),h.listenOnce(J_.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Wl.NO_ERROR:const _=h.getResponseJson();H(wn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case Wl.TIMEOUT:H(wn,`RPC '${e}' ${a} timed out`),c(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const g=h.getStatus();if(H(wn,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const O=(function(F){const $=F.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf($)>=0?$:L.UNKNOWN})(b.status);c(new q(O,b.message))}else c(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new q(L.UNAVAILABLE,"Connection failed."));break;default:he(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{H(wn,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);H(wn,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)}))}P_(e,t,r){const i=wh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ev(),l=Z_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");H(wn,`Creating RPC '${e}' stream ${i}: ${f}`,c);const _=a.createWebChannel(f,c);this.T_(_);let g=!1,w=!1;const b=new F1({Ho:C=>{w?H(wn,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(g||(H(wn,`Opening RPC '${e}' stream ${i} transport.`),_.open(),g=!0),H(wn,`RPC '${e}' stream ${i} sending:`,C),_.send(C))},Yo:()=>_.close()}),O=(C,F,$)=>{C.listen(F,(z=>{try{$(z)}catch(se){setTimeout((()=>{throw se}),0)}}))};return O(_,Ta.EventType.OPEN,(()=>{w||(H(wn,`RPC '${e}' stream ${i} transport opened.`),b.s_())})),O(_,Ta.EventType.CLOSE,(()=>{w||(w=!0,H(wn,`RPC '${e}' stream ${i} transport closed`),b.__(),this.I_(_))})),O(_,Ta.EventType.ERROR,(C=>{w||(w=!0,Ns(wn,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),b.__(new q(L.UNAVAILABLE,"The operation could not be completed")))})),O(_,Ta.EventType.MESSAGE,(C=>{var F;if(!w){const $=C.data[0];_t(!!$,16349);const z=$,se=(z==null?void 0:z.error)||((F=z[0])===null||F===void 0?void 0:F.error);if(se){H(wn,`RPC '${e}' stream ${i} received error:`,se);const Se=se.status;let Y=(function(v){const T=Mt[v];if(T!==void 0)return Nv(T)})(Se),A=se.message;Y===void 0&&(Y=L.INTERNAL,A="Unknown error status: "+Se+" with message "+se.message),w=!0,b.__(new q(Y,A)),_.close()}else H(wn,`RPC '${e}' stream ${i} received:`,$),b.a_($)}})),O(l,X_.STAT_EVENT,(C=>{C.stat===lh.PROXY?H(wn,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===lh.NOPROXY&&H(wn,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{b.o_()}),0),b}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ou(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n){return new Yb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="PersistentStream";class $1{constructor(e,t,r,i,s,a,l,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Gv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Ei(t.toString()),Ei("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return H(Sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(H(Sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class B1 extends $1{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Xb(this.serializer,e),r=(function(s){if(!("targetChange"in s))return ue.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?po(a.readTime):ue.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=vp(this.serializer),t.addTarget=(function(s,a){let l;const c=a.target;if(l=fh(c)?{documents:Zb(s,c)}:{query:e1(s,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Vv(s,a.resumeToken);const h=_h(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=vh(s,a.snapshotVersion.toTimestamp());const h=_h(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=n1(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=vp(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{}class z1 extends q1{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,yh(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,yh(t,r),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(L.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class j1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ei(t),this._a=!1):H("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class H1{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{sl(this)&&(H(xo,"Restarting streams for network reachability change."),await(async function(c){const h=Ne(c);h.Ia.add(4),await il(h),h.Aa.set("Unknown"),h.Ia.delete(4),await eu(h)})(this))}))})),this.Aa=new j1(r,i)}}async function eu(n){if(sl(n))for(const e of n.da)await e(!0)}async function il(n){for(const e of n.da)await e(!1)}function Kv(n,e){const t=Ne(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),wd(t)?Ed(t):Qo(t).x_()&&yd(t,e))}function vd(n,e){const t=Ne(n),r=Qo(t);t.Ta.delete(e),r.x_()&&Qv(t,e),t.Ta.size===0&&(r.x_()?r.B_():sl(t)&&t.Aa.set("Unknown"))}function yd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qo(n).H_(e)}function Qv(n,e){n.Ra.$e(e),Qo(n).Y_(e)}function Ed(n){n.Ra=new Wb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Qo(n).start(),n.Aa.aa()}function wd(n){return sl(n)&&!Qo(n).M_()&&n.Ta.size>0}function sl(n){return Ne(n).Ia.size===0}function Yv(n){n.Ra=void 0}async function W1(n){n.Aa.set("Online")}async function G1(n){n.Ta.forEach(((e,t)=>{yd(n,e)}))}async function K1(n,e){Yv(n),wd(n)?(n.Aa.la(e),Ed(n)):n.Aa.set("Unknown")}async function Q1(n,e,t){if(n.Aa.set("Online"),e instanceof Dv&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))})(n,e)}catch(r){H(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rp(n,r)}else if(e instanceof Ql?n.Ra.Ye(e):e instanceof Ov?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ue.min()))try{const r=await Wv(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(dn.EMPTY_BYTE_STRING,f.snapshotVersion)),Qv(s,c);const _=new Li(f.target,c,h,f.sequenceNumber);yd(s,_)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){H(xo,"Failed to raise snapshot:",r),await Rp(n,r)}}async function Rp(n,e,t){if(!Go(e))throw e;n.Ia.add(1),await il(n),n.Aa.set("Offline"),t||(t=()=>Wv(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(xo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await eu(n)}))}async function Cp(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),H(xo,"RemoteStore received new credentials");const r=sl(t);t.Ia.add(3),await il(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await eu(t)}async function Y1(n,e){const t=Ne(n);e?(t.Ia.delete(2),await eu(t)):e||(t.Ia.add(2),await il(t),t.Aa.set("Unknown"))}function Qo(n){return n.Va||(n.Va=(function(t,r,i){const s=Ne(t);return s.ia(),new B1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:W1.bind(null,n),e_:G1.bind(null,n),n_:K1.bind(null,n),J_:Q1.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),wd(n)?Ed(n):n.Aa.set("Unknown")):(await n.Va.stop(),Yv(n))}))),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Td(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jv(n,e){if(Ei("AsyncQueue",`${e}: ${n}`),Go(n))return new q(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static emptySet(e){return new mo(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Ia(),this.sortedSet=new Ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.fa=new Ct(ne.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):he(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Lo{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Lo(e,t,mo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class X1{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Ne(t),s=i.queries;i.queries=kp(),s.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new q(L.ABORTED,"Firestore shutting down"))}}function kp(){return new Ms((n=>wv(n)),Kc)}async function Z1(n,e){const t=Ne(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new J1,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Jv(a,`Initialization of query '${no(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Id(t)}async function eS(n,e){const t=Ne(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function tS(n,e){const t=Ne(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&Id(t)}function nS(n,e,t){const r=Ne(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Id(n){n.Da.forEach((e=>{e.next()}))}var Th,Np;(Np=Th||(Th={})).Fa="default",Np.Cache="cache";class rS{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Th.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.key=e}}class Zv{constructor(e){this.key=e}}class iS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Me(),this.mutatedKeys=Me(),this.Xa=Tv(e),this.eu=new mo(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Pp,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,_)=>{const g=i.get(f),w=Qc(this.query,_)?_:null,b=!!g&&this.mutatedKeys.has(g.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;g&&w?g.data.isEqual(w.data)?b!==O&&(r.track({type:3,doc:w}),C=!0):this.iu(g,w)||(r.track({type:2,doc:w}),C=!0,(c&&this.Xa(w,c)>0||h&&this.Xa(w,h)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),C=!0):g&&!w&&(r.track({type:1,doc:g}),C=!0,(c||h)&&(l=!0)),C&&(w?(a=a.add(w),s=O?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((f,_)=>(function(w,b){const O=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{At:C})}};return O(w)-O(b)})(f.type,_.type)||this.Xa(f.doc,_.doc))),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Lo(this.query,e.eu,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Me(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Zv(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Xv(r))})),t}uu(e){this.Ha=e.qs,this.Za=Me();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Lo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ad="SyncEngine";class sS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oS{constructor(e){this.key=e,this.lu=!1}}class aS{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ms((l=>wv(l)),Kc),this.Tu=new Map,this.Iu=new Set,this.du=new Ct(ne.comparator),this.Eu=new Map,this.Au=new pd,this.Ru={},this.Vu=new Map,this.mu=Mo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lS(n,e,t=!0){const r=iy(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await ey(r,e,t,!0),i}async function cS(n,e){const t=iy(n);await ey(t,e,!0,!1)}async function ey(n,e,t,r){const i=await O1(n.localStore,Kr(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await uS(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Kv(n.remoteStore,i),l}async function uS(n,e,t,r,i){n.gu=(_,g,w)=>(async function(O,C,F,$){let z=C.view.nu(F);z.Ds&&(z=await Tp(O.localStore,C.query,!1).then((({documents:A})=>C.view.nu(A,z))));const se=$&&$.targetChanges.get(C.targetId),Se=$&&$.targetMismatches.get(C.targetId)!=null,Y=C.view.applyChanges(z,O.isPrimaryClient,se,Se);return Dp(O,C.targetId,Y._u),Y.snapshot})(n,_,g,w);const s=await Tp(n.localStore,e,!0),a=new iS(e,s.qs),l=a.nu(s.documents),c=rl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Dp(n,t,h._u);const f=new sS(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function hS(n,e,t){const r=Ne(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!Kc(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Eh(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&vd(r.remoteStore,i.targetId),Ih(r,i.targetId)})).catch(zc)):(Ih(r,i.targetId),await Eh(r.localStore,i.targetId,!0))}async function dS(n,e){const t=Ne(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),vd(t.remoteStore,r.targetId))}async function ty(n,e){const t=Ne(n);try{const r=await k1(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(_t(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?_t(a.lu,14607):i.removedDocuments.size>0&&(_t(a.lu,42227),a.lu=!1))})),await ry(t,r,e)}catch(r){await zc(r)}}function Op(n,e,t){const r=Ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const c=Ne(a);c.onlineState=l;let h=!1;c.queries.forEach(((f,_)=>{for(const g of _.wa)g.va(l)&&(h=!0)})),h&&Id(c)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fS(n,e,t){const r=Ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new Ct(ne.comparator);a=a.insert(s,In.newNoDocument(s,ue.min()));const l=Me().add(s),c=new Xc(ue.min(),new Map,new Ct(ye),a,l);await ty(r,c),r.du=r.du.remove(s),r.Eu.delete(e),bd(r)}else await Eh(r.localStore,e,!1).then((()=>Ih(r,e,t))).catch(zc)}function Ih(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||ny(n,r)}))}function ny(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(vd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),bd(n))}function Dp(n,e,t){for(const r of t)r instanceof Xv?(n.Au.addReference(r.key,e),pS(n,r)):r instanceof Zv?(H(Ad,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||ny(n,r.key)):he(19791,{yu:r})}function pS(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(H(Ad,"New document in limbo: "+t),n.Iu.add(r),bd(n))}function bd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ne(st.fromString(e)),r=n.mu.next();n.Eu.set(r,new oS(t)),n.du=n.du.insert(t,r),Kv(n.remoteStore,new Li(Kr(Ev(t.path)),r,"TargetPurposeLimboResolution",jc.ue))}}async function ry(n,e,t){const r=Ne(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var f;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,_?"current":"not-current")}if(h){i.push(h);const _=gd.Es(c.targetId,h);s.push(_)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(c,h){const f=Ne(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>x.forEach(h,(g=>x.forEach(g.Is,(w=>f.persistence.referenceDelegate.addReference(_,g.targetId,w))).next((()=>x.forEach(g.ds,(w=>f.persistence.referenceDelegate.removeReference(_,g.targetId,w)))))))))}catch(_){if(!Go(_))throw _;H(_d,"Failed to update sequence numbers: "+_)}for(const _ of h){const g=_.targetId;if(!_.fromCache){const w=f.Fs.get(g),b=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(b);f.Fs=f.Fs.insert(g,O)}}})(r.localStore,s))}async function mS(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){H(Ad,"User change. New user:",e.toKey());const r=await Hv(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((l=>{l.forEach((c=>{c.reject(new q(L.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ry(t,r.Bs)}}function gS(n,e){const t=Ne(n),r=t.Eu.get(e);if(r&&r.lu)return Me().add(r.key);{let i=Me();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function iy(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ty.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fS.bind(null,e),e.hu.J_=tS.bind(null,e.eventManager),e.hu.pu=nS.bind(null,e.eventManager),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return P1(this.persistence,new S1,e.initialUser,this.serializer)}Du(e){return new jv(md.Vi,this.serializer)}bu(e){return new V1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class _S extends vc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){_t(this.persistence.referenceDelegate instanceof _c,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new h1(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Hn.withCacheSize(this.cacheSizeBytes):Hn.DEFAULT;return new jv((r=>_c.Vi(r,t)),this.serializer)}}class Ah{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mS.bind(null,this.syncEngine),await Y1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new X1})()}createDatastore(e){const t=Zc(e.databaseInfo.databaseId),r=(function(s){return new U1(s)})(e.databaseInfo);return(function(s,a,l,c){return new z1(s,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,l){return new H1(r,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Op(this.syncEngine,t,0)),(function(){return bp.C()?new bp:new M1})())}createSyncEngine(e,t){return(function(i,s,a,l,c,h,f){const _=new aS(i,s,a,l,c,h);return f&&(_.fu=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=Ne(i);H(xo,"RemoteStore shutting down."),s.Ia.add(5),await il(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ah.provider={build:()=>new Ah};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ei("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="FirestoreClient";class yS{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=jn.UNAUTHENTICATED,this.clientId=rv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{H(Xi,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(H(Xi,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Jv(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Du(n,e){n.asyncQueue.verifyOperationInProgress(),H(Xi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Hv(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{Ns("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Ns("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function Vp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ES(n);H(Xi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Cp(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Cp(e.remoteStore,i))),n._onlineComponents=e}async function ES(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Xi,"Using user provided OfflineComponentProvider");try{await Du(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Ns("Error using user provided cache. Falling back to memory cache: "+t),await Du(n,new vc)}}else H(Xi,"Using default OfflineComponentProvider"),await Du(n,new _S(void 0));return n._offlineComponents}async function wS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Xi,"Using user provided OnlineComponentProvider"),await Vp(n,n._uninitializedComponentsProvider._online)):(H(Xi,"Using default OnlineComponentProvider"),await Vp(n,new Ah))),n._onlineComponents}async function TS(n){const e=await wS(n),t=e.eventManager;return t.onListen=lS.bind(null,e.syncEngine),t.onUnlisten=hS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dS.bind(null,e.syncEngine),t}function IS(n,e,t={}){const r=new Is;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,l,c,h){const f=new vS({next:g=>{f.Ou(),a.enqueueAndForget((()=>eS(s,_))),g.fromCache&&c.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),_=new rS(l,f,{includeMetadataChanges:!0,ka:!0});return Z1(s,_)})(await TS(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firestore.googleapis.com",xp=!0;class Lp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=AS,this.ssl=xp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zv)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oy{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jA;switch(r.type){case"firstParty":return new GA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Mp.get(t);r&&(H("ComponentProvider","Removing Datastore"),Mp.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ii(this.firestore,e,this._query)}}class xn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new go(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}toJSON(){return{type:xn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(nl(t,xn._jsonSchema))return new xn(e,r||null,new ne(st.fromString(t.referencePath)))}}xn._jsonSchemaVersion="firestore/documentReference/1.0",xn._jsonSchema={type:Ft("string",xn._jsonSchemaVersion),referencePath:Ft("string")};class go extends Ii{constructor(e,t,r){super(e,t,Ev(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new ne(e))}withConverter(e){return new go(this.firestore,e,this._path)}}function Sd(n,e,...t){if(n=hn(n),XA("collection","path",e),n instanceof oy){const r=st.fromString(e,...t);return Qf(r),new go(n,null,r)}{if(!(n instanceof xn||n instanceof go))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(st.fromString(e,...t));return Qf(r),new go(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="AsyncQueue";class Up{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Gv(this,"async_queue_retry"),this.oc=()=>{const r=Ou();r&&H(Fp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ou();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ou();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Is;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Go(e))throw e;H(Fp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ei("INTERNAL UNHANDLED ERROR: ",$p(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Td.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&he(47125,{hc:$p(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function $p(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ay extends oy{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Up,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Up(e),this._firestoreClient=void 0,await e}}}function bS(n,e,t){t||(t=hc);const r=xc(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Cs(s,e))return i;throw new q(L.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new q(L.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zv)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Os(e.host)&&Gh(e.host),r.initialize({options:e,instanceIdentifier:t})}function SS(n){if(n._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RS(n),n._firestoreClient}function RS(n){var e,t,r;const i=n._freezeSettings(),s=(function(l,c,h,f){return new db(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,sy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new yS(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(dn.fromBase64String(e))}catch(t){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cr(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nl(e,cr._jsonSchema))return cr.fromBase64String(e.bytes)}}cr._jsonSchemaVersion="firestore/bytes/1.0",cr._jsonSchema={type:Ft("string",cr._jsonSchemaVersion),bytes:Ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new An(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qr._jsonSchemaVersion}}static fromJSON(e){if(nl(e,Qr._jsonSchema))return new Qr(e.latitude,e.longitude)}}Qr._jsonSchemaVersion="firestore/geoPoint/1.0",Qr._jsonSchema={type:Ft("string",Qr._jsonSchemaVersion),latitude:Ft("number"),longitude:Ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nl(e,Yr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Yr(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yr._jsonSchemaVersion="firestore/vectorValue/1.0",Yr._jsonSchema={type:Ft("string",Yr._jsonSchemaVersion),vectorValues:Ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=/^__.*__$/;function uy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ec:n})}}class Rd{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return bh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(uy(this.Ec)&&CS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class PS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Zc(e)}Dc(e,t,r,i=!1){return new Rd({Ec:e,methodName:t,bc:r,path:An.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hy(n){const e=n._freezeSettings(),t=Zc(n._databaseId);return new PS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function dy(n,e,t,r=!1){return Cd(t,n.Dc(r?4:3,e))}function Cd(n,e){if(fy(n=hn(n)))return NS("Unsupported field value:",e,n),kS(n,e);if(n instanceof cy)return(function(r,i){if(!uy(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const l of r){let c=Cd(l,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=hn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=dt.fromDate(r);return{timestampValue:vh(i.serializer,s)}}if(r instanceof dt){const s=new dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vh(i.serializer,s)}}if(r instanceof Qr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cr)return{bytesValue:Vv(i.serializer,r._byteString)};if(r instanceof xn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mv(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yr)return(function(a,l){return{mapValue:{fields:{[dv]:{stringValue:fv},[dc]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ud(l.serializer,h)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${qc(r)}`)})(n,e)}function kS(n,e){const t={};return ov(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ko(n,((r,i)=>{const s=Cd(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function fy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof Qr||n instanceof cr||n instanceof xn||n instanceof cy||n instanceof Yr)}function NS(n,e,t){if(!fy(t)||!iv(t)){const r=qc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}const OS=new RegExp("[~\\*/\\[\\]]");function DS(n,e,t){if(e.search(OS)>=0)throw bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ly(...e.split("."))._internalPath}catch{throw bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bh(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new q(L.INVALID_ARGUMENT,l+n+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VS extends Pd{data(){return super.data()}}function tu(n,e){return typeof e=="string"?DS(n,e):e instanceof ly?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kd{}class nu extends kd{}function Nd(n,e,...t){let r=[];e instanceof kd&&r.push(e),r=r.concat(t),(function(s){const a=s.filter((c=>c instanceof Od)).length,l=s.filter((c=>c instanceof ru)).length;if(a>1||a>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class ru extends nu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ru(e,t,r)}_apply(e){const t=this._parse(e);return py(e._query,t),new Ii(e.firestore,e.converter,ph(e._query,t))}_parse(e){const t=hy(e.firestore);return(function(s,a,l,c,h,f,_){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qp(_,f);const b=[];for(const O of _)b.push(Bp(c,s,O));g={arrayValue:{values:b}}}else g=Bp(c,s,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qp(_,f),g=dy(l,a,_,f==="in"||f==="not-in");return Lt.create(h,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xS(n,e,t){const r=e,i=tu("where",n);return ru._create(i,r,t)}class Od extends kd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Od(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Pr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const l=s.getFlattenedFilters();for(const c of l)py(a,c),a=ph(a,c)})(e._query,t),new Ii(e.firestore,e.converter,ph(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dd extends nu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dd(e,t)}_apply(e){const t=(function(i,s,a){if(i.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new za(s,a)})(e._query,this._field,this._direction);return new Ii(e.firestore,e.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new Vs(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function Vd(n,e="asc"){const t=e,r=tu("orderBy",n);return Dd._create(r,t)}class Md extends nu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Md(e,t,r)}_apply(e){return new Ii(e.firestore,e.converter,pc(e._query,this._limit,this._limitType))}}function xd(n){return eb("limit",n),Md._create("limit",n,"F")}class Ld extends nu{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ld(e,t,r)}_apply(e){const t=FS(e,this.type,this._docOrFields,this._inclusive);return new Ii(e.firestore,e.converter,(function(i,s){return new Vs(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function LS(...n){return Ld._create("startAfter",n,!1)}function FS(n,e,t,r){if(t[0]=hn(t[0]),t[0]instanceof Pd)return(function(s,a,l,c,h){if(!c)throw new q(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const f=[];for(const _ of fo(s))if(_.field.isKeyField())f.push(fc(a,c.key));else{const g=c.data.field(_.field);if(Wc(g))throw new q(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+_.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const w=_.field.canonicalString();throw new q(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${w}' (used as the orderBy) does not exist.`)}f.push(g)}return new Vo(f,h)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=hy(n.firestore);return(function(a,l,c,h,f,_){const g=a.explicitOrderBy;if(f.length>g.length)throw new q(L.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const w=[];for(let b=0;b<f.length;b++){const O=f[b];if(g[b].field.isKeyField()){if(typeof O!="string")throw new q(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof O}`);if(!cd(a)&&O.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${O}' contains a slash.`);const C=a.path.child(st.fromString(O));if(!ne.isDocumentKey(C))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const F=new ne(C);w.push(fc(l,F))}else{const C=dy(c,h,O);w.push(C)}}return new Vo(w,_)})(n._query,n.firestore._databaseId,i,e,t,r)}}function Bp(n,e,t){if(typeof(t=hn(t))=="string"){if(t==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cd(e)&&t.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(st.fromString(t));if(!ne.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fc(n,new ne(r))}if(t instanceof xn)return fc(n,t._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qc(t)}.`)}function qp(n,e){if(!Array.isArray(n)||n.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function py(n,e){const t=(function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class US{convertValue(e,t="none"){switch(Yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ko(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[dc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>St(a.doubleValue)));return new Yr(s)}convertGeoPoint(e){return new Qr(St(e.latitude),St(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Gc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const t=Ki(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=st.fromString(e);_t(Bv(r),9688,{name:e});const i=new Ba(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(t)||Ei(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class Dl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _o extends Pd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_o._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_o._jsonSchemaVersion="firestore/documentSnapshot/1.0",_o._jsonSchema={type:Ft("string",_o._jsonSchemaVersion),bundleSource:Ft("string","DocumentSnapshot"),bundleName:Ft("string"),bundle:Ft("string")};class Yl extends _o{data(e={}){return super.data(e)}}class vo{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Dl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Yl(this._firestore,this._userDataWriter,r.key,r,new Dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const c=new Yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Dl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new Yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Dl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:$S(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $S(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:n})}}vo._jsonSchemaVersion="firestore/querySnapshot/1.0",vo._jsonSchema={type:Ft("string",vo._jsonSchemaVersion),bundleSource:Ft("string","QuerySnapshot"),bundleName:Ft("string"),bundle:Ft("string")};class BS extends US{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,t)}}function Fd(n){n=Yf(n,Ii);const e=Yf(n.firestore,ay),t=SS(e),r=new BS(e);return MS(n._query),IS(t,n._query).then((i=>new vo(e,r,n,i)))}(function(e,t=!0){(function(i){Wo=i})(Ho),vi(new Xr("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new ay(new HA(r.getProvider("auth-internal")),new KA(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(h.options.projectId,f)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Sr(jf,Hf,e),Sr(jf,Hf,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="type.googleapis.com/google.protobuf.Int64Value",zS="type.googleapis.com/google.protobuf.UInt64Value";function my(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function yc(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>yc(e));if(typeof n=="function"||typeof n=="object")return my(n,e=>yc(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Fo(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case qS:case zS:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Fo(e)):typeof n=="function"||typeof n=="object"?my(n,e=>Fo(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Gn extends ti{constructor(e,t,r){super(`${Ud}/${e}`,t||""),this.details=r,Object.setPrototypeOf(this,Gn.prototype)}}function jS(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ec(n,e){let t=jS(n),r=t,i;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!zp[a])return new Gn("internal","internal");t=zp[a],r=a}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Fo(i))}}catch{}return t==="ok"?null:new Gn(t,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,er(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="us-central1",WS=/^data: (.*?)(?:\n|$)/;function GS(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new Gn("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class KS{constructor(e,t,r,i,s=Sh,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new HS(e,t,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Sh}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function QS(n,e,t){const r=Os(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Gh(n.emulatorOrigin),Qg("Functions",!0))}function YS(n,e,t){const r=i=>XS(n,e,i,{});return r.stream=(i,s)=>eR(n,e,i,s),r}async function JS(n,e,t,r){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function gy(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function XS(n,e,t,r){const i=n._url(e);return ZS(n,i,t,r)}async function ZS(n,e,t,r){t=yc(t);const i={data:t},s=await gy(n,r),a=r.timeout||7e4,l=GS(a),c=await Promise.race([JS(e,i,s,n.fetchImpl),l.promise,n.cancelAllRequests]);if(l.cancel(),!c)throw new Gn("cancelled","Firebase Functions instance was deleted.");const h=Ec(c.status,c.json);if(h)throw h;if(!c.json)throw new Gn("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new Gn("internal","Response is missing data field.");return{data:Fo(f)}}function eR(n,e,t,r){const i=n._url(e);return tR(n,i,t,r||{})}async function tR(n,e,t,r){var i;t=yc(t);const s={data:t},a=await gy(n,r);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:r==null?void 0:r.signal})}catch(w){if(w instanceof Error&&w.name==="AbortError"){const O=new Gn("cancelled","Request was cancelled.");return{data:Promise.reject(O),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(O)}}}}}}const b=Ec(0,null);return{data:Promise.reject(b),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(b)}}}}}}let c,h;const f=new Promise((w,b)=>{c=w,h=b});(i=r==null?void 0:r.signal)===null||i===void 0||i.addEventListener("abort",()=>{const w=new Gn("cancelled","Request was cancelled.");h(w)});const _=l.body.getReader(),g=nR(_,c,h,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const w=g.getReader();return{async next(){const{value:b,done:O}=await w.read();return{value:b,done:O}},async return(){return await w.cancel(),{done:!0,value:void 0}}}}},data:f}}function nR(n,e,t,r){const i=(a,l)=>{const c=a.match(WS);if(!c)return;const h=c[1];try{const f=JSON.parse(h);if("result"in f){e(Fo(f.result));return}if("message"in f){l.enqueue(Fo(f.message));return}if("error"in f){const _=Ec(0,f);l.error(_),t(_);return}}catch(f){if(f instanceof Gn){l.error(f),t(f);return}}},s=new TextDecoder;return new ReadableStream({start(a){let l="";return c();async function c(){if(r!=null&&r.aborted){const h=new Gn("cancelled","Request was cancelled");return a.error(h),t(h),Promise.resolve()}try{const{value:h,done:f}=await n.read();if(f){l.trim()&&i(l.trim(),a),a.close();return}if(r!=null&&r.aborted){const g=new Gn("cancelled","Request was cancelled");a.error(g),t(g),await n.cancel();return}l+=s.decode(h,{stream:!0});const _=l.split(`
`);l=_.pop()||"";for(const g of _)g.trim()&&i(g.trim(),a);return c()}catch(h){const f=h instanceof Gn?h:Ec(0,null);a.error(f),t(f)}}},cancel(){return n.cancel()}})}const jp="@firebase/functions",Hp="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="auth-internal",iR="app-check-internal",sR="messaging-internal";function oR(n){const e=(t,{instanceIdentifier:r})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider(rR),a=t.getProvider(sR),l=t.getProvider(iR);return new KS(i,s,a,l,r)};vi(new Xr(Ud,e,"PUBLIC").setMultipleInstances(!0)),Sr(jp,Hp,n),Sr(jp,Hp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n=Qh(),e=Sh){const r=xc(hn(n),Ud).getImmediate({identifier:e}),i=cT("functions");return i&&lR(r,...i),r}function lR(n,e,t){QS(hn(n),e,t)}function cR(n,e,t){return YS(hn(n),e)}oR();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Map,hR={activated:!1,tokenObservers:[]};function kr(n){return uR.get(n)||Object.assign({},hR)}const Wp={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ju,this.pending.promise.catch(t=>{}),await fR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ju,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function fR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},wc=new jo("appCheck","AppCheck",pR);function _y(n){if(!kr(n).activated)throw wc.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="firebase-app-check-database",gR=1,Rh="firebase-app-check-store";let Vl=null;function _R(){return Vl||(Vl=new Promise((n,e)=>{try{const t=indexedDB.open(mR,gR);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(wc.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Rh,{keyPath:"compositeKey"})}}}catch(t){e(wc.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Vl)}function vR(n,e){return yR(ER(n),e)}async function yR(n,e){const r=(await _R()).transaction(Rh,"readwrite"),s=r.objectStore(Rh).put({compositeKey:n,value:e});return new Promise((a,l)=>{s.onsuccess=c=>{a()},r.onerror=c=>{var h;l(wc.create("storage-set",{originalErrorMessage:(h=c.target.error)===null||h===void 0?void 0:h.message}))}})}function ER(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=new Mc("@firebase/app-check");function Gp(n,e){return Yg()?vR(n,e).catch(t=>{Ch.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={error:"UNKNOWN_ERROR"};function TR(n){return Wh.encodeString(JSON.stringify(n),!1)}async function Ph(n,e=!1,t=!1){const r=n.app;_y(r);const i=kr(r);let s=i.token,a;if(s&&!ba(s)&&(i.token=void 0,s=void 0),!s){const h=await i.cachedTokenPromise;h&&(ba(h)?s=h:await Gp(r,void 0))}if(!e&&s&&ba(s))return{token:s.token};let l=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),l=!0),s=await kr(r).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?Ch.warn(h.message):t&&Ch.error(h),a=h}let c;return s?a?ba(s)?c={token:s.token,internalError:a}:c=Qp(a):(c={token:s.token},i.token=s,await Gp(r,s)):c=Qp(a),l&&SR(r,c),c}async function IR(n){const e=n.app;_y(e);const{provider:t}=kr(e);{const{token:r}=await t.getToken();return{token:r}}}function AR(n,e,t,r){const{app:i}=n,s=kr(i),a={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&ba(s.token)){const l=s.token;Promise.resolve().then(()=>{t({token:l.token}),Kp(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Kp(n))}function vy(n,e){const t=kr(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Kp(n){const{app:e}=n,t=kr(e);let r=t.tokenRefresher;r||(r=bR(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function bR(n){const{app:e}=n;return new dR(async()=>{const t=kr(e);let r;if(t.token?r=await Ph(n,!0):r=await Ph(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=kr(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Wp.RETRIAL_MIN_WAIT,Wp.RETRIAL_MAX_WAIT)}function SR(n,e){const t=kr(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ba(n){return n.expireTimeMillis-Date.now()>0}function Qp(n){return{token:TR(wR),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=kr(this.app);for(const t of e)vy(this.app,t.next);return Promise.resolve()}}function CR(n,e){return new RR(n,e)}function PR(n){return{getToken:e=>Ph(n,e),getLimitedUseToken:()=>IR(n),addTokenListener:e=>AR(n,"INTERNAL",e),removeTokenListener:e=>vy(n.app,e)}}const kR="@firebase/app-check",NR="0.10.1",OR="app-check",Yp="app-check-internal";function DR(){vi(new Xr(OR,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return CR(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Yp).initialize()})),vi(new Xr(Yp,n=>{const e=n.getProvider("app-check").getImmediate();return PR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Sr(kR,NR)}DR();const yy={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0,messagingSenderId:void 0},Ey=Object.values(yy).every(Boolean),Uo=Ey?bI().length?Qh():Zg(yy):null,Tc=Uo?K_(Uo):null,Jp=Uo?bS(Uo,{ignoreUndefinedProperties:!0}):null,Xp=Uo?aR(Uo,"us-central1"):null;function Fn(){if(!Tc||!Jp||!Xp)throw new Error("Configure as variáveis Firebase no arquivo .env antes de usar o sistema.");return{auth:Tc,db:Jp,functions:Xp}}const VR="modulepreload",MR=function(n){return"/"+n},Zp={},xR=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(t.map(h=>{if(h=MR(h),h in Zp)return;Zp[h]=!0;const f=h.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":VR,f||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((w,b)=>{g.addEventListener("load",w),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Ai=n=>cR(Fn().functions,n);async function LR(n){const{auth:e}=Fn(),t=await Ai("verifyEmployee")({matricula:n});return N_(e,t.data.token)}async function FR(n,e){const{auth:t}=Fn(),r=await O_(t,n,e);if((await r.user.getIdTokenResult(!0)).claims.role!=="admin")throw await td(t),new Error("Esta conta não possui permissão administrativa.");return r.user}async function em(n,e){const{db:t}=Fn(),r=n.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,""),i=Sd(t,"items");if(r)return{items:(await Ai("searchItems")({prefix:r.split(/\s+/)[0].slice(0,20)})).data.items,cursor:void 0};const s=[xS("active","==",!0),Vd("name"),...e?[LS(e)]:[],xd(40)],a=await Fd(Nd(i,...s));return{items:a.docs.map(l=>({id:l.id,...l.data()})),cursor:a.docs.at(-1)}}async function tm(){const{db:n}=Fn();return(await Fd(Nd(Sd(n,"items"),Vd("name"),xd(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function nm(){const{db:n}=Fn();return(await Fd(Nd(Sd(n,"employees"),Vd("name"),xd(300)))).docs.map(t=>({id:t.id,...t.data()}))}async function rm(n){return Fn(),(await Ai("listMovements")({itemId:n})).data.movements}async function UR(){return Fn(),Ai("getDashboardSummary")({timezoneOffsetMinutes:new Date().getTimezoneOffset()})}async function im(n){return Fn(),Ai("recordMovement")(n)}async function $R(n){return Fn(),Ai("saveItem")(n)}async function BR(n){return Fn(),Ai("saveEmployee")(n)}async function qR(n,e){Fn();const t=await Ai("createImageUpload")({itemId:e,contentType:n.type,size:n.size});if(!(await fetch(t.data.uploadUrl,{method:"PUT",headers:{"Content-Type":"image/webp"},body:n})).ok)throw new Error("O armazenamento recusou o envio da imagem. Confira a configuração CORS do bucket R2.");return{imageUrl:t.data.imageUrl,imageObjectKey:t.data.imageObjectKey}}async function sm(n,e){return Fn(),Ai("deleteItemImage")({itemId:n,imageObjectKey:e})}async function zR(n,e){const t=await createImageBitmap(n),r=Math.min(1,1200/Math.max(t.width,t.height)),i=document.createElement("canvas");i.width=Math.round(t.width*r),i.height=Math.round(t.height*r);const s=i.getContext("2d");if(!s)throw new Error("Não foi possível preparar a imagem.");s.drawImage(t,0,0,i.width,i.height);const a=await new Promise((l,c)=>i.toBlob(h=>h?l(h):c(new Error("Falha ao comprimir a imagem.")),"image/webp",.82));if(a.size>5*1024*1024)throw new Error("A imagem comprimida excede 5 MB.");return qR(new File([a],"item.webp",{type:"image/webp"}),e)}async function jR(n){const{auth:e}=Fn(),{sendPasswordResetEmail:t}=await xR(async()=>{const{sendPasswordResetEmail:r}=await Promise.resolve().then(()=>$A);return{sendPasswordResetEmail:r}},void 0);return t(e,n)}async function om(){const{auth:n}=Fn();return td(n)}var HR=ie('<meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="apple-mobile-web-app-title" content="Estoque"/> <meta name="theme-color" content="#f3f5f2"/>',1),WR=ie('<article class="movement-row"><span><!></span><div class="movement-copy"><strong> </strong><span> </span><small> </small></div><div><strong> </strong><small> </small></div></article>'),GR=ie('<div class="movement-list"></div>'),KR=ie('<form class="access-form"><label for="email">E-MAIL</label> <div class="input-wrap"><!><input id="email" type="email" autocomplete="username" placeholder="nome@empresa.com" required=""/></div> <label for="password" class="second-label">SENHA</label> <div class="input-wrap"><!><input id="password" type="password" autocomplete="current-password" placeholder="Sua senha" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button> <button class="text-button reset-button" type="button">Recuperar senha</button></form>'),QR=ie('<form class="access-form"><label for="matricula">MATRÍCULA</label> <div class="input-wrap"><!><input id="matricula" inputmode="text" autocomplete="off" placeholder="Digite sua matrícula" required=""/></div> <button class="primary-button" type="submit"> <span aria-hidden="true">↗</span></button></form>'),Ml=ie('<p class="form-message error-message" role="alert"> </p>'),YR=ie('<p class="form-message success-message" role="status"> </p>'),JR=ie('<p class="form-message setup-message">Configure as variáveis Firebase do arquivo `.env` para conectar este sistema.</p>'),XR=ie('<main class="entry-screen"><button class="admin-shortcut" aria-label="Acesso administrativo" title="Acesso administrativo"><!></button> <section class="entry-content" aria-labelledby="page-title"><div class="brand-mark"><!></div> <p class="eyebrow">ARMAZÉM · CONTROLE INTERNO</p> <h1 id="page-title"> </h1> <p class="entry-hint"> </p> <!> <!> <!> <!> <p class="connection-note"><span></span> ACESSO RESTRITO A USUÁRIOS AUTORIZADOS</p></section> <footer>ESTOQUE · OPERAÇÃO E MANUTENÇÃO</footer></main>'),am=ie('<div class="inline-message success-message" role="status"><!> <button aria-label="Fechar aviso"><!></button></div>'),ZR=ie('<tr><td><button class="table-link"> </button></td><td> </td><td> </td><td><span> </span></td><td> </td></tr>'),eC=ie('<div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>DISPONÍVEL</th><th>MÍNIMO</th></tr></thead><tbody></tbody></table></div>'),tC=ie('<p class="empty-state">Nenhum item precisa de reposição.</p>'),nC=ie('<button class="quiet-button">Carregar movimentações <!></button>'),rC=ie('<section class="overview-page"><div class="metric-grid"><article class="metric"><p>TOTAL DE ITENS</p><strong> </strong><span>no catálogo</span><!></article> <article class="metric"><p>ITENS ATIVOS</p><strong> </strong><span>disponíveis para consulta</span><!></article> <article class="metric alert-metric"><p>SEM ESTOQUE</p><strong> </strong><span>reposição imediata</span><!></article> <article class="metric warn-metric"><p>ESTOQUE BAIXO</p><strong> </strong><span>no limite mínimo</span><!></article> <article class="metric"><p>MOVIMENTAÇÕES HOJE</p><strong> </strong><span>registradas no servidor</span><!></article> <article class="metric"><p>ENTRADAS HOJE</p><strong> </strong><span>materiais adicionados</span><!></article> <article class="metric"><p>RETIRADAS HOJE</p><strong> </strong><span>materiais retirados</span><!></article></div> <section class="content-section restock-section"><div class="section-heading"><div><p class="eyebrow">ATENÇÃO</p><h2>Reposição necessária</h2></div><button class="quiet-button">Ver todos <!></button></div> <!></section> <section class="content-section today-section"><div class="section-heading"><div><p class="eyebrow">ATIVIDADE</p><h2>Movimentações recentes</h2></div><button class="quiet-button">Abrir histórico <!></button></div> <!></section></section>'),lm=ie('<img alt="" loading="lazy"/>'),iC=ie('<span class="mini-placeholder"><!></span>'),sC=ie('<tr><td><div class="item-cell"><!><div><strong> </strong><small> </small></div></div></td><td> </td><td> </td><td> </td><td><span> </span></td><td><div class="row-actions"><button class="icon-action" aria-label="Adicionar ao estoque" title="Adicionar ao estoque"><!></button><button class="icon-action" aria-label="Retirar do estoque" title="Retirar do estoque"><!></button><button class="icon-action" aria-label="Editar item" title="Editar item"><!></button></div></td></tr>'),oC=ie('<tr><td colspan="6"><p class="empty-state">Nenhum item encontrado.</p></td></tr>'),aC=ie('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">CATÁLOGO</p><h2>Materiais cadastrados</h2></div><button class="primary-action"><!> Novo item</button></div> <div class="toolbar"><div class="search-box"><!><input placeholder="Buscar por nome, código ou informação"/></div><label class="location-filter"><!><input placeholder="Estante ou prateleira"/></label></div> <div class="table-scroll"><table><thead><tr><th>ITEM</th><th>CÓDIGO</th><th>LOCALIZAÇÃO</th><th>QUANTIDADE</th><th>SITUAÇÃO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),lC=ie('<tr><td><strong> </strong></td><td> </td><td> </td><td> </td><td><span> </span></td><td><button class="icon-action" aria-label="Editar funcionário" title="Editar funcionário"><!></button></td></tr>'),cC=ie('<tr><td colspan="6"><p class="empty-state">Nenhum funcionário cadastrado.</p></td></tr>'),uC=ie('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">ACESSO INTERNO</p><h2>Cadastro de funcionários</h2></div><button class="primary-action"><!> Novo funcionário</button></div> <div class="table-scroll"><table><thead><tr><th>NOME</th><th>MATRÍCULA</th><th>ADICIONAR</th><th>RETIRAR</th><th>ACESSO</th><th></th></tr></thead><tbody></tbody></table></div></section>'),hC=ie('<p class="empty-state">Nenhuma movimentação corresponde ao filtro.</p>'),dC=ie('<section class="content-section records-page"><div class="section-heading"><div><p class="eyebrow">AUDITORIA</p><h2>Histórico imutável</h2></div></div> <div class="toolbar movement-filters"><div class="search-box"><!><input placeholder="Filtrar funcionário, matrícula, item ou código"/></div><select aria-label="Tipo de movimentação"><option>Todos os tipos</option><option>Entradas</option><option>Retiradas</option></select><label class="date-filter">DE<input type="date"/></label><label class="date-filter">ATÉ<input type="date"/></label><button class="quiet-button">Atualizar <!></button></div> <!></section>'),fC=ie('<main class="admin-layout"><aside class="admin-rail"><a class="rail-brand" href="#inicio" aria-label="Controle de estoque"><!></a> <nav aria-label="Administração"><button title="Visão geral" aria-label="Visão geral"><!></button> <button title="Itens" aria-label="Itens"><!></button> <button title="Funcionários" aria-label="Funcionários"><!></button> <button title="Movimentações" aria-label="Movimentações"><!></button></nav> <button class="rail-logout" aria-label="Sair" title="Sair"><!></button></aside> <section class="admin-main"><header class="topbar"><div><p class="eyebrow">ARMAZÉM / ADMINISTRAÇÃO</p><h1> </h1></div> <div class="user-chip"><!><span>Administrador</span><button aria-label="Sair"><!></button></div></header> <!> <!></section></main>'),pC=ie('<div class="inline-message error-message" role="alert"><!> <button aria-label="Fechar aviso"><!></button></div>'),mC=ie("<img/>"),gC=ie('<div class="large-placeholder"><!></div>'),_C=ie('<p class="detail-description"> </p>'),vC=ie('<p class="location-note"> </p>'),yC=ie("<div><dt> </dt><dd> </dd></div>"),EC=ie('<section class="custom-fields"><p class="eyebrow">INFORMAÇÕES ADICIONAIS</p><dl></dl></section>'),wC=ie("<span>→</span> após operação <strong> </strong>",1),TC=ie('<section class="detail-page"><button class="back-button"><!> VOLTAR À LISTA</button> <div class="detail-grid"><div class="detail-image"><!></div> <div class="detail-main"><div class="detail-title-row"><div><p class="eyebrow"> </p><h1> </h1></div><span> </span></div> <!> <div class="detail-facts"><div class="quantity-fact"><span>DISPONÍVEL</span><strong> <small> </small></strong></div><div><span>LOCALIZAÇÃO</span><strong class="location-emphasis"> </strong></div><div><span>ESTOQUE MÍNIMO</span><strong> </strong></div><div><span>TIPO</span><strong> </strong></div></div> <!> <!> <form class="movement-panel"><div class="section-heading"><div><p class="eyebrow">MOVIMENTAÇÃO</p><h2>Registrar operação</h2></div></div> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="movement-inputs"><label>QUANTIDADE<input type="number" min="0.001" step="0.001" required=""/></label><label>MOTIVO <span>(opcional)</span><input maxlength="250" placeholder="Ex.: manutenção preventiva"/></label></div> <p class="balance-preview">Saldo atual <strong> </strong><!></p> <button class="primary-action confirm-movement" type="submit"> <!></button></form></div></div></section>'),IC=ie('<div class="card-placeholder"><!></div>'),AC=ie(" <span> </span>",1),bC=ie('<button class="inventory-card"><div class="card-image"><!></div> <div class="card-body"><div class="card-heading"><span class="eyebrow"> </span><span></span></div><h2> </h2><p class="card-location"> </p><div class="card-footer"><strong><!></strong><span> </span></div></div></button>'),SC=ie('<div class="inventory-grid"></div>'),RC=ie('<div class="empty-stock"><!><p>Nenhum material encontrado.</p><span>Confira o código ou tente outro termo.</span></div>'),CC=ie('<button class="load-more"> <!></button>'),PC=ie('<section class="inventory-page"><div class="inventory-intro"><div><p class="eyebrow">CONSULTA RÁPIDA</p><h1>Encontre seu material.</h1></div><p> </p></div> <div class="search-box main-search"><!><input placeholder="Nome, código ou informação adicional" aria-label="Buscar materiais"/><kbd>↵</kbd></div> <div class="quick-filter-row"><label class="location-filter"><!><input placeholder="Filtrar por estante ou prateleira"/></label><span><span class="dot normal-dot"></span>Disponível <span class="dot low-dot"></span>Baixo <span class="dot empty-dot"></span>Zerado</span></div> <!> <!></section>'),kC=ie('<main class="stock-app"><header class="stock-header"><div class="stock-brand"><div class="brand-mark"><!></div><div><p class="eyebrow">ARMAZÉM · ESTOQUE</p><strong> </strong></div></div> <div class="employee-chip"><span> </span><button title="Sair ou trocar funcionário" aria-label="Sair ou trocar funcionário"><!></button></div></header> <!> <!> <!></main>'),NC=ie('<div class="image-actions"><img class="upload-preview" alt="Prévia do item"/><button type="button" class="remove-image"><!> Excluir fotografia</button></div>'),OC=ie('<div class="custom-row"><label>Nome do campo<input maxlength="60" placeholder="Ex.: Fabricante"/></label><label>Informação<input maxlength="250" placeholder="Valor"/></label><button type="button" class="remove-field" aria-label="Remover campo" title="Remover campo"><!></button></div>'),DC=ie('<p class="form-hint">Nenhuma informação adicional.</p>'),VC=ie('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog" aria-labelledby="item-dialog-title"><header class="dialog-header"><div><p class="eyebrow">CATÁLOGO DE ESTOQUE</p><h2 id="item-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label>Nome do item<input maxlength="120" required=""/></label><label>Código único<input maxlength="64" required=""/></label><label>Categoria<input maxlength="80"/></label><label>Tipo<select><option>Peça</option><option>Componente</option><option>Ferramenta</option><option>Máquina</option></select></label><label>Controle<select><option>Quantidade</option><option>Individual (série/patrimônio)</option></select></label><label>Unidade<input maxlength="20" required=""/></label><label>Quantidade inicial<input type="number" min="0" step="0.001" required=""/></label><label>Estoque mínimo<input type="number" min="0" step="0.001" required=""/></label><label>Estante<input maxlength="20"/></label><label>Prateleira<input maxlength="20"/></label><label>Localização complementar<input maxlength="100"/></label><label class="wide-field">Descrição<textarea maxlength="2000" rows="3"></textarea></label><label class="wide-field upload-control"><span>Fotografia do item</span><span class="upload-box"><!> <input type="file" accept="image/*"/></span><!></label><label class="check-label"><input type="checkbox"/> Item ativo</label></div> <section class="custom-editor"><div class="section-heading"><div><p class="eyebrow">FLEXÍVEL POR ITEM</p><h3>Informações adicionais</h3></div><button type="button" class="add-field-button"><!> Adicionar campo</button></div> <!> <!></section> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),MC=ie('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="employee-dialog-title"><header class="dialog-header"><div><p class="eyebrow">ACESSO INTERNO</p><h2 id="employee-dialog-title"> </h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><div class="form-grid"><label class="wide-field">Nome completo<input maxlength="120" required=""/></label><label class="wide-field">Matrícula<input maxlength="32" required=""/></label><label class="check-label"><input type="checkbox"/> Acesso ativo</label><label class="check-label"><input type="checkbox"/> Pode adicionar materiais</label><label class="check-label"><input type="checkbox"/> Pode retirar materiais</label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),xC=ie('<div class="dialog-backdrop" role="presentation"><dialog open="" class="edit-dialog employee-dialog" aria-labelledby="admin-movement-title"><header class="dialog-header"><div><p class="eyebrow">AJUSTE AUDITÁVEL</p><h2 id="admin-movement-title">Movimentar estoque</h2></div><button class="icon-action" aria-label="Fechar"><!></button></header> <form class="dialog-form"><p class="admin-movement-item"><strong> </strong><span> </span></p> <div class="segmented"><button type="button"><!> Retirar</button><button type="button"><!> Adicionar</button></div> <div class="form-grid admin-movement-fields"><label>Quantidade<input type="number" min="0.001" step="0.001" required=""/></label><label>Motivo<input maxlength="250" placeholder="Motivo do ajuste"/></label></div> <!> <div class="dialog-actions"><button class="quiet-button" type="button">Cancelar</button><button class="primary-action" type="submit"> <!></button></div></form></dialog></div>'),LC=ie("<!> <!> <!> <!>",1);function FC(n,e){Vh(e,!0);const t=(M,U=Nh)=>{var we=GR();Di(we,21,U,Ee=>Ee.id,(Ee,le)=>{var wt=WR(),Xe=S(wt);let Ge;var Wt=S(Xe);{var at=ae=>{wu(ae,{size:18})},Ze=ae=>{Tl(ae,{size:18})};Ve(Wt,ae=>{p(le).movementType==="entry"?ae(at):ae(Ze,-1)})}var Pt=E(Xe),Tt=S(Pt),lt=K(Tt,!0),kt=E(Tt),Nt=K(kt),It=E(kt),Gt=K(It),pt=E(Pt);let Ot;var At=S(pt),pe=K(At),Q=E(At),de=K(Q);Ce(ae=>{Ge=an(Xe,1,"movement-icon",null,Ge,{"movement-in":p(le).movementType==="entry"}),j(lt,p(le).itemNameSnapshot),j(Nt,`${p(le).employeeNameSnapshot??""} · ${p(le).matriculaSnapshot??""} · ${p(le).itemCode??""}`),j(Gt,`${(p(le).reason||(p(le).movementType==="entry"?"Entrada":"Retirada"))??""} · ${ae??""}`),Ot=an(pt,1,"movement-quantity",null,Ot,{"entry-quantity":p(le).movementType==="entry"}),j(pe,`${p(le).movementType==="entry"?"+":"−"}${p(le).quantity??""}`),j(de,`${p(le).quantityBefore??""} → ${p(le).quantityAfter??""}`)},[()=>{var ae;return ou((ae=p(le).createdAt)==null?void 0:ae.seconds)}]),Z(Ee,wt)}),Z(M,we)},r=()=>({name:"",code:"",description:"",category:"",itemType:"piece",trackingMode:"quantity",unit:"UN",quantity:0,minimumStock:0,rackNumber:"",shelfNumber:"",locationNote:"",imageUrl:"",imageObjectKey:"",customFields:[],active:!0});let i=re(null),s=re(null),a=re(null),l=re("overview"),c=re(!1),h=re(""),f=re(""),_=re(""),g=re(!1),w=re(""),b=re(""),O=re(""),C=re(""),F=re(lr([])),$=re(void 0),z=re(!1),se=re(!1),Se=re(lr([])),Y=re(lr([])),A=re(lr([])),y=re(lr({itemCount:0,activeItemCount:0,stockOutCount:0,lowStockCount:0,movementCount:0,todayEntries:0,todayWithdrawals:0})),v=re(null),T=re("withdrawal"),R=re(1),P=re(""),I=re(""),Ut=re(""),fn=re(!1),nr=re(!1),Pn=re(!1),$t=re(null),Et=re("entry"),rr=re(1),xs=re(""),X=re(lr(r())),ot=re(""),kn=re(lr({name:"",matricula:"",active:!0,canAdd:!0,canWithdraw:!0})),hr=re(""),dr=re(null),bi=re(""),Ls=re("all"),Fs=re(""),ni=re("");yw(()=>{if(Tc)return M_(Tc,async M=>{if(D(i,M,!0),!M){D(s,null),D(a,null),D(F,[],!0);return}try{const U=await M.getIdTokenResult();if(D(s,U.claims.role==="admin"?"admin":U.claims.role==="employee"?"employee":null,!0),D(a,p(s)==="employee"?{id:String(U.claims.employeeId??""),name:String(U.claims.name??"Funcionário"),matricula:String(U.claims.matricula??"")}:null,!0),!p(s))throw await om(),new Error("Esta conta não possui um perfil autorizado.");await Si(),p(s)==="admin"&&await es()}catch(U){en(U)}})}),qu(()=>{const M=p(O);if(!p(i)||p(v))return;const U=setTimeout(()=>Si(M),250);return()=>clearTimeout(U)}),qu(()=>{p(s)==="admin"&&(p(l)==="employees"&&Jo(),p(l)==="movements"&&Us())});async function Si(M=p(O)){try{if(D($,void 0),D(z,!1),p(s)==="admin"){const U=await tm();D(Se,U,!0),D(F,M.trim()?Ri(U,M):U.filter(we=>we.active),!0)}else{const U=await em(M);D(F,M.trim()?Ri(U.items,M):U.items,!0),D($,U.cursor,!0),D(z,!!(U.cursor&&U.items.length===40),!0)}}catch(U){en(U)}}async function Yo(){if(!(!p($)||p(se)||p(O).trim())){D(se,!0);try{const M=await em("",p($));D(F,[...p(F),...M.items],!0),D($,M.cursor,!0),D(z,!!(M.cursor&&M.items.length===40),!0)}catch(M){en(M)}finally{D(se,!1)}}}function Ri(M,U){const Ee=Ci(U).split(/\s+/).filter(Boolean);return M.filter(le=>{const wt=Ci([le.name,le.code,le.description,le.category,...le.customFields.flatMap(Ge=>[Ge.label,Ge.value])].join(" ")),Xe=`${le.rackNumber} ${le.shelfNumber}`.toLowerCase();return Ee.every(Ge=>wt.includes(Ge)||Xe.includes(Ge))})}function Ci(M){return M.trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g,"")}async function es(){try{const[M,U,we,Ee]=await Promise.all([tm(),nm(),rm(),UR()]);D(Se,M,!0),D(Y,U,!0),D(A,we,!0),D(y,Ee.data,!0),D(F,p(O).trim()?Ri(p(Se),p(O)):p(Se).filter(le=>le.active),!0)}catch(M){en(M)}}async function Jo(){try{D(Y,await nm(),!0)}catch(M){en(M)}}async function Us(){try{D(A,await rm(),!0)}catch(M){en(M)}}async function iu(M){M.preventDefault(),D(g,!0),Un();try{await LR(p(h).trim()),D(h,"")}catch(U){en(U)}finally{D(g,!1)}}async function ol(M){M.preventDefault(),D(g,!0),Un();try{await FR(p(f).trim(),p(_))}catch(U){en(U)}finally{D(g,!1)}}async function Xo(){if(!p(f).trim()){D(w,"Informe o e-mail administrativo para recuperar a senha.");return}D(g,!0);try{await jR(p(f).trim()),D(b,"Enviamos as instruções de recuperação para o e-mail.")}catch(M){en(M)}finally{D(g,!1)}}async function $s(){await om(),D(v,null),D(l,"overview"),Un()}async function su(M){if(M.preventDefault(),!(!p(v)||p(R)<=0)){if(p(T)==="withdrawal"&&p(R)>p(v).quantity){D(w,"Não há quantidade suficiente para essa retirada.");return}D(g,!0),Un();try{const U=JSON.stringify([p(v).id,p(T),p(R),p(Ut).trim()]);U!==p(I)&&(D(I,U,!0),D(P,crypto.randomUUID(),!0));const we=await im({itemId:p(v).id,movementType:p(T),quantity:p(R),reason:p(Ut).trim(),idempotencyKey:p(P)});D(P,""),D(I,""),D(b,p(T)==="entry"?"Entrada registrada.":"Retirada registrada.",!0),D(R,1),D(Ut,""),await Si(),D(v,{...p(v),quantity:we.data.quantityAfter},!0);const Ee=p(F).find(le=>{var wt;return le.id===((wt=p(v))==null?void 0:wt.id)});Ee&&D(v,Ee,!0),p(s)==="admin"&&await Us()}catch(U){en(U)}finally{D(g,!1)}}}function Zo(){D(X,r(),!0),D(ot,crypto.randomUUID(),!0),D(dr,null),D(fn,!0)}function Bs(M){D(X,{name:M.name,code:M.code,description:M.description,category:M.category,itemType:M.itemType,trackingMode:M.trackingMode,unit:M.unit,quantity:M.quantity,minimumStock:M.minimumStock,rackNumber:M.rackNumber,shelfNumber:M.shelfNumber,locationNote:M.locationNote,imageUrl:M.imageUrl,imageObjectKey:M.imageObjectKey,customFields:M.customFields.map(U=>({...U})),active:M.active},!0),D(ot,M.id,!0),D(dr,null),D(v,null),D(fn,!0)}function al(){if(p(X).customFields.length>=30){D(w,"Limite de 30 informações adicionais por item.");return}p(X).customFields=[...p(X).customFields,{id:crypto.randomUUID(),label:"",value:""}]}async function Ht(M){if(M.preventDefault(),Un(),p(X).customFields.some(U=>!U.label.trim()||!U.value.trim())){D(w,"Preencha o nome e o valor de cada informação adicional ou remova o campo vazio.");return}D(g,!0);try{const U=p(X).imageObjectKey;if(p(dr)){const we=await zR(p(dr),p(ot));p(X).imageUrl=we.imageUrl,p(X).imageObjectKey=we.imageObjectKey}if(await $R({...p(X),itemId:p(ot)}),p(dr)&&U)try{await sm(p(ot),U)}catch{D(b,"Item salvo; a imagem anterior precisa ser removida manualmente do bucket.")}D(fn,!1),p(b)||D(b,"Cadastro do item salvo."),await es()}catch(U){en(U)}finally{D(g,!1)}}async function Zt(){if(!p(X).imageObjectKey){p(X).imageUrl="",D(dr,null);return}D(g,!0);try{await sm(p(ot),p(X).imageObjectKey),p(X).imageUrl="",p(X).imageObjectKey="",D(dr,null)}catch(M){en(M)}finally{D(g,!1)}}function qs(){D(kn,{name:"",matricula:"",active:!0,canAdd:!0,canWithdraw:!0},!0),D(hr,""),D(nr,!0)}function ll(M){D(kn,{name:M.name,matricula:M.matricula,active:M.active,canAdd:M.canAdd,canWithdraw:M.canWithdraw},!0),D(hr,M.id,!0),D(nr,!0)}async function cl(M){M.preventDefault(),D(g,!0),Un();try{await BR({...p(kn),...p(hr)?{employeeId:p(hr)}:{}}),D(nr,!1),D(b,"Cadastro do funcionário salvo."),await Jo()}catch(U){en(U)}finally{D(g,!1)}}function ul(M,U){D($t,M,!0),D(Et,U,!0),D(rr,1),D(xs,""),Un(),D(Pn,!0)}async function ts(M){if(M.preventDefault(),!!p($t)){if(p(Et)==="withdrawal"&&p(rr)>p($t).quantity){D(w,"Não há quantidade suficiente para essa retirada.");return}D(g,!0),Un();try{await im({itemId:p($t).id,movementType:p(Et),quantity:p(rr),reason:p(xs).trim(),idempotencyKey:crypto.randomUUID()}),D(Pn,!1),D(b,"Movimentação administrativa registrada no histórico."),await es()}catch(U){en(U)}finally{D(g,!1)}}}function en(M){const U=M,we={"functions/permission-denied":"Acesso não autorizado. Confira se a matrícula está ativa ou se a conta tem permissão.","functions/resource-exhausted":"Muitas tentativas. Aguarde alguns minutos e tente novamente.","functions/failed-precondition":"A operação não pode ser concluída com o saldo atual.","functions/already-exists":"Esse código ou matrícula já está cadastrado.","auth/invalid-credential":"E-mail ou senha incorretos.","auth/network-request-failed":"Sem conexão com o servidor. Movimentações exigem conexão ativa."};D(w,U.code&&we[U.code]?we[U.code]:U.message??"Ocorreu um erro. Tente novamente.",!0)}function Un(){D(w,""),D(b,"")}function Pi(M){return M.rackNumber&&M.shelfNumber?`E-${M.rackNumber.padStart(2,"0")} / P-${M.shelfNumber.padStart(2,"0")}`:"LOCALIZAÇÃO NÃO CADASTRADA"}function ir(M){return M.quantity<=0?"empty":M.quantity<=M.minimumStock?"low":"normal"}function ou(M){return M?new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(new Date(M*1e3)):"Agora"}function ea(M){var Ee;const U=(Ee=M.createdAt)!=null&&Ee.seconds?new Date(M.createdAt.seconds*1e3):new Date,we=`${U.getFullYear()}-${String(U.getMonth()+1).padStart(2,"0")}-${String(U.getDate()).padStart(2,"0")}`;return(!p(Fs)||we>=p(Fs))&&(!p(ni)||we<=p(ni))}let ta=Zn(()=>p(A).filter(M=>Ci(`${M.employeeNameSnapshot} ${M.matriculaSnapshot} ${M.itemNameSnapshot} ${M.itemCode} ${M.movementType}`).includes(Ci(p(bi)))&&(p(Ls)==="all"||M.movementType===p(Ls))&&ea(M))),hl=Zn(()=>p(y).stockOutCount),ns=Zn(()=>p(y).lowStockCount);var zs=LC();sw("1n46o8q",M=>{var U=HR();Oc(()=>{zm.title="Controle de Estoque"}),Z(M,U)});var js=Ul(zs);{var ri=M=>{var U=XR(),we=S(U),Ee=S(we);{var le=Q=>{af(Q,{size:19})},wt=Q=>{hf(Q,{size:19})};Ve(Ee,Q=>{p(c)?Q(le):Q(wt,-1)})}var Xe=E(we,2),Ge=S(Xe),Wt=S(Ge);Sl(Wt,{size:25,strokeWidth:1.8});var at=E(Ge,4),Ze=K(at,!0),Pt=E(at,2),Tt=K(Pt,!0),lt=E(Pt,2);{var kt=Q=>{var de=KR(),ae=E(S(de),2),He=S(ae);Kw(He,{size:19});var Ye=E(He),ct=E(ae,4),Te=S(ct);hf(Te,{size:18});var et=E(Te),Bt=E(ct,2),tt=S(Bt),Nn=E(Bt,2);Ce(()=>{Bt.disabled=p(g),j(tt,`${p(g)?"VALIDANDO...":"ENTRAR"} `)}),Js("submit",de,ol),Qe(Ye,()=>p(f),Kt=>D(f,Kt)),Qe(et,()=>p(_),Kt=>D(_,Kt)),ce("click",Nn,Xo),Z(Q,de)},Nt=Q=>{var de=QR(),ae=E(S(de),2),He=S(ae);Al(He,{size:19,"aria-hidden":"true"});var Ye=E(He),ct=E(ae,2),Te=S(ct);Ce(et=>{ct.disabled=et,j(Te,`${p(g)?"VALIDANDO...":"ACESSAR"} `)},[()=>p(g)||!p(h).trim()]),Js("submit",de,iu),Qe(Ye,()=>p(h),et=>D(h,et)),Z(Q,de)};Ve(lt,Q=>{p(c)?Q(kt):Q(Nt,-1)})}var It=E(lt,2);{var Gt=Q=>{var de=Ml(),ae=K(de,!0);Ce(()=>j(ae,p(w))),Z(Q,de)};Ve(It,Q=>{p(w)&&Q(Gt)})}var pt=E(It,2);{var Ot=Q=>{var de=YR(),ae=K(de,!0);Ce(()=>j(ae,p(b))),Z(Q,de)};Ve(pt,Q=>{p(b)&&Q(Ot)})}var At=E(pt,2);{var pe=Q=>{var de=JR();Z(Q,de)};Ve(At,Q=>{Ey||Q(pe)})}Ce(()=>{j(Ze,p(c)?`ACESSO
ADMINISTRATIVO`:`CONTROLE
DE ESTOQUE`),j(Tt,p(c)?"Entre com sua conta administrativa.":"Identifique-se para consultar os materiais.")}),ce("click",we,()=>{D(c,!p(c)),Un()}),Z(M,U)},dl=M=>{var U=fC(),we=S(U),Ee=S(we),le=S(Ee);Sl(le,{size:22});var wt=E(Ee,2),Xe=S(wt);let Ge;var Wt=S(Xe);Xs(Wt,{size:20});var at=E(Xe,2);let Ze;var Pt=S(at);Zw(Pt,{size:20});var Tt=E(at,2);let lt;var kt=S(Tt);Yw(kt,{size:20});var Nt=E(Tt,2);let It;var Gt=S(Nt);uf(Gt,{size:20});var pt=E(wt,2),Ot=S(pt);Eu(Ot,{size:19});var At=E(we,2),pe=S(At),Q=S(pe),de=E(S(Q)),ae=K(de,!0),He=E(Q,2),Ye=S(He);zw(Ye,{size:17});var ct=E(Ye,2),Te=S(ct);Eu(Te,{size:17});var et=E(pe,2);{var Bt=ut=>{var Be=am(),Fe=S(Be);da(Fe,{size:18});var me=E(Fe,1,!0),Oe=E(me),qe=S(Oe);Zs(qe,{size:17}),Ce(()=>j(me,p(b))),ce("click",Oe,()=>D(b,"")),Z(ut,Be)};Ve(et,ut=>{p(b)&&ut(Bt)})}var tt=E(et,2);{var Nn=ut=>{var Be=rC(),Fe=S(Be),me=S(Fe),Oe=E(S(me)),qe=K(Oe,!0),J=E(Oe,2);Xs(J,{size:20});var nt=E(me,2),Ke=E(S(nt)),We=K(Ke,!0),Qt=E(Ke,2);Sl(Qt,{size:20});var Yt=E(nt,2),Jt=E(S(Yt)),pn=K(Jt,!0),qt=E(Jt,2);cf(qt,{size:20});var ze=E(Yt,2),ge=E(S(ze)),ht=K(ge,!0),Dt=E(ge,2);Tl(Dt,{size:20});var je=E(ze,2),Vt=E(S(je)),bt=K(Vt,!0),$n=E(Vt,2);uf($n,{size:20});var nn=E(je,2),rn=E(S(nn)),mt=K(rn,!0),On=E(rn,2);wu(On,{size:20});var Bn=E(nn,2),W=E(S(Bn)),Ue=K(W,!0),Re=E(W,2);Tl(Re,{size:20});var De=E(Fe,2),rt=S(De),qn=E(S(rt)),mn=E(S(qn));Il(mn,{size:16});var $e=E(rt,2);{var pr=G=>{var fe=eC(),gt=S(fe),_n=E(S(gt));Di(_n,21,()=>p(Se).filter(Dn=>Dn.active&&Dn.quantity<=Dn.minimumStock).slice(0,10),Dn=>Dn.id,(Dn,sn)=>{var os=ZR(),as=S(os),Vr=S(as),Ws=K(Vr,!0),ia=E(as),sa=K(ia,!0),Gs=E(ia),pl=K(Gs,!0),ls=E(Gs),oa=S(ls);let aa;var si=K(oa),ml=E(ls),gl=K(ml);Ce(_l=>{j(Ws,p(sn).name),j(sa,p(sn).code),j(pl,_l),aa=an(oa,1,"",null,aa,{"danger-text":p(sn).quantity===0}),j(si,`${p(sn).quantity??""} ${p(sn).unit??""}`),j(gl,`${p(sn).minimumStock??""} ${p(sn).unit??""}`)},[()=>Pi(p(sn))]),ce("click",Vr,()=>Bs(p(sn))),Z(Dn,os)}),Z(G,fe)},ii=Zn(()=>p(Se).filter(G=>G.active&&G.quantity<=G.minimumStock).length),zn=G=>{var fe=tC();Z(G,fe)};Ve($e,G=>{p(ii)?G(pr):G(zn,-1)})}var mr=E(De,2),gr=S(mr),_r=E(S(gr)),Or=E(S(_r));Il(Or,{size:16});var gn=E(gr,2);{var Dr=G=>{{let fe=Zn(()=>p(A).slice(0,5));t(G,()=>p(fe))}},ss=G=>{var fe=nC(),gt=E(S(fe));Il(gt,{size:16}),ce("click",fe,Us),Z(G,fe)};Ve(gn,G=>{p(A).length?G(Dr):G(ss,-1)})}Ce(()=>{j(qe,p(y).itemCount),j(We,p(y).activeItemCount),j(pn,p(hl)),j(ht,p(ns)),j(bt,p(y).movementCount),j(mt,p(y).todayEntries),j(Ue,p(y).todayWithdrawals)}),ce("click",qn,()=>D(l,"items")),ce("click",_r,()=>D(l,"movements")),Z(ut,Be)},Kt=ut=>{var Be=aC(),Fe=S(Be),me=E(S(Fe)),Oe=S(me);fa(Oe,{size:18});var qe=E(Fe,2),J=S(qe),nt=S(J);Al(nt,{size:19});var Ke=E(nt),We=E(J),Qt=S(We);bl(Qt,{size:17});var Yt=E(Qt),Jt=E(qe,2),pn=S(Jt),qt=E(S(pn));Di(qt,21,()=>p(Se).filter(ze=>(!p(O).trim()||Ri([ze],p(O)).length)&&(!p(C)||`${ze.rackNumber} ${ze.shelfNumber}`.toLowerCase().includes(p(C).toLowerCase()))),ze=>ze.id,(ze,ge)=>{var ht=sC(),Dt=S(ht),je=S(Dt),Vt=S(je);{var bt=G=>{var fe=lm();Ce(()=>Vi(fe,"src",p(ge).imageUrl)),Z(G,fe)},$n=G=>{var fe=iC(),gt=S(fe);Xs(gt,{size:18}),Z(G,fe)};Ve(Vt,G=>{p(ge).imageUrl?G(bt):G($n,-1)})}var nn=E(Vt),rn=S(nn),mt=K(rn,!0),On=E(rn),Bn=K(On,!0),W=E(Dt),Ue=K(W,!0),Re=E(W),De=K(Re,!0),rt=E(Re),qn=K(rt),mn=E(rt),$e=S(mn);let pr;var ii=K($e,!0),zn=E(mn),mr=S(zn),gr=S(mr),_r=S(gr);wu(_r,{size:17});var Or=E(gr),gn=S(Or);Tl(gn,{size:17});var Dr=E(Or),ss=S(Dr);bl(ss,{size:18}),Ce((G,fe,gt,_n)=>{j(mt,p(ge).name),j(Bn,p(ge).category||"Sem categoria"),j(Ue,p(ge).code),j(De,G),j(qn,`${p(ge).quantity??""} ${p(ge).unit??""}`),pr=an($e,1,"status-pill",null,pr,{"status-empty":fe,"status-low":gt}),j(ii,_n)},[()=>Pi(p(ge)),()=>ir(p(ge))==="empty",()=>ir(p(ge))==="low",()=>p(ge).active?ir(p(ge))==="empty"?"SEM ESTOQUE":ir(p(ge))==="low"?"ESTOQUE BAIXO":"NORMAL":"INATIVO"]),ce("click",gr,()=>ul(p(ge),"entry")),ce("click",Or,()=>ul(p(ge),"withdrawal")),ce("click",Dr,()=>Bs(p(ge))),Z(ze,ht)},ze=>{var ge=oC();Z(ze,ge)}),ce("click",me,Zo),Qe(Ke,()=>p(O),ze=>D(O,ze)),Qe(Yt,()=>p(C),ze=>D(C,ze)),Z(ut,Be)},Nr=ut=>{var Be=uC(),Fe=S(Be),me=E(S(Fe)),Oe=S(me);fa(Oe,{size:18});var qe=E(Fe,2),J=S(qe),nt=E(S(J));Di(nt,21,()=>p(Y),Ke=>Ke.id,(Ke,We)=>{var Qt=lC(),Yt=S(Qt),Jt=S(Yt),pn=K(Jt,!0),qt=E(Yt),ze=K(qt,!0),ge=E(qt),ht=K(ge,!0),Dt=E(ge),je=K(Dt,!0),Vt=E(Dt),bt=S(Vt);let $n;var nn=K(bt,!0),rn=E(Vt),mt=S(rn),On=S(mt);bl(On,{size:18}),Ce(()=>{j(pn,p(We).name),j(ze,p(We).matricula),j(ht,p(We).canAdd?"Permitido":"Não permitido"),j(je,p(We).canWithdraw?"Permitido":"Não permitido"),$n=an(bt,1,"status-pill",null,$n,{"status-empty":!p(We).active}),j(nn,p(We).active?"ATIVO":"DESATIVADO")}),ce("click",mt,()=>ll(p(We))),Z(Ke,Qt)},Ke=>{var We=cC();Z(Ke,We)}),ce("click",me,qs),Z(ut,Be)},fr=ut=>{var Be=dC(),Fe=E(S(Be),2),me=S(Fe),Oe=S(me);Al(Oe,{size:19});var qe=E(Oe),J=E(me),nt=S(J);nt.value=nt.__value="all";var Ke=E(nt);Ke.value=Ke.__value="entry";var We=E(Ke);We.value=We.__value="withdrawal",Bl(J);var Qt=E(J),Yt=E(S(Qt)),Jt=E(Qt),pn=E(S(Jt)),qt=E(Jt),ze=E(S(qt));lf(ze,{size:16});var ge=E(Fe,2);{var ht=je=>{t(je,()=>p(ta))},Dt=je=>{var Vt=hC();Z(je,Vt)};Ve(ge,je=>{p(ta).length?je(ht):je(Dt,-1)})}Qe(qe,()=>p(bi),je=>D(bi,je)),gu(J,()=>p(Ls),je=>D(Ls,je)),Qe(Yt,()=>p(Fs),je=>D(Fs,je)),Qe(pn,()=>p(ni),je=>D(ni,je)),ce("click",qt,Us),Z(ut,Be)};Ve(tt,ut=>{p(l)==="overview"?ut(Nn):p(l)==="items"?ut(Kt,1):p(l)==="employees"?ut(Nr,2):ut(fr,-1)})}Ce(()=>{Ge=an(Xe,1,"",null,Ge,{active:p(l)==="overview"}),Ze=an(at,1,"",null,Ze,{active:p(l)==="items"}),lt=an(Tt,1,"",null,lt,{active:p(l)==="employees"}),It=an(Nt,1,"",null,It,{active:p(l)==="movements"}),j(ae,p(l)==="overview"?"Visão geral":p(l)==="items"?"Itens do estoque":p(l)==="employees"?"Funcionários":"Movimentações")}),ce("click",Xe,()=>D(l,"overview")),ce("click",at,()=>D(l,"items")),ce("click",Tt,()=>D(l,"employees")),ce("click",Nt,()=>D(l,"movements")),ce("click",pt,$s),ce("click",ct,$s),Z(M,U)},Hs=M=>{var U=kC(),we=S(U),Ee=S(we),le=S(Ee),wt=S(le);Sl(wt,{size:21});var Xe=E(le),Ge=E(S(Xe)),Wt=K(Ge,!0),at=E(Ee,2),Ze=S(at),Pt=K(Ze),Tt=E(Ze),lt=S(Tt);Eu(lt,{size:18});var kt=E(we,2);{var Nt=pe=>{var Q=pC(),de=S(Q);cf(de,{size:18});var ae=E(de,1,!0),He=E(ae),Ye=S(He);Zs(Ye,{size:17}),Ce(()=>j(ae,p(w))),ce("click",He,()=>D(w,"")),Z(pe,Q)};Ve(kt,pe=>{p(w)&&pe(Nt)})}var It=E(kt,2);{var Gt=pe=>{var Q=am(),de=S(Q);da(de,{size:18});var ae=E(de,1,!0),He=E(ae),Ye=S(He);Zs(Ye,{size:17}),Ce(()=>j(ae,p(b))),ce("click",He,()=>D(b,"")),Z(pe,Q)};Ve(It,pe=>{p(b)&&pe(Gt)})}var pt=E(It,2);{var Ot=pe=>{var Q=TC(),de=S(Q),ae=S(de);af(ae,{size:18});var He=E(de,2),Ye=S(He),ct=S(Ye);{var Te=G=>{var fe=mC();Ce(()=>{Vi(fe,"src",p(v).imageUrl),Vi(fe,"alt",p(v).name)}),Z(G,fe)},et=G=>{var fe=gC(),gt=S(fe);Xs(gt,{size:44}),Z(G,fe)};Ve(ct,G=>{p(v).imageUrl?G(Te):G(et,-1)})}var Bt=E(Ye,2),tt=S(Bt),Nn=S(tt),Kt=S(Nn),Nr=K(Kt),fr=E(Kt),ut=K(fr,!0),Be=E(Nn);let Fe;var me=K(Be,!0),Oe=E(tt,2);{var qe=G=>{var fe=_C(),gt=K(fe,!0);Ce(()=>j(gt,p(v).description)),Z(G,fe)};Ve(Oe,G=>{p(v).description&&G(qe)})}var J=E(Oe,2),nt=S(J),Ke=E(S(nt)),We=S(Ke),Qt=E(We),Yt=K(Qt,!0),Jt=E(nt),pn=E(S(Jt)),qt=K(pn,!0),ze=E(Jt),ge=E(S(ze)),ht=K(ge),Dt=E(ze),je=E(S(Dt)),Vt=K(je,!0),bt=E(J,2);{var $n=G=>{var fe=vC(),gt=K(fe,!0);Ce(()=>j(gt,p(v).locationNote)),Z(G,fe)};Ve(bt,G=>{p(v).locationNote&&G($n)})}var nn=E(bt,2);{var rn=G=>{var fe=EC(),gt=E(S(fe));Di(gt,21,()=>p(v).customFields,_n=>_n.id,(_n,Dn)=>{var sn=yC(),os=S(sn),as=K(os,!0),Vr=E(os),Ws=K(Vr,!0);Ce(()=>{j(as,p(Dn).label),j(Ws,p(Dn).value)}),Z(_n,sn)}),Z(G,fe)};Ve(nn,G=>{p(v).customFields.length&&G(rn)})}var mt=E(nn,2),On=E(S(mt),2),Bn=S(On);let W;var Ue=S(Bn);df(Ue,{size:17});var Re=E(Bn);let De;var rt=S(Re);fa(rt,{size:17});var qn=E(On,2),mn=S(qn),$e=E(S(mn)),pr=E(mn),ii=E(S(pr),2),zn=E(qn,2),mr=E(S(zn)),gr=K(mr),_r=E(mr);{var Or=G=>{var fe=wC(),gt=E(Ul(fe),2),_n=K(gt);Ce(Dn=>j(_n,`${Dn??""} ${p(v).unit??""}`),[()=>Math.max(0,p(v).quantity+(p(T)==="entry"?Number(p(R)):-Number(p(R))))]),Z(G,fe)};Ve(_r,G=>{p(R)>0&&G(Or)})}var gn=E(zn,2),Dr=S(gn),ss=E(Dr);Il(ss,{size:18}),Ce((G,fe,gt,_n)=>{j(Nr,`${p(v).code??""} · ${(p(v).category||"MATERIAL")??""}`),j(ut,p(v).name),Fe=an(Be,1,"status-pill",null,Fe,{"status-empty":G,"status-low":fe}),j(me,gt),j(We,p(v).quantity),j(Yt,p(v).unit),j(qt,_n),j(ht,`${p(v).minimumStock??""} ${p(v).unit??""}`),j(Vt,p(v).itemType),W=an(Bn,1,"",null,W,{chosen:p(T)==="withdrawal"}),De=an(Re,1,"",null,De,{chosen:p(T)==="entry"}),j(gr,`${p(v).quantity??""} ${p(v).unit??""}`),gn.disabled=p(g)||p(R)<1||p(T)==="withdrawal"&&p(R)>p(v).quantity,j(Dr,`${p(g)?"REGISTRANDO...":p(T)==="entry"?"CONFIRMAR ENTRADA":"CONFIRMAR RETIRADA"} `)},[()=>ir(p(v))==="empty",()=>ir(p(v))==="low",()=>ir(p(v))==="empty"?"SEM ESTOQUE":ir(p(v))==="low"?"ESTOQUE BAIXO":"NORMAL",()=>Pi(p(v))]),ce("click",de,()=>{D(v,null),Un()}),Js("submit",mt,su),ce("click",Bn,()=>D(T,"withdrawal")),ce("click",Re,()=>D(T,"entry")),Qe($e,()=>p(R),G=>D(R,G)),Qe(ii,()=>p(Ut),G=>D(Ut,G)),Z(pe,Q)},At=pe=>{var Q=PC(),de=S(Q),ae=E(S(de)),He=K(ae),Ye=E(de,2),ct=S(Ye);Al(ct,{size:21});var Te=E(ct),et=E(Ye,2),Bt=S(et),tt=S(Bt);bl(tt,{size:17});var Nn=E(tt),Kt=E(et,2);{var Nr=me=>{var Oe=SC();Di(Oe,21,()=>p(F).filter(qe=>!p(C)||`${qe.rackNumber} ${qe.shelfNumber}`.toLowerCase().includes(p(C).toLowerCase())),qe=>qe.id,(qe,J)=>{var nt=bC(),Ke=S(nt),We=S(Ke);{var Qt=Re=>{var De=lm();Ce(()=>Vi(De,"src",p(J).imageUrl)),Z(Re,De)},Yt=Re=>{var De=IC(),rt=S(De);Xs(rt,{size:25}),Z(Re,De)};Ve(We,Re=>{p(J).imageUrl?Re(Qt):Re(Yt,-1)})}var Jt=E(Ke,2),pn=S(Jt),qt=S(pn),ze=K(qt,!0),ge=E(qt);let ht;var Dt=E(pn),je=K(Dt,!0),Vt=E(Dt),bt=K(Vt,!0),$n=E(Vt),nn=S($n);let rn;var mt=S(nn);{var On=Re=>{var De=BE("SEM ESTOQUE");Z(Re,De)},Bn=Re=>{var De=AC(),rt=Ul(De),qn=E(rt),mn=K(qn,!0);Ce(()=>{j(rt,`${p(J).quantity??""} `),j(mn,p(J).unit)}),Z(Re,De)};Ve(mt,Re=>{p(J).quantity===0?Re(On):Re(Bn,-1)})}var W=E(nn),Ue=K(W);Ce((Re,De,rt)=>{j(ze,p(J).code),ht=an(ge,1,"status-mark",null,ht,{"mark-empty":Re,"mark-low":De}),j(je,p(J).name),j(bt,rt),rn=an(nn,1,"",null,rn,{"danger-text":p(J).quantity===0}),j(Ue,`mín. ${p(J).minimumStock??""}`)},[()=>ir(p(J))==="empty",()=>ir(p(J))==="low",()=>Pi(p(J))]),ce("click",nt,()=>{D(v,p(J),!0),Un()}),Z(qe,nt)}),Z(me,Oe)},fr=me=>{var Oe=RC(),qe=S(Oe);Xs(qe,{size:27}),Z(me,Oe)};Ve(Kt,me=>{p(F).length?me(Nr):me(fr,-1)})}var ut=E(Kt,2);{var Be=me=>{var Oe=CC(),qe=S(Oe),J=E(qe);lf(J,{size:18}),Ce(()=>{Oe.disabled=p(se),j(qe,`${p(se)?"CARREGANDO...":"CARREGAR MAIS ITENS"} `)}),ce("click",Oe,Yo),Z(me,Oe)},Fe=Zn(()=>p(z)&&!p(O).trim());Ve(ut,me=>{p(Fe)&&me(Be)})}Ce(()=>j(He,`${p(F).length??""} ${p(F).length===1?"resultado":"resultados"}`)),Qe(Te,()=>p(O),me=>D(O,me)),Qe(Nn,()=>p(C),me=>D(C,me)),Z(pe,Q)};Ve(pt,pe=>{p(v)?pe(Ot):pe(At,-1)})}Ce(()=>{var pe,Q;j(Wt,p(v)?"Detalhes do item":"Consulta de materiais"),j(Pt,`${((pe=p(a))==null?void 0:pe.name)??"Funcionário"??""} · ${((Q=p(a))==null?void 0:Q.matricula)??""}`)}),ce("click",Tt,$s),Z(M,U)};Ve(js,M=>{p(i)?p(s)==="admin"?M(dl,1):p(s)==="employee"&&M(Hs,2):M(ri)})}var na=E(js,2);{var rs=M=>{var U=VC(),we=S(U),Ee=S(we),le=S(Ee),wt=E(S(le)),Xe=K(wt,!0),Ge=E(le),Wt=S(Ge);Zs(Wt,{size:20});var at=E(Ee,2),Ze=S(at),Pt=S(Ze),Tt=E(S(Pt)),lt=E(Pt),kt=E(S(lt)),Nt=E(lt),It=E(S(Nt)),Gt=E(Nt),pt=E(S(Gt)),Ot=S(pt);Ot.value=Ot.__value="piece";var At=E(Ot);At.value=At.__value="component";var pe=E(At);pe.value=pe.__value="tool";var Q=E(pe);Q.value=Q.__value="machine",Bl(pt);var de=E(Gt),ae=E(S(de)),He=S(ae);He.value=He.__value="quantity";var Ye=E(He);Ye.value=Ye.__value="asset",Bl(ae);var ct=E(de),Te=E(S(ct)),et=E(ct),Bt=E(S(et)),tt=E(et),Nn=E(S(tt)),Kt=E(tt),Nr=E(S(Kt)),fr=E(Kt),ut=E(S(fr)),Be=E(fr),Fe=E(S(Be)),me=E(Be),Oe=E(S(me)),qe=E(me),J=E(S(qe)),nt=S(J);Ww(nt,{size:19});var Ke=E(nt,1,!0),We=E(Ke),Qt=E(J);{var Yt=W=>{var Ue=NC(),Re=S(Ue),De=E(Re),rt=S(De);ff(rt,{size:16}),Ce(()=>{Vi(Re,"src",p(X).imageUrl),De.disabled=p(g)}),ce("click",De,Zt),Z(W,Ue)};Ve(Qt,W=>{p(X).imageUrl&&W(Yt)})}var Jt=E(qe),pn=S(Jt),qt=E(Ze,2),ze=S(qt),ge=E(S(ze)),ht=S(ge);fa(ht,{size:16});var Dt=E(ze,2);Di(Dt,19,()=>p(X).customFields,W=>W.id,(W,Ue,Re)=>{var De=OC(),rt=S(De),qn=E(S(rt)),mn=E(rt),$e=E(S(mn)),pr=E(mn),ii=S(pr);ff(ii,{size:17}),Qe(qn,()=>p(Ue).label,zn=>p(Ue).label=zn),Qe($e,()=>p(Ue).value,zn=>p(Ue).value=zn),ce("click",pr,()=>p(X).customFields=p(X).customFields.filter((zn,mr)=>mr!==p(Re))),Z(W,De)});var je=E(Dt,2);{var Vt=W=>{var Ue=DC();Z(W,Ue)};Ve(je,W=>{p(X).customFields.length||W(Vt)})}var bt=E(qt,2);{var $n=W=>{var Ue=Ml(),Re=K(Ue,!0);Ce(()=>j(Re,p(w))),Z(W,Ue)};Ve(bt,W=>{p(w)&&W($n)})}var nn=E(bt,2),rn=S(nn),mt=E(rn),On=S(mt),Bn=E(On);da(Bn,{size:17}),Ce(W=>{var Ue;j(Xe,p(X).name?"Editar item":"Novo item"),Bt.disabled=W,j(Ke,((Ue=p(dr))==null?void 0:Ue.name)??(p(X).imageUrl?"Substituir fotografia":"Selecionar imagem")),mt.disabled=p(g),j(On,`${p(g)?"SALVANDO...":"SALVAR ITEM"} `)},[()=>!!p(Se).find(W=>W.id===p(ot))]),ce("click",U,W=>{W.target===W.currentTarget&&D(fn,!1)}),ce("click",Ge,()=>D(fn,!1)),Js("submit",at,Ht),Qe(Tt,()=>p(X).name,W=>p(X).name=W),Qe(kt,()=>p(X).code,W=>p(X).code=W),Qe(It,()=>p(X).category,W=>p(X).category=W),gu(pt,()=>p(X).itemType,W=>p(X).itemType=W),gu(ae,()=>p(X).trackingMode,W=>p(X).trackingMode=W),Qe(Te,()=>p(X).unit,W=>p(X).unit=W),Qe(Bt,()=>p(X).quantity,W=>p(X).quantity=W),Qe(Nn,()=>p(X).minimumStock,W=>p(X).minimumStock=W),Qe(Nr,()=>p(X).rackNumber,W=>p(X).rackNumber=W),Qe(ut,()=>p(X).shelfNumber,W=>p(X).shelfNumber=W),Qe(Fe,()=>p(X).locationNote,W=>p(X).locationNote=W),Qe(Oe,()=>p(X).description,W=>p(X).description=W),ce("change",We,W=>{var Ue;return D(dr,((Ue=W.currentTarget.files)==null?void 0:Ue[0])??null,!0)}),wl(pn,()=>p(X).active,W=>p(X).active=W),ce("click",ge,al),ce("click",rn,()=>D(fn,!1)),Z(M,U)};Ve(na,M=>{p(fn)&&M(rs)})}var ra=E(na,2);{var tn=M=>{var U=MC(),we=S(U),Ee=S(we),le=S(Ee),wt=E(S(le)),Xe=K(wt,!0),Ge=E(le),Wt=S(Ge);Zs(Wt,{size:20});var at=E(Ee,2),Ze=S(at),Pt=S(Ze),Tt=E(S(Pt)),lt=E(Pt),kt=E(S(lt)),Nt=E(lt),It=S(Nt),Gt=E(Nt),pt=S(Gt),Ot=E(Gt),At=S(Ot),pe=E(Ze,2);{var Q=Te=>{var et=Ml(),Bt=K(et,!0);Ce(()=>j(Bt,p(w))),Z(Te,et)};Ve(pe,Te=>{p(w)&&Te(Q)})}var de=E(pe,2),ae=S(de),He=E(ae),Ye=S(He),ct=E(Ye);da(ct,{size:17}),Ce(()=>{j(Xe,p(hr)?"Editar funcionário":"Novo funcionário"),He.disabled=p(g),j(Ye,`${p(g)?"SALVANDO...":"SALVAR FUNCIONÁRIO"} `)}),ce("click",U,Te=>{Te.target===Te.currentTarget&&D(nr,!1)}),ce("click",Ge,()=>D(nr,!1)),Js("submit",at,cl),Qe(Tt,()=>p(kn).name,Te=>p(kn).name=Te),Qe(kt,()=>p(kn).matricula,Te=>p(kn).matricula=Te),wl(It,()=>p(kn).active,Te=>p(kn).active=Te),wl(pt,()=>p(kn).canAdd,Te=>p(kn).canAdd=Te),wl(At,()=>p(kn).canWithdraw,Te=>p(kn).canWithdraw=Te),ce("click",ae,()=>D(nr,!1)),Z(M,U)};Ve(ra,M=>{p(nr)&&M(tn)})}var fl=E(ra,2);{var is=M=>{var U=xC(),we=S(U),Ee=S(we),le=E(S(Ee)),wt=S(le);Zs(wt,{size:20});var Xe=E(Ee,2),Ge=S(Xe),Wt=S(Ge),at=K(Wt,!0),Ze=E(Wt),Pt=K(Ze),Tt=E(Ge,2),lt=S(Tt);let kt;var Nt=S(lt);df(Nt,{size:17});var It=E(lt);let Gt;var pt=S(It);fa(pt,{size:17});var Ot=E(Tt,2),At=S(Ot),pe=E(S(At)),Q=E(At),de=E(S(Q)),ae=E(Ot,2);{var He=tt=>{var Nn=Ml(),Kt=K(Nn,!0);Ce(()=>j(Kt,p(w))),Z(tt,Nn)};Ve(ae,tt=>{p(w)&&tt(He)})}var Ye=E(ae,2),ct=S(Ye),Te=E(ct),et=S(Te),Bt=E(et);da(Bt,{size:17}),Ce(()=>{j(at,p($t).name),j(Pt,`${p($t).code??""} · saldo ${p($t).quantity??""} ${p($t).unit??""}`),kt=an(lt,1,"",null,kt,{chosen:p(Et)==="withdrawal"}),Gt=an(It,1,"",null,Gt,{chosen:p(Et)==="entry"}),Te.disabled=p(g)||p(Et)==="withdrawal"&&p(rr)>p($t).quantity,j(et,`${p(g)?"REGISTRANDO...":"CONFIRMAR"} `)}),ce("click",U,tt=>{tt.target===tt.currentTarget&&D(Pn,!1)}),ce("click",le,()=>D(Pn,!1)),Js("submit",Xe,ts),ce("click",lt,()=>D(Et,"withdrawal")),ce("click",It,()=>D(Et,"entry")),Qe(pe,()=>p(rr),tt=>D(rr,tt)),Qe(de,()=>p(xs),tt=>D(xs,tt)),ce("click",ct,()=>D(Pn,!1)),Z(M,U)};Ve(fl,M=>{p(Pn)&&p($t)&&M(is)})}Z(n,zs),Mh()}ug(["click","change"]);YE(FC,{target:document.getElementById("app")});
