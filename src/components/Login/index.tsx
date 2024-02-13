import { Button, Stack, TextField, Typography } from "@mui/material";
import './index.css';
import { useTypewriter } from "react-simple-typewriter";

export default function Login() {
  const [text] = useTypewriter({
    words: ["From Farm to Fork: Fresh Veggies Delivered to Your Doorstep"],
  });
  
  return (
    <>
      <h1 style={{ marginLeft: '2%', color: '#a3b18a' }}>{text}</h1>
      <Stack marginTop={"8%"} alignItems={"center"} id="background">
        <h4 style={{color:'white'}}>Welcome Back !!</h4><br />
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
                borderColor: '#a3b18a', 
              },
              '&:hover fieldset': {
                borderColor: '#a3b18a', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#a3b18a', 
              },
            },
            '& .MuiInputLabel-outlined.Mui-focused': {
              color: 'white', 
            },
          }}
        />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          sx={{
            width:'40vh',
            color: 'red', // Set text color to red
            '& .MuiInputLabel-root': { 
              color: 'white', 
            },
            '& .MuiOutlinedInput-root': { 
              '& fieldset': { 
                borderColor: '#a3b18a',
              },
              '&:hover fieldset': {
                borderColor: '#a3b18a', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#a3b18a', 
              },
            },
            '& .MuiInputLabel-outlined.Mui-focused': {
              color: 'white',
            },
          }}
        />
        <br />
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
        >
          Login
        </Button>
      </Stack>
    </>
  )
}
