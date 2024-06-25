import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { Product, useProductsList } from "./hooks/useProductsList";

type ProductContextType = {
    productsList: Product[];
    setProductsList: Dispatch<SetStateAction<Product[]>>;
    loading: boolean;
    fetchProducts: () => void;
    deleteProducts: (id: number) => void;
    updateProducts: (id: number, updatedProduct: Product) => void,
    addProduct: (newProduct: Product) => void;
    getByCategory: (category: string) => void;
    sortProductsByOrder: (order: string) => void;
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const ProductContextProvider = ({ children }: Props) => {

    const { productsList, setProductsList, loading, fetchProducts, deleteProducts, updateProducts, addProduct, getByCategory, sortProductsByOrder } = useProductsList();

    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <ProductContext.Provider value={{
            productsList,
            setProductsList,
            loading,
            fetchProducts,
            deleteProducts,
            updateProducts,
            addProduct,
            getByCategory,
            sortProductsByOrder
        }}>
            {children}
        </ProductContext.Provider>
    )
}