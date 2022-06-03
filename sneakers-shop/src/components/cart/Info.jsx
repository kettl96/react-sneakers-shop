import cart from './Cart.module.css'

import prevArrow from '../../assets/prev-arrow.svg'

function Info({title, description, img, onClose}) {
  return (
    <div className={cart.empty__container}>
    <img src={img} alt="empty" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={onClose}>
      Back to shopping
      <img src={prevArrow} className={cart.return__arrow} alt="return" />
    </button>
  </div>
  )
}

export default Info