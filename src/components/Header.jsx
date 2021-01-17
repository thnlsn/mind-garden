import React from 'react';
import Reset from './icons/ResetIcon';
import Leaf from './icons/LeafIcon';

const Header = ({
  title,
  subtitle,
  linkText,
  homeLink,
  aboutLink,
  clearData,
}) => {
  return (
    <header className='header'>
      <a href={homeLink} className='heading-primary'>
        <span className='header__text'>{title}</span>
        <Leaf />
      </a>
      <div className='sub-heading'>
        {subtitle}
        <a href={aboutLink} className='link link--right'>
          {linkText} <span className='link__arrow-right'>&rarr;</span>
        </a>
      </div>
      <Reset clearData={clearData} />
    </header>
  );
};

export default Header;
