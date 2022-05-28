

export const addClick = (text, checked) => {
  return {
    type: 'ADD_CLICK',
    payload: {
      text,
      checked
    }
  }
}

export const fetchTasks = () => async(dispatch) => {
const response = await fetch('https://613a6e0e1fcce10017e78ec4.mockapi.io/cart')
  if (response.ok){
    const data = await response.json()
    dispatch({
      type: 'SET_TASKS',
      payload: data
    })
  }
}

export const onRemove = (id) => {
  return {
    type: 'ADD_REMOVE',
    payload: id
  }
}

export const toggleCompleted = (id) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: id
  }
}

export const onClear = () => {
  return {
    type: 'ON_CLEAR'
  }
}


