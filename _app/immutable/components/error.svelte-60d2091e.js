import{S,i as q,n as x,j as f,q as _,s as C,k as d,l as g,r as v,f as u,c as j,a as m,J as h,u as $,C as E,K as k}from"../chunks/index-30b8b049.js";import{s as y}from"../chunks/singletons-a1d5d72c.js";const H=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},J={subscribe(s){return H().page.subscribe(s)}};function K(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=C(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=v(a,r),a.forEach(u),n=j(e),i=d(e,"P",{});var p=g(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),h(t,o),m(e,n,a),m(e,i,a),h(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function P(s,t,r){let o;return k(s,J,n=>r(0,o=n)),[o]}let A=class extends S{constructor(t){super(),q(this,t,P,K,x,{})}};export{A as default};
