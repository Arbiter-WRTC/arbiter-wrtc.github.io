"use strict";(self.webpackChunkarbiter_wrtc_github_io=self.webpackChunkarbiter_wrtc_github_io||[]).push([[758],{3324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(5893),n=r(1151);const o={},s=void 0,a={id:"sdk",title:"sdk",description:"Arbiter React SDK",source:"@site/docs/sdk.md",sourceDirName:".",slug:"/sdk",permalink:"/docs/sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/Arbiter-WRTC/docs/sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cli",permalink:"/docs/cli"}},c={},l=[{value:"Arbiter React SDK",id:"arbiter-react-sdk",level:2},{value:"Install",id:"install",level:3},{value:"Import",id:"import",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"arbiter-react-sdk",children:"Arbiter React SDK"}),"\n",(0,i.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(t.p,{children:"Arbiter's React SDK is built using React with Vite and Typescript."}),"\n",(0,i.jsx)(t.p,{children:"To use the Arbiter React SDK, the Arbiter infrastructure must first be provisioned using the CLI . Once deployed, Arbiter's CLI will provide you with a .env.local file to use with the Arbiter React SDK."}),"\n",(0,i.jsxs)(t.p,{children:["To integrate, first download the Arbiter npm package with ",(0,i.jsx)(t.code,{children:"npm install @Arbiter/SDK"})]}),"\n",(0,i.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,i.jsx)(t.p,{children:"Import the Arbiter React SDK into your existing React application as shown:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import Arbiter 'from @Arbiter-framework/sdk';\n\nconst App = () => {\n   # your code here...\n   <Arbiter />;\n};\n\nexport default App\n"})}),"\n",(0,i.jsx)(t.p,{children:"Arbiter should work seamlessly with your existing frontend application, and room provisioning will be based on the URL path of the page in question. This allows you to integrate rooms dynamically based on the content. It is important to note that all users who visit that page will be able to join the call for that route, so adding authentication to prevent unauthorized use is a best practice when using Arbiter."})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(7294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);