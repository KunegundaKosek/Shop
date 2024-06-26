import React, { ChangeEvent } from 'react';
import classes from './Input.module.scss';
export type Props = {
    type: 'text' | 'password' | 'email' | 'number';
    id: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    name?: string;
};
const Input = ({
    type,
    id,
    value,
    onChange,
    required,
    disabled,
    placeholder,
    className,
    name,
}: Props) => {
    return (
        <input
            className={`${classes.input} ${className}`}
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            name={name}
        />
    );
};

export default Input;
