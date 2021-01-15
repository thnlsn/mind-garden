import React from 'react';
import Reset from './icons/ResetIcon';

const Header = ({ title, subtitle, linkText, linkTarget, func }) => {
  return (
    <header className='header'>
      <h1 className='heading-primary'>Mind Garden</h1>
      <div className='sub-heading'>
        Take a moment to plant the seeds for today's success.
        <a href='#' className='link'>
          Learn more <span className='link__arrow'>&rarr;</span>
        </a>
      </div>
      <Reset func={func} />
    </header>
  );
};

export default Header;
