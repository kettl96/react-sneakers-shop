import React from 'react'
import ContentLoader from "react-content-loader"
import c from './Card.module.css'

import plus from '../../assets/plus.svg'
import addToCart from '../../assets/added.svg'
import notFav from '../../assets/heart.png'
import fav from '../../assets/heart-add.png'
import { AppContext } from './../../App';


function Card({ _id, id, img, name, loading = false,
  price, favorites = false }) {
  const {isItemAdded, onAddToFavorites, onAddToCart} = React.useContext(AppContext)


  const onClickPlus = () => {
    onAddToCart({ img, name, price, _id, id })
  }
  const onClickFavorite = () => {
    onAddToFavorites({img, name, price, _id, id})
  }

  return (
    <div className={c.card}>
      {loading
        ? <ContentLoader
          speed={1}
          width={150}
          height={250}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#dff3ff"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="119" rx="4" ry="4" width="93" height="15" />
          <rect x="0" y="100" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="161" rx="6" ry="6" width="80" height="24" />
        </ContentLoader>
        : <>
          <div className={c.add__favorite} onClick={onClickFavorite}>
            <img src={favorites ? fav : notFav} alt="favorite" />
          </div>
          <img src={img} alt="" className={c.sneaker__img} />
          <p>{name}</p>
          <div className={c.card__info}>
            <div>
              <span>Price:</span>
              <b>{price} $</b>
            </div>
            <button onClick={onClickPlus}>
              <img src={isItemAdded(_id) ? addToCart : plus} alt="" />
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default Card