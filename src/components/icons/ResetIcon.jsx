import React from 'react';

function ResetIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='35'
      fill='none'
      viewBox='0 0 35 35'
      className='icon icon--reset'
    >
      <path
        fill='url(#paint0_linear)'
        d='M24.83 33.479C40.809 16.823 21.438 3.051 9.686 14.07l3.594 3.43H0V4.452l3.255 3.25C24.83-11.55 49.207 17.987 24.83 33.48z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='-7.25'
          x2='35'
          y1='24.25'
          y2='11.25'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3D7451'></stop>
          <stop offset='1' stopColor='#52A370'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ResetIcon;
