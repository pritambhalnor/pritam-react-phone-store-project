import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark  px-sm-5 d-flex justify-content-between'>
       <div className='d-flex '>
        <Link to="/">
          <img src={logo} alt=""  className='navbar-brand  mt-3 bt' width="50vw" /> 
          </Link>
        <ul className="navbar-NavWrapper align-item-center">
          <li className="NavWrapper-item ml-5"></li>
          <Link to="/" className='NavWrapper-link text-decoration-none'> <h4 className='lg text-white '>Products</h4> </Link>
        </ul>
        </div>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer className='btn btn-outline-success lg bg-white'>
            <span className='mr-2'><i className="fas fa-cart-plus"></i></span>My cart</ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
background:var(--mainblue);
.nav-link{
  color:var(--mainwhite)!important;
  font-size:1.3rem;
  text-transform:capitalize;
}
.bt{
  background:transparent;
}
`