import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Messages from './components/Messages';
import News from './components/News';
import Friends from './components/Friends';

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path="/profile" component={Profile} />
      <Route path="/messages" component={Messages} />
      <Route path="/news" component={News} />
      <Route path="/friends" component={Friends} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
