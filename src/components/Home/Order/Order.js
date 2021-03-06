import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import("./Order.css")

const Order = () => {

    const [products, setProducts] = useState([])
    const [singleProduct, setSingleProduct] = useState({})
    const { orderId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

        fetch('https://agile-refuge-24136.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    // alert("Order placed succesfully")
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Order placed succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        reset();
    };

    useEffect(() => {
        fetch("https://agile-refuge-24136.herokuapp.com/products")
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            const p = products.find(pd => pd.id == orderId)
            // console.log(singleProduct)
            setSingleProduct(p)
            reset(p)
        }
    }, [orderId, products, reset])

    return (
        <div className="order-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-product-details">
                            <img className="img-fluid" src={singleProduct?.img} alt="" />
                            <h4 className="mb-4">{singleProduct?.name}</h4>
                            <p><span className="pd-span">Engine: </span>{singleProduct?.description?.Engine}</p>
                            <p><span className="pd-span">Top Speed: </span>{singleProduct?.description?.TopSpeed}</p>
                            <p><span className="pd-span">Mileage: </span>{singleProduct?.description?.Mileage}</p>
                            <p><span className="pd-span">Price: </span>{singleProduct?.price}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cart">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Product" defaultValue={singleProduct?.name} {...register("product")} />
                                <input placeholder="Name" defaultValue={user?.displayName} {...register("name")} />
                                <input placeholder="Email" defaultValue={user?.email} {...register("email")} />
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