import React, { useState, useEffect, useRef } from 'react';

function MoviePlaybackScreen() {
  const videoElement = useRef(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) *
      100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted]);

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genre: "Drama",
      year: 1994,
      runtime: 142,
      rating: 9.3,
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/123.mp4',
    },
    {
      id: 2,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      genre: "Crime",
      year: 1972,
      runtime: 175,
      rating: 9.2,
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid2.mp4',
    },
    {
      id: 3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      genre: "Action",
      year: 2008,
      runtime: 152,
      rating: 9.0,
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid3.mp4',
    },
    {
      id: 4,
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      genre: "Fantasy",
      year: 2003,
      runtime: 201,
      rating: 8.9,
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid4.mp4',
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
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid2.mp4',
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
      image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid3.mp4',
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
  image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid1.mp4',
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
  image: '/images/son.jpg',
  imageBg: '/images/son.jpg',
  video: '../dummy/vid4.mp4',
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
      video: '../dummy/vid1.mp4',
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
  image: '/images/son.jpg',
      imageBg: '/images/son.jpg',
      video: '../dummy/vid2.mp4',
  },
  ]);

  return (
    <div>
      <video
        ref={videoElement}
        src={movies[0].video}
        onTimeUpdate={handleOnTimeUpdate} style={{ position: 'absolute', top: 460, left: 960, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
 
      <div style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px'
}}>
  <button 
    onClick={togglePlay}
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '10px'
    }}
  >
    {playerState.isPlaying ? "Pause" : "Play"}
  </button>
  <input
    type="range"
    min="0"
    max="100"
    value={playerState.progress}
    onChange={handleVideoProgress} 
  />
  <select 
    value={playerState.speed} 
    onChange={handleVideoSpeed}
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '10px'
    }}
  >
    <option value="0.5">0.5x</option>
    <option value="1">1x</option>
    <option value="1.5">1.5x</option>
    <option value="2">2x</option>
  </select>
  <button 
    onClick={toggleMute}
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    {playerState.isMuted ? "Unmute" : "Mute"}
  </button>
</div>


</div>






);
}

export default MoviePlaybackScreen;