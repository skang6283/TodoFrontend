import React from 'react';

import classes from './Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = ['field'];

    if (props.invalid && props.shouldValidate && props.touched) {
        console.log('invalid')
        inputClasses.push('error');
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={inputClasses.join(' ')}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
