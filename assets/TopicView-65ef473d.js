import{p as G,a$ as J,ak as ee,b0 as ae,g as te,D as le,b1 as oe,b2 as se,o as re,u as ne,b3 as ue,b4 as q,ax as L,c as a,H as z,O as ie,x as n,a4 as D,Q as E,R as M,S as ce,T as l,ab as de,X as me,ac as pe,K as w,Y as P,V as ge,U as H,W as K,$ as s,ad as ve,ae as fe,b5 as Ve,a5 as be,af as O,ag as ke,b6 as xe,ah as ye,Z as he,a1 as Q,a6 as _e,a7 as Ce,a8 as we}from"./index-4ee9dc64.js";import{c as Pe,a as $,e as Se,u as Fe,d as S}from"./index.esm-d34bf847.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Be}from"./VContainer-d394501d.js";import{V as Ue,a as W}from"./VRow-7905387e.js";import{V as Te}from"./VForm-0b6c110b.js";import{V as Ae}from"./VTextarea-34d52e55.js";import"./_commonjsHelpers-39b5b250.js";const De=G({...J(),...ee(ae(),["inline"])},"VCheckbox"),Me=te()({name:"VCheckbox",inheritAttrs:!1,props:De(),emits:{"update:modelValue":r=>!0,"update:focused":r=>!0},setup(r,d){let{attrs:f,slots:m}=d;const u=le(r,"modelValue"),{isFocused:F,focus:V,blur:y}=oe(r),I=se(),p=re(()=>r.id||`checkbox-${I}`);return ne(()=>{const[B,c]=ue(f),[i,R]=q.filterProps(r),[h,U]=L.filterProps(r);return a(q,z({class:["v-checkbox",r.class]},B,i,{modelValue:u.value,"onUpdate:modelValue":b=>u.value=b,id:p.value,focused:F.value,style:r.style}),{...m,default:b=>{let{id:T,messagesId:k,isDisabled:A,isReadonly:g}=b;return a(L,z(h,{id:T.value,"aria-describedby":k.value,disabled:A.value,readonly:g.value},c,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,onFocus:V,onBlur:y}),m)}})}),{}}});const $e=r=>(_e("data-v-f91bac20"),r=r(),Ce(),r),Re=$e(()=>we("h1",{class:"text-center"},"話題管理",-1)),Ne={__name:"TopicView",setup(r){const d=ie(),f=n(10),m=n(1),u=n([]),F=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"話題名稱",align:"center",sortable:!1,key:"topic"},{title:"Prompt內文",align:"center",sortable:!1,key:"content"},{title:"分類",align:"center",sortable:!1,key:"category"},{title:"話題啟用",align:"center",sortable:!1,key:"active"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],V=n(!1),y=n(0),I=n(""),p=async()=>{var o;V.value=!0;try{const{data:e}=await D.get("/prompts/all",{params:{page:m.value,itemsPerPage:f.value}});console.log("管理表單頁面，成功獲得all prompt到前端"),u.value.splice(0,u.value.length,...e.result),y.value=e.result.length}catch(e){d({text:((o=e.response)==null?void 0:o.data.message)||"發生錯誤",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}V.value=!1};p();const B=o=>{i.value=o._id,g.value.value=o.topic,v.value.value=o.content,_.value.value=o.category,C.value.value=o.active,c.value=!0},c=n(!1),i=n(""),R=()=>{i.value="",c.value=!0},h=()=>{c.value=!1,A(),j.value.deleteFileRecord()},U=["日常話題","興趣話題","旅遊話題","職場話題","考試口說","情境話題"],b=Pe({topic:$().required("缺少名稱"),content:$().required("缺少prompt內容"),category:$().required("缺少分類").test("isCategory",o=>U.includes(o)),active:Se()}),{handleSubmit:T,isSubmitting:k,resetForm:A}=Fe({validationSchema:b,initialValues:{topic:"",content:"",category:"",active:!1}}),g=S("topic"),v=S("content"),_=S("category"),C=S("active"),x=n([]),N=n([]),j=n(null),X=T(async o=>{if(!(i.value.length===0&&x.value.length===0))try{const e=new FormData;e.append("topic",o.topic),e.append("content",o.content),e.append("category",o.category),e.append("active",o.active),x.value.length>0&&e.append("image",x.value[0].file),i.value.length>0?(console.log("開始修改prompt(前端)"),await D.patch("/prompts/"+i.value,e),d({text:"修改prompt成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})):(console.log("開始新增prompt (前端)"),await D.post("/prompts",e),d({text:"新增prompt成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})),h(),p()}catch(e){console.log(e),d({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(o,e)=>{const Y=E("VDataTableServer"),Z=E("VueFileAgent");return M(),ce(me,null,[a(Be,null,{default:l(()=>[a(Ue,null,{default:l(()=>[a(W,{cols:"12"},{default:l(()=>[Re]),_:1}),a(pe),a(W,{cols:"12"},{default:l(()=>[a(w,{color:"green",onClick:R},{default:l(()=>[P("新增話題")]),_:1}),a(Y,{"items-per-page":f.value,"onUpdate:itemsPerPage":[e[0]||(e[0]=t=>f.value=t),p],page:m.value,"onUpdate:page":[e[1]||(e[1]=t=>m.value=t),p],items:u.value,headers:F,loading:V.value,"items-length":y.value,search:I.value,hover:""},{top:l(()=>[]),"item.image":l(({item:t})=>[a(ge,{src:t.raw.image,height:"50px"},null,8,["src"])]),"item.active":l(({item:t})=>[t.raw.active?(M(),H(Q,{key:0,icon:"mdi-check"})):K("",!0),t.raw.active?K("",!0):(M(),H(Q,{key:1,icon:"mdi-close"}))]),"item.edit":l(({item:t})=>[a(w,{icon:"mdi-pencil",onClick:je=>B(t.raw),variant:"text"},null,8,["onClick"])]),_:2},1032,["items-per-page","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),a(de,{class:"dialog",persistent:"",width:"500px",modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=t=>c.value=t),scrollable:""},{default:l(()=>[a(Te,{disabled:s(k),onSubmit:ve(s(X),["prevent"])},{default:l(()=>[a(fe,null,{default:l(()=>[a(Ve,null,{default:l(()=>[P(be(i.value.length>0?"編輯話題":"新增話題"),1)]),_:1}),a(O,null,{default:l(()=>[a(ke,{label:"名稱",modelValue:s(g).value.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s(g).value.value=t),"error-messages":s(g).errorMessage.value},null,8,["modelValue","error-messages"]),a(Ae,{label:"Prompt內文",modelValue:s(v).value.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s(v).value.value=t),"error-messages":s(v).errorMessage.value},null,8,["modelValue","error-messages"]),a(Z,{modelValue:x.value,"onUpdate:modelValue":e[4]||(e[4]=t=>x.value=t),"raw-model-value":N.value,"onUpdate:rawModelValue":e[5]||(e[5]=t=>N.value=t),"max-files":1,"max-size":"1MB",accept:"image/jpg,image/jpeg,image/png",multiple:!1,"error-text":{type:"檔案格式錯誤",size:"檔案太大"},"help-text":"選擇檔案或拖放到這裡",deletable:"",ref_key:"fileAgent",ref:j},null,8,["modelValue","raw-model-value"]),a(O,{class:"d-flex justify-end padding-0"},{default:l(()=>[a(xe,{label:"分類",modelValue:s(_).value.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s(_).value.value=t),"error-messages":s(_).errorMessage.value,items:U},null,8,["modelValue","error-messages"]),a(Me,{label:"啟用話題",modelValue:s(C).value.value,"onUpdate:modelValue":e[7]||(e[7]=t=>s(C).value.value=t),"error-messages":s(C).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(ye,null,{default:l(()=>[a(he),a(w,{color:"red",onClick:h,loading:s(k)},{default:l(()=>[P("取消")]),_:1},8,["loading"]),a(w,{color:"green",type:"submit",loading:s(k)},{default:l(()=>[P("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}},We=Ie(Ne,[["__scopeId","data-v-f91bac20"]]);export{We as default};