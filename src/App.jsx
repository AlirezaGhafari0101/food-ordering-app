import { useState } from 'react'
import { Header } from './Components/Layout/Header'
import { Meals } from './Components/Meals/Meals'
import AvailbleMeals from './Components/Meals/AvailbleMeals'
import Cart from './Components/Cart/Cart'



function App() {
 

  const [cartIsShown, setCartIsShown] = useState(true)

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const showCartHandler = () => {
    setCartIsShown(true)
 
  }

  return (
    <>
       {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onshownCart={showCartHandler}/>
      <main>
        <Meals/>
        <AvailbleMeals/>
      </main>
    </>
  )
}

export default App
