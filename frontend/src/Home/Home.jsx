import React from "react";

import Slika1  from "../assets/zasanity01.png"
import Slika2 from "../assets/zasanity02.png"
import "./Home.css"

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { EffectCards, EffectCoverflow, EffectCreative, EffectFade, EffectFlip,Pagination } from 'swiper';

import 'swiper/css/effect-fade';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
const Home = () => {

  const najnovijevesti=[{
      naslov:'tajitaj',
      deskripvija:'taita',
      slika:Slika1,
  },{
    naslov:'tajitaj2',
    deskripvija:'taita2',
    slika:Slika2,
  },{
      naslov:'tajitaj3',
      deskripvija:'taita3',
      slika:Slika1,
  },{
    naslov:'tajitaj3',
    deskripvija:'taita3',
    slika:Slika1,
},
{
  naslov:'tajitaj2',
  deskripvija:'taita2',
  slika:Slika2,
},
{
  naslov:'tajitaj2',
  deskripvija:'taita2',
  slika:Slika2,
}
]

const usluge = [{
  naslov:"Prva",
  slika:Slika1,
},{
  naslov:"Druga",
  slika:Slika1,
},{
  naslov:"Treca",
  slika:Slika1,
},
{
  naslov:"Druga",
  slika:Slika1,
},{
  naslov:"Treca",
  slika:Slika1,
},
]


  return (
    <div className="Page">
        <Header />
        
        <div  className="Holder">
            <Swiper  modules={[Pagination]} className="mySwiper" spaceBetween={30}
              pagination={{
                clickable: true,
              }}
          >
              
              <SwiperSlide><img src={Slika1} /></SwiperSlide>
              <SwiperSlide><img src={Slika2} /></SwiperSlide>
              <SwiperSlide><img src={Slika1} /></SwiperSlide>
              <SwiperSlide><img src={Slika2} /></SwiperSlide>
            </Swiper>
          
        </div>
        <p className="Uvod">Dobrodošli u Atlas, prvu srpsku privatnu bolnicu fokusiranu na pružanje hirurških usluga </p>
        <div className="sekcija">
            <h1>Najnovije Vesti</h1>
                    <div className="grid Sekcija">
                          {najnovijevesti.map((vest,index)=>
                            <div key={index}>
                              <p className="naslov"> {vest.naslov} </p>
                              <img src={vest.slika}  />
                              <p className="deskripcija"> {vest.deskripvija} </p>
                            </div>     
                          )}
                    </div>
        </div>
        
        <div className="sekcija">
        <h1>Usluge</h1>
            <div className="grid2 ">
                {usluge.map((usluga,index)=>
                  <div key={index}>
                    
                    <img src={usluga.slika} className="uslugasl" />
                    <p className="naslovusluge"> {usluga.naslov} </p>
                  </div>     
                )}
            </div>
        </div>
        
        <Footer />

    </div>
  )
}

export default Home