import React, { ChangeEvent, FormEvent } from 'react';
import Label from '../../../components/UI/Label/Label';
import Input from '../../../components/UI/Input/Input';
import classes from './AddForm.module.scss';
import Button from '../../../components/UI/Button/Button';

type Props = {
    product: {
        title: string;
        images: string[];
        desc: string;
        price: number;
        brand: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AddForm = ({ product, handleChange, onSubmit }: Props) => {
    return (
        <form className={classes.addProduct__form} onSubmit={onSubmit}>
            <Label htmlFor='title'>Nazwa Produktu</Label>
            <Input
                className={classes['addProduct__form-input']}
                type='text'
                id='title'
                name='title'
                value={product.title}
                onChange={handleChange}
            />

            <Label htmlFor='image'>Zdjęcie</Label>
            <Input
                className={classes['addProduct__form-input']}
                type='text'
                id='image'
                name='image'
                value={product.images[0]}
                onChange={handleChange}
            />

            <Label htmlFor='desc'>Opis</Label>
            <Input
                className={classes['addProduct__form-input']}
                type='text'
                id='desc'
                name='desc'
                value={product.desc}
                onChange={handleChange}
            />

            <Label htmlFor='price'>Cena</Label>
            <Input
                className={classes['addProduct__form-input']}
                type='number'
                id='price'
                name='price'
                value={product.price.toString()} // Konwersja liczby na string
                onChange={handleChange}
            />

            <Label htmlFor='brand'>Producent</Label>
            <Input
                className={classes['addProduct__form-input']}
                type='text'
                id='brand'
                name='brand'
                value={product.brand}
                onChange={handleChange}
            />

            <Button className={classes['addProduct__form-button']}>Dodaj nowy produkt</Button>
        </form>
    );
};

export default AddForm;
