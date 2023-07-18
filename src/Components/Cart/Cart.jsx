import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';


const Cart = ({onClose}) => {
  
  const {items, addItem,removeItem,totalAmount} = useContext(CartContext)

  const cartItems = (
    <ul className={classes['cart-items']}>
     
       {items.map(item => <CartItem key={item.id} {...item}/>)}
      
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
      {items.length !== 0 && (<button className={classes.button}>Order</button>)}
      </div>
    </Modal>
  );
};

export default Cart;