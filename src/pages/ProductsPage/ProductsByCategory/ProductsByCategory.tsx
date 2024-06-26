import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import classes from './ProductsByCategory.module.scss';

const ProductsByCategory = () => {
    const { t } = useTranslation();

    const navigation = useNavigate();

    const handleClick = (category: string) => {
        navigation(`/shop/${category}`);
    };

    const handleClickByOrder = (order: string) => {
        navigation(`/shop/order-${order}`);
    };
    return (
        <div>
            <Button
                className={classes.button}
                onClick={() => handleClick('smartphones')}
            >
                {t('app.buttonSmartphones')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('beauty')}
            >
                {t('app.buttonBeauty')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('fragrances')}
            >
                {t('app.buttonFragrances')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('furniture')}
            >
                {t('app.buttonFurniture')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('groceries')}
            >
                {t('app.buttonGroceries')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('home-decoration')}
            >
                {t('app.buttonHomeDecoration')}
            </Button>
            <Button
                className={classes.button}
                onClick={() => handleClick('kitchen-accessories')}
            >
                {t('app.buttonKitchenAccessories')}
            </Button>

            <Button
                className={classes.button}
                onClick={() => handleClickByOrder('desc')}
            >
                {t('app.buttonAlphabeticallyZ-A')}
            </Button>
        </div>
    );
};

export default ProductsByCategory;
