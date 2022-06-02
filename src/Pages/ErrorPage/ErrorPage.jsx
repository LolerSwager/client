import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Cloud404 from '../../Assets/Images/Cloud404.png';
import { useNavigate, Link} from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
    const wlp = window.location.pathname;
    const navigate = useNavigate();
    return (
        <body>
            <Header/>
            <main>
                <div className="Errorpage">
                    <img src={Cloud404} />
                    <h2>The page <span>{wlp}</span> was not found</h2>
                    <div>
                        <a onClick={() => navigate(-1)}><i class="fa-solid fa-angle-left"></i> GO Back</a>
                        <Link to="/home"><i class="fa-solid fa-house-chimney"></i> GO TO HOMEPAGE</Link>
                    </div>
                </div>
            </main>
            <Footer /> 
        </body>
    );
}