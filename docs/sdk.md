## Arbiter React SDK
### Install

Arbiter's React SDK is built using React with Vite and Typescript.

To use the Arbiter React SDK, the Arbiter infrastructure must first be provisioned using the CLI . Once deployed, Arbiter's CLI will provide you with a .env.local file to use with the Arbiter React SDK.

To integrate, first download the Arbiter npm package with `npm install @Arbiter/SDK`

### Import 
Import the Arbiter React SDK into your existing React application as shown:

```ts
import Arbiter 'from @arbiter-framework/sdk';

const App = () => {
   # your code here...
   <Arbiter />;
};

export default App
```


Arbiter should work seamlessly with your existing frontend application, and room provisioning will be based on the URL path of the page in question. This allows you to integrate rooms dynamically based on the content. It is important to note that all users who visit that page will be able to join the call for that route, so adding authentication to prevent unauthorized use is a best practice when using Arbiter.
