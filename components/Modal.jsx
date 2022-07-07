import { closeModal } from "../feautures/modal/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../feautures/cart/cartSlice";

const Modal = () => {
    const dispatch = useDispatch();
    
  return (
    <aside className="flex fixed h-full z-10 justify-center items-center w-full bg-gradient-to-br from-purple-600 ">
      <div className="bg-purple-300 w-4/5 max-w-md text-center rounded-xl py-10 px-8">
        <h4 className="mb-0 leading-normal text-base font-semibold tracking-widest">
          Remove all items from your shopping cart?
        </h4>
        <div className="flex justify-around">
          <button
            type="button"
            className="mt-4 cursor-pointer text-sm border-2 rounded-3xl uppercase text-center items-center py-2 w-fit p-3 flex justify-center -pt-2 border-purple-800 bg-purple-200 hover:bg-purple-800 hover:border-purple-900 hover:text-white"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="mt-4 cursor-pointer text-sm border-2 rounded-3xl uppercase font-semibold  text-center items-center py-2 px-3 -pt-2 text-red-500 border-red-500 bg-transparent hover:bg-red-500 hover:border-red-800 hover:text-white"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
