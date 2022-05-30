import React from 'react'
import c from './Card.module.css'
import plus from '../../assets/plus.svg'

import added from '../../assets/added.svg'

function Card({ onFavorite, _id, img, name, price, onPlus }) {

  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    let isAdd = !isAdded
    onPlus({ img, name, price, isAdd, _id })
    setIsAdded(!isAdded)
  }

  return (
    <div className={c.card}>
      <div className={c.add__favorite} onClick={onFavorite}></div>
      <img src={img} alt="" className={c.sneaker__img} />
      <p>{name}</p>
      <div className={c.card__info}>
        <div>
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <button onClick={onClickPlus}>
          <img src={isAdded ? added : plus} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card