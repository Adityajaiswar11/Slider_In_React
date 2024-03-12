import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [catetory, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const category = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        console.log(data);
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };
    category();
    products(value);
  }, [value]);

  const products = async (item) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${item}`
      );
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.log(error);
    }
  };
  const categorychange = async (value) => {
    setValue(value);
    const data = await products(value);
    setProduct(data);
    setShowProduct(true);
    if (value == "all") {
      setShowProduct(false);
    }
  };

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=52");
        const data = await res.json();
        setAllProduct(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, []);

  const searchProduct = () => {
    const searchfilter = allProduct.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAllProduct(searchfilter);
    setSearchTerm("");
  };

  return (
    <main className="mt-[5rem]">
      <h1 className="text-center text-2xl text-white/70">
        Filter Products by categories
      </h1>
      <section className="px-10">
        <div className="flex justify-around items-center mt-3">
          <select
            className="block w-[250px] h-10 bg-white px-3 rounded-md"
            onChange={(e) => categorychange(e.target.value)}
          >
            <option value="all" selected>
              All Categories
            </option>
            {catetory.map((category) => (
              <Fragment key={category}>
                <option value={category}>{category}</option>
              </Fragment>
            ))}
          </select>

          <div className="w-[300px] bg-red-600 h-10 bg-white rounded-md flex">
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full block h-full px-2 rounded-sm bg-white border-none outline-none"
            />
            <button
              className="text-white bg-black  px-2 py-2 rounded-sm"
              onClick={searchProduct}
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex justify-evenly  items-center  mt-[3rem] gap-7  flex-wrap">
          {showProduct ? (
            product.map((item) => (
              <>
                <div className="w-[400px] bg-black">
                  <Link to={`/product/${item.id}`}>
                    <div className="block relative h-48 rounded ">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.thumbnail}
                      />
                    </div>
                    <div className="mt-4 px-4 mb-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <p className="mt-2  title-font text-gray-500 text-xs tracking-widest">
                          ${item.price}
                        </p>
                        <button className="mt-2 mr-1 text-white/80 text-[10px] tracking-widest title-font bg-red-600 py-[6px] px-2 rounded-md">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            ))
          ) : (
            <div className="flex flex-wrap gap-[2rem] items-center w-[87%] mx-auto">
              {allProduct.map((item) => (
                <div
                  className="w-[250px] bg-slate-200 px-2 py-2 rounded-md bg-black/80"
                  key={item.id}
                >
                  <Link to={`/product/${item.id}`}>
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.thumbnail}
                      />
                    </div>
                    <div className="mt-4 ">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="mt-2  title-font text-gray-500 text-xs tracking-widest">
                          ${item.price}
                        </p>
                        <button className="mt-2 mr-1 text-white/80 text-[10px] tracking-widest title-font bg-red-600 py-[6px] px-2 rounded-md">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Product;
