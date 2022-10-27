import React from 'react'
import { Person, Building, ShieldCheck } from 'react-bootstrap-icons';
import './stepper.css'

export default function StepperIndicator({ totalSteps = 0, currentStep = 0 }) {
    const IconSize = 30
    const icons = [<Person size={IconSize} />, <Building size={IconSize} />, <ShieldCheck size={IconSize} />];
    const progressbarClassName = (currentStep > 1 && currentStep < totalSteps && '50') || (currentStep === totalSteps && '100') || 0;
    return (
        <div className="indicator_container">
            <div className="progress_container">
                <span className={`progressbar fill`} style={{ width: `${progressbarClassName}%` }}></span>
            </div>
            <div className='indicator_icons'>
                {icons.map((icon, index) => {
                    const activeIcon = index + 1 === currentStep;
                    const prevIcon = index + 1 < currentStep;
                    return (
                        <span key={index} className={`indicator_icon ${activeIcon ? 'active' : ''} ${prevIcon ? 'finished' : ''}`}>
                            {icon}
                        </span>
                    )
                })}
            </div>
        </div >
    )
}
