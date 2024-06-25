import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserPreferencesProvider from './context/UserPreferencesContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ProductContextProvider } from './context/ProductContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter >
                <I18nextProvider i18n={i18n}>
                    <UserPreferencesProvider>
                        <ProductContextProvider>
                            <App />
                        </ProductContextProvider>
                    </UserPreferencesProvider>
                </I18nextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
