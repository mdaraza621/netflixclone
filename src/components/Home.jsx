import React from 'react'
import netflixlogo from '../images/netflixlogo.png'
import netflixavatar from '../images/netflixavatar.png'
import largemovie1 from '../images/largemovie1.jpg'
import largemovie2 from '../images/largemovie2.jpg'
import largemovie3 from '../images/largemovie3.jpg'
import largemovie4 from '../images/largemovie4.jpg'
import largemovie5 from '../images/largemovie5.jpg'
import largemovie6 from '../images/largemovie6.jpg'
import largemovie7 from '../images/largemovie7.jpg'
import largemovie8 from '../images/largemovie8.jpg'

import smallmovie1 from '../images/smallmovie1.jpg'
import smallmovie2 from '../images/smallmovie2.jpg'
import smallmovie3 from '../images/smallmovie3.jpg'
import smallmovie4 from '../images/smallmovie4.jpg'
import smallmovie5 from '../images/smallmovie5.jpg'
import smallmovie6 from '../images/smallmovie6.jpg'
import smallmovie7 from '../images/smallmovie7.jpg'
import smallmovie8 from '../images/smallmovie8.jpg'

import banner from '../images/banner.jpg'

import '../CSS/home.css'












const Home = () => {
  return (
    
    <>
    <div className="nav" id="nav">
        <img src={netflixlogo} alt="" className="navlogo"/>
        <img src={netflixavatar} alt="" className="navavatar"/>

    </div>

    <div className="banner">
        <div className="banner__contents">
            <h1 className="banner__title">Money Heist</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My list</button>

            </div>
            <div className="banner__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nesciunt alias quo provident harum est
                obcaecati. Doloribus ex ipsa expedita autem et explicabo nisi aut vel placeat, dolor dignissimos magni?
            </div>
        </div>
        <div className="banner--fadebottom">

        </div>
    </div>

    
    <div className="row">
        <h2>NETFLIX ORIGNALS</h2>
        <div className="row__posters">
            <img src={largemovie1} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie2} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie3} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie4} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie5} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie6} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie7} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie8} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie1} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie2} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie3} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie4} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie5} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie6} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie7} alt=""
                className="row__poster row__posterlarge" />
            <img src={largemovie8} alt=""
                className="row__poster row__posterlarge" />
        </div>
    </div>

   
    <div className="row">
        <h2>Trending Now</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4}alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3}alt=""
                className="row__poster " />
            <img src={smallmovie4}alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
        </div>
    </div>


    <div className="row">
        <h2>Top Rated</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />

        </div>
    </div>

    <div className="row">
        <h2>Action Movies</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />

        </div>
    </div>

   
    <div className="row">
        <h2>Comedy Movies</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8}alt=""
                className="row__poster " />

        </div>
    </div>

   
    <div className="row">
        <h2>Horror Movies</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />

        </div>
    </div>

    
    <div className="row">
        <h2>Rommance Movies</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />

        </div>
    </div>

    
    <div className="row">
        <h2>Documentaries</h2>
        <div className="row__posters">
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />
            <img src={smallmovie1} alt=""
                className="row__poster " />
            <img src={smallmovie2} alt=""
                className="row__poster " />
            <img src={smallmovie3} alt=""
                className="row__poster " />
            <img src={smallmovie4} alt=""
                className="row__poster " />
            <img src={smallmovie5} alt=""
                className="row__poster " />
            <img src={smallmovie6} alt=""
                className="row__poster " />
            <img src={smallmovie7} alt=""
                className="row__poster " />
            <img src={smallmovie8} alt=""
                className="row__poster " />

        </div>
    </div>

    
    
    </>
    
  )
}

export default Home