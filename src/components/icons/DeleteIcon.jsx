import React from 'react';

function DeleteIcon({ handleTaskDelete, id }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className='icon icon--delete'
      onClick={() => {
        handleTaskDelete(id);
      }}
    >
      <path
        fill='url(#paint0_linear)'
        d='M24 3.752L19.577 0l-7.771 9.039L4.159.031 0 4.309c2.285 2.885 5.284 5.903 8.362 8.708L.197 22.464l1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='-4.972'
          x2='24.406'
          y1='17.096'
          y2='8.809'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#3D7451'></stop>
          <stop offset='1' stopColor='#52A370'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default DeleteIcon;
