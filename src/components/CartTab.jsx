import { useSelector } from "react-redux"

const CartTab = () => {
  const carts = useSelector(store =>store.cart.items)
  return (
    <div className="bg-gray-100 w-500 h-full grid grid-rows-[60px_1fr_60px]">

      <h2>CartTab</h2>
      
    </div>
  )
}

export default CartTab
