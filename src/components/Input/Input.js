import { useState, forwardRef } from 'react';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import './input.css';

const Input = forwardRef((props, ref) => {
    const { classes = '', error = '', name, label, type = 'text', countrycode = '20', icon } = props;
    const [passwordVisible, setPasswordVisible] = useState(false);
    function handlePasswordVisiblity() {
        setPasswordVisible(!passwordVisible);
    }
    return (
        <div className={`form-group ${classes}`}>
            <div className={`input_container ${error ? 'input_error' : ''}`}>
                {/* for phone input */}
                {type === 'tel' && <span className="input_country_code">+{countrycode}</span>}
                {/* input component */}
                <div className="input_wrapper">
                    <label htmlFor={name} className="input_label">
                        {label}
                    </label>
                    <input
                        {...props}
                        type={passwordVisible ? 'text' : type}
                        id={name}
                        className="input"
                        aria-label={label}
                        ref={ref}
                    />
                    {icon && <span className="input_icon">{icon}</span>}
                </div>

                {/* for password and confirm password inputs */}
                {type === 'password' &&
                    <span className='input_icon'>
                        {passwordVisible ? <EyeFill onClick={handlePasswordVisiblity} /> : <EyeSlashFill onClick={handlePasswordVisiblity} />}
                    </span>
                }

            </div>
            {/* validation error */}
            {error && <div className="input_error input_error_text">{error}</div>}
        </div >
    )
});

export default Input;