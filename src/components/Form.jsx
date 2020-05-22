import React, { useState, useEffect } from "react";
import { useParams, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Form = (props) => {

    return (
        <div className="form">
            <label>Your Name:
            <input
                    name='name'
                    type='text'
                ></input>
            </label>
            <br/>
            <label>Pizza Size:
                <select
                    name='size'
                    
                >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <h3>Toppings:</h3>
            <label>Pepperoni<input name='pepperoni' type="checkbox"/></label><br/>
            <label>Olives<input name='olives' type="checkbox"/></label><br/>
            <label>Mushrooms<input name='mushrooms' type="checkbox"/></label><br/>
            <label>Spinach<input name='spinach' type="checkbox"/></label><br/>
            
         
        </div>
    )
};

export default Form;