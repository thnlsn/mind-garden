import React from 'react';

const Question = ({ target, question, content, handleChange }) => {
  return (
    <div className='question u-shadow'>
      <h4 className='heading-secondary'>{question}</h4>
      <div
        className='question__input question__input--content u-text-input'
        spellCheck='false'
        suppressContentEditableWarning={true}
        contentEditable='true'
        onInput={(e) => handleChange(e, target)}
        dangerouslySetInnerHTML={{ __html: content }}
      >
        {/*{content}*/}
      </div>
    </div>
  );
};

export default Question;
