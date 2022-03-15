import React from 'react'
import { Link } from 'react-router-dom';
export default function CartTotals({value}) {
    const{cartSubtotal,cartTax,cartTotal,clearCart}=value;
    let right={
           display:"flex",
           justifyContent:"end"
    }
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-17 text-capitalize ">
                    <div style={right}>

                     <Link to="/" >
                         <button className='btn btn-outline-danger text-uppercase mb-3 px-5 ' type='button' onClick={()=>clearCart()}>clear cart</button>
                     </Link>
                    </div>
                     <h5 style={right}>
                         <span className="text-title">
                             subtotal :
                         </span>
                         <strong>$ {cartSubtotal}</strong>
                     </h5>
                     <h5 style={right}>
                         <span className="text-title">
                             tax :
                         </span>
                         <strong>$ {cartTax}</strong>
                     </h5>
                     <h5 style={right}>
                         <span className="text-title">
                             total :
                         </span>
                         <strong>$ {cartTotal}</strong>
                     </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
