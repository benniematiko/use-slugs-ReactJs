import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";

const ProductsCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  // console.log(carts);
  const { id, description, name, price, image, slug, owner, location } =
    props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt="plots"
          className="w-full h-80 object-cover object-top"
        />
      </Link>
      <h3 className="text-2xl py-3 text-left font-medium">{name}</h3>

      <div className="text-gray-400 py-1">{description}</div>

      <div className="py-3">
        <p>Location: {location}</p>
        <p>Owner: {owner}</p>
      </div>

      <div className="flex justify-between items-center pb-2">
        <p>
          Kshs <span className="text-1xl font-medium">{price}</span>.00/=
          <span className="text-gray-400">@acre</span>
        </p>
      </div>

      <div className="flex justify-between items-center">
        <button className="bg-amber-500 p-2 rounded-md text-sm hover:bg-gray-400">
          Explore more
        </button>
        <button
          className="bg-yellow-500 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCart;
