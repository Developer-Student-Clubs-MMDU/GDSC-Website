import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './Team.sass';
import { db } from '../../../Firebase'
import { useRef } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



function Team() {

  const [slide, setSlide] = useState([{}]);
  const sliderRef = useRef(null);



 


  const Fetch = async () => {
    await getDocs(query(collection(db, "gdscTeam"), orderBy("rank", "asc")))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setSlide(newData);
        console.log(slide);
      })
  }

  useEffect(() => {
    Fetch();
  }, []);





  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    // nextArrow: <IoIosArrowForward />,
    // prevArrow: <IoIosArrowBack />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};
const handlePrevious = () => {
  sliderRef.current.slickPrev();
};

const handleNext = () => {
  sliderRef.current.slickNext();
};
  return (
    <div className="tag" id="tag">
      <h1> Batch {a.batch}</h1>
      <div className="imgslider">
        <Slider {...settings}>
          {slide.map((item) => (
            <div className="slide" id="card" >
              <img src={item.imageUrl} />
              <h3>{item.name}</h3>
              <p>{item.position}</p>
            </div>
          ))}
        </Slider>
        <div className="carousel-buttons">
  <button className="carousel-button" onClick={handlePrevious}>
    <FaArrowLeft />
  </button>
  <button className="carousel-button" onClick={handleNext}>
    <FaArrowRight />
  </button>
</div>
      </div>
    </div>
  )
}

export default Team



const a = {
  batch: "2022-23",


  member: [
    {
      name: "sakshi",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "lead",
    },
    {
      name: "sujal",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "co lead"
    },
    {
      name: "komal",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "bajrang",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "aaditya chaudhary",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: 'core member'
    }, {
      name: "rajvinder",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: " core member",
    }, {
      name: "sushant",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }, {
      name: "vansh",
      img: "https://i.pinimg.com/736x/5b/84/b4/5b84b422f997e8fb75fd7beb9169e603.jpg",
      position: "core member"
    }
  ]
}