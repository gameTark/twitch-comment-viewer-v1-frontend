(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{19186:function(e,t,n){Promise.resolve().then(n.bind(n,52245))},52245:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var s=n(57437),a=n(2265),u=n(16463),l=n(67687),r=n(62022),i=n(16603);let c=()=>{let e=(0,u.useRouter)(),t=(0,a.useCallback)(()=>{e.push("/games")},[]),n=(0,u.useSearchParams)(),c=(0,r.Gq)(async()=>{let e=n.get("templateId");return null==e?void 0:"string"!=typeof e?null:await l.db.broadcastTemplates.get(Number(e))},[]),o=(0,a.useCallback)(t=>{let{id:n,favorite:s,...a}=t;l.db.broadcastTemplates.add({...a,favorite:!1}),e.push("/games")},[]);return null===c?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("div",{className:"fixed w-full h-full bg-base-100 z-10",children:(0,s.jsx)(i.ZP,{value:c,onCancel:t,onCommit:o})})};function o(){return(0,s.jsx)(a.Suspense,{children:(0,s.jsx)(c,{})})}}},function(e){e.O(0,[772,22,425,299,343,478,437,971,23,744],function(){return e(e.s=19186)}),_N_E=e.O()}]);