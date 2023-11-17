import logo from '/Netflix-Brand-Logo.png';
import './Navbar.css';
import Button from './Button';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className='logo' alt="logo" />

            <div className='option'>
                <select>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                </select>
                <Button size='btn-small'>
                    Sign In
                </Button>
            </div>
        </nav>
    );
}