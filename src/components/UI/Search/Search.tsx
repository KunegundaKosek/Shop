import React, { ChangeEvent, useRef, useState } from 'react';
import classes from './Search.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    value?: string;
};

const Search = ({ id, onChange, value }: Props) => {
    const { t } = useTranslation();

    const ref = useRef<HTMLInputElement>(null);

    if (ref.current) {
        ref.current.focus();
    }

    return (
        <input
            className={classes.search__input}
            type="text"
            onChange={onChange}
            ref={ref}
            id={id}
            value={value}
            placeholder={`${t('app.inputPlaceholder')}`}
        />
    );
};

export default Search;
