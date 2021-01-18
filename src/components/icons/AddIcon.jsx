import React from 'react';

const AddIcon = ({ handleAdd }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className='icon icon--add'
      onClick={handleAdd}
      onTouchStart={handleAdd}
    >
      <path
        fill='url(#paint0_linear)'
        d='M24 10H14V0h-4v10H0v4h10v10h4V14h10v-4z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='-4.972'
          x2='24.407'
          y1='17.096'
          y2='8.81'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3D7451'></stop>
          <stop offset='1' stopColor='#52A370'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AddIcon;
