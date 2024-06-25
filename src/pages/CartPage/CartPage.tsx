import React from 'react';
import classes from './CartPage.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CartItem from './CartItem/CartItem';

const CartPage = () => {
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

    return <div>

        <h2>Twój koszyk</h2>

        <CartItem />
        <p>Łączna wartość koszyka: {totalAmount.toFixed(2)}$</p>
    </div>;
};

export default CartPage;
