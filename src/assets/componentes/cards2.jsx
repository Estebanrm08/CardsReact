import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./cards.css"

const Cards = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/cards.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [])

  return (
    <>
      {data.map(({ lang, url, fcolor, scolor }) => (
        <Card key={lang} lang={lang} img={url} fcolor={fcolor} scolor={scolor} />
      ))}
    </>
  )
}

export default Cards
