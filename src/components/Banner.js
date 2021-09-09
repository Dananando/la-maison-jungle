import '../styles/Banner.css';
import logo from '../assets/logo.png';

const Banner = () => {
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Logo la maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>La maison Jungle</h1>
        </div>
    );
}

export default Banner;