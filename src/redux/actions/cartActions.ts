import { Product } from "../../context/hooks/useProductsList";

export const addToCart = (product: Product, quantity: number) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: quantity
        }
    }
}

export const removeToCart = (productId: number) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId
        }
    }
}