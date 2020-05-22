import React, { useState, useEffect } from "react";
import { useParams, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Form from './components/Form';

const initialFormValues = {
  
}


const App = () => {

  const [formValues, setFormValues] = useState()

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
            <Form />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
