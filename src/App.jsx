import { useState } from 'react'
import { Header } from './Components/Layout/Header'
import { Meals } from './Components/Meals/Meals'
import AvailbleMeals from './Components/Meals/AvailbleMeals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider'



function App() {
 

  const [cartIsShown, setCartIsShown] = useState(false)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
 
  }

  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onshownCart={showCartHandler}/>
      <main>
        <Meals/>
        <AvailbleMeals/>
      </main>
    </CartProvider>
  )
}

export default App
