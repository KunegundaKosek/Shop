import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react'
import { Product } from '../../../context/hooks/useProductsList';
import classes from './ProductsList.module.scss';
import Modal from '../../../components/UI/Modal/Modal';
import ProductsListEmty from '../ProductsListEmpty/ProductsListEmty';
import Form from '../../../components/UI/Form/Form';
import { Action, initialState, reducer } from './productReducer';
import SingleProduct from '../SingleProduct/SingleProduct';

export type Props = {
    handleDelete: (id: number) => void;
    productsList: Product[];
    loading: boolean;
    updateProducts: (id: number, updatedProduct: Partial<Product>) => void;
}

const ProductsList = ({ handleDelete, productsList, loading, updateProducts }: Props) => {

    console.log('productsList', productsList);

    const [isOpen, setIsOpen] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);

    const [editingProductId, setEditingProductId] = useState<number | null>(null);

    const openModal = (id: number) => {
        setIsOpen(true);
        setEditingProductId(id);
        const product = productsList.find(product => product.id === id);
        if (product) {
            dispatch({ type: 'SET_TITLE', payload: product.title });
            dispatch({ type: 'SET_IMAGE', payload: product.images[0] });
            dispatch({ type: 'SET_PRICE', payload: product.price });
            dispatch({ type: 'SET_DESCRIPTION', payload: product.desc });
            dispatch({ type: 'SET_BRAND', payload: product.brand });
        }
    }
    const closeModal = () => {
        setIsOpen(false);
        setEditingProductId(null);
        dispatch({ type: 'SET_TITLE', payload: initialState.title });
        dispatch({ type: 'SET_IMAGE', payload: initialState.image });
        dispatch({ type: 'SET_PRICE', payload: initialState.price });
        dispatch({ type: 'SET_DESCRIPTION', payload: initialState.description });
        dispatch({ type: 'SET_BRAND', payload: initialState.brand });

    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        let action;
        if (id === 'price') {
            action = { type: `SET_${id.toUpperCase()}`, payload: Number(value) };
        } else {
            action = { type: `SET_${id.toUpperCase()}`, payload: value };
        }

        dispatch(action as Action);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingProductId !== null) {
            updateProducts(editingProductId, {
                title: state.title,
                images: [state.image],
                price: state.price
            })
        }
        setIsOpen(false);
    }

    return (
        <>

            {productsList.length === 0 ? (
                <ProductsListEmty
                />
            ) : (
                <ul className={classes.products__list}>
                    {productsList.map((product) => (
                        <SingleProduct key={product.id} product={product} handleDelete={handleDelete} openModal={openModal} />

                    ))}

                    {/* <PaginationUI currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} totalPages={productsPerPage} /> */}
                </ul>


            )}

            {isOpen && (
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h1 className={classes.editModal__title}>Edutuj produkt</h1>
                    <Form onSubmit={handleSubmit} value={state} onChange={handleOnChange} />
                </Modal>
            )}

        </>
    )
}

export default ProductsList

