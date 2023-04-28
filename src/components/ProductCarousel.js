import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
// import './carousel.css'
import { useEffect } from "react";

function ProductCarousel() {
  
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "frontend developer",
            description:
              "A frontend developer is responsible for creating and implementing the user interface of a website or application, using technologies such as HTML, CSS, and JavaScript.",
            genre: "Drama",
            year: 1994,
            runtime: 142,
            rating: 9.3,
            image: '/images/son.jpg',
            imageBg: '/images/son.jpg',
            video: '../dummy/vid1.mp4',
          },
          {
            id: 2,
            title: "the Git hub",
            description:
              "GitHub is a web-based platform for version control and collaboration that allows developers to store, manage, and share their code repositories.",
            genre: "Crime",
            year: 1972,
            runtime: 175,
            rating: 9.2,
            image: '/images/bitch.jpg',
            imageBg: '/images/bitch.jpg',
            video: '../dummy/vid2.mp4',
          },
          {
            id: 3,
            title: "django",
            description:
              "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites and applications.",
            genre: "Action",
            year: 2008,
            runtime: 152,
            rating: 9.0,
            image: '/images/of.jpg',
            imageBg: '/images/of.jpg',
            video: '../dummy/vid3.mp4',
          },
    ]);
 

    return (
      <>
      <div>
                <Carousel pause='hover' className='bg-dark' style={{ height: '500px', width: '900px', objectFit: 'cover', marginLeft: '20%'}}>
                    {movies.map(movie => (
                        <Carousel.Item key={movie._id} style={{ height: '400px', objectFit: 'cover' }}>
                            <Link to={`/movie/${movie.video}`}>
                            <Image src={movie.image} alt={movie.name} fluid style={{ height: '400px', objectFit: 'cover' }} />

                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{movie.name} </h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
                </div>
                </>
            )

    
}

export default ProductCarousel
