---
id: case-study
title: Arbiter
description: Case Study for Arbiter
slug: /case-study
---

# Arbiter

## How to Use Arbiter
In order to install and use Arbiter, you must have:
1) An AWS account with an IAM role and access key that has permission to create new infastructure.
2) Node Package Manager (npm) installed.
3) A react application.
### Run the Command Line Interface (cli)


Arbiter's cloud infastructure can be provisioned easily using the Arbiter cli and a few simple steps:
1) Using the command line, enter `npm i -g arbiter-wrtc` to globally install the Arbiter cli. 
2) After installation, you can simply run Arbiter locally by entering `arbiter deploy` into your command line or terminal. 
3) After running the `arbiter deploy` command, follow the prompts to create your infrastructure 

***INSERT PICTURE OF CLI***

Arbiter's cli will provision the necessary infastructure (see **INSERT LINK**) for the app to work seamlessly with the Arbiter SDK. Arbiter will output an environment file named `.env.local` that the Arbiter SDK will use to connect to your new cloud infrastructure. 

### Integrate Arbiter Using the SDK
Getting started with Arbiter's conferencing capabilities in your React application is simple, just follow these steps:
1) Move the environment file created from the cli into the root directory of your react application.
2) Install the Arbiter SDK by typing `npm i arbiter-sdk` while in the root directory of your react application.
3) On the page or pages you want Arbiter, import the SDK component with `import Arbiter from arbiter-sdk`.

After following these simple steps, Arbiter will take care of the rest, and you will have video conferencing and chat seamlessly in your existing application. Arbiter's room feature is url path-based, meaning that the specific route at which a room is requested creates a room for anyone who visits that same page.

**INSERT PICTURE OF INTEGRATING SDK**

## How we Built Arbiter
### Peer-to-Peer Prototype
In the initial phase of developing a real-time conferencing solution, our team possessed limited knowledge about WebRTC, recognizing only its potential alignment with our project's objectives. Consequently, we embarked on constructing a rudimentary Peer-to-Peer (P2P) WebRTC application. This endeavor aimed to thoroughly understand the WebRTC specifications and to critically assess the limitations and capabilities inherent in a P2P network topology.

While our initial testing was successful, the limits of a P2P topology became clear quickly. First, creating direct P2P WebRTC connections requires a complicated handshake logic called *perfect negotiation* in which the parties must sequentially follow a series of specific steps in order to establish a connection. Secondly, we observed that P2P WebRTC connections quickly became limited by the hardware of the users as well as their internet connections. This was not only expected, but we were not able to maintain a call with more than three participants before encounting call difficulties. Third, the details of the specification meant that there are some quirks of WebRTC connections that govern their use, such as how adding user media streams is the trigger for negotiating the terms of a connection with a peer.

***INSERT DIAGRAM***

### SFU Prototype
Upon acquiring a robust understanding of the WebRTC specification and its practical implementation, our focus shifted towards engineering a more scalable solution. This solution aimed to accommodate an increased number of peers in a single call, alongside streamlining the connection establishment process. To achieve this, we concentrated on developing a Selective Forwarding Unit (SFU) that achieved the minimum desired outcome of forwarding user streams.  At this point, Arbiter consisted of a Node.js SFU, a Node.js Express server using websockets, and a simple React application. 

***INSERT DIAGRAM***

This prototype allowed us to validate our ideas for building a scalable WebRTC-based application, and provided us with some key understandings that would inform that construction of our final product. Indeed, a crucial outcome of this phase was the validation of our architectural design. Amidst prevailing uncertainties regarding the product's construction and functionality, affirming the efficacy of our initial architecture was crucial for further progression. Additionally, we identified opportunities to refine and optimize the signaling logic, leveraging the asymmetric dynamics of the client-SFU connection.

***INSERT DIAGRAM***

We also discovered some serious shortcomings in our initial architecture and design. As was clear from our first prototype, WebRTC-based video conferencing is fairly resource-intensive. As such, we learned that each room would need its own SFU server instance in order to accomodate a larger number of clients. This highlighted a fundamental issue with our infastructure, which was hosted on AWS EC2. Due to the fact that deploying, configuring, and initializing a single EC2 instance is a complex and time-consuming process, we needed to find a simpler way to provision new SFU servers in order to increase the number of rooms. Our STUN/TURN server was also hosted on EC2, which would create the same scaling challenges as the SFU rooms. TURN acts as a media relay, meaning that many users using the same TURN server can overwhelm a single server. Therefore, more users using TURN will require more instances of TURN servers.

Similarly, we concluded that hosting our signaling server on a persistent EC2 server would be inefficient and costly. Signaling is almost entirely utilized at the start of a call in order to establish connections between WebRTC peers. Thus, having a permanent signaling server could potentially lead to unnecessary resource consumption and scalability challenges, particularly in high-load scenarios.

## Arbiter Application
Building upon the insights garnered from our initial prototyping efforts, we undertook a comprehensive redesign of our system architecture. This redesign was specifically aimed at addressing the challenges identified during our second prototype phase. The architecture of our application now comprises five key components, each serving a distinct function:
1) SFU cluster
2) STUN/TURN cluster
3) Signaling Websocket Gateway
4) The HTTP API Gateway
5) React Software Development Kit (SDK)

***INSERT SOME KIND OF GRAPHIC HERE***

In the following section, we will examine each piece of Arbiter's architecture in detail. This analysis aims to explain the specific purpose and function of each element, and to demonstrate how they collectively address the challenges encountered in earlier iterations of the project.

### SFU
To resolve the scaling challenge associated with increasing the number of user-accessible rooms, we opted to containerize the SFU instances and deploy them via AWS ECS on AWS Fargate. Containerization, which facilitates the running of applications within an emulated application layer of an operating system, presented several critical benefits for our specific use case. First, the process of creating and decomissioning contaners is a quick and inexpensive process, particularly when contrasted with the deployment and configuration of a complete EC2 instance for a single application. Second, a single ECS cluster is capable of managing up to 5,000 containers, thereby enabling the accommodation of numerous rooms without additional configuration. Third, Fargate manages both the underlying hardware and system on which the containers operate, including the management of the containers themselves. This approach inherently automates hardware and software monitoring, significantly reducing the workload for developers utilizing Arbiter.

### STUN/TURN
Addressing the scalability of STUN/TURN servers was a critical challenge, driven by the potential for user overload on a single server and the necessity for TURN to relay media streams. Consequently, we opted for a strategy akin to our approach for scaling the SFU, utitilizing ECS on Fargate. However, the communication dynamics with STUN/TURN servers differs significantly from those of the SFU, necessitating a different architectural approach. Contrary to the SFU that coordinates its communication with peers through the signaling stack, STUN/TURN servers are directly interface with clients through the browser. This requires that all clients have access to the public IP address of a STUN/TURN server to facilitate WebRTC-based connections. We accomplished this through the implementation of a Network Load Balancer, which efficiently routes requests to STUN/TURN instances in the ECS cluster. Despite certain challenges ***REFERENCE TO CHALLENGES?***, this configuration solved the problems of having a single public-facing ip address an addition to scaling the number of STUN/TURN server instances.

### Signaling WebSocket Gateway
Although containerization of our existing signaling server was a viable option, it failed to resolve the critical issues of unnecessary costs and excessive uptime identified during our prototyping phase. The fundamental requirements for the signaling component were its operation through WebSockets and its perpetual availability. AWS's WebSocket Gateway met these criteria; however, integrating it necessitated substantial refactoring of our existing application code. Importantly, this approach diverged from our previous solution, where our Express server managed the state of our application. Given the stateless nature of AWS WebSocket Gateways, it became imperative to utilize a database for storing room and session information.

To address this, we implemented lambda functions in conjunction with DynamoDB, handling signaling processes akin to those managed by our original Express server. Similar to the WebSocket Gateway, lambda functions are stateless and require a persistent data source to accurately route messages. These functions are also scalable, dynamically adjusting to the volume of incoming requests, thus effectively addressing the scalability concerns of our signaling architecture. Despite initial apprehensions regarding potential latency issues and their impact on client application responsiveness, our practical usage and testing did not substantiate these concerns.

### HTTP API Gateway
In the initial design of our prototype, the responsibility for creating and assigning rooms was delegated to the signaling server. However, the required refactoring of the signaling server necessitated the introduction of a new component to manage user authentication and room allocation. Similarly to a WebSocket Gateway, an AWS HTTP API Gateway functions as a stateless mechanism, facilitating on-demand communication via lambda functions. The primary operations of the HTTP API Gateway, specifically the assignment and creation of rooms, occur less frequently compared to those of the WebSocket gateway, making it an ideal candidate for a stateless API Gateway. The fundamental responsibilities of the HTTP API Gateway include: 
- Verifying the existence of a room associated with a specific URL
- Allocating an available SFU to users requesting room access
- Generating new rooms to replace those that are occupied

The HTTP API Gateway executes these tasks through three lambda functions, which interact with the same DynamoDB utilized by the signaling stack. This setup ensures seamless integration and coordination between the two APIs, thereby maintaining the room functionality established in the prototype.

### React SDK
In our final development phase, we transitioned from hosting a standalone React application to establishing a React-component Software Development Kit (SDK). The SDK's modular design is tailored to meet Arbiter's primary use case: seamless integration into existing applications. Given Arbiter's stateless architecture, the only requirements for the client application are a page's URL route in combination with the addresses of the signaling stack, the HTTP API, and the STUN/TURN stack. Integrating these URL endpoints into a React application, users can effortlessly integrate the full suite of Arbiter's functionalities into their applications with a single component addition. This method not only simplifies the integration process but also confers the advantage of enabling us to update the Arbiter front-end independently, obviating the need for any modifications on the user’s end.


### Final architecture
All of these pieces together comprise the Arbiter application.

***I THINK THERE SHOULD BE SOME MORE DETAILED DISCUSSION OF THIS DIAGRAM HERE***

***FINAL DIAGRAM HERE***

## Engineering Challenges

### Designing the SFU
The most significant challenge in the development of Arbiter was the scarcity of detailed resources on constructing a Selective Forwarding Unit (SFU). Extensive research through commercial offerings, open-source projects, articles, and WebRTC literature revealed the implementation of an SFU as largely opaque. ***LOTS OF SOURCES HERE***

***I THINK AN IMAGE HERE WOULD BE GOOD TO BREAK UP THE DENSITY OF THIS, BUT I DONT KNOW OF WHAT***

Although the primary function of an SFU in forwarding peer streams was apparent, the intricacies of how one could accomplish this programatically were difficult to ascertain. The absence of detailed literature or existing models left a gap in our understanding of the technical implementation of stream forwarding. Consequently, our approach involved the development of basic prototypes, aiming to resolve these challenges based predominantly on our understanding of the WebRTC specification.

The initial prototype was rudimentary, and merely took the media streams from one user and added them to another user's existing connection. However, this method had notable drawbacks. For instance, adding a media stream to a WebRTC connection initiates a renegotiation process, disrupting the call each time a new user joined. The capacity of media streams per connection was ambiguous, and browser limitations on video tracks further complicated the scenario. Additionally, the process of disconnecting users from the stream required intricate logic to manage connection identities.

***INSERT BAD DESIGN***

Subsequently, we delved into the complex logic of existing open-source SFUs, eventually designing our implementation around a producer-consumer model. This approach involves establishing a distinct WebRTC connection for each user (producer connection) and creating additional consumer connections to all other users for stream forwarding. This method simplifies the process without complicating existing connections.

***INSERT GOOD DESIGN***

For example, if Sam is the sole participant in a call, the SFU creates a single producer connection. Upon Merry joining the call, the SFU establishes a new producer connection for him and consumer connections for each priorly connected peer (just Sam in this case). Finally, Merry will have a new connection established for each existing producer (still just Sam) established with him as well.

***INSERT DIAGRAM***

The procedure repeats with each new participant. When Pippin joins Sam and Merry's call and has his producer connection established, new consumer connections are first created for Sam and Merry. Then, Pippin receives consumer connections for both existing participants.

***INSERT DIAGRAM***

Ultimately, this solution requires that the SFU create 'n' peer consumer connections (where 'n' represents the number of connected peers), and 'n * (n - 1)' consumer connections with each peer. Fundamentally, this complexity imposes considerable demands on the SFU's underlying hardware, emphasizing the need for robust system capabilities.

### Implementing Signals
WebRTC negotiation can present significant challenges due to its inherently complex specification. In typical Peer-to-Peer (P2P) connection topologies, peers engage in a process known as *perfect negotiation*. This process involves extensive exchange and verification of information between peers prior to establishing a WebRTC connection, often leading to intricate logic and complications in handling edge cases.

***INSERT DIAGRAM***

In order to avoid these complexities, we devised a predictable pattern of negotiation between clients and the Selective Forwarding Unit (SFU) depending on what type of connection needed to be established. For producer connections, the client invariably initiates the connection with the SFU. This consistent approach to initiation and response makes the negotiation process predictable and simplifies it significantly.

***INSERT DIAGRAM***

Conversely, for new consumer connections, the SFU, being the first entity aware of the requirement, initiates the negotiation process. This reversal of the producer connection logic streamlines the process for consumer connections. By consistently designating the SFU as the initiator for these connections, we achieved a simplified and predictable negotiation pattern for establishing WebRTC connections with peers.

Arbiter's WebSocket Gateway facilitates this process through two distinct signals: *identify* and *handshake*. The 'identify' signal determines the nature of the connection (be it SFU or client) and updates the database for stateful connection management. The 'handshake' signal enables the exchange of various WebRTC-related signals between an SFU and a client, crucial for:
- Establishing a WebRTC connection
- Exchanging ICE candidates
- Transmitting Session Description Protocols (SDPs)
- Adding data channels

***INSERT IMAGE OF LAMBDAS***

### Scaling STUN/TURN
A significant, unexpected challenge in scaling our STUN/TURN stack was maintaining consistency in client-server communication. Specifically, when a client utilizes a STUN/TURN server for tasks like discovering their public IP address or stream forwarding, it's imperative to maintain continuous communication with the same server instance. This necessity arises from the iterative process of discovering ICE candidates and the potential need to revert to a relay, which is essentially a continuous dialogue with the server.

***INSERT DIAGRAM***

To draw an analogy, consider the process akin to negotiating a car's price. If, mid-negotiation, the original salesperson were to leave, forcing you to restart negotiations with a new, uninformed salesperson, the process would become inefficient and repetitive.

***INSERT DIAGRAM?***

We encountered this issue initially when employing a network load balancer for our STUN/TURN containers. A client connected to a STUN/TURN server instance must sustain that specific connection consistently. This requirement is particularly critical when using TURN for stream data relay, as it necessitates continuous data forwarding to the same server instance.

To address this, we implemented sticky sessions in our load balancer, establishing a reliable and predictable communication pattern with the STUN/TURN servers, thereby ensuring consistent client-server interactions.

## Further Work
***IN PROGRESS***
Although Arbiter successfully solves the problem we initially identified, there are several areas in which Arbiter could be improved.

1) Stream pagination
2) Bitrate limiting
3) Screen sharing
4) More variety in SDK choices