import React from 'react';
import './style.scss';

const list = props => {
    let listOfShips = props.list.map((e, i) => <li key={i} onClick={() => props.click(i)}>{e.name}</li>);
    return (
        <div className='List'>
            <ul>
                {listOfShips}
            </ul>
        </div>
    );  
};

export default list;