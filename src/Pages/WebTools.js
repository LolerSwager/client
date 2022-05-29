import Header from "../components/header";
import Footer from "../components/footer";
import CodeCover from '../imges/CodeCover.png';
import Tarkov from '../imges/tarkov.png';
import eve from '../imges/eve.png';

export default function WebTools() {
    return (
        <body>
            <Header/>
            <main>
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