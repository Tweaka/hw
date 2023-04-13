import * as React from 'react';
import Chrono from './components/Chrono';
import Spotify from './components/Spotify';

const App: React.FC = () => {
  return (
    <div className="app">
      <Chrono />
      <Spotify />
    </div>
  );
};

export default App;
