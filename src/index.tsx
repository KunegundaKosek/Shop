import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserPreferencesProvider from './context/UserPreferencesContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter >
        <I18nextProvider i18n={i18n}>
            <UserPreferencesProvider>
                <App />
            </UserPreferencesProvider>
        </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
