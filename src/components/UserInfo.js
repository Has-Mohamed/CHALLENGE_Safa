import { useRef } from 'react'
import { Input } from './Input'
import { SelectInput } from './SelectInput';

export default function UserInfo() {
    const passwordRef = useRef(null);
    const passwordConfirmationRef = useRef(null);
    function handleChange(e) {
        if (e.target.value === '') {

        }
    }
    function passwordValidation(e) {
        if (e.target.value !== passwordConfirmationRef?.current.value) {
            console.log('error');
        } else {
            console.log('not error');
        }
    }
    function passwordConfirmation(e) {
        if (e.target.value !== passwordRef?.current.value) {
            console.log('error');
        } else {
            console.log('not error');
        }
    }
    return (
        <>
            {/* <h1 className='text-center'>Tell us more about you</h1> */}
            <Input
                type="text"
                name="user_full_name"
                label="Full Name"
                placeholder="Enter your Full Name"
                onChange={handleChange}
            />
            <Input
                type="email"
                name="user_email"
                label="Business Email"
                placeholder="Enter your Business Email"
                onChange={handleChange}
            />
            <div className="row row-gap" style={{ margin: '-1em 0' }}>
                <SelectInput
                    label="Country"
                    name="user_country"
                    placeholder="Choose Country"
                    classes="w-50 "
                    options={['Egypt', 'UAE', 'KSA', 'Jordan', 'Qatar']}
                    selectedValue={''}
                />
                <Input
                    type="tel"
                    name="user_phone"
                    label="Phone number"
                    placeholder="Enter yout Phone Number"
                    classes="w-50"
                    countrycode="20"
                    onChange={handleChange}
                />
            </div>

            <Input
                type="password"
                name="user_password"
                label="Password"
                placeholder="Choose Password"
                onChange={passwordValidation}
                ref={passwordRef}
            />
            <Input
                type="password"
                name="user_password_confirmation"
                label="Repeat Password"
                placeholder="Repeat your Password"
                onChange={passwordConfirmation}
                ref={passwordConfirmationRef}
            />
        </>
    )
}
