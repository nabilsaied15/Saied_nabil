import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewsCard from "./ClientReviewsCard";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1300 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1300, min: 764 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const ReviewsSlider = () => {
    return (
        <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite
            itemClass="carousel-item"
            containerClass="carousel-container"
            dotListClass="carousel-dot-list"
            sliderClass="carousel-slider"
        >
            <ClientReviewsCard
                image="/images/user1.jpg"
                user="David BETOUBAM"
                role="Fondateur de CityNeed"
                review="Excellent service, je recommande vivement !"
            />
            <ClientReviewsCard
                image="/images/user2.jpg"
                user="Rim Saied"
                role="UI/UX Designer"
                review="Une expérience utilisateur exceptionnelle !"
            />
            <ClientReviewsCard
                image="/images/user3.jpg"
                user="Sarah Khalil"
                role="Project Manager"
                review="Le design et la performance sont incroyables."
            />
            <ClientReviewsCard
                image="/images/user4.jpg"
                user="John Doe"
                role="Software Engineer"
                review="Un travail de qualité avec une attention aux détails."
            />
            <ClientReviewsCard
                image="/images/user5.jpg"
                user="Alice Johnson"
                role="Marketing Specialist"
                review="L'équipe a dépassé mes attentes. Bravo !"
            />
            <ClientReviewsCard
                image="/images/user6.jpg"
                user="Michael Brown"
                role="Data Analyst"
                review="Les résultats sont impressionnants et très professionnels."
            />
        </Carousel>
    );
};

export default ReviewsSlider;
