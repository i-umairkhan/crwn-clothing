import { useState, createContext, useEffect } from "react";
import { addCollectionAndDocuments } from "../Utils/Firebase/Firebase.Utils.js";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
