import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Paper } from '@mui/material';
import ProductBanner from './ProductBanner';

const VideoCard = ({ video, product }) => {
  return (
    <Box sx={{ position: 'relative', minHeight: '80vh'}}>
      <Card>
        {/* Positioning the CardMedia (video) */}
        <Box sx={{ position: 'relative', minHeight: '80vh'}}>
          <CardMedia
            component="video"
            controls
            autoPlay
            loop
            style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                maxHeight: '100%',
              }}
            image={video.url}
            title={video.title}
          />
          {/* Overlay for video information and ProductBanner */}
          <Paper
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              backgroundColor: 'transparent',
              padding: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="">
              <ProductBanner product={product} />
            </Typography>
            <Typography variant="h6" style={{color: 'white'}}>{video.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary" style={{ color: 'white' }}>
              <span role="img" aria-label="Music Symbol">🎵</span> {video.song} &middot; <span>@</span>{video.artist}
            </Typography>
          </Paper>
        </Box>
      </Card>
    </Box>
  );
};

export default VideoCard;


