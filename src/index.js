import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import TodoList from './TodoList';

var dest = document.getElementById('app');

ReactDOM.render(<TodoList />, dest);