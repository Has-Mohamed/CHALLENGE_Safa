import { useRef } from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput';
import { useStepper } from '../context/StepperContext';
import { isValidEmail, isValueEmpty, isValidNumber, isPasswordValid } from '../helper/formValidation';

export default function UserInfo() {
    const { userData, setUserData, errors, setErrors } = useStepper();
    const passwordRef = useRef(null);
    const passwordConfirmationRef = useRef(null);
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
        } else if (type === 'password' && !isPasswordValid(value)) {
            setErrors({ ...errors, [name]: `Your Password must be at least 8 characters` });
        } else if (type === 'password' && (value !== passwordRef?.current.value)) {
            setErrors({ ...errors, [name]: `Passowrd and confirmation password must be the` });
        } else {
            setErrors({ ...errors, [name]: null });
        }
        setUserData({ ...userData, [name]: value });
    }

    return (
        <>
            <h1 className='text-center'>Tell us more about you</h1>
            <div className="step">
                <Input
                    type="text"
                    name="user_full_name"
                    label="Full Name"
                    placeholder="Enter your Full Name"
                    onChange={handleChange}
                    value={userData['user_full_name']}
                    error={errors['user_full_name']}
                />
                <Input
                    type="email"
                    name="user_email"
                    label="Business Email"
                    placeholder="Enter your Business Email"
                    onChange={handleChange}
                    value={userData['user_email']}
                    error={errors['user_email']}
                />
                <div className="row row-gap" style={{ margin: '-1em 0' }}>
                    <SelectInput
                        label="Country"
                        name="user_nationality"
                        placeholder="Choose Country"
                        classes="w-50 "
                        options={['Egypt', 'UAE', 'KSA', 'Jordan', 'Qatar']}
                        selectedValue={userData['user_nationality']}
                        error={errors['user_nationality']}
                        onChange={handleChange}
                    />
                    <Input
                        type="tel"
                        name="user_phone"
                        label="Phone number"
                        placeholder="Enter yout Phone Number"
                        classes="w-50"
                        countrycode="20"
                        onChange={handleChange}
                        value={userData['user_phone']}
                        error={errors['user_phone']}
                    />
                </div>

                <Input
                    type="password"
                    name="user_password"
                    label="Password"
                    placeholder="Choose Password"
                    onChange={handleChange}
                    value={userData['user_password']}
                    error={errors['user_password']}
                    ref={passwordRef}
                />
                <Input
                    type="password"
                    name="user_password_confirmation"
                    label="Repeat Password"
                    placeholder="Repeat your Password"
                    onChange={handleChange}
                    value={userData['user_password_confirmation']}
                    error={errors['user_password_confirmation']}
                    ref={passwordConfirmationRef}
                />
            </div>
        </>
    )
}
