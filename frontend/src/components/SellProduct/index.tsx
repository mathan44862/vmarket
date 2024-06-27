import { Stack, TextField } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export default function index() {
  return (
    <Stack alignItems={"center"} margin={5}>
      <TextField 
        id="standard-basic" 
        label="Standard" 
        variant="standard" 
        sx={{
          width: '40vh',
          
        }}
      />
    </Stack>
  )
}
