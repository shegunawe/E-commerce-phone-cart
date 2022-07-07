import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../feautures/cart/cartSlice";
import { openModal } from "../feautures/modal/modalSlice";
import Link from "next/link";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2 className=" text-4xl uppercase font-bold text-center pb-6 pt-9">
            your cart
          </h2>
          <h4 className="text-center mt-6 lowercase font-semibold text-3xl">
            is currently empty
          </h4>
        </header>
        <div className="flex justify-center mt-14">
          <Link href="/">
            <button
              type="button"
              className="mt-4 cursor-pointer text-sm border-2 rounded-3xl uppercase text-center items-center py-2 w-fit p-3 flex justify-center -pt-2 border-purple-800 bg-purple-200 hover:bg-purple-800 hover:border-purple-900 hover:text-white"
            >
              go back
            </button>
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className=" bg-purple-300">
      {/* cart header */}
      <header>
        <h2 className=" text-4xl uppercase font-bold text-center py-6">
          your cart
        </h2>
      </header>
      {/* cart items */}
      <div className="divide-y">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="">
          <div className="py-8 flex justify-between sm:px-24 lg:px-64">
            <h4 className=" font-semibold tracking-widest text-lg">total</h4>
            <span className=" font-semibold tracking-widest text-lg">
              ${total}
            </span>
          </div>
          <div className=" flex justify-center pb-5">
            <div
              className="cursor-pointer text-sm border-2 rounded-3xl uppercase font-semibold  text-center w-1/5 items-center py-2 p-3 mt-4 -pt-2 text-red-500 border-red-500 bg-transparent hover:bg-red-500 hover:border-red-800 hover:text-white"
              onClick={() => {
                dispatch(openModal());
              }}
            >
              clear cart
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
