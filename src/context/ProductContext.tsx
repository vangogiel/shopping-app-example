import { FC, ReactNode, createContext, useContext } from "react";
import { IProduct } from "../types";

const MOCK_PRODUCTS: IProduct[] = [
  {
    id: "1",
    name: "Wireless Earbuds",
    description:
      "High-fidelity sound with active noise cancellation and comfortable fit. Up to 24 hours battery life with charging case.",
    price: 99.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Earbuds",
  },
  {
    id: "2",
    name: "Smartwatch Pro",
    description:
      "Advanced health tracking, GPS, and waterproof design. Stay connected on the go with notifications and calls.",
    price: 199.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Smartwatch",
  },
  {
    id: "3",
    name: "Portable Bluetooth Speaker",
    description:
      "Powerful sound in a compact design. 10-hour battery life and IPX7 waterproof rating, perfect for outdoor adventures.",
    price: 79.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Speaker",
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "Designed for ultimate comfort and support during long working hours. Adjustable lumbar support and breathable mesh.",
    price: 249.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Chair",
  },
  {
    id: "5",
    name: "4K Ultra HD Monitor",
    description:
      "Stunning visuals with vibrant colors and sharp details. Ideal for gaming, graphic design, and professional work.",
    price: 349.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Monitor",
  },
  {
    id: "6",
    name: "Compact Espresso Machine",
    description:
      "Brew rich, aromatic espresso at home with ease. Features a milk frother for lattes and cappuccinos.",
    price: 129.99,
    imageUrl: "https://placehold.co/400x300/F0F0F0/333333?text=Espresso",
  },
];

export interface IProductContextType {
  products: IProduct[];
  getProductById: (id: string) => IProduct | undefined;
}

export const ProductContext = createContext<IProductContextType | undefined>(
  undefined
);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const getProductById = (id: string) => MOCK_PRODUCTS.find((p) => p.id === id);

  const value = {
    products: MOCK_PRODUCTS,
    getProductById,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
