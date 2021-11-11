import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { userLogin } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data)
        userLogin(data.email, data.password, location, history)

    };
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="section-title">
                                <h4 className="mb-5 text-center">LOGIN</h4>
                            </div>
                            <input placeholder="Your Email" {...register("email", { required: true })} />
                            <input placeholder="Your Password" {...register("password")} />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <Button className="sub-btn" type="submit">Submit</Button>
                            <p className="py-5 text-center">New User?
                                <Link className="ms-2" to="register">Please Register</Link>
                            </p>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;