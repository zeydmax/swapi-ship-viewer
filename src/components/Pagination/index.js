import React from 'react';
import Button from '../Button';

const pagination = props => {
    const { count, page, click } = props;
    const pageSwitch = (i) => {
        if (i === page || i <= 0 || i >= count+1) {
            return;
        }
        else {
            click(i);
        }
    }  
    let pageNumber = [];
    for(let i = 1; i < count + 1; i++) {
        pageNumber.push(i);
    };
    let buttons = pageNumber.map((e,i) => <Button key={i} clicked={() => props.click(e)}>{e}</Button>)
    return (
        <div className='Pagination'>
            <Button inactive={page <= 1} clicked={() => pageSwitch(1)}>{'<<'}</Button>
            <Button inactive={page <= 1} clicked={() => pageSwitch(page - 1)}>{'<'}</Button>
            {buttons}
            <Button inactive={page >= count} clicked={() => pageSwitch(page + 1)}>{'>'}</Button>
            <Button inactive={page >= count} clicked={() => pageSwitch(count)}>{'>>'}</Button>
        </div>
    );
    }

export default pagination;