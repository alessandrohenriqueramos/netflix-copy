(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(17),s=n.n(r),i=n(18),o=n(2),l=n.p+"static/media/netflix-logo-150x79.8496f04c.png",u=(n(25),function(){return Object(a.jsxs)("div",{className:"container-Welcome",children:[Object(a.jsx)("header",{className:"header-Welcome",children:Object(a.jsxs)("nav",{className:"nav-Welcome",children:[Object(a.jsx)("div",{className:"nav-WelcomeLogo",children:Object(a.jsx)("img",{src:l,alt:"Netflix"})}),Object(a.jsx)("div",{className:"nav-WelcomeItems",children:Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"netflixcopy.vercel.app/browse",rel:"next",children:"Entrar"})})})})]})}),Object(a.jsx)("section",{className:"section-Welcome",children:Object(a.jsxs)("h1",{children:["Filmes, s\xe9ries e muito mais. ",Object(a.jsx)("br",{})," Sem limites."]})}),Object(a.jsxs)("footer",{className:"footer-Welcome",children:[Object(a.jsxs)("p",{children:["N\xe3o possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades ",Object(a.jsx)("br",{})," na cria\xe7\xe3o de uma aplica\xe7\xe3o da web e nunca ser\xe1 usada para fins comerciais."]}),Object(a.jsxs)("p",{children:["Veja o c\xf3digo-fonte no meu ",Object(a.jsx)("a",{href:"https://github.com/alessandrohenriqueramos/netflix-copy",rel:"noreferrer",target:"_blank",children:"GitHub"})," ",Object(a.jsx)("i",{className:"fab fa-github"})]}),Object(a.jsx)("p",{children:"Desenvolvido por Alessandro Henrique Ramos."})]})]})}),d=n(7),j=n.n(d),m=n(9),h=n(11),b="baf64e5536147c8cb581f1f3ca166ff1",f=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={getHomeList:function(){var e=Object(m.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(b));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,f("/trending/all/week?language=pt-BR&api_key=".concat(b));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,f("/movie/top_rated?language=pt-BR&api_key=".concat(b));case 10:return e.t4=e.sent,e.t5={slug:"tolerated",title:"Em Alta",items:e.t4},e.next=14,f("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(b));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,f("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(b));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,f("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(b));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,f("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(b));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,f("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(b));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(m.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}return e.next=3,f("/".concat(n,"/").concat(t,"?language=pt-BR&api_key=").concat(b));case 3:a=e.sent;case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},x=n.p+"static/media/netflix-logo-93x49.13b1bf40.png",g=(n(27),function(e){var t=Object(c.useState)(!1),n=Object(h.a)(t,2),r=n[0],s=n[1];Object(c.useEffect)((function(){var e=function(){window.scrollY>10?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var i={backgroundColor:r&&"#141414"},o=e.featured.overview;return o.length>200&&(o=o.substring(0,200)+"..."),Object(a.jsx)("div",{className:"container-HeaderVertical",children:Object(a.jsxs)("div",{className:"container-HeaderHorizontal",children:[Object(a.jsxs)("header",{className:"container-HeaderItems",children:[Object(a.jsxs)("nav",{style:i,className:"container-HeaderNav",children:[Object(a.jsx)("div",{className:"container-HeaderNavLogo",children:Object(a.jsx)("a",{href:"/browse",children:Object(a.jsx)("img",{src:x,alt:"logo"})})}),Object(a.jsx)("div",{className:"container-HeaderNavItems",children:Object(a.jsx)("ul",{children:Object(a.jsx)("li",{})})})]}),Object(a.jsx)("h1",{children:e.featured.original_name})]}),Object(a.jsx)("section",{className:"container-SectionOverview",children:Object(a.jsx)("p",{children:o})}),Object(a.jsxs)("section",{className:"container-SectionButtons",children:[Object(a.jsxs)("a",{className:"watch",href:e.featured.homepage,children:[Object(a.jsx)("i",{className:"fas fa-play"})," Assistir"]}),Object(a.jsxs)("a",{className:"plus",href:e.featured.homepage,children:[Object(a.jsx)("i",{className:"fas fa-info-circle"})," Mais informa\xe7\xf5es"]})]})]})})}),v=Object(c.memo)(g),O=(n(28),function(e){return e.movie.map((function(e,t){return Object(a.jsxs)("div",{className:"container-listItem",children:[Object(a.jsx)("header",{className:"movieTitle",children:Object(a.jsx)("h1",{children:e.title})}),Object(a.jsxs)("section",{className:"movieChevron",children:[Object(a.jsx)("div",{className:"chevronLeft",children:Object(a.jsx)("i",{className:"fas fa-chevron-left",onClick:function(){return function(e){var t=document.getElementById("movieList-".concat(e)),n=t.currentStyle||window.getComputedStyle(t),a=parseInt(n.marginLeft)+Math.round(window.innerWidth/2);a>0&&(a=0),t.style.marginLeft="".concat(a,"px")}(t)}})}),Object(a.jsx)("div",{className:"chevronRight",children:Object(a.jsx)("i",{className:"fas fa-chevron-right",onClick:function(){return function(e,t){var n=document.getElementById("movieList-".concat(t)),a=n.currentStyle||window.getComputedStyle(n),c=parseInt(a.marginLeft)-Math.round(window.innerWidth/2),r=150*e.results.length;window.innerWidth-r>c&&(c=window.innerWidth-r-60),n.style.marginLeft="".concat(c,"px")}(e.items,t)}})})]}),Object(a.jsx)("section",{className:"movieArea",children:Object(a.jsx)("div",{className:"movieList",id:"movieList-".concat(t),children:e.items.results.length>0&&e.items.results.map((function(e,t){return Object(a.jsx)("div",{className:"movieItem",children:Object(a.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.original_title})},t)}))})})]},t)}))}),w=(n(29),function(e){var t={backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e.featured.backdrop_path,")"),backgroundSize:"cover",backgroundPosition:"center"};return Object(a.jsxs)("div",{className:"container-BrowsePage",children:[Object(a.jsx)("header",{style:t,className:"container-BrowsePageHeader",children:Object(a.jsx)(v,{featured:e.featured})}),Object(a.jsx)("section",{className:"container-BrowsePageSection",children:Object(a.jsx)(O,{movie:e.movie})}),Object(a.jsxs)("footer",{className:"container-BrowsePageFooter",children:[Object(a.jsxs)("p",{children:["N\xe3o possuo a marca Netflix e portanto este site foi criado apenas para treinar minhas habilidades ",Object(a.jsx)("br",{})," na cria\xe7\xe3o de uma aplica\xe7\xe3o da web e nunca ser\xe1 usada para fins comerciais."]}),Object(a.jsxs)("p",{children:["Veja o c\xf3digo-fonte no meu ",Object(a.jsx)("a",{href:"https://github.com/alessandrohenriqueramos/netflix-copy",rel:"noreferrer",target:"_blank",children:"GitHub"})," ",Object(a.jsx)("i",{className:"fab fa-github"})]}),Object(a.jsx)("p",{children:"Desenvolvido por Alessandro Henrique Ramos."})]})]})}),N=Object(c.memo)(w),y=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(h.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(m.a)(j.a.mark((function e(){var t,n,a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getHomeList();case 2:return t=e.sent,r(t),n=t.filter((function(e){return"originals"===e.slug})),a=Math.floor(Math.random()*(n[0].items.results.length-1)),c=n[0].items.results[a],e.next=9,p.getMovieInfo(c.id,"tv");case 9:s=e.sent,l(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{className:"container-Browse",children:o&&Object(a.jsx)(N,{movie:n,featured:o})})},k=(n(30),function(){return Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(u,{})}),Object(a.jsx)(o.a,{path:"netflixcopy.vercel.app/browse",children:Object(a.jsx)(y,{})})]})})})});s.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9bb41625.chunk.js.map