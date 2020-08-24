import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import {FromArea} from './Form'

function App(props) {

  const [employee, setEmployee] = useState([])

  useEffect(() => {
    trackPromise(fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => responce.json())
    .then(result => setEmployee(result)));
  }, [])




  return (
    <div>
      {/* {employee && employee.map((employe, index) => (
        <p style={pereColor} key={index}>Hello {employe.title}!</p>
      ))} */}

    <FromArea/>
    </div>
  );
}

export default App;
