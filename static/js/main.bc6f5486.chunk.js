(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],{163:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),i=(t(86),t(87),t(37)),s=t.n(i),m=t(65),u=t.n(m),l=function(){return r.a.createElement("header",{className:s.a.header},r.a.createElement("div",{className:s.a.main},r.a.createElement("img",{src:u.a,alt:"logo"}),r.a.createElement("div",null,"\u041e\u0442\u0434\u044b\u0445 \u043d\u0430 \u0434\u043e\u043d\u0443")))},p=t(38),h=t.n(p),_=t(39),g=t.n(_),f=t(14),d=function(e){return r.a.createElement(f.b,{to:e.href,activeClassName:g.a.active},r.a.createElement("div",{className:g.a.menuitem},r.a.createElement("div",null,e.capture)))},E=t(67),v=function(){return r.a.createElement("div",{className:h.a.menu},r.a.createElement("div",{className:h.a.pages},E.map((function(e){return r.a.createElement(d,e)}))))},k=t(42),w=t.n(k),x=t(68),N=t.n(x),b=function(e){return r.a.createElement("div",{className:N.a.main},"MainPage")},y=t(24),S=t.n(y),I=t(43),M=t.n(I),P=t(44),O=t.n(P),j=function(e){return r.a.createElement(f.b,{to:"/GalleryPage"+e.href,activeClassName:O.a.active},r.a.createElement("div",{className:O.a.menuitem},r.a.createElement("div",null,e.capture)))},J=t(69),C=function(){return r.a.createElement("div",{className:M.a.menu},r.a.createElement("div",{className:M.a.pages},J.map((function(e){return r.a.createElement(j,e)}))))},B=t(75),G=t(47),L=t(70),W=t(26),H=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://images.unsplash.com/photo-1459190342773-1851eb48d5d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=799&fit=crop&ixid=eyJhcHBfaWQiOjF9",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3}];var F=function(){var e=Object(n.useState)(0),a=Object(G.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(G.a)(o,2),s=i[0],m=i[1],u=Object(n.useCallback)((function(e,a){a.photo;var t=a.index;c(t),m(!0)}),[]);return r.a.createElement("div",null,r.a.createElement(L.a,{photos:H,onClick:u}),r.a.createElement(W.b,null,s?r.a.createElement(W.a,{onClose:function(){c(0),m(!1)}},r.a.createElement(W.c,{currentIndex:t,views:H.map((function(e){return Object(B.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null))},U=function(e){return r.a.createElement("div",{className:S.a.main},r.a.createElement("div",{className:S.a.smenu},r.a.createElement(C,null)),r.a.createElement("div",{className:S.a.photos},r.a.createElement(F,null)))},Y=t(73),z=t.n(Y),A=function(e){return r.a.createElement("div",{className:z.a.main},"BookingPage")},D=t(4),R=function(){return r.a.createElement("div",{className:w.a.main},r.a.createElement("div",{className:w.a.bg},r.a.createElement(D.a,{path:"/rest_on_the_don",component:b}),r.a.createElement(D.a,{path:"/GalleryPage",component:U}),r.a.createElement(D.a,{path:"/BookingPage",component:A})))},V=t(46),q=t.n(V),K=t(21),T=t.n(K),Q=function(e){return r.a.createElement("div",{className:T.a.contact},r.a.createElement("a",{href:e.url,className:T.a.a},r.a.createElement("img",{src:e.img,className:T.a.img,alt:"Logo"}),r.a.createElement("div",{className:T.a.capture},e.capture)))},Z=t(74),X=function(){return r.a.createElement("div",{className:q.a.footer},r.a.createElement("div",{className:q.a.foot},Z.map((function(e){return r.a.createElement(Q,e)}))))},$=function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(l,null),r.a.createElement(v,null),r.a.createElement(R,null),r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,a,t){e.exports={contact:"Contact_contact__34pjA",img:"Contact_img__yD75U",a:"Contact_a__3NIA3",capture:"Contact_capture__1wPEI"}},24:function(e,a,t){e.exports={main:"GalleryPage_main__225mH",smenu:"GalleryPage_smenu__3fpFS",photos:"GalleryPage_photos__15cYz"}},37:function(e,a,t){e.exports={header:"Header_header__1kuL2",main:"Header_main__5qoT1"}},38:function(e,a,t){e.exports={menu:"Menu_menu__17ubL",pages:"Menu_pages__wr5oj"}},39:function(e,a,t){e.exports={a:"MenuItem_a__gNPgq",menuitem:"MenuItem_menuitem__15wL7",active:"MenuItem_active__3x57d"}},42:function(e,a,t){e.exports={main:"Main_main__7hYhT",bg:"Main_bg__2aRWZ"}},43:function(e,a,t){e.exports={menu:"SubMenu_menu__mLDoS",pages:"SubMenu_pages__3UZ7Y"}},44:function(e,a,t){e.exports={a:"SubMenuItem_a__2Dfrg",menuitem:"SubMenuItem_menuitem__2k6bw",active:"SubMenuItem_active__2DV4r"}},46:function(e,a,t){e.exports={foot:"Footer_foot__3a4mX",footer:"Footer_footer__3yxF-"}},65:function(e,a,t){e.exports=t.p+"static/media/ico.fff5f0f2.png"},67:function(e){e.exports=JSON.parse('[{"href":"/rest_on_the_don","capture":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","key":"234"},{"href":"/GalleryPage","capture":"\u0413\u0430\u043b\u0435\u0440\u0435\u044f","key":"235"},{"href":"/BookingPage","capture":"\u0411\u0440\u043e\u043d\u044c","key":"236"}]')},68:function(e,a,t){e.exports={main:"MainPage_main__2IeJK"}},69:function(e){e.exports=JSON.parse('[{"href":"/general","capture":"\u041e\u0431\u0449\u0438\u0435","key":"334"},{"href":"/f1r1","capture":"\u042d\u0442\u0430\u0436 1, \u043a1","key":"335"},{"href":"/f1r2","capture":"\u042d\u0442\u0430\u0436 1, \u043a2","key":"336"},{"href":"/f2r1","capture":"\u042d\u0442\u0430\u0436 2, \u043a1","key":"337"},{"href":"/f2r2","capture":"\u042d\u0442\u0430\u0436 2, \u043a2","key":"338"}]')},73:function(e,a,t){e.exports={main:"BookingPage_main__2oSrx"}},74:function(e){e.exports=JSON.parse('[{"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png","capture":"Instagram","url":"https://www.instagram.com/egorshpitko/?hl=ru","key":"1234"},{"img":"https://s1.iconbird.com/ico/2013/11/499/w256h2561384975213MezhdunarodnylogotipVK1.png","capture":"Vkontakte","url":"https://vk.com/egorshp","key":"123"},{"img":"http://icons.iconarchive.com/icons/dtafalonso/android-l/256/WhatsApp-icon.png","capture":"Whatsapp","url":"+7-961-549-97-67","key":"124"},{"img":"https://hashtelegraph.com/wp-content/uploads/2018/01/Logo1.png","capture":"Telegram","url":"+7-961-549-97-67","key":"125"}]')},81:function(e,a,t){e.exports=t(163)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.bc6f5486.chunk.js.map