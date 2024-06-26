import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import classes from './CartItem.module.scss';
import { removeToCart } from '../../../redux/actions/cartActions';
import { useTranslation } from 'react-i18next';

const CartItem = () => {
    const { t } = useTranslation();

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDelete = (productId: number) => {
        dispatch(removeToCart(productId));
    };
    return (
        <div className={classes.shopItem}>
            {cartItems.length === 0 ? (
                <p>{t('app.emptyCart')}</p>
            ) : (
                <ul className={classes.shopItem__list}>
                    {cartItems.map(item => (
                        <li
                            key={item.product.id}
                            className={classes.shopItem__list}
                        >
                            <Card className={classes.shopItem__card}>
                                <h3
                                    className={`${classes['shopItem__card-titleProduct']}`}
                                >
                                    {item.product.title}
                                </h3>
                                <img
                                    src={item.product.images[0]}
                                    alt={item.product.title}
                                    className={`${classes['shopItem__card-image']}`}
                                />

                                <p>{item.quantity}</p>

                                <Button
                                    onClick={() =>
                                        handleDelete(item.product.id)
                                    }
                                    className={`${classes['shopItem__cart-button']}`}
                                >
                                    Usuń z koszyka
                                </Button>
                            </Card>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartItem;
