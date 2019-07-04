import React from 'react';
import Backdrop from '../Backdrop';
import './style.scss';

const modal = props => (
        <>
        <Backdrop show={props.show} click={props.close}/>
        <div 
            className='Modal'
            style={{
                transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}>
            
            <h2>{props.list[props.choose].name}</h2>
            <div>
                <h3>Details</h3>
                <p><u>Model</u> <span>{props.list[props.choose].model}</span></p>
                <p><u>Manufacturer</u> <span>{props.list[props.choose].manufacturer}</span></p>
                <p><u>Cost in Credits</u> <span>{props.list[props.choose].cost_in_credits}</span></p>
                <p><u>Length</u> <span>{props.list[props.choose].length}</span></p>
                <p><u>Max atmoshpering speed</u> <span>{props.list[props.choose].max_atmosphering_speed}</span></p>
                <p><u>Crew</u> <span>{props.list[props.choose].crew}</span></p>
                <p><u>Passengers</u> <span>{props.list[props.choose].passengers}</span></p>
                <p><u>Cargo capacity</u> <span>{props.list[props.choose].cargo_capacity}</span></p>
                <p><u>Consumables</u> <span>{props.list[props.choose].consumables}</span></p>
                <p><u>Hyperdrive rating</u> <span>{props.list[props.choose].hyperdrive_rating}</span></p>
                <p><u>MGLT</u> <span>{props.list[props.choose].MGLT}</span></p>
                <p><u>Starship class</u> <span>{props.list[props.choose].starship_class}</span></p>
            </div>
        </div>
        </>
    );

export default modal;