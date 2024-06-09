import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserPreferencesProvider from './context/UserPreferencesContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter >
            <UserPreferencesProvider>
                <App />
            </UserPreferencesProvider>
        </BrowserRouter>
    </React.StrictMode>
);
