import { Product } from '../../context/hooks/useProductsList';

// Funkcja akcji dodająca produkt do koszyka
// Przyjmuje produkt oraz ilość jako argumenty
// Zwraca obiekt akcji o typie 'ADD_TO_CART' z produktem i ilością w ładunku

export const addToCart = (product: Product, quantity: number) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: quantity,
        },
    };
};

// Funkcja akcji usuwająca produkt z koszyka
// Przyjmuje identyfikator produktu jako argument
// Zwraca obiekt akcji o typie 'REMOVE_FROM_CART' z identyfikatorem produktu w ładunku
export const removeToCart = (productId: number) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId,
        },
    };
};
