import { useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'

function Feedback() {
    let { fbnr } = useParams();

  return (
    <>
      <h1>hallo Welt {fbnr}</h1>
    </>
  )
}

export default Feedback
