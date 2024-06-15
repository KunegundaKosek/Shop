import classes from './Button.module.scss';

type Props = {
    children: JSX.Element | JSX.Element[] | string;
    onClick?: () => void;
    className?: string;
}
const Button = ({children, onClick, className}: Props) => {
    return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
