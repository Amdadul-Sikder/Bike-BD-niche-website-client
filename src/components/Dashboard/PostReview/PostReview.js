import React from 'react';
import { useForm } from "react-hook-form";
import './PostReview.css'

const PostReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        fetch('https://agile-refuge-24136.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
        reset();
    };



    return (
        <div className="add-product">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Name" {...register("name")} />
                <input placeholder="Input rating 1 to 5" {...register("rating")} />

                <input className="textarea" placeholder="message" {...register("message", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="add-pd-btn" type="submit" />
            </form>
        </div>
    );
};

export default PostReview;