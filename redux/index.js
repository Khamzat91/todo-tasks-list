import React from "react";
import {createStore, combineReducers, applyMiddleware } from 'redux';
import filterReducer from './reducers/filterReducer';
import tasksReducer from './reducers/tasksReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    filter: filterReducer,
    tasks: tasksReducer
  }
)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;