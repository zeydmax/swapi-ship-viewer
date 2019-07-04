import React from 'react';
import Button from './Button';

const pagination = props => (
    <div className='Pagination'>
        <Button clicked={() => props.click(1)}>1</Button>
        <Button clicked={() => props.click(2)}>2</Button>
        <Button clicked={() => props.click(3)}>3</Button>
        <Button clicked={() => props.click(4)}>4</Button>
    </div>
);

export default pagination;