import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

const GallerySlider = props => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '346px',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: '246px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '146px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '36px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '26px',
                }
            }
        ]
    };

    const slides = props.slides.map((slide, k) => {
        return (
            <div  className="gallery-slider-item" key={k}>
                <div className="gallery-slider-image">
                    <a
                        className="child bg-one"
                        style={{ backgroundImage: `url(${slide})` }}
                        title="Slide image"
                    ></a>
                    <img className="visibility-hidden" src={slide} alt="slide image" />
                </div>
            </div>
        )
    });
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="gallery-slider">
                    <Slider {...settings}>
                        {slides}
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default GallerySlider;