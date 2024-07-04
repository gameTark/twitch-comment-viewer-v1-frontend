"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{45597:function(e,t,o){o.d(t,{Q:function(){return _},ThemeGrobalProvider:function(){return j}});var a=o(57437),n=o(2265),l=o(29372),r=o(53731),s=o(78485),c=o(25214);class i{setItem(e){localStorage.setItem(this.key,JSON.stringify(e))}getItem(){if(c.is.runner.server)return this.defaultValue||null;let e=localStorage.getItem(this.key);return null==e?e||this.defaultValue:JSON.parse(e)}constructor(e,t){this.key=e,this.defaultValue=(null==t?void 0:t.defaultValue)||null}}o(23332);let u=()=>document.getElementsByTagName("html")[0];var d=o(82562);let f=new i("CURRENT_THEME",{defaultValue:{theme:r.t0}}),m=new i("THEME_STORAGE",{defaultValue:{}}),h=(0,n.createContext)(null),A=(0,n.createContext)({}),p=(0,n.createContext)({id:r.t0}),b=(0,n.createContext)({setTheme:()=>{},addTheme:()=>{},editTheme:()=>{},deleteTheme:()=>{}}),g=()=>(0,n.useContext)(h),x=()=>(0,n.useContext)(A),y=()=>(0,n.useContext)(b),v=()=>(0,n.useContext)(p),T=()=>{let e=v().id,[t,o]=(0,n.useState)("");return(0,n.useLayoutEffect)(()=>{o(e)},[e]),t},j=e=>{let[t,o]=(0,n.useState)({}),[l,s]=(0,n.useState)();(0,n.useLayoutEffect)(()=>{let e=m.getItem();null!=e&&o(e)},[]),(0,n.useLayoutEffect)(()=>{let e=f.getItem();null!=e&&s(e)},[]);let i=(0,n.useCallback)(e=>{s({theme:e})},[]),d=(0,n.useCallback)(e=>{o(t=>({...t,[e.id]:e}))},[]),h=(0,n.useCallback)((e,t)=>{o(o=>({...o,[e]:t}))},[]),g=(0,n.useCallback)(e=>{o(t=>(delete t[e],{...t}))},[]);return(0,n.useLayoutEffect)(()=>{c.is.runner.server||(u().dataset.theme=null==l?void 0:l.theme)},[l]),(0,n.useEffect)(()=>{(null==l?void 0:l.theme)!=null&&f.setItem({theme:null==l?void 0:l.theme})},[l]),(0,n.useEffect)(()=>{m.setItem(t)},[t]),(0,a.jsx)(p.Provider,{value:{id:(null==l?void 0:l.theme)||r.t0},children:(0,a.jsx)(b.Provider,{value:{setTheme:i,addTheme:d,editTheme:h,deleteTheme:g},children:(0,a.jsxs)(A.Provider,{value:t,children:[(0,a.jsx)(w,{}),e.children]})})})},w=()=>{var e;let t=x(),[o,l]=(0,n.useState)([]),r=T();return((0,n.useLayoutEffect)(()=>{l(Object.values(t))},[t]),null==r)?(0,a.jsx)(a.Fragment,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Jf,{targetFamily:[null===(e=t[r])||void 0===e?void 0:e.font["font-family"]]}),o.map(e=>(0,a.jsx)(d.De,{style:e},e.id))]})},Z=e=>(0,a.jsx)("div",{className:"w-2 rounded-badge h-6 flex items-center justify-center ".concat(e.type)}),_={uses:{useSetThemeContext:y,useCreateTheme:()=>{let e=y();return(0,n.useCallback)(()=>{e.addTheme(l.VZ.parse({}))},[])},useCurrentThemeId:T,useThemeContext:g,useThemeList:()=>{let e=x();return(0,n.useMemo)(()=>[...s.map(e=>({isTemplate:!0,id:e,displayName:e})),...Object.values(e).map(e=>({isTemplate:!1,id:e.id,displayName:e.title}))],[s,e])}},ThemeStyles:w,ThemeListProvider:e=>{let t=x(),o=(0,n.useMemo)(()=>Object.values(t),[t]);return(0,a.jsx)(a.Fragment,{children:o.map(t=>(0,a.jsx)(h.Provider,{value:t,children:e.children},t.id))})},Provider:e=>{let t=x(),o=(0,n.useMemo)(()=>t[e.themeId],[e.themeId]);return null==o?null:(0,a.jsx)(h.Provider,{value:o,children:e.children})},FontLoader:d.Jf,List:{ThemeListItem:()=>{let e=g(),t=T(),o=_.uses.useSetThemeContext();return null==e?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"btn w-full border",onClick:()=>o.setTheme(e.id),"data-theme":e.id,value:e.id,disabled:e.id===t,children:(0,a.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,a.jsx)("div",{className:"text-left text-xs grow w-full",children:e.title}),(0,a.jsxs)("div",{className:"flex gap-1 ml-auto",children:[(0,a.jsx)(Z,{type:"bg-primary"}),(0,a.jsx)(Z,{type:"bg-secondary "}),(0,a.jsx)(Z,{type:"bg-accent"}),(0,a.jsx)(Z,{type:"bg-neutral"}),(0,a.jsx)(Z,{type:"bg-info"}),(0,a.jsx)(Z,{type:"bg-success"}),(0,a.jsx)(Z,{type:"bg-warning"}),(0,a.jsx)(Z,{type:"bg-error"})]})]})})})}}}},82562:function(e,t,o){o.d(t,{De:function(){return c},Jf:function(){return s},dc:function(){return i}});var a=o(57437),n=o(81843),l=o(29372),r=o(2265);let s=e=>{let t=(0,r.useMemo)(()=>"https://fonts.googleapis.com/css2?".concat(e.targetFamily.map(e=>"family=".concat(e)).join("&"),"&display=swap"),[e.targetFamily]);return 0===e.targetFamily.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)("link",{href:t,rel:"stylesheet"})},c=e=>{let{style:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("style",{children:"\n[data-theme=".concat(t.id,"] {\n  font-size: ").concat(t.font["font-size"],"px;\n  font-family: ").concat(l.g5[t.font["font-family"]],";\n").concat(Object.entries(t.colors).map(e=>{let[t,o]=e;return"  ".concat(t,": ").concat(o,";")}).join("\n"),"\n").concat(Object.entries(t.rounded).map(e=>{let[t,o]=e;return"  ".concat(t,": ").concat(o,"rem;")}).join("\n"),"\n}")})})},i=e=>({...e,colors:{...e.colors,"--pc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--p"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--sc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--s"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--ac":n.T.methods.hexDistance(n.T.methods.str(e.colors["--a"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--nc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--n"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--inc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--in"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--suc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--su"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--wac":n.T.methods.hexDistance(n.T.methods.str(e.colors["--wa"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str)),"--erc":n.T.methods.hexDistance(n.T.methods.str(e.colors["--er"]),[e.colors["--b1"],e.colors["--bc"]].map(n.T.methods.str))}})},81843:function(e,t,o){o.d(t,{T:function(){return f}});var a=o(57437),n=o(2265),l=o(94863),r=o(41295),s=o(39343);let c=e=>{let{l:t,c:o,h:a}=new r.Z(e).to("oklch"),n=e=>Number.isNaN(e)?0:Math.floor(1e6*e)/1e6;return{l:n(t),c:n(o),h:n(a)}},i=e=>"".concat(e.l," ").concat(e.c," ").concat(e.h),u=e=>{let t;return t=new r.Z(e).to("sRGB"),"#".concat(d(255*t.r)).concat(d(255*t.g)).concat(d(255*t.b))},d=e=>{if(Number.isNaN(e))return"00";let t=Math.round(e).toString(16);return 1==t.length?"0"+t:t},f={DefaultPicker:e=>{let{name:t,control:o,rules:l}=e,r=(0,s.bc)({name:t,control:o,rules:l}),i=(0,n.useCallback)(e=>{r.field.onChange("".concat(e.l," ").concat(e.c," ").concat(e.h)),r.field.onBlur()},[]),d=(0,n.useMemo)(()=>{let e=r.field.value||"0 0 0";return u("oklch(".concat(e,"/1.0)"))},[r.field.value]),f=(0,n.useCallback)(e=>{i(c(e.currentTarget.value))},[]);return(0,a.jsx)("input",{type:"color",onChange:f,value:d})},methods:{hexDistance:(e,t)=>{let o=e=>{let t=new r.Z(e).to("sRGB");return{R:255*t.r,G:255*t.g,B:255*t.b}},a=o(e),n=t.map(o),s=(0,l.J2)(a,[...n,{R:255,G:255,B:255}]),{l:u,c:f,h:m}=c("#".concat(d(s.R)).concat(d(s.G)).concat(d(s.B)));return i({l:u,c:f,h:m})},str:e=>"oklch(".concat(e,"/1.0)")}}},53731:function(e,t,o){o.d(t,{Y_:function(){return l},t0:function(){return r}});var a=o(38910),n=o(16893);o(25214).is.build.production;let l={PROFILE_404:{src:a.default.src,alt:"Profile404"},NONE:{src:n.default.src,alt:"None"}},r="lemonade"},29372:function(e,t,o){o.d(t,{H0:function(){return u},VZ:function(){return c},g5:function(){return i}});var a=o(59772),n=o(20920);let l=a.Ry({"font-size":a.Z_().default("16"),"font-family":a.Z_().default("Noto+Sans+JP:wght@100..900")}),r=a.Ry({"--b1":a.Z_().optional().default("0.951276 0.007445 260.731582"),"--b2":a.Z_().optional().default("0.932996 0.010389 261.788512"),"--b3":a.Z_().optional().default("0.899257 0.016374 262.74927"),"--bc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--p":a.Z_().optional().default("0.594359 0.077246 254.027778"),"--pc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--s":a.Z_().optional().default("0.696515 0.059108 248.687195"),"--sc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--a":a.Z_().optional().default("0.774643 0.062248 217.469037"),"--ac":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--n":a.Z_().optional().default("0.45229 0.035213 264.131203"),"--nc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--in":a.Z_().optional().default("0.692071 0.062496 332.664901"),"--inc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--su":a.Z_().optional().default("0.768269 0.074899 131.063076"),"--suc":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--wa":a.Z_().optional().default("0.854862 0.089234 84.093332"),"--wac":a.Z_().optional().default("0.324374 0.022944 264.182039"),"--er":a.Z_().optional().default("0.606099 0.120594 15.341872"),"--erc":a.Z_().optional().default("0.324374 0.022944 264.182039")}),s=a.Ry({"--rounded-badge":a.Z_().optional().default("1"),"--rounded-box":a.Z_().optional().default("1.9"),"--rounded-btn":a.Z_().optional().default("1.9"),"--tab-radius":a.Z_().optional().default("0.7")}),c=a.Ry({id:a.Z_().optional().default(()=>"style"+(0,n.Z)().replaceAll("-","")),title:a.Z_().optional().default("新規作成テーマ"),font:l.optional().default(l.parse({})),colors:r.optional().default(r.parse({})),rounded:s.optional().default(s.parse({}))}),i={"Noto+Sans+JP:wght@100..900":"Noto Sans JP","Noto+Serif+JP":"Noto Serif JP","M+PLUS+Rounded+1c":"M PLUS Rounded 1c","Hina+Mincho":"Hina Mincho","Kaisei+HarunoUmi":"Kaisei HarunoUmi","Yuji+Mai":"Yuji Mai","Yuji+Boku":"Yuji Boku",DotGothic16:"DotGothic16","Zen+Maru+Gothic":"Zen Maru Gothic","Shippori+Antique+B1":"Shippori Antique B1"},u=c.parse({title:"新規作成テーマ",font:{"font-size":"16","font-family":"Noto+Sans+JP:wght@100..900"},colors:{"--b1":"0.951276 0.007445 260.731582","--b2":"0.932996 0.010389 261.788512","--b3":"0.899257 0.016374 262.74927","--bc":"0.324374 0.022944 264.182039","--p":"0.594359 0.077246 254.027778","--pc":"0.324374 0.022944 264.182039","--s":"0.696515 0.059108 248.687195","--sc":"0.324374 0.022944 264.182039","--a":"0.774643 0.062248 217.469037","--ac":"0.324374 0.022944 264.182039","--n":"0.45229 0.035213 264.131203","--nc":"0.324374 0.022944 264.182039","--in":"0.692071 0.062496 332.664901","--inc":"0.324374 0.022944 264.182039","--su":"0.768269 0.074899 131.063076","--suc":"0.324374 0.022944 264.182039","--wa":"0.854862 0.089234 84.093332","--wac":"0.324374 0.022944 264.182039","--er":"0.606099 0.120594 15.341872","--erc":"0.324374 0.022944 264.182039"},rounded:{"--rounded-box":"1","--rounded-badge":"1.9","--rounded-btn":"1.9","--tab-radius":"0.7"}})},38910:function(e,t,o){o.r(t),t.default={src:"/twitch-comment-viewer-v1-frontend/_next/static/media/404Profile.82ec31fb.png",height:348,width:348,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX5+PiVs8RPhaJBfJsAQG/u8fNznbOmwM4CTXgARnSSscPS3OMoaI3v8fO9z9mDwAnyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nB3GSQ7AMAgAsWGHJPz/u5Xqk2HFTBZQf88VxA3MBZ0/ik5n9iina7f6EHnhZkCUSAUfJ90BMjqjSYMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},16893:function(e,t,o){o.r(t),t.default={src:"/twitch-comment-viewer-v1-frontend/_next/static/media/None.d1c1b06b.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAA1BMVEVMaXFNx9g6AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAABt0RVh0U29mdHdhcmUAQ2Vsc3lzIFN0dWRpbyBUb29swafhfAAAAAxJREFUeJxjYKAOAAAASAABLrg8fgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},78485:function(e){e.exports=JSON.parse('["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"]')}}]);