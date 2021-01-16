import React from 'react';

const About = () => {
  return (
    <div>
      <header className='header'>
        <a href='#' className='heading-primary'>
          Mind Garden
          <Leaf />
        </a>
        <div className='sub-heading'>
          Take a moment to plant the seeds for today's success.
          <a href='#' className='link link--right'>
            Learn more <span className='link__arrow-right'>&rarr;</span>
          </a>
          <a href='#' className='link link--left'>
            <span className='link__arrow-left'>&larr;</span> Learn more
          </a>
        </div>
        <Reset func={func} />
      </header>
    </div>
  );
};

export default About;
