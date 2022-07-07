import React from "react";
import { ChevronDown, ChevronUp } from "../icons.js";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease  } from "../feautures/cart/cartSlice.js";


const CartItem = ({ id, img, title, price, amount }) => {

  const dispatch = useDispatch();

  return (
    <div className="justify-center sm:px-28 lg:px-64">
      <article className="flex my-7 items-center justify-between mb-8 divide-y">
        <div className="gap-10 flex items-center">
          <img src={img} alt={title} className=" w-32" />
          <div>
            <h4 className=" text-lg font-semibold tracking-wider">{title}</h4>
            <h4 className="item-price">${price}</h4>
            {/* remove button */}
            <div className="cursor-pointer text-sm border-2 rounded-3xl text-center items-center py-2 w-fit p-3 flex justify-center mt-4 -pt-2 border-purple-800 bg-purple-200 hover:bg-purple-800 hover:border-purple-200 hover:text-white">
              <button
                className=" tracking-wider "
                onClick={() => {
                  dispatch(removeItem(id));
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* increase amount */}
          <button
            className="amount-btn"
            onClick={() => {
              dispatch(increase({id}));
            }}
          >
            <ChevronUp className=" w-6 bg-transparent border-none cursor-pointer text-purple-200" />
          </button>
          {/* amount */}
          <p className="amount">{amount}</p>
          {/* decrease amount */}
          <button
            className="amount-btn"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id))
              }
              dispatch(decrease({id}));
            }}
          >
            <ChevronDown className=" w-6 bg-transparent border-none cursor-pointer text-purple-200" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default CartItem;
