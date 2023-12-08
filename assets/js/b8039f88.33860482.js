"use strict";(self.webpackChunkarbiter_wrtc_github_io=self.webpackChunkarbiter_wrtc_github_io||[]).push([[313],{2039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var r=s(5893),i=s(1151);const o={},c="Docs",t={id:"docs",title:"Docs",description:"Dependencies",source:"@site/docs/docs.md",sourceDirName:".",slug:"/docs",permalink:"/docs/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/Arbiter-WRTC/docs/docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar"},d={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface",level:3},{value:"Arbiter Command Line Interface",id:"arbiter-command-line-interface-1",level:2},{value:"Install",id:"install",level:3},{value:"Commands",id:"commands",level:3},{value:"<code>Arbiter deploy</code>",id:"arbiter-deploy",level:4},{value:"Arbiter React SDK",id:"arbiter-react-sdk",level:2},{value:"Install",id:"install-1",level:3},{value:"Import",id:"import",level:3},{value:"HTTP API Gateway",id:"http-api-gateway",level:2},{value:"Get Room ID",id:"get-room-id",level:3},{value:"Success Response",id:"success-response",level:4},{value:"Error Responses",id:"error-responses",level:4},{value:"Or",id:"or",level:5},{value:"Claim Room",id:"claim-room",level:3},{value:"Success Response",id:"success-response-1",level:4},{value:"Error Responses",id:"error-responses-1",level:4},{value:"Or",id:"or-1",level:5},{value:"Or",id:"or-2",level:5},{value:"Create Room",id:"create-room",level:3},{value:"Success Response",id:"success-response-2",level:4},{value:"Error Responses",id:"error-responses-2",level:4},{value:"WebSocket Gateway",id:"websocket-gateway",level:3},{value:"<code>$connect</code>",id:"connect",level:3},{value:"<code>identify</code>",id:"identify",level:3},{value:"Success Response",id:"success-response-3",level:4},{value:"Error Responses",id:"error-responses-3",level:4},{value:"Or",id:"or-3",level:5},{value:"<code>handshake</code>",id:"handshake",level:3},{value:"Success Response",id:"success-response-4",level:4},{value:"Error Responses",id:"error-responses-4",level:4},{value:"<code>$disconnect</code>",id:"disconnect",level:3},{value:"Error Responses",id:"error-responses-5",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docs",children:"Docs"}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(n.h3,{id:"arbiter-command-line-interface",children:"Arbiter Command Line Interface"}),"\n",(0,r.jsxs)(n.p,{children:["In order to use the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"arbiter"})})," command line interface, a user must first create an ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-prereqs-instructions.html",children:(0,r.jsx)(n.strong,{children:"AWS Account"})})," and install the following dependencies:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html",children:(0,r.jsx)(n.strong,{children:"AWS Command Line Interface"})}),": command line tool for managing AWS services."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Subsequently, a user must ensure that the ",(0,r.jsx)(n.em,{children:"AWS Command Line Interface"})," is configured locally. This can be achieved by executing ",(0,r.jsx)(n.code,{children:"aws configure"})," from the command line and passing in the following necessary credentials:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AWS Access Key ID"}),"\n",(0,r.jsx)(n.li,{children:"AWS Secret Access Key"}),"\n",(0,r.jsx)(n.li,{children:"Default region"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more details on deriving the above credentials, please see the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html",children:(0,r.jsx)(n.strong,{children:"official docs"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"arbiter-command-line-interface-1",children:"Arbiter Command Line Interface"}),"\n",(0,r.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.p,{children:"Install the Arbiter CLI with npm"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh-session",children:"$ npm install -g arbiter-wrtc\n"})}),"\n",(0,r.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,r.jsx)(n.h4,{id:"arbiter-deploy",children:(0,r.jsx)(n.code,{children:"Arbiter deploy"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy Arbiter to your AWS account using the deploy command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh-session",children:"$ arbiter deploy\nrunning command...\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"USAGE\n  $ arbiter deploy [FILE] [-n <value>] [-f]\n\nFLAGS\n  -f, --force\n  -n, --name=<value>  name to print\n\nDESCRIPTION\n  deploy Arbiter to AWS\n\nEXAMPLES\n  $ arbiter deploy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"deploy"})," command will prompt you for your AWS access key ID and secret access key.\nYour AWS IAM account must have permission to create infastructure and security groups.\nYou will then be asked what region you want to use to deploy Arbiter, and how many rooms you would like idle.\nNote that idle rooms are able to be claimed by users. It is possible to run Arbiter with 0 idle rooms, but that may result in long wait times to create new rooms when a URL is visited. A room is docker container of Arbiter's SFU, and it can take several minutes for a room to instantiate and become available to be claimed."]}),"\n",(0,r.jsx)(n.p,{children:"When you deploy Arbiter, you will have the following architecture created:"}),"\n",(0,r.jsx)("img",{width:"751",alt:"Screen Shot 2023-12-05 at 9 14 52 PM",src:"https://github.com/Arbiter-WRTC/cli/assets/57457673/822f173d-02c9-458d-8253-7bde9075d366"}),"\n",(0,r.jsx)(n.p,{children:"This architecture includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP API Gateway"}),"\n",(0,r.jsx)(n.li,{children:"WebSocket Gateway"}),"\n",(0,r.jsx)(n.li,{children:"CoTURN ECS Cluster"}),"\n",(0,r.jsx)(n.li,{children:"SFU ECS Cluster"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"arbiter-react-sdk",children:"Arbiter React SDK"}),"\n",(0,r.jsx)(n.h3,{id:"install-1",children:"Install"}),"\n",(0,r.jsxs)(n.p,{children:["Arbiter's React SDK is built using React with Vite and Typescript.",(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",alt:"react",width:"40",height:"40"}),(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",alt:"typescript",width:"40",height:"40"})]}),"\n",(0,r.jsx)(n.p,{children:"To use the Arbiter React SDK, the Arbiter infrastructure must first be provisioned using the CLI . Once deployed, Arbiter's CLI will provide you with a .env.local file to use with the Arbiter React SDK."}),"\n",(0,r.jsxs)(n.p,{children:["To integrate, first download the Arbiter npm package with ",(0,r.jsx)(n.code,{children:"npm install @Arbiter/SDK"})]}),"\n",(0,r.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,r.jsx)(n.p,{children:"Import the Arbiter React SDK into your existing React application as shown:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import Arbiter 'from @Arbiter/SDK';\n\nconst App = () => {\n   # your code here...\n   <Arbiter />;\n};\n\nexport default App\n"})}),"\n",(0,r.jsx)(n.p,{children:"INSERT PICTURE OF FRONTEND"}),"\n",(0,r.jsx)(n.p,{children:"Arbiter should work seamlessly with your existing frontend application, and room provisioning will be based on the URL path of the page in question. This allows you to integrate rooms dynamically based on the content. It is important to note that all users who visit that page will be able to join the call for that route, so adding authentication to prevent unauthorized use is a best practice when using Arbiter."}),"\n",(0,r.jsx)(n.h2,{id:"http-api-gateway",children:"HTTP API Gateway"}),"\n",(0,r.jsx)(n.p,{children:"The  HTTP API Gateway is used by the Arbiter React client to connect particpants to a the video conference room associated with the URL from which the Arbiter client is loaded."}),"\n",(0,r.jsx)(n.h3,{id:"get-room-id",children:"Get Room ID"}),"\n",(0,r.jsxs)(n.p,{children:["Get the ",(0,r.jsx)(n.code,{children:"roomId"})," of videoconferencing room associated with ",(0,r.jsx)(n.code,{children:"urlPath"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/getRoomId?urlPath={path}"}),";`"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"GET"})]}),"\n",(0,r.jsx)(n.h4,{id:"success-response",children:"Success Response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Content examples"}),"\nFor a client served from ",(0,r.jsx)(n.code,{children:"http://example.com/myRoom"})," the the value of ",(0,r.jsx)(n.code,{children:"urLPath"})," will be ",(0,r.jsx)(n.code,{children:"myRoom"}),". If the database has a record of a room is associated with ",(0,r.jsx)(n.code,{children:"urlPath"}),", then the ",(0,r.jsx)(n.code,{children:"roomId"})," is returned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "roomId": 1234\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"error-responses",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : Database has no record of a room  associated with ",(0,r.jsx)(n.code,{children:"urlPath"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"404 Not Found"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'Room not found'\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"or",children:"Or"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'Something broke on the server'\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"claim-room",children:"Claim Room"}),"\n",(0,r.jsxs)(n.p,{children:["Assign an existing room to the supplied ",(0,r.jsx)(n.code,{children:"urlPath"})," and return ",(0,r.jsx)(n.code,{children:"roomId"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/claimRoom"}),";`"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"PATCH"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Content type"})," :  ",(0,r.jsx)(n.code,{children:"application/json"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Payload"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "urlPath": "myRoom"\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-1",children:"Success Response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "roomId": 1234\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"error-responses-1",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : ",(0,r.jsx)(n.code,{children:"urlPath"})," is not supplied"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"400 Not Found"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'missing urlPath'\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"or-1",children:"Or"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : There is no room available to be claimed. (A room will need to be created.)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"404 Not Found"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'Room not found'\n}\n"})}),"\n",(0,r.jsx)(n.h5,{id:"or-2",children:"Or"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'Something broke on the server'\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-room",children:"Create Room"}),"\n",(0,r.jsx)(n.p,{children:"Creates a new unclaimed room and creates record in the database."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/createRoom"}),";`"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"PUT"})]}),"\n",(0,r.jsx)(n.h4,{id:"success-response-2",children:"Success Response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Task started successfully!"\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"error-responses-2",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{\n    \"message\": 'Failed to start task.'\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"websocket-gateway",children:"WebSocket Gateway"}),"\n",(0,r.jsx)(n.p,{children:"The WebSocket gateway is the Arbiter signaling server. Arbiter clients (videoconference participants) and SFU instances connect to it to negotiate WebRTC connections and to manage call state (i.e. particpants entering and exiting a call)."}),"\n",(0,r.jsx)(n.h3,{id:"connect",children:(0,r.jsx)(n.code,{children:"$connect"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$connect"})," route is called  when an Arbiter client establishes a WebSocket connection. A unique identifer ",(0,r.jsx)(n.code,{children:"connectionId"})," is written to the database to identify the WebSocket connection"]}),"\n",(0,r.jsx)(n.h3,{id:"identify",children:(0,r.jsx)(n.code,{children:"identify"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"identify"})," route should be called by an Arbiter client after a WebSocket connection is established. The purpose is to write metadata to the database that is used to route subsequent messagages between clients and an SFU."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Payload"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  action: "identify",\n  data: {\n    id: "123",\n    roomId: "789",\n    type: "client",\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-3",children:"Success Response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.h4,{id:"error-responses-3",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : ",(0,r.jsx)(n.code,{children:"type"})," is missing from ",(0,r.jsx)(n.code,{children:"data"}),"object in paylong"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"400 Missing valid type property"})]}),"\n",(0,r.jsx)(n.h5,{id:"or-3",children:"Or"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.h3,{id:"handshake",children:(0,r.jsx)(n.code,{children:"handshake"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"handshake"})," route is called by an Arbiter client to negotiate a WebRTC connection with an SFU. It is called multiple times to transfer Session Description Protocol (SDP) offers and to transfer Internet Connection Establishment (ICE) candidates"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Payload"})," :\nContent example\nWhen a Client sends an SDP offer ",(0,r.jsx)(n.code,{children:"candidate"})," will be an offer SDP"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  action: \'handshake\',\n  data: {\n    type: "producer",\n    sender: "1234",\n    description: {localDescription},\n    roomId: "789",\n  },\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Content example\nWhen a Client sends an ICE candiate ",(0,r.jsx)(n.code,{children:"candidate"})," will be an ICE candiate"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  action: \'handshake\',\n  data: {\n    type: "producer",\n    sender: "1234",\n    candidate: {candidate},\n    roomId: "789",\n  },\n};\n'})}),"\n",(0,r.jsx)(n.h4,{id:"success-response-4",children:"Success Response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.h4,{id:"error-responses-4",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : webSocket connection id is not found in database"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"400 WebSOcket Connection Not Found"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]}),"\n",(0,r.jsx)(n.h3,{id:"disconnect",children:(0,r.jsx)(n.code,{children:"$disconnect"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"disconnect"})," route is called by an Arbiter client when a participant leaves a video conference. The client's database entry will be deleted. Other participants in the room will be notified."]}),"\n",(0,r.jsx)(n.h4,{id:"error-responses-5",children:"Error Responses"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Condition"})," : A server error occurred"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var r=s(7294);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);