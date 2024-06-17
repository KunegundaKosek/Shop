import { useState } from "react";

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    brand: string;
    images: string[];
}

export const useProductsList = () => {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async (page: number, limit: number, query: string = "") => {
        setLoading(true);
        try {
            const url = query ? `https://dummyjson.com/products/search?q=${query}` : `https://dummyjson.com/products?page=${page}&limit=${limit}&skip=${page * limit - limit}`;

            const response = await fetch(url);

            if (!response.ok) throw new Error('Error fetching products');

            const { products } = await response.json();

            setProductsList(products);

        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProducts = async (id: number, currentPage: number, productsPerPage: number) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) throw new Error('Error deleting product');

            console.log(productsList)

            setProductsList(prevProducts => prevProducts.filter(product => product.id !== id));

            console.log(productsList)
            // usunięte produkty utwóz stan i tam je przechowaj
            // const message = await response.json();
            // console.log(message);

        } catch (error) {
            console.log(error);
        }
    }

    const updateProducts = async (id: number, updatedProduct: Partial<Product>) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct)
            })

            if (!response.ok) throw new Error('Error updating product');
            const updatedData = await response.json();


            setProductsList(prev => prev.map(product => product.id === id ? { ...product, ...updatedData } : product));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        productsList,
        loading,
        fetchProducts,
        deleteProducts,
        updateProducts,
    };
};

