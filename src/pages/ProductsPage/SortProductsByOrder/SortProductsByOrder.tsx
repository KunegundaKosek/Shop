import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../../context/ProductContext'
import Card from '../../../components/UI/Card/Card';

type Props = {
    order: string;
}

const SortProductsByOrder = ({order}: Props) => {

    const { sortProductsByOrder, productsList } = useContext(ProductContext);

    useEffect(() => {
        sortProductsByOrder(order);
    }, []);

  return (
    <div>
        {productsList.map((product) => (
            <Card key={product.id}>
                <h1>{product.title}</h1>
                <img src={product.images[0]} alt="" />
            </Card>
        ))}
    </div>
  )
}

export default SortProductsByOrder