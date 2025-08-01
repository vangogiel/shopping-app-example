import React, { FC } from "react";
import { useCart } from "../context/CartContext";
import { IProduct, IAppNavigation } from "../types";

const ProductCard: FC<{ product: IProduct } & IAppNavigation> = ({
  product,
  navigateTo,
}) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <div onClick={() => navigateTo("productDetail", product.id)}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = `https://placehold.co/400x300/F0F0F0/333333?text=Image+Error`;
          }}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-700 text-lg font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded-full font-bold hover:bg-teal-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
