import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
import IdHeader from './Header';
import MyErrorBoundary from './MyErrorBoundary.js';


const Index = lazy(() => import('./IndexPage')), Market = lazy(() => import('./MarketPage')), About = lazy(() => import('./AboutPage'));

function App() { 
  const bg_style = {
    "background-img": 'url("./images/background.jpg")',
    "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover"
  };
  return (
    <div class = {"bg"}>
      <IdHeader />
      <About />
    </div>
  );
}

export default App;
