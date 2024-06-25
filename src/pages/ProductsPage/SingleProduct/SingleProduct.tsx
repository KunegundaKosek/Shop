import React from 'react'
import Button from '../../../components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCirclePlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/UI/Card/Card'
import { Product } from '../../../context/hooks/useProductsList';
import classes from './SingleProduct.module.scss';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/actions/cartActions'

type Props = {
    product: Product;
    handleDelete: (id: number) => void;
    openModal: (id: number) => void;
}

const SingleProduct = ({ product, handleDelete, openModal }: Props) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product, 1));
        console.log('dodane do koszyka')
    }
    return (
        <>
            {/* {productsList && productsList.map(({ id, title, desc, price, images }: Product) => ( */}
                <li className={classes['products__list-product']} key={product.id} >
                    <Card className={classes['products__list-card']}>
                        <h3 className={classes['products__list-title']}>{product.title}</h3>
                        <img src={product.images[0]} alt={product.title} width={200} height={200} />

                        <div className={classes['products__list-buttonsBox']}>
                            <span className={`${classes['products__list-button']} ${classes['products__list-button--price']}`}>{product.price.toString()}$</span>

                            <Button onClick={() => handleDelete(product.id)} className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>

                            <Button onClick={() => openModal(product.id)} className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Button>

                            <Button onClick={handleAddToCart} className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </Button>

                            <Button className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </Button>
                        </div>
                    </Card>
                </li>
            {/* ))} */}
        </>
    )
}

export default SingleProduct