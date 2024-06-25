import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsByCategory = () => {

    const navigation = useNavigate();

    const handleClick = (category: string) => {
        navigation(`/shop/${category}`);
    }

    const handleClickByOrder = (order: string) => {
        navigation(`/shop/order-${order}`);
    }
    return (
        <div>
            <button onClick={() => handleClick('smartphones')}>Telefony</button>

            <button onClick={() => handleClick('beauty')}>Uroda</button>
            <button onClick={() => handleClick('fragrances')}>Perfumy</button>
            <button onClick={() => handleClick('furniture')}>Meble</button>
            <button onClick={() => handleClick('groceries')}>Artykuły spożywcze</button>
            <button onClick={() => handleClick('home-decoration')}>Dekoracje domowe</button>
            <button onClick={() => handleClick('kitchen-accessories')}>Akcesoria do kuchni</button>

            <button onClick={() => handleClickByOrder('asc')}>
                Kategoria alfabetycznie A-Z
            </button>

            <button onClick={() => handleClickByOrder('desc')}>
                Kategoria alfabetycznie Z-A
            </button>

        </div>
    )
}

export default ProductsByCategory