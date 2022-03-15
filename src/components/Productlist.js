import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { storeProduts } from '../Data'
import { Productconsumer } from '../Context'
export default class Productlist extends Component {
  state = {
    products: storeProduts
  };
  render() {
    console.log(this.state.Products);
    return (
      <React.Fragment>
        <div className="py-5 bg-light">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <Productconsumer>
                {value => {
                 return value.products.map(product=>{
                   return <Product key={ product.id} product={product} />;
                 })
                }}
              </Productconsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
