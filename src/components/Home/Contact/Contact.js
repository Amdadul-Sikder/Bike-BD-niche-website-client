import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="section-title">
                                <h4 className="mb-5 text-center">CONTACT US</h4>
                            </div>
                            <input defaultValue="Your Name" {...register("name")} />
                            <input defaultValue="Your Email" {...register("email", { required: true })} />
                            <input defaultValue="Mobile" {...register("mobile")} />
                            <input className="textarea" defaultValue="Message" {...register("message")} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="add-pd-btn" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;