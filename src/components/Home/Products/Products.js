import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div className="products">
            <h4 className="mb-5 text-center">OUR LATEST PRODUCTS</h4>
            <div className="container">
                <div className="row">
                    {products.map(pd => <div className="col-lg-3">
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
                                {/* <Button className="buy-btn">Buy Now</Button> */}
                            </div>
                            <Button variant="danger" className="buy-btn">Buy Now</Button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Products;