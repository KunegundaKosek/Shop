import React, { ChangeEvent, useEffect, useState } from 'react';
import classes from './ProductsPage.module.scss';
import { useProductsList } from '../../../context/hooks/useProductsList';
import Loader from '../../../components/UI/Loader/Loader';
import ProductsList from '../ProductsList/ProductsList';
import Search from '../../../components/UI/Search/Search';
import { Button } from '@mui/material';
import ProductsByCategory from '../ProductsByCategory/ProductsByCategory';

const ProductsPage = () => {
    const { fetchProducts, productsList, loading, deleteProducts, updateProducts } = useProductsList();

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchProducts(searchValue);
    }, [searchValue]);


    const handleDelete = async (id: number) => {
        await deleteProducts(id);
    }

    const handleAddProduct = () => {
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <section className={classes.products}>
            <Search onChange={handleChange} value={searchValue} />
            <h1 className={classes.products__title}>Produkty</h1>

            <ProductsByCategory />

            {/* <Button>Dodaj produkt</Button> */}

            {loading ? (

                <Loader />
            ) : (
                <ProductsList
                    handleDelete={handleDelete}
                    productsList={productsList}
                    loading={loading}
                    updateProducts={updateProducts}
                />
            )}
        </section>
    );
};

export default ProductsPage;

