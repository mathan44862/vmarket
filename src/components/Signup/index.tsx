import { Button, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import './index.css';
import { useTypewriter } from "react-simple-typewriter";
import { useFormik } from "formik";
import userLoginValidation from "./utils";
import { useUserLoginMutation } from "../../apis/user";
import React from "react";

export default function Signup() {
  const [user,setuser]=useUserLoginMutation();

  const [userType, setUserType] = React.useState('');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value as string);
  };


  const [text] = useTypewriter({
    words: ["From Farm to Fork: Fresh Veggies Delivered to Your Doorstep"],
  });
  const initialValues = {
    email : '',
    password : '',
    name:'',
    confirmpasssword:'',
    contact:'',

  }
  const {values, handleBlur, handleChange, handleSubmit, errors, touched, isValid, dirty} = useFormik({
    initialValues: initialValues,
    validationSchema: userLoginValidation,
    onSubmit: async (values) => {
      try {
        const response = await user(values);
      } catch (error) {
         console.error('Unexpected error during sign-in:', error);
      }
    }
  });
  

  return (
    <>
      <h3 style={{ marginLeft: '2%', color: '#a3b18a' }}>{text}</h3>
      <Stack marginTop={"1%"} alignItems={"center"} id="background">
        <h4 style={{color:'white'}}>Enter your details !!</h4><br />
        <form onSubmit={handleSubmit}>
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            sx={{
              width:'40vh',
              '& .MuiInputLabel-root': { 
                color: 'white',
              },
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { 
                  borderColor: errors.email && touched.email ? 'red' : '#a3b18a',
                },
                '&:hover fieldset': {
                  borderColor: errors.email && touched.email ? 'red' : '#a3b18a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.email && touched.email ? 'red' : '#a3b18a',
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'white', 
              },
            }}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br /><br />
          <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined" 
            sx={{
              width:'40vh',
              '& .MuiInputLabel-root': { 
                color: 'white', 
              },
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { 
                  borderColor: errors.name && touched.name ? 'red' : '#a3b18a',
                },
                '&:hover fieldset': {
                  borderColor: errors.name && touched.name ? 'red' : '#a3b18a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.name && touched.name ? 'red' : '#a3b18a',
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'white',
              },
            }}
            name="password"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br /><br />
          <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            sx={{
              width:'40vh',
              '& .MuiInputLabel-root': { 
                color: 'white', 
              },
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { 
                  borderColor: errors.confirmpasssword && touched.confirmpasssword ? 'red' : '#a3b18a',
                },
                '&:hover fieldset': {
                  borderColor: errors.confirmpasssword && touched.confirmpasssword ? 'red' : '#a3b18a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.confirmpasssword && touched.confirmpasssword ? 'red' : '#a3b18a',
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'white',
              },
            }}
            name="password"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br /><br />
          <TextField 
            id="outlined-basic" 
            label="Confirm - Password" 
            variant="outlined" 
            sx={{
              width:'40vh',
              '& .MuiInputLabel-root': { 
                color: 'white', 
              },
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { 
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
                '&:hover fieldset': {
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'white',
              },
            }}
            name="confirmpassword"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br /><br />
          <TextField 
            id="outlined-basic" 
            label="Contact" 
            variant="outlined" 
            sx={{
              width:'40vh',
              '& .MuiInputLabel-root': { 
                color: 'white', 
              },
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { 
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
                '&:hover fieldset': {
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'white',
              },
            }}
            name="contact"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br /><br />
          <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={userType}
  label="User - Type"
  onChange={handleSelectChange}
  sx={{
    width: '40vh',
    '& .MuiInputLabel-root': { 
      color: 'red', 
    },
    '& .MuiOutlinedInput-root': { 
      '& fieldset': { 
        borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
      },
      '&:hover fieldset': {
        borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
      },
      '&.Mui-focused fieldset': {
        borderColor: errors.password && touched.password ? 'red' : '#a3b18a',
      },
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: 'white',
    },
  }}
>
  <MenuItem value={10}>Buyer</MenuItem>
  <MenuItem value={20}>Seller</MenuItem>
</Select>



          <br /><br />
          <Button 
            variant="contained" 
            sx={{
              width:'40vh', 
              color:'#a3b18a', 
              backgroundColor:'white', 
              '&:hover': { 
                backgroundColor: '#a3b18a',
                borderColor: '#a3b18a', 
                color: 'white',
              }
            }}
            type="submit"
            disabled={!(isValid && dirty)}
          >
            Sign up
          </Button>
        </form>
      </Stack>
    </>
  )
}
