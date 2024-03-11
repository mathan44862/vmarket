import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useProductsQuery } from '../../apis/products';

interface Product {
  id: number;
  title: string;
  location: string;
  targetdate: string;
  description: string;
  availabledate: string;
  image: string; 
}

export default function Body() {
  const { data: product, isLoading, isError } = useProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  if (!Array.isArray(product)) {
    return <p>No products available</p>;
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {product.map((item: Product) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, minWidth: 300 }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={item.image} alt={item.title} />
              <CardContent sx={{ color: '#a3b18a' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>

                <Box display="flex" alignItems="center">
                  <MyLocationIcon sx={{ fontSize: 16, marginRight: 1 }} />
                  <Typography variant="body2">{item.location}</Typography>
                </Box>
                <Typography variant="body2">Stack available date : {item.availabledate}</Typography>
                <Typography variant="body2">Last Date for order : {item.targetdate}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
