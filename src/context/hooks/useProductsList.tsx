import { useState } from "react";

export type Product = {
    id: number;
    title: string;
    desc: string;
    category: string;
    price: number;
    brand: string;
    images: string[];
}

export const useProductsList = () => {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async (query: string = "") => {
        setLoading(true);
        try {
            const url = query ? `https://dummyjson.com/products/search?q=${query}` : `https://dummyjson.com/products?limit=200`;

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

    const deleteProducts = async (id: number,) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) throw new Error('Error deleting product');

            setProductsList(prevProducts => prevProducts.filter(product => product.id !== id));

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

    const addProduct = async (newProduct: Product) => {
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });

            if (!response.ok) throw new Error('Failed to add product');

            const product = await response.json();

            console.log('Otrzymany produkt z API', product);

            setProductsList(prev => {
                const updatedList = [product, ...prev];
                console.log('Zaktualowana list produktów', updatedList)
                return updatedList;
            });

            } catch (error) {
                console.log(error);
            }
        }

    const getByCategory = async(category: string) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);

            if(!response.ok) throw new Error('Error fetching products');

            const {products} = await response.json();

            setProductsList(products);
            console.log(products);
        } catch (error) {
            console.log(error);
        }
    } 

    const sortProductsByOrder = async (order: string) => {
        try {
            const response = await fetch(`https://dummyjson.com/products?sortBy=title&order=${order}`);

            if(!response.ok) throw new Error('Error fetching products');

            const {products} = await response.json();

            setProductsList(products);

        } catch(error) {
            console.log(error);
        }
    }

    return {
            productsList,
            setProductsList,
            loading,
            fetchProducts,
            deleteProducts,
            updateProducts,
            addProduct,
            getByCategory,
            sortProductsByOrder
        };
    };

