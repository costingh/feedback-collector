(self.webpackChunkMyReactApp=self.webpackChunkMyReactApp||[]).push([[185],{4398:function(e,t,r){Promise.resolve().then(r.t.bind(r,8802,23)),Promise.resolve().then(r.bind(r,4486)),Promise.resolve().then(r.bind(r,850)),Promise.resolve().then(r.bind(r,1220)),Promise.resolve().then(r.bind(r,2438)),Promise.resolve().then(r.bind(r,2692)),Promise.resolve().then(r.bind(r,8938))},7193:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(6795),a=r(9493),o=r(5496),s=r(8),i=r(1116);let l=[{label:"Conversation",icon:n.Z,href:"/conversation",color:"text-violet-500",bgColor:"bg-violet-500/10"},{label:"Image Generation",icon:a.Z,color:"text-pink-700",bgColor:"bg-pink-700/10",href:"/image"},{label:"Video Generation",icon:o.Z,color:"text-orange-700",bgColor:"bg-orange-700/10",href:"/video"},{label:"Music Generation",icon:s.Z,href:"/music",color:"text-emerald-500",bgColor:"bg-emerald-500/10"},{label:"Code Generation",icon:i.Z,color:"text-green-600",bgColor:"bg-green-600/10",href:"/code"}]},4486:function(e,t,r){"use strict";r.d(t,{ModalProvider:function(){return Z}});var n=r(6414),a=r(3659),o=r(1486),s=r(1127),i=r(3149),l=r(8938),d=r(1366),c=r(1354),u=r(2865);let f=d.fC;d.xz;let m=d.h_;d.x8;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(d.aV,{ref:t,className:(0,u.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});p.displayName=d.aV.displayName;let g=a.forwardRef((e,t)=>{let{className:r,children:a,...o}=e;return(0,n.jsxs)(m,{children:[(0,n.jsx)(p,{}),(0,n.jsxs)(d.VY,{ref:t,className:(0,u.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...o,children:[a,(0,n.jsxs)(d.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(c.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=d.VY.displayName;let x=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,u.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};x.displayName="DialogHeader";let b=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,u.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};b.displayName="DialogFooter";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(d.Dx,{ref:t,className:(0,u.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});h.displayName=d.Dx.displayName;let v=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(d.dk,{ref:t,className:(0,u.cn)("text-sm text-muted-foreground",r),...a})});v.displayName=d.dk.displayName;let y=(0,r(7214).j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",premium:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground border-0"}},defaultVariants:{variant:"default"}});function N(e){let{className:t,variant:r,...a}=e;return(0,n.jsx)("div",{className:(0,u.cn)(y({variant:r}),t),...a})}var j=r(721),w=r(9896),C=r(7193),k=r(245);let R=()=>{let e=(0,w.t)(),[t,r]=(0,a.useState)(!1),d=async()=>{try{r(!0);let e=await o.Z.get("/api/stripe");window.location.href=e.data.url}catch(e){l.A.error("Something went wrong")}finally{r(!1)}};return(0,n.jsx)(f,{open:e.isOpen,onOpenChange:e.onClose,children:(0,n.jsxs)(g,{children:[(0,n.jsxs)(x,{children:[(0,n.jsx)(h,{className:"flex justify-center items-center flex-col gap-y-4 pb-2",children:(0,n.jsxs)("div",{className:"flex items-center gap-x-2 font-bold text-xl",children:["Upgrade to Feedbackz",(0,n.jsx)(N,{variant:"premium",className:"uppercase text-sm py-1",children:"pro"})]})}),(0,n.jsx)(v,{className:"text-center pt-2 space-y-2 text-zinc-900 font-medium",children:C.r.map(e=>(0,n.jsxs)(k.Zb,{className:"p-3 border-black/5 flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-4",children:[(0,n.jsx)("div",{className:(0,u.cn)("p-2 w-fit rounded-md",e.bgColor),children:(0,n.jsx)(e.icon,{className:(0,u.cn)("w-6 h-6",e.color)})}),(0,n.jsx)("div",{className:"font-semibold text-sm",children:e.label})]}),(0,n.jsx)(s.Z,{className:"text-primary w-5 h-5"})]},e.href))})]}),(0,n.jsx)(b,{children:(0,n.jsxs)(j.z,{disabled:t,onClick:d,size:"lg",variant:"premium",className:"w-full",children:["Upgrade",(0,n.jsx)(i.Z,{className:"w-4 h-4 ml-2 fill-white"})]})})]})})},Z=()=>{let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(R,{})}):null}},721:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(6414),a=r(3659),o=r(7623),s=r(7214),i=r(2865);let l=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",premium:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:s,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:s,className:r})),ref:t,...c})});d.displayName="Button"},245:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},Zb:function(){return s},aY:function(){return d},eW:function(){return c},ll:function(){return l}});var n=r(6414),a=r(3659),o=r(2865);let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});s.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})}).displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...a})});c.displayName="CardFooter"},9896:function(e,t,r){"use strict";r.d(t,{t:function(){return n}});let n=(0,r(6268).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},2865:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(9206),a=r(9257);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}r(8070)},1127:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(1876).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},3624:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(7746)._(r(3659)).default.createContext(null)},8802:function(){}},function(e){e.O(0,[838,232,147,169,288,898,202,696,309,744],function(){return e(e.s=4398)}),e.O()}]);