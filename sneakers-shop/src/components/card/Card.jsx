import React from 'react'
import c from './Card.module.css'

import plus from '../../assets/plus.svg'
import addToCart from '../../assets/added.svg'
import notFav from '../../assets/heart.png'
import fav from '../../assets/heart-add.png'


function Card({ onFavorite, _id, id, img, name, price, onPlus, favorited = false, added = false }) {

  const [isAdded, setIsAdded] = React.useState(added)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    let isAdd = !isAdded
    onPlus({ img, name, price, isAdd, _id, id })
    setIsAdded(!isAdded)
  }
  const onClickFavorite = () => {
    onFavorite({ img, name, price, _id, id })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={c.card}>
      <div className={c.add__favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? fav : notFav} alt="favorite" />
      </div>
      <img src={img} alt="" className={c.sneaker__img} />
      <p>{name}</p>
      <div className={c.card__info}>
        <div>
          <span>Price:</span>
          <b>{price} $</b>
        </div>
        <button onClick={onClickPlus}>
          <img src={isAdded ? addToCart : plus} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card