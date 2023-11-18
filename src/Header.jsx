import './Header.css';
import Navbar from './NavBar';
import Email from './Email';

export default function Header() {
    return (
        <header>
            <Navbar />
            <div className='header-content'>
                <h2 className='title'>
                    The biggest Indian hits. The best Indian stories. All streaming here.
                </h2>
                <h2 className='inner-text'>
                    Watch anywhere. Cancel anytime.
                </h2>
                
                <Email />
            </div>
        </header>
    );
}