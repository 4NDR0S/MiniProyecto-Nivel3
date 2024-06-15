import React, { useState } from 'react'
import Guests from './Guests.jsx';

const lupaBlanca = 'images/lupita-blanca.svg'
const locationIcon = 'images/location.svg'



export default function Modal({setOpenModal, setApartments, setSearch, search, data}) {
    const [openLocation, setOpenLocation] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)

    const [totalGuest, setTotal] = useState(0);


    function search_apart() {
        if (search.city !== '' && search.guests === '') {
            const filtro = data.filter(apartment => apartment.city === search.city)
            setApartments(filtro)
            return
        }

        if (search.city === '' && search.guests !== '') {
            const filtro = data.filter(apartment => apartment.guests >= totalGuest)
            setApartments(filtro)
            return
        }

        if (search.city !== '' && search.guests !== '') {
            const filtro = data.filter(apartment => apartment.city === search.city && apartment.guests >= totalGuest)
            setApartments(filtro)
            return
        }

        setApartments(data)
    }
  return (
    <>
    <div className="opacidad"></div>
    <div className='modal_main'>
        <div className='modal_bar'>
            
            <div className='location_div'>
                <button onClick={() => setOpenLocation(true)}>
                    <h2>LOCATION</h2>
                    <h3>{search.city}, Finland</h3>
                </button>
                {openLocation &&
                    <div className='container_cities'>
                        <button onClick={(e) => setSearch({ ...search, city: ""})} value="All"><img src={locationIcon} alt="location-icon" />All cities</button>
                        <button onClick={(e) => setSearch({ ...search, city: e.target.value})} value="Helsinki"><img src={locationIcon} alt="location-icon" />Helsinki, Finland</button>
                        <button onClick={(e) => setSearch({ ...search, city: e.target.value})} value="Turku"><img src={locationIcon} alt="location-icon" />Turku, Finland</button>
                        <button onClick={(e) => setSearch({ ...search, city: e.target.value})} value="Oulu"><img src={locationIcon} alt="location-icon" />Oulu, Finland</button>
                        <button onClick={(e) => setSearch({ ...search, city: e.target.value})} value="Vaasa"><img src={locationIcon} alt="location-icon" />Vaasa, Finland</button>
                        <button onClick={()=> setOpenLocation(false)} className='flecha-cerrar'>▲</button>
                        
                    </div>
                }
                
            </div>

            <div className='guests_div'>
            <button onClick={() => setOpenGuests(true)}>
                <h2>GUESTS</h2>
                <h3>{totalGuest} guests</h3>
            </button>
            {openGuests &&
                <>
                <Guests totalGuest={totalGuest} setTotal={setTotal}/>
                <button onClick={()=> setOpenGuests(false)} className='flecha-cerrar'>▲</button>
                </>
            }
            </div>

            <div className='search-container'>
                <button className='search' onClick={search_apart}>
                    <img src={lupaBlanca} alt="" />
                    <span>Search</span>
                </button>
            </div>
        </div>
        <button className='close-modal' onClick={()=> setOpenModal(false)}>✕</button>
    </div>
        
    </>
  )
}
