import React, { FC } from "react";
import { useCart } from "../context/CartContext";
import { IProduct, IAppNavigation } from "../types";

const ProductCard: FC<{ product: IProduct } & IAppNavigation> = ({
  product,
  navigateTo,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = `https://placehold.co/400x300/F0F0F0/333333?text=Image+Error`;
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700 text-lg font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => navigateTo("productDetail", product.id)}
            className="flex-1 bg-gray-300 text-gray-800 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300 shadow-md text-center"
          >
            View Details
          </button>
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 shadow-md text-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
