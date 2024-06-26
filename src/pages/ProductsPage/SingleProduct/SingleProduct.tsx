import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartArrowDown,
    faCirclePlus,
    faPenToSquare,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../../../components/UI/Card/Card';
import { Product } from '../../../context/hooks/useProductsList';
import classes from './SingleProduct.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cartActions';
import Modal from '../../../components/UI/Modal/Modal';
import { useTranslation } from 'react-i18next';

type Props = {
    product: Product;
    handleDelete: (id: number) => void;
    openModal: (id: number) => void;
};

const SingleProduct = ({ product, handleDelete, openModal }: Props) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product, 1));
        console.log('dodane do koszyka');
    };

    const handleClick = () => {
        setIsOpenModal(prev => !prev);
    };

    const handleClose = () => {
        setIsOpenModal(false);
    };
    const { t } = useTranslation();
    return (
        <>
            {isOpenModal && (
                <Modal isOpen={isOpenModal} onClose={handleClick}>
                    <div className={classes.modal}>
                        <h2 className={classes.modal__title}>
                            {product.title}
                        </h2>
                        <p className={classes.modal__price}>{product.price}$</p>
                        <img
                            className={classes.modal__image}
                            src={product.images[0]}
                            alt={product.title}
                        />

                        {product.images[1] !== undefined && (
                            <img
                                className={classes.modal__image}
                                src={product.images[1]}
                                alt={product.title}
                            />
                        )}

                        <p className={classes.modal__description}>
                            {product.description}
                        </p>
                        <p className={classes.modal__brand}>
                            <b>{t('app.brand')}: </b>
                            {product.brand}
                        </p>
                        <p className={classes.category}>
                            <b>{t('app.category')}: </b>
                            <em>{product.category}</em>
                        </p>
                    </div>
                </Modal>
            )}
            <li className={classes['products__list-product']} key={product.id}>
                <Card className={classes['products__list-card']}>
                    <h3 className={classes['products__list-title']}>
                        {product.title}
                    </h3>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className={classes['products__list-image']}
                    />

                    <div className={classes['products__list-buttonsBox']}>
                        <span
                            className={`${classes['products__list-button']} ${classes['products__list-button--price']}`}
                        >
                            {product.price.toString()}$
                        </span>

                        <Button
                            onClick={() => handleDelete(product.id)}
                            className={classes['products__list-button']}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </Button>

                        <Button
                            onClick={() => openModal(product.id)}
                            className={classes['products__list-button']}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>

                        <Button
                            onClick={handleAddToCart}
                            className={classes['products__list-button']}
                        >
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </Button>

                        <Button
                            onClick={handleClick}
                            className={classes['products__list-button']}
                        >
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>
                    </div>
                </Card>
            </li>
            {/* ))} */}
        </>
    );
};

export default SingleProduct;
