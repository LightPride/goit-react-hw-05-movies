"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[338],{9396:function(n,e,r){r.d(e,{Df:function(){return s},Pg:function(){return u},tx:function(){return f},zi:function(){return h},zv:function(){return p}});var t=r(5861),o=r(4687),c=r.n(o),a="https://api.themoviedb.org/",i="ec3ca0e4403710b7fc1497b1dbf32c54",s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"3/trending/all/day?api_key=").concat(i,"&language=en-US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",e.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"3/movie/").concat(e,"?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"3/movie/").concat(e,"/credits?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"3/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},338:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,o,c,a,i,s,u=r(5861),p=r(9439),f=r(4687),h=r.n(f),l=r(7689),d=r(1087),v=r(2791),x=r(9396),w=r(168),m=r(5706),g=m.Z.img(t||(t=(0,w.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),k=m.Z.div(o||(o=(0,w.Z)(["\n  width: 200px;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n"]))),j=(0,m.Z)(d.rU)(c||(c=(0,w.Z)(["\n  text-decoration: none;\n  padding: 4px;\n  border: 2px solid black;\n  color: black;\n  border-radius: 5px;\n  background-color: azure;\n  &:hover {\n    color: gray;\n    border: 2px solid #3eac9c;\n  }\n"]))),b=m.Z.h1(a||(a=(0,w.Z)(["\n  margin-top: 10px;\n"]))),Z=m.Z.ul(i||(i=(0,w.Z)(["\n  display: flex;\n"]))),y=m.Z.li(s||(s=(0,w.Z)(["\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n"]))),_=r(184);function O(n){var e=n.movie;return(0,_.jsx)(_.Fragment,{children:e.poster_path?(0,_.jsx)(g,{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:e.title}):(0,_.jsx)(g,{src:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:e.title})})}var E=r(5305);function U(){var n,e,r=(0,v.useState)({}),t=(0,p.Z)(r,2),o=t[0],c=t[1],a=(0,v.useState)(!1),i=(0,p.Z)(a,2),s=i[0],f=i[1],w=(0,l.UO)(),m=(0,l.TH)(),g=(0,v.useRef)(null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),U=w.movieId;return(0,v.useEffect)((function(){f(!0);var n=function(){var n=(0,u.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Pg)(U);case 3:e=n.sent,f(!1),c(e),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[U]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{to:g.current,children:"Go back"}),(0,_.jsx)(k,{children:s?(0,_.jsx)(E.Z,{}):(0,_.jsx)(O,{movie:o})}),(0,_.jsx)(b,{children:o.title}),(0,_.jsxs)("p",{children:["Popularity:"," ",o.popularity?o.popularity:"No information found"]}),(0,_.jsxs)("p",{children:["Overview: ",o.overview?o.overview:"No information found"]}),o.genres&&(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{children:["Genres:",(0,_.jsx)(Z,{children:o.genres.map((function(n){var e=n.name,r=n.id;return(0,_.jsx)(y,{children:e},r)}))})]})}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(y,{children:(0,_.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,_.jsx)(y,{children:(0,_.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(v.Suspense,{fallback:(0,_.jsx)(E.Z,{}),children:(0,_.jsx)(l.j3,{})})]})}},5861:function(n,e,r){function t(n,e,r,t,o,c,a){try{var i=n[c](a),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=n.apply(e,r);function i(n){t(a,o,c,i,s,"next",n)}function s(n){t(a,o,c,i,s,"throw",n)}i(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=338.55c8633a.chunk.js.map