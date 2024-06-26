import React from 'react';
import classes from './Modal.module.scss';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
    className?: string;
};

const Modal = ({ isOpen, onClose, children, className }: Props) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <Card className={classes.modal}>
            <Button className={classes.modal__button} onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
            </Button>
            {children}
        </Card>,
        document.getElementById('modal-root')! as HTMLDivElement
    );
};

export default Modal;
