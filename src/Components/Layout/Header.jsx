import React from "react";
import mealsImage from '../../assets/meals.jpg'
import { HeaderCartButton } from "./HeaderCartButton";

import './Header.css'

export const Header = ({onshownCart}) => {
  console.log(onshownCart);
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[5rem] text-white flex justify-between items-center px-[10%] shadow-header z-10 bg-[#8a2b06]">
        <h1>ReactMeals</h1>
        <HeaderCartButton onshownCart={onshownCart}/>
      </header>
      <div className='w-full h-[28rem] z-0 overflow-hidden'>
        <img className="w-[110%] h-full object-cover header-img" src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};
