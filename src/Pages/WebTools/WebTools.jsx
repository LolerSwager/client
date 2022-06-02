import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import CodeCover from '../../Assets/Images/CodeCover.png';
import Tarkov from '../../Assets/Images/tarkov.png';
import eve from '../../Assets/Images/eve.png';
import './WebTools.css';

export default function WebTools() {
    return (
        <body>
            <Header/>
            <main>
                <h2>WebTools</h2><br/>
                <div className="webtools">
                    <section>
                        <article>
                            <img src={Tarkov}/>
                            <h3>Tarkov</h3>
                            <p>item info cal</p>
                            <a href="https://tarkov.lolerswager.com" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Tarkov</a>
                        </article>
                        <article>
                            <img src={eve}/>
                            <h3>EVE Online</h3>
                            <p>eve online mining cal. <span>Not made by me</span></p>
                            <a href="https://eve-online-chc.bitbucket.io/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Eve online</a>
                        </article>
                        <article>
                            <img src={CodeCover}/>
                            <h3>FileTransfer</h3>
                            <p>Upload a file up to ~150MB</p>
                            <a href="https://test.lolerswager.com/FileTransfer/" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> FileTransfer</a>
                        </article>
                        <article>
                            <img src={CodeCover}/>
                            <h3>Img Upload</h3>
                            <p>Upload a img or video this was a school project.<span> I haven't finished it. </span></p>
                            <a href="https://www.img.lolerswager.com//" target="_blank"><i class="fa-solid fa-up-right-from-square"></i> Img Upload</a>
                        </article>
                    </section>
                </div>
            </main>
            <Footer /> 
        </body>
    );
}