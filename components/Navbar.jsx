import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
      <div className=" bg-purple-500 flex py-7 justify-between sm:px-20 px-10">
        <h3 className=" font-bold text-4xl">Infinity Gadgets</h3>
        <div className="flex">
          <ShoppingCartOutlined className="text-3xl relative right-1"/>
          <div className="bg-purple-700 rounded-full w-4 h-4 justify-center items-center flex absolute sm:right-16 right-9">
            <p className="text-sm">{amount}</p>
          </div>
        </div>
      </div>
  );
};
export default Navbar;
