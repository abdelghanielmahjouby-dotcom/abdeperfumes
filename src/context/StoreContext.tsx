import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import StoryPage from './pages/StoryPage';
import InfoPage from './pages/InfoPage';
import { StoreContext } from './context/StoreContext';
import { CartItem, Language } from './types';
import { getInitialCart } from './hooks/useLocalStorage';

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [cart, setCart] = useState<CartItem[]>(() => getInitialCart());

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const values = useMemo(
    () => ({
      cart,
      language,
      setLanguage,
      addToCart: (productId: string, sizeId: string, quantity = 1) => {
        setCart((current) => {
          const index = current.findIndex((item) => item.productId === productId && item.sizeId === sizeId);
          if (index >= 0) {
            return current.map((item, i) =>
              i === index ? { ...item, quantity: item.quantity + quantity } : item,
            );
          }
          return [...current, { productId, sizeId, quantity }];
        });
      },
      removeFromCart: (productId: string, sizeId: string) => {
        setCart((current) =>
          current.filter((item) => !(item.productId === productId && item.sizeId === sizeId)),
        );
      },
      updateQuantity: (productId: string, sizeId: string, quantity: number) => {
        setCart((current) =>
          current
            .map((item) =>
              item.productId === productId && item.sizeId === sizeId ? { ...item, quantity } : item,
            )
            .filter((item) => item.quantity > 0),
        );
      },
      clearCart: () => setCart([]),
    }),
    [cart, language],
  );

  useEffect(() => {
    localStorage.setItem('abdeperfumes-cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <StoreContext.Provider value={values}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/privacy" element={<InfoPage type="privacy" />} />
          <Route path="/terms" element={<InfoPage type="terms" />} />
          <Route path="/delivery" element={<InfoPage type="delivery" />} />
        </Routes>
      </Layout>
    </StoreContext.Provider>
  );
}

export default App;
