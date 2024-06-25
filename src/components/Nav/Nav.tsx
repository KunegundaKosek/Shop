import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faPuzzlePiece, faBars } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from "react-dark-mode-toggle";
import { CSSTransition } from 'react-transition-group';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



export enum Locale {
    EN = "en",
    PL = "pl",
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleNavigation = () => {
        setIsOpen(!isOpen);
    }

    const cartItems = useSelector((state: RootState) => state.cart.items)



    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === Locale.PL ? Locale.EN : Locale.PL);
    };

    return (
        <>
            <nav className={classes.nav}>
                <ul className={classes.nav__list}>

                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']} ${classes['nav__list-item--title']}`}>


                        <Link to='/'>
                            <FontAwesomeIcon icon={faPuzzlePiece} />
                            &nbsp;{t("app.logo")}
                        </Link>


                    </li>

                    <menu className={classes['nav__list-menu']}>


                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>
                            <Link to='/'>{t("app.home")}</Link>
                        </li>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/sklep'>{t("app.shop")}</Link>
                        </li>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/dodaj-produkt'>{t("app.newProduct")}</Link>
                        </li>
                    </menu>
                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']}`}>

                        <Link to='/koszyk' >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className={`${classes['nav__list-item--quantity']}`}>{cartItems.length}</p>
                        </Link>
                    </li>

                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']}`}>


                        <Link to='logowanie' >

                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>

                    <li className={classes['nav__list-item']}>

                        <button className='btn-language' onClick={changeLanguage}>
                            <span>{i18n.language}</span>
                        </button>
                    </li>
                </ul>
            </nav>

            <nav className={classes.navToggle}>
                <button className={classes.btn} onClick={handleToggleNavigation}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <Link className={classes.navToggle__logo} to='/'>
                    <FontAwesomeIcon icon={faPuzzlePiece} />
                    &nbsp;{t("app.logo")}
                </Link>

                <CSSTransition in={isOpen} timeout={300} classNames={classes.navToggle} unmountOnExit>
                    <ul className={classes.navToggle__list}>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>
                            <Link to='/'>Strona głóna</Link>
                        </li>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/produkty'>Sklep</Link>
                        </li>


                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/dodaj-produkt'>Dodaj produkt</Link>
                        </li>
                        <div className={classes['navToggle__list-item--icons']}>
                            <li className={`${classes['nav__list-item']}`}>


                                <Link to='/koszyk' >
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
                                    <p className={`${classes['navToggle__list-item--quantity']}`}>{cartItems.length}</p>
                            </li>

                            <li className={`${classes['nav__list-item']}`}>


                                <Link to='logowanie' >

                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>

                            <li className={classes['nav__list-item']}>


                                <button className='btn-language' onClick={changeLanguage}>
                                    <span>{i18n.language}</span>
                                </button>


                            </li>
                        </div>
                    </ul>
                </CSSTransition>
            </nav>

        </>
    )
};

export default Nav;
