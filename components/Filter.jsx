import React from 'react';
import {Tab, Tabs} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filterBay = useSelector(state => state.filterBay)
  const filterIndex = [
    'all',
    'active',
    'completed'
  ]

  const setFilter = (_, newIndex) => {
    dispatch({
      type: 'SET_FILTER',
      payload: filterIndex[newIndex]
    })
  }

  return (
    <Tabs onChange={setFilter} value={filterIndex[filterBay]}>
      <Tab label="Все"/>
      <Tab label="Активные"/>
      <Tab label="Завершённые"/>
    </Tabs>
  );
};

export default Filter;