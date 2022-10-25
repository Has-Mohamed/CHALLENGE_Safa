import StepperIndicator from './StepperIndicator';
import UserInfo from '../UserInfo';
import CompanyInfo from '../CompanyInfo';

export default function Stepper({ totalSteps, currentStep, setCurrentStep }) {
    function renderCurrentStep() {
        switch (currentStep) {
            case 1:
                return <UserInfo />
            case 2:
                return <CompanyInfo />
            case 3:
                return <h2>third</h2>
            default:
                return <UserInfo />
        }
    }
    function handleSteps() {
        setCurrentStep(() => currentStep < totalSteps && currentStep + 1);
    }
    function backStep() {
        setCurrentStep(() => currentStep > 0 && currentStep - 1);
    }
    const currentStepComponent = renderCurrentStep();
    return (
        <section className='stepper_container'>
            <StepperIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <h1 className='text-center'>Tell us more about you</h1>
            <form id="signupForm">
                <div className="step">
                    {currentStepComponent}
                </div>
                {currentStep > 1 && <button type='button' onClick={backStep}>back</button>}
                {currentStep < totalSteps && <button type='button' onClick={handleSteps}>next</button>}
                {currentStep === totalSteps && <button type='submit' onClick={handleSteps}>confirm</button>}
            </form>
        </section>
    )
}
