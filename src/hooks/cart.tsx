import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE

      const productStore = await AsyncStorage.getItem('@GoMarket:products');

      if (productStore) {
        setProducts(JSON.parse(productStore));
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function storeProducts(): Promise<void> {
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(products),
      );
    }

    storeProducts();
  }, [products]);

  const addToCart = useCallback(async product => {
    setProducts(state => {
      const oldProducts = [...state];

      const findProduct = oldProducts.find(item => item.id === product.id);

      if (!findProduct) {
        return [...oldProducts, { ...product, quantity: 1 }];
      }

      if (findProduct) {
        findProduct.quantity += 1;
      }
      return [...oldProducts];
    });
  }, []);

  const increment = useCallback(
    async id => {
      const newProduct = [...products];

      const incrementItem = newProduct.find(item => item.id === id);

      if (incrementItem && incrementItem.quantity) {
        incrementItem.quantity += 1;
        setProducts(newProduct);
      }
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProduct = [...products];

      const decrementItem = newProduct.find(item => item.id === id);

      if (decrementItem && decrementItem.quantity) {
        decrementItem.quantity -= 1;
        setProducts(newProduct);
      }
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
