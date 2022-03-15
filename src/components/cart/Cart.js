import React, { Component } from 'react'
import Title from '../Title'
import Cartcolumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {Productconsumer} from '../../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (
      <section>
          <Productconsumer>
              {value=>{
                   const{cart}=value;
                   if(cart.length>0){
                       return(
                           <>
                           <Title name="your" title="cart"/>
                         <Cartcolumns/>
                         <CartList value={value} />
                         <CartTotals value={value}/>
                           </>
                       )
                }
                else{

                    return<EmptyCart />
                }
            }}
            </Productconsumer>
      </section>
    )
  }
}
