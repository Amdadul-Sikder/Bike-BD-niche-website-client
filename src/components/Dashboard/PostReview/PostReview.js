import React from 'react';
import { useForm } from "react-hook-form";


const PostReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/review', {
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
        <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Name" {...register("name")} />
            <input placeholder="Input rating 1 to 5" {...register("rating")} />

            <input placeholder="message" {...register("message", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default PostReview;