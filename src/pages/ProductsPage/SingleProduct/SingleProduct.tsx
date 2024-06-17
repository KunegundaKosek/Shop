import React from 'react'
import Button from '../../../components/UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCirclePlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Card from '../../../components/UI/Card/Card'
import { Product } from '../../../context/hooks/useProductsList';
import classes from './SingleProduct.module.scss';

type Props = {
    productsList: Product[];
    handleDelete: (id: number) => void;
    openModal: (id: number) => void;

}

const SingleProduct = ({ productsList, handleDelete, openModal }: Props) => {
    return (
        <>
            {productsList && productsList.map(({ id, title, description, price, images }: Product) => (
                <li className={classes['products__list-product']} key={id} >
                    <Card className={classes['products__list-card']}>
                        <h3 className={classes['products__list-title']}>{title}</h3>
                        <img src={images[0]} alt={title} width={200} height={200} />

                        <div className={classes['products__list-buttonsBox']}>
                            <span className={`${classes['products__list-button']} ${classes['products__list-button--price']}`}>{price.toString()}$</span>

                            <Button onClick={() => handleDelete(id)} className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>

                            <Button onClick={() => openModal(id)} className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Button>

                            <Button className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </Button>

                            <Button className={classes['products__list-button']}>
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </Button>
                        </div>
                    </Card>
                </li>
            ))}
        </>
    )
}

export default SingleProduct