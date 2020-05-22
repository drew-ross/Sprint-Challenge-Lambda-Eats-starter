import React, { useState, useEffect } from "react";
import { useParams, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Form from './components/Form';
import axios from 'axios';
import formSchema from './validation/formSchema';
import * as yup from 'yup';

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

const initialFormErrors = {
  name: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [submitMessage, setSubmitMessage] = useState('');

  //Perform form validation and allow submission
  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  const onInputChange = (e) => {
    const { name, value } = e.target;

    yup.reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })

    setFormValues({ ...formValues, [name]: value });
  }

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
    setDisabled(true);
    setSubmitMessage('Submitting order...');
    postOrder();
  }

  const postOrder = () => {
    axios.post(API_URL, formValues)
      .then(res => {
        console.log('POST response: ', res);
        setFormValues(initialFormValues);
        setSubmitMessage('Order sent, your pizza is on its way!');
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
              disabled={disabled}
              errors={formErrors}
              submitMessage={submitMessage}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
