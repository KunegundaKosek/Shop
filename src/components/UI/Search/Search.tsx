import React, { ChangeEvent } from 'react'
import classes from './Search.module.scss';
type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    id: string;
    value: string;
}

const Search = ({onChange, id, value}: Props) => {
  return (
    <input className={classes.search} type="text" onChange={onChange} id={id} value={value} />
  )
}

export default Search