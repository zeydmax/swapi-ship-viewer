import React from 'react';
import './style.scss';

const detailedContent = props => {
    let { stats } = props;
    let data = Object.keys(stats)
        .map(key => {
            const exclude = /(name|url|edited|created|films|pilots)/gi;
            if (exclude.test(key)){
                return;
            }
            else {
                const oldKey = key;
                const newKey = oldKey.replace(/_/g, ' ');
                return (
                    <li key={key}><u>{newKey}</u><span>{stats[key]}</span></li>)
            };
            
        });
    return (
        <div className='DetailedContent'>
            <h2>{stats.name}</h2>
                <h3>Details</h3>
                <ul>
                    {data}
                </ul>
        </div>
    );
}
export default detailedContent;