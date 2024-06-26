import cartReducer from '../reducers/cartReducer';
import { combineReducers, createStore } from 'redux';

export const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
