import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StepperhProvider } from './context/StepperContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StepperhProvider>
            <App />
        </StepperhProvider>
    </React.StrictMode>
);