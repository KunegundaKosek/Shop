import React from 'react';
import classes from './Modal.module.scss';
import { Card } from '@mui/material';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
}

const Modal = ({ isOpen, onClose, children }: Props) => {
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
