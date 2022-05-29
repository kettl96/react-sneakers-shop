import c from './Card.module.css'
import plus from '../../assets/plus.svg'

import one from '../../assets/sneakers/1.jpg'
import added from '../../assets/added.svg'

const addClick = (item) => {
  return item.target.src = added
}

function Card(props) {
  return (
    <div className={c.card}>
      <div className={c.add__favorite}></div>
      <img src={props.img} alt="" className={c.sneaker__img} />
      <p>{props.name}</p>
      <div className={c.card__info}>
        <div>
          <span>Price:</span>
          <b>{props.price} $</b>
        </div>
        <button onClick={addClick}>
          <img src={plus} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card