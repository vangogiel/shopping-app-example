import { useState, FC } from "react";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import LoginScreen from "./components/Login";
import { IAppNavigation } from "./types";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "products" | "cart" | "productDetail" | "login"
  >("products");
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(undefined);

  const navigateTo: IAppNavigation["navigateTo"] = (page, id) => {
    setCurrentPage(page);
    setSelectedProductId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      <ProductProvider>
        <CartProvider>
          <main className="flex-grow py-8">
            {currentPage === "products" && (
              <ProductList navigateTo={navigateTo} />
            )}
            {currentPage === "cart" && <Cart navigateTo={navigateTo} />}
            {currentPage === "productDetail" && selectedProductId && (
              <ProductDetail
                productId={selectedProductId}
                navigateTo={navigateTo}
              />
            )}
            {currentPage === "login" && <LoginScreen />}
          </main>
          <Footer navigateTo={navigateTo} />
        </CartProvider>
      </ProductProvider>
    </div>
  );
};

export default App;
