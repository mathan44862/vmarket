import React from 'react';
import NavBar from '../Navbar';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Body from '../BodyPageforBuyer';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white, // Set background color to white
  boxShadow: theme.shadows[1], // Add a light shadow
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.85), // Lighten the background color on hover
  },
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2), // Adjust padding
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

export default function Homepageforseller() {
  return (
    <div>
      <NavBar />
      <Box mt={2} display="flex" justifyContent="center">
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Box><br /><br />
      <Body></Body>
    </div>
  );
}
