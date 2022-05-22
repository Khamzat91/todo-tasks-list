import React from "react";
import {Paper, Divider, Button, List, Tabs, Tab} from '@mui/material';
import {AddField} from './components/AddField';
import {Item} from './components/Item';
import './index.scss';

function Reducer(state, action) {
  if (action.type === 'ADD_CLICK') {
    return [
      ...state,
      {
        id: state.length + 1,
        text: action.text,
        completed: action.checked
      }
    ]
  }
  return state;
}

function App() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [state, dispatch] = React.useReducer(Reducer, [
    {
      id: 1,
      text: 'задача №1',
      completed: true
    }
  ])


  const addClick = () => {
    dispatch({
      type: 'ADD_CLICK',
      text, checked
    })
    setText('')
    setChecked(false)
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
        <Tabs value={0}>
          <Tab label="Все"/>
          <Tab label="Активные"/>
          <Tab label="Завершённые"/>
        </Tabs>
        <Divider/>
        <List>
          {
            state.map((obj) => <Item key={obj.id} id={obj.id} text={obj.text} completed={obj.completed}/>)
          }
        </List>
        <Divider/>
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
