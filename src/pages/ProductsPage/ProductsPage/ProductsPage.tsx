import React, { ChangeEvent, useEffect, useState } from 'react';
import classes from './ProductsPage.module.scss';
import { useProductsList } from '../../../context/hooks/useProductsList';
import Loader from '../../../components/UI/Loader/Loader';
import ProductsList from '../ProductsList/ProductsList';
import Search from '../../../components/UI/Search/Search';

const ProductsPage = () => {
    const { fetchProducts, productsList, loading, deleteProducts, updateProducts } = useProductsList();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchProducts(currentPage, productsPerPage, searchValue);
    }, [currentPage, productsPerPage, searchValue]);

    const handleDelete = async (id: number) => {
        await deleteProducts(id, currentPage, productsPerPage);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <section className={classes.products}>
            <Search onChange={handleChange} value={searchValue} />
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
                    updateProducts={updateProducts}
                />
            )}
        </section>
    );
};

export default ProductsPage;

