"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{355:function(e,t,r){r.d(t,{A9:function(){return l},Km:function(){return f},Pd:function(){return h},XS:function(){return i},jS:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o="39d6833137272dd1d732fb13910a9756",u="https://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o}),a="".concat(u).concat("/trending/all/day","?").concat(n.toString()),e.next=4,s.Z.get(a).catch((function(e){throw new Error(e.message)}));case 4:if(i=e.sent){e.next=7;break}throw new Error(i.status);case 7:return e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u,"/movie/").concat(t,"?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1'&api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},461:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n,a=r(433),c=r(861),s=r(439),o=r(757),u=r.n(o),i=r(355),p=r(791),f=r(168),h=r(867).ZP.div(n||(n=(0,f.Z)(["\ndisplay:flex; \ncolumn-gap: 26px;\n "]))),l=r(689),d=r(87),v=r(184),w=function(){var e,t=(0,l.UO)().movieId,r=(0,p.useState)(""),n=(0,s.Z)(r,2),o=n[0],f=n[1],w=(0,p.useState)(""),x=(0,s.Z)(w,2),m=x[0],g=x[1],k=(0,p.useState)(0),j=(0,s.Z)(k,2),Z=j[0],b=j[1],y=(0,p.useState)(""),S=(0,s.Z)(y,2),_=S[0],E=S[1],U=(0,p.useState)(""),C=(0,s.Z)(U,2),P=C[0],R=C[1],q=(0,p.useState)([]),A=(0,s.Z)(q,2),F=A[0],G=A[1],M=(0,l.TH)(),O=(0,p.useRef)(null===(e=M.state)||void 0===e?void 0:e.from);(0,p.useEffect)((function(){if(!o){var e=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.jS)(t).then((function(e){f(e.poster_path),g(e.title),E(e.release_date),R(e.overview),b(e.popularity),G((0,a.Z)(e.genres))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error",e.t0);case 8:return e.prev=8,e.finish(8);case 10:case"end":return e.stop()}}),e,null,[[0,5,8,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[o,F,t]);var T,D;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.rU,{to:O.current,children:"Go back"}),(0,v.jsxs)(h,{children:[(0,v.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w500".concat(o):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",alt:"isCargMovie.title"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"".concat(m,"  ").concat((D=_,new Date(D).getUTCFullYear()))}),(0,v.jsx)("p",{children:"User score: ".concat(Math.ceil(Z),"%")}),(0,v.jsx)("h3",{children:"Owerview"}),(0,v.jsx)("p",{children:P}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:(T=F,T.reduce((function(e,t){var r=null===t||void 0===t?void 0:t.name;return r?e+" "+r:e}),""))})]})]}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"cast",children:" Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"reviews",children:" Reviews"})})]}),(0,v.jsx)(p.Suspense,{children:(0,v.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=461.42e13308.chunk.js.map