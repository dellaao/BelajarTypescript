import React, { ChangeEvent, useState } from 'react'
import Produk from '../../component/Product/Produk';
import MovieComp from '../../component/YoutubeComp/MovieComp';
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp'
import './Home.css';

const Home = () => {

    const [name, setName] = useState<string>('')
    function handleChange(event:ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

        return(
            <div>
                <div className='YouTube-component'>
                    {/* <p>Youtube Component</p>
                    <hr></hr>
                    <div className='container-video'>
                        <YouTubeComp time="7.12" title="Ice Age" desc="Jan 28, 2022"/>
                        <YouTubeComp time="6.05" title="A" desc="Jan 2, 2022"/>
                        <YouTubeComp time="20.03" title="B" desc="Jan 8, 2022"/>
                        <YouTubeComp time="32.10" title="C" desc="Jan, 2022"/>
                        <YouTubeComp/>
                        <YouTubeComp time="7.12" title="Ice Age" desc="Jan 28, 2022"/>
                    </div> */}
                </div>

                <div className="Movie-component">
                    {/* <p>Movies Component</p>
                    <hr></hr>
                    <div className="container-video">
                    <MovieComp/>
                    <MovieComp/>
                    <MovieComp/>
                    <MovieComp/>
                    <MovieComp/>
                    <MovieComp/>
                    </div> */}
                </div>

                <div className='product-shopee'>
                    {/* <p>Produk</p>
                    <hr></hr>
                    <div className="product-main">
                        <Produk/>
                    </div> */}
                </div>
                
                <div className='testevent'>
                    <input value={name} 
                    onChange={handleChange}>
                    </input>
                    <p>{name}</p>
                </div>

            </div>  
        )
}

export default Home