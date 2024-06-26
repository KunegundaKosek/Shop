// import { Product } from "../../context/hooks/useProductsList"

// type CartItem = {
//     product: Product;
//     quantity: number;
// }

// type CartState = {
//     items: CartItem[];
//     totalAmount: number;
// }

// const initialState: CartState = {
//     items: [],
//     totalAmount: 0,
// }

// const cartReducer = (state = initialState, action: any): CartState => {
//     switch(action.type) {
//         case "ADD_TO_CART":
//             const existingItemIndex = state.items.findIndex(item => item.product.id === action.payload.product.id);
//             let updateItems;
//             if(existingItemIndex === -1) {
//                 updateItems = state.items.map((item) => (
//                     item.product.id === action.payload.product.id ? {
//                        ...item,
//                         quantity: item.quantity + action.payload.quantity
//                     } : item
//                 ))
//             } else {
//                 updateItems = [...state.items, {
//                     product: action.payload.product,
//                     quantity: action.payload.quantity
//                 }]
//             }
//             const newItem: CartItem = {
//                 product: action.payload.product,
//                 quantity: action.payload.quantity
//             };

//             return {
//                 ...state,
//                 items: [...state.items, newItem],
//                 totalAmount: updateItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0 )
//             }
//         case "REMOVE_FROM_CART":
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.product.id !== action.payload.productId)
//             };
//         default:
//             return state;
//     }
// }

// export default cartReducer;

// import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { Product } from '../../context/hooks/useProductsList';

type CartItem = {
    product: Product;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    totalAmount: number;
};

const initialState: CartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART action payload:', action.payload);

            const existingItemIndex = state.items.findIndex(
                item => item.product.id === action.payload.product.id
            );
            let updatedItems;
            if (existingItemIndex !== -1) {
                // Update quantity if item already exists in cart
                updatedItems = state.items.map(item =>
                    item.product.id === action.payload.product.id
                        ? {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          }
                        : item
                );
            } else {
                // Add new item to cart
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
