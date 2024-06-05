import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AddNewProduct from './pages/AddNewProduct/AddNewProduct';
import CartPage from './pages/CartPage/CartPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/add-new-product' element={<AddNewProduct />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;
