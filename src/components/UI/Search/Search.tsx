import React, { ChangeEvent, useRef, useState } from 'react'
import classes from './Search.module.scss';

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
}

const Search = ({ id, onChange, value }: Props) => {

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
      placeholder='Szukaj produktów...'
    />
  )
}

export default Search;