import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import classes from './AddNewProduct.module.scss';
import Card from '../../components/UI/Card/Card';
import AddForm from './AddForm/AddForm';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { Product } from '../../context/hooks/useProductsList';
import { useTranslation } from 'react-i18next';

const AddNewProduct = () => {
    const { t } = useTranslation();
    const { productsList, setProductsList, addProduct } =
        useContext(ProductContext);

    const [newProduct, setNewProduct] = useState<Product>({
        id: productsList.length - 1,
        title: '',
        images: [],
        description: '',
        category: '',
        price: 0,
        brand: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await addProduct(newProduct);
        // await setProductsList(prev => [...prev, newProduct]);
        console.log('dodano nowy produkt');
        console.log(productsList);
        navigate('/shop');
    };

    return (
        <section className={classes.addProduct}>
            <Card className={classes.addProduct__card}>
                <img
                    className={classes.addProduct__cloud1}
                    src={require('../../assets/images/modal-cloud.png')}
                    alt="chmura"
                />
                <img
                    className={classes.addProduct__cloud2}
                    src={require('../../assets/images/modal-cloud.png')}
                    alt="chmura"
                />
                <img
                    className={classes.addProduct__cloud3}
                    src={require('../../assets/images/modal-cloud.png')}
                    alt="chmura"
                />
                <img
                    className={classes.addProduct__cloud4}
                    src={require('../../assets/images/modal-cloud.png')}
                    alt="chmura"
                />
                <img
                    className={classes.addProduct__cloud5}
                    src={require('../../assets/images/modal-cloud.png')}
                    alt="chmura"
                />

                <h1>{t('app.addProduct')}</h1>
                <AddForm
                    product={newProduct}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Card>
        </section>
    );
};

export default AddNewProduct;
