import React, { useEffect, useState } from 'react';

const Review = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])

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
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-review">
                            <h6 className="mb-3">HABIB KHAN</h6>
                            <p>Good support.All service is ok.This shop is recomended.I heard about the shop from facebook then I visite the shop the authority was so helpful. Nice support.</p>
                            <p>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-review">
                            <h6 className="mb-3">HASAN MAHMUD</h6>
                            <p>I heard about the shop from facebook then I visite the shop the authority was so helpful. Nice support.Good support.All service is ok.This shop is recomended.</p>
                            <p>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                        </div>
                    </div>

                    {review.map(pd => <div className="mt-5 col-lg-4">
                        <h4>{pd.name}</h4>
                        <p>{pd.message}</p>
                    </div>)}

                </div>
            </div>
        </div>
    );
};

export default Review;