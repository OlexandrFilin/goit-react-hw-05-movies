"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{355:function(e,t,r){r.d(t,{A9:function(){return d},Km:function(){return f},Pd:function(){return l},XS:function(){return u},jS:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o="39d6833137272dd1d732fb13910a9756",i="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o}),a="".concat(i).concat("/trending/all/day","?").concat(n.toString()),e.next=4,s.Z.get(a).catch((function(e){throw new Error(e.message)}));case 4:if(u=e.sent){e.next=7;break}throw new Error(u.status);case 7:return e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"/movie/").concat(t,"?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1'&api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o),e.next=3,s.Z.get(r).catch((function(e){throw new Error(e.message)}));case 3:if(n=e.sent){e.next=6;break}throw new Error(n.status);case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},461:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n,a,c,s=r(433),o=r(861),i=r(439),u=r(757),p=r.n(u),f=r(355),l=r(791),d=r(168),h=r(867),x=r(87),v=h.ZP.div(n||(n=(0,d.Z)(["\ndisplay:flex; \ncolumn-gap: 26px;\n "]))),w=(0,h.ZP)(x.rU)(a||(a=(0,d.Z)(["\n display: block;\n margin-bottom: 15px;\n margin-left: 15px;\n font-size: 20px;\n"]))),m=h.ZP.ul(c||(c=(0,d.Z)(["\npadding-left: 102px;\npadding-top: 10px;\nborder: 1px solid black;\npadding-bottom: 10px;\nfont-size:20px;\n"]))),g=r(689),k=r(184),Z=function(){var e,t=(0,g.UO)().movieId,r=(0,l.useState)(""),n=(0,i.Z)(r,2),a=n[0],c=n[1],u=(0,l.useState)(""),d=(0,i.Z)(u,2),h=d[0],Z=d[1],b=(0,l.useState)(0),j=(0,i.Z)(b,2),y=j[0],S=j[1],_=(0,l.useState)(""),E=(0,i.Z)(_,2),U=E[0],C=E[1],P=(0,l.useState)(""),R=(0,i.Z)(P,2),q=R[0],z=R[1],A=(0,l.useState)([]),F=(0,i.Z)(A,2),G=F[0],M=F[1],O=(0,g.TH)(),T=(0,l.useRef)(null===(e=O.state)||void 0===e?void 0:e.from);(0,l.useEffect)((function(){if(!a){var e=function(){var e=(0,o.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.jS)(t).then((function(e){c(e.poster_path),Z(e.title),C(e.release_date),z(e.overview),S(e.popularity),M((0,s.Z)(e.genres))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error",e.t0);case 8:return e.prev=8,e.finish(8);case 10:case"end":return e.stop()}}),e,null,[[0,5,8,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[a,G,t]);var D,H;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(w,{to:T.current,children:"Go back"}),(0,k.jsxs)(v,{children:[(0,k.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",alt:"isCargMovie.title"}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{children:"".concat(h,"  ").concat((H=U,new Date(H).getUTCFullYear()))}),(0,k.jsx)("p",{children:"User score: ".concat(Math.ceil(y),"%")}),(0,k.jsx)("h3",{children:"Owerview"}),(0,k.jsx)("p",{children:q}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("p",{children:(D=G,D.reduce((function(e,t){var r=null===t||void 0===t?void 0:t.name;return r?e+" "+r:e}),""))})]})]}),(0,k.jsxs)(m,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(x.rU,{to:"cast",children:" Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(x.rU,{to:"reviews",children:" Reviews"})})]}),(0,k.jsx)(l.Suspense,{children:(0,k.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=461.d9ae06c5.chunk.js.map