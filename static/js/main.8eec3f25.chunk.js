(this["webpackJsonp2-post"]=this["webpackJsonp2-post"]||[]).push([[0],{24:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(17),r=s.n(n),a=(s(24),s(13)),o=s.n(a),i=s(18),l=s(10),d=Object(c.createContext)(null),j=s(7),b=s(2),m=s(1),u=function(){return Object(m.jsxs)("nav",{className:"flex justify-between items-center flex-wrap px-5 md:px-14 h-12 w-full bg-black mb-10 sticky top-0",children:[Object(m.jsx)("p",{className:"font-medium text-sm text-white uppercase",children:"{ JSON } Placeholder"}),Object(m.jsxs)("div",{className:"flex text-sm text-white font-medium capitalize",children:[Object(m.jsx)(j.b,{to:"/",className:"mr-3 hover:text-gray-200 cursor-pointer",children:"Post"}),Object(m.jsx)(j.b,{to:"/users",className:"hover:text-gray-200 cursor-pointer",children:"Users"})]})]})},x=function(e){var t=e.title;return Object(m.jsx)("h1",{className:"font-bold text-gray-800 text-3xl text-center capitalize mb-16",children:t})},p=function(e){var t=e.id,s=e.userId,c=e.title,n=e.body;return Object(m.jsxs)("div",{className:"flex flex-col border-b border-gray-400 py-5 mb-10",children:[Object(m.jsx)("p",{className:"font-bold text-sm text-gray-700 uppercase",children:c}),Object(m.jsxs)(j.b,{to:"/users/".concat(s.id),className:"text-sm font-medium text-red-700 italic mb-3 hover:text-red-600",children:[Object(m.jsx)("span",{className:"mr-1 font-normal",children:"Autor:"}),s.name]}),Object(m.jsx)("p",{className:"text-gray-700 text-base mb-4",children:n}),t&&Object(m.jsx)(j.b,{to:"/posts/".concat(t),className:"ml-auto text-sm text-red-700 border border-gray-600 py-1 px-4 hover:bg-gray-100",children:"Ir a detalles"})]})},f=function(){var e=Object(c.useContext)(d).posts;return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(m.jsxs)("div",{className:"container mx-auto px-5",children:[Object(m.jsx)(x,{title:"All Posts"}),e.map((function(e){var t=e.id,s=e.userId,c=e.title,n=e.body;return Object(m.jsx)(p,{id:t,userId:s,title:c,body:n},t)}))]})},h=function(e){var t=e.name,s=e.email,c=e.body;return Object(m.jsxs)("div",{className:"bg-gray-100 p-5 mb-4",children:[Object(m.jsx)("p",{className:"font-medium text-sm text-gray-800 capitalize italic mb-1",children:t}),Object(m.jsx)("p",{className:"font-normal text-sm text-gray-700 italic mb-4",children:s}),Object(m.jsx)("p",{className:"text-gray-700 italic",children:c})]})},O=function(){var e=Object(b.g)().id,t=Object(c.useContext)(d),s=t.posts,n=t.comments;Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var r=s.find((function(t){return t.id===parseInt(e)})),a=n.filter((function(e){return e.postId===r.id}));return Object(m.jsxs)("div",{className:"container mx-auto px-5",children:[Object(m.jsx)(x,{title:"Detail Post"}),Object(m.jsx)(p,{title:r.title,body:r.body,userId:r.userId}),a.map((function(e){return Object(m.jsx)(h,{name:e.name,email:e.email,body:e.body},e.id)}))]})},v=function(e){var t=e.id,s=e.name,c=e.email,n=e.phone,r=e.website;return Object(m.jsxs)("div",{className:"flex  flex-col items-center justify-center h-36 flex-wrap border border-gray-2 mb-5",children:[Object(m.jsx)(j.b,{to:"/users/".concat(t),className:"font-medium text-red-700 hover:text-red-600 text-base",children:s}),Object(m.jsx)("p",{className:"text-sm font-medium text-gray-600",children:c}),Object(m.jsx)("p",{className:"text-sm font-medium text-gray-600",children:n}),Object(m.jsx)("p",{className:"text-sm font-medium text-gray-600",children:r})]})},y=function(){var e=Object(c.useContext)(d).users;return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(x,{title:"All Users"}),Object(m.jsx)("div",{className:"container mx-auto px-5 grid gap-4 md:grid-cols-3",children:e.map((function(e){var t=e.id,s=e.name,c=e.email,n=e.phone,r=e.website;return Object(m.jsx)(v,{id:t,name:s,email:c,phone:n,website:r},t)}))})]})},g=function(){Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);var e=Object(b.g)().id,t=Object(c.useContext)(d),s=t.users,n=t.posts,r=s.find((function(t){return t.id===parseInt(e)})),a=n.filter((function(e){return e.userId.id===r.id}));return Object(m.jsxs)("div",{className:"container mx-auto px-5",children:[Object(m.jsx)(x,{title:"Detail User"}),Object(m.jsx)(v,{id:e,name:r.name,email:r.email,phone:r.phone,website:r.website},e),a.map((function(e){var t=e.id,s=e.userId,c=e.title,n=e.body;return Object(m.jsx)(p,{id:t,userId:s,title:c,body:n},t)}))]})},N=function(){return Object(m.jsx)(j.a,{basename:"/jsonplaceholder",children:Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(u,{}),Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",component:f}),Object(m.jsx)(b.b,{exact:!0,path:"/posts/:id",component:O}),Object(m.jsx)(b.b,{exact:!0,path:"/users",component:y}),Object(m.jsx)(b.b,{exact:!0,path:"/users/:id",component:g}),Object(m.jsx)(b.a,{to:"/"})]})]})})},w=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),j=a[0],b=a[1],u=Object(c.useState)([]),x=Object(l.a)(u,2),p=x[0],f=x[1],h=Object(c.useState)(!0),O=Object(l.a)(h,2),v=O[0],y=O[1],g=function(){var e=Object(i.a)(o.a.mark((function e(){var t,s,c,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.next=8,fetch("https://jsonplaceholder.typicode.com/users");case 8:return c=e.sent,e.next=11,c.json();case 11:return r=e.sent,b(r),s.forEach((function(e){var t=r.find((function(t){return t.id===e.userId}));e.userId=t})),n(s),e.next=17,fetch("https://jsonplaceholder.typicode.com/comments");case 17:return a=e.sent,e.next=20,a.json();case 20:i=e.sent,f(i),y(!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),Object(m.jsx)(c.Fragment,{children:v?Object(m.jsx)("div",{className:"flex justify-center items-center h-screen",children:Object(m.jsx)("p",{className:"text-gray-700 font-medium",children:"Cargando"})}):Object(m.jsx)(d.Provider,{value:{posts:s,users:j,comments:p},children:Object(m.jsx)(N,{})})})},I=document.getElementById("root"),E=Object(m.jsx)(w,{});r.a.render(E,I)}},[[32,1,2]]]);
//# sourceMappingURL=main.8eec3f25.chunk.js.map