import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Register.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                            <input placeholder="Confirm Password" {...register("confirmPassword")} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <Button className="sub-btn" type="submit">Submit</Button>
                            <p className="py-2 text-center">Or <br />
                                <Button className="reg-btn" variant="danger">Google Sign In</Button>
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