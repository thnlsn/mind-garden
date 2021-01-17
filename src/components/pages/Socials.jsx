import React from 'react';
import LinkedIn from '../icons/LinkedInIcon';
import GitHub from '../icons/GitHubIcon';

const Socials = ({ linkedIn, gitHub }) => {
  return (
    <div className='socials'>
      <a href={linkedIn} target='_blank' className='span about__link'>
        <LinkedIn />
      </a>
      <a href={gitHub} target='_blank' className='span about__link'>
        <GitHub />
      </a>
    </div>
  );
};

export default Socials;
