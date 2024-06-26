import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { act } from 'react-dom/test-utils';

describe('Footer Component', () => {
    test('renders footer element', () => {
        const { container } = render(<Footer />);
        const footerElement = container.querySelector('footer');
        expect(footerElement).toBeInTheDocument();
    });
    test('renders footer text', () => {
        render(<Footer />);
        const footerElement = screen.getByText('Kunegunda Kosek');
        expect(footerElement).toBeInTheDocument();
    });

    test('matches snapshot', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
