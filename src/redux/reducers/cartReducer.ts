import { Product } from '../../context/hooks/useProductsList';

// Definicja typu dla elementu koszyka
type CartItem = {
    product: Product;
    quantity: number;
};

// Definicja typu dla stanu koszyka
type CartState = {
    items: CartItem[];
    totalAmount: number;
};

// Początkowy stan koszyka
const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

// Reducer dla koszyka
const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Sprawdzamy, czy produkt już istnieje w koszyku
            const existingItemIndex = state.items.findIndex(
                item => item.product.id === action.payload.product.id
            );
            let updatedItems;
            if (existingItemIndex !== -1) {
                // Jeśli produkt istnieje, aktualizujemy jego ilość
                updatedItems = state.items.map(item =>
                    item.product.id === action.payload.product.id
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
            } else {
                // Jeśli produkt nie istnieje, dodajemy nowy
                updatedItems = [
                    ...state.items,
                    {
                        product: action.payload.product,
                        quantity: action.payload.quantity,
                    },
                ];
            }
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedItems.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                ),
            };
        case 'REMOVE_FROM_CART':
            const remainingItems = state.items.filter(
                item => item.product.id !== action.payload.productId
            );
            return {
                ...state,
                items: remainingItems,
                totalAmount: remainingItems.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
