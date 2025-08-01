import { FC } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { IAppNavigation } from "../types";

const ProductList: FC<IAppNavigation> = ({ navigateTo }) => {
  const { products } = useProducts();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            navigateTo={navigateTo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
