import React from 'react';
import classes from './HomePage.module.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/UI/Button/Button';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const handleClick = (url: string) => {
        navigate(url);
    };

    return (
        <section id="homePage" className={classes.main}>
            <img
                className={classes.main__bgcImg}
                src={require('../../assets/images/rocket.png')}
                alt="rocket"
            />

            <p className={classes.main__description}>
                {t('app.homePageSubtitle')}
            </p>
            <h1 className={classes.main__title}>{t('app.homePageTitle')}</h1>

            <div>
                <Button
                    onClick={() => handleClick('/shop')}
                    className={classes.main__button}
                >
                    <p>
                        <FontAwesomeIcon icon={faOpencart} />
                        &nbsp;{t('app.homePageShopButton')}
                    </p>
                </Button>

                <Button
                    onClick={() => handleClick('/login')}
                    className={`${classes.main__button}`}
                >
                    <p>
                        <FontAwesomeIcon icon={faCircle} />
                        &nbsp;{t('app.homePageLoginButton')}
                    </p>
                </Button>
            </div>

            <img
                className={classes['main__bgc']}
                src={require('../../assets/images/cloud-1.png')}
                alt=""
            />

            <img
                className={classes['main__bgc-cloud-2']}
                src={require('../../assets/images/cloud-2.png')}
                alt=""
            />

            <img
                className={classes['main__bgc-cloud-3']}
                src={require('../../assets/images/cloud-3.png')}
                alt=""
            />

            <img
                className={classes['main__bgc-cloud-4']}
                src={require('../../assets/images/cloud-4.png')}
                alt=""
            />
        </section>
    );
};

export default HomePage;
