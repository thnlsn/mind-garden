import React from 'react';

function ResetIcon({ clearData }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='35'
      fill='none'
      viewBox='0 0 35 35'
      className='icon icon--reset'
      onClick={clearData}
    >
      <path d='M24.83 33.479C40.809 16.823 21.438 3.051 9.686 14.07l3.594 3.43H0V4.452l3.255 3.25C24.83-11.55 49.207 17.987 24.83 33.48z'></path>
    </svg>
  );
}

export default ResetIcon;
