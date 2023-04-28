import React, { useState } from 'react';
import IconCross from './../Icons/IconCross';
import './content.css';
import Rating from "../../components/Rating";
import { Link } from 'react-router-dom';
const Content = ({ movie, onClose }) => {
  const [rating, setRating] = useState(0);
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
      video: './dummy/vid1.mp4',
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
      video: './dummy/vid2.mp4',
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
      video: './dummy/vid3.mp4',
    },
    {
      id: 4,
      title: "to train kids",
      description:
        "Kids refer to young human beings typically between the ages of 1 to 12 years old.",
      genre: "Fantasy",
      year: 2003,
      runtime: 201,
      rating: 8.9,
      image: '/images/aaa.jpg',
      imageBg: '/images/aaa.jpg',
      video: './dummy/vid4.mp4',
    },
    {
      id: 5,
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
      genre: "Drama",
      year: 1994,
      runtime: 142,
      rating: 8.8,
      image: '/images/gun.jpg',
      imageBg: '/images/gun.jpg',
      video: './dummy/vid2.mp4',
    },
    {
      id: 6,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      genre: "Action",
      year: 2010,
      runtime: 148,
      rating: 8.7,
      image: '/images/wow.jpg',
      imageBg: '/images/wow.jpg',
      video: './dummy/vid3.mp4',
    },
    {
      id: 7,
      title: "The Matrix",
      description:
  "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  genre: "Action",
  year: 1999,
  runtime: 136,
  rating: 8.7,
  image: '/images/of.jpg',
      imageBg: '/images/of.jpg',
      video: './dummy/vid1.mp4',
  },
  {
  id: 8,
  title: "Pulp Fiction",
  description:
  "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  genre: "Crime",
  year: 1994,
  runtime: 154,
  rating: 8.9,
  image: '/images/you.jpg',
  imageBg: '/images/you.jpg',
  video: './dummy/vid4.mp4',
  },
  {
  id: 9,
  title: "The Silence of the Lambs",
  description:
  "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  genre: "Thriller",
  year: 1991,
  runtime: 118,
  rating: 8.6,
  image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: './dummy/vid1.mp4',
  },
  {
  id: 10,
  title: "Fight Club",
  description:
  "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  genre: "Drama",
  year: 1999,
  runtime: 139,
  rating: 8.8,
  image: '/images/of.jpg',
      imageBg: '/images/of.jpg',
      video: './dummy/vid2.mp4',
  },
  ]);
  return (
    <div className="content">
      <div className="content__background">
        <div className="content__background__shadow" />
        <div
          className="content__background__image"
          style={{ backgroundImage: `url(${movie.imageBg})` }}
        />
      </div>
      <div className="content__area">
        <div className="content__area__container">
          <div className="content__title">{movie.title}</div>
          <div className="content__description">{movie.description}
           
            
          </div>
          <Rating
            value={rating}
            onClick={setRating}
            text={`${movie.rating} reviews`}
            color={"#f8e825"}
          />
          <Link to={`/MoviePlaybackScreen/${movie.id}`}>
  <button type="button" className="btn cube cube-hover play-btn" style={{ position: "absolute", bottom: "20px", left: "15%", transform: "translateX(-50%)" }}>
    <div className="bg-top">
      <div className="bg-inner"></div>
    </div>
    <div className="bg-right">
      <div className="bg-inner"></div>
    </div>
    <div className="bg">
      <div className="bg-inner"></div>
    </div>
    <div className="text">play</div>
  </button>
</Link>
        </div>
        
        <button className="content__close" onClick={onClose}>
          <IconCross />
        </button>
      </div>
    </div>
  );
};

export default Content;
