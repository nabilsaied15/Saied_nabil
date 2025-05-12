import React from "react";
import ReviewsSlider from "./Helper/ReviewsSlider"; 

const Reviews = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="text-center">
                <p className="heading__mini text-blue-400">Popular Reviews</p>
                <h1 className="heading__primary text-white">
                    I&apos;ve <span className="text-blue-400">Client Feedback</span>
                </h1>
            </div>
            <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
                <ReviewsSlider/>
            </div>
        </div>
    );
};

export default Reviews;