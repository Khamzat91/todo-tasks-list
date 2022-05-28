import React from "react";
import {Paper, Divider, Button, List, Tabs, Tab} from '@mui/material';
import {AddField} from './components/AddField';
import {Item} from './components/Item';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import Filter from "./components/Filter";
import { addClick, onRemove, onClear, toggleCompleted, fetchTasks } from "./redux/actions/tasks";
import { completedAll, onEditTask } from "./redux/actions/filter";


function App() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state)


  const handleClickAdd = (text, checked) => {
    dispatch(addClick(text, checked))
    setText('')
    setChecked(false)
  }

  const handleClickRemove = (id) => {
    if (window.confirm('Удалить эту задачу?')) {
      dispatch(onRemove(id))
    }
  }

  const handleClickCompleted = (id) => {
    dispatch(toggleCompleted(id))
  }

  const handleClickClear = () => {
    if (window.confirm('очистить задачу?')) {
      dispatch(onClear())
    }
  }

  const handleClickCompletedAll = () => {
    dispatch(completedAll())
  }


  const handleClickEditTask = (text, id) => {
    const newText = prompt("редактировать задачу?", text)
    if (newText !== null) {
      dispatch(onEditTask(text, id))
    }
  }

  React.useEffect(() => {
    dispatch(fetchTasks())
  }, [])

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
                  handleClickAdd={handleClickAdd}
        />
        <Divider/>
        <Filter/>
        <Divider/>
        <List>
          {
            state.tasks.filter((i) => {
              if (state.filter.filterBay === 'all') {
                return true
              }
              if (state.filter.filterBay === 'completed') {
                return i.completed
              }
              if (state.filter.filterBay === 'active') {
                return !i.completed
              }
            }).map((obj) => <Item key={obj.id}
                                  id={obj.id}
                                  text={obj.text}
                                  completed={obj.completed}
                                  handleClickRemove={handleClickRemove}
                                  onClickCheckbox={handleClickCompleted}
                                  handleClickEditTask={handleClickEditTask}/>)
          }
        </List>
        <Divider/>
        <div className="check-buttons">
          <Button disabled={!state.tasks.length} onClick={handleClickCompletedAll}>Отметить всё</Button>
          <Button disabled={!state.tasks.length} onClick={handleClickClear}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
