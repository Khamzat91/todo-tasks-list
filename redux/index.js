import React from "react";
import {createStore, combineReducers} from 'redux';
import filterReducer from './reducers/filterReducer';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    tasks: tasksReducer
  }
)

const store = createStore(rootReducer)

export default store;