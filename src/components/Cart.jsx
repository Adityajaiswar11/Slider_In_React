import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mt-[5rem]">
      <div className="w-[400px] h-94 bg-gray-400" key={product.id}>
        <div className="w-full">
          <img
            src={product.thumbnail}
            alt=""
            className="w-[100%] h-[200px] rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;