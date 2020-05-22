import React, { useState, useEffect } from "react";
import { useParams, Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const Form = ({ values, onInputChange, onCheckboxChange, onSubmit, disabled, errors, submitMessage }) => {

    return (
        <div className="form">
            <label>Your Name:
            <input
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onInputChange}
                ></input>
            </label>
            <br />
            <label>Pizza Size:
                <select
                    name='size'
                    value={values.size}
                    onChange={onInputChange}
                >
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <h3>Toppings:</h3>
            <label>Pepperoni
                <input
                    name='pepperoni'
                    type="checkbox"
                    checked={values.pepperoni}
                    onChange={onCheckboxChange}
                />
            </label><br />
            <label>Olives
                <input
                    name='olives'
                    type="checkbox"
                    checked={values.olives}
                    onChange={onCheckboxChange}
                />
            </label><br />
            <label>Mushrooms
                <input
                    name='mushrooms'
                    type="checkbox"
                    checked={values.mushrooms}
                    onChange={onCheckboxChange}
                />
            </label><br />
            <label>Spinach
                <input
                    name='spinach'
                    type="checkbox"
                    checked={values.spinach}
                    onChange={onCheckboxChange}
                />
            </label><br />
            <label>Special Instructions:
                <br />
                <textarea
                    className='instructions'
                    name='instructions'
                    type='textfield'
                    maxLength='250'
                    value={values.instructions}
                    onChange={onInputChange}
                ></textarea>
            </label><br />
            <button disabled={disabled} onClick={onSubmit} className='submit-button'>Submit</button>
            <p className='submit-message'>{submitMessage}</p>
            <p className='errors'>{errors.name}</p>
        </div>
    )
};

export default Form;