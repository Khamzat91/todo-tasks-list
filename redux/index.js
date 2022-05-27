import React from "react";
import { createStore } from 'redux';

function Reducer(state, action) {
  if (action.type === 'ADD_CLICK') {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: state.tasks[state.tasks.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked
        }
      ]
    }
  }
  if (action.type === 'ADD_REMOVE') {
    return {
      ...state,
      tasks: state.tasks.filter((i) => i.id !== action.payload)
    }
  }
  if (action.type === 'TOGGLE_COMPLETED') {
    return {
      ...state,
      tasks: state.tasks.map((i) => {
        if (i.id === action.payload) {
          return {
            ...i,
            completed: !i.completed
          }
        }
        return i;
      })
    }
  }
  if (action.type === 'ON_CLEAR') {
    return {
      ...state,
      tasks: []
    }
  }

  if (action.type === 'COMPLETE_ALL') {
    return {
      ...state,
      tasks: state.tasks.map((i) => ({
        ...i,
        completed: true
      }))
    }
  }

  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBay: action.payload
    }
  }

  if (action.type === 'EDIT_TASK') {
    return {
      ...state,
      tasks: state.tasks.map((obj) => obj.id === action.payload.id ? {...obj, text: action.payload.newText} : obj)
    }
  }

  return state;
}

const store = createStore(Reducer, {
  filterBay: 'all',
  tasks: [
    {
      id: 1,
      text: 'задача №1',
      completed: false
    },
    {
      id: 2,
      text: 'задача №1',
      completed: true
    },
    {
      id: 3,
      text: 'задача №1',
      completed: false
    },
    {
      id: 4,
      text: 'задача №1',
      completed: true
    }
  ]
})

export default store;