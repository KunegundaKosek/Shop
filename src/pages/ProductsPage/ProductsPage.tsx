import React, { useEffect, useState } from 'react';
import classes from './ProductsPage.module.scss';
import { useProductsList } from '../../context/hooks/useProductsList';
import Loader from '../../components/UI/Loader/Loader';
import ProductsList from './ProductsList';

const ProductsPage = () => {
    const { fetchProducts, productsList, loading, deleteProducts } = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        fetchProducts(currentPage, productsPerPage);
    }, [currentPage, productsPerPage]);

    const handleDelete = async (id: number) => {
        await deleteProducts(id, currentPage, productsPerPage);
    }

    console.log('products[page')
    console.log(productsList);


    return (
        <section className={classes.products}>
            <h1 className={classes.products__title}>Produkty</h1>

            {loading ? (

                <Loader />
            ) : (
                <ProductsList
                    handleDelete={handleDelete}
                    productsList={productsList}
                    currentPage={currentPage}
                    loading={loading}
                    productsPerPage={productsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </section>
    );
};

export default ProductsPage;

