import React from 'react';
import './style.scss';

const list = props => {
    let { list, click } = props;
    let listOfShips = list.map((e, i) => {
        let shipId = e.url.slice(-3, -1);
        return (
            <li key={i} onClick={() => click(shipId)}>{e.name}</li>)
        });
    return (
        <div className='List'>
            <ul>
                {listOfShips}
            </ul>
        </div>
    );  
};

export default list;