import { FC } from "react";
import { useCart } from "../context/CartContext";
import { IAppNavigation } from "../types";

const Footer: FC<IAppNavigation> = ({ navigateTo }) => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <footer className="bg-white fixed bottom-0 left-0 right-0 text-white p-4 shadow-inner z-20 justify-between items-center">
      <nav>
        <div className="flex justify-between items-center max-w-md mx-auto px-7 py-2">
          <button
            className="p-4 rounded-full bg-teal-500 transition duration-300"
            aria-label="Home"
            onClick={() => {
              navigateTo("products");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2 2v10a1 1 0 001 1h3m-6-10v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6m7 0h-3"
              />
            </svg>
          </button>
          <button
            className="p-4 rounded-full bg-teal-500 transition duration-300"
            aria-label="Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button
            className="relative p-4 rounded-full bg-teal-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
            aria-label="View Cart"
            onClick={() => navigateTo("cart")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
