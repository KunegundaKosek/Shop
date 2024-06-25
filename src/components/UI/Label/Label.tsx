import React from 'react';
import classes from './Label.module.scss';
import Input from '../Input/Input';

type Props = {
    htmlFor: string;
    children?: string;
}

const Label = ({ htmlFor, children }: Props) => {
    return (
        <label className={classes.label} htmlFor={htmlFor}>{children}</label>
      
    )
};

export default Label;
