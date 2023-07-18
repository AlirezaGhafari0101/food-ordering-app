import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import './CartItem.css';

const CartItem = ({id, price, name, amount}) => {

  const {items, addItem,removeItem,totalAmount} = useContext(CartContext)

  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='summary'>
          <span className='price'>{fixedPrice}</span>
          <span className='amount'>x{amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={() => {
          removeItem(id)
        }}>−</button>
        <button onClick={() => {
          addItem({
            id,
            name,
            price,
            amount: 1,
          })
        }}>+</button>
      </div>
    </li>
  );
};

export default CartItem;