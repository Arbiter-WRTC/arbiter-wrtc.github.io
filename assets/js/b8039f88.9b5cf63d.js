"use strict";(self.webpackChunkarbiter_wrtc_github_io=self.webpackChunkarbiter_wrtc_github_io||[]).push([[313],{2039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const s={},a="Docs",l={id:"docs",title:"Docs",description:"Dependencies",source:"@site/docs/docs.md",sourceDirName:".",slug:"/docs",permalink:"/docs/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/Arbiter-WRTC/docs/docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},o={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface",level:3},{value:"Usage",id:"usage",level:2},{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface-1",level:3},{value:"Install",id:"install",level:4},{value:"Commands",id:"commands",level:4},{value:"<code>Arbiter deploy</code>",id:"arbiter-deploy",level:5},{value:"Arbiter React SDK",id:"arbiter-react-sdk",level:3},{value:"Install",id:"install-1",level:4},{value:"Import",id:"import",level:4},{value:"Arbiter HTTP API Gateway",id:"arbiter-http-api-gateway",level:3},{value:"Arbiter Signaling Server",id:"arbiter-signaling-server",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"docs",children:"Docs"}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.h3,{id:"arbiter-command-line-interface",children:"Arbiter Command Line Interface"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"arbiter"})})," command line interface, a user must first create an ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-prereqs-instructions.html",children:(0,i.jsx)(n.strong,{children:"AWS Account"})})," and install the following dependencies:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",children:(0,i.jsx)(n.strong,{children:"AWS Command Line Interface"})}),": command line tool for managing AWS services."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Subsequently, a user must ensure that the ",(0,i.jsx)(n.em,{children:"AWS Command Line Interface"})," is configured locally. This can be achieved by executing ",(0,i.jsx)(n.code,{children:"aws configure"})," from the command line and passing in the following necessary credentials:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS Access Key ID"}),"\n",(0,i.jsx)(n.li,{children:"AWS Secret Access Key"}),"\n",(0,i.jsx)(n.li,{children:"Default region"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more details on deriving the above credentials, please see the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html",children:(0,i.jsx)(n.strong,{children:"official docs"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"arbiter-command-line-interface-1",children:"Arbiter Command Line Interface"}),"\n",(0,i.jsx)(n.h4,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.p,{children:"Install the Arbiter CLI with npm"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:"$ npm install -g arbiter-wrtc\n"})}),"\n",(0,i.jsx)(n.h4,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.h5,{id:"arbiter-deploy",children:(0,i.jsx)(n.code,{children:"Arbiter deploy"})}),"\n",(0,i.jsx)(n.p,{children:"Deploy Arbiter to your AWS account using the deploy command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:"$ arbiter deploy\nrunning command...\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"USAGE\n  $ arbiter deploy [FILE] [-n <value>] [-f]\n\nFLAGS\n  -f, --force\n  -n, --name=<value>  name to print\n\nDESCRIPTION\n  deploy Arbiter to AWS\n\nEXAMPLES\n  $ arbiter deploy\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"deploy"})," command will prompt you for your AWS access key ID and secret access key.\nYour AWS IAM account must have permission to create infastructure and security groups.\nYou will then be asked what region you want to use to deploy Arbiter, and how many rooms you would like idle.\nNote that idle rooms are able to be claimed by users. It is possible to run Arbiter with 0 idle rooms, but that may result in long wait times to create new rooms when a URL is visited. A room is docker container of Arbiter's SFU, and it can take several minutes for a room to instantiate and become available to be claimed."]}),"\n",(0,i.jsx)(n.p,{children:"When you deploy Arbiter, you will have the following architecture created:"}),"\n",(0,i.jsx)("img",{width:"751",alt:"Screen Shot 2023-12-05 at 9 14 52 PM",src:"https://github.com/Arbiter-WRTC/cli/assets/57457673/822f173d-02c9-458d-8253-7bde9075d366"}),"\n",(0,i.jsx)(n.p,{children:"This architecture includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HTTP API Gateway"}),"\n",(0,i.jsx)(n.li,{children:"WebSocket Gateway"}),"\n",(0,i.jsx)(n.li,{children:"CoTURN ECS Cluster"}),"\n",(0,i.jsx)(n.li,{children:"SFU ECS Cluster"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"arbiter-react-sdk",children:"Arbiter React SDK"}),"\n",(0,i.jsx)(n.h4,{id:"install-1",children:"Install"}),"\n",(0,i.jsxs)(n.p,{children:["Arbiter's React SDK is built using React with Vite and Typescript.",(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",alt:"react",width:"40",height:"40"}),(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",alt:"typescript",width:"40",height:"40"})]}),"\n",(0,i.jsx)(n.p,{children:"To use the Arbiter React SDK, the Arbiter infrastructure must first be provisioned using the CLI . Once deployed, Arbiter's CLI will provide you with a .env.local file to use with the Arbiter React SDK."}),"\n",(0,i.jsxs)(n.p,{children:["To integrate, first download the Arbiter npm package with ",(0,i.jsx)(n.code,{children:"npm install @Arbiter/SDK"})]}),"\n",(0,i.jsx)(n.h4,{id:"import",children:"Import"}),"\n",(0,i.jsx)(n.p,{children:"Import the Arbiter React SDK into your existing React application as shown:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import Arbiter 'from @Arbiter/SDK';\n\nconst App = () => {\n   # your code here...\n   <Arbiter />;\n};\n\nexport default App\n"})}),"\n",(0,i.jsx)(n.p,{children:"INSERT PICTURE OF FRONTEND"}),"\n",(0,i.jsx)(n.p,{children:"Arbiter should work seamlessly with your existing frontend application, and room provisioning will be based on the URL path of the page in question. This allows you to integrate rooms dynamically based on the content. It is important to note that all users who visit that page will be able to join the call for that route, so adding authentication to prevent unauthorized use is a best practice when using Arbiter."}),"\n",(0,i.jsx)(n.h3,{id:"arbiter-http-api-gateway",children:"Arbiter HTTP API Gateway"}),"\n",(0,i.jsx)(n.p,{children:"some description"}),"\n",(0,i.jsx)(n.p,{children:"api docs for three routes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GET /getRoomId"}),"\n",(0,i.jsx)(n.li,{children:"PATCH /claimRoomId"}),"\n",(0,i.jsx)(n.li,{children:"POST /createRoom"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"arbiter-signaling-server",children:"Arbiter Signaling Server"}),"\n",(0,i.jsx)(n.p,{children:"some description"}),"\n",(0,i.jsx)(n.p,{children:"signals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"payloads"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);