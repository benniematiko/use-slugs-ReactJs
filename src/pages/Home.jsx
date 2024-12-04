import { Link } from "react-router-dom";
import { products } from "../products"
import ProductsCart from "../components/ProductsCart";


const Home = () => {
  return (
    <div className="w-[1200px] max-w-full px-20">
     
      <h2 className="text-3xl my-5">Property Lists</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols sm:grid-cols-2 gap-5">
        {
        
          products.map((product, key ) =>
            <ProductsCart key={key} data={product} />            
          )
        }
        
      </div>
      
    </div>
  );
};

export default Home;
