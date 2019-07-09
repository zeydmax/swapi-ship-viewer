import React from 'react';
import './style.scss';

const list = props => {
    let { list, click } = props;
    let listOfShips = list.map((e, i) => {
        let shipId = e.url.split('/')[5];
        return (
            <li key={i} onClick={() => click(shipId)}><span>{e.name}</span></li>)
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