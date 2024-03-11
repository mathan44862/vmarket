import { Button, Stack, TextField } from "@mui/material";
import './index.css';
import { useTypewriter } from "react-simple-typewriter";
import { useFormik } from "formik";
import userLoginValidation from "./utils";
import { useUserLoginMutation } from "../../apis/user";

export default function Login() {
  const [user,setuser]=useUserLoginMutation();

  const [text] = useTypewriter({
    words: ["From Farm to Fork: Fresh Veggies Delivered to Your Doorstep"],
  });
  const initialValues = {
    email : '',
    password : ''
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
      <Stack marginTop={"8%"} alignItems={"center"} id="background">
        <h4 style={{color:'white'}}>Welcome Back !!</h4><br />
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
            label="Password" 
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
            name="password"
            type="password"
            onBlur={handleBlur}
            onChange={handleChange}
          />
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
          >
            Login
          </Button>
        </form>
      </Stack>
    </>
  )
}
