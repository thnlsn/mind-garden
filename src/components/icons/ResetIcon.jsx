import React from 'react';

function ResetIcon({ func }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='34'
      fill='none'
      viewBox='0 0 35 34'
      className='icon icon--reset'
      onClick={func}
    >
      <path
        fill='url(#paint0_linear)'
        d='M24.83 33.479C40.809 16.823 22.25 2.98 10.5 14l3.5 2-13 2-.037-.08A10.14 10.14 0 013 6.5c21.575-19.254 46.207 11.486 21.83 26.979z'
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
