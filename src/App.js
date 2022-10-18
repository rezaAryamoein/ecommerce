import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen/>}/>
            <Route path='/' element={<HomeScreen/>}/>
               

          </Routes>
   

        </main>
      </div>
      </BrowserRouter> 
    )
  }
}



