import React from 'react';
import './App.css';


  const backgroundStyle = {
    backgroundImage: `url(/background-image-4.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

function App() {
  return (
    <>
    <div style={backgroundStyle}>
      <div>Hi</div>
    </div>
    </>
  );
}

export default App;
