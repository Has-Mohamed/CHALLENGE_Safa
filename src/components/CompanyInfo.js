import { Input } from './Input';
import { SelectInput } from './SelectInput';
import { useStepper } from '../context/StepperContext';
import { isValidEmail, isValueEmpty, isValidNumber } from '../helper/formValidation';

export default function CompanyInfo() {
    const { companyData, setCompanyData, errors, setErrors } = useStepper();
    // console.log(companyData);
    function handleChange(e) {
        let type = e.target.type;
        let name = e.target.name;
        let value = e.target.value;
        let placeholder = e.target.placeholder;
        // check if value is empty
        if (isValueEmpty(value)) {
            setErrors({ ...errors, [name]: `Please ${placeholder}` });
        } else if (type === 'email' && !isValidEmail(value)) {
            setErrors({ ...errors, [name]: 'Please Enter Valid Business Email' });
        } else if (type === 'tel' && !isValidNumber(value)) {
            setErrors({ ...errors, [name]: `Please ${placeholder}` });
        } else {
            setErrors({ ...errors, [name]: null });
        }
        setCompanyData({ ...companyData, [name]: value });
    }
    return (
        <div>
            <h1 className='text-center'>Verfiy your company</h1>
            <div className="step">
                <h2 className='text-center text-sm text-rg'>Entering this information correctly will facilitate the company verification process</h2>
                <Input
                    type="text"
                    name="company_name"
                    label="Company Name"
                    placeholder="Enter your Company Name"
                    onChange={handleChange}
                    value={companyData['company_name']}
                    error={errors['company_name']}
                />
                <Input
                    type="text"
                    name="company_address"
                    label="Address"
                    placeholder="Enter your Address"
                    onChange={handleChange}
                    value={companyData['company_address']}
                    error={errors['company_address']}
                />
                <Input
                    type="email"
                    name="company_business_email"
                    label="Business Email"
                    placeholder="Enter your Business Email"
                    onChange={handleChange}
                    value={companyData['company_business_email']}
                    error={errors['company_business_email']}
                />
                <div className="row row-gap" style={{ margin: '-1em 0' }}>
                    <SelectInput
                        label="Country"
                        name="company_country_id"
                        placeholder="Choose Country"
                        classes="w-50 "
                        options={['Egypt', 'UAE', 'KSA', 'Jordan', 'Qatar']}
                        selectedValue={companyData['company_country_id']}
                        error={errors['company_country_id']}
                        onChange={handleChange}
                    />

                    <SelectInput
                        label="City"
                        name="company_city_id"
                        placeholder="Choose City"
                        classes="w-50 "
                        options={['Giza', 'Cairo', 'Alexandria', 'Qena', 'Ismailia', 'Minya', 'Suez', 'Aswan']}
                        selectedValue={companyData['company_city_id']}
                        error={errors['company_city_id']}
                        onChange={handleChange}
                    />
                </div>
                <div className="row row-gap" style={{ margin: '-1em 0' }}>
                    <Input
                        type="tel"
                        name="company_phone"
                        label="Phone number"
                        placeholder="Enter yout Phone Number"
                        classes="w-50"
                        countrycode="20"
                        onChange={handleChange}
                        value={companyData['company_phone']}
                        error={errors['company_phone']}
                    />
                    <Input
                        type="tel"
                        name="company_extra_data"
                        label="Phone number"
                        placeholder="Enter yout Phone Number"
                        classes="w-50"
                        countrycode="20"
                        onChange={handleChange}
                        value={companyData['company_extra_data']}
                        error={errors['company_extra_data']}
                    />
                </div>
            </div>
        </div>
    )
}
