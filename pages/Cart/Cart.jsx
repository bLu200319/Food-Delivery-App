import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import assets from 'assets/assets';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    
  const{cartItems,foods,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
 
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
         {foods.map((item,index)=>{
              if(cartItems[item._id]>0){
                return (

                  <div className='cart-items-title cart-items-item'>
                       <img src={url+"/images/"+item.image} alt='' />
                       <p>{item.name}</p>
                       <p>{item.price}</p>
                       <p>{cartItems[item._id]}</p>
                       <p>{item.price * cartItems[item._id]}ETB</p>
                       <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                  </div>


                )
              }
         })}
      </div>
         <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Totals</h2>
                <div className="class-total-details">
                      <p>Subtotal</p>
                      <p>{getTotalCartAmount()}ETB</p>
                </div>
                <div className="class-total-details">
                      <p>Delivery Fee</p>
                      <p>{getTotalCartAmount()===0?0:2}ETB</p>
                </div>
                <hr />
                <div className="class-total-details">
                      <b>Total</b>
                      <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}ETB </b>
                </div>
            <button onClick={()=>navigate('/order')}>PROCEEDTO CHECKOUT</button>
            </div>
            
             
         </div>
         <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code' />
              <button>submit</button>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Cart
