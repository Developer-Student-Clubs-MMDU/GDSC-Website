import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './Carousel.sass'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../Firebase';

function Carousel() {

    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "community"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setTodos(newData);
                console.log(todos, newData);
            })

    }

    useEffect(() => {
        fetchPost();
    }, [])

    //  const images = useSelector(selectALL);
    const images = ["https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png", "https://logospng.org/download/react/logo-react-512.png"];

    const settings = {
        // infinite: true,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        // nextArrow: <IoIosArrowForward />,
        // prevArrow: <IoIosArrowBack />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    // infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (

        <div className="tagC">
            <div className="imgsliderC">
                <Slider {...settings}>
                    {todos.map((item) => (
                        <div className="slideC" id="card" >
                            <img src={item.imageurl} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Carousel