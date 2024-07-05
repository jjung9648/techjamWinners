import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Rating, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductBanner = ({ product }) => {
  const handleRemove = () => {
    // Implement logic to remove the product if needed
    console.log(`Removing product: ${product.name}`);
  };

  return (
    <Card sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 1, maxHeight: 100, backgroundColor: 'rgba(0, 0, 0, 0.4)', boxShadow: 'none' }}>
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0, color: 'white'}}
        onClick={handleRemove}
      >
        x
      </IconButton>
      <CardMedia
        component="img"
        height="100"
        image={product.image}
        alt={product.name}
        sx={{ width: { xs: '100%', sm: 100 }, flexShrink: 0 }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', color: 'white' }}>
          <Typography gutterBottom variant="body1" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
            ${product.price}
          </Typography>
          <Rating value={product.stars} readOnly />
        </CardContent>
        <Box sx={{ position: 'absolute', bottom: 5, right: 5, color: 'white'}}>
          <Button component={Link} to={`/product/${product.id}`} variant="contained" sx={{ alignSelf: 'flex-end' }}>
            Buy
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductBanner;


