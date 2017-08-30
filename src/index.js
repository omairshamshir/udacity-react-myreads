import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import Dashboard from "./components/Dashboard";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Dashboard/></BrowserRouter>, document.getElementById('root'));
