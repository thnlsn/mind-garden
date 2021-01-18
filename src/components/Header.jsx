import React from 'react';
import { Link } from 'react-router-dom';
import Reset from './icons/ResetIcon';
import Leaf from './icons/LeafIcon';

const Header = ({
  title,
  subtitle,
  linkText,
  homeLink,
  aboutLink,
  clearData,
  setAllState,
}) => {
  return (
    <header className='header'>
      <Link to={homeLink} onClick={setAllState} className='heading-primary'>
        <span className='header__text'>{title}</span>
        <Leaf />
      </Link>
      <div className='sub-heading'>
        {subtitle}
        <Link to={aboutLink} onClick={setAllState} className='link link--right'>
          {linkText} <span className='link__arrow-right'>&rarr;</span>
        </Link>
      </div>
      <Reset clearData={clearData} />
    </header>
  );
};

export default Header;
