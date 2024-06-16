import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../../components/UI/Button/Button'
import { faCartArrowDown, faFaceFrown, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../context/hooks/useProductsList';
import Card from '../../components/UI/Card/Card';
import PaginationUI from '../../components/UI/Pagination/Pagination';
import classes from './ProductsList.module.scss';

type Props = {
    handleDelete: (id: number) => void;
    productsList: Product[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    loading: boolean;
    productsPerPage: number;
}

const ProductsList = ({ handleDelete, productsList, currentPage, loading, productsPerPage, setCurrentPage }: Props) => {
    return (
        <>
            {productsList.length === 0 ? (
                <section className={classes.empty}>
                    <h1 className={classes.empty__title}>
                        Usunąłeś wszystkie produkty z tej listy!
                    </h1>
                    <em className={classes.empty__icon}>
                        <FontAwesomeIcon icon={faFaceFrown} />
                    </em>

                    <Button className={classes.empty__button}>Dodaj produkt</Button>
                    <PaginationUI currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} totalPages={productsPerPage} />
                </section>
            ) : (
                <ul className={classes.products__list}>
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

                                    <Button className={classes['products__list-button']}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Button>

                                    <Button className={classes['products__list-button']}>
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </Button>
                                </div>
                            </Card>
                        </li>
                    ))}

                    <PaginationUI currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} totalPages={productsPerPage} />
                </ul>
            )}

        </>
    )
}

export default ProductsList