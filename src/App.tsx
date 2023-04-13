import * as React from 'react';
import Chrono from './components/Chrono';
import Spotify from './components/Spotify';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Spotify />
      <Chrono />
      <Footer />
    </div>
  );
};

export default App;
