import React, { useState } from 'react'
import { Stepper } from './components/Stepper';
import './App.css';

function App() {
    const totalSteps = 3;
    const [currentStep, setCurrentStep] = useState(1);
    return (
        <div className="App container">
            <Stepper totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
    );
}

export default App;
