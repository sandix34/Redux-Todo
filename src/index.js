import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { todosReducer } from './store/reducers';

const store = createStore(todosReducer);

ReactDOM.render(<App />, document.getElementById('root'));