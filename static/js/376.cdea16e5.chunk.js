"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[376],{355:function(t,r,n){n.d(r,{A9:function(){return w},Km:function(){return f},Pd:function(){return h},XS:function(){return i},jS:function(){return p}});var e=n(861),a=n(757),c=n.n(a),o=n(243),u="39d6833137272dd1d732fb13910a9756",s="https://api.themoviedb.org/3",i=function(){var t=(0,e.Z)(c().mark((function t(r,n){var e,a,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams({api_key:u}),a="".concat(s).concat("/trending/all/day","?").concat(e.toString()),t.next=4,o.Z.get(a).catch((function(t){throw new Error(t.message)}));case 4:if(i=t.sent){t.next=7;break}throw new Error(i.status);case 7:return t.abrupt("return",i.data);case 8:case"end":return t.stop()}}),t)})));return function(r,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/movie/").concat(r,"?api_key=").concat(u),t.next=3,o.Z.get(n).catch((function(t){throw new Error(t.message)}));case 3:if(e=t.sent){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/search/movie?query=").concat(r,"&include_adult=false&language=en-US&page=1'&api_key=").concat(u),t.next=3,o.Z.get(n).catch((function(t){throw new Error(t.message)}));case 3:if(e=t.sent){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(u),t.next=3,o.Z.get(n).catch((function(t){throw new Error(t.message)}));case 3:if(e=t.sent){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),w=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(u),t.next=3,o.Z.get(n).catch((function(t){throw new Error(t.message)}));case 3:if(e=t.sent){t.next=6;break}throw new Error(e.status);case 6:return t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},376:function(t,r,n){n.r(r),n.d(r,{default:function(){return d}});var e,a=n(861),c=n(439),o=n(757),u=n.n(o),s=n(791),i=n(689),p=n(355),f=n(168),h=n(867).ZP.img(e||(e=(0,f.Z)(["\nwidth: 200px\n\n"]))),w=n(184),d=function(){var t=(0,s.useState)([]),r=(0,c.Z)(t,2),n=r[0],e=r[1],o=(0,i.UO)();(0,s.useEffect)((function(){if(0===n.length){var t=function(){var t=(0,a.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Pd)(o.movieId).then((function(t){e(t.cast)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("error",t.t0);case 8:return t.prev=8,t.finish(8);case 10:case"end":return t.stop()}}),t,null,[[0,5,8,10]])})));return function(){return t.apply(this,arguments)}}();t()}}),[o.movieId,n.length]);var f;return(0,w.jsx)("ul",{children:(f=n,f.map((function(t){var r=t.cast_id,n=t.profile_path,e=t.character;return(0,w.jsxs)("li",{children:["  ",(0,w.jsx)(h,{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",alt:t.name}),(0,w.jsx)("p",{children:t.name}),(0,w.jsx)("p",{children:"Character: ".concat(e)})]},r)})))})}}}]);
//# sourceMappingURL=376.cdea16e5.chunk.js.map