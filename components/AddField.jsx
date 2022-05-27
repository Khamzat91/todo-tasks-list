import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({text, setText, checked, setChecked, handleClickAdd}) => {

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleChecked = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <div className="field">
      <Checkbox
        onChange={handleChecked}
        checked={checked}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField onChange={handleChange} value={text} placeholder="Введите текст задачи..." variant="standard" fullWidth />
      <Button onClick={() => handleClickAdd(text, checked)}>
        <AddIcon />
      </Button>
    </div>
  );
};
