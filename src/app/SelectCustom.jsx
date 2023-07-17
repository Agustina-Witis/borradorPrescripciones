import { useState } from 'react';
import { InputBase, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { styled } from '@mui/material/styles';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#ea0029',
      boxShadow: '0 0 0 0.2rem #DE8DA6',
    },
  },
}));

export const SelectCustom = ({item1, item2, item3, item4, item5}) => {

  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
    <Box sx={{mb: '2%', minWidth: 120}}>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Select</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          label="Select"
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>{item1}</MenuItem>
          <MenuItem value={20}>{item2}</MenuItem>
          <MenuItem value={30}>{item3}</MenuItem>
          <MenuItem value={40}>{item4}</MenuItem>
          <MenuItem value={50}>{item5}</MenuItem>
        </Select>
      </FormControl>      
    </Box>
    </>
  )
}



