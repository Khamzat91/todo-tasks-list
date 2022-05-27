

export const addClick = (text, checked) => {
  return {
    type: 'ADD_CLICK',
    payload: {
      text,
      checked
    }
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


