import { useState } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import { Input } from '../Input';
import { useOutsideClick } from '../../hooks/useClickOutside';
import { useStepper } from '../../context/StepperContext';
import './selectInput.css'

export default function SelectInput({ classes = "", options = [], selectedValue = '', error, label, name, placeholder }) {
    const { isVisible, setIsVisible, wrapperRef } = useOutsideClick(false);
    const [userInput, setUserInput] = useState(selectedValue);
    const { companyData, setCompanyData, setUserData, userData, currentStep } = useStepper();

    function handleSelect(e) {
        currentStep === 1 ? setUserData({ ...userData, [name]: e.target.textContent }) : setCompanyData({ ...companyData, [name]: e.target.textContent })
        setUserInput(e.target.textContent);
        setIsVisible(false);
    }
    // filter based on user typing
    // function handleFilter(e) {
    //     const inputValue = e.target.value;
    //     setUserInput(inputValue);
    //     const optionValueRegex = new RegExp(inputValue, 'gi');
    //     if (inputValue !== '') {
    //         const filteredOptionsByUser = options.filter(option => {
    //             return option.match(optionValueRegex) && option;
    //         });
    //         setFilterdOptions(filteredOptionsByUser);
    //     } else {
    //         setFilterdOptions(options)
    //     }
    // }

    return (
        <div className={`${classes} selectinput_container`} ref={wrapperRef}>
            <Input
                type="text"
                name={name}
                label={label}
                placeholder={placeholder}
                classes="w-100"
                icon={<ChevronDown />}
                onFocus={() => setIsVisible(true)}
                onKeyDown={(e) => e.keyCode === 9 && setIsVisible(false)}
                readOnly={true}
                value={userInput}
                error={error}
            />
            {isVisible &&
                <ul className="options">
                    {options.length > 0 ?
                        options.map(option => {
                            return <li key={option} className="option" onClick={handleSelect}>{option}</li>
                        })
                        :
                        <li className="option no-select">No option</li>
                    }
                </ul>
            }
        </div>
    )
}
