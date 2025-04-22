import React, { useEffect, useState } from 'react'
import Card from '../src/card'
export default () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/api/get`)
      .then((r) => r.json())
      .then((d) =>  setCards(d.nmaprun.host))
  }, [])

  return (
    <div>
      {cards.map((item,index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  )
}
