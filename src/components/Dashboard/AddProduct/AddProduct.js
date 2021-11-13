import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch('https://agile-refuge-24136.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset();

    };



    return (
        <div className="add-product">
            <h2 className="text-center mb-3">Add New Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name"{...register("name")} />
                <input placeholder="Product img url" {...register("img", { required: true })} />
                <input placeholder="Engine" {...register("description.Engine", { required: true })} />
                <input placeholder="TopSpeed" {...register("description.TopSpeed", { required: true })} />
                <input placeholder="Mileage" {...register("description.Mileage", { required: true })} />
                <input placeholder="Price" {...register("price", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="add-pd-btn" type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default AddProduct;