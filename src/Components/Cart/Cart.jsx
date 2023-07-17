import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';


const Cart = ({onClose}) => {
  

  const cartItems = (
    <ul className={classes['cart-items']}>
     
        <CartItem
   
        />
      
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>132</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
      <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;