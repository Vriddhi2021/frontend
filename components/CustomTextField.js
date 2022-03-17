import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: '#AA1EF1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#AA1EF1;',
    },
    '&:hover fieldset': {
      borderColor: '#C65FFB',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export default function CustomTextField(props) {
  return (
      <CssTextField
        sx={{ input: { color: 'white' } }}
        inputProps={{ style: { fontFamily: 'nunito', color: 'white'}}}
        className='text-white px-0'
        label={props.label}
        name={props.name}
        variant="outlined"
        id="custom-css-outlined-input"
      />
  );
}