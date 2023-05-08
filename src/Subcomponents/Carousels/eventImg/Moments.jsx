import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Moments.sass";
import React from 'react'


function Moments({ image }) {

    // const img = "https://th.bing.com/th/id/R.463101ae80e319ed1569af3acc256f07?rik=fNSccco7m40kXg&riu=http%3a%2f%2fwww.goodworklabs.com%2fwp-content%2fuploads%2f2016%2f09%2fVishwas-Mudagal-Google-Event.jpg&ehk=FgHtVDtb1rSSdYrPhoTYBqqPA772MpkxchWGg%2bsEPmw%3d&risl=&pid=ImgRaw&r=0"
    // const moments = [img, img, img, img, img, img, img]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerPadding: "80px",
                }
            }
        ]
    };
    return (

        <div className="tag">
            <div className="imgslider">
                <Slider {...settings}>
                    {image.map((item) => (
                        <div className="slide" id="card" key={item} >
                            <img src={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Moments