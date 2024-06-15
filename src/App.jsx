import { useEffect, useState } from "react";
import Nav from './components/Nav.jsx'
import CardList from "./components/CardList.jsx";
import CardItem from "./components/CardItem.jsx";
import Modal from "./components/Modal.jsx";

const imagenLogo = 'images/logo.svg'
const imagenLupa = 'images/lupita.svg'

export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState({city: ''})

  const [apartments, setApartments] = useState([])

  const [openModal, setOpenModal] = useState(false)

  async function getData(){
    const rs = await fetch('/stays.json')
    const rsJson = await rs.json()

    console.log(rsJson);

    const filterData = rsJson.map(apartment =>
      ({
        type: apartment?.type,
        beds: apartment?.beds,
        rating: apartment?.rating,
        title: apartment?.title,
        img: apartment?.photo,
        superhost: apartment?.superHost,
        city: apartment?.city,
        guests: apartment?.maxGuests
      })
    )

    setApartments(filterData)

    setData(filterData)
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <>
      <Nav 
      img_nav={imagenLogo}
      lupita={imagenLupa}
      main_modal={() => setOpenModal(true)}
      cityNav={search.city}/>
      <CardList>
        {apartments &&
          apartments.map((apartment, index) => (
            <CardItem
              key={index}
              apartment={apartment}/>
          ))}
      </CardList>
      {openModal &&
        <Modal setOpenModal={setOpenModal} search={search} setSearch={setSearch} setApartments={setApartments} data={data}/>}
    </>
  )
}
