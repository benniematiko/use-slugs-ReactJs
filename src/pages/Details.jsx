import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";

import { useDispatch } from "react-redux"
import { addToCart } from "../stores/Cart"


const Details = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [ quantity, setQuantity ] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 0 ? 0 : quantity - 1 )
  }

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1 )
  }

  const handleAddToCart = () =>{
    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }))
  }
  return (
    <div className="text-center px-48">
      <h2 className="text-3xl text-center mt-5">Product Details</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt="details-image" className="w-full" />
        </div>
        <div className="flex flex-col garp-5">
          <h2 className="text-2xl uppercase font-semibold">
            Property Name: {detail.name}
          </h2>

          <div className="mt-5">
          <p>
            {detail.description}
          </p>
          </div>
          <p className="font-medium text-2xl m-5">Kshs {detail.price}.00/=</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button className="bg-gray-100 h-full w-16 font-medium text-xl rounded-xl flex justify-center item-center" onClick={handleMinusQuantity}>
                -
              </button>
              <span className="bg-gray-100 h-full w-16 font-medium text-xl rounded-xl flex justify-center item-center">
                {quantity}
              </span>
              <button className="bg-gray-100 h-full w-16 font-medium text-xl rounded-xl flex justify-center item-center" onClick={handlePlusQuantity}>
                +
              </button>
            </div>
            <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl" onClick={handleAddToCart}>Add to Cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
