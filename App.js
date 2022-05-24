import React from "react";
import {Paper, Divider, Button, List, Tabs, Tab} from '@mui/material';
import {AddField} from './components/AddField';
import {Item} from './components/Item';
import './index.scss';

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

const filterIndex = [
  'all',
  'active',
  'completed'
]

function App() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [state, dispatch] = React.useReducer(Reducer, {
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


  const addClick = () => {
    dispatch({
      type: 'ADD_CLICK',
      payload: {
        text,
        checked
      }
    })
    setText('')
    setChecked(false)
  }

  const onRemove = (id) => {
    if (window.confirm('Удалить эту задачу?')) {
      dispatch({
        type: 'ADD_REMOVE',
        payload: id
      })
    }
  }

  const toggleCompleted = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id
    })
  }

  const onClear = () => {
    if (window.confirm('очистить задачу?')) {
      dispatch({
        type: 'ON_CLEAR'
      })
    }
  }

  const completeAll = () => {
    dispatch({
      type: 'COMPLETE_ALL',
    })
  }

  const setFilter = (_, newIndex) => {
    dispatch({
      type: 'SET_FILTER',
      payload: filterIndex[newIndex]
    })
  }

  const onEditTask = (text, id) => {
    const newText = prompt("редактировать задачу?", text)
    if (newText !== null){
      dispatch({
        type: 'EDIT_TASK',
        payload: {newText, id}
      })
    }
  }

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField text={text}
                  setText={setText}
                  checked={checked}
                  setChecked={setChecked}
                  addClick={addClick}
        />
        <Divider/>
        <Tabs onChange={setFilter} value={filterIndex[state.filterBay]}>
          <Tab label="Все"/>
          <Tab label="Активные"/>
          <Tab label="Завершённые"/>
        </Tabs>
        <Divider/>
        <List>
          {
            state.tasks.filter((i) => {
              if (state.filterBay === 'all') {
                return true
              }
              if (state.filterBay === 'completed') {
                return i.completed
              }
              if (state.filterBay === 'active') {
                return !i.completed
              }
            }).map((obj) => <Item key={obj.id}
                                  id={obj.id}
                                  text={obj.text}
                                  completed={obj.completed}
                                  onRemove={onRemove}
                                  onClickCheckbox={toggleCompleted}
                                  onEditTask={onEditTask}/>)
          }
        </List>
        <Divider/>
        <div className="check-buttons">
          <Button disabled={!state.tasks.length} onClick={completeAll}>Отметить всё</Button>
          <Button disabled={!state.tasks.length} onClick={onClear}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
