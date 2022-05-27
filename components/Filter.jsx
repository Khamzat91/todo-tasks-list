import React from 'react';
import {Tab, Tabs} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { setFilter } from '../redux/actions/filter'

const Filter = () => {
  const dispatch = useDispatch();
  const filterBay = useSelector(state => state.filter.filterBay)
  const filterIndex = [
    'all',
    'active',
    'completed'
  ]

  const handleChangeFilter = (_, newIndex) => {
    dispatch(setFilter(filterIndex[newIndex]))
  }

  return (
    <Tabs onChange={handleChangeFilter} value={filterBay}>
      <Tab label="Все"/>
      <Tab label="Активные"/>
      <Tab label="Завершённые"/>
    </Tabs>
  );
};

export default Filter;