import React, { ChangeEvent, FormEvent } from 'react'
import Label from '../../../components/UI/Label/Label'
import Input from '../../../components/UI/Input/Input';
import classes from './AddForm.module.scss';
import Button from '../../../components/UI/Button/Button';

type Props = {
        handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
        handleChangeImage: (e: ChangeEvent<HTMLInputElement>) => void;
        handleChangeDesc: (e: ChangeEvent<HTMLInputElement>) => void;
        handleChangePrice: (e: ChangeEvent<HTMLInputElement>) => void;
        handleChangeBrand: (e: ChangeEvent<HTMLInputElement>) => void;

        title: string;
        image: string;
        desc: string;
        price: string;
        brand: string;

        onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const AddForm = ({handleChangeTitle, handleChangeImage, handleChangeDesc, handleChangePrice, handleChangeBrand, title, image, desc, price, brand, onSubmit}: Props) => {
    return (
        <form className={classes.addProduct__form} onSubmit={onSubmit}>
            <Label htmlFor='title'>Nazwa Produktu</Label>
            <Input className={`${classes['addProduct__form-input']}`} type='text' id='title' value={title} onChange={handleChangeTitle} />

            <Label htmlFor='image'>Zdjęcie</Label>
            <Input className={`${classes['addProduct__form-input']}`} type='text' id='image' value={image} onChange={handleChangeImage} />

            <Label htmlFor='description'>Opis</Label>
            <Input className={`${classes['addProduct__form-input']}`} type='text' id='description' value={desc} onChange={handleChangeDesc} />

            <Label htmlFor='price'>Cena</Label>
            <Input className={`${classes['addProduct__form-input']}`} type='number' id='price' value={price} onChange={handleChangePrice} />


            <Label htmlFor='brand'>Producent</Label>
            <Input className={`${classes['addProduct__form-input']}`} type='text' id='brand' value={brand} onChange={handleChangeBrand} />

            <Button className={`${classes['addProduct__form-button']}`}>Dodaj nowy produkt</Button>
        </form>
    )
}

export default AddForm