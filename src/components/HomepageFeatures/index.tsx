export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className="bg-white py-20">
        <article className="flex flex-col justify-center gap-8">
          <h2 className="uppercase text-xl tracking-wide font-semibold text-gray-600 text-center mt-0">
            Supports
          </h2>
          <div className="flex flex-col justify-center gap-20 md:flex-row">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-medium tracking-tight text-5xl text-gray-600 p-override">
                One Command
              </p>
              <p className="text-xl text-gray-600 p-override">
                AWS Integration
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-medium tracking-tight text-5xl text-gray-600 p-override">
                Auto-Scaling
              </p>
              <p className="text-xl text-gray-600 p-override">
                Multi-Room Capability
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-medium tracking-tight text-5xl text-gray-600 p-override">
                Effortless UI
              </p>
              <p className="text-xl text-gray-600 p-override">
                Drop-in React Component
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4">
        <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row">
          <div className="md:w-1/3 w-full">
            <h2 className="hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
              Hassle free deployment with our CLI
            </h2>
            <p className="hidden font-epilogue text-xl text-gray-700 md:block">
              One command and Arbiter will be up and running in minutes. Sit
              back, grab a cup of coffee, and we'll take care of all of your
              infrastructure needs.
            </p>
            <h2 className="md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
              Easy CLI
            </h2>
            <p className="md:hidden font-epilogue text-xl text-gray-700 text-center">
              Get up and running in no time.
            </p>
          </div>
          <h2 className="hidden md:block"></h2>
          <video autoPlay loop muted playsInline className="cli-video">
            <source
              className="shadow-img"
              src="/img/deploy2.mp4"
              type="video/mp4"
            />
          </video>
        </article>
      </section>

      <section className="bg-white">
        <article className="max-w-7xl mx-auto flex flex-col justify-center gap-8 py-16 items-center md:flex-row-reverse">
          <div className="md:w-1/4 w-full">
            <h2 className="hidden md:block font-medium tracing-tight text-5xl pb-3 text-gray-600">
              Drop-in Integration with our React SDK
            </h2>
            <p className="hidden md:block font-epilogue text-xl text-gray-700">
              With a couple of lines of code, Arbiter seamlessly integrates
              video conferencing into your React application. You'll be up and
              running in no time.
            </p>
            <h2 className="md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
              Quick <br></br>Integration
            </h2>
            <p className="md:hidden font-epilogue text-xl text-gray-700 text-center">
              One React component and you're ready to go.
            </p>
          </div>
          <img
            className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
            src="img/arbiter_code.png"
          />
        </article>
      </section>

      <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4">
        <article className="md:w-1/2 w-full mx-auto flex flex-col justify-center gap-8 py-20">
          <div className="flex flex-col max-w-5xl text-center mx-auto">
            <h2 className="font-medium tracing-tight text-5xl pb-3 text-gray-600">
              Powered by AWS
            </h2>
            <p className="hidden md:block font-epilogue text-xl text-gray-700 p-override">
              Arbiter is a cloud-native solution built on AWS using ECS,
              Fargate, DyanmoDB, Lambdas, HTTP and WebSocket API Gateways. You
              get a scalable and resource-efficient architecture out-of-the-box.
            </p>
            <p className="md:hidden font-epilogue text-xl text-gray-700 text-center">
              Built on AWS for a scalable and resource-efficient solution.
            </p>
          </div>
          <img
            className="shadow-img max-w-5xl mx-auto archi-img"
            src="img/architecture_overview.png"
          />
        </article>
      </section>
      <section
        className="bg-white border-solid border-b border-gray-300"
        id="team"
      >
        <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20">
          <h2 className="text-center uppercase text-large tracking-wide font-semibold text-gray-600 mb-2">
            Created By
          </h2>
          <div className="flex flex-row md:flex-row gap-2 md:gap-8 mx-auto">
            <div className="portrait-card flex flex-col">
              <div className="">
                <img className="max-h-64 portrait-img" src="img/stephen.png" />
              </div>
              <p className="text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center">
                Stephen Watzman
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Software Engineer
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Detroit, MI
              </p>
              <div className="flex gap-1 mx-auto">
                <a href="#linkedin">
                  <img src="img/icons8-linkedin.svg" />
                </a>
                <a href="#linkedin">
                  <img src="img/globe.png" />
                </a>
              </div>
            </div>
            <div className="portrait-card flex flex-col">
              <div className="">
                <img className="max-h-64 portrait-img" src="img/tyler.png" />
              </div>
              <p className="text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                Tyler Frye
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Software Engineer
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Tampa Bay, FL
              </p>
              <div className="flex gap-1 mx-auto">
                <a href="#linkedin">
                  <img src="img/icons8-linkedin.svg" />
                </a>
                <a href="#linkedin">
                  <img src="img/globe.png" />
                </a>
              </div>
            </div>
            <div className="portrait-card flex flex-col">
              <div className="">
                <img className="max-h-64 portrait-img" src="img/jay.png" />
              </div>
              <p className="text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                Jay Jayabose
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Software Engineer
              </p>
              <p className="text-gray-600 text-left mb-1 p-override text-center">
                Brooklyn, NY
              </p>
              <div className="flex gap-1 mx-auto">
                <a href="#linkedin">
                  <img src="img/icons8-linkedin.svg" />
                </a>
                <a href="#linkedin">
                  <img src="img/globe.png" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
