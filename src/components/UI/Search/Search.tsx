import React, { ChangeEvent, useRef, useState } from 'react'
import classes from './Search.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  id?: string;
}

const Search = ({ id }: Props) => {

  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  if(ref.current) {
    ref.current.focus();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (

    <input className={classes.search__input} type="text" onChange={handleChange} ref={ref} id={id} value={value} placeholder='Wyszukaj produkt' />
  )
}

export default Search