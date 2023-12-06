import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  return (
    <section
      id='hero'
      className='bg-gradient-to-r from-arbiterBlue to-arbiterPink flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40'
    >
      <article className='px-4 text-white antialiased py-8 md:py-10 pb-14 relative font-sans border-solid border-t-1 border-gray-700 border-r-0 border-l-0 border-b-0'>
        <h1 className='leading-[48px] mb-2 text-white font-main text-4xl md:text-5xl tracking-tighter font-medium max-w-4xl mx-auto text-center md:leading-tight'>
          An open-source cloud native framework for drop in video conferencing
        </h1>
        <p className='text-xl leading-normal md:text-2xl mx-auto text-center max-w-4xl text-gray-300 mt-1 md:mt-2 md:leading-10'>
          You're one command away from deploying a scalable WebRTC backend to
          your AWS infrastructure and adding video conferencing to your
          application
        </p>
        <div className='flex flex-row justify-center p-6 items-center gap-2 mt-8 w-full'>
          <a
            href='youtube.com/LinkToPres'
            className='border border-solid border-white px-4 text-base sm:text-lg pb-3 pt-4 rounded-full gap-2 text-white hover:no-underline hover:text-white hover:border-gray-300 transition'
          >
            <span className='ml-2'>Watch Tech Talk</span>
          </a>
          <a
            href='/case-study'
            className='border border-solid px-5 text-base sm:text-lg pb-3 pt-4 rounded-full bg-primary hover:bg-primaryLight transition antialiased text-white hover:no-underline hover:text-white'
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
      description='The easiest way to integrate video conferencing'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
