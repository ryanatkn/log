import{S as nt,i as ot,n as ft,j as v,k as w,l as g,f as n,m as k,P as ut,a as p,J as u,D as x,H as Et,q as h,s as D,r as $,c as J,u as Lt,K as It,L as At,M as St,d as L,t as C,w as O,x as R,y as q,z as F,N as Ct}from"../../chunks/shared-754331ab.js";function jt(d){let e,l,s,r;return{c(){e=v("header"),l=v("div"),s=v("img"),this.h()},l(t){e=w(t,"HEADER",{class:!0});var o=g(e);l=w(o,"DIV",{class:!0});var i=g(l);s=w(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(n),o.forEach(n),this.h()},h(){k(s,"class","pixelated svelte-1gwpp3p"),ut(s.src,r=d[0])||k(s,"src",r),k(s,"alt",d[1]),k(l,"class","bg svelte-1gwpp3p"),k(e,"class","svelte-1gwpp3p")},m(t,o){p(t,e,o),u(e,l),u(l,s)},p(t,[o]){o&1&&!ut(s.src,r=t[0])&&k(s,"src",r),o&2&&k(s,"alt",t[1])},i:x,o:x,d(t){t&&n(e)}}}function Dt(d,e,l){let{src:s="/favicon.png"}=e,{alt:r="my avatar image"}=e;return d.$$set=t=>{"src"in t&&l(0,s=t.src),"alt"in t&&l(1,r=t.alt)},[s,r]}class Jt extends nt{constructor(e){super(),ot(this,e,Dt,jt,ft,{src:0,alt:1})}}function Ot(d){let e,l,s,r;return{c(){e=v("footer"),l=v("a"),s=v("img"),this.h()},l(t){e=w(t,"FOOTER",{class:!0});var o=g(e);l=w(o,"A",{title:!0,href:!0,class:!0});var i=g(l);s=w(i,"IMG",{class:!0,src:!0,alt:!0}),i.forEach(n),o.forEach(n),this.h()},h(){k(s,"class","pixelated svelte-fdjxkw"),ut(s.src,r=d[0])||k(s,"src",r),k(s,"alt",d[1]),k(l,"title","View source"),k(l,"href","https://github.com/ryanatkn/log"),k(l,"class","svelte-fdjxkw"),k(e,"class","svelte-fdjxkw")},m(t,o){p(t,e,o),u(e,l),u(l,s)},p(t,[o]){o&1&&!ut(s.src,r=t[0])&&k(s,"src",r),o&2&&k(s,"alt",t[1])},i:x,o:x,d(t){t&&n(e)}}}function Rt(d,e,l){let{src:s="/favicon.png"}=e,{alt:r="my avatar image"}=e;return d.$$set=t=>{"src"in t&&l(0,s=t.src),"alt"in t&&l(1,r=t.alt)},[s,r]}class qt extends nt{constructor(e){super(),ot(this,e,Rt,Ot,ft,{src:0,alt:1})}}function Ft(d){let e,l,s,r,t,o;const i=d[2].default,f=Et(i,d,d[1],null);return{c(){e=v("div"),l=v("h3"),s=h(d[0]),r=D(),t=v("ul"),f&&f.c(),this.h()},l(_){e=w(_,"DIV",{class:!0});var c=g(e);l=w(c,"H3",{});var m=g(l);s=$(m,d[0]),m.forEach(n),r=J(c),t=w(c,"UL",{});var E=g(t);f&&f.l(E),E.forEach(n),c.forEach(n),this.h()},h(){k(e,"class","bulletin panel markup svelte-tjznc6")},m(_,c){p(_,e,c),u(e,l),u(l,s),u(e,r),u(e,t),f&&f.m(t,null),o=!0},p(_,[c]){(!o||c&1)&&Lt(s,_[0]),f&&f.p&&(!o||c&2)&&It(f,i,_,_[1],o?St(i,_[1],c,null):At(_[1]),null)},i(_){o||(L(f,_),o=!0)},o(_){C(f,_),o=!1},d(_){_&&n(e),f&&f.d(_)}}}function Ht(d,e,l){let{$$slots:s={},$$scope:r}=e,{date:t}=e;return d.$$set=o=>{"date"in o&&l(0,t=o.date),"$$scope"in o&&l(1,r=o.$$scope)},[t,r,s]}class Y extends nt{constructor(e){super(),ot(this,e,Ht,Ft,ft,{date:0})}}function Bt(d){let e,l;const s=d[1].default,r=Et(s,d,d[0],null);return{c(){e=v("li"),r&&r.c(),this.h()},l(t){e=w(t,"LI",{class:!0});var o=g(e);r&&r.l(o),o.forEach(n),this.h()},h(){k(e,"class","bullet svelte-pdqwd1")},m(t,o){p(t,e,o),r&&r.m(e,null),l=!0},p(t,[o]){r&&r.p&&(!l||o&1)&&It(r,s,t,t[0],l?St(s,t[0],o,null):At(t[0]),null)},i(t){l||(L(r,t),l=!0)},o(t){C(r,t),l=!1},d(t){t&&n(e),r&&r.d(t)}}}function Mt(d,e,l){let{$$slots:s={},$$scope:r}=e;return d.$$set=t=>{"$$scope"in t&&l(0,r=t.$$scope)},[r,s]}class G extends nt{constructor(e){super(),ot(this,e,Mt,Bt,ft,{})}}function xt(d){let e,l,s,r,t,o,i,f,_,c,m,E,y,I,A,S,a,b,B,M,P,j,U,H,T,z,tt,K,et,X,Q,st,lt,W,rt,it,ht,$t;return{c(){e=h(`posted my Svelte 4 wishlist to
		`),l=v("a"),s=h("a Reddit thread in /r/sveltejs"),r=h(`:
		`),t=v("blockquote"),o=v("ul"),i=v("li"),f=h(`an opt-in way to better scale components (this has been mentioned by the team - I'd love
					to construct Svelte components from data without the compiler! no idea how feasible that
					is. this could be a path for end users to "author" Svelte components without sandboxing)`),_=D(),c=v("li"),m=h("iterators for "),E=v("code"),y=h("#each"),I=h(" or similar construct ("),A=v("code"),S=h("#iterate"),a=h(`?) (it'd be
					really nice to render sets/maps/etc without waste)`),b=D(),B=v("li"),M=h("my two favorite RFCs are inline components and directive forwarding"),P=D(),j=v("li"),U=h("shorthand style properties "),H=v("code"),T=h("style:--some_css_var"),z=h(` (I don't care about using kebab-case
					specifically for CSS vars, I think this wasn't implemented because of that, but +1 for snake_case
					CSS vars)`),tt=D(),K=v("li"),et=h(`whitespace handling (inherited from HTML, so very unlikely to change I think), sometimes
					significant whitespace causes problems, and the fix makes the code much less readable,
					it's one of the only things I miss from JSX`),X=D(),Q=v("li"),st=h(`I don't have specific suggestions but slots have some limitations that would be cool to
					see lifted - generally I suspect there's room for more stuff that's optimal on the happy
					path, but you can opt into advanced stuff that's slower but more powerful (although I know
					the team likes their best-of-all-worlds designs!)`),lt=D(),W=v("li"),rt=h("the syntax to pass CSS vars directly to components breaks things like "),it=v("code"),ht=h(":last-child"),$t=h(" and other selectors, I think it may be an intractable problem tho"),this.h()},l(N){e=$(N,`posted my Svelte 4 wishlist to
		`),l=w(N,"A",{href:!0});var Z=g(l);s=$(Z,"a Reddit thread in /r/sveltejs"),Z.forEach(n),r=$(N,`:
		`),t=w(N,"BLOCKQUOTE",{});var pt=g(t);o=w(pt,"UL",{});var V=g(o);i=w(V,"LI",{});var _t=g(i);f=$(_t,`an opt-in way to better scale components (this has been mentioned by the team - I'd love
					to construct Svelte components from data without the compiler! no idea how feasible that
					is. this could be a path for end users to "author" Svelte components without sandboxing)`),_t.forEach(n),_=J(V),c=w(V,"LI",{});var at=g(c);m=$(at,"iterators for "),E=w(at,"CODE",{});var dt=g(E);y=$(dt,"#each"),dt.forEach(n),I=$(at," or similar construct ("),A=w(at,"CODE",{});var bt=g(A);S=$(bt,"#iterate"),bt.forEach(n),a=$(at,`?) (it'd be
					really nice to render sets/maps/etc without waste)`),at.forEach(n),b=J(V),B=w(V,"LI",{});var vt=g(B);M=$(vt,"my two favorite RFCs are inline components and directive forwarding"),vt.forEach(n),P=J(V),j=w(V,"LI",{});var ct=g(j);U=$(ct,"shorthand style properties "),H=w(ct,"CODE",{});var wt=g(H);T=$(wt,"style:--some_css_var"),wt.forEach(n),z=$(ct,` (I don't care about using kebab-case
					specifically for CSS vars, I think this wasn't implemented because of that, but +1 for snake_case
					CSS vars)`),ct.forEach(n),tt=J(V),K=w(V,"LI",{});var gt=g(K);et=$(gt,`whitespace handling (inherited from HTML, so very unlikely to change I think), sometimes
					significant whitespace causes problems, and the fix makes the code much less readable,
					it's one of the only things I miss from JSX`),gt.forEach(n),X=J(V),Q=w(V,"LI",{});var kt=g(Q);st=$(kt,`I don't have specific suggestions but slots have some limitations that would be cool to
					see lifted - generally I suspect there's room for more stuff that's optimal on the happy
					path, but you can opt into advanced stuff that's slower but more powerful (although I know
					the team likes their best-of-all-worlds designs!)`),kt.forEach(n),lt=J(V),W=w(V,"LI",{});var mt=g(W);rt=$(mt,"the syntax to pass CSS vars directly to components breaks things like "),it=w(mt,"CODE",{});var yt=g(it);ht=$(yt,":last-child"),yt.forEach(n),$t=$(mt," and other selectors, I think it may be an intractable problem tho"),mt.forEach(n),V.forEach(n),pt.forEach(n),this.h()},h(){k(l,"href","https://np.reddit.com/r/sveltejs/comments/10iud65/comment/j5hh1wi/")},m(N,Z){p(N,e,Z),p(N,l,Z),u(l,s),p(N,r,Z),p(N,t,Z),u(t,o),u(o,i),u(i,f),u(o,_),u(o,c),u(c,m),u(c,E),u(E,y),u(c,I),u(c,A),u(A,S),u(c,a),u(o,b),u(o,B),u(B,M),u(o,P),u(o,j),u(j,U),u(j,H),u(H,T),u(j,z),u(o,tt),u(o,K),u(K,et),u(o,X),u(o,Q),u(Q,st),u(o,lt),u(o,W),u(W,rt),u(W,it),u(it,ht),u(W,$t)},p:x,d(N){N&&n(e),N&&n(l),N&&n(r),N&&n(t)}}}function Pt(d){let e,l;return e=new G({props:{$$slots:{default:[xt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Tt(d){let e,l,s,r,t,o,i,f,_;return{c(){e=h("added the "),l=v("code"),s=h("Board"),r=h(` view to Felt - it's like a chat room but upside-down, so the input
		is at the top and content flows downward, replies are nested, and the newest posts and replies
		appear at the top:
		`),t=v("a"),o=h("github.com/feltcoop/felt-server/pull/663"),i=D(),f=v("img"),this.h()},l(c){e=$(c,"added the "),l=w(c,"CODE",{});var m=g(l);s=$(m,"Board"),m.forEach(n),r=$(c,` view to Felt - it's like a chat room but upside-down, so the input
		is at the top and content flows downward, replies are nested, and the newest posts and replies
		appear at the top:
		`),t=w(c,"A",{href:!0});var E=g(t);o=$(E,"github.com/feltcoop/felt-server/pull/663"),E.forEach(n),i=J(c),f=w(c,"IMG",{src:!0,alt:!0}),this.h()},h(){k(t,"href","https://github.com/feltcoop/felt-server/pull/663"),ut(f.src,_=Ct+"/images/felt-board.webp")||k(f,"src",_),k(f,"alt","a screenshot of the board")},m(c,m){p(c,e,m),p(c,l,m),u(l,s),p(c,r,m),p(c,t,m),u(t,o),p(c,i,m),p(c,f,m)},p:x,d(c){c&&n(e),c&&n(l),c&&n(r),c&&n(t),c&&n(i),c&&n(f)}}}function Nt(d){let e,l;return e=new G({props:{$$slots:{default:[Tt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Vt(d){let e,l,s;return{c(){e=h("published a repo with setup instructions and resources for my dev environment: "),l=v("a"),s=h("github.com/ryanatkn/setup"),this.h()},l(r){e=$(r,"published a repo with setup instructions and resources for my dev environment: "),l=w(r,"A",{href:!0});var t=g(l);s=$(t,"github.com/ryanatkn/setup"),t.forEach(n),this.h()},h(){k(l,"href","https://github.com/ryanatkn/setup")},m(r,t){p(r,e,t),p(r,l,t),u(l,s)},p:x,d(r){r&&n(e),r&&n(l)}}}function Gt(d){let e,l,s;return{c(){e=h("merged a pull request with a change that was suggested by an AI for the first time: "),l=v("a"),s=h("github.com/ryanatkn/setup/pull/2"),this.h()},l(r){e=$(r,"merged a pull request with a change that was suggested by an AI for the first time: "),l=w(r,"A",{href:!0});var t=g(l);s=$(t,"github.com/ryanatkn/setup/pull/2"),t.forEach(n),this.h()},h(){k(l,"href","https://github.com/ryanatkn/setup/pull/2")},m(r,t){p(r,e,t),p(r,l,t),u(l,s)},p:x,d(r){r&&n(e),r&&n(l)}}}function Ut(d){let e,l,s,r;return e=new G({props:{$$slots:{default:[Vt]},$$scope:{ctx:d}}}),s=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment),l=D(),O(s.$$.fragment)},l(t){R(e.$$.fragment,t),l=J(t),R(s.$$.fragment,t)},m(t,o){q(e,t,o),p(t,l,o),q(s,t,o),r=!0},p(t,o){const i={};o&1&&(i.$$scope={dirty:o,ctx:t}),e.$set(i);const f={};o&1&&(f.$$scope={dirty:o,ctx:t}),s.$set(f)},i(t){r||(L(e.$$.fragment,t),L(s.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),C(s.$$.fragment,t),r=!1},d(t){F(e,t),t&&n(l),F(s,t)}}}function zt(d){let e,l,s,r,t,o,i,f,_,c,m,E,y,I,A,S;return{c(){e=h("fixed a rendering performance problem in "),l=v("a"),s=h("Soggy Planet"),r=h(`
		in `),t=v("a"),o=h("cosmicplayground"),i=h(`, closing
		`),f=v("a"),_=h("this issue"),c=h(`
		with `),m=v("a"),E=h("this PR"),y=h(` - the fix had me
		write
		`),I=v("a"),A=h("my first WebGL shader!"),S=h(` The code isn't great but it works, and I'll be able to use this pattern for more performance improvements
		and new rendering capabilities`),this.h()},l(a){e=$(a,"fixed a rendering performance problem in "),l=w(a,"A",{href:!0});var b=g(l);s=$(b,"Soggy Planet"),b.forEach(n),r=$(a,`
		in `),t=w(a,"A",{href:!0});var B=g(t);o=$(B,"cosmicplayground"),B.forEach(n),i=$(a,`, closing
		`),f=w(a,"A",{href:!0});var M=g(f);_=$(M,"this issue"),M.forEach(n),c=$(a,`
		with `),m=w(a,"A",{href:!0});var P=g(m);E=$(P,"this PR"),P.forEach(n),y=$(a,` - the fix had me
		write
		`),I=w(a,"A",{href:!0});var j=g(I);A=$(j,"my first WebGL shader!"),j.forEach(n),S=$(a,` The code isn't great but it works, and I'll be able to use this pattern for more performance improvements
		and new rendering capabilities`),this.h()},h(){k(l,"href","https://www.cosmicplayground.org/soggy-planet"),k(t,"href","https://www.cosmicplayground.org/"),k(f,"href","https://github.com/ryanatkn/cosmicplayground/issues/56"),k(m,"href","https://github.com/ryanatkn/cosmicplayground/pull/65"),k(I,"href","https://github.com/ryanatkn/cosmicplayground/blob/a8af730bdb7fe4efe3c985ea96db2c7074e0bec9/src/lib/app/EarthViewerPixi.svelte#L177")},m(a,b){p(a,e,b),p(a,l,b),u(l,s),p(a,r,b),p(a,t,b),u(t,o),p(a,i,b),p(a,f,b),u(f,_),p(a,c,b),p(a,m,b),u(m,E),p(a,y,b),p(a,I,b),u(I,A),p(a,S,b)},p:x,d(a){a&&n(e),a&&n(l),a&&n(r),a&&n(t),a&&n(i),a&&n(f),a&&n(c),a&&n(m),a&&n(y),a&&n(I),a&&n(S)}}}function Kt(d){let e,l;return e=new G({props:{$$slots:{default:[zt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Wt(d){let e,l,s,r,t,o,i,f,_,c,m,E;return{c(){e=h("created "),l=v("a"),s=h("Svelte store study"),r=h(` for
		assessing several `),t=v("a"),o=h("Svelte stores"),i=h(` 🧡
		`),f=v("a"),_=h("source"),c=h(`,
		`),m=v("a"),E=h("@ryanatkn/svelte-store-study#1"),this.h()},l(y){e=$(y,"created "),l=w(y,"A",{href:!0});var I=g(l);s=$(I,"Svelte store study"),I.forEach(n),r=$(y,` for
		assessing several `),t=w(y,"A",{href:!0});var A=g(t);o=$(A,"Svelte stores"),A.forEach(n),i=$(y,` 🧡
		`),f=w(y,"A",{href:!0});var S=g(f);_=$(S,"source"),S.forEach(n),c=$(y,`,
		`),m=w(y,"A",{href:!0});var a=g(m);E=$(a,"@ryanatkn/svelte-store-study#1"),a.forEach(n),this.h()},h(){k(l,"href","https://ryanatkn.github.io/svelte-store-study"),k(t,"href","https://svelte.dev/docs#run-time-svelte-store"),k(f,"href","https://github.com/ryanatkn/svelte-store-study"),k(m,"href","https://github.com/ryanatkn/svelte-store-study/pull/1")},m(y,I){p(y,e,I),p(y,l,I),u(l,s),p(y,r,I),p(y,t,I),u(t,o),p(y,i,I),p(y,f,I),u(f,_),p(y,c,I),p(y,m,I),u(m,E)},p:x,d(y){y&&n(e),y&&n(l),y&&n(r),y&&n(t),y&&n(i),y&&n(f),y&&n(c),y&&n(m)}}}function Xt(d){let e,l;return e=new G({props:{$$slots:{default:[Wt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function Qt(d){let e,l,s,r;return{c(){e=h("designed and implemented this website's bulletins ("),l=v("a"),s=h("@ryanatkn/log#1"),r=h(")"),this.h()},l(t){e=$(t,"designed and implemented this website's bulletins ("),l=w(t,"A",{href:!0});var o=g(l);s=$(o,"@ryanatkn/log#1"),o.forEach(n),r=$(t,")"),this.h()},h(){k(l,"href","https://github.com/ryanatkn/log/pull/1")},m(t,o){p(t,e,o),p(t,l,o),u(l,s),p(t,r,o)},p:x,d(t){t&&n(e),t&&n(l),t&&n(r)}}}function Yt(d){let e,l,s;return{c(){e=h("published the first three bulletins here at "),l=v("a"),s=h("log.ryanatkn.com"),this.h()},l(r){e=$(r,"published the first three bulletins here at "),l=w(r,"A",{href:!0});var t=g(l);s=$(t,"log.ryanatkn.com"),t.forEach(n),this.h()},h(){k(l,"href","https://log.ryanatkn.com")},m(r,t){p(r,e,t),p(r,l,t),u(l,s)},p:x,d(r){r&&n(e),r&&n(l)}}}function Zt(d){let e,l,s,r;return e=new G({props:{$$slots:{default:[Qt]},$$scope:{ctx:d}}}),s=new G({props:{$$slots:{default:[Yt]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment),l=D(),O(s.$$.fragment)},l(t){R(e.$$.fragment,t),l=J(t),R(s.$$.fragment,t)},m(t,o){q(e,t,o),p(t,l,o),q(s,t,o),r=!0},p(t,o){const i={};o&1&&(i.$$scope={dirty:o,ctx:t}),e.$set(i);const f={};o&1&&(f.$$scope={dirty:o,ctx:t}),s.$set(f)},i(t){r||(L(e.$$.fragment,t),L(s.$$.fragment,t),r=!0)},o(t){C(e.$$.fragment,t),C(s.$$.fragment,t),r=!1},d(t){F(e,t),t&&n(l),F(s,t)}}}function te(d){let e,l,s,r,t,o,i;return{c(){e=h("created this project to log my doings ("),l=v("a"),s=h("log.ryanatkn.com"),r=h(`,
		`),t=v("a"),o=h("source"),i=h(")"),this.h()},l(f){e=$(f,"created this project to log my doings ("),l=w(f,"A",{href:!0});var _=g(l);s=$(_,"log.ryanatkn.com"),_.forEach(n),r=$(f,`,
		`),t=w(f,"A",{href:!0});var c=g(t);o=$(c,"source"),c.forEach(n),i=$(f,")"),this.h()},h(){k(l,"href","https://log.ryanatkn.com"),k(t,"href","https://github.com/ryanatkn/log")},m(f,_){p(f,e,_),p(f,l,_),u(l,s),p(f,r,_),p(f,t,_),u(t,o),p(f,i,_)},p:x,d(f){f&&n(e),f&&n(l),f&&n(r),f&&n(t),f&&n(i)}}}function ee(d){let e,l,s,r,t,o,i,f,_,c,m,E,y,I,A,S;return{c(){e=h("started work on an ear training game named Earworm ("),l=v("a"),s=h("ryanatkn.github.io/earworm"),r=h(", "),t=v("a"),o=h("source"),i=h(`), porting code from
		`),f=v("a"),_=h("an old prototype"),c=h(`
		which was a followup design to my simple ear training game
		`),m=v("a"),E=h("Ear Sharpener"),y=h(" ("),I=v("a"),A=h("source"),S=h(")"),this.h()},l(a){e=$(a,"started work on an ear training game named Earworm ("),l=w(a,"A",{href:!0});var b=g(l);s=$(b,"ryanatkn.github.io/earworm"),b.forEach(n),r=$(a,", "),t=w(a,"A",{href:!0});var B=g(t);o=$(B,"source"),B.forEach(n),i=$(a,`), porting code from
		`),f=w(a,"A",{href:!0});var M=g(f);_=$(M,"an old prototype"),M.forEach(n),c=$(a,`
		which was a followup design to my simple ear training game
		`),m=w(a,"A",{href:!0});var P=g(m);E=$(P,"Ear Sharpener"),P.forEach(n),y=$(a," ("),I=w(a,"A",{href:!0});var j=g(I);A=$(j,"source"),j.forEach(n),S=$(a,")"),this.h()},h(){k(l,"href","https://ryanatkn.github.io/earworm"),k(t,"href","https://github.com/ryanatkn/earworm"),k(f,"href","https://github.com/ryanatkn/cosmicplayground/commit/331503280c52408f0bbe49ea745b182c5b6ccb67"),k(m,"href","https://ryanatkn.github.io/ear-sharpener"),k(I,"href","https://github.com/ryanatkn/ear-sharpener")},m(a,b){p(a,e,b),p(a,l,b),u(l,s),p(a,r,b),p(a,t,b),u(t,o),p(a,i,b),p(a,f,b),u(f,_),p(a,c,b),p(a,m,b),u(m,E),p(a,y,b),p(a,I,b),u(I,A),p(a,S,b)},p:x,d(a){a&&n(e),a&&n(l),a&&n(r),a&&n(t),a&&n(i),a&&n(f),a&&n(c),a&&n(m),a&&n(y),a&&n(I),a&&n(S)}}}function se(d){let e,l,s,r,t,o,i;return{c(){e=h("improved the ability to create a "),l=v("a"),s=h("Felt"),r=h(`
		community and its initial objects from JSON data (`),t=v("a"),o=h("@feltcoop/felt-server#632"),i=h(")"),this.h()},l(f){e=$(f,"improved the ability to create a "),l=w(f,"A",{href:!0});var _=g(l);s=$(_,"Felt"),_.forEach(n),r=$(f,`
		community and its initial objects from JSON data (`),t=w(f,"A",{href:!0});var c=g(t);o=$(c,"@feltcoop/felt-server#632"),c.forEach(n),i=$(f,")"),this.h()},h(){k(l,"href","https://github.com/feltcoop/felt-server"),k(t,"href","https://github.com/feltcoop/felt-server/pull/643")},m(f,_){p(f,e,_),p(f,l,_),u(l,s),p(f,r,_),p(f,t,_),u(t,o),p(f,i,_)},p:x,d(f){f&&n(e),f&&n(l),f&&n(r),f&&n(t),f&&n(i)}}}function le(d){let e,l,s,r,t,o;return e=new G({props:{$$slots:{default:[te]},$$scope:{ctx:d}}}),s=new G({props:{$$slots:{default:[ee]},$$scope:{ctx:d}}}),t=new G({props:{$$slots:{default:[se]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment),l=D(),O(s.$$.fragment),r=D(),O(t.$$.fragment)},l(i){R(e.$$.fragment,i),l=J(i),R(s.$$.fragment,i),r=J(i),R(t.$$.fragment,i)},m(i,f){q(e,i,f),p(i,l,f),q(s,i,f),p(i,r,f),q(t,i,f),o=!0},p(i,f){const _={};f&1&&(_.$$scope={dirty:f,ctx:i}),e.$set(_);const c={};f&1&&(c.$$scope={dirty:f,ctx:i}),s.$set(c);const m={};f&1&&(m.$$scope={dirty:f,ctx:i}),t.$set(m)},i(i){o||(L(e.$$.fragment,i),L(s.$$.fragment,i),L(t.$$.fragment,i),o=!0)},o(i){C(e.$$.fragment,i),C(s.$$.fragment,i),C(t.$$.fragment,i),o=!1},d(i){F(e,i),i&&n(l),F(s,i),i&&n(r),F(t,i)}}}function re(d){let e,l,s,r,t,o,i,f,_,c;return{c(){e=h(`created a long-term project named twc (pronounced "twick") that's the
		`),l=v("a"),s=h("thick"),r=h(" web client I want to be using ("),t=v("a"),o=h("twc.land"),i=h(", "),f=v("a"),_=h("source"),c=h(")"),this.h()},l(m){e=$(m,`created a long-term project named twc (pronounced "twick") that's the
		`),l=w(m,"A",{href:!0});var E=g(l);s=$(E,"thick"),E.forEach(n),r=$(m," web client I want to be using ("),t=w(m,"A",{href:!0});var y=g(t);o=$(y,"twc.land"),y.forEach(n),i=$(m,", "),f=w(m,"A",{href:!0});var I=g(f);_=$(I,"source"),I.forEach(n),c=$(m,")"),this.h()},h(){k(l,"href","https://wikipedia.org/wiki/Rich_client"),k(t,"href","https://www.twc.land"),k(f,"href","https://github.com/ryanatkn/twc")},m(m,E){p(m,e,E),p(m,l,E),u(l,s),p(m,r,E),p(m,t,E),u(t,o),p(m,i,E),p(m,f,E),u(f,_),p(m,c,E)},p:x,d(m){m&&n(e),m&&n(l),m&&n(r),m&&n(t),m&&n(i),m&&n(f),m&&n(c)}}}function ae(d){let e,l;return e=new G({props:{$$slots:{default:[re]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,r){q(e,s,r),l=!0},p(s,r){const t={};r&1&&(t.$$scope={dirty:r,ctx:s}),e.$set(t)},i(s){l||(L(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){F(e,s)}}}function ne(d){let e,l,s,r,t,o,i,f,_,c,m,E,y,I,A,S;return e=new Y({props:{date:"Jan 22 2023",$$slots:{default:[Pt]},$$scope:{ctx:d}}}),s=new Y({props:{date:"Jan 17 2023",$$slots:{default:[Nt]},$$scope:{ctx:d}}}),t=new Y({props:{date:"Jan 11 2023",$$slots:{default:[Ut]},$$scope:{ctx:d}}}),i=new Y({props:{date:"Jan 8 2023",$$slots:{default:[Kt]},$$scope:{ctx:d}}}),_=new Y({props:{date:"Jan 3 2023",$$slots:{default:[Xt]},$$scope:{ctx:d}}}),m=new Y({props:{date:"Jan 2 2023",$$slots:{default:[Zt]},$$scope:{ctx:d}}}),y=new Y({props:{date:"Jan 1 2023",$$slots:{default:[le]},$$scope:{ctx:d}}}),A=new Y({props:{date:"Dec 30 2022",$$slots:{default:[ae]},$$scope:{ctx:d}}}),{c(){O(e.$$.fragment),l=D(),O(s.$$.fragment),r=D(),O(t.$$.fragment),o=D(),O(i.$$.fragment),f=D(),O(_.$$.fragment),c=D(),O(m.$$.fragment),E=D(),O(y.$$.fragment),I=D(),O(A.$$.fragment)},l(a){R(e.$$.fragment,a),l=J(a),R(s.$$.fragment,a),r=J(a),R(t.$$.fragment,a),o=J(a),R(i.$$.fragment,a),f=J(a),R(_.$$.fragment,a),c=J(a),R(m.$$.fragment,a),E=J(a),R(y.$$.fragment,a),I=J(a),R(A.$$.fragment,a)},m(a,b){q(e,a,b),p(a,l,b),q(s,a,b),p(a,r,b),q(t,a,b),p(a,o,b),q(i,a,b),p(a,f,b),q(_,a,b),p(a,c,b),q(m,a,b),p(a,E,b),q(y,a,b),p(a,I,b),q(A,a,b),S=!0},p(a,[b]){const B={};b&1&&(B.$$scope={dirty:b,ctx:a}),e.$set(B);const M={};b&1&&(M.$$scope={dirty:b,ctx:a}),s.$set(M);const P={};b&1&&(P.$$scope={dirty:b,ctx:a}),t.$set(P);const j={};b&1&&(j.$$scope={dirty:b,ctx:a}),i.$set(j);const U={};b&1&&(U.$$scope={dirty:b,ctx:a}),_.$set(U);const H={};b&1&&(H.$$scope={dirty:b,ctx:a}),m.$set(H);const T={};b&1&&(T.$$scope={dirty:b,ctx:a}),y.$set(T);const z={};b&1&&(z.$$scope={dirty:b,ctx:a}),A.$set(z)},i(a){S||(L(e.$$.fragment,a),L(s.$$.fragment,a),L(t.$$.fragment,a),L(i.$$.fragment,a),L(_.$$.fragment,a),L(m.$$.fragment,a),L(y.$$.fragment,a),L(A.$$.fragment,a),S=!0)},o(a){C(e.$$.fragment,a),C(s.$$.fragment,a),C(t.$$.fragment,a),C(i.$$.fragment,a),C(_.$$.fragment,a),C(m.$$.fragment,a),C(y.$$.fragment,a),C(A.$$.fragment,a),S=!1},d(a){F(e,a),a&&n(l),F(s,a),a&&n(r),F(t,a),a&&n(o),F(i,a),a&&n(f),F(_,a),a&&n(c),F(m,a),a&&n(E),F(y,a),a&&n(I),F(A,a)}}}class oe extends nt{constructor(e){super(),ot(this,e,null,ne,ft,{})}}function fe(d){let e,l,s,r,t,o,i,f,_,c,m,E,y,I,A,S,a,b,B,M,P,j,U;return l=new Jt({}),M=new oe({}),j=new qt({}),{c(){e=v("main"),O(l.$$.fragment),s=D(),r=v("div"),t=v("div"),o=v("header"),i=v("h1"),f=h("log.ryanatkn.com"),_=D(),c=v("menu"),m=v("li"),E=v("a"),y=h("home"),I=D(),A=v("li"),S=v("a"),a=h("source"),b=D(),B=v("section"),O(M.$$.fragment),P=D(),O(j.$$.fragment),this.h()},l(H){e=w(H,"MAIN",{class:!0});var T=g(e);R(l.$$.fragment,T),s=J(T),r=w(T,"DIV",{class:!0});var z=g(r);t=w(z,"DIV",{class:!0});var tt=g(t);o=w(tt,"HEADER",{class:!0});var K=g(o);i=w(K,"H1",{class:!0});var et=g(i);f=$(et,"log.ryanatkn.com"),et.forEach(n),_=J(K),c=w(K,"MENU",{class:!0});var X=g(c);m=w(X,"LI",{class:!0});var Q=g(m);E=w(Q,"A",{href:!0});var st=g(E);y=$(st,"home"),st.forEach(n),Q.forEach(n),I=J(X),A=w(X,"LI",{class:!0});var lt=g(A);S=w(lt,"A",{href:!0});var W=g(S);a=$(W,"source"),W.forEach(n),lt.forEach(n),X.forEach(n),K.forEach(n),tt.forEach(n),b=J(z),B=w(z,"SECTION",{});var rt=g(B);R(M.$$.fragment,rt),rt.forEach(n),z.forEach(n),P=J(T),R(j.$$.fragment,T),T.forEach(n),this.h()},h(){k(i,"class","svelte-1k0xrh6"),k(E,"href","https://www.ryanatkn.com/"),k(m,"class","svelte-1k0xrh6"),k(S,"href","https://github.com/ryanatkn/log"),k(A,"class","svelte-1k0xrh6"),k(c,"class","svelte-1k0xrh6"),k(o,"class","panel svelte-1k0xrh6"),k(t,"class","centered-hz"),k(r,"class","column svelte-1k0xrh6"),k(e,"class","svelte-1k0xrh6")},m(H,T){p(H,e,T),q(l,e,null),u(e,s),u(e,r),u(r,t),u(t,o),u(o,i),u(i,f),u(o,_),u(o,c),u(c,m),u(m,E),u(E,y),u(c,I),u(c,A),u(A,S),u(S,a),u(r,b),u(r,B),q(M,B,null),u(e,P),q(j,e,null),U=!0},p:x,i(H){U||(L(l.$$.fragment,H),L(M.$$.fragment,H),L(j.$$.fragment,H),U=!0)},o(H){C(l.$$.fragment,H),C(M.$$.fragment,H),C(j.$$.fragment,H),U=!1},d(H){H&&n(e),F(l),F(M),F(j)}}}class ue extends nt{constructor(e){super(),ot(this,e,null,fe,ft,{})}}export{ue as default};
