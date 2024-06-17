import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react'
import Button from '../../../components/UI/Button/Button'
import { faCartArrowDown, faCirclePlus, faFaceFrown, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../context/hooks/useProductsList';
import Card from '../../../components/UI/Card/Card';
import PaginationUI from '../../../components/UI/Pagination/Pagination';
import classes from './ProductsList.module.scss';
import Modal from '../../../components/UI/Modal/Modal';
import ProductsListEmty from '../ProductsListEmpty/ProductsListEmty';
import Form from '../../../components/UI/Form/Form';
import { initialState, reducer } from './productReducer';
import SingleProduct from '../SingleProduct/SingleProduct';
import Search from '../../../components/UI/Search/Search';


export type Props = {
    handleDelete: (id: number) => void;
    productsList: Product[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    loading: boolean;
    productsPerPage: number;
    updateProducts: (id: number, updatedProduct: Partial<Product>) => void;
}

const ProductsList = ({ handleDelete, productsList, currentPage, loading, productsPerPage, setCurrentPage, updateProducts }: Props) => {

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
            dispatch({ type: 'SET_PRICE', payload: product.price.toString() });
            dispatch({ type: 'SET_DESCRIPTION', payload: product.description });
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
        dispatch({
            type: `SET_${id.toUpperCase()}` as 'SET_TITLE' | 'SET_IMAGE' | 'SET_PRICE' | 'SET_DESCRIPTION' | 'SET_BRAND', payload: value
        })
        console.log(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingProductId !== null) {
            updateProducts(editingProductId, {
                title: state.title,
                images: [state.image],
                price: parseFloat(state.price)
            })
        }
        setIsOpen(false);
    }

    return (
        <>
        <Search />
            {productsList.length === 0 ? (
                <ProductsListEmty
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    loading={loading}
                    productsPerPage={productsPerPage}
                />
            ) : (
                <ul className={classes.products__list}>
                    <SingleProduct productsList={productsList} handleDelete={handleDelete} openModal={openModal} />

                    <PaginationUI currentPage={currentPage} setCurrentPage={setCurrentPage} loading={loading} totalPages={productsPerPage} />
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

