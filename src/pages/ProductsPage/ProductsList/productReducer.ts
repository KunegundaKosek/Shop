export type State = {
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
};

export type Action =
    | { type: 'SET_TITLE'; payload: string }
    | { type: 'SET_IMAGE'; payload: string }
    | { type: 'SET_PRICE'; payload: number }
    | { type: 'SET_DESCRIPTION'; payload: string }
    | { type: 'SET_BRAND'; payload: string };

export const initialState: State = {
    title: '',
    image: '',
    price: 0,
    description: '',
    brand: '',
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload };
        case 'SET_IMAGE':
            return { ...state, image: action.payload };
        case 'SET_PRICE':
            return { ...state, price: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'SET_BRAND':
            return { ...state, brand: action.payload };
        default:
            return state;
    }
};
