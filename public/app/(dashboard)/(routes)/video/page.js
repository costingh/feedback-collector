(self.webpackChunkMyReactApp=self.webpackChunkMyReactApp||[]).push([[274],{619:function(e,r,t){Promise.resolve().then(t.bind(t,6860))},6860:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(6414),s=t(1486),i=t(3659),o=t(6302),a=t(3349);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,t(1876).Z)("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);var d=t(4993),c=t(8938),u=t(9515),f=t(721),m=t(8960),p=t(7216),x=t(5848),g=t(7469),v=t(9896),h=t(7514);let b=h.Ry({prompt:h.Z_().min(1,{message:"Prompt is required"})});var j=()=>{let e=(0,d.useRouter)(),r=(0,v.t)(),[t,h]=(0,i.useState)(),j=(0,a.cI)({resolver:(0,o.F)(b),defaultValues:{prompt:""}}),y=j.formState.isSubmitting,N=async t=>{try{h(void 0);let e=await s.Z.post("/api/video",t);h(e.data[0]),j.reset()}catch(e){var n;(null==e?void 0:null===(n=e.response)||void 0===n?void 0:n.status)===403?r.onOpen():c.A.error("Something went wrong.")}finally{e.refresh()}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(u.Z,{title:"Video Generation",description:"Turn your prompt into video.",icon:l,iconColor:"text-orange-700",bgColor:"bg-orange-700/10"}),(0,n.jsxs)("div",{className:"px-4 lg:px-8",children:[(0,n.jsx)(p.l0,{...j,children:(0,n.jsxs)("form",{onSubmit:j.handleSubmit(N),className:" rounded-lg  border  w-full  p-4  px-3  md:px-6  focus-within:shadow-sm grid grid-cols-12 gap-2 ",children:[(0,n.jsx)(p.Wi,{name:"prompt",render:e=>{let{field:r}=e;return(0,n.jsx)(p.xJ,{className:"col-span-12 lg:col-span-10",children:(0,n.jsx)(p.NI,{className:"m-0 p-0",children:(0,n.jsx)(m.I,{className:"border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent",disabled:y,placeholder:"Clown fish swimming in a coral reef",...r})})})}}),(0,n.jsx)(f.z,{className:"col-span-12 lg:col-span-2 w-full",type:"submit",disabled:y,size:"icon",children:"Generate"})]})}),y&&(0,n.jsx)("div",{className:"p-20",children:(0,n.jsx)(x.a,{})}),!t&&!y&&(0,n.jsx)(g.H,{label:"No video files generated."}),t&&(0,n.jsx)("video",{controls:!0,className:"w-full aspect-video mt-8 rounded-lg border bg-black",children:(0,n.jsx)("source",{src:t})})]})]})}},7469:function(e,r,t){"use strict";t.d(r,{H:function(){return i}});var n=t(6414),s=t(9878);let i=e=>{let{label:r}=e;return(0,n.jsxs)("div",{className:"h-full p-20 flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"relative h-72 w-72",children:(0,n.jsx)(s.default,{src:"/empty.png",fill:!0,alt:"Empty"})}),(0,n.jsx)("p",{className:"text-muted-foreground text-sm text-center",children:r})]})}},9515:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(6414),s=t(2865);function i(e){let{title:r,description:t,icon:i,iconColor:o,bgColor:a}=e;return(0,n.jsxs)("div",{className:"px-4 lg:px-8 flex items-center gap-x-3 mb-8",children:[(0,n.jsx)("div",{className:(0,s.cn)("p-2 w-fit rounded-md",a),children:(0,n.jsx)(i,{className:(0,s.cn)("w-10 h-10",o)})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-3xl font-bold",children:r}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:t})]})]})}},5848:function(e,r,t){"use strict";t.d(r,{a:function(){return i}});var n=t(6414),s=t(9878);let i=()=>(0,n.jsxs)("div",{className:"h-full flex flex-col gap-y-4 items-center justify-center",children:[(0,n.jsx)("div",{className:"w-10 h-10 relative animate-spin",children:(0,n.jsx)(s.default,{alt:"Logo",src:"/logo.png",fill:!0})}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Omniscient is thinking..."})]})},721:function(e,r,t){"use strict";t.d(r,{z:function(){return d}});var n=t(6414),s=t(3659),i=t(7623),o=t(7214),a=t(2865);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",premium:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:o,asChild:d=!1,...c}=e,u=d?i.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:s,size:o,className:t})),ref:r,...c})});d.displayName="Button"},7216:function(e,r,t){"use strict";t.d(r,{l0:function(){return u},NI:function(){return v},Wi:function(){return m},xJ:function(){return g}});var n=t(6414),s=t(3659),i=t(7623),o=t(3349),a=t(2865),l=t(9847);let d=(0,t(7214).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.f,{ref:r,className:(0,a.cn)(d(),t),...s})});c.displayName=l.f.displayName;let u=o.RV,f=s.createContext({}),m=e=>{let{...r}=e;return(0,n.jsx)(f.Provider,{value:{name:r.name},children:(0,n.jsx)(o.Qr,{...r})})},p=()=>{let e=s.useContext(f),r=s.useContext(x),{getFieldState:t,formState:n}=(0,o.Gc)(),i=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=r;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...i}},x=s.createContext({}),g=s.forwardRef((e,r)=>{let{className:t,...i}=e,o=s.useId();return(0,n.jsx)(x.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:r,className:(0,a.cn)("space-y-2",t),...i})})});g.displayName="FormItem",s.forwardRef((e,r)=>{let{className:t,...s}=e,{error:i,formItemId:o}=p();return(0,n.jsx)(c,{ref:r,className:(0,a.cn)(i&&"text-destructive",t),htmlFor:o,...s})}).displayName="FormLabel";let v=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:o,formDescriptionId:a,formMessageId:l}=p();return(0,n.jsx)(i.g7,{ref:r,id:o,"aria-describedby":s?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!s,...t})});v.displayName="FormControl",s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:i}=p();return(0,n.jsx)("p",{ref:r,id:i,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})}).displayName="FormDescription",s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e,{error:o,formMessageId:l}=p(),d=o?String(null==o?void 0:o.message):s;return d?(0,n.jsx)("p",{ref:r,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",t),...i,children:d}):null}).displayName="FormMessage"},8960:function(e,r,t){"use strict";t.d(r,{I:function(){return o}});var n=t(6414),s=t(3659),i=t(2865);let o=s.forwardRef((e,r)=>{let{className:t,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...o})});o.displayName="Input"},9896:function(e,r,t){"use strict";t.d(r,{t:function(){return n}});let n=(0,t(6268).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}))},2865:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(9206),s=t(9257);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}t(8070)}},function(e){e.O(0,[232,878,169,668,696,309,744],function(){return e(e.s=619)}),e.O()}]);