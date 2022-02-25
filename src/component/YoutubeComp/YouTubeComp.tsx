import React from 'react';
import './YouTubeComp.css';

interface video {
    time:string;
    title:string;
    desc:string;
}

const YouTubeComp = (props:video) => {
  return (
    <div>
        <div className='youtube-wrapper'>
            <div className='img-youtube-thumb'>
                <img src="https://i.ytimg.com/vi/b3qGFuCo6NI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDycvrgvwxoZ--sznZgrMdk5xbvrw" alt="" />
                <p className='time-youtube'>{props.time}</p>
            </div>
            <p className='title-youtube'>{props.title}</p>
            <p className='desc-youtube'>{props.desc}</p>
        </div>
    </div>
  )
}

YouTubeComp.defaultProps ={
    time: '00.00',
    title: 'Title',
    desc: 'Jan, 2022'
}

export default YouTubeComp;