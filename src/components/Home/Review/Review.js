import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])
    console.log(review);

    return (
        <div className="review  text-center my-5">
            <div className="row my-5">
                <h2>Client reviews</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-review">
                            <h6 className="mb-3">RAKIB HOSSAIN</h6>
                            <p>Great service.This shop is recomended.I heard about the shop from facebook then I visite the shop the authority was so helpful. Nice support.</p>
                            <p>
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                ></Rating>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-review">
                            <h6 className="mb-3">HABIB KHAN</h6>
                            <p>Good support.All service is ok.This shop is recomended.I heard about the shop from facebook then I visite the shop the authority was so helpful. Nice support.</p>
                            <p>
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                ></Rating>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-review">
                            <h6 className="mb-3">HASAN MAHMUD</h6>
                            <p>I heard about the shop from facebook then I visite the shop the authority was so helpful. Nice support.Good support.All service is ok.This shop is recomended.</p>
                            <p>
                                <Rating
                                    initialRating={3}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                ></Rating>

                            </p>
                        </div>
                    </div>

                    {review.map(pd => <div key={pd._id} className="mt-5 col-lg-4">
                        <h6>{pd.name}</h6>
                        <p>{pd.message}</p>
                        <Rating
                            initialRating={pd.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                        ></Rating>

                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Review;