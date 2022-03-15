// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import React from 'react';
function App() {
  return (
    <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path="/" component={Productlist}></Route>
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route component={Default}></Route>
         
       </Switch>
       <Modal />
    </React.Fragment>

  );
}

export default App;
