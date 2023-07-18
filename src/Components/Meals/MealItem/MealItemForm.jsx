import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'

export default function MealItemForm({id, onAddToCart}) {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

   

  }

  const addToCartHandler = () => {
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  }
 


  return (
    <form className='text-right' onClick={submitFormHandler}>
    <Input
      ref={amountInputRef}
      label='Amount'
      input={{
        id: 'amount_' + id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }}
    />
    <button className='cursor-pointer bg-[#8a2b06] border border-[#8a2b06] text-white py-1 px-8 rounded-2xl font-bold hover:bg-[#641e03] hover:border-[#641e03]  active:bg-[#641e03] active:border-[#641e03]' onClick={addToCartHandler}>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}
