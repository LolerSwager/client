import './style.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage'
import WebTools from './Pages/WebTools'
import About from './Pages/about'
function App() {
    return (
        <Router>
            <Routes>
                <Route exact={true} path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/webtools' element={<WebTools />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/api' />
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </Router>
    );
}

export default App;