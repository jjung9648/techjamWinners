import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, CardActions, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Sample data for deals and categories
const deals = [
  { id: 1, name: 'Deal 1', price: '10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Deal 2', price: '20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Deal 3', price: '30', image: 'https://via.placeholder.com/150' },
];

const categories = [
  {
    name: 'Clothes',
    items: [
      { id: 1, name: 'T-shirt', price: '15', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Jeans', price: '40', image: 'https://via.placeholder.com/150' },
    ],
  },
  {
    name: 'Electronics',
    items: [
      { id: 3, name: 'Smartphone', price: '300', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Laptop', price: '900', image: 'https://via.placeholder.com/150' },
    ],
  },
];

// Styled components for better design
const StyledContainer = styled(Container)(({ theme }) => ({
  background: 'linear-gradient(to right, #f5bbba, #f7deba)',
  padding: theme.spacing(4),
  minHeight: '100vh',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ProductList = () => {
  return (
    <StyledContainer>
      {/* Deals Section */}
      <div style={{ borderRadius: '2px', backgroundColor: '#fa9391', padding: '16px', borderRadius: '5px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Deals
        </Typography>
        <Grid container spacing={4}>
          {deals.map((deal) => (
            <Grid item key={deal.id} xs={12} sm={4} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="150"
                  image={deal.image}
                  alt={deal.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {deal.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${deal.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <StyledButton component={Link} to={`/product/${deal.id}`} size="small">
                    View
                  </StyledButton>
                  <StyledButton size="small">Add to Cart</StyledButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Categories Section */}
      {categories.map((category) => (
        <Box key={category.name} mt={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            {category.name}
          </Typography>
          <Grid container spacing={4}>
            {category.items.map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={4}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="150"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledButton component={Link} to={`/product/${item.id}`} size="small">
                      View
                    </StyledButton>
                    <StyledButton size="small">Add to Cart</StyledButton>
                  </CardActions>
                </StyledCard>
              </Grid>
              
            ))}
          </Grid>
          
        </Box>
        
      ))}
    </StyledContainer>
  );
};

export default ProductList;
