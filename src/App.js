import React from 'react';
import logo from './logo.svg';
import './App.css';
import courseData from "./fakeData/courseData"
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';



function App() {
  
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
    
    
    
  );
}

export default App;

