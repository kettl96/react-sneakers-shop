import c from './Content.module.css'
import plus from '../../assets/plus.svg'

import one from '../../assets/sneakers/1.jpg'

function Card() {
  return (
    <div className={c.card}>
            <div className={c.add__favorite}></div>
            <img src={one} alt="" className={c.sneaker__img} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className={c.card__info}>
              <div>
                <span>Price:</span>
                <b>122 $</b>
              </div>
              <button>
                <img src={plus} alt="" />
              </button>
            </div>
          </div>
  )
}

export default Card