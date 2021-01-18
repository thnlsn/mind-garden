import React from 'react';

const CheckIcon = ({ handleTaskCheck, checked, id }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      className={`icon icon--${checked !== true ? 'checked' : 'unchecked'}`}
      viewBox='0 0 24 24'
      onClick={() => handleTaskCheck(id, checked)}
    >
      <path d='M0 8c2.761.575 6.312 1.688 9 3.438C12.157 7.208 17.828 3.251 24 0c-5.861 5.775-10.711 12.328-14 18.917C7.349 15.151 4.453 11.646 0 8z'></path>
    </svg>
  );
};

export default CheckIcon;
