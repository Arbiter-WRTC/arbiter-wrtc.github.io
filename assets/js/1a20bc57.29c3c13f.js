"use strict";(self.webpackChunkarbiter_wrtc_github_io=self.webpackChunkarbiter_wrtc_github_io||[]).push([[468],{9154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(5893),i=t(1151);const s={},c=void 0,a={id:"cli",title:"cli",description:"Arbiter Command Line Interface",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/Arbiter-WRTC/docs/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/API"},next:{title:"sdk",permalink:"/docs/sdk"}},l={},o=[{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface",level:2},{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface-1",level:2},{value:"Install",id:"install",level:3},{value:"Commands",id:"commands",level:3},{value:"<code>Arbiter deploy</code>",id:"arbiter-deploy",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"arbiter-command-line-interface",children:"Arbiter Command Line Interface"}),"\n",(0,r.jsxs)(n.p,{children:["In order to use the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"arbiter"})})," command line interface, a user must first create an ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-prereqs-instructions.html",children:(0,r.jsx)(n.strong,{children:"AWS Account"})})," and install the following dependencies:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",children:(0,r.jsx)(n.strong,{children:"AWS Command Line Interface"})}),": command line tool for managing AWS services."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Subsequently, a user must ensure that the ",(0,r.jsx)(n.em,{children:"AWS Command Line Interface"})," is configured locally. This can be achieved by executing ",(0,r.jsx)(n.code,{children:"aws configure"})," from the command line and passing in the following necessary credentials:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AWS Access Key ID"}),"\n",(0,r.jsx)(n.li,{children:"AWS Secret Access Key"}),"\n",(0,r.jsx)(n.li,{children:"Default region"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more details on deriving the above credentials, please see the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html",children:(0,r.jsx)(n.strong,{children:"official docs"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"arbiter-command-line-interface-1",children:"Arbiter Command Line Interface"}),"\n",(0,r.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.p,{children:"Install the Arbiter CLI with npm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh-session",children:"$ npm install -g arbiter-wrtc\n"})}),"\n",(0,r.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(n.h4,{id:"arbiter-deploy",children:(0,r.jsx)(n.code,{children:"Arbiter deploy"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy Arbiter to your AWS account using the deploy command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh-session",children:"$ arbiter deploy\nrunning command...\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"USAGE\n  $ arbiter deploy [FILE] [-n <value>] [-f]\n\nFLAGS\n  -f, --force\n  -n, --name=<value>  name to print\n\nDESCRIPTION\n  deploy Arbiter to AWS\n\nEXAMPLES\n  $ arbiter deploy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"deploy"})," command will prompt you for your AWS access key ID and secret access key.\nYour AWS IAM account must have permission to create infastructure and security groups.\nYou will then be asked what region you want to use to deploy Arbiter, and how many rooms you would like idle.\nNote that idle rooms are able to be claimed by users. It is possible to run Arbiter with 0 idle rooms, but that may result in long wait times to create new rooms when a URL is visited. A room is docker container of Arbiter's SFU, and it can take several minutes for a room to instantiate and become available to be claimed."]}),"\n",(0,r.jsx)(n.p,{children:"When you deploy Arbiter, you will have the following architecture created:"}),"\n",(0,r.jsx)("img",{width:"751",alt:"Screen Shot 2023-12-05 at 9 14 52 PM",src:"https://github.com/Arbiter-WRTC/cli/assets/57457673/822f173d-02c9-458d-8253-7bde9075d366"}),"\n",(0,r.jsx)(n.p,{children:"This architecture includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP API Gateway"}),"\n",(0,r.jsx)(n.li,{children:"WebSocket Gateway"}),"\n",(0,r.jsx)(n.li,{children:"CoTURN ECS Cluster"}),"\n",(0,r.jsx)(n.li,{children:"SFU ECS Cluster"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(7294);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);