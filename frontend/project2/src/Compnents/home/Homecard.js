import React from 'react'
import axios from 'axios'
import { useState,useEffect  } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import img44 from '../img/img44.jpg'
import Image from 'react-bootstrap/Image'

// you did a grate jab <3

export default function Homecard() {
    const [flower, setFlower] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/flower/')
        .then((res) =>{
          console.log(res.data);
          setFlower(res.data);
        })
        console.log(flower);
      },[])
      let arr = [];
    return (
        <div className="Homecard">

            <h4>OUR WONDERFUL ARRANGEMENTS</h4>

            <div className="Homecardflex">
            {flower.map((item) => { 
            arr.push(item)

        if (arr.length<5){
    return(
        <CardGroup className="CardGroup">
        <Card.Img variant="top" src={item.img} height="310px" width="330px" />
        <Card.Body>
          <Card.Title><h6>{item.name}</h6></Card.Title>
          <Card.Text>
          {item.price}
          </Card.Text>
        </Card.Body>
    </CardGroup>
    )
 }               
})}
</div>
        <div className="break">
            <Image className="img44" src={img44} fluid />
        </div>
        <div className="TEAM">
          <h4>OUR TEAM OF EXPERTS</h4>
          <div className="ourname">
          <h5>Amirah Almani</h5>
          <h5> Marah Almujahed</h5>
          </div>
        </div>
        </div>
    )
}
