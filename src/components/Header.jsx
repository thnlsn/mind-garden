import React from 'react';
import Reset from './icons/ResetIcon';
import Leaf from './icons/LeafIcon';

const Header = ({ title, subtitle, linkText, linkTarget, func }) => {
  return (
    <header className='header'>
      <a href='#' className='heading-primary'>
        Mind Garden
        <Leaf />
      </a>
      <div className='sub-heading'>
        Take a moment to plant the seeds for today's success.
        <a href='/about' className='link link--right'>
          Learn more <span className='link__arrow-right'>&rarr;</span>
        </a>
      </div>
      <Reset func={func} />
    </header>
  );
};

export default Header;
