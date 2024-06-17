import React, { ChangeEvent, FormEvent, useState } from 'react';
import classes from './AddNewProduct.module.scss';
import Card from '../../components/UI/Card/Card';
import AddForm from './AddForm/AddForm';
import { useNavigate } from 'react-router-dom';
import { useProductsList } from '../../context/hooks/useProductsList';

export type NewProduct = {
    title: string;
    image: string;
    desc: string;
    price: string;
    brand: string;
}

const AddNewProduct = () => {
    const { addProduct } = useProductsList();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");

    const navigation = useNavigate();

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
    }

    const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value);
    }

    const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }


    const handleChangeBrand = (e: ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addProduct({
            title,
            image,
            desc,
            price,
            brand
        });

        navigation('/sklep');
    }

    return (
        <section className={classes.addProduct}>
            <Card className={classes.addProduct__card}>

                <img className={classes.addProduct__cloud1} src={require('../../assets/images/modal-cloud.png')} alt='chmura' />
                <img className={classes.addProduct__cloud2} src={require('../../assets/images/modal-cloud.png')} alt='chmura' />

                <img className={classes.addProduct__cloud3} src={require('../../assets/images/modal-cloud.png')} alt='chmura' />

                <img className={classes.addProduct__cloud4} src={require('../../assets/images/modal-cloud.png')} alt='chmura' />

                <img className={classes.addProduct__cloud5} src={require('../../assets/images/modal-cloud.png')} alt='chmura' />


                <h1>Dodaj produkt</h1>
                <AddForm
                    handleChangeTitle={handleChangeTitle}
                    handleChangeImage={handleChangeImage}
                    handleChangeDesc={handleChangeDesc}
                    handleChangePrice={handleChangePrice}
                    handleChangeBrand={handleChangeBrand}
                    title={title}
                    image={image}
                    desc={desc}
                    price={price}
                    brand={brand}
                    onSubmit={handleSubmit}
                />
            </Card>
        </section>
    )
};

export default AddNewProduct;
