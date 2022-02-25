import React from 'react'
import './MovieComp.css'

interface video {
    time:string;
    title:string;
    desc:string;
}

const MovieComp = (props:video) => {
  return (
    <div>
        <div className='movie-wrapper'>
            <div className='img-movie-thumb'>
                <img src="https://www.themoviedb.org/t/p/w1280/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg" alt="" />
                <p className='time-movie'>{props.time}</p>
            </div>
            <p className='title-movie'>{props.title}</p>
            <p className='desc-movie'>{props.desc}</p>
        </div>
    </div>
  )
}

MovieComp.defaultProps ={
    time: '00.00',
    title: 'Title',
    desc: 'Jan, 2022'
}


export default MovieComp;