import { useState, useContext, createContext } from 'react';

const StepperContext = createContext();

export function StepperhProvider({ children }) {
    const stepper = useStepperProvider();
    return <StepperContext.Provider value={stepper}> {children} </StepperContext.Provider>;
}


export const useStepper = () => {
    return useContext(StepperContext);
};

function useStepperProvider() {
    const totalSteps = 3;
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
        user_full_name: '',
        user_email: '',
        user_nationality: '',
        user_phone: '',
        user_password: '',
        user_password_confirmation: '',
    });
    const [companyData, setCompanyData] = useState({
        company_name: '',
        company_address: '',
        company_phone: '',
        company_business_email: '',
        company_country_id: '',
        company_city_id: '',
        company_extra_data: '',
    });
    const [errors, setErrors] = useState({});
    return {
        errors,
        setErrors,
        userData,
        setUserData,
        companyData,
        setCompanyData,
        totalSteps,
        currentStep,
        setCurrentStep
    }
}