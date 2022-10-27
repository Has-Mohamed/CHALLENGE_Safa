import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StepperhProvider } from './context/StepperContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StepperhProvider>
                <App />
            </StepperhProvider>
        </BrowserRouter>
    </React.StrictMode>
);