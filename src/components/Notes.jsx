import React from 'react';

const Notes = ({ target, notes, title, handleChange }) => {
  return (
    <div className='content-box notes u-shadow'>
      <div className='sub-heading sub-heading--bold'>{title}</div>
      <div
        className='notes__input u-text-input'
        spellCheck='false'
        suppressContentEditableWarning={true}
        contentEditable='true'
        onInput={(e) => handleChange(e, target)}
        dangerouslySetInnerHTML={{ __html: notes }}
      >
        {/* {notes} */}
      </div>
    </div>
  );
};

export default Notes;
