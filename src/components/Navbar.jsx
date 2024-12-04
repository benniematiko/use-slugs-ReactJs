import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.svg"

const Navbar = () => {
  const [ totalQuantity, setTotalQuantity ] = useState(0)
  const carts = useSelector(store => store.cart.items)

  useEffect(()=>{
    let total = 0
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)

  }, [carts])
  return (
    <header className="  bg-zinc-200">
      <div className="w-[1200px] max-w-full m-auto p-5 flex justify-between items-center ">
        <h1 className="font-bold text-3xl" ><Link to="/">Omosani</Link></h1>
        <ul className="flex items-center">
          <Link className="p-1" to="/">Home</Link>
          <Link className="p-1" to="/about">About</Link>
          <Link to="/carttab" className="w-10 h-10 bg-gray-100 rounded-full flex justify-center 
                  items-center relative m-2">
            <img src={iconCart} alt="cart" className="w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-sm w-5 h-5 rounded-full 
            flex justify-center items-center">{totalQuantity}</span>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
