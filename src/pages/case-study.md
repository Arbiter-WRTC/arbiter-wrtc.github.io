# Arbiter Case Study

## Introduction

### Problem Definition

Video conferencing is an important part of modern life. For many web applications, across a wide range of industries and use cases, it is a basic expectation. 

***INSERT PICTURE OF ARBITER FE***

As a result, many developers need to include basic video conferencing capabilities in their web applications. At the same time, developing and integrating a video conferencing solution is a significant underataking that requires specialized domain knowledge, development time, and resources. There are several key options and considerations including:
- What Media Streaming Protocol to use
- How to implement that protocol
- What infastructure is necessary to support that protocol

Thus, while building a solution from the ground-up provides significant control over one's specific application needs and features, it can come at the expense of other features more important to the core functionality of that application. For example, if a development team building a patient portal for a hospital wanted to integrate video conferencing within their existing patient portal to allow for medical professionals to speak directly and securely with their patients, it would require significant knowledge outside of the core functionality of their existing application.

***INSERT INTEGRATION PICTURE***

## Existing Solutions

Development teams that want to incorporate video conferencing into their application may choose from a number of solutions including commercial products, open-source projects, or building an in-house product from the ground-up. The most optimal choice for any application will vary based on several factors like the availability of developers, budget, or familiarity with the existing technology. 

### Commercial Products and DIY
Many commercial products available for video conferencing integration with some of the more well-known commercial solutions are Twilio and Agora. These companies provide robust Software Development Kits (SDKs) and also host and manage the application on their own infrastructure. By purchasing a commercial product, a developer delegates all responsibilites related to designing and maintaining a scalable infrastructure to a third party. Commercial products typically offer advanced video conferencing features such as breakout groups, waiting rooms, background effects, and offer flexible APIs and SDKs. 

Commercial solutions may be an appropriate choice for a well-funded development team that prefers to not have to manage their own infastructure or worry about how their service will be hosted. However, there are also some significant drawbacks to investing in a commercial solution for integrating video conferencing into an existing application; most notably cost. 

***INSERT COMMERCIAL SOLUTIONS***

Another option that a team could explore is building their own video conferencing solution using an open-source library. There are several notable open-source projects that provide low-level implementations of web conferencing protocols. Among the most notable projects are Jitsi, mediasoup, and Kurento. However, all of these projects are framework and hosting-agnosting, meaning that they also require the development team to design and deploy a scalable cloud architecture. Consequently, integrating video conferencing will result in much slower time to market and much greater development effort than other options.

***INSERT DIY DIAGRAM***
### In-Betweens
As an alternative to commercial products or DIY, there are a number of open-source projects that can provide video conferencing capabilities out of the box. These in-betweens provide video conferencing capabilities and Software Development Kits (SDKs) but do not provide or implement hosting. Unlike purchasing a commercial product, building on top of an open-source project involves no upfront cost, and may therefore be a more cost-effictive solution. However, broad domain knowledge, cloud hosting knowledge, and time investment are required to implement these solutions and this may be a significant tradeoff for many developers.

Of the most common open-source solutions, two of the more robust solutions are LiveKit and Jitsi Meet. Similar to commercial products, these projects offer many advanced video conferencing features and highly customizable APIs and SDKs. However, integrating these projects into your web application requires more effort because of the lack of managed infastructure. It may also be the case that the developer needs to make all infrastructure choices themselves. With LiveKit, for example, the application offers no suggestions on how best to host their application, and this could require a significant investment of time and resources from a development team.

***INSERT PICTURE OF TONS OF OPEN-SOURCE PROJECTS***

Despite these tradeoffs, building on top of an open-source project could be an appropriate choice for a development team with the expertise and time to design and maintain their infrastructure, and who requires advanced capabilities and control while avoiding the ongoing expense of a commercial product.

## Introducing Arbiter

In order to fill the gap between existing commercial and DIY video conferencing solutions, we built Arbiter. Arbiter is a cloud native framework for video conferencing within existing web applications that can be deployed to Amazon Web Services (AWS) with a single command. Arbiter is ideal for development teams that need to easily add support for real-time video communication for many users across many rooms simultaneously. Arbiter simplifies application development and abstracts away the complexity of establishing a scalable cloud infrastructure.

Arbiter's unique approach to this problem lies between the major tradeoffs between Commercial and full-featured open-source solutions. Arbiter is an open-source product that features automated cloud deployment, allowing for a development team to quickly and simply integrate video conferencing within their application. Because of this, a development team who uses Arbiter does not need to devote significant time or effort into the development or cloud deployment of their video conferencing features while having the benefits of owning their own infastructure.

***INSERT COMPARISON CHART***

However, Arbiter is not a product without drawbacks. If a team needs a wide-range of features, or doesn't want to use AWS, Arbiter may not be the right choice. Arbiter also doesn't support content-sharing or session recording, which may be important features for an application to have.

## Considerations Building A Video Conferencing Application

### Choosing a Media Streaming Protocol
One of the first considerations we had to make when building a video conferencing application is what protocol to use. There are a number of video protocols to choose from, each with their own tradeoffs in terms of device and browser support, ease of integration, compatibility across devices, speed, and security to name a few. Some commonly used protocols for streaming media are:
- HTTP Live Streaming (HLS)
- Dynamic Adaptive Streaming over HTTP (DASH)
- Real-Time Messaging Protocol (RTMP)
- Security Reliable Transport (SRT)
- Web Real-Time Communication (WebRTC)

Moreover, within any protocol, there may be several different sub-protocols. For example, HLS has Apple HLS, HLS Tuned, and Low-Latency HLS to name a few. 

***INSERT SPEED COMPARISON CHART***

While there is no best protocol, WebRTC is the protocol we found most attractive for three key reasons:
1) Low Latency
2) Wide Browser Support
3) End-to-End encryption

In video conferencing, latency - which is the delay between the time a participant sends a signal (audio or video) and the time other participants receive the signal - is among the most important considerations. WebRTC provides latency of less than one second, which is required so participants can respond to each other in near real-time. Another important consideration is browser support. A browser with strong support in this context refers to the capability of web browsers to run an application without the need for a user to download additional software. WebRTC provides this, because it is supported by all major browsers. Finally, encyrption is extremely important for both privacy and security during video conferencing. In this context, encryption refers to trasnforming data exchanged during a video conference so that it cannot be disciphered by third parties. Encryption is needed to prevent unauthorized access, interception, or tampering and to assure users their conversation is private. Because WebRTC encrypts its data using Secure Real-time Transport Protocol (SRTP), it offers  robust end-to-end encryption.

For the significant advantages and features it provides, we built Arbiter using WebRTC. However, WebRTC is a browser specification and collection of protocols that we needed to understand in greater detail in order to build our own application with it.

### What is WebRTC?
WebRTC (Web Real-Time Communication) is an open-source specification that enables two peers to establish a connection in order to facilitate real-time communication. The specification includes acceptable means of capturing, sending, and receiving media, as well as protocols like ICE (Interactive Connectivity Establishment) and SDP (Session Description Protocol) for establishing and maintaining connections. Notably, WebRTC is used by applications like Zoom, Google Hangouts, and Discord to enable video conferencing and other real-time communications.

WebRTC was initially developed by Google, and the project was made open-source in 2011. Unlike many legacy protocols WebRTC utilizes UDP (User Datagram Protocol) rather than TCP (Transmission Control Protocol) as its transport layer protocol, making it more appropriate for video conferencing where low latency is critical, even if some packets are lost.

***INSERT WRTC CONNECTION DIAGRAM***

### How WebRTC Works
In order to share audio and video between computers, WebRTC requires clients to establish and maintain a secure connection involving several steps using a series of protocols. Notably, peers must exchange data before a WebRTC connection can established. Additionally, because most computers do not typically know their own IP address, network obstacles may need to be circumvented in order to even begin the exchange of signals to start the connection.

Thus, to meet these needs a WebRTC video conferencing application must, at minimum, include:
1) A Signaling server
2) Session Traversal Utilities for NAT (STUN)/ Traversal Using Relay around NAT (TURN) server

***INSERT WRTC BASICS DIAGRAM***

### Signaling
In order to properly exchange information to establish a WebRTC connection, computers must agree upon the terms of that connection. Computers attempting to establish a WebRTC conenction need to share several key pieces of information including:
- Their IP address
- Their media capabilities
- What kind of information they want to send

Fundamentally, WebRTC is a direct, peer-to-peer connection. Therefore, knowing detailed information about the peer with which a connection will be established is necessary. The mechanism by which computers share this information is the signaling server.

Signaling servers allow for the direct transmission of IP-related information, as well as Session description Protocols (SDPs) between computers that want to establish WebRTC connections. The process by which which this signaling occurs is called negotiation.

Consider a situation in which Sam wishes to establish a WebRTC connection with Merry to have a video conference. To begin negotiation, Sam must transmit information to Merry indiciating that he wants to create a connection. However, Sam does not have a connection to Merry, nor does he know where to find him. Therefore, it is necessary that both Sam and Merry must connect to an intermediary they both know - the signaling server - before data exchange can begin. The signaling server sends messages that are used to establish the terms of the WebRTC connection so that they can determine how best to share data.

***INSERT SIGNALING DIAGRAM***

Once both peers are connected to the signaling server, Sam can generate a message and transmit it to the signaling server. Having also connected to the same server, Merry can generate a message to respond in kind. Notably, the WebRTC specification is silent on signaling. It is, therefore, left to the developer to design a solution and that meets their needs.

### STUN/TURN
To this point, we have largely ignored network obstacles that arise when connecting peers over the internet. In reality the challenges establishing a direct connection across the internet are significant. Fortunately, WebRTC includes measures to navigate these challenges. 

#### What is NAT and why is it a network obstacle?
Every publicly addressable device on the internet requires a unique IP address. IPv4 specifies a 32 bit number to represent an IP address. Therefore there are a maximum of approximately 4.3 billion IP addresses available.

In the early 1990s  it became clear 4.3 billion addresses would be too few. The solution was to introduce NAT (network address translation) devices at the edge of the network. NAT devices map many private IP addresses to a single public address. In this way the problem of address depletion was solved. 

However, in the context of establishing a WebRTC connection this creates two obstacles. First, if a computer sits behind a NAT device, that computer is unaware of its public IP. For WebRTC, this is a problem because a public IP address is required to negotiate a WebRTC connection. Therefore, a computer needs a way to discover its public IP address to be able to establish a WebRTC connection. Second, some NAT devices have a security configuration called Symmetric NAT in which the local internal host is not permitted to establish a direct WebRTC peer connection.

***INSERT NAT/SYMMETRIC NAT DIAGRAM***

Both of these problems have solutions laid out in the WebRTC specification. The solution to the first problem - an unknown IP address - can be solved with STUN, and the solution to the second problem - restrictive NAT configuration - can be solved with TURN.

#### STUN
In order to discover its public IP address, the internal host sends a request to a Session Traversal Utilities for NAT (STUN) server. STUN is a protocol (RFC 5389) that allows a device behind a NAT device to discover its public IP and port. A STUN server observes the IP address of a request sent to it, and sends a response that includes the local host’s public IP address.

***INSERT STUN DIAGRAM***

#### TURN
If a client has a restrictive security configuration - like with a Symmetric NAT - the Traversal Using Relays around NAT (TURN) protocol (RFC 5766) can be used by a server to relay that peer's media streams. In essence, a TURN server acts as a peer to which a client can connect, and the TURN server establishes another connection with the peer originally intended. Notably, this requires a TURN server to use a lot of bandwith and computational resources because it may need to forward the media streams of many clients.

***INSERT TURN DIAGRAM***

**SUGGESTED Paragraph - WHY does turn work? maybe a diagram of a NAT/TURN**

### Establishing a Connection
With a signaling server and STUN/TURN servers in place, a WebRTC connection can be established using a series of distinct steps.

1) Creating an offer
2) Accepepting that offer
3) Exchanging Interactive Connectivity Establishment (ICE) Candidates

While these steps represent a high-level overview of the process required to establish a WebRTC connection, there are several important details to note in each step.

First, when creating an offer or accepting an offer, a client must define its Session Description Protocol (SDP) that outlines the nature of the connection including what capabilities the client has and what features it intends to share.

Second, ICE candidates represent potential ways through which clients can connect to one another directly. The information returned by STUN/TURN is used by the client to generate ICE candidates that can be potential public IP addresses, or relay servers via which an indirect connection can be stablished.

A signaling server is vital to this process because it is the medium through which ICE candidates, SDPs, and other potentially important information is exchanged between clients.

***INSERT HANDSHAKE DIAGRAM***

### Network Toplogies
The WebRTC specification dictates how audio, video, and data sharing occurs between peers. Indeed, WebRTC was originally designed as a Peer-to-Peer (P2P) protocol, which limits its potential as a video conferencing protocol. There are network topologies, however, that attempt to circumvent this issue in order to build a video conferencing application that allows for many users. The most commonly used topologies are mesh and client-server using either a Media Control Unit (MCU) or a Selective Forwarding Unit (SFU).

#### Mesh 
A mesh topology is a network architecture in which all clients establish a connection to all other clients. In the context of WebRTC, each participant will have a direct webRTC connection to every other participant in the call, resulting in each client needing to send its media streams to every other client ('n - 1' connections) and receiving a stream from all other client ('n - 1' connections). 

***INSERT MESH DIAGRAM***

The absence of a server in mesh topology has several key benefits:
- Simplified Infrastructure: Because there is no server it relatively easy to deploy and manage WebRTC applications.
- Reduced Cost: Operating a central server is typically a large portion of the expense to operate a WebRTC application.
- Enhanced Privacy: Because data is transferred between peers there can be no exposure of sensitive data to a server.

However, because of the need for each client to send and receive N - 1 unique connections, mesh topology is suitable for only a small number of video streaming participants and is greatly limited by the bandwith and processing power of the computer of any individual client.

#### Client-Server
In the context of WebRTC, a client-server topology addresses some of the shortcomings of a mesh topology, reducing the resource demand on each client. As a result, client-server topologies allow for a greater number of clients to connect at the same time, which is more suitable for video conferencing.

Practically, there are two main WebRTC client-server topologies: using a Media Control Unit (MCU) or a Selective Forwarding Unit (SFU). These specific topologies appear similar, but are distinguished by the nature of the connection between client and server. Both MCU and SFU topologies offer unique tradeoffs for WebRTC-based communication.

Within an MCU topology, the MCU is a server that receives all client streams, processes them into a single stream, and forwards that to each client. One major advantage of using an MCU is that each client only needs to maintain one WebRTC connection to the server, significantly decreasing both the bandwith and processing burden on each client. Conversely, this requires the MCU server to process all user data, which requires a lot of computational resources.

***INSERT MCU PICTURE***

Within an SFU topology, the SFU is a server that receives all client streams, but then simply forwards those streams to other clients in the call. Similar to an MCU, this alleviates a lot of the burden on each client. However, while an MCU reduces the number of connections to 1, an SFU topology still requires each client receive 'n - 1' from the SFU. This hybrid approach increases the burden on each client, but also allows for a significantly reduced computational burden on the server.

***INSERT SFU DIAGRAM***

## How we Built Arbiter

### Selecting a Topology
After chosing WebRTC with which to build Arbiter, the next important decision was what topology we would use to build Arbiter. From our initial prototyping, the limits of a Peer-to-Peer-mesh (P2P) topology became clear quickly. First, creating direct P2P WebRTC connections requires a complicated handshake logic called *perfect negotiation* in which the parties must sequentially follow a series of specific steps in order to establish a connection. Secondly, we observed that P2P WebRTC connections quickly became limited by the hardware of the users as well as their internet connections. This was expected, but we were not able to maintain a call with more than three participants before encounting call difficulties. Third, the details of the specification meant that there are some quirks of WebRTC connections that govern their use, such as how adding user media streams is the trigger for negotiating the terms of a connection with a peer.

***INSERT DIAGRAM***

Unlike a P2P-mesh topology, both MCU and SFU topologies provide unqiue benefits that allow for a video conference that can accomodate more users than a P2P-mesh topology would. For example, an MCU topology can be advantageous in scenarios where more control over media is required, or where computational resources on the server are not a limiting factor. The MCU server can mix and manipulate streams, enabling features like layout control and content mixing. However, these features are not required for basic video conferencing and processing streams adds compute load to the server which is an obstacle to scaling while increasing the cost to operate the server.

In contrast, an SFU topology requires comparatively lower server load because the server is relaying, rather than combining participant streams. This improves scalablitiy and reduces cost to operate. An SFU topology also involves tradeoffs, however. Most notably, it requires each client to maintain 'n' WebRTC connection to the SFU server. Despite this, Arbiter employs an SFU topology for serveral key reasons. First, using an SFU server topology is much more cost-effective when hosting on cloud-based architecture. Second, when forwarding streams rather than mixing them, end-to-end security is maintained. Third, because an SFU server does not have to process the streams, it maintains the very low latency of which WebRTC is capable.

### SFU Prototype
Upon acquiring a robust understanding of the WebRTC specification and its practical implementation, our focus shifted towards engineering a more scalable solution. This solution aimed to accommodate an increased number of peers in a single call, alongside streamlining the connection establishment process. To achieve this, we concentrated on developing a Selective Forwarding Unit (SFU) that achieved the minimum desired outcome of forwarding user streams.  At this point, Arbiter consisted of a Node.js SFU, a Node.js Express server using websockets, and a simple React application. 

***INSERT DIAGRAM***

This prototype allowed us to validate our ideas for building a scalable WebRTC-based application, and provided us with some key understandings that would inform the construction of our final product. Indeed, a crucial outcome of this phase was the validation of our architectural design. Amidst prevailing uncertainties regarding the product's construction and functionality, affirming the efficacy of our initial architecture was crucial for further progression. Additionally, we identified opportunities to refine and optimize the signaling logic, leveraging the asymmetric dynamics of the client-SFU connection.

***INSERT DIAGRAM***

We also discovered some serious shortcomings in our initial architecture and design. As was clear from our first prototype, WebRTC-based video conferencing is fairly resource-intensive. As such, we learned that each room would need its own SFU server instance in order to accomodate a larger number of clients. This highlighted a fundamental issue with our infastructure, which was hosted on AWS Elastic Compute Cloud (EC2). Due to the fact that deploying, configuring, and initializing a single EC2 instance is a complex and time-consuming process, we needed to find a simpler way to provision new SFU servers in order to increase the number of rooms. Our STUN/TURN server was also hosted on EC2, which would create the same scaling challenges as the SFU rooms. TURN acts as a media relay, meaning that many users using the same TURN server can overwhelm that server. Therefore, more users using TURN will require more instances of TURN servers.

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
To resolve the scaling challenge associated with increasing the number of user-accessible rooms, we opted to containerize the SFU instances and deploy them via AWS Elastic Container Service (ECS) on AWS Fargate. Containerization, which facilitates the running of applications within an emulated application layer of an operating system, presented several critical benefits for our specific use case. First, the process of creating and decomissioning contaners is a quick and inexpensive process, particularly when contrasted with the deployment and configuration of a complete EC2 instance for a single application. Second, a single ECS cluster is capable of managing up to 5,000 containers, thereby enabling the accommodation of numerous rooms without additional configuration. Third, Fargate manages both the underlying hardware and system on which the containers operate, including the management of the containers themselves. This approach inherently automates hardware and software monitoring, significantly reducing the workload for developers utilizing Arbiter.

### STUN/TURN
Addressing the scalability of STUN/TURN servers was a critical challenge, driven by the potential for user overload on a single server and the necessity for TURN to relay media streams. Consequently, we opted for a strategy akin to our approach for scaling the SFU, utitilizing ECS on Fargate. However, the communication dynamics with STUN/TURN servers differs significantly from those of the SFU, necessitating a different architectural approach. Contrary to the SFU that coordinates its communication with peers through the signaling stack, STUN/TURN servers directly interface with clients through the browser. This requires that all clients have access to the public IP address of a STUN/TURN server to facilitate WebRTC-based connections. We accomplished this through the implementation of a Network Load Balancer, which efficiently routes requests to STUN/TURN instances in the ECS cluster. Despite certain challenges ***REFERENCE TO CHALLENGES?***, this configuration solved the problems of having a single public-facing ip address an addition to scaling the number of STUN/TURN server instances.

### Signaling WebSocket Gateway
Although containerization of our existing signaling server was a viable option, it failed to resolve the critical issues of unnecessary costs and excessive uptime identified during our prototyping phase. The fundamental requirements for the signaling component were its operation through WebSockets and its perpetual availability. AWS's WebSocket Gateway met these criteria; however, integrating it necessitated substantial refactoring of our existing application code. Importantly, this approach diverged from our previous solution, where our Express server managed the state of our application. Given the stateless nature of AWS WebSocket Gateways, it became imperative to utilize a database for storing room and session information.

To address this, we implemented AWS Lambda functions in conjunction with DynamoDB, handling signaling processes akin to those managed by our original Express server. Similar to the WebSocket Gateway, lambda functions are stateless and require a persistent data source to accurately route messages. These functions are also scalable, dynamically adjusting to the volume of incoming requests, thus effectively addressing the scalability concerns of our signaling architecture. Despite initial apprehensions regarding potential latency issues and their impact on client application responsiveness, our practical usage and testing did not substantiate these concerns.

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
