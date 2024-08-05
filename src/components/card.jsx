import React from 'react'
import CardItem from './cardItem'
import './card.css';

function Card() {
  return (
    <div className='cards'>
        <h1>Check out this react website!</h1>
        <div className='card_container'>
            <div className='card_wrap'>
                <ul className='card_item'>
                    <CardItem src="images/codeimg.jpg" 
                    text="Dive into the world of React Js and have coding experiences"
                    label='Adventure'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card
