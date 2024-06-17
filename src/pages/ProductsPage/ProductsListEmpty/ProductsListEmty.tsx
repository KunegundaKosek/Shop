import React from 'react';
import classes from './ProductsListEmpty.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import PaginationUI from '../../../components/UI/Pagination/Pagination';
import Button from '../../../components/UI/Button/Button';
import { Props } from '../ProductsList/ProductsList';

type PropsEmpty = Omit<Props, 'handleDelete' | 'productsList' | 'updateProducts'>

const ProductsListEmty = ({ currentPage, setCurrentPage, loading, productsPerPage }: PropsEmpty) => {
    return (
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
    )
}

export default ProductsListEmty