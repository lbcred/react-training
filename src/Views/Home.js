import React from 'react';
import HelloWorld from '../components/HelloWorld.js';

function Home() {
  return (
    <div>
        <h1 className = "font-bold text-2xl">Home</h1>

        <HelloWorld name = "World!"/>
    </div>
  );
}

export default Home;