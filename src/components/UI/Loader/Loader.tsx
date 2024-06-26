import React from 'react';
import { Puff } from 'react-loader-spinner';
import classes from './Loader.module.scss';

const Loader = () => {
    return (
        <Puff
            visible={true}
            height={80}
            width={80}
            color="pink"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass={classes.loader}
        />
    );
};

export default Loader;
