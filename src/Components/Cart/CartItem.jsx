import './CartItem.css';

const CartItem = ({price, name}) => {
//   const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='summary'>
          <span className='price'>2</span>
          <span className='amount'>x 9</span>
        </div>
      </div>
      <div className='actions'>
        <button >−</button>
        <button >+</button>
      </div>
    </li>
  );
};

export default CartItem;