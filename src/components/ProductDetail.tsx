import React, { FC } from "react";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { IAppNavigation } from "../types";

const ProductDetail: FC<{ productId: string } & IAppNavigation> = ({
  productId,
  navigateTo,
}) => {
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Product Not Found
        </h2>
        <button
          onClick={() => navigateTo("products")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 lg:w-1/3 h-64 md:h-auto object-cover rounded-lg shadow-md"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = `https://placehold.co/400x300/F0F0F0/333333?text=Image+Error`;
          }}
        />
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            {product.name}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-700 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300 shadow-lg"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigateTo("products")}
              className="flex-1 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300 shadow-lg"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
