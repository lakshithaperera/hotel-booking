import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import  Box  from '@mui/material/Box';
import { DatePickerSection } from './DatePicker-styled';
import { BodyText } from '../../pages/Home/Home-styled';
import { ColorButton } from '../Navbar/Navbar-styled';


export const DatePickerComponent = () => {
    const [value, setValue] = React.useState([null, null]);
  return (
   <DatePickerSection>
    <div className="wrapper">
    <LocalizationProvider className="date-pkr" dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    <div className="check-in">
        <div className="text">
        <h4>Check in - Check out</h4>

       <BodyText className='date'>2023-01-21 - 2023-01-22</BodyText>
        </div>
        <ColorButton className='btn'>Check availability</ColorButton>
       
    </div>
    </div>
    
   </DatePickerSection>
  );
}
