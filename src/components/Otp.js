import React, { useState } from 'react';
import RequestButton from './RequestButton';
import logo from '../images/Group 33524.svg';
import './Otp.css';

function Otp() {
    const [otpValues, setOtpValues] = useState(Array(6).fill(''));
    const inputRefs = Array.from({ length: 6 });

    const handleChange = (index, value) => {
        const sanitizedValue = value.replace(/[^0-9]/g, '');

        setOtpValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = sanitizedValue;
            return newValues;
        });

        if (sanitizedValue && index < 5 && inputRefs[index + 1]) {
            inputRefs[index + 1].focus();
        }
    };

    return (
        <>
            <center><img src={logo} alt='logo' style={{ padding: '4rem' }} /></center>
            <div className="otp-container">
                <h1 style={{ color: 'white' }}>OTP Verification</h1>
                <p style={{ color: '#707181' }}>OTP sent to your Email Address</p>
                <form>
                    {otpValues.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            className="otpinput"
                            maxLength="1"
                            placeholder='0'
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            ref={(el) => (inputRefs[index] = el)}
                            style={{ backgroundColor: '#212428', fontSize: '1.2rem' }}
                        />
                    ))}
                </form>
                <center><p style={{ color: '#686978' }}>Didn't Receive code</p>
                    <div className='resend-link'> <a href="#" className="resend-link">
                        Resend Code
                    </a></div>
                    <RequestButton text={'Confirm'} />
                </center>

            </div>
        </>
    );
}

export default Otp;
