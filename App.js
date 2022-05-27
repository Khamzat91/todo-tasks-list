import React from "react";
import {Paper, Divider, Button, List, Tabs, Tab} from '@mui/material';
import {AddField} from './components/AddField';
import {Item} from './components/Item';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import Filter from "./components/Filter";


function App() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state)


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


  const onEditTask = (text, id) => {
    const newText = prompt("редактировать задачу?", text)
    if (newText !== null) {
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
        <Filter/>
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
