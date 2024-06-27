import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Background from './Default_A_vibrant_and_diverse_array_of_fresh_vegetables_bursti_3.jpg';
import MyLocationIcon from '@mui/icons-material/MyLocation';


const dataArray = [
  {
    id: 1,
    title: 'Tomoto',
    image: Background,  
    location:'Erode',
    prebookdate:'2/4/24',
    description: 'Upto  12kg'
  },
  {
    id: 2,
    title: 'Lizard 2',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 2'
  },
  {
    id: 3,
    title: 'Lizard 3',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 3'
  },
  {
    id: 4,
    title: 'Lizard 4',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 4'
  },
  {
    id: 5,
    title: 'Lizard 5',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 5'
  },
  {
    id: 6,
    title: 'Lizard 6',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 6'
  },
  {
    id: 7,
    title: 'Lizard 7',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 7'
  },
  {
    id: 8,
    title: 'Lizard 8',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 8'
  },
  {
    id: 9,
    title: 'Lizard 9',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 9'
  },
  {
    id: 10,
    title: 'Lizard 10',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 10'
  },
  {
    id: 11,
    title: 'Lizard 11',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 7'
  },
  {
    id: 12,
    title: 'Lizard 12',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 8'
  },
  {
    id: 13,
    title: 'Lizard 13',
    image: '/static/images/cards/contemplative-reptile.jpg',
    description: 'Description of lizard 9'
  },
  {
    id: 14,
    title: 'Lizard 14',
    image: '/static/images/cards/another-lizard.jpg',
    description: 'Description of lizard 10'
  },
];

export default function Body() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , justifyContent: 'center'}}>
      {dataArray.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345,minWidth:300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            />
            <CardContent sx={{color:'#a3b18a',}}> 
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              
              <Box display="flex" alignItems="center">
                <MyLocationIcon sx={{ fontSize: 16, marginRight: 1 }} />
                <Typography variant="body2" >
                  {item.location}
                </Typography>
              </Box>
              <Typography variant="body2" >
                {"Last Date for order : "+item.prebookdate}
              </Typography>
              <Typography variant="body2" >
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
