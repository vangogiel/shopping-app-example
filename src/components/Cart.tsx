import React, { FC } from "react";
import { useCart } from "../context/CartContext";
import { IAppNavigation } from "../types";

const Cart: FC<IAppNavigation> = ({ navigateTo }) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-xl">
          <p className="mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigateTo("products")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-6">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 last:border-b-0"
            >
              <div className="flex items-center flex-grow mb-4 sm:mb-0">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4 shadow-sm"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.src = `https://placehold.co/200x200/F0F0F0/333333?text=Image+Error`;
                  }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-600">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, parseInt(e.target.value))
                    }
                    className="w-12 text-center border-x border-gray-300 focus:outline-none focus:ring-0"
                    min="1"
                    aria-label={`Quantity of ${item.product.name}`}
                  />
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-bold text-gray-800 w-24 text-right">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 shadow-md"
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-2xl font-bold text-gray-900 mr-4">Total:</p>
            <p className="text-3xl font-extrabold text-blue-700">
              ${cartTotal.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              onClick={() => navigateTo("products")}
              className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300 shadow-lg"
            >
              Continue Shopping
            </button>
            <button className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
