import cart from './Cart.module.css'
import removeBtn from '../../assets/removeBtn.svg'
import nextArrow from '../../assets/nextArrow.svg'
import { React } from 'react';


function Cart({ onClose, items = [] }) {

  return (
    <div className={cart.cart__sidebar_wrapper}>
      <div className={cart.cart__sidebar}>
        <h2>
          Cart
          <img className={cart.cart__removeBtn} src={removeBtn} alt="remove"
            onClick={onClose} />
        </h2>
        {items.length > 0 &&
          <div className={cart.content__wrapper}>
            <div>
              {items.map(obj => (
                <div className={cart.cartItem}>
                  <img src={obj.img} alt='sneakers' width={80} height={75} />
                  <div className={cart.cartItem__info}>
                    <p>{obj.name}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img className={cart.cart__removeBtn} src={removeBtn} alt="remove" />
                </div>
              ))}
            </div>
            <div className={cart.cart__result}>
              <div className={cart.result__total}>
                <div>Total:</div>
                <div className={cart.dash}></div>
                <div><b>122 $</b></div>
              </div>
              <div className={cart.result__total}>
                <div>Tax 5%:</div>
                <div className={cart.dash}></div>
                <div><b>22 $</b></div>
              </div>
              <button>
                Go to order
                <img className={cart.arrow} src={nextArrow} alt="next" />
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart