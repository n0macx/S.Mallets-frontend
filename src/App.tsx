import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import DeliveryPage from './features/deliveryPage/DeliveryPage';
import ScrollToTop from './tools/ScrollToTop';
import SummaryPage from './features/summaryPage/SummaryPage';
import i18n from './i18n';
import store from './app/store';
import { Loader } from './features/Loader';

const ServicePage = lazy(() => import('./common/service/ServicePage'));
const UserPage = lazy(() => import('./features/userPage/UserPage'));
const ProductsPage = lazy(() => import('./features/products/ProductsPage'));
const ProductsSeriesPage = lazy(
  () => import('./features/products/productsSeries/ProductsSeriesPage'),
);
const LoginPage = lazy(() => import('./features/loginPage/LoginPage'));
const Layout = lazy(() => import('./features/layout/Layout'));
const HomePage = lazy(() => import('./features/homePage/HomePage'));
const ContactPage = lazy(() => import('./common/contact/ContactPage'));
const CartPage = lazy(() => import('./features/cartPage/CartPage'));
const AdminPage = lazy(() => import('./features/adminPage/AdminPage'));
const AboutMe = lazy(() => import('./common/aboutUs/AboutUs'));

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loader />}>
        <ScrollToTop>
          <div className="App">
            <Provider store={store}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route
                    path="/products-series"
                    element={<ProductsSeriesPage />}
                  />
                  <Route
                    path="/products-series/:seriesName"
                    element={<ProductsPage />}
                  />
                  <Route path="/service" element={<ServicePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/cart/delivery" element={<DeliveryPage />} />
                  <Route
                    path="/cart/delivery/summary"
                    element={<SummaryPage />}
                  />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/user" element={<UserPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/service" element={<ServicePage />} />
                </Route>
              </Routes>
            </Provider>
          </div>
        </ScrollToTop>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
