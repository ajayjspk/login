import React from "react";
import "./Register.css";
import logo from "../images/Group 33524.svg";
import Input from "./Input";
import RequestButton from "./RequestButton";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <center><img src={logo} alt="logo" style={{ padding: '2rem' }} /></center>
            <div className="signup-container">
                <h1 style={{ color: 'white' }}>User Registration</h1>
                <form>
                    <label for="email" className="label">
                        First Name*
                    </label>
                    <Input type={'type'} placeholder={'Enter first name'} />

                    <label for="password" className="label">
                        Last Name*
                    </label>
                    <Input type={'type'} placeholder={'Enter last name'} />

                    <label for="email" className="label">
                        Email* (OTP Will Send To Email)
                    </label>
                    <Input type={'email'} placeholder={'Enter email'} />

                    <label for="password" className="label">
                        Password*
                    </label>
                    <Input type={'password'} placeholder={'Enter password'} />

                    <label for="email" className="label">
                        Confirm password*
                    </label>
                    <Input type={'password'} placeholder={'Confirm password'} />

                    <div className="check"><input type="checkbox" id="termsCheckbox" />
                        <label for="termsCheckbox" style={{ color: 'white' }}>I agree to the terms and conditions</label></div>

                    <center><Link to='/otp'><RequestButton text={"Register"} /></Link></center>
                </form>
            </div>
        </>
    );
}
