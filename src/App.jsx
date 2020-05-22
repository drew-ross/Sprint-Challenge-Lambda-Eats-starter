import React, { useState, useEffect } from "react";
import { useParams, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Form from './components/Form';
import axios from 'axios';

const API_URL = 'https://reqres.in/api/pizza';

const initialFormValues = {
  name: '',
  size: 'small',
  instructions: '',
  pepperoni: false,
  olives: false,
  mushrooms: false,
  spinach: false
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
    postOrder();
  }

  const postOrder = () => {
    axios.post(API_URL, formValues)
    .then(res => {
      console.log('POST response: ', res);
      setFormValues(initialFormValues);
    })
  }

  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
      </nav>
      <div className="body">
        <Switch>
          <Route path='/pizza'>
            <Form
              values={formValues}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
