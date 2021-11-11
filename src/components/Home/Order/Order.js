import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import("./Order.css")

const Order = () => {

    const [products, setProducts] = useState([])
    const [singelProduct, setSingleProduct] = useState({})
    const { orderId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            const singleProduct = products.find(pd => pd.id == orderId)
            // console.log(singleProduct)
            setSingleProduct(singleProduct)
        }
    }, [orderId, products])

    return (
        <div className="order-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-product-details">
                            <img className="img-fluid" src={singelProduct?.img} alt="" />
                            <h4 className="mb-4">{singelProduct?.name}</h4>
                            <p><span className="pd-span">Engine: </span>{singelProduct?.description?.Engine}</p>
                            <p><span className="pd-span">Top Speed: </span>{singelProduct?.description?.TopSpeed}</p>
                            <p><span className="pd-span">Mileage: </span>{singelProduct?.description?.Mileage}</p>
                            <p><span className="pd-span">Price: </span>{singelProduct?.price}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cart">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                                <input placeholder="Email" defaultValue={user.email} {...register("email")} />
                                <input required placeholder="Address" defaultValue="" {...register("address")} />
                                <input required placeholder="Phone Number" defaultValue="" {...register("phone")} />

                                {/* <input {...register("exampleRequired", { required: true })} /> */}
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input value="Place Order" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;