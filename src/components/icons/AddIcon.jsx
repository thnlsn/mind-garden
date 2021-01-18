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
    >
      <path d='M24 10H14V0h-4v10H0v4h10v10h4V14h10v-4z'></path>
    </svg>
  );
};

export default AddIcon;
