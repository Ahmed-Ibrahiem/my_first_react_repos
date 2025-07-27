import { createContext, useEffect, useRef, useState } from "react";
import Render_products from "./Render_products";
import { useCartShoppingContext } from "../CartShopping";
// Create Context To Provide To All Component
export const All_products_data = createContext();

const FetchedData = () => {
  const [isLoading, setIsloading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const [products_data, setProducts_data] = useState([]);
  let goEffect = useRef(true);
  useEffect(() => {
    if (goEffect.current) {
      goEffect = false;
      setIsloading(true);
      try {
        const getData = async () => {
          const req = await fetch("/products.json");
          if (req.status === 200) {
            setIsloading(false);
            const res = await req.json();
            // Storage The resopnse data in products_data state
            setProducts_data(res);
            // Set Countity For Each Product And It's Initial Value = 0
            setProducts_data((prev) =>
              prev.map((pro) => ({ ...pro, countity: 1 }))
            );
          } else {
            setIsloading(false);
            setErrorMassage("Something Went Wrong");
          }
        };
        getData();
      } catch {
        setIsloading(false);
        setErrorMassage("Something Went Wrong");
      }
    }
  }, []);


  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && errorMassage && <p>{errorMassage}</p>}
      {!isLoading && products_data && (
        <All_products_data.Provider value={products_data}>
          <Render_products products_data={products_data} />
        </All_products_data.Provider>
      )}
    </>
  );
};

export default FetchedData;
