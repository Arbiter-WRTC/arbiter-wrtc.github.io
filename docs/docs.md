# Docs

## Dependencies

### Arbiter Command Line Interface

In order to use the **`arbiter`** command line interface, a user must first create an [**AWS Account**](https://docs.aws.amazon.com/SetUp/latest/UserGuide/setup-prereqs-instructions.html) and install the following dependencies:

- [**AWS Command Line Interface**](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html): command line tool for managing AWS services.

Subsequently, a user must ensure that the _AWS Command Line Interface_ is configured locally. This can be achieved by executing `aws configure` from the command line and passing in the following necessary credentials:

- AWS Access Key ID
- AWS Secret Access Key
- Default region

For more details on deriving the above credentials, please see the [**official docs**](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html).

## Usage

### Arbiter Command Line Interface

#### Install

Install the Arbiter CLI with npm

```sh-session
$ npm install -g arbiter-wrtc
```

#### Commands

##### `Arbiter deploy`

Deploy Arbiter to your AWS account using the deploy command

```sh-session
$ arbiter deploy
running command...
```

```
USAGE
  $ arbiter deploy [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  deploy Arbiter to AWS

EXAMPLES
  $ arbiter deploy
```

The `deploy` command will prompt you for your AWS access key ID and secret access key.
Your AWS IAM account must have permission to create infastructure and security groups.
You will then be asked what region you want to use to deploy Arbiter, and how many rooms you would like idle.
Note that idle rooms are able to be claimed by users. It is possible to run Arbiter with 0 idle rooms, but that may result in long wait times to create new rooms when a URL is visited. A room is docker container of Arbiter's SFU, and it can take several minutes for a room to instantiate and become available to be claimed.

When you deploy Arbiter, you will have the following architecture created:
<img width="751" alt="Screen Shot 2023-12-05 at 9 14 52 PM" src="https://github.com/Arbiter-WRTC/cli/assets/57457673/822f173d-02c9-458d-8253-7bde9075d366" />

This architecture includes:

- HTTP API Gateway
- WebSocket Gateway
- CoTURN ECS Cluster
- SFU ECS Cluster

### Arbiter React SDK

#### Install

Arbiter's React SDK is built using React with Vite and Typescript.<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>

To use the Arbiter React SDK, the Arbiter infrastructure must first be provisioned using the CLI . Once deployed, Arbiter's CLI will provide you with a .env.local file to use with the Arbiter React SDK.

To integrate, first download the Arbiter npm package with `npm install @Arbiter/SDK`

#### Import

Import the Arbiter React SDK into your existing React application as shown:

```ts
import Arbiter 'from @Arbiter/SDK';

const App = () => {
   # your code here...
   <Arbiter />;
};

export default App
```

INSERT PICTURE OF FRONTEND

Arbiter should work seamlessly with your existing frontend application, and room provisioning will be based on the URL path of the page in question. This allows you to integrate rooms dynamically based on the content. It is important to note that all users who visit that page will be able to join the call for that route, so adding authentication to prevent unauthorized use is a best practice when using Arbiter.

### Arbiter HTTP API Gateway

some description

api docs for three routes

- GET /getRoomId
- PATCH /claimRoomId
- POST /createRoom

### Arbiter Signaling Server

some description

signals

- payloads

