import './Button.css';

export default function Button({ size, children }) {
    return (
        <button className={size}>
        {children}
        </button>
    );
}