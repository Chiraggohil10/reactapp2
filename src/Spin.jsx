import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export default function Spin() {
  return (
    <Spinner animation="border" role="status" style={{color:"red",width:"60px",height:"60px",position:"relative",left:"48%"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
