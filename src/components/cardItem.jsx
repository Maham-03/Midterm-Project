import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className='cards_item'>
        <Link className='carditem_link' to={props.path}>
            <figure className='carditem_pic' data-category={props.label}>
                <img src={props.src} alt="" className='carditem_img'/>
            </figure>
            <div className='carditem_info'>
                <h5 className='carditem_text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
