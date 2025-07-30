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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
