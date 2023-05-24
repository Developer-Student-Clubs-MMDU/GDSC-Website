import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

function Carousel() {

//  const images = useSelector(selectALL);
const images =["https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png"];

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className="tag">
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div className="slide" id="card" >
                            <img src={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel