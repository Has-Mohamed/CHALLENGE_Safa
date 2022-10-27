import { Stepper } from './components/Stepper';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ThanksPage from './components/ThanksPage';

function App() {
    return (
        <div className="App container">
            <Routes>
                <Route path='/' element={<Stepper />} />
                <Route path='/congratz' element={<ThanksPage />} />
            </Routes>
        </div >
    );
}

export default App;
