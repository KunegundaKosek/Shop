import React from 'react';
import classes from './CartPage.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CartItem from './CartItem/CartItem';
import { useTranslation } from 'react-i18next';

const CartPage = () => {
    const { t } = useTranslation();
    const totalAmount = useSelector(
        (state: RootState) => state.cart.totalAmount
    );

    return (
        <section className={classes.cartPage}>
            <h1 className={classes.cartPage__title}>{t('app.cart')}</h1>

            <CartItem />
            <p className={classes.cartPage__price}>
                {t('app.priceCart')} {totalAmount.toFixed(2)}$
            </p>
        </section>
    );
};

export default CartPage;
