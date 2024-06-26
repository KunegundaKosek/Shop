import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage/ProductsPage';
import AddNewProduct from './pages/AddNewProduct/AddNewProduct';
import CartPage from './pages/CartPage/CartPage';
import NotFound from './pages/NotFound/NotFound';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/LoginPage/LoginPage';
import { useTranslation } from 'react-i18next';
import ProductsByCategoryList from './pages/ProductsPage/ProductsByCategory/ProductsByCategoryList';
import SortProductsByOrder from './pages/ProductsPage/SortProductsByOrder/SortProductsByOrder';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ProductsPage />} />
                <Route path="/add-new-product" element={<AddNewProduct />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="/shop/smartphones"
                    element={<ProductsByCategoryList category="smartphones" />}
                />
                <Route
                    path="/shop/beauty"
                    element={<ProductsByCategoryList category="beauty" />}
                />
                <Route
                    path="/shop/fragrances"
                    element={<ProductsByCategoryList category="fragrances" />}
                />
                <Route
                    path="/shop/furniture"
                    element={<ProductsByCategoryList category="furniture" />}
                />
                <Route
                    path="/shop/groceries"
                    element={<ProductsByCategoryList category="groceries" />}
                />

                <Route
                    path="/shop/home-decoration"
                    element={
                        <ProductsByCategoryList category="home-decoration" />
                    }
                />

                <Route
                    path="/shop/kitchen-accessories"
                    element={
                        <ProductsByCategoryList category="kitchen-accessories" />
                    }
                />

                <Route
                    path="/shop/order-desc"
                    element={<SortProductsByOrder order="desc" />}
                />

                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
