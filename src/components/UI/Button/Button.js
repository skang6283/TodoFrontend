import React from 'react';

const button = (props) =>{

  return(
      <button
        disabled={props.disabled}
        className={['ui', props.btnType,'button'].join(' ')}
        onClick={props.clicked}
        >
      <i className={[props.icon].join(' ')}></i>
      {props.children}
      </button>

  );
};

export default button
