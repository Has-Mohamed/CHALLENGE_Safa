import { useState } from 'react';
import StepperIndicator from './StepperIndicator';
import UserInfo from '../UserInfo';
import CompanyInfo from '../CompanyInfo';
import { useStepper } from '../../context/StepperContext';
import FinalStep from './../FinalStep';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Stepper() {
    const { totalSteps, currentStep, setCurrentStep, errors, userData, companyData } = useStepper();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    function renderCurrentStep() {
        switch (currentStep) {
            case 1:
                return <UserInfo />
            case 2:
                return <CompanyInfo />
            case 3:
                return <FinalStep />
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

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        Object.keys(userData).forEach(key => formData.append(key, userData[key]));
        Object.keys(companyData).forEach(key => formData.append(key, companyData[key]));
        const config = {
            method: 'get',
            url: 'https://dummyjson.com/products/1',
            // url: 'https://id.safav2.io.safavisa.com/register',
            data: formData
        };
        try {
            await axios(config).then(res => {
                // reset state
                Object.keys(userData).forEach(key => userData[key] = '');
                Object.keys(companyData).forEach(key => companyData[key] = '');
                navigate('/congratz');
            });
        } catch (error) {
            // show message that somthing went wrong
            console.log('somthing went wrong, please try again later');
            setLoading(false);
        }
    }

    return (
        <section className='stepper_container'>
            <StepperIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <form id="signupForm" onSubmit={handleSubmit}>
                {currentStepComponent}

                <div className='stepper_btns'>
                    {currentStep > 1 &&
                        <button type='button' className="btn btn-secondary mx-1" onClick={backStep}>back</button>
                    }
                    {currentStep < totalSteps &&
                        <button type='button' className='btn btn-primary btn-lg' disabled={nextButtonDisabled} onClick={nextSteps}>
                            next
                        </button>
                    }
                    {currentStep === totalSteps &&
                        <button type='submit' className="btn btn-primary btn-lg" disabled={loading}>confirm</button>
                    }
                </div>
            </form>
        </section>
    )
}
