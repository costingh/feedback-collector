(self.webpackChunkMyReactApp=self.webpackChunkMyReactApp||[]).push([[273],{5315:function(e,t,r){Promise.resolve().then(r.bind(r,5088))},5088:function(e,t,r){"use strict";r.d(t,{SubscriptionButton:function(){return c}});var n=r(6414),i=r(1486),o=r(3659),a=r(3149),u=r(8938),s=r(721);let c=e=>{let{isPro:t=!1}=e,[r,c]=(0,o.useState)(!1),d=async()=>{try{c(!0);let e=await i.Z.get("/api/stripe");window.location.href=e.data.url}catch(e){u.A.error("Something went wrong")}finally{c(!1)}};return(0,n.jsxs)(s.z,{variant:t?"default":"premium",disabled:r,onClick:d,children:[t?"Manage Subscription":"Upgrade",!t&&(0,n.jsx)(a.Z,{className:"w-4 h-4 ml-2 fill-white"})]})}},721:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(6414),i=r(3659),o=r(7623),a=r(7214),u=r(2865);let s=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",premium:"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:r,variant:i,size:a,asChild:c=!1,...d}=e,l=c?o.g7:"button";return(0,n.jsx)(l,{className:(0,u.cn)(s({variant:i,size:a,className:r})),ref:t,...d})});c.displayName="Button"},2865:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(9206),i=r(9257);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.m6)((0,n.W)(t))}r(8070)},3149:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(1876).Z)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]])}},function(e){e.O(0,[232,169,696,309,744],function(){return e(e.s=5315)}),e.O()}]);