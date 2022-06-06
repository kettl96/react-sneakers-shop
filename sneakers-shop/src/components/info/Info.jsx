import cart from './Cart.module.css'
import favorite from './Favorite.module.css'

import prevArrow from '../../assets/prev-arrow.svg'
import { Link } from 'react-router-dom'

function Info({ title, description, img, onClose, module }) {
  const name = () => {
    if (module === 'cart') return cart
    if (module === 'favorite') return favorite
  }
  return (
    <div className={name().empty__container}>
      <img src={img} alt="empty" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to='/'>
        <button onClick={onClose}>
          Back to shopping
          <img src={prevArrow} className={name().return__arrow} alt="return" />
        </button>
      </Link>
    </div>
  )
}

export default Info