import React from 'react';
import './index.css';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Project from '../components/project';
import Footer from '../components/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
