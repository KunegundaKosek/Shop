import React, { ChangeEvent, FormEvent } from 'react';
import Label from '../../../components/UI/Label/Label';
import Input from '../../../components/UI/Input/Input';
import classes from './AddForm.module.scss';
import Button from '../../../components/UI/Button/Button';
import { useTranslation } from 'react-i18next';

type Props = {
    product: {
        title: string;
        images: string[];
        description: string;
        price: number;
        brand: string;
    };
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AddForm = ({ product, handleChange, onSubmit }: Props) => {
    const { t } = useTranslation();
    return (
        <form className={classes.addProduct__form} onSubmit={onSubmit}>
            <Label htmlFor="title">{t('app.nameProduct')}</Label>
            <Input
                className={classes['addProduct__form-input']}
                type="text"
                id="title"
                name="title"
                value={product.title}
                onChange={handleChange}
            />

            <Label htmlFor="image">{t('app.image')}</Label>
            <Input
                className={classes['addProduct__form-input']}
                type="text"
                id="image"
                name="image"
                value={product.images[0]}
                onChange={handleChange}
            />

            <Label htmlFor="price">{t('app.price')}</Label>
            <Input
                className={classes['addProduct__form-input']}
                type="number"
                id="price"
                name="price"
                value={product.price.toString()}
                onChange={handleChange}
            />

            <Label htmlFor="brand">{t('app.brand')}</Label>
            <Input
                className={classes['addProduct__form-input']}
                type="text"
                id="brand"
                name="brand"
                value={product.brand}
                onChange={handleChange}
            />

            <Button className={classes['addProduct__form-button']}>
                {t('app.addProduct')}
            </Button>
        </form>
    );
};

export default AddForm;
