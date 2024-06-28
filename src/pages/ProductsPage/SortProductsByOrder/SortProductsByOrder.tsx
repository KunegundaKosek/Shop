import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import Card from '../../../components/UI/Card/Card';
import classes from '../ProductsByCategory/ProductsByCategoryList.module.scss';
import Button from '../../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

type Props = {
    order: string;
};

const SortProductsByOrder = ({ order }: Props) => {
    const navigation = useNavigate();

    const { sortProductsByOrder, productsList } = useContext(ProductContext);

    const handleClick = () => {
        navigation('/shop');
    };

    useEffect(() => {
        sortProductsByOrder(order);
    }, []);

    return (
        <section className={classes.productListPage}>
            <Button
                className={classes.productListPage__button}
                onClick={handleClick}
            >
                Powrót
            </Button>
            <ul className={classes.productsList}>
                {productsList.map(product => (
                    <li key={product.id} className={classes.product}>
                        <Card className={classes.card}>
                            <h3 className={classes.product__title}>
                                {product.title}
                            </h3>
                            <img
                                className={classes.product__images}
                                src={product.images[0]}
                                alt={product.title}
                            />
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default SortProductsByOrder;

// import React, { useContext, useEffect } from 'react';
// import { ProductContext } from '../../../context/ProductContext';
// import Card from '../../../components/UI/Card/Card';
// import classes from '../ProductsByCategory/ProductsByCategoryList.module.scss';
// import Button from '../../../components/UI/Button/Button';
// import { useNavigate } from 'react-router-dom';
// import SingleProduct from '../SingleProduct/SingleProduct';

// type Props = {
//     order: string;
// };

// const SortProductsByOrder = ({ order }: Props) => {
//     const navigation = useNavigate();

//     const { sortProductsByOrder, productsList } = useContext(ProductContext);

//     const handleClick = () => {
//         navigation('/shop');
//     };

//     useEffect(() => {
//         sortProductsByOrder(order);
//     }, []);

//     return (
//         <section className={classes.productListPage}>
//             <Button
//                 className={classes.productListPage__button}
//                 onClick={handleClick}
//             >
//                 Powrót
//             </Button>

//             <ul>
//                 {productsList.map((product) => (
//                     <SingleProduct
//                         key={product.id}
//                         product={product}
//                         handleDelete={(id) => {

//                         }}
//                         openModal={(id) => {

//                         }}
//                     />
//                 ))}
//             </ul>

//         </section>
//     );
// };

// export default SortProductsByOrder;
