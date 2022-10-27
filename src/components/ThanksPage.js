import React from 'react'

export default function ThanksPage() {
    return (
        <div className="step final_step" style={{ width: '800px' }}>
            <img src="/mailbox.png" alt="Mailbox" width="160px" />
            <p className="text-center">
                <span className='text-bl'>Congratz, you successfully created your account</span>
                <br />
                We just sent you a confirmation email
                <br />
                Please check your E-mail
            </p>
            <p className="text-rg text-md">
                Didn't receive it?
                <br />
                Check your Spam folder or <a href='/' className="text-bl" style={{ color: 'var(--red500)' }}> Resend Email</a>
            </p>
        </div>
    )
}
