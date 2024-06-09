import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

test('renders nav component', () => {
    const { getByText, getByRole } = render(<Nav />);

    // Sprawdź czy komponent renderuje nazwę sklepu
    const shopNameElement = getByText(/REACT\+TS Shop/i);
    expect(shopNameElement).toBeInTheDocument();

    // Sprawdź czy komponent renderuje linki do stron
    const homeLink = getByText(/Strona główna/i);
    expect(homeLink).toBeInTheDocument();

    const productsLink = getByText(/Sklep/i);
    expect(productsLink).toBeInTheDocument();

    const addProductLink = getByText(/Dodaj produkt/i);
    expect(addProductLink).toBeInTheDocument();

    // Sprawdź czy komponent renderuje ikony
    const cartIcon = getByRole('link', { name: /koszyk/i });
    expect(cartIcon).toBeInTheDocument();

    const userIcon = getByRole('link', { name: /logowanie/i });
    expect(userIcon).toBeInTheDocument();
});

test('renders dark mode toggle', () => {
    const { getByTestId } = render(<Nav />);

    // Sprawdź czy komponent renderuje przełącznik trybu ciemnego
    const darkModeToggle = getByTestId('dark-mode-toggle');
    expect(darkModeToggle).toBeInTheDocument();
});
