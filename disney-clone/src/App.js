import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from "./components/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/test" element={<Test/>}/>
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
