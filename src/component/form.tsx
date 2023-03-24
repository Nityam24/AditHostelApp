 import React from "react";
 import './form.css'

export default function Form(){
    return(
        <form className="complaint-form">
        <h1>ADIT Hostel Maintainance System</h1>
        <div className="main">
          
        <label>Hostel Block</label>
        <select>
            <option value="select hostel block">select hostel block</option>
            <option value=""></option>
        </select>

        <label>Hostel Ractor</label>
        <input type="text"></input>

        <label>Room number</label>
        <input type="text" placeholder="Enter hostel room number "></input>

        <label >complaint Topic </label>

        <div  className="radiobutton">
        <label>Carpentary</label>
        <input type="radio"  name="rd"></input>
        <label>Plumbing</label>
        <input type="radio"  name="rd"></input>
        <label>Electrical</label>
        <input type="radio"  name="rd"></input>
        <label>Masonry</label>
        <input type="radio"  name="rd"></input>
        <label>Other</label>
        <input type="radio"  name="rd"></input>
        </div>

        <label>Brief Complaint Description</label>
        <input type="message" placeholder="Describe your complain in detail"></input>

        <label>Name</label>
        <input type="text" placeholder="Enter your name"></input>

        <label>Mobile Number</label>
        <input type="tel" placeholder="Enter phone number"></input>

        <label>Your Email</label>
        <input type="tel" placeholder="Enter phone Email"></input>
        <button className="button">Submit Complaint</button>
      </div>

        
        </form>
    )
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

        
// export default function FullWidthTextField() {
//     const [age, setAge] = React.useState('');

//     const handleChange = (event: SelectChangeEvent) => {
//       setAge(event.target.value = string)
//     };
//   return (
//     <Box
//       sx={{
//         width: 500,
//         maxWidth: '100%',
//          minWidth: 120 
//       }}
      
//     >

// <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>

//       <TextField fullWidth label="Enter the hostel room number " id="fullWidth" />
//       <TextField fullWidth label="Describe your complain in detail" id="fullWidth" />
//       <TextField fullWidth label="Enter your name" id="fullWidth" />
//       <TextField fullWidth label="Enter phone number" id="fullWidth" />
//       <TextField fullWidth label="Enter phone Email" id="fullWidth" />
//       <TextField fullWidth label="" id="fullWidth" />
      
//     </Box>
//   );
//     }

    