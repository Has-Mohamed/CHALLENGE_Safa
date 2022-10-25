import { useState } from 'react';
import { ChevronDown } from 'react-bootstrap-icons';
import { Input } from '../Input';
import { useOutsideClick } from '../../hooks/useClickOutside';
import './selectInput.css'

export default function SelectInput({ classes = "", options = [], selectedValue = {}, label, name, placeholder }) {
    const { isVisible, setIsVisible, wrapperRef } = useOutsideClick(false);
    const [value, setValue] = useState(selectedValue);
    const [filteredOptions, setFilterdOptions] = useState(options);
    function handleSelect(e) {
        setValue(e.target.textContent);
        setIsVisible(false);
    }
    // filter based on user typing
    function handleFilter(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
        const optionValueRegex = new RegExp(inputValue, 'gi');
        if (inputValue !== '') {
            const filteredOptionsByUser = options.filter(option => {
                return option.match(optionValueRegex) && option;
            });
            setFilterdOptions(filteredOptionsByUser);
        } else {
            setFilterdOptions(options)
        }
    }
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
                value={value}
                onChange={handleFilter}
            />
            {isVisible &&
                <div className="options">
                    {filteredOptions.length > 0 ?
                        filteredOptions.map(option => {
                            return <div key={option} className="option" onClick={handleSelect}>{option}</div>
                        })
                        :
                        <div className="option no-select">No option</div>
                    }
                </div>
            }
        </div>
    )
}
