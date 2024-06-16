import React from 'react';
import classes from './Card.module.scss';
import '../../../assets/styles/_variables.scss';

type Props = {
    className?: string;
    children: JSX.Element | JSX.Element[];
}
const Card = ({className, children}: Props) => {
    return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
