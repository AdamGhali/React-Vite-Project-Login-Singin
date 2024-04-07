import React from 'react'
import './components/Header.css'
import Navbar from './Navbar';
import Header from './components/Header';
import BackgroundVideo from "./assets/livevideo.mp4";

const Home = () => {
  return (
    <div>
    <Navbar/>   HOME IS GOOOOOD !!!
    <video
              className="rounded-3xlazaz  py-36 "
              style={{ minWidth: "100%", minHeight: "200%" }}
              playsInline
              autoPlay
muted
              loop
              id="myVideo"
              data-aos="zoom-in"
            >
              <source src={BackgroundVideo} type="video/mp4" />
            </video>
    <Header/>
   
    </div>
  )
}

export default Home
