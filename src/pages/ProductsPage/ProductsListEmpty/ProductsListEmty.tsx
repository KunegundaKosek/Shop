import React from 'react';
import classes from './ProductsListEmpty.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductsListEmty = () => {
    const { t } = useTranslation();
    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/add-new-product');
    };
    return (
        <section className={classes.empty}>
            <h1 className={classes.empty__title}>{t('app.emptyList')}</h1>
            <em className={classes.empty__icon}>
                <FontAwesomeIcon icon={faFaceFrown} />
            </em>

            <Button onClick={handleClick} className={classes.empty__button}>
                {t('app.addProduct')}
            </Button>
            {/* <PaginationUI currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} totalPages={productsPerPage} /> */}
        </section>
    );
};

export default ProductsListEmty;
