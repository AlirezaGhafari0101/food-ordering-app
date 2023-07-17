import { useState } from 'react'
import { Header } from './Components/Layout/Header'
import { Meals } from './Components/Meals/Meals'
import AvailbleMeals from './Components/Meals/AvailbleMeals'



function App() {
 

  return (
    <>
      <Header/>
      <main>
        <Meals/>
        <AvailbleMeals/>
      </main>
    </>
  )
}

export default App
