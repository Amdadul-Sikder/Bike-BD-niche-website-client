import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ManageProducts = () => {

    const [control, setcontrol] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://agile-refuge-24136.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
        // .then(data => console.log(data));
    }, [control]);

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                // console.log(id);
                const url = `https://agile-refuge-24136.herokuapp.com/deleteProduct/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            setcontrol(!control)
                        }
                    })

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }


    return (
        <div className="products">
            <h4 className="mb-5 text-center">MANAGE PRODUCTS:{products.length}</h4>
            <div className="container">
                <div className="row product-padding">


                    {products.map(pd => <div key={pd.id} className="col-lg-4">
                        <div className="single-product">
                            <div className="product-img">
                                <img src={pd.img} alt="" />
                            </div>
                            <div className="single-product-data">
                                <h4>{pd.name}</h4>
                                <p><span className="pd-span">Engine:</span>{pd.description.Engine}</p>
                                <p><span className="pd-span">Top Speed:</span>{pd.description.TopSpeed}</p>
                                <p><span className="pd-span">Mileage:</span>{pd.description.Mileage}</p>
                                <p><span className="pd-span">BDT:</span>{pd.price}</p>
                            </div>
                            {/* <Link to={`/order/${pd.id}`}>
                                <Button variant="danger" className="buy-btn">Buy Now</Button>
                            </Link> */}
                            <Button onClick={() => handleDelete(pd?._id)}
                                variant="outlined" color="error">
                                DELETE
                            </Button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
