import React from 'react';
import './style.scss';

const button = props => (
    <button
        onClick={props.clicked}
        disabled={props.inactive}
        className='Button'>{props.children}</button>
);

export default button;