import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AddNewProduct from './pages/AddNewProduct/AddNewProduct';
import CartPage from './pages/CartPage/CartPage';
import NotFound from './pages/NotFound/NotFound';
import Nav from './components/Nav/Nav';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sklep' element={<ProductsPage />} />
                <Route path='/dodaj-produkt' element={<AddNewProduct />} />
                <Route path='/koszyk' element={<CartPage />} />
                <Route path='/logowanie' element={<LoginPage />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;
