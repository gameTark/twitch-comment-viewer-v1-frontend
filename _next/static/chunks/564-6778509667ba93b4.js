"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{8913:function(e,l,s){s.d(l,{R:function(){return i}});var a=s(57437),t=s(2265),n=s(97383);let r=e=>(0,a.jsxs)("div",{className:"flex flex-col gap-10 px-8 py-4 select-none",children:[(0,a.jsx)("p",{className:"text-large text-center",children:e.title}),(0,a.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,a.jsx)("button",{className:"btn btn-success",onClick:e.onSuccess,children:e.successText||"はい"}),e.nofail?null:(0,a.jsx)("button",{className:"btn btn-ghost",onClick:e.onFail,children:e.failText||"いいえ"})]})]}),i=()=>{let e=(0,n.v)();return{open:(0,t.useCallback)(l=>{let{onSuccess:s,onFail:t,...n}=l;e.open((0,a.jsx)(r,{...n,onFail:()=>{e.close(),null!=t&&t()},onSuccess:()=>{e.close(),null!=s&&s()}}))},[]),close:(0,t.useCallback)(()=>{e.close()},[])}}},44286:function(e,l,s){s.d(l,{default:function(){return m},t:function(){return x}});var a=s(57437),t=s(2265),n=s(91279),r=s(86578),i=s(67687),c=s(62022),d=s(19939),o=s(53897),u=s(15071);let x=e=>{let l=(0,n.yR)(async()=>await i.db.broadcastTemplates.toArray(),[]),s=(0,c.Gq)(async()=>{if(null==l)return;let e=await Promise.all(l.map(async(e,l)=>{if(null==e.gameId)return;let s=await u.l.dataloader.load(e.gameId);if(null!=s)return{...e,templateIndex:l,tags:e.tags.join(","),gameTitle:s.name}}));return new r.Z(e,{keys:["broadcastTitle","tags","gameTitle"]})},[l]);return(0,t.useMemo)(()=>{if(null!=s&&null!=l)return s.search(e).map(e=>{var s;return l[(null===(s=e.item)||void 0===s?void 0:s.templateIndex)||0]})},[s,e,l])};function m(){return(0,a.jsxs)("div",{className:"flex flex-col h-full grow w-full",children:[(0,a.jsxs)("div",{className:"flex w-full justify-center mx-auto pt-6 pb-4 border-b items-center",children:[(0,a.jsx)("div",{className:"w-2/12 flex"}),(0,a.jsx)("div",{className:"w-6/12",children:(0,a.jsx)(o.ol,{})}),(0,a.jsx)("div",{className:"w-2/12 flex justify-end",children:(0,a.jsx)(o.zW,{})})]}),(0,a.jsx)(d.X,{className:"flex grow z-0",children:(0,a.jsx)(o.Nd,{})})]})}},53897:function(e,l,s){s.d(l,{Nd:function(){return L},zW:function(){return X},J3:function(){return F},ol:function(){return Y},ZP:function(){return M}});var a=s(57437),t=s(2265),n=s(67688),r=s(44839),i=s(91279),c=s(67687),d=s(59151),o=s(91825),u=s(62022),x=s(19939),m=s(11581),h=s(44286),p=s(16463),b=s(35941),j=s(31014),f=s(39343),g=s(82876),v=s(8913);let N=e=>(0,a.jsx)("span",{className:(0,r.Z)("badge",e.type,e.outline?"badge-outline":"",e.size),children:e.children}),w=e=>{let{name:l,control:s,rules:n}=e,r=(0,f.bc)({name:l,control:s,rules:n}),{fields:i,append:c,remove:d}=(0,f.Dq)({name:l,control:s,rules:n}),[o,u]=(0,t.useState)(""),x=()=>{""===o||null==o||r.field.value.includes(o)||(c(o),u(""))},h=e=>{d(e)},p=(0,t.useCallback)(e=>{if("Enter"===e.key){e.preventDefault(),e.stopPropagation(),console.log("add enter"),x();return}},[x]);return(0,a.jsxs)("div",{className:"inline-flex flex-col gap-2",children:[(0,a.jsxs)("span",{className:"inline-flex gap-2",children:[(0,a.jsx)("input",{className:"input input-bordered w-64",type:"text",value:o,onChange:e=>{u(e.currentTarget.value)},onKeyDown:p,disabled:e.disabled}),(0,a.jsx)("button",{type:"button",className:"btn",onClick:x,children:"追加"})]}),(0,a.jsx)("ul",{className:"flex gap-1 select-none flex-wrap",children:i.map((e,l)=>(0,a.jsx)("li",{children:(0,a.jsx)(N,{size:"badge-lg",type:"badge-ghost",children:(0,a.jsxs)("span",{className:"flex items-center gap-1 whitespace-nowrap",children:[r.field.value[l],(0,a.jsx)("input",{type:"hidden",...r.field}),(0,a.jsx)("label",{className:"cursor-pointer",onClick:()=>h(l),children:(0,a.jsx)(m.U.CROSS.SIZE,{size:15})})]})})},e.id))})]})};var y=s(15071),C=s(12853);let{BROADCAST_LANGUAGE:k,CLASSIFICATION_LABELS:T}=b.TWITCH_CONSTANTS,I=(0,t.createContext)(null),S=()=>(0,t.useContext)(I),P=(0,C.kQ)(S,["broadcastTitle"]),R=(0,C.RY)(S,["createdAt"]),_=((0,C.RY)(S,["updateAt"]),()=>{let e=S(),l=(0,v.R)();return(0,t.useCallback)(async()=>{l.open({title:"配信に適用しますか？",onSuccess:async()=>{let s=await c.db.getMe();null!=e&&(null==s?void 0:s.id)!=null&&(await g.$O.channels_patch({parameters:{broadcaster_id:s.id},requestBody:{game_id:e.gameId,broadcaster_language:e.language,title:e.broadcastTitle,tags:e.tags,is_branded_content:e.isBrandedContent}}),l.open({title:"適用完了",successText:"OK",nofail:!0}))}})},[e])}),Z=()=>{let e=S(),l=(0,v.R)();return(0,t.useCallback)(async()=>{l.open({title:"このテンプレートを削除しますか？",onSuccess:async()=>{(null==e?void 0:e.id)!=null&&await (0,d.uM)([e.id])}})},[e])},A=()=>{let e=S(),l=(0,p.useRouter)();return(0,t.useCallback)(()=>{l.push("/games/edit?templateId=".concat(null==e?void 0:e.id))},[e,l])},z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=S(),s=(0,p.useRouter)();return(0,t.useCallback)(()=>{if(e.isNew){s.push("/games/create");return}e.isHistory?s.push("/games/create?broadcastHistoryId=".concat(null==l?void 0:l.id)):s.push("/games/create?templateId=".concat(null==l?void 0:l.id))},[l,s])},q=()=>(0,f.Gc)(),E={Provider:e=>(0,a.jsx)(I.Provider,{value:e.data,children:e.children}),Title:P,TagBadge:e=>{let l=S();return(0,a.jsxs)("ul",{...e,children:[null==l?void 0:l.tags.slice(0,2).map(e=>(0,a.jsx)(N,{size:"badge-sm",outline:!0,children:e},e)),((null==l?void 0:l.tags.length)||0)>2?(0,a.jsx)("li",{className:"text-caption",children:"..."}):null]})},Language:e=>{var l;let s=S(),t=null===(l=k.find(e=>e.id===(null==s?void 0:s.language)))||void 0===l?void 0:l.name;return null==t?(0,a.jsx)("span",{...e}):(0,a.jsx)("span",{...e,children:t})},CreatedAt:R,Favorite:e=>{let l=S(),s=(0,t.useCallback)(e=>{if((null==l?void 0:l.id)==null)throw Error("not found props id");(0,d.Id)(l.id,{favorite:e.currentTarget.checked})},[l]);return(null==l?void 0:l.favorite)==null?(0,a.jsx)("input",{...e,type:"checkbox",className:"favorite"}):(0,a.jsx)("input",{...e,type:"checkbox",defaultChecked:l.favorite,className:"favorite text-outline",onInput:s})},Apply:e=>{let l=_();return(0,a.jsx)("button",{className:"btn btn-sm btn-accent",onClick:l,...e,type:"button",children:"適用"})},Edit:e=>{let l=A();return(0,a.jsx)("button",{className:"btn btn-sm",onClick:l,...e,type:"button",children:"編集"})},Delete:e=>{let l=Z();return(0,a.jsx)("button",{className:"btn btn-sm btn-ghost",onClick:l,...e,type:"button",children:"削除"})},Copy:e=>{let l=z();return(0,a.jsx)("button",{className:"btn btn-sm",onClick:l,...e,type:"button",children:"複製"})},uses:{useApply:_,useDelete:Z,useEdit:A,useCreate:z},ApplyGameProvider:e=>{let l=S();return(0,a.jsx)(e.Provider,{id:null==l?void 0:l.gameId,children:e.children})},editor:{BroadcastFormProvider:e=>{let{children:l,onSubmit:s}=e,t=S(),r=(0,f.cI)({mode:"onChange",defaultValues:{tags:[],...t},resolver:(0,j.F)(n.XV)});return(0,a.jsx)(f.RV,{...r,children:(0,a.jsx)("form",{className:"w-full h-full",...e,onSubmit:r.handleSubmit(s),children:l})})},Title:()=>{var e;let l=q();return(0,a.jsxs)("div",{className:"inline-flex flex-col",children:[(0,a.jsx)("input",{className:"input input-bordered w-full max-w-xs",type:"text",...l.register("broadcastTitle")}),(0,a.jsxs)("p",{className:"text-error select-none",children:[null===(e=l.formState.errors.broadcastTitle)||void 0===e?void 0:e.message," \xa0"]})]})},Language:()=>{let{register:e}=q();return(0,a.jsxs)("select",{className:"select select-bordered max-w-xs",...e("language"),children:[(0,a.jsx)("option",{disabled:!0,children:"選択言語"}),k.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))]})},BrandedContents:()=>{let{register:e}=q();return(0,a.jsx)("input",{type:"checkbox",className:"ios-toggle",...e("isBrandedContent")})},ClassificationLables:()=>{let{register:e}=q();return(0,a.jsx)(a.Fragment,{children:T.map(l=>(0,a.jsxs)("div",{className:" inline-flex gap-2 justify-center",children:[(0,a.jsx)("input",{type:"checkbox",value:l.id,...e("classificationLabels")},l.id),(0,a.jsx)("span",{children:l.description})]},l.id))})},Tags:()=>{var e;let l=q();return(0,a.jsxs)("div",{className:"inline-flex flex-col",children:[(0,a.jsx)(w,{control:l.control,name:"tags"}),(0,a.jsxs)("p",{className:"text-error select-none",children:[null===(e=l.formState.errors.tags)||void 0===e?void 0:e.message," \xa0"]})]})},Game:()=>{let{setValue:e,getValues:l}=q(),[s,n]=(0,t.useState)(l("gameId"));return(0,a.jsx)(y.l.Input,{value:s,onChange:l=>{e("gameId",l.currentTarget.value),n(l.currentTarget.value)}})}}},B=()=>{let e=(0,r.Z)("inline-block h-full w-full font-black border-[2vw] border-neutral blur-3xl"),l=(0,r.Z)("opacity-40 hover:opacity-100 transition-opacity drop-shadow-sm text-outline");return(0,a.jsxs)("div",{className:"relative z-0 w-full indicator",children:[(0,a.jsx)("div",{className:"indicator-item z-20",children:(0,a.jsx)(E.Favorite,{})}),(0,a.jsxs)("div",{className:"z-10 absolute top-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity overflow-hidden rounded-box backdrop-blur-sm",children:[(0,a.jsxs)("div",{className:"w-full h-full grid grid-cols-2 grid-rows-2 font-bold absolute top-0",children:[(0,a.jsx)("div",{className:(0,r.Z)("bg-success",e)}),(0,a.jsx)("div",{className:(0,r.Z)("bg-accent",e)}),(0,a.jsx)("div",{className:(0,r.Z)("bg-info",e)}),(0,a.jsx)("div",{className:(0,r.Z)("bg-error",e)})]}),(0,a.jsxs)("div",{className:"z-20 absolute top-0 w-full h-full grid grid-cols-2 grid-rows-2 font-bold text-2xl",children:[(0,a.jsx)(E.Apply,{className:(0,r.Z)("text-success",l)}),(0,a.jsx)(E.Copy,{className:(0,r.Z)("text-accent",l)}),(0,a.jsx)(E.Edit,{className:(0,r.Z)("text-info",l)}),(0,a.jsx)(E.Delete,{className:(0,r.Z)("text-error",l)})]})]}),(0,a.jsxs)("div",{className:"card w-full bg-base-100 shadow-xl image-full z-0 aspect-square h-full",children:[(0,a.jsx)("figure",{children:(0,a.jsx)(y.l.Image,{className:" object-cover",width:500})}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h2",{className:"card-title w-full",children:(0,a.jsx)(y.l.Name,{className:" break-all line-clamp-2 w-full"})}),(0,a.jsx)("p",{children:(0,a.jsx)(E.Title,{})}),(0,a.jsx)(E.TagBadge,{className:"flex justify-end gap-2 flex-wrap"})]})]})]})};function F(){let e=(0,i.yR)(async()=>(await (0,d.oV)({type:"favorite",value:!0})).filter(o.h.notNull),[]);return(0,a.jsx)("div",{className:"flex items-stretch flex-wrap -m-3 h-full",children:null==e?void 0:e.map(e=>(0,a.jsx)("div",{className:"w-1/4 flex p-3 min-w-60 max-w-96 h-max",children:(0,a.jsx)(E.Provider,{data:e,children:(0,a.jsx)(y.l.Provider,{id:e.gameId,children:(0,a.jsx)(B,{})})})},e.id))})}function L(){let e=(0,i.yR)(async()=>(await (0,d.oV)()).filter(o.h.notNull),[]);return(0,a.jsxs)("div",{className:"p-10 h-fit flex flex-col gap-5 w-full",children:[(0,a.jsx)("h2",{className:"heading-2",children:"お気に入り"}),(0,a.jsx)("div",{className:"flex items-stretch flex-wrap -m-3",children:(0,a.jsx)(F,{})}),(0,a.jsx)("h2",{className:"heading-2",children:"全件"}),(0,a.jsx)("div",{className:"flex items-stretch flex-wrap -m-3",children:null==e?void 0:e.map(e=>(0,a.jsx)("div",{className:" w-1/5 flex p-3 min-w-60 max-w-96",children:(0,a.jsx)(E.Provider,{data:e,children:(0,a.jsx)(y.l.Provider,{id:e.gameId,children:(0,a.jsx)(B,{})})})},e.id))})]})}function M(e){return(0,a.jsx)(E.Provider,{data:e.value,children:(0,a.jsx)(E.editor.BroadcastFormProvider,{onSubmit:l=>{let s=n.XV.parse(l);e.onCommit&&e.onCommit(s)},children:(0,a.jsx)(x.X,{className:"@container relative",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4 h-full",children:[(0,a.jsxs)("div",{className:"inline-flex flex-col @[600px]:flex-row gap-4",children:[(0,a.jsx)("p",{className:"w-48 font-bold pt-3 @[600px]:pt-0",children:"配信タイトル"}),(0,a.jsx)(E.editor.Title,{})]}),(0,a.jsxs)("div",{className:"inline-flex flex-col @[600px]:flex-row gap-4",children:[(0,a.jsx)("p",{className:"w-48 font-bold pt-3 @[600px]:pt-0",children:"対象ゲーム"}),(0,a.jsx)(E.editor.Game,{})]}),(0,a.jsxs)("div",{className:"inline-flex flex-col @[600px]:flex-row gap-4",children:[(0,a.jsx)("p",{className:"w-48 font-bold pt-3 @[600px]:pt-0",children:"タグ"}),(0,a.jsx)(E.editor.Tags,{})]}),(0,a.jsxs)("div",{className:"inline-flex flex-col @[600px]:flex-row gap-4",children:[(0,a.jsx)("p",{className:"w-48 font-bold pt-3 @[600px]:pt-0",children:"配信言語"}),(0,a.jsx)(E.editor.Language,{})]}),(0,a.jsxs)("div",{className:"inline-flex gap-4 my-4 @[600px]:my-0",children:[(0,a.jsx)("p",{className:"w-48 font-bold",children:"ブランドコンテンツ"}),(0,a.jsx)(E.editor.BrandedContents,{})]}),(0,a.jsxs)("div",{className:"inline-flex gap-2 items-end justify-end sticky bottom-0 bg-base-100 py-4 grow",children:[(0,a.jsx)("button",{className:"btn btn-error btn-outline",type:"button",onClick:e.onCancel,children:e.canncelLabel||"キャンセル"}),(0,a.jsx)("button",{className:"btn btn-success btn-outline",children:e.commmitLabel||"完了"})]})]})})})})}let D=()=>{let[e,l]=(0,t.useState)("close");return(0,a.jsxs)(a.Fragment,{children:["open"===e?(0,a.jsxs)("dialog",{className:"modal modal-open",children:[(0,a.jsx)("div",{className:" modal-box w-full h-max",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex gap-6",children:[(0,a.jsx)(y.l.Image,{width:150,className:"rounded-box aspect-square object-cover"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(y.l.Name,{className:"text-md font-extralight line-clamp-1"})}),(0,a.jsx)(E.Title,{className:"text-lg"}),(0,a.jsx)(E.Language,{}),(0,a.jsx)(E.TagBadge,{className:"gap-2 flex"}),(0,a.jsx)(E.CreatedAt,{})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-2 gap-2",children:[(0,a.jsx)(E.Apply,{className:"btn btn-square w-full btn-success btn-outline"}),(0,a.jsx)(E.Copy,{className:"btn btn-square w-full btn-accent  btn-outline"}),(0,a.jsx)(E.Edit,{className:"btn btn-square w-full btn-info  btn-outline"}),(0,a.jsx)(E.Delete,{className:"btn btn-square w-full btn-error btn-outline"})]})]})}),(0,a.jsx)("label",{className:"modal-backdrop",onClick:()=>l("close")})]}):null,(0,a.jsxs)("li",{className:"flex gap-2 items-center cursor-pointer p-2 hover:bg-base-200 rounded-box",onClick:()=>l("open"),children:[(0,a.jsx)(y.l.Image,{width:60,className:" rounded-box aspect-square object-cover"}),(0,a.jsxs)("div",{className:"flex flex-col grow",children:[(0,a.jsx)(y.l.Name,{className:"text-md font-extralight line-clamp-1"}),(0,a.jsx)(E.Title,{className:"text-lg"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(E.TagBadge,{className:"gap-2 flex flex-wrap justify-end"})})]})]})},G=()=>{let e=E.uses.useCreate({isHistory:!0});return(0,a.jsxs)("div",{className:"grid grid-cols-[max-content_minmax(0,1fr)] grid-rows-[max-content_1fr_max-content] gap-y-2 gap-x-5 cursor-pointer hover:bg-base-300 py-2 px-2 rounded-box select-none",onClick:e,children:[(0,a.jsx)("p",{className:"col-start-2",children:(0,a.jsx)(y.l.Name,{className:"break-all line-clamp-1 w-full "})}),(0,a.jsx)(y.l.Image,{width:100,className:"row-span-3 col-start-1 row-start-1 aspect-square rounded-box object-cover"}),(0,a.jsx)("p",{className:"col-start-2",children:(0,a.jsx)(E.Title,{})}),(0,a.jsxs)("p",{className:"col-start-2 text-right text-caption opacity-60",children:["配信日 ",(0,a.jsx)(E.CreatedAt,{format:"YYYY/MM/DD"})]})]})},X=()=>{var e;let l=E.uses.useCreate({isNew:!0}),s=(0,t.useRef)(null),n=(0,c.X1)(c.db.channelHistories,{pageNo:0,pageSize:10},[]);return(0,a.jsxs)("div",{className:"inline-flex items-center gap-3",children:[(0,a.jsx)("button",{className:"btn btn-outline btn-success btn-xs",onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.showModal()},children:"過去の配信から作成"}),(0,a.jsx)("button",{className:"btn btn-outline btn-success btn-xs",onClick:l,children:"新規追加"}),(0,a.jsx)("dialog",{className:"modal",ref:s,children:(0,a.jsxs)("div",{className:"modal-box relative h-4/6 flex flex-col gap-5",children:[(0,a.jsx)("button",{className:" btn btn-circle btn-sm btn-ghost absolute right-0 top-0 m-3 select-none cursor-pointer",onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.close()},children:m.U.CROSS.MD}),(0,a.jsx)("h3",{children:"テンプレートを作成"}),(0,a.jsx)(x.X,{className:"border pl-1 pr-1 rounded-box rounded-r-none",noPadding:!0,children:(0,a.jsx)("div",{className:"flex flex-col gap-6 py-1",children:null===(e=n.value)||void 0===e?void 0:e.target.map(e=>(0,a.jsx)(E.Provider,{data:{id:e.id,channelId:e.channelId,gameId:e.categoryId,broadcastTitle:e.broadcastTitle,language:e.language,tags:[],classificationLabels:[],isBrandedContent:!1,createdAt:e.createdAt},children:(0,a.jsx)(E.ApplyGameProvider,{Provider:y.l.Provider,children:(0,a.jsx)(G,{})})},e.id))})})]})})]})},Y=()=>{let[e,l]=(0,u.Gl)(""),s=(0,h.t)(e);return(0,a.jsxs)("div",{className:(0,r.Z)("flex items-center dropdown dropdown-bottom dropdown-hover w-full",{"[&>input]:hover:rounded-b-none":!(null==s||0==s.length)}),children:[(0,a.jsx)("input",{className:(0,r.Z)("input input-bordered input-sm input-ghost grow bg-base-100 text-base-content rounded-box",{"focus:rounded-b-none":!(null==s||0==s.length)}),value:e,onChange:l,placeholder:"検索"}),null==s||0==s.length?null:(0,a.jsx)(x.X,{className:"dropdown-content z-10 bg-base-100 shadow-2xl w-full h-max max-h-96 border-x rounded-b-box border-b rounded-r-none",children:(0,a.jsx)("ul",{className:"flex flex-wrap gap-2 flex-col p-2",children:s.map(e=>(0,a.jsx)(E.Provider,{data:e,children:(0,a.jsx)(y.l.Provider,{id:e.gameId,children:(0,a.jsx)(D,{})})},e.id))})})]})}},15071:function(e,l,s){s.d(l,{l:function(){return C}});var a=s(57437),t=s(2265),n=s(44839),r=s(91279),i=s(59151),c=s(87722);class d extends c.K{async batchLoad(e){return await (0,i.m7)(e)}}let o=e=>l=>e.replace("{width}",l.width.toString()).replace("{height}",l.height.toString());var u=s(82876),x=s(62022),m=s(19939),h=s(11581),p=s(12853);let b=new d,j=(0,t.createContext)(null),f=()=>(0,t.useContext)(j),g=e=>{let l=(0,r.yR)(async()=>{if(null!=e.id)return await b.load(e.id)},[e.id]);return(0,a.jsx)(j.Provider,{value:l,children:e.children})},v=(0,p.kQ)(f,["name"]),N=(0,p.RY)(f,["updateAt"]),w=(0,p.RY)(f,["createdAt"]),y=e=>{let l=f(),s=(0,t.useMemo)(()=>o((null==l?void 0:l.box_art_url)||"https://static-cdn.jtvnw.net/ttv-static/404_boxart-{width}x{height}.jpg")({width:Number(e.width)||300,height:Math.round(Number((Number(e.width)||300)/3*4))}),[l]);return(0,a.jsx)("img",{...e,src:s,alt:null==l?void 0:l.name})},C={dataloader:b,Provider:g,Name:v,Image:y,UpdateAt:N,CreatedAt:w,Search:e=>{let[l,s]=(0,x.Gl)(),[r,i]=(0,t.useState)(null),c=(0,t.useCallback)(l=>{if(null!=e.onChange){if(null==l.currentTarget.dataset.game)throw Error("not found game");e.onChange(l.currentTarget.dataset.game)}},[e.onChange]),d=(0,x.Nr)(500,async e=>{if(""===e||null==e)return null;i(await (0,u.sT)({query:e}))},[]);return(0,t.useEffect)(()=>{d(l)},[l]),(0,a.jsx)("div",{className:"h-96",children:(0,a.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,a.jsx)("input",{type:"text",placeholder:"Type here",className:"input input-bordered w-full max-w-xs",value:l,onChange:s}),(0,a.jsx)(m.X,{className:(0,n.Z)("w-full border h-80 bg-base-100"),children:null!=r?(0,a.jsx)("ul",{className:"flex flex-col gap-2 menu",children:r.map(e=>(0,a.jsx)("li",{"data-game":e.id,onClick:c,tabIndex:0,children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("img",{className:"aspect-square object-cover rounded-btn border-2",src:e.box_art_url,alt:e.id,width:52}),(0,a.jsx)("p",{className:" text-sm",children:e.name})]})},e.id))}):null})]})})},Input:e=>{let l=(0,t.useRef)(null),s=(0,t.useRef)(null),n=(0,t.useCallback)(()=>{var e;null===(e=s.current)||void 0===e||e.showModal()},[s.current]),r=(0,t.useCallback)(()=>{var e;null===(e=s.current)||void 0===e||e.close()},[s.current]),i=(0,t.useCallback)(a=>{var t;null===(t=s.current)||void 0===t||t.close(),null!=e.onChange&&null!=l.current&&(l.current.value=a,l.current.dispatchEvent(new Event("input",{bubbles:!0})))},[e.onChange]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:" inline-flex max-w-xs cursor-pointer items-center gap-4 border dasy-rounded rounded-btn p-2 ",onClick:n,children:[(0,a.jsx)("input",{type:"hidden",onInput:e.onChange,ref:l,name:e.name}),(0,a.jsx)(g,{id:e.value,children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-4 w-full",children:[(0,a.jsx)(y,{className:"w-12 h-12 object-cover overflow-hidden rounded-btn border-2 flex-none"}),(0,a.jsx)(v,{className:"font-bold grow line-clamp-2",children:"ゲーム未選択"}),(0,a.jsx)("div",{className:"text-info",children:h.U.SEARCH})]})})]}),(0,a.jsxs)("dialog",{className:"modal",ref:s,children:[(0,a.jsx)("div",{className:"modal-box h-min",children:(0,a.jsx)(C.Search,{onChange:i})}),(0,a.jsx)("label",{className:"modal-backdrop",children:(0,a.jsx)("button",{onClick:r,children:"close"})})]})]})}}}}]);