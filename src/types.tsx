export interface IAppNavigation {
  navigateTo: (
    page: "products" | "cart" | "productDetail" | "login",
    id?: string
  ) => void;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
