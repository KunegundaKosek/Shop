import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import Search from '../../../components/UI/Search/Search';
import SingleProduct from '../SingleProduct/SingleProduct';
import classes from './ProductsByCategoryList.module.scss';
import Card from '../../../components/UI/Card/Card';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';

type Props = {
    category: string;
};

const ProductsByCategoryList = ({ category }: Props) => {
    const navigation = useNavigate();

    const { getByCategory, productsList } = useContext(ProductContext);

    const handleClick = () => {
        navigation('/shop');
    };

    useEffect(() => {
        getByCategory(category);
        console.log(productsList);
    }, []);
    return (
        <section className={classes.productListPage}>
            <Button
                className={classes.productListPage__button}
                onClick={handleClick}
            >
                Powrót
            </Button>
            <ul className={classes.productsList}>
                {productsList.map(product => (
                    <li key={product.id} className={classes.product}>
                        <Card className={classes.card}>
                            <h3 className={classes.product__title}>
                                {product.title}
                            </h3>
                            <img
                                className={classes.product__images}
                                src={product.images[0]}
                                alt={product.title}
                            />
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProductsByCategoryList;
