import{x as y,A as Y,av as Z,aI as G,R as h,S as b,X as I,a8 as e,W as Q,aJ as H,aK as F,a5 as w,c as r,$ as m,a1 as z,a6 as q,a7 as J,aL as ee,O as te,N as ne,z as oe,o as B,T as f,a3 as se,aa as ae,_ as E,ae as K,af as N,ag as le,aM as ie,aN as re,Y as $,ah as ce,K as ue,a0 as de,a2 as ve,ac as pe,U as fe,aO as me,H as _e}from"./index-af9d4350.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{u as he}from"./conversations-1e6c0ef8.js";import{V as ge,a as ye}from"./VRow-19a055d2.js";import"./index-59e5c6c5.js";const be=""+new URL("user-bcdeb18e.svg",import.meta.url).href,Se=""+new URL("bot-61bdb6bf.svg",import.meta.url).href;const U=l=>(q("data-v-06bdfd97"),l=l(),J(),l),Ce={class:"message",style:{"text-align":"end"}},we=["src"],ke={class:"audio-text"},xe=U(()=>e("div",{class:"profile"},[e("img",{src:be,alt:""})],-1)),Ie=U(()=>e("div",{class:"profile",style:{"background-color":"#19c37d"}},[e("img",{src:Se,alt:""})],-1)),Ve={key:0,class:"message"},$e={class:"audio-text"},Re={key:1,class:"message"},Te={class:"controls"},De={class:"play-container"},Ae={class:"time"},Oe={class:"current"},Le=U(()=>e("div",{class:"divider"},"/",-1)),Ue={class:"length"},Me={class:"volume-container"},Pe={class:"volume-button"},je=U(()=>e("div",{class:"volume-slider"},[e("div",{class:"volume-percentage"})],-1)),Be={class:"audio-text"},Ne={__name:"Chat",props:{role:String,content:String,audioLink:String},setup(l){const V=l,T=y(null);y(null);const d=y(!1);Y(async()=>{await Z(),T.value.scrollIntoView({behavior:"smooth"})});const g=y(null);y(null);const c=window.speechSynthesis;let x=[],D=null;c.onvoiceschanged=function(){x=c.getVoices(),D=x.find(n=>n.name==="Microsoft Zira - English (United States)")};const u=G({start:"0",end:"1",pause:"2",resume:"3"});let k=null,S=y("0:00"),M=y(null);const v=y(u.end),A=P(()=>{if(v.value===u.start)console.log("暫停合成"),c.pause();else if(v.value===u.pause)console.log("恢復合成"),c.resume();else if(v.value===u.end){(c.speaking||v.value===u.pause)&&(console.log("已有語音合成物件在序列中，取消前一序列"),c.cancel(),v.value=u.end),console.log("製作合成並撥放");let n=null,o=null,_=0,p=null;const i=new SpeechSynthesisUtterance;i.text=V.content,i.lang="en-US",i.voice=D,i.rate=1.5,i.pitch=1,i.volume=.8,i.onstart=()=>{console.log("觸發 start 事件"),k=setInterval(L,1e3),v.value=u.start,n=Date.now()},i.onresume=()=>{console.log("觸發resume 事件"),k=setInterval(L,1e3),v.value=u.start,o&&(_+=Date.now()-o,o=null)},i.onend=()=>{console.log("觸發 end 事件"),clearInterval(k),S.value="0:00",v.value=u.end,p=Date.now(),M.value=O(p-n-_)},i.onpause=()=>{console.log("觸發 pause 事件"),clearInterval(k),v.value=u.pause,o=Date.now()},i.onerror=s=>{console.log("語音合成出錯:",s),v.value=u.end,c.cancel()},c.speaking&&c.cancel(),setTimeout(()=>{c.speak(i)},200)}},500);function P(n,o){let _,p;return function(...i){p?(clearTimeout(_),_=setTimeout(function(){Date.now()-p>=o&&(n(...i),p=Date.now())},o-(Date.now()-p))):(n(...i),p=Date.now())}}function O(n){const o=Math.floor(n/1e3),_=Math.floor(o/60),p=o%60;return`${_}:${p.toString().padStart(2,"0")}`}const L=()=>{let n=parseInt(S.value.split(":")[1],10),o=parseInt(S.value.split(":")[0],10);n++,n>=60&&(n=0,o++),S.value=`${o.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`};return(n,o)=>(h(),b("div",{class:"chat",ref_key:"currentMessage",ref:T},[l.role!=="assistant"?(h(),b(I,{key:0},[e("div",Ce,[l.audioLink?(h(),b("audio",{key:0,src:l.audioLink,controls:""},null,8,we)):Q("",!0),e("div",ke,[H(e("span",null,w(l.content),513),[[F,!d.value]]),e("button",{class:"btn",onClick:o[0]||(o[0]=_=>d.value=!d.value)},"文")])]),xe],64)):(h(),b(I,{key:1},[Ie,l.content==="Loading...."?(h(),b("div",Ve,[e("div",$e,w(l.content),1)])):(h(),b("div",Re,[e("div",{class:"audio-player",ref_key:"audioPlayer",ref:g},[e("div",Te,[e("div",De,[r(z,{onClick:m(A),icon:v.value===u.start?"mdi-pause":"mdi-play",size:"x-large"},null,8,["onClick","icon"])]),e("div",Ae,[e("div",Oe,w(m(S)),1),Le,e("div",Ue,w(m(M)),1)]),e("div",Me,[e("div",Pe,[r(z,{class:"volume",icon:"mdi-volume-high",size:"x-large"})]),je])])],512),e("div",Be,[e("button",{class:"bot-btn",onClick:o[1]||(o[1]=_=>d.value=!d.value)},"文"),H(e("span",null,w(l.content),513),[[F,d.value]])])]))],64))],512))}},He=W(Ne,[["__scopeId","data-v-06bdfd97"]]);const R=l=>(q("data-v-04f99426"),l=l(),J(),l),Fe={class:"text-center"},ze=R(()=>e("b",null,"Situation",-1)),Ee=R(()=>e("br",null,null,-1)),Ke=R(()=>e("br",null,null,-1)),qe=R(()=>e("b",null,"Object",-1)),Je=R(()=>e("br",null,null,-1)),We={__name:"ConversationView",setup(l){const V=ee(),T=te(),d=y(!1),g=he(),{Conversation_Id:c,conversations:x,audioRunning:D,question:u,wrapper:k,loading:S,audioUrl:M,conversationIdHistory:v,fd:X}=ne(g);g.getIdConversation;const A=g.getUserIdAllConversation,P=g.startRecordAndRecognition,O=g.handleChat,L=g.fetchAiResponse;g.waitThreeSeconds;const n=g.findConversationIdHistory,o=y(V.params.id);c.value=o.value,n(c.value),oe(()=>V.params.id,async s=>{console.log("監控到route路徑改變"),c.value=s,await A(),n(s)});const _=B(()=>{const s=x.value.find(j=>j._id===c.value);if(!s||!s.history[0]||!s.history[0].content)return null;const t=s.history[0].content,a=t.indexOf("Situation:"),C=t.indexOf("Objective:");return a!==-1&&C!==-1?t.substring(a+10,C).trim():null}),p=B(()=>{const s=x.value.find(j=>j._id===c.value);if(!s||!s.history[0]||!s.history[0].content)return null;const t=s.history[0].content,a=t.indexOf("Objective:"),C=t.indexOf("Note:");return a!==-1&&C!==-1?t.substring(a+10,C).trim():null}),i=B(()=>x.value.slice().sort((s,t)=>new Date(t.updatedAt)-new Date(s.updatedAt)));return(async()=>{try{console.log("開始執行IIFE"),await A(),n(V.params.id),k.value.length===0&&await L()}catch(s){console.log("前端IIFE失敗"),console.log(s),T({text:s.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(s,t)=>(h(),b(I,null,[r(se,{class:"conversation-list"},{default:f(()=>[(h(!0),b(I,null,E(i.value,(a,C)=>(h(),b(I,{key:a._id},[r(de,{to:a._id},{default:f(()=>[r(ve,{textContent:w(a.topic)},null,8,["textContent"])]),_:2},1032,["to"]),r(pe,{class:"my-0"})],64))),128))]),_:1}),r(ge,{class:"chat-container"},{default:f(()=>[r(ye,{class:"chat-content"},{default:f(()=>[r(K,{flat:"",class:"chat-card"},{default:f(()=>[r(N,{class:"chat-text"},{default:f(()=>[(h(!0),b(I,null,E(m(k),(a,C)=>(h(),fe(He,me(_e({key:C},a)),null,16))),128))]),_:1}),r(N,{class:"input-field"},{default:f(()=>[e("button",{class:"promptBtn",onClick:t[0]||(t[0]=a=>d.value=!d.value)},"P"),r(le,{modelValue:m(u),"onUpdate:modelValue":t[1]||(t[1]=a=>ie(u)?u.value=a:null),label:"type_a_message",type:"text",outlined:"","append-inner-icon":"mdi-send","onClick:appendInner":t[2]||(t[2]=a=>m(S)?null:m(O)),onKeyup:t[3]||(t[3]=re(a=>m(S)?null:m(O),["enter"])),"append-icon":m(D)?"mdi-microphone-off":"mdi-microphone","onClick:append":t[4]||(t[4]=a=>m(S)?null:m(P)),"hide-details":""},null,8,["modelValue","append-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e("div",Fe,[r(ae,{modelValue:d.value,"onUpdate:modelValue":t[6]||(t[6]=a=>d.value=a),activator:"parent",width:"auto"},{default:f(()=>[r(K,null,{default:f(()=>[r(N,null,{default:f(()=>[ze,$(),Ee,$(" "+w(_.value)+" ",1),Ke,qe,$(),Je,$(" "+w(p.value),1)]),_:1}),r(ce,null,{default:f(()=>[r(ue,{color:"primary",block:"",onClick:t[5]||(t[5]=a=>d.value=!1)},{default:f(()=>[$("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])],64))}},et=W(We,[["__scopeId","data-v-04f99426"]]);export{et as default};
