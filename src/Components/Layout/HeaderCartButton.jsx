import React from "react";
import CartIcon from "../Cart/CartIcon";

export const HeaderCartButton = ({onshownCart}) => {
  return (
    <button  className="group cursor-pointer border-none bg-[#4d1601] py-[0.75rem] px-[3rem] rounded-3xl flex justify-around items-center font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00]"
        onClick={onshownCart}
    >
      <span className="w-5 h-5 mr-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-1 px-4 rounded-3xl ml-4 font-bold group-hover:bg-[#92320c] group-active:bg-[#92320c]">0</span>
    </button>
  );
};

