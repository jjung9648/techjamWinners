import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';

const video = {
  url: '/videos/sample1.mp4',
  title: 'Sample Video Title',
  song: 'Hello',
  artist: "Adele"
};

const product = {
  id: 1, name: 'Product 1', price: '20', image: 'https://via.placeholder.com/150', stars: 4,
};

const Home = () => {
  return (
    <Router>

      <Header />

      <VideoCard video={video} product={product} />

      <Footer />
      
    </Router>
  );
};

export default Home;
