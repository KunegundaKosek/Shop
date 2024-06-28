import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import classes from './CartItem.module.scss';
import { removeToCart } from '../../../redux/actions/cartActions';
import { useTranslation } from 'react-i18next';
import Modal from '../../../components/UI/Modal/Modal';

const CartItem = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleDelete = () => {
        setIsOpen(true);
    };

    const handleYesDelete = (productId: number) => {
        dispatch(removeToCart(productId));
        setIsOpen(false);
    };

    const handleNoDelete = () => {
        setIsOpen(false);
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
                                    onClick={() => handleDelete()}
                                    className={`${classes['shopItem__cart-button']}`}
                                >
                                    {t('app.deleteFromCart')}
                                </Button>

                                <Modal
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                >
                                    <Card>
                                        <h2>{t('app.deleteQuestion')}</h2>
                                        <Button
                                            onClick={() =>
                                                handleYesDelete(item.product.id)
                                            }
                                        >
                                            {t('app.yes')}
                                        </Button>
                                        <Button onClick={handleNoDelete}>
                                            {t('app.no')}
                                        </Button>
                                    </Card>
                                </Modal>
                            </Card>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartItem;
