import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faPuzzlePiece, faBars } from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import DarkModeToggle from "react-dark-mode-toggle";
import { CSSTransition } from 'react-transition-group';


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleNavigation = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className={classes.nav}>
                <ul className={classes.nav__list}>

                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']} ${classes['nav__list-item--title']}`}>


                        <Link to='/'>
                            <FontAwesomeIcon icon={faPuzzlePiece} />
                            &nbsp;REACT+TS Shop
                        </Link>

                      
                    </li>

                    <menu className={classes['nav__list-menu']}>


                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>
                            <Link to='/'>Strona głóna</Link>
                        </li>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/sklep'>Sklep</Link>
                        </li>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--menuItem']}`}>


                            <Link to='/dodaj-produkt'>Dodaj produkt</Link>
                        </li>
                    </menu>
                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']}`}>

                        <Link to='/koszyk' >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>

                    <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']}`}>


                        <Link to='logowanie' >

                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>

                    <li className={classes['nav__list-item']}>

                        <DarkModeToggle
                            size={80}
                        />
                    </li>

                    {/* <li className={classes['nav__list-item']}>

<Link to='/'><FontAwesomeIcon icon={faRocketchat} /></Link>
</li> */}
                </ul>
            </nav>

            <nav className={classes.navToggle}>
                <button className={classes.btn} onClick={handleToggleNavigation}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <CSSTransition in={isOpen} timeout={300} classNames={classes.navToggle} unmountOnExit>
                    <ul className={classes.navToggle__list}>

                        <li className={`${classes['nav__list-item']} ${classes['nav__list-item--icons']} ${classes['nav__list-item--title']}`}>


                            <Link to='/'>
                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                REACT+TS Shop
                            </Link>
                        </li>



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
                            </li>

                            <li className={`${classes['nav__list-item']}`}>


                                <Link to='logowanie' >

                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>

                            <li className={classes['nav__list-item']}>

                                <DarkModeToggle
                                    size={80}
                                />
                            </li>
                        </div>

                        {/* <li className={classes['nav__list-item']}>

<Link to='/'><FontAwesomeIcon icon={faRocketchat} /></Link>
</li> */}
                    </ul>
                </CSSTransition>
            </nav>

        </>
    )
};

export default Nav;
