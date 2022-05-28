import React from 'react';

const initialState = [
    {
      id: 1,
      text: 'задача №1',
      completed: false
    }
  ]

  function TasksReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TASKS':
        return action.payload
      case 'ADD_CLICK':
        return [
          ...state,
          {
            id: state[state.length - 1].id + 1,
            text: action.payload.text,
            completed: action.payload.checked
          }
        ]
      case 'ADD_REMOVE':
        return state.filter((i) => i.id !== action.payload)
      case 'TOGGLE_COMPLETED':
        return state.map((i) => {
          if (i.id === action.payload) {
            return {
              ...i,
              completed: !i.completed
            }
          }
          return i;
        })
      case 'ON_CLEAR':
        return []
      case 'COMPLETE_ALL':
        return state.map((i) => ({
          ...i,
          completed: true
        }))
      case 'EDIT_TASK':
        return state.map((obj) => obj.id === action.payload.id ? {...obj, text: action.payload.newText} : obj)
      default:
        return state;
    }
  }

export default TasksReducer;