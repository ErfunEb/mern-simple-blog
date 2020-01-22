import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


import BlogPosts from './pages/BlogPosts';
import BlogPost from './pages/BlogPost';
import Navigation from './components/elements/Navigation';
import Footer from './components/elements/Footer';
import Loader from './components/shared/Loader';

function App() {

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          
        </Route>
        <Route path="/post">
          <BlogPost />
        </Route>
        <Route path="/posts">
          <BlogPosts />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
