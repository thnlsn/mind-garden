import React from 'react';
import Leaf from '../icons/LeafIcon';

const About = () => {
  return (
    <div>
      <header className='header'>
        <a href='/' className='heading-primary'>
          Mind Garden
          <Leaf />
        </a>
        <div className='sub-heading'>
          <a href='/' className='link link--left'>
            <span className='link__arrow-left'>&larr;</span> Back
          </a>
          A little gratitude can go a long way.
        </div>
      </header>
      <main className='about'>
        <p className='about__paragraph'>
          <span className='emphasis'>Mind Garden</span> aims to keep the process
          of daily goal setting and journaling as streamlined as possible. Get
          yourself grounded as you outline just a few things you need to get
          done today. Set an overaching goal and a few errands or tasks to get
          you there &ndash; the less and more specific the better. Keep it
          simple and attainable. Build a habit.
        </p>
        <p className='about__paragraph'>
          The effects of practicing gratitude is well-researched and massively
          beneficial to nearly every aspect of your life.{' '}
          <a href='#' className='span about__link'>
            Here is a collection of over 40 studies
          </a>{' '}
          that list out many of the reasons to try it for yourself.
        </p>
        <p className='about__paragraph about__paragraph--right'>
          Security and conveniece were at the forefront of this project, and as
          such all data is stored locally. No need to make an account. Just load
          up the page and get going.
        </p>
      </main>
    </div>
  );
};

export default About;
