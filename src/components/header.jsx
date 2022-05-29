import imglogo from '../imges/logo.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <nav>
            <div className='logo'>
                <Link to="/home"><img src={imglogo} alt="logo" /></Link>
            </div>
            <ul>
                <li><Link to="/webtools"><i class="fa-solid fa-toolbox"></i> WebTools</Link></li>
                <li><Link to="/dashbord"><i class="fa-regular fa-chart-bar"></i> Dashbord</Link></li>
                <li><Link to="/about"><i class="fa-solid fa-address-card"></i> About Us</Link></li>
                <li><a href="https://discord.gg/uaCRvZU" target="_blank"><i class="fa-brands fa-discord"></i> Discord</a></li>
            </ul>
            <div className='login'>
                <Link to="/loginPage"><i class="fa-solid fa-user"></i> Login</Link>
            </div>
        </nav>
    </header>
  );
}