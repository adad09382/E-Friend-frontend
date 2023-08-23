import{p as A,m as K,a as Q,g as E,u as R,c as a,b as te,d as ae,e as oe,f as le,h as ne,t as z,i as se,j as re,k as ue,l as ie,n as ce,s as C,o as m,q as de,V as W,r as $,v as H,w as ve,x as O,y as me,z as D,A as ge,B as fe,C as he,D as pe,E as be,F as ye,G as _e,H as q,I as ke,J as Ve,K as I,L as xe,M as Se,N as Te,O as Be,P as we,Q as Ce,R as d,S as B,T as i,U as S,W as _,X as w,Y as V,Z as Pe,_ as Y,$ as P,a0 as F,a1 as U,a2 as M,a3 as Ie,a4 as j,a5 as G}from"./index-7ec7f92a.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Le,a as Ae}from"./VNavigationDrawer-78a8086c.js";const X=A({text:String,...K(),...Q()},"VToolbarTitle"),Z=E()({name:"VToolbarTitle",props:X(),setup(e,v){let{slots:t}=v;return R(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ee=[null,"prominent","default","comfortable","compact"],ee=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ee.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...te(),...K(),...ae(),...oe(),...Q({tag:"header"}),...le()},"VToolbar"),J=E()({name:"VToolbar",props:ee(),setup(e,v){var o;let{slots:t}=v;const{backgroundColorClasses:s,backgroundColorStyles:n}=ne(z(e,"color")),{borderClasses:l}=se(e),{elevationClasses:b}=re(e),{roundedClasses:g}=ue(e),{themeClasses:p}=ie(e),{rtlClasses:y}=ce(),c=C(!!(e.extended||(o=t.extension)!=null&&o.call(t))),k=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),f=m(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return de({VBtn:{variant:"text"}}),R(()=>{var u;const h=!!(e.title||t.title),x=!!(t.image||e.image),r=(u=t.extension)==null?void 0:u.call(t);return c.value=!!(e.extended||r),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,l.value,b.value,g.value,p.value,y.value,e.class],style:[n.value,e.style]},{default:()=>[x&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a($,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(W,{key:"image-img",cover:!0,src:e.image},null)]),a($,{defaults:{VTabs:{height:H(k.value)}}},{default:()=>{var T,N,L;return[a("div",{class:"v-toolbar__content",style:{height:H(k.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),h&&a(Z,{key:"title",text:e.title},{text:t.title}),(N=t.default)==null?void 0:N.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(L=t.append)==null?void 0:L.call(t)])])]}}),a($,{defaults:{VTabs:{height:H(f.value)}}},{default:()=>[a(ve,null,{default:()=>[c.value&&a("div",{class:"v-toolbar__extension",style:{height:H(f.value)}},[r])]})]})]})}),{contentHeight:k,extensionHeight:f}}}),Re=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function He(e){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=v;let s=0;const n=O(null),l=C(0),b=C(0),g=C(0),p=C(!1),y=C(!1),c=m(()=>Number(e.scrollThreshold)),k=m(()=>me((c.value-l.value)/c.value||0)),f=()=>{const o=n.value;!o||t&&!t.value||(s=l.value,l.value="window"in o?o.pageYOffset:o.scrollTop,y.value=l.value<s,g.value=Math.abs(l.value-c.value))};return D(y,()=>{b.value=b.value||l.value}),D(p,()=>{b.value=0}),ge(()=>{D(()=>e.scrollTarget,o=>{var x;const h=o?document.querySelector(o):window;h&&h!==n.value&&((x=n.value)==null||x.removeEventListener("scroll",f),n.value=h,n.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),fe(()=>{var o;(o=n.value)==null||o.removeEventListener("scroll",f)}),t&&D(t,f,{immediate:!0}),{scrollThreshold:c,currentScroll:l,currentThreshold:g,isScrollActive:p,scrollRatio:k,isScrollingUp:y,savedScroll:b}}const De=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ee(),...he(),...Re(),height:{type:[Number,String],default:64}},"VAppBar"),Fe=E()({name:"VAppBar",props:De(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const s=O(),n=pe(e,"modelValue"),l=m(()=>{var T;const u=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),b=m(()=>{const u=l.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!n.value}),{currentScroll:g,scrollThreshold:p,isScrollingUp:y,scrollRatio:c}=He(e,{canScroll:b}),k=m(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),f=m(()=>e.flat||l.value.elevate&&(l.value.inverted?g.value>0:g.value===0)),o=m(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),h=m(()=>{var N,L;if(l.value.hide&&l.value.inverted)return 0;const u=((N=s.value)==null?void 0:N.contentHeight)??0,T=((L=s.value)==null?void 0:L.extensionHeight)??0;return u+T});be(m(()=>!!e.scrollBehavior),()=>{ke(()=>{l.value.hide?l.value.inverted?n.value=g.value>p.value:n.value=y.value||g.value<p.value:n.value=!0})});const{ssrBootStyles:x}=ye(),{layoutItemStyles:r}=_e({id:e.name,order:m(()=>parseInt(e.order,10)),position:z(e,"location"),layoutSize:h,elementSize:C(void 0),active:n,absolute:z(e,"absolute")});return R(()=>{const[u]=J.filterProps(e);return a(J,q({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...r.value,"--v-toolbar-image-opacity":o.value,height:void 0,...x.value},e.style]},u,{collapse:k.value,flat:f.value}),t)}),{}}}),Ue=A({...Ve({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Me=E()({name:"VAppBarNavIcon",props:Ue(),setup(e,v){let{slots:t}=v;return R(()=>a(I,q(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),$e=E()({name:"VAppBarTitle",props:X(),setup(e,v){let{slots:t}=v;return R(()=>a(Z,q(e,{class:"v-app-bar-title"}),t)),{}}}),ze=""+new URL("ai-friend-logo_darkblue-452f23c4.svg",import.meta.url).href;const Oe={__name:"FrontLayout",setup(e){const v=xe(),t=Se(),{isLogin:s,isAdmin:n}=Te(t),l=Be(),{mobile:b}=we(),g=m(()=>b.value),p=O(!1),y=m(()=>[{to:"/",text:"HOME",icon:"mdi-home",show:!0},{to:"/topic",text:"探索話題",icon:"mdi-message",show:s.value},{to:"/news",text:"新聞話題",icon:"mdi-newspaper",show:s.value},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!s.value},{to:"/login",text:"登入",icon:"mdi-login",show:!s.value}]),c=async()=>{try{await j.delete("/users/logout"),t.logout(),l({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),v.push("/")}catch(o){console.log(o),l({text:o.message.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red ",location:"bottom"}})}},k=async()=>{try{const{data:o}=await j.get("conversation/latest");return o.result._id}catch(o){return console.error("Error fetching the latest conversation ID: ",o),null}},f=async()=>{const o=await k();console.log(o),o?v.push(`/conversation/${o}`):(l({text:"您目前尚無創建對話話題，請從探索話題開始選擇話題",showCloseButton:!1,snackbarProps:{timeout:5e3,color:"red",location:"bottom"}}),console.error("Failed to navigate to the latest conversation due to missing ID."))};return(o,h)=>{const x=Ce("router-view");return d(),B(w,null,[a(Fe,{color:"#fff"},{default:i(()=>[a(I,{class:"logoBtn",active:!1,to:"/"},{default:i(()=>[a(W,{src:ze,alt:"logo","max-width":"30%"}),a($e,{class:"web-title"},{default:i(()=>[V("E-Friend ")]),_:1})]),_:1}),a(Pe),g.value?(d(),S(Me,{key:0,onClick:h[0]||(h[0]=r=>p.value=!p.value)})):_("",!0),g.value?_("",!0):(d(),B(w,{key:1},[(d(!0),B(w,null,Y(y.value,r=>(d(),B(w,{key:r.to},[r.show?(d(),S(I,{key:0,active:!1,to:r.to,"prepend-icon":r.icon},{default:i(()=>[V(G(r.text),1)]),_:2},1032,["to","prepend-icon"])):_("",!0)],64))),128)),P(s)?(d(),B(w,{key:0},[a(I,{"prepend-icon":"mdi-forum",onClick:f},{default:i(()=>[V("我的對話")]),_:1}),P(n)?(d(),S(I,{key:0,"prepend-icon":"mdi-cog",to:"/admin"},{default:i(()=>[V("管理")]),_:1})):_("",!0),a(I,{"prepend-icon":"mdi-logout",onClick:c},{default:i(()=>[V("登出")]),_:1})],64)):_("",!0)],64))]),_:1}),g.value?(d(),S(Le,{key:0,modelValue:p.value,"onUpdate:modelValue":h[1]||(h[1]=r=>p.value=r),location:"right",temporary:""},{default:i(()=>[a(Ie,null,{default:i(()=>[(d(!0),B(w,null,Y(y.value,r=>(d(),B(w,{key:r.to},[r.show?(d(),S(F,{key:0,to:r.to},{prepend:i(()=>[a(U,{icon:r.icon},null,8,["icon"]),a(M,null,{default:i(()=>[V(G(r.text),1)]),_:2},1024)]),_:2},1032,["to"])):_("",!0)],64))),128)),P(s)?(d(),S(F,{key:0,onClick:f},{prepend:i(()=>[a(U,{icon:"mdi-forum"}),a(M,null,{default:i(()=>[V("我的對話")]),_:1})]),_:1})):_("",!0),P(s)&&P(n)?(d(),S(F,{key:1,to:"/admin"},{prepend:i(()=>[a(U,{icon:"mdi-cog"}),a(M,null,{default:i(()=>[V("管理")]),_:1})]),_:1})):_("",!0),P(s)?(d(),S(F,{key:2,onClick:c},{prepend:i(()=>[a(U,{icon:"mdi-logout"}),a(M,null,{default:i(()=>[V("登出")]),_:1})]),_:1})):_("",!0)]),_:1})]),_:1},8,["modelValue"])):_("",!0),a(Ae,null,{default:i(()=>[a(x)]),_:1})],64)}}},Ge=Ne(Oe,[["__scopeId","data-v-eb3201da"]]);export{Ge as default};
