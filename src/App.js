import React from 'react';
import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { Topics } from './features/topics/Topics';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Topics />
    </div>
  );
}

export default App;
