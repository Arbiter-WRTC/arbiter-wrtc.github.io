export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className='bg-white py-20'>
        <article className='flex flex-col justify-center gap-8'>
          <h2 className='uppercase text-xl tracking-wide font-semibold text-gray-600 text-center'>
            Supports
          </h2>
          <div className='flex flex-row justify-center gap-20'>
            <div className='flex flex-col'>
              <p className='font-medium tracking-tight text-5xl'>One Command</p>
              <p className='text-xl text-gray-600'>AWS Integration</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium tracking-tight text-5xl'>
                Auto-Scaling
              </p>
              <p className='text-xl text-gray-600'>Multi-Room Capability</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium tracking-tight text-5xl'>
                Effortless UI
              </p>
              <p className='text-xl text-gray-600'>Drop-in React Component</p>
            </div>
          </div>
        </article>
      </section>

      <section className='bg-gray-100 border-t border-b border-gray-300 border-solid px-4'>
        <article className='max-w-6xl mx-auto flex flex-row justify-center gap-8 py-20'>
          <div className='flex flex-col max-w-4xl'>
            <h2 className='font-medium tracing-tight text-5xl pb-3'>
              Hassle free deployment with our CLI
            </h2>
            <p className='font-epilogue text-xl text-gray-700'>
              One command and arbiter will up and running in minutes. Sit back,
              grab a cup of coffee, and we'll take care of all of your
              infrastructure needs.
            </p>
          </div>
          <img className='shadow-img' src='img/arbiter_terminal.png' />
        </article>
      </section>

      <section className='bg-white'>
        <article className='max-w-6xl mx-auto flex flex-row-reverse justify-center gap-8 py-20'>
          <div className='flex flex-col max-w-4xl'>
            <h2 className='font-medium tracing-tight text-5xl pb-3'>
              Lorem ipsum dolor sit amet
            </h2>
            <p className='font-epilogue text-xl text-gray-700'>
              Donec facilisis pretium erat ac pretium. Donec egestas justo id
              eleifend facilisis. Cras bibendum mattis ipsum eget interdum.
              Maecenas maximus consectetur imperdiet.
            </p>
          </div>
          <img className='shadow-img' src='img/arbiter_code_2.png' />
        </article>
      </section>

      <section className='bg-gray-100 border-t border-b border-gray-300 border-solid px-4'>
        <article className='max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20'>
          <div className='flex flex-col max-w-4xl text-center mx-auto'>
            <h2 className='font-medium tracing-tight text-5xl pb-3'>
              Powered by AWS
            </h2>
            <p className='font-epilogue text-xl text-gray-700'>
              Sed consectetur velit ut est semper, non imperdiet tortor
              imperdiet. Curabitur ultrices magna in ante dictum, nec iaculis
              purus pulvinar. Ut efficitur nunc sem, eu efficitur risus rutrum
              at. Ut massa diam, tristique a consequat vel, fringilla in justo.
              Donec bibendum ante sed scelerisque egestas.
            </p>
          </div>
          <img
            className='shadow-img max-w-4xl mx-auto'
            src='img/aws_archi.png'
          />
        </article>
      </section>
      <section className='bg-white' id='team'>
        <article className='max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20'>
          <h2 className='text-center uppercase text-large tracking-wide font-semibold text-gray-600 mb-2'>
            Created By
          </h2>
          <div className='flex flex-row gap-8 mx-auto'>
            <div className='portrait-card flex flex-col'>
              <div className='bg-gray-200 py-4 px-6'>
                <img className='max-h-64' src='img/portrait_placeholder.png' />
              </div>
              <p className='text-gray-800 text-lg font-semibold text-left mt-2 mb-0'>
                Stephen Watzman
              </p>
              <p className='text-gray-600 text-left mb-1'>Detroit, MI</p>
              <div className='flex gap-1'>
                <a href='#linkedin'>
                  <img src='img/icons8-linkedin.svg' />
                </a>
                <a href='#linkedin'>
                  <img src='img/globe.png' />
                </a>
              </div>
            </div>
            <div className='portrait-card flex flex-col'>
              <div className='bg-gray-200 py-4 px-6'>
                <img className='max-h-64' src='img/portrait_placeholder.png' />
              </div>
              <p className='text-gray-800 text-lg font-semibold text-left mt-2 mb-0'>
                Tyler Frye
              </p>
              <p className='text-gray-600 text-left mb-1'>Tampa Bay, FL</p>
              <div className='flex gap-1'>
                <a href='#linkedin'>
                  <img src='img/icons8-linkedin.svg' />
                </a>
                <a href='#linkedin'>
                  <img src='img/globe.png' />
                </a>
              </div>
            </div>
            <div className='portrait-card flex flex-col'>
              <div className='bg-gray-200 py-4 px-6'>
                <img className='max-h-64' src='img/portrait_placeholder.png' />
              </div>
              <p className='text-gray-800 text-lg font-semibold text-left mt-2 mb-0'>
                Jay Jayabose
              </p>
              <p className='text-gray-600 text-left mb-1'>Brooklyn, NY</p>
              <div className='flex gap-1'>
                <a href='#linkedin'>
                  <img src='img/icons8-linkedin.svg' />
                </a>
                <a href='#linkedin'>
                  <img src='img/globe.png' />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
