import { Route, Routes } from 'react-router-dom';

import AboutUs from './common/aboutUs/AboutUs';
import AdminPage from './features/adminPage/AdminPage';
import CartPage from './features/layout/cart/CartPage';
import ContactPage from './common/contact/ContactPage';
import HomePage from './features/homePage/HomePage';
import Layout from './features/layout/Layout';
import ProductSeriesPage from './features/products/productSeries/ProductSeriesPage';
import ProductsPage from './features/products/ProductsPage';
import UserPage from './features/userPage/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-series" element={<ProductSeriesPage />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
