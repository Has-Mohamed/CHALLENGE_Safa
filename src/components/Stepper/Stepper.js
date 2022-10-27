import StepperIndicator from './StepperIndicator';
import UserInfo from '../UserInfo';
import CompanyInfo from '../CompanyInfo';
import { useStepper } from '../../context/StepperContext';

export default function Stepper() {
    const { totalSteps, currentStep, setCurrentStep, errors, userData, companyData } = useStepper();

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
    const currentStepComponent = renderCurrentStep();
    const stepperHasError = Object.values(errors).some(error => error !== null);
    const userDataHasEmptyValues = Object.values(userData).some(user => user === '');
    const companyDataHasEmptyValues = Object.values(companyData).some(company => company === '');
    const nextButtonDisabled = stepperHasError || (currentStep === 1 && userDataHasEmptyValues) || (currentStep === 2 && companyDataHasEmptyValues);

    function nextSteps() {
        if (!stepperHasError && ((currentStep === 1 && !userDataHasEmptyValues) || (currentStep === 2 && !companyDataHasEmptyValues))) {
            setCurrentStep(() => currentStep < totalSteps && currentStep + 1);
        }
    }

    function backStep() {
        setCurrentStep(() => currentStep > 0 && currentStep - 1);
    }

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <section className='stepper_container'>
            <StepperIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <form id="signupForm" onSubmit={handleSubmit}>
                {currentStepComponent}
                {currentStep > 1 &&
                    <button type='button' onClick={backStep}>back</button>
                }
                {currentStep < totalSteps &&
                    <button type='button' disabled={nextButtonDisabled} onClick={nextSteps}>next</button>
                }
                {currentStep === totalSteps &&
                    <button type='submit'>confirm</button>
                }
            </form>
        </section>
    )
}
