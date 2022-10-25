import { Input } from './Input';
import { SelectInput } from './SelectInput';

export default function CompanyInfo() {
    return (
        <div>
            <Input
                type="text"
                name="company_name"
                label="Company Name"
                placeholder="Enter your Company Name"
            // onChange={handleChange}
            />
            <Input
                type="text"
                name="company_address"
                label="Address"
                placeholder="Enter your Address"
            // onChange={handleChange}
            />
            <Input
                type="email"
                name="company_business_email"
                label="Business Email"
                placeholder="Enter your Business Email"
            // onChange={handleChange}
            />
            <div className="row row-gap" style={{ margin: '-1em 0' }}>
                <SelectInput
                    label="Country"
                    name="company_country_id"
                    placeholder="Choose Country"
                    classes="w-50 "
                    options={['Egypt', 'UAE', 'KSA', 'Jordan', 'Qatar']}
                    selectedValue={''}
                />

                <SelectInput
                    label="City"
                    name="company_city_id"
                    placeholder="Choose City"
                    classes="w-50 "
                    options={['Giza', 'Cairo', 'Alexandria', 'Qena', 'Ismailia', 'Minya', 'Suez', 'Aswan']}
                    selectedValue={''}
                />
            </div>
            <div className="row row-gap" style={{ margin: '-1em 0' }}>
                <Input
                    type="tel"
                    name="user_phone"
                    label="Phone number"
                    placeholder="Enter yout Phone Number"
                    classes="w-50"
                    countrycode="20"
                // onChange={handleChange}
                />
                <Input
                    type="tel"
                    name="user_phone"
                    label="Phone number"
                    placeholder="Enter yout Phone Number"
                    classes="w-50"
                    countrycode="20"
                // onChange={handleChange}
                />
            </div>
        </div>
    )
}
