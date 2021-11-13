import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    const onSubmit = data => {
        console.log(data)
        registerUser(data.email, data.password, data.name, history);
    };

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="section-title">
                                <h4 className="mb-4 text-center">REGISTER</h4>
                            </div>
                            <input placeholder="Your Name" {...register("name", { required: true })} />
                            <input placeholder="Your Email" {...register("email", { required: true })} />
                            <input placeholder="Your Password" {...register("password")} />
                            {/* <input placeholder="Confirm Password" {...register("confirmPassword")} /> */}

                            {errors.exampleRequired && <span>This field is required</span>}

                            <Button className="sub-btn" type="submit">Submit</Button>
                            <p className="py-2 text-center">Or <br />
                                <Button onClick={handleGoogleSignIn} className="reg-btn" variant="danger">Google Sign In</Button>
                            </p>
                            <p className="py-5 text-center">Allready registered?
                                <Link className="ms-2" to="login">Please Login</Link>
                            </p>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Register;