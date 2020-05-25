(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),i=n.n(c),l=(n(69),n(70),n(19)),o=(n(71),n(22)),s=(n(72),Object(o.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a||""," menu-item"),onClick:function(){c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),u=n(7),m=n(8),p=Object(m.a)([function(e){return e.directory}],(function(e){return e.sections})),d=Object(m.b)({sections:p}),f=Object(u.b)(d)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return r.a.createElement(s,Object.assign({key:t},n))})))})),E=n(13),b=n(14);function O(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return O=function(){return e},e}var v=b.b.div(O()),h=(n(78),function(){return r.a.createElement(v,{className:"homepage"},r.a.createElement("div",{className:"banner-container"},r.a.createElement("h1",{className:"banner-title"},"Haven Of Happiness"),r.a.createElement("p",{className:"banner-description"},"Only 5 days left for our huge 30% off sale!"),r.a.createElement("img",{className:"banner-image",src:"https://images.pexels.com/photos/830829/pexels-photo-830829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})),r.a.createElement(f,null))}),g=Object(m.a)([function(e){return e.user}],(function(e){return e.currentUser})),S=(n(79),n(11)),N=function(e){return e.cart},j=Object(m.a)([N],(function(e){return e.cartItems})),_=Object(m.a)([j],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),y=Object(m.a)([N],(function(e){return e.hidden})),I=Object(m.a)([j],(function(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)})),C=function(e){return e.shop},w=Object(m.a)([C],(function(e){return e.collections})),x=Object(m.a)([w],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),T=function(e){return Object(m.a)([w],(function(t){return t?Object.keys(t[e].items).map((function(n){return t[e].items[n]})):[]}))},k=Object(m.a)([C],(function(e){return e.isFetching})),U=Object(m.a)([C],(function(e){return!!e.collections}));function A(){var e=Object(E.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-nimation: spin 1s ease-in--out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return A=function(){return e},e}function R(){var e=Object(E.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return e},e}var L=b.b.div(R()),G=b.b.div(A()),F=function(e){return function(t){var n=t.isLoading,a=Object(l.a)(t,["isLoading"]);return n?r.a.createElement(L,null,r.a.createElement(G,null)):r.a.createElement(e,a)}};n(80);function H(){var e=Object(E.a)(["\nmin-width: 165px;\nwidth: auto;\nheight: 50px;\nletter-spacing: 0 5px;\nline-height: 50px;\npadding: 0 35px 0 35px;\nfont-size: 15px;\ntext-transform: uppercase;\nfont-family: 'Open Sans Condensed';\nfont-weight: bolder;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\n  ","\n"]);return H=function(){return e},e}function P(){var e=Object(E.a)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return P=function(){return e},e}function M(){var e=Object(E.a)(["\n  background-color: white;\n  color: pink;\n\n  &:hover {\n    background-color: pink;\n    color: white;\n  }\n"]);return M=function(){return e},e}function D(){var e=Object(E.a)(["\n  background-color: pink;\n  color: white;\n  &:hover {\n    background-color: rgb(231, 176, 186);\n  }\n"]);return D=function(){return e},e}var q=Object(b.a)(D()),K=Object(b.a)(M()),z=Object(b.a)(P()),V=b.b.button(H(),(function(e){return e.isGoogleSignIn?z:e.inverted?K:q})),Y=function(e){var t=e.children,n=Object(l.a)(e,["children"]);return r.a.createElement(V,n,t)},B={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"},W=function(){return{type:B.TOGGLE_CART_HIDDEN}},J=function(e){return{type:B.ADD_ITEM,payload:e}},$=Object(o.g)(Object(u.b)(null,(function(e){return{addItem:function(t){return e(J(t))}}}))((function(e){var t=e.item,n=e.addItem,a=e.history,c=e.match,i=t.name,l=t.price,o=t.imageUrl,s=t.itemUrl;return r.a.createElement("div",{className:"item"},r.a.createElement("div",{onClick:void 0!==c.params.collectionId?function(){return a.push("".concat(c.url,"/").concat(i))}:function(){return a.push("".concat(c.url,"/").concat(s,"/").concat(i))},className:"image",style:{backgroundImage:"url(".concat(o[0],")")}}),r.a.createElement("div",{className:"item-footer"},r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"price"},"$",l)),r.a.createElement(Y,{className:"custom-button",onClick:function(){return n(t)},inverted:!0},"ADD TO CART"))}))),Q=(n(81),function(e){var t=e.title,n=e.items,a=Object.keys(n).map((function(e){return n[e]}));return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<5})).map((function(e){return r.a.createElement($,{key:e.id,item:e})}))))}),X=(n(82),Object(m.b)({collections:x})),Z=Object(u.b)(X)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return r.a.createElement(Q,Object.assign({key:t},n))})))})),ee=Object(m.b)({isLoading:k}),te=Object(S.d)(Object(u.b)(ee),F)(Z),ne={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},ae=function(e){return{type:ne.FETCH_COLLECTIONS_SUCCESS,payload:e}},re=(n(83),Object(u.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(m.a)([w],(function(e){return e?e[n]:null})))(e),collectionItemsArray:T(t.match.params.collectionId)(e)};var n}))((function(e){var t=e.collection,n=e.collectionItemsArray,a=t.title;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a.toUpperCase()),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement($,{className:"item",key:e.id,item:e})}))))}))),ce=Object(m.b)({isLoading:function(e){return!U(e)}}),ie=Object(S.d)(Object(u.b)(ce),F)(re),le=n(28),oe=(n(84),n(85),function(e){var t=e.item;return r.a.createElement("div",{className:"item-overview"},r.a.createElement("h1",{className:"name"},t.name),r.a.createElement("p",{className:"sub-name"},"Adorable crinkle french fried potatoe charm to bring with you everywhere !"),r.a.createElement("div",{className:"price-container"},r.a.createElement("span",{className:"price"},"$",t.price)),r.a.createElement("select",{name:"nugget-type",className:"options"},r.a.createElement("option",null,"Select an option"),r.a.createElement("option",null,"Fullsize"),r.a.createElement("option",null,"Popcorn")),r.a.createElement("select",{name:"finish",className:"options"},r.a.createElement("option",null,"Select an option"),r.a.createElement("option",null,"Keychain"),r.a.createElement("option",null,"Charm")),r.a.createElement("select",{name:"quantity",className:"options"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3")),r.a.createElement(Y,null,"ADD TO CART"))}),se=function(e){var t=e.item.imageUrl,n=Object(a.useState)(t[0]),c=Object(le.a)(n,2),i=c[0],l=c[1];return r.a.createElement("div",{className:"image-carosel"},r.a.createElement("div",{className:"thumbnails"},t.map((function(e){return r.a.createElement("div",{className:"thumbnail-container"},r.a.createElement("img",{onClick:function(e){return l(e.target.src)},className:"thumbnail-image",src:e}))}))),r.a.createElement("div",{className:"image-main-viewer"},r.a.createElement("img",{className:"main-image",onMouseMove:function(e){var t=e.pageX/(1.5*e.target.width)*100+"%",n=e.pageY/(1.5*e.target.height)*100+"%";e.target.style.transformOrigin="".concat(t," ").concat(n)},src:i})))},ue=(n(86),Object(u.b)((function(e,t){return{item:(n=t.match.params.collectionId,a=t.match.params.itemId,Object(m.a)([w],(function(e){return e[n].items[a]})))(e)};var n,a}))((function(e){var t=e.item;return r.a.createElement("div",{className:"item-page"},r.a.createElement(se,{item:t}),r.a.createElement(oe,{item:t}))}))),me=Object(m.b)({isLoading:function(e){return!U(e)}}),pe=Object(S.d)(Object(u.b)(me),F)(ue),de=Object(u.b)(null,(function(e){return{fetchCollectionsStart:function(){return e({type:ne.FETCH_COLLECTIONS_START})}}}))((function(e){var t=e.match,n=e.fetchCollectionsStart;return Object(a.useEffect)((function(){n()}),[n]),r.a.createElement("div",{className:"shop-page"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"".concat(t.path),component:te}),r.a.createElement(o.b,{exact:!0,path:"".concat(t.path,"/:collectionId"),component:ie}),r.a.createElement(o.b,{path:"".concat(t.path,"/:collectionId/:itemId"),component:pe})))})),fe=n(2),Ee=n.n(fe),be=n(6),Oe=n(25),ve=n(29),he=n.n(ve),ge=(n(91),n(95),function(){var e=Object(Oe.a)(Ee.a.mark((function e(t,n){var a,r,c,i;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=je.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(be.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),Se=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};he.a.initializeApp({apiKey:"AIzaSyBvqdoCKW5XL4e4r9cK9IV01B_W4tdAxAY",authDomain:"hoh-db.firebaseapp.com",databaseURL:"https://hoh-db.firebaseio.com",projectId:"hoh-db",storageBucket:"hoh-db.appspot.com",messagingSenderId:"604739400659",appId:"1:604739400659:web:b04c60a6ff7223e501b526",measurementId:"G-YD3RVBVPJT"});var Ne=he.a.auth(),je=he.a.firestore(),_e=new he.a.auth.GoogleAuthProvider;_e.setCustomParameters({prompt:"select_account"});he.a;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ce=r.a.createElement("g",null),we=r.a.createElement("g",null),xe=r.a.createElement("g",null),Te=r.a.createElement("g",null),ke=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Re=r.a.createElement("g",null),Le=r.a.createElement("g",null),Ge=r.a.createElement("g",null),Fe=r.a.createElement("g",null),He=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Me=r.a.createElement("g",null),De=r.a.createElement("g",null),qe=function(e){var t=e.svgRef,n=e.title,a=Ie(e,["svgRef","title"]);return r.a.createElement("svg",ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ce,we,xe,Te,ke,Ue,Ae,Re,Le,Ge,Fe,He,Pe,Me,De)},Ke=r.a.forwardRef((function(e,t){return r.a.createElement(qe,ye({svgRef:t},e))})),ze=(n.p,n(97),Object(u.b)((function(e){return{itemCount:_(e)}}),(function(e){return{toggleCartHidden:function(){return e(W())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ke,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}))),Ve=(n(98),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,aly:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),Ye=(n(99),Object(m.b)({cartItems:j})),Be=Object(o.g)(Object(u.b)(Ye)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ve,{key:t.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Y,{onClick:function(){n.push("/checkout"),a(W())}},"GO TO CHECKOUT"))}))),We=(n(100),Object(o.g)(Object(u.b)((function(e){return{sections:p(e)}}))((function(e){var t=e.sections,n=e.history,a=e.match;return r.a.createElement("nav",null,r.a.createElement("div",null),r.a.createElement("div",{className:"nav-options"},r.a.createElement("ul",{className:"nav-list"},t.map((function(e){var t=e.linkUrl,c=e.title;return r.a.createElement("li",{className:"nav-item",key:e.id,onClick:function(){return n.push("".concat(a.url).concat(t))}},c)})))))})))),Je=n(16),$e={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},Qe=function(e){return{type:$e.SIGN_IN_FAILURE,payload:e}},Xe=function(e){var t=e.user,n=e.additionalData;return{type:$e.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}};function Ze(){var e=Object(E.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]);return Ze=function(){return e},e}function et(){var e=Object(E.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return et=function(){return e},e}function tt(){var e=Object(E.a)(["\n  height: 90%;\n  width: auto;\n  border-radius: 30%;\n  margin-left: 15px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(E.a)(["\n  height: 80px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 3px;\n  box-shadow: 0 3px 3px lightgrey;\n"]);return nt=function(){return e},e}var at=b.b.div(nt()),rt=b.b.img(tt()),ct=b.b.div(et()),it=Object(b.b)(Je.b)(Ze()),lt=Object(m.b)({currentUser:g,hidden:y}),ot=Object(u.b)(lt,(function(e){return{signOutStart:function(){return e({type:$e.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.hidden,a=e.signOutStart;return r.a.createElement(at,null,r.a.createElement(Je.b,{to:"/"},r.a.createElement(rt,{src:"https://i.etsystatic.com/isla/e7a1a1/40347398/isla_75x75.40347398_nvu4bmdm.jpg?version=0"})),r.a.createElement(We,null),r.a.createElement(ct,null,r.a.createElement(it,{to:"/shop"},"SHOP"),r.a.createElement(it,{to:"/contact"},"CONTACT"),t?r.a.createElement(it,{as:"div",onClick:a},"SIGN OUT"):r.a.createElement(it,{to:"/signIn"},"SIGN IN"),r.a.createElement(ze,null)),n?null:r.a.createElement(Be,null))})),st=n(27),ut=(n(101),n(102),function(e){var t=e.handleChange,n=e.label,a=Object(l.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),mt=Object(u.b)(null,(function(e){return{googleSignInStart:function(){return e({type:$e.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:$e.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(a.useState)({email:"",password:""}),i=Object(le.a)(c,2),l=i[0],o=i[1],s=l.email,u=l.password,m=function(){var e=Object(Oe.a)(Ee.a.mark((function e(n){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(s,u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.value,a=t.name;o(Object(be.a)(Object(be.a)({},l),{},Object(st.a)({},a,n)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:m},r.a.createElement(ut,{handleChange:p,name:"email",type:"email",value:s,label:"email",required:!0}),r.a.createElement(ut,{handleChange:p,name:"password",type:"password",value:u,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Y,{type:"submit",value:"Submit Form"},"Sign In"),r.a.createElement(Y,{type:"button",isGoogleSignIn:!0,onClick:n},"Sign In with Google"))))})),pt=(n(103),n(104),Object(u.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:$e.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(le.a)(n,2),i=c[0],l=c[1],o=i.displayName,s=i.email,u=i.password,m=i.confirmPassword,p=function(){var e=Object(Oe.a)(Ee.a.mark((function e(n){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u===m){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({displayName:o,email:s,password:u});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,a=t.value;l(Object(be.a)(Object(be.a)({},i),{},Object(st.a)({},n,a)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",null,"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:p},r.a.createElement(ut,{type:"text",name:"displayName",value:o,onChange:d,label:"display name"}),r.a.createElement(ut,{type:"email",name:"email",value:s,onChange:d,label:"email"}),r.a.createElement(ut,{type:"password",name:"password",value:u,onChange:d,label:"password"}),r.a.createElement(ut,{type:"password",name:"confirmPassword",value:m,onChange:d,label:"confirm password"}),r.a.createElement(Y,{type:"submit"},"SIGN UP")))}))),dt=function(){return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(mt,null),r.a.createElement(pt,null)))},ft=(n(105),Object(u.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:B.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(J(t))},removeItem:function(t){return e(function(e){return{type:B.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),Et=(n(106),n(58)),bt=n.n(Et),Ot=n(59),vt=n.n(Ot),ht=function(e){var t=e.price,n=100*t;return r.a.createElement(bt.a,{label:"Pay Now",name:"Haven Of Happiness",billingAddress:!0,shippingAddress:!0,image:"https://i.etsystatic.com/isla/e7a1a1/40347398/isla_75x75.40347398_nvu4bmdm.jpg?version=0",description:"Your total is ".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){vt()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment Successful")})).catch((function(e){console.log(JSON.parse(e)),alert("There was an issue with your payment. Please use your provided credit card.")}))},stripeKey:"pk_test_OAnKQjHYrttJdsaouaDcBA6f00zGP9YjLH"},r.a.createElement(Y,null,"Pay Now"))},gt=Object(m.b)({cartItems:j,total:I}),St=Object(u.b)(gt)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(ft,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $".concat(n))),r.a.createElement(ht,{price:n}))})),Nt=Object(m.b)({currentUser:g}),jt=Object(u.b)(Nt,(function(e){return{checkUserSession:function(){return e({type:$e.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"quick-announcement"},r.a.createElement("a",null,"FREE SHIPPING ON ORDERS $35 AND OVER")),r.a.createElement(ot,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:h}),r.a.createElement(o.b,{path:"/shop",component:de}),r.a.createElement(o.b,{exact:!0,path:"/signin",render:function(){return n?r.a.createElement(o.a,{to:"/"}):r.a.createElement(dt,null)}}),r.a.createElement(o.b,{exact:!0,path:"/checkout",component:St})),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-category"},r.a.createElement("h4",null,"Customer Service"),r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",null,"FAQs"),r.a.createElement("li",null,"Shipping"),r.a.createElement("li",null,"Returns"),r.a.createElement("li",null,"Orders"))),r.a.createElement("div",{className:"footer-category"},r.a.createElement("h4",null,"About Us"),r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",null,"About Haven Of Happiness"),r.a.createElement("li",null,"Careers"),r.a.createElement("li",null,"Terms and Conditions"),r.a.createElement("li",null,"Cookie Policy"),r.a.createElement("li",null,"Privacy Policy"),r.a.createElement("li",null,"California Supply Chains Act"))),r.a.createElement("div",{className:"footer-category"},r.a.createElement("h4",null,"Find Us On"),r.a.createElement("ul",{className:"footer-list"},r.a.createElement("li",null,"Instagram"),r.a.createElement("li",null,"Facebook"),r.a.createElement("li",null,"Youtube"))),r.a.createElement("div",{className:"copyright"},"\xa9 2020 Haven Of Happiness, All rights reserved.")))})),_t=(n(123),n(34)),yt=n(60),It=n.n(yt),Ct={currentUser:null},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e.SIGN_IN_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{currentUser:t.payload,error:null});case $e.SIGN_OUT_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{currentUser:null,error:null});case $e.SIGN_IN_FAILURE:case $e.SIGN_OUT_FAILURE:case $e.SIGN_UP_FAILURE:return{error:t.payload};default:return e}},xt=n(62),Tt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(be.a)(Object(be.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(xt.a)(e),[Object(be.a)(Object(be.a)({},t),{},{quantity:1})])},kt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(be.a)(Object(be.a)({},e),{},{quantity:e.quantity-1}):e}))},Ut={hidden:!0,cartItems:[]},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.TOGGLE_CART_HIDDEN:return Object(be.a)(Object(be.a)({},e),{},{hidden:!e.hidden});case B.ADD_ITEM:return Object(be.a)(Object(be.a)({},e),{},{cartItems:Tt(e.cartItems,t.payload)});case B.CLEAR_ITEM_FROM_CART:return Object(be.a)(Object(be.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case B.REMOVE_ITEM:return Object(be.a)(Object(be.a)({},e),{},{cartItems:kt(e.cartItems,t.payload)});case B.CLEAR_CART:return Object(be.a)(Object(be.a)({},e),{},{cartItems:[]});default:return e}},Rt={sections:[{title:"EARRINGS",imageUrl:"https://i.etsystatic.com/19638897/r/il/f6952c/2199945255/il_1588xN.2199945255_26w7.jpg",id:1,linkUrl:"shop/earrings"},{title:"NECKLACES",imageUrl:"https://i.etsystatic.com/19638897/r/il/c8bd57/2118337777/il_1588xN.2118337777_klhq.jpg",id:2,linkUrl:"shop/necklaces"},{title:"DESK BUDDY",imageUrl:"https://i.etsystatic.com/19638897/r/il/e4e921/2088607756/il_1588xN.2088607756_9f43.jpg",id:3,linkUrl:"shop/desk buddy"},{title:"POLYMER CLAY CHARMS",imageUrl:"https://i.etsystatic.com/19638897/r/il/2ccb4c/1997667599/il_1588xN.1997667599_lt5k.jpg",id:4,size:"large",linkUrl:"shop/polymer clay charms"},{title:"RESIN CHARMS/KEYCHAIN",imageUrl:"https://i.etsystatic.com/19638897/r/il/f8c9a9/2298039248/il_794xN.2298039248_md9u.jpg",id:5,size:"large",linkUrl:"shop/resin charms keychain"}]},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Gt={collections:null,isFetching:!1,errorMessage:void 0},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.FETCH_COLLECTIONS_START:return Object(be.a)(Object(be.a)({},e),{},{isFetching:!0});case ne.FETCH_COLLECTIONS_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{isFetching:!1,collections:t.payload});case ne.FETCH_COLLECTIONS_FAILURE:return Object(be.a)(Object(be.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Ht={key:"root",storage:It.a,whitelist:["cart"]},Pt=Object(S.c)({user:wt,cart:At,directory:Lt,shop:Ft}),Mt=Object(_t.a)(Ht,Pt),Dt=n(63),qt=n(5),Kt=Ee.a.mark(Yt),zt=Ee.a.mark(Bt),Vt=Ee.a.mark(Wt);function Yt(){var e,t,n;return Ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e=je.collection("collections"),a.next=4,e.get();case 4:return t=a.sent,a.next=7,Object(qt.b)(Se,t);case 7:return n=a.sent,a.next=10,Object(qt.c)(ae(n));case 10:a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(0),a.next=16,Object(qt.c)((r=a.t0.message,{type:ne.FETCH_COLLECTIONS_FAILURE,payload:r}));case 16:case"end":return a.stop()}var r}),Kt,null,[[0,12]])}function Bt(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)(ne.FETCH_COLLECTIONS_START,Yt);case 2:case"end":return e.stop()}}),zt)}function Wt(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.a)([Object(qt.b)(Bt)]);case 2:case"end":return e.stop()}}),Vt)}var Jt=Ee.a.mark(un),$t=Ee.a.mark(mn),Qt=Ee.a.mark(pn),Xt=Ee.a.mark(dn),Zt=Ee.a.mark(fn),en=Ee.a.mark(En),tn=Ee.a.mark(bn),nn=Ee.a.mark(On),an=Ee.a.mark(vn),rn=Ee.a.mark(hn),cn=Ee.a.mark(gn),ln=Ee.a.mark(Sn),on=Ee.a.mark(Nn),sn=Ee.a.mark(jn);function un(e,t){var n,a;return Ee.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(qt.b)(ge,e,t);case 3:return n=r.sent,r.next=6,n.get();case 6:return a=r.sent,r.next=9,Object(qt.c)((c=Object(be.a)({id:a.id},a.data()),{type:$e.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(qt.c)(Qe(r.t0));case 15:case"end":return r.stop()}var c}),Jt,null,[[0,11]])}function mn(){var e,t;return Ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Ne.signInWithPopup(_e);case 3:return e=n.sent,t=e.user,n.next=7,un(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(qt.c)(Qe(n.t0));case 13:case"end":return n.stop()}}),$t,null,[[0,9]])}function pn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.GOOGLE_SIGN_IN_START,mn);case 2:case"end":return e.stop()}}),Qt)}function dn(e){var t,n,a,r,c;return Ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,a=t.password,i.prev=1,i.next=4,Ne.signInWithEmailAndPassword(n,a);case 4:return r=i.sent,c=r.user,i.next=8,un(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(qt.c)(Qe(i.t0));case 14:case"end":return i.stop()}}),Xt,null,[[1,10]])}function fn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.EMAIL_SIGN_IN_START,dn);case 2:case"end":return e.stop()}}),Zt)}function En(){var e;return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=Ne.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return",null);case 6:return t.next=8,un(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(qt.c)(Qe(t.t0));case 14:case"end":return t.stop()}}),en,null,[[0,10]])}function bn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.CHECK_USER_SESSION,En);case 2:case"end":return e.stop()}}),tn)}function On(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.signOut();case 3:return e.next=5,Object(qt.c)({type:$e.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(qt.c)((t=e.t0,{type:$e.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),nn,null,[[0,7]])}function vn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.SIGN_OUT_START,On);case 2:case"end":return e.stop()}}),an)}function hn(e){var t,n,a,r,c,i;return Ee.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.email,a=t.password,r=t.displayName,l.prev=1,l.next=4,Ne.createUserWithEmailAndPassword(n,a);case 4:return c=l.sent,i=c.user,l.next=8,Object(qt.c)(Xe({user:i,additionalData:{displayName:r}}));case 8:l.next=14;break;case 10:return l.prev=10,l.t0=l.catch(1),l.next=14,Object(qt.c)((o=l.t0,{type:$e.SIGN_UP_FAILURE,payload:o}));case 14:case"end":return l.stop()}var o}),rn,null,[[1,10]])}function gn(e){var t,n,a;return Ee.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,a=t.additionalData,r.next=3,un(n,a);case 3:case"end":return r.stop()}}),cn)}function Sn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.SIGN_UP_SUCCESS,gn);case 2:case"end":return e.stop()}}),ln)}function Nn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.SIGN_UP_START,hn);case 2:case"end":return e.stop()}}),on)}function jn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.a)([Object(qt.b)(pn),Object(qt.b)(fn),Object(qt.b)(bn),Object(qt.b)(vn),Object(qt.b)(Nn),Object(qt.b)(Sn)]);case 2:case"end":return e.stop()}}),sn)}var _n=Ee.a.mark(Cn),yn=Ee.a.mark(wn),In=Ee.a.mark(xn);function Cn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.c)({type:B.CLEAR_CART});case 2:case"end":return e.stop()}}),_n)}function wn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.d)($e.SIGN_OUT_SUCCESS,Cn);case 2:case"end":return e.stop()}}),yn)}function xn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.a)([Object(qt.b)(wn)]);case 2:case"end":return e.stop()}}),In)}var Tn=Ee.a.mark(kn);function kn(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qt.a)([Object(qt.b)(Wt),Object(qt.b)(jn),Object(qt.b)(xn)]);case 2:case"end":return e.stop()}}),Tn)}var Un=Object(Dt.a)(),An=[Un];var Rn=Object(S.e)(Mt,S.a.apply(void 0,An));Un.run(kn);var Ln=Object(_t.b)(Rn),Gn=n(61);i.a.render(r.a.createElement(u.a,{store:Rn},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je.a,null,r.a.createElement(Gn.a,{persistor:Ln},r.a.createElement(jt,null))))),document.getElementById("root"))},64:function(e,t,n){e.exports=n(126)},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.cffeaf36.chunk.js.map