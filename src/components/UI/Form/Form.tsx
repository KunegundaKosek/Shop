import React, { ChangeEvent, FormEvent } from 'react';
import classes from './Form.module.scss';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

type Props = {
    value: {
        title: string;
        image: string;
        price: number;
        description: string;
        brand: string;
    };
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ value, onChange, onSubmit }: Props) => {
    const { t } = useTranslation();

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <img
                className={classes.form__cloud1}
                src={require('../../../assets/images/modal-cloud.png')}
                alt="chmura"
            />
            <img
                className={classes.form__cloud2}
                src={require('../../../assets/images/modal-cloud.png')}
                alt="chmura"
            />

            <img
                className={classes.form__cloud3}
                src={require('../../../assets/images/modal-cloud.png')}
                alt="chmura"
            />

            <img
                className={classes.form__cloud4}
                src={require('../../../assets/images/modal-cloud.png')}
                alt="chmura"
            />

            <img
                className={classes.form__cloud5}
                src={require('../../../assets/images/modal-cloud.png')}
                alt="chmura"
            />

            <Label htmlFor="title">{t('app.nameProduct')}</Label>
            <Input
                id="title"
                type="text"
                value={value.title}
                onChange={onChange}
            />

            <Label htmlFor="image">{t('app.image')}</Label>
            <Input
                id="image"
                type="text"
                value={value.image}
                onChange={onChange}
            />

            <Label htmlFor="price">{t('app.price')}</Label>
            <Input
                id="price"
                type="number"
                value={value.price.toString()}
                onChange={onChange}
            />

            <Label htmlFor="description">{t('app.description')}</Label>
            <Input
                id="description"
                type="text"
                value={value.description}
                onChange={onChange}
            />

            <Label htmlFor="brand">{t('app.brand')}</Label>
            <Input
                id="brand"
                type="text"
                value={value.brand}
                onChange={onChange}
            />

            <Button className={classes.form__button}>
                {t('app.editProduct')}
            </Button>
        </form>
    );
};

export default Form;
