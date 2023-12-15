import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import FadeInSection from '../components/HomepageFeatures/FadeInSection';

function HomepageHeader() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-arbiterBlue to-arbiterPink flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40"
    >
      <article className="px-4 text-white antialiased py-8 md:py-10 pb-14 relative font-sans border-solid border-t-1 border-gray-700 border-r-0 border-l-0 border-b-0 max-w-full">
        <h1 className="leading-[48px] mb-2 text-white font-main text-4xl md:text-5xl tracking-tighter font-medium max-w-4xl mx-auto text-center md:leading-tight">
          An open-source cloud native framework for drop-in video conferencing
        </h1>
        <p className="text-xl leading-normal md:text-2xl mx-auto text-center max-w-6xl text-gray-300 mt-1 md:mt-2 md:leading-10">
          You're one command away from integrating
          <br />{' '}
          <span>
            <span className="text-blue-300">
              WebRTC-based video conferencing{' '}
            </span>
            into your application using your own AWS infrastructure
            <svg
              className="hidden lg:block svg relative text-left"
              width="100%"
              height="71"
              viewBox="10 0 450 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hidden lg:block"
                id="underlined"
                d="M2 2C2 2 173.648 2 178.591 2C183.534 4 80.2386 12 34.2727 12.4348C68.3068 12.8696 176.375 19.2826 181.489 19.2826"
                stroke="#36cfe7"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>{' '}
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center p-6 items-center gap-2 mt-8 w-full">
          <a
            id="tech-talk"
            href="https://www.youtube.com/watch?v=3BMGsQI5XOI"
            className="border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white info-nav"
          >
            Watch Tech Talk
          </a>
          <a
            id="case-study"
            href="/case-study"
            className="border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white info-nav"
          >
            Read Case Study
          </a>
        </div>
      </article>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Framework`}
      description="The easiest way to integrate video conferencing"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
