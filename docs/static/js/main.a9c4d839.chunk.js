(this["webpackJsonplogin-crud-google-auth"]=this["webpackJsonplogin-crud-google-auth"]||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(12),i=n.n(r),s=(n(95),n(49)),o=n(15),u=n(17),l=n.n(u),j=n(23),b=n(27),d=n(22),p=n(56),O=n(57),h=(n(77),n(110),O.a.initializeApp({apiKey:"AIzaSyBwTxUm5N-lhYtGhjdbGUJcqmlUuQCgQpw",authDomain:"loginreact-f6184.firebaseapp.com",projectId:"loginreact-f6184",storageBucket:"loginreact-f6184.appspot.com",messagingSenderId:"339085271193",appId:"1:339085271193:web:f931847aae91585cee1808",measurementId:"G-F4YCG5EEKP"})),x=h,f=h.firestore(),m=n(162),g=n(154),v=n(78),w=n.n(v),k=n(62),y=n.n(k),C=n(148),S=n(164),P=n(3),N=Object(C.a)((function(e){return{root:{width:"100%",position:"absolute",zIndex:"1304",left:"0",top:"0","& > * + *":{marginTop:e.spacing(2)}}}}));function I(e){var t=e.severity,n=e.text,c=N();return Object(P.jsx)("div",{className:c.root,children:Object(P.jsx)(S.a,{severity:t,children:n})})}n(103);var E=function(e){var t=e.addOrEditProduct,n=e.currentId,a={name:"",price:"",stock:"",description:""},r=Object(c.useState)(a),i=Object(d.a)(r,2),s=i[0],o=i[1],u=Object(c.useState)(!1),O=Object(d.a)(u,2),h=O[0],x=O[1],v=Object(c.useState)(""),k=Object(d.a)(v,2),C=k[0],S=k[1];setTimeout((function(){x(!1)}),3e3);var N=function(e){var t=e.target,n=t.name,c=t.value;o(Object(j.a)(Object(j.a)({},s),{},Object(p.a)({},n,c)))},E=s.name,U=s.price,D=s.stock,F=s.description,T=function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.collection("products").doc(t).get();case 2:n=e.sent,o(Object(j.a)({},n.data()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){""===n?(o(Object(j.a)({},a)),S("New Product Added")):(T(n),S("Product Updated"))}),[n]),Object(P.jsxs)(P.Fragment,{children:[h&&Object(P.jsx)(I,{severity:"success",text:C}),Object(P.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==E&&0!==U&&0!==D&&""!==F&&(t(s),o(Object(j.a)({},a)),x(!0))},children:[Object(P.jsx)(m.a,{label:"Name",type:"text",error:!s.name,value:s.name,name:"name",onChange:N}),Object(P.jsx)("br",{}),Object(P.jsx)(m.a,{label:"Price",error:!s.price,type:"number",value:s.price,name:"price",onChange:N}),Object(P.jsx)("br",{}),Object(P.jsx)(m.a,{label:"Stock",type:"number",value:s.stock,error:!s.stock,name:"stock",onChange:N}),Object(P.jsx)("br",{}),Object(P.jsx)(m.a,{name:"description",value:s.description,error:!s.description,type:"text",multiline:!0,onChange:N,label:"Description",rows:4}),Object(P.jsx)("br",{}),Object(P.jsx)(g.a,{variant:"contained",color:"primary",size:"small",type:"submit",startIcon:""===n?Object(P.jsx)(w.a,{}):Object(P.jsx)(y.a,{}),children:""===n?"Save":"Update"})]})]})},U=n(156),D=n(160),F=n(159),T=n(155),A=n(157),B=n(158),G=n(152),L=n(163),z=(n(105),n(80)),W=n(165);function J(){var e=a.a.useState(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(P.jsxs)("div",{children:[Object(P.jsx)(g.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:"Open Menu"}),Object(P.jsx)(z.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){c(null)},children:Object(P.jsx)(W.a,{onClick:function(){return x.auth().signOut()},children:"Logout"})})]})}var M=n(153),K=n(79),Q=n.n(K),Y=Object(C.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},table:{minWidth:650}}})),q=function(){var e=Y(),t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),o=s[0],u=s[1],p=Object(c.useState)(!1),O=Object(d.a)(p,2),h=O[0],x=O[1],m=Object(c.useState)(!1),g=Object(d.a)(m,2),v=g[0],w=g[1],k=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.collection("products").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),r(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure you want to delete this product?")){e.next=5;break}return e.next=3,f.collection("products").doc(t).delete();case 3:w(!0),setTimeout((function(){w(!1)}),3e3);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k()}),[]);var S=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!0),e.prev=1,""!==o){e.next=8;break}return u(""),e.next=6,f.collection("products").doc().set(t);case 6:e.next=12;break;case 8:return x(!0),e.next=11,f.collection("products").doc(o).update(t);case 11:setTimeout((function(){x(!1),u("")}),3e3);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0,"error");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(""),u(t),x(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(P.Fragment,{children:[v&&Object(P.jsx)(I,{severity:"success",text:"Product Removed Successfully"}),Object(P.jsx)(J,{}),Object(P.jsxs)("div",{className:"wrapper",children:[Object(P.jsx)("button",{type:"button",className:"button-add",onClick:function(){x(!0),u("")},children:"+"}),Object(P.jsx)(L.a,{open:h,onClose:function(){x(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(P.jsx)("div",{className:"wrapper-form",children:Object(P.jsx)(E,{addOrEditProduct:S,currentId:o,products:a})})}),a.length<1?Object(P.jsx)("div",{children:"Sin Productos"}):Object(P.jsx)("div",{className:"wrapper-table",children:Object(P.jsx)(T.a,{component:G.a,children:Object(P.jsxs)(U.a,{className:e.table,"aria-label":"simple table",children:[Object(P.jsx)(A.a,{children:Object(P.jsxs)(B.a,{children:[Object(P.jsx)(F.a,{children:"Name"}),Object(P.jsx)(F.a,{align:"right",children:"Price"}),Object(P.jsx)(F.a,{align:"right",children:"Stock"}),Object(P.jsx)(F.a,{align:"right",children:"Description"}),Object(P.jsx)(F.a,{align:"right",children:"Delete"}),Object(P.jsx)(F.a,{align:"right",children:"Update"})]})}),Object(P.jsx)(D.a,{children:a.map((function(e){return Object(P.jsxs)(B.a,{children:[Object(P.jsx)(F.a,{children:e.name}),Object(P.jsx)(F.a,{align:"right",children:e.price}),Object(P.jsx)(F.a,{align:"right",children:e.stock}),Object(P.jsx)(F.a,{component:"th",scope:"row",children:e.description}),Object(P.jsx)(F.a,{align:"right",children:Object(P.jsx)(M.a,{"aria-label":"delete",onClick:function(){return C(e.id)},children:Object(P.jsx)(Q.a,{})})}),Object(P.jsx)(F.a,{align:"right",children:Object(P.jsx)(M.a,{"aria-label":"delete",onClick:function(){return N(e.id)},children:Object(P.jsx)(y.a,{})})})]},e.name)}))})]})})})]})]})},R=a.a.createContext(),H=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(d.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!0),o=Object(d.a)(s,2),u=o[0],l=o[1];return Object(c.useEffect)((function(){x.auth().onAuthStateChanged((function(e){i(e),l(!1)}))}),[]),u?Object(P.jsx)(P.Fragment,{children:"Loading..."}):Object(P.jsx)(R.Provider,{value:{currentUser:r},children:t})},V=n(161),X=n(111),Z=(n(106),n.p+"static/media/google.3ecb0cbc.jpg"),$=Object(o.f)((function(e){var t=e.history,n=Object(c.useCallback)(function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=n.target.elements,a=c.email,r=c.password,e.prev=2,e.next=5,x.auth().signInWithEmailAndPassword(a.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]),a=Object(c.useCallback)(function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new O.a.auth.GoogleAuthProvider).addScope("email"),n.addScope("profile"),n.addScope("openid"),t.preventDefault(),e.prev=5,e.next=8,x.auth().signInWithPopup(n);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(c.useContext)(R).currentUser?Object(P.jsx)(o.a,{to:"/"}):Object(P.jsxs)("div",{children:[Object(P.jsxs)("form",{className:"form",onSubmit:n,children:[Object(P.jsx)(m.a,{label:"Correo",name:"email",type:"email"}),Object(P.jsx)("br",{}),Object(P.jsx)(m.a,{name:"password",type:"password",label:"Contrase\xf1a"}),Object(P.jsx)("br",{}),Object(P.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]}),Object(P.jsx)("div",{className:"container-button-google",children:Object(P.jsxs)("button",{className:"button-google",onClick:a,children:[Object(P.jsx)("img",{src:Z,alt:"google"}),"Sign In with google"]})}),Object(P.jsx)(X.a,{children:Object(P.jsx)(V.a,{onClick:function(){return t.push("/signup")},children:"Create a new account"})})]})})),_=(n(108),Object(o.f)((function(e){var t=e.history,n=Object(c.useCallback)(function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=n.target.elements,a=c.email,r=c.password,e.prev=2,e.next=5,x.auth().createUserWithEmailAndPassword(a.value,r.value);case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"SignUp"}),Object(P.jsxs)("form",{className:"form",onSubmit:n,children:[Object(P.jsx)(m.a,{label:"Correo",name:"email",type:"email"}),Object(P.jsx)("br",{}),Object(P.jsx)(m.a,{name:"password",type:"password",label:"Contrase\xf1a"}),Object(P.jsx)("br",{}),Object(P.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Sign Up"})]})]})}))),ee=n(81),te=function(e){var t=e.component,n=Object(ee.a)(e,["component"]),a=Object(c.useContext)(R).currentUser;return Object(P.jsx)(o.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return a?Object(P.jsx)(t,Object(j.a)({},e)):Object(P.jsx)(o.a,{to:"/login"})}}))},ne=function(){return Object(P.jsx)(H,{children:Object(P.jsx)(s.a,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(te,{exact:!0,path:"/",component:q}),Object(P.jsx)(o.b,{exact:!0,path:"/login",component:$}),Object(P.jsx)(o.b,{exact:!0,path:"/signup",component:_})]})})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(ne,{})}),document.getElementById("root")),ce()},95:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.a9c4d839.chunk.js.map