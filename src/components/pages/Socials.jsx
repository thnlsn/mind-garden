import React from 'react';
import LinkedIn from '../icons/LinkedInIcon';
import Github from '../icons/GithubIcon';

const Socials = () => {
  return (
    <div className='socials'>
      <a
        href='https://www.linkedin.com/in/thnlsn/'
        target='_blank'
        className='span about__link'
      >
        <LinkedIn />
      </a>
      <a
        href='https://github.com/thnlsn/mind-garden'
        target='_blank'
        className='span about__link'
      >
        <Github />
      </a>
    </div>
  );
};

export default Socials;
