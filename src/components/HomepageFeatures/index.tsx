import FadeInSection from './FadeInSection';

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <FadeInSection>
        <section className="bg-white py-20 sectionA">
          <article className="flex flex-col justify-center gap-8">
            <h2 className="lp-para uppercase text-xl tracking-wide font-semibold text-gray-600 text-center mt-0">
              Supports
            </h2>
            <div className="flex flex-col justify-center gap-20 md:flex-row">
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override .lpPara">
                  One Command
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  AWS Integration
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override">
                  Auto-Scaling
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  Multi-Room Capability
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="lp-para  font-medium tracking-tight text-5xl text-gray-600 p-override">
                  Effortless UI
                </p>
                <p className="lp-para  text-xl text-gray-600 p-override">
                  Drop-in React Component
                </p>
              </div>
            </div>
          </article>
        </section>
      </FadeInSection>

      <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="flex flex-col justify-center gap-8 py-16 align-middle items-center md:flex-row">
            <div className="md:w-1/3 w-full">
              <h2 className="lp-h2 hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 md:block">
                Hassle free deployment with our CLI
              </h2>
              <p className="lp-para hidden font-epilogue text-xl text-gray-700 md:block">
                One command and Arbiter will be up and running in minutes. Sit
                back, grab a cup of coffee, and we'll take care of all of your
                infrastructure needs.
              </p>
              <h2 className="md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Easy CLI
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                Get up and running in no time.
              </p>
            </div>
            <h2 className="hidden md:block"></h2>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="cli-video shadow-img"
            >
              <source
                className="shadow-video"
                src="/img/deploy2.mp4"
                type="video/mp4"
              />
            </video>
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section className="bg-white sectionA">
          <article className="max-w-7xl mx-auto flex flex-col justify-center gap-8 py-16 items-center md:flex-row-reverse">
            <div className="md:w-1/4 w-full">
              <h2 className="lp-h2 hidden md:block font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Drop-in Integration with our React SDK
              </h2>
              <p className="lp-para  hidden md:block font-epilogue text-xl text-gray-700">
                With a couple of lines of code, Arbiter seamlessly integrates
                video conferencing into your React application. You'll be up and
                running in no time.
              </p>
              <h2 className="md:hidden font-medium tracing-tight text-5xl pb-3 text-gray-600 text-center">
                Quick <br></br>Integration
              </h2>
              <p className="lp-para  md:hidden font-epilogue text-xl text-gray-700 text-center">
                One React component and you're ready to go.
              </p>
            </div>
            <img
              className="md:mr-0 md:ml-0 md:max-w-100 shadow-img code-img mx-auto max-w-80"
              src="img/arbiter_code.png"
            />
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <section className="bg-gray-100 border-t border-b border-gray-300 border-solid px-4 sectionB">
          <article className="md:w-1/2 w-full mx-auto flex flex-col justify-center gap-8 py-20">
            <div className="flex flex-col max-w-5xl text-center mx-auto">
              <h2 className="lp-h2 font-medium tracing-tight text-5xl pb-3 text-gray-600">
                Powered by AWS
              </h2>
              <p className="lp-para  hidden md:block font-epilogue text-xl text-gray-700 p-override">
                Arbiter is a cloud-native solution built on AWS using ECS,
                Fargate, DyanmoDB, Lambdas, HTTP and WebSocket API Gateways. You
                get a scalable and resource-efficient architecture
                out-of-the-box.
              </p>
              <p className="lp-para md:hidden font-epilogue text-xl text-gray-700 text-center">
                Built on AWS for a scalable and resource-efficient solution.
              </p>
            </div>
            <img
              className="max-w-5xl mx-auto archi-img"
              src="img/architecture_overview.png"
            />
          </article>
        </section>
      </FadeInSection>
      <FadeInSection fadeDistance={300}>
        <section
          className="bg-white border-solid border-b border-gray-300 sectionA"
          id="team"
        >
          <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20">
            <h2 className="lp-para text-center uppercase text-large tracking-wide font-semibold text-gray-600 mb-2">
              Created By
            </h2>
            <div className="flex flex-row md:flex-row gap-2 md:gap-8 mx-auto">
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img
                    className="max-h-64 portrait-img"
                    src="img/stephen.png"
                  />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center">
                  Stephen Watzman
                </p>
                <p className="lp-para  text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para  text-gray-600 text-left mb-1 p-override text-center">
                  Detroit, MI
                </p>
                <div class="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://watzman.dev/"
                    target="_blank"
                    class="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/watzmonium"
                    target="_blank"
                    class="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/stephen-watzman-b98146192/"
                    target="_blank"
                    class="inline-block hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:watzmans@gmail.com"
                    class="hover:text-indigo-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img className="max-h-64 portrait-img" src="img/tyler.png" />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Tyler Frye
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Tampa Bay, FL
                </p>
                <div class="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://tfrye.dev/"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/frye-t"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tyler-frye-8a677b283/"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:tyler.frye42@gmail.com"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="portrait-card flex flex-col">
                <div className="">
                  <img className="max-h-64 portrait-img" src="img/jay.png" />
                </div>
                <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
                  Jay Jayabose
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Software Engineer
                </p>
                <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
                  Brooklyn, NY
                </p>

                <div class="flex gap-1 mx-auto mt-4">
                  <a
                    href="https://www.jayabose.me/"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-world"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M3.6 9h16.8"></path>
                      <path d="M3.6 15h16.8"></path>
                      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/jayjayabose"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayabose/"
                    target="_blank"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M8 11l0 5"></path>
                      <path d="M8 8l0 .01"></path>
                      <path d="M12 16l0 -5"></path>
                      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:jayabose@gmail.com"
                    class="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-mail"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </FadeInSection>
    </>
  );
}
