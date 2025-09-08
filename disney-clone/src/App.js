import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from "./components/Login";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {N8N} from "./components/N8N";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/n8n" element={<N8N/>}/>
                </Routes>
            </Router>
        </div>
    );
}


const Test = () => {
    return (
        <div className="test-page">
            <h1>Testing page</h1>
        </div>
    )
}

export default App;
