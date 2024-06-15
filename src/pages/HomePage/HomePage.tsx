import React from 'react';
import classes from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/UI/Button/Button';

const HomePage = () => {

    return (
        <section id='homePage' className={classes.main}>
            <img className={classes.main__bgcImg} src={require('../../assets/images/rocket.png')} alt="rocket" />

            {/* <img className={classes['main__bgc-cloud-3']} src={require('../../assets/images/cloud-3.png')} alt="" /> */}


            <p className={classes.main__description}>Witaj w naszym sklepie internetowym! </p>
            <h1 className={classes.main__title}>
                Odkryj nowości w naszym sklepie internetowym już dziś! Łatwe zakupy online z szybką dostawą!</h1>

            <div>

                <Button className={classes.main__button}>

                    <Link className={classes['main__button-link']} to='/produkty'>
                        <FontAwesomeIcon icon={faOpencart} />
                        &nbsp;Zacznij zakupy
                    </Link>
                </Button>

                <Button className={`${classes.main__button}`}>
                    <Link className={classes['main__button-link']} to='/logowanie'>
                        <FontAwesomeIcon icon={faCircle} />
                        &nbsp;Zaloguj się

                    </Link>
                </Button>
            </div>

            <img className={classes['main__bgc']} src={require('../../assets/images/cloud-1.png')} alt="" />

            <img className={classes['main__bgc-cloud-2']} src={require('../../assets/images/cloud-2.png')} alt="" />

            <img className={classes['main__bgc-cloud-3']} src={require('../../assets/images/cloud-3.png')} alt="" />

            <img className={classes['main__bgc-cloud-4']} src={require('../../assets/images/cloud-4.png')} alt="" />

        </section>
    )
};

export default HomePage;
