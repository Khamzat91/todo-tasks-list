

export const completedAll = () => {
  return {
    type: 'COMPLETE_ALL',
  }
}

export const onEditTask = (newText, id) => {
  return {
    type: 'EDIT_TASK',
    payload: {newText, id}
  }
  }

  export const setFilter = (status) => {
  return {
    type: 'SET_FILTER',
    payload: status
  }
  }