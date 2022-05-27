import React from 'react';
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const Item = ({ text, completed, id, handleClickRemove, onClickCheckbox, handleClickEditTask}) => {


  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox checked={completed} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} onChange={() => onClickCheckbox(id)}/>
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton onClick={() => handleClickEditTask(text,id)}>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={() => handleClickRemove(id)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
