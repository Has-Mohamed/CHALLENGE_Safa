import { useStepper } from '../context/StepperContext'
export default function FinalStep() {
    const { userData } = useStepper();
    return (
        <div className="step final_step">
            <img src="/mailbox.png" alt="" width="160px" />
            <p className="final_step_message text-bl text-lg ">We will send a message for this e-mail</p>
            <span className="text-rg text-md ">{userData.user_email}</span>
        </div>
    )
}
