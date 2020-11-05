var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function s(t){let e;return i(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(i(e,n))}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t,e,n,o,r,c,i){const s=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(s){const r=u(e,n,o,i);t.p(r,s)}}function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function g(){return m("")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function x(t,e,n){t.classList[n?"add":"remove"](e)}class w{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)d(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let _;function C(t){_=t}function O(){if(!_)throw new Error("Function called outside component initialization");return _}function j(t){O().$$.on_mount.push(t)}const E=[],N=[],D=[],S=[],I=Promise.resolve();let L=!1;function R(t){D.push(t)}let A=!1;const z=new Set;function q(){if(!A){A=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];C(e),H(e.$$)}for(C(null),E.length=0;N.length;)N.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];z.has(e)||(z.add(e),e())}D.length=0}while(E.length);for(;S.length;)S.pop()();L=!1,A=!1,z.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const M=new Set;let T;function F(){T={r:0,c:[],p:T}}function P(){T.r||o(T.c),T=T.p}function B(t,e){t&&t.i&&(M.delete(t),t.i(e))}function J(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),T.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function W(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let i=e.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const s=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(F(),J(t,1,1,()=>{e.blocks[n]=null}),P())}):e.block.d(1),s.c(),B(s,1),s.m(e.mount(),e.anchor),l=!0),e.block=s,e.blocks&&(e.blocks[o]=s),l&&q()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=O();if(t.then(t=>{C(n),o(e.then,1,e.value,t),C(null)},t=>{if(C(n),o(e.catch,2,e.error,t),C(null),!e.hasCatch)throw t}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function X(t){t&&t.c()}function Y(t,n,c){const{fragment:i,on_mount:s,on_destroy:l,after_update:u}=t.$$;i&&i.m(n,c),R(()=>{const n=s.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(R)}function K(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(E.push(t),L||(L=!0,I.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,r,c,i,s,l,u=[-1]){const a=_;C(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=c?c(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&U(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();r.intro&&B(e.$$.fragment),Y(e,r.target,r.anchor),q()}C(a)}class V{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,o,r;return{c(){n=p("header"),o=p("h1"),r=m(e[0]),v(o,"class","svelte-hf5v01"),v(n,"class","svelte-hf5v01")},m(t,e){d(t,n,e),f(n,o),f(o,r)},p(t,[e]){1&e&&y(r,t[0])},i:t,o:t,d(t){t&&h(n)}}}function Z(t,e,n){let{title:o}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title)},[o]}class tt extends V{constructor(t){super(),Q(this,t,Z,G,c,{title:0})}}function et(t){let e,n,o,r,c,i,s,l,g,k,w,_,C=(t[4]?t[1]:t[2])+"";const O=t[6].default,j=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(O,t,t[5],null);return{c(){e=p("div"),n=p("input"),o=$(),r=p("label"),c=p("span"),i=m(C),s=$(),l=p("div"),g=p("div"),j&&j.c(),v(n,"id",t[0]),v(n,"type","checkbox"),v(n,"class","svelte-8k7i0y"),v(r,"for",t[0]),v(r,"class","collapse__title svelte-8k7i0y"),v(r,"tabindex","0"),v(g,"class","collapse__content svelte-8k7i0y"),v(l,"class","collapse__content-wrapper svelte-8k7i0y"),v(e,"class","collapse svelte-8k7i0y"),x(e,"isOpen",t[4])},m(u,a){d(u,e,a),f(e,n),n.checked=t[4],f(e,o),f(e,r),f(r,c),f(c,i),t[8](r),f(e,s),f(e,l),f(l,g),j&&j.m(g,null),k=!0,w||(_=b(n,"change",t[7]),w=!0)},p(t,[o]){(!k||1&o)&&v(n,"id",t[0]),16&o&&(n.checked=t[4]),(!k||22&o)&&C!==(C=(t[4]?t[1]:t[2])+"")&&y(i,C),(!k||1&o)&&v(r,"for",t[0]),j&&j.p&&32&o&&a(j,O,t,t[5],o,null,null),16&o&&x(e,"isOpen",t[4])},i(t){k||(B(j,t),k=!0)},o(t){J(j,t),k=!1},d(n){n&&h(e),t[8](null),j&&j.d(n),w=!1,_()}}}function nt(t,e,n){let o,{$$slots:r={},$$scope:c}=e,{id:i}=e,{titleOpen:s}=e,{titleClosed:l}=e,u=!1;return t.$$set=t=>{"id"in t&&n(0,i=t.id),"titleOpen"in t&&n(1,s=t.titleOpen),"titleClosed"in t&&n(2,l=t.titleClosed),"$$scope"in t&&n(5,c=t.$$scope)},[i,s,l,o,u,c,r,function(){u=this.checked,n(4,u)},function(t){N[t?"unshift":"push"](()=>{o=t,n(3,o)})}]}class ot extends V{constructor(t){super(),Q(this,t,nt,et,c,{id:0,titleOpen:1,titleClosed:2})}}const rt=[];function ct(e,n=t){let o;const r=[];function i(t){if(c(e,t)&&(e=t,o)){const t=!rt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const l=[c,s];return r.push(l),1===r.length&&(o=n(i)||t),c(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const it=ct("roam-crossref"),st=ct("");const lt=function(){let t;console.count("caches");try{t=JSON.parse(localStorage.getItem("roam-crossref")),t=t||{}}catch{t={}}const e=ct(t);return e.subscribe(t=>{console.count("updated"),localStorage.setItem("roam-crossref",JSON.stringify(t))}),{get:function(t){const n=s(e);return n?n.ts<Date.now()?(console.info("remove"),doiCache.remove(t),null):n[t]:null},add:function(t,n){e[t]={title:n.title[0],ts:Date.now()+864e5,...n},e.set(e)},remove:function(t){s(e)&&(delete e[t],e.set(e))}}}();function ut(t){let e,n;return{c(){e=p("span"),n=m(t[0]),v(e,"class","svelte-36q60a")},m(t,o){d(t,e,o),f(e,n)},p(t,e){1&e&&y(n,t[0])},d(t){t&&h(e)}}}function at(t){let e,n,o,r;return{c(){e=p("a"),n=m(t[0]),v(e,"href",t[2])},m(c,i){d(c,e,i),f(e,n),o||(r=b(e,"click",t[3]),o=!0)},p(t,e){1&e&&y(n,t[0])},d(t){t&&h(e),o=!1,r()}}}function ft(e){let n;let o=function(t,e){return t[1]?at:ut}(e)(e);return{c(){n=p("li"),o.c(),v(n,"class","svelte-36q60a")},m(t,e){d(t,n,e),o.m(n,null)},p(t,[e]){o.p(t,e)},i:t,o:t,d(t){t&&h(n),o.d()}}}function dt(t,e,n){let{data:o}=e;const r=o.DOI??null,c=o.key;let i=o["volume-title"]??o["journal-title"]??r??c;const s=document.location.origin+document.location.pathname+"?doi="+r;return j(()=>{r&&async function(){const t=lt.get(r);if(t)return void n(0,i=t.title[0]??i);const e=await fetch(`https://api.crossref.org/works/${r}?mailto=christian.fratta@gmail.com`),o=await e.json();doiData=o.message,lt.add(r,doiData),n(0,i=doiData.title[0]??i)}()}),t.$$set=t=>{"data"in t&&n(4,o=t.data)},[i,r,s,function(t){t.preventDefault(),history.pushState({url:s,title:i},i,s),st.set(r)},o]}class ht extends V{constructor(t){super(),Q(this,t,dt,ft,c,{data:4})}}function pt(t,e,n){const o=t.slice();return o[4]=e[n],o}function mt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function $t(t){let e,n,o,r,c,i=t[0].abstract&&gt(t);const s=[yt,vt],l=[];function u(t,e){return t[0].reference&&t[0].reference.length>0?0:1}return o=u(t),r=l[o]=s[o](t),{c(){i&&i.c(),e=$(),n=p("ul"),r.c()},m(t,r){i&&i.m(t,r),d(t,e,r),d(t,n,r),l[o].m(n,null),c=!0},p(t,c){t[0].abstract?i?(i.p(t,c),1&c&&B(i,1)):(i=gt(t),i.c(),B(i,1),i.m(e.parentNode,e)):i&&(F(),J(i,1,1,()=>{i=null}),P());let a=o;o=u(t),o===a?l[o].p(t,c):(F(),J(l[a],1,1,()=>{l[a]=null}),P(),r=l[o],r||(r=l[o]=s[o](t),r.c()),B(r,1),r.m(n,null))},i(t){c||(B(i),B(r),c=!0)},o(t){J(i),J(r),c=!1},d(t){i&&i.d(t),t&&h(e),t&&h(n),l[o].d()}}}function gt(t){let e,n,o;return n=new ot({props:{id:"abstractCollapse",titleOpen:"Hide abstract",titleClosed:"Show abstract",$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){e=p("div"),X(n.$$.fragment),k(e,"margin-top","0.75rem"),k(e,"margin-bottom","0.1rem")},m(t,r){d(t,e,r),Y(n,e,null),o=!0},p(t,e){const o={};129&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(B(n.$$.fragment,t),o=!0)},o(t){J(n.$$.fragment,t),o=!1},d(t){t&&h(e),K(n)}}}function bt(t){let e,n,o=""+t[0].abstract;return{c(){n=g(),e=new w(n)},m(t,r){e.m(o,t,r),d(t,n,r)},p(t,n){1&n&&o!==(o=""+t[0].abstract)&&e.p(o)},d(t){t&&h(n),t&&e.d()}}}function vt(e){let n;return{c(){n=p("div"),n.textContent="No references available for this DOI :(",k(n,"text-align","center"),k(n,"padding","10px")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function yt(t){let e,n,o=t[0].reference,r=[];for(let e=0;e<o.length;e+=1)r[e]=kt(pt(t,o,e));const c=t=>J(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=g()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);d(t,e,o),n=!0},p(t,n){if(1&n){let i;for(o=t[0].reference,i=0;i<o.length;i+=1){const c=pt(t,o,i);r[i]?(r[i].p(c,n),B(r[i],1)):(r[i]=kt(c),r[i].c(),B(r[i],1),r[i].m(e.parentNode,e))}for(F(),i=o.length;i<r.length;i+=1)c(i);P()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)B(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)J(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&h(e)}}}function kt(t){let e,n;return e=new ht({props:{data:t[4]}}),{c(){X(e.$$.fragment)},m(t,o){Y(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.data=t[4]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function xt(e){let n;return{c(){n=p("div"),n.textContent="Loading...",k(n,"margin","2rem"),k(n,"text-align","center")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function wt(t){let e,n,o,r={ctx:t,current:null,token:null,hasCatch:!1,pending:xt,then:$t,catch:mt,value:0,blocks:[,,,]};return W(n=t[0],r),{c(){e=p("div"),r.block.c()},m(t,n){d(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,o=!0},p(e,[o]){if(t=e,r.ctx=t,1&o&&n!==(n=t[0])&&W(n,r));else{const e=t.slice();e[0]=r.resolved,r.block.p(e,o)}},i(t){o||(B(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){J(r.blocks[t])}o=!1},d(t){t&&h(e),r.block.d(),r.token=null,r=null}}}function _t(t,e,n){let o,{doi:r}=e;function c(t){it.update(e=>t)}return t.$$set=t=>{"doi"in t&&n(1,r=t.doi)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=async function(t){const e=lt.get(t);if(e)return c(e.title),e;const n=await fetch(`https://api.crossref.org/works/${t}?mailto=christian.fratta@gmail.com`),o=await n.json();return c(o.message.title[0]),lt.add(t,o.message),o.message}(r))},[o,r]}class Ct extends V{constructor(t){super(),Q(this,t,_t,wt,c,{doi:1})}}function Ot(e){let n;return{c(){n=p("div"),n.innerHTML='<b>Couldn&#39;t find the DOI. Make sure you&#39;re writing the iframe as</b> \n      <div class="svelte-1m23htj"><code>{{ iframe: https://equineontology.github.io/roam-crossref?doi=\n          <mark>YOUR_DOI_HERE</mark>\n          }}</code></div>',v(n,"class","invalid-doi svelte-1m23htj")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function jt(t){let e,n,o;function r(e){t[2].call(null,e)}let c={};return void 0!==t[1]&&(c.doi=t[1]),e=new Ct({props:c}),N.push(()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,"doi",r)),{c(){X(e.$$.fragment)},m(t,n){Y(e,t,n),o=!0},p(t,o){const r={};var c;!n&&2&o&&(n=!0,r.doi=t[1],c=()=>n=!1,S.push(c)),e.$set(r)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){J(e.$$.fragment,t),o=!1},d(t){K(e,t)}}}function Et(t){let e,n,o,r,c,i,s,l,u,a,m;i=new tt({props:{title:t[0]}});const g=[jt,Ot],b=[];function y(t,e){return t[1]?0:1}return u=y(t),a=b[u]=g[u](t),{c(){e=p("meta"),n=p("meta"),o=p("meta"),r=p("link"),c=$(),X(i.$$.fragment),s=$(),l=p("div"),a.c(),document.title="Roam Crossref",v(e,"name","description"),v(e,"content","A utility to pull crossref.org data for papers and add it to RoamResearch"),v(n,"name","author"),v(n,"content","Christian Fratta"),v(o,"name","viewport"),v(o,"content","width=device-width, initial-scale=1"),v(r,"rel","stylesheet"),v(r,"href","https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"),v(r,"integrity","sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="),v(r,"crossorigin","anonymous"),v(l,"class","svelte-1m23htj")},m(t,a){f(document.head,e),f(document.head,n),f(document.head,o),f(document.head,r),d(t,c,a),Y(i,t,a),d(t,s,a),d(t,l,a),b[u].m(l,null),m=!0},p(t,[e]){const n={};1&e&&(n.title=t[0]),i.$set(n);let o=u;u=y(t),u===o?b[u].p(t,e):(F(),J(b[o],1,1,()=>{b[o]=null}),P(),a=b[u],a||(a=b[u]=g[u](t),a.c()),B(a,1),a.m(l,null))},i(t){m||(B(i.$$.fragment,t),B(a),m=!0)},o(t){J(i.$$.fragment,t),J(a),m=!1},d(t){h(e),h(n),h(o),h(r),t&&h(c),K(i,t),t&&h(s),t&&h(l),b[u].d()}}}function Nt(t,e,n){let o,r;function c(){const t=window.location.search,e=new URLSearchParams(t);st.set(e.get("doi"))}return l(t,it,t=>n(0,o=t)),l(t,st,t=>n(1,r=t)),j(()=>{c(),addEventListener("popstate",c)}),[o,r,function(t){r=t,st.set(r)}]}return new class extends V{constructor(t){super(),Q(this,t,Nt,Et,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
