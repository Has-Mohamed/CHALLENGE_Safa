import { Stepper } from './components/Stepper';
import { useStepper } from './context/StepperContext';
import './App.css';

function App() {
    const { totalSteps, currentStep, setCurrentStep } = useStepper();
    return (
        <div className="App container">
            <Stepper totalSteps={totalSteps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
    );
}

export default App;
