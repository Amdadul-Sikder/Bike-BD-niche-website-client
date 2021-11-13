import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const sliceProduct = products.slice(0, 6);

    useEffect(() => {
        fetch("https://agile-refuge-24136.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
        // .then(data => console.log(data));
    }, []);


    return (
        <div id="products" className="products">
            <h4 className="my-5 text-center">OUR LATEST PRODUCTS</h4>
            <div className="container">
                <div className="row product-padding">


                    {sliceProduct.map(pd => <div key={pd.id} className="col-lg-4">
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
                            <Link to={`/order/${pd.id}`}>
                                <Button variant="danger" className="buy-btn">Buy Now</Button>
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Products;