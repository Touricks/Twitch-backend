(this.webpackJsonptwitchfe=this.webpackJsonptwitchfe||[]).push([[0],{143:function(e,t,s){},175:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(124),a=s.n(n),c=(s(143),s(177)),i=s(133),o=s(185),l=s(193),d=s(194);const j=e=>fetch("".concat("/search?game_id=").concat(e)).then((e=>{if(200!==e.status)throw Error("Fail to find the game");return e.json()})),h=e=>(e=>fetch("".concat("/game?game_name=").concat(e)).then((e=>{if(200!==e.status)throw Error("Fail to find the game");return e.json()})))(e).then((e=>{if(e&&e[0].id)return j(e[0].id);throw Error("Fail to find the game")})),m="/favorite",b=e=>fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((e=>{if(200!==e.status)throw Error("Fail to add favorite item")})),u=e=>fetch(m,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((e=>{if(200!==e.status)throw Error("Fail to delete favorite item")})),O=()=>fetch(m,{credentials:"include"}).then((e=>{if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}));var g=s(178),x=s(179),f=s(68),p=s(105),v=s(187),y=s(188),w=s(6);function C(e){let{item:t,isFavorite:s,favOnChange:r}=e;return Object(w.jsx)(p.a,{title:s?"Remove from favorite list":"Add to favorite list",children:Object(w.jsx)(f.a,{shape:"circle",icon:s?Object(w.jsx)(v.a,{}):Object(w.jsx)(y.a,{}),onClick:e=>{e.stopPropagation(),s?u(t).then((()=>{r(),i.b.success("Removed from favorites")})).catch((e=>{i.b.error(e.message)})):b(t).then((()=>{r(),i.b.success("Added to favorites")})).catch((e=>{i.b.error(e.message)}))}})})}var S=function(e){let{items:t,loggedIn:s,favOnChange:r}=e;return null===t||void 0===t?void 0:t.map((e=>Object(w.jsx)(o.a.Item,{children:Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",minWidth:0},children:[Object(w.jsx)("div",{style:{flex:1,minWidth:0,marginRight:"24px"},children:Object(w.jsx)(p.a,{title:"".concat(e.broadcaster_name," - ").concat(e.title),children:Object(w.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:e.url.includes("videos")?"inherit":"#1890ff"},children:"".concat(e.broadcaster_name," - ").concat(e.title)})})}),s&&Object(w.jsx)("div",{style:{flexShrink:0,position:"relative",zIndex:1},children:Object(w.jsx)(C,{item:e,favOnChange:r,isFavorite:!0})})]})},e.id)))},I=s(186),F=s(135),k=s(189),P=s(190);const{SubMenu:_}=o.a;var R=function(e){let{favoriteItems:t,loggedIn:s,favOnChange:n}=e;const[a,c]=Object(r.useState)(!1),{videos:i,streams:l,clips:d}=t;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{type:"primary",shape:"round",onClick:()=>{c(!0)},icon:Object(w.jsx)(v.a,{}),children:"My Favorites"}),Object(w.jsx)(I.a,{title:"My Favorite videos",placement:"right",width:720,visible:a,onClose:()=>{c(!1)},children:Object(w.jsxs)(o.a,{mode:"inline",defaultOpenKeys:["streams"],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(w.jsx)(_,{icon:Object(w.jsx)(F.a,{}),title:"Streams",children:Object(w.jsx)(S,{items:l,loggedIn:s,favOnChange:n})},"streams"),Object(w.jsx)(_,{icon:Object(w.jsx)(k.a,{}),title:"Videos",children:Object(w.jsx)(S,{items:i,loggedIn:s,favOnChange:n})},"videos"),Object(w.jsx)(_,{icon:Object(w.jsx)(P.a,{}),title:"Clips",children:Object(w.jsx)(S,{items:d,loggedIn:s,favOnChange:n})},"clips")]})})]})},E=s(184),T=s(181),L=s(183),q=s(191),J=s(192);var N=function(){const[e,t]=Object(r.useState)(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{shape:"round",type:"primary",onClick:()=>{t(!0)},children:"Register"}),Object(w.jsx)(E.a,{title:"Register",visible:e,onCancel:()=>{t(!1)},footer:null,destroyOnClose:!0,children:Object(w.jsxs)(T.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e=>{(e=>fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(200!==e.status)throw Error("Fail to register")})))(e).then((()=>{t(!1),i.b.success("Successfully signed up")})).catch((e=>{i.b.error(e.message)}))},preserve:!1,children:[Object(w.jsx)(T.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(w.jsx)(L.a,{prefix:Object(w.jsx)(q.a,{}),placeholder:"Username"})}),Object(w.jsx)(T.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(w.jsx)(L.a,{prefix:Object(w.jsx)(J.a,{}),placeholder:"Password"})}),Object(w.jsx)(T.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(w.jsx)(L.a,{placeholder:"firstname"})}),Object(w.jsx)(T.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(w.jsx)(L.a,{placeholder:"lastname"})}),Object(w.jsx)(T.a.Item,{children:Object(w.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})};var A=function(e){let{onSuccess:t}=e;const[s,n]=Object(r.useState)(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{shape:"round",onClick:()=>{n(!0)},style:{marginRight:"20px"},children:"Login"}),Object(w.jsx)(E.a,{title:"Log in",visible:s,onCancel:()=>{n(!1)},footer:null,destroyOnClose:!0,children:Object(w.jsxs)(T.a,{name:"normal_login",onFinish:e=>{(e=>{const t=new FormData;return t.append("username",e.username),t.append("password",e.password),fetch("/login",{method:"POST",credentials:"include",body:t}).then((e=>{if(204!==e.status)throw Error("Fail to log in")}))})(e).then((()=>{n(!1),i.b.success("Welcome back"),t()})).catch((e=>{i.b.error(e.message)}))},preserve:!1,children:[Object(w.jsx)(T.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(w.jsx)(L.a,{prefix:Object(w.jsx)(q.a,{}),placeholder:"Username"})}),Object(w.jsx)(T.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(w.jsx)(L.a.Password,{prefix:Object(w.jsx)(J.a,{}),placeholder:"Password"})}),Object(w.jsx)(T.a.Item,{children:Object(w.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})};const{Header:U}=c.a;var D=function(e){let{loggedIn:t,signoutOnClick:s,signinOnSuccess:r,favoriteItems:n,favoriteOnChange:a}=e;return Object(w.jsx)(U,{children:Object(w.jsxs)(g.a,{justify:"space-between",children:[Object(w.jsx)(x.a,{children:t&&Object(w.jsx)(R,{favoriteItems:n,loggedIn:t,favOnChange:a})}),Object(w.jsxs)(x.a,{children:[t&&Object(w.jsx)(f.a,{shape:"round",onClick:s,children:"Logout"}),!t&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{onSuccess:r}),Object(w.jsx)(N,{})]})]})]})})},M=s(114);var V=function(e){let{onSuccess:t}=e;const[s,n]=Object(r.useState)(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{shape:"round",onClick:()=>{n(!0)},icon:Object(w.jsx)(M.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search"}),Object(w.jsx)(E.a,{title:"Search",visible:s,onCancel:()=>{n(!1)},footer:null,children:Object(w.jsxs)(T.a,{name:"custom_search",onFinish:e=>{h(e.game_name).then((e=>{n(!1),t(e)})).catch((e=>{i.b.error(e.message)}))},children:[Object(w.jsx)(T.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(w.jsx)(L.a,{placeholder:"Game name"})}),Object(w.jsx)(T.a.Item,{children:Object(w.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},W=s(130),B=s(180),G=s(182);const{TabPane:H}=W.a,K="stream",z="videos",Q="clips",X=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0;const n="".concat(e.broadcaster_name," - ").concat(e.title),a=s.find((t=>t.twitch_id===e.twitch_id));return Object(w.jsxs)(w.Fragment,{children:[t&&Object(w.jsx)(p.a,{title:a?"Remove from favorite list":"Add to favorite list",children:Object(w.jsx)(f.a,{shape:"circle",icon:a?Object(w.jsx)(v.a,{}):Object(w.jsx)(y.a,{}),onClick:()=>{a?u(e).then((()=>{r()})).catch((e=>{i.b.error(e.message)})):b(e).then((()=>{r()})).catch((e=>{i.b.error(e.message)}))}})}),Object(w.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(w.jsx)(p.a,{title:n,children:Object(w.jsx)("span",{children:n})})})]})},Y=(e,t,s,r)=>Object(w.jsx)(B.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:e=>{return Object(w.jsx)(B.b.Item,{style:{marginRight:"20px"},children:Object(w.jsx)(G.a,{title:X(e,t,s,r),children:Object(w.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{width:"100%",height:"100%"},children:Object(w.jsx)("img",{alt:"Placeholder",src:(n=e.thumbnail_url,n.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480")),style:{width:"100%",height:"100%"}})})})});var n}});var Z=e=>{let{resources:t,loggedIn:s,favoriteItems:r,favoriteOnChange:n}=e;const{videos:a,streams:c,clips:i}=t,{videos:o,streams:l,clips:d}=r;return Object(w.jsxs)(W.a,{defaultActiveKey:K,children:[Object(w.jsx)(H,{tab:"Streams",forceRender:!0,children:Y(c,s,l,n)},K),Object(w.jsx)(H,{tab:"Videos",forceRender:!0,children:Y(a,s,o,n)},z),Object(w.jsx)(H,{tab:"Clips",forceRender:!0,children:Y(i,s,d,n)},Q)]})};const{Header:$,Content:ee,Sider:te}=c.a;var se=function(){const[e,t]=Object(r.useState)(!1),[s,n]=Object(r.useState)([]),[a,h]=Object(r.useState)([]),[m,b]=Object(r.useState)({videos:[],streams:[],clips:[]});Object(r.useEffect)((()=>{fetch("/game").then((e=>{if(200!==e.status)throw Error("Fail to get top games");return e.json()})).then((e=>{h(e)})).catch((e=>{i.b.error(e.message)}))}),[]);const u=()=>{O().then((e=>{n(e)})).catch((e=>{i.b.error(e.message)}))};return Object(w.jsxs)(c.a,{children:[Object(w.jsx)($,{children:Object(w.jsx)(D,{loggedIn:e,signoutOnClick:()=>{fetch("/logout",{method:"POST",credentials:"include"}).then((e=>{if(204!==e.status)throw Error("Fail to log out")})).then((()=>{t(!1),i.b.success("Successfully Signed out")})).catch((e=>{i.b.error(e.message)}))},signinOnSuccess:()=>{t(!0),O().then((e=>{n(e)}))},favoriteItems:s,favoriteOnChange:u})}),Object(w.jsxs)(c.a,{children:[Object(w.jsxs)(te,{width:300,className:"site-layout-background",children:[Object(w.jsx)(V,{onSuccess:e=>{b(e)}}),Object(w.jsx)(o.a,{mode:"inline",onSelect:e=>{let{key:t}=e;"recommendation"!==t?j(t).then((e=>{b(e)})):fetch("/recommendation",{credentials:"include"}).then((e=>{if(200!==e.status)throw Error("Fail to get recommended item");return e.json()})).then((e=>{b(e)}))},style:{marginTop:"10px"},items:(e=>[{label:"Recommend for you!",key:"recommendation",icon:Object(w.jsx)(l.a,{})},{label:"Popular Games",key:"popular_games",icon:Object(w.jsx)(d.a,{}),children:e.map((e=>({label:e.name,key:e.id,icon:Object(w.jsx)("img",{alt:"placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}})})))}])(a)})]}),Object(w.jsx)(c.a,{style:{padding:"24px"},children:Object(w.jsx)(ee,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(w.jsx)(Z,{resources:m,loggedIn:e,favoriteOnChange:u,favoriteItems:s})})})]})]})};var re=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,195)).then((t=>{let{getCLS:s,getFID:r,getFCP:n,getLCP:a,getTTFB:c}=t;s(e),r(e),n(e),a(e),c(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(se,{})),re()}},[[175,1,2]]]);
//# sourceMappingURL=main.670e9907.chunk.js.map