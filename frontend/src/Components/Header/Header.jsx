import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {BiMessageAltEdit,BiMessageAltError} from "react-icons/bi"
import {FcPhone,FcClock} from "react-icons/fc"
import {GrMapLocation} from "react-icons/gr"
import {RiArrowDropDownLine} from "react-icons/ri"
import "./Header.css"
const Header = () => {
  const [onamaHover, setonamaHover] = useState(false)
  const [lekariHover, setlekariHover] = useState(false)
  const [uslugeHover, setuslugeHover] = useState(false)
  const [zapacijentaHover, setzapacijentaHover] = useState(false)

  const ulaz = () => {
    setonamaHover(true)
    setlekariHover(false)
    setuslugeHover(false)
    setzapacijentaHover(false)  
  }
  const izlaz = () => {
    setonamaHover(false)
    setlekariHover(false)
    setuslugeHover(false)
    setzapacijentaHover(false)  
  }

  const ulaz1 = () => {
    setlekariHover(true)
    setonamaHover(false)
    setuslugeHover(false)
    setzapacijentaHover(false)  
  }
  const izlaz1 = () => {
    setlekariHover(false)
    setonamaHover(false)
    setuslugeHover(false)
    setzapacijentaHover(false)  
  }
  const ulaz2 = () => {
    setuslugeHover(true)
    setlekariHover(false)
    setonamaHover(false)
    setzapacijentaHover(false)  
  }
  const izlaz2 = () => {
    setuslugeHover(false)
    setlekariHover(false)
    setonamaHover(false)
    setzapacijentaHover(false)  
  }
  const ulaz3 = () => {
    setzapacijentaHover(true)
    setlekariHover(false)
    setuslugeHover(false)
    setonamaHover(false)  
  }
  const izlaz3 = () => {
    setzapacijentaHover(false)
    setlekariHover(false)
    setuslugeHover(false)
    setonamaHover(false)  
  }
  

  return (
    <div className='full'>
      <div className='gore flex'>
        <Link to="/saveti-za-pacijente" className='Link'>
             <BiMessageAltEdit/> 
             <p>
                Korisne Informacije Za Pacijente 
             </p>
            
        </Link>
        <Link to="/pitajtenas" className='Link poslednji'>
        <BiMessageAltError/>
            Pitatje Nase Doktore
        </Link>
      </div>
      <div className='srednji flex'>
          <Link to="/">
              Logo
          </Link>
          <div className='ostalo flex'>
              <Link to="/" className='flex kontakt'>
                <FcPhone className='ikona' />
                <div className='mbroj'>
                  <p>Kontakt</p>
                  <p>0617258496</p>
                </div>
              
              </Link>
              <Link to="/" className='lokacija flex'>
                <GrMapLocation className='ikona'/>
                <div className='mlokacija'>
                    <p>Lokacija</p>
                    <p>Samuska 17p</p>
                </div>
                  
              </Link>
              <Link to="/" className='radnovreme flex'>
                  <FcClock className='ikona' />
                  <div className='mradnovreme'>
                      <p>Radno vreme</p>
                      <p>00-24</p>
                  </div>
              </Link>
          </div>
          
      </div>
      <div className='dole flex relative'>
        
        <div className='flex nav'>
          <Link to="/" className='flex ravno' onMouseEnter={ulaz}    >
          Onama <RiArrowDropDownLine className='strelica' />
          </Link>
          <Link to="/" className='flex ravno' onMouseEnter={ulaz1}  >
            Usluge <RiArrowDropDownLine className='strelica' />
          </Link>
          <Link to="/" className='flex ravno' onMouseEnter={ulaz2} >
            Lekari <RiArrowDropDownLine className='strelica' />
          </Link>
          <Link to="/" className='flex ravno' onMouseEnter={ulaz3}  >
            Za Pacijente <RiArrowDropDownLine className='strelica' />
          </Link>
          <Link to="/">
            Vesti
          </Link>
          <Link to="/">
            Kontakt
          </Link>
          <Link to="/">
            Cenovnik
          </Link>

        </div>
        <div className='searc'>

        </div>
      </div>
      {onamaHover? <div className='absolute onamahover' onMouseLeave={izlaz}> 
                <div className='flex'> 
                    <div className='prvi'>
                      <Link to="/onama">
                          o nama
                      </Link>
                      <Link to="/onama/smestaj-i-hrana">
                          smestaj i hrana
                      </Link>
                    </div>
                        
                      <div>
                      </div>
                      <div>
                      </div> 
                  </div>
      </div> : <></>}
      {lekariHover? <div className='absolute lekari'  onMouseLeave={izlaz1}> 

      </div> : <></>}
      {uslugeHover? <div className='absolute usluge'  onMouseLeave={izlaz2}> 

      </div> : <></>}
      {zapacijentaHover? <div className='absolute zapacijenta'  onMouseLeave={izlaz3}> 

      </div> : <></>}
    </div>
  )
}

export default Header