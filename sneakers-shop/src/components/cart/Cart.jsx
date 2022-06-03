import React from 'react';
import axios from 'axios';
import cart from './Cart.module.css'
import removeBtn from '../../assets/removeBtn.svg'
import nextArrow from '../../assets/nextArrow.svg'
import emptyCart from '../../assets/empty-cart.png'
import order from '../../assets/order.png'


import Info from './Info';

function Cart({ onClose, items = [], onRemove, clearCart }) {
  let body = document.querySelector('body')
  body.style.overflowY = 'hidden';

  const [isOrderComplete, setOrderComplete] = React.useState(false)

  const onClickOrder = async (obj) => {
    axios.post('https://62945f80a7203b3ed067aaae.mockapi.io/orders', {items: obj})
    setOrderComplete(true)
    clearCart()
    for (let key in obj) {
      await axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/cart/${obj[key].id}`)
    }
  }

  return (
    <div className={cart.cart__sidebar_wrapper}
      onClick={(el) => {
        if (el.target.className === 'Cart_cart__sidebar_wrapper__LKbfX') onClose()
      }}>
      <div className={cart.cart__sidebar}>
        <h2>
          Cart
          <img className={cart.cart__removeBtn} src={removeBtn} alt="remove"
            onClick={() => onClose
              (body.style.overflowY = 'scroll')} />
        </h2>

        {items.length === 0 &&
          <Info
            onClose={onClose}
            title={isOrderComplete ? 'Order Complete' : 'Cart is Empty'}
            description={isOrderComplete ? 'Your order will be ready for delivery soon' : 'Add some stuff, buddy!'}
            img={isOrderComplete ? order : emptyCart} />}

        {items.length > 0 &&
          <div className={cart.content__wrapper}>
            <div>
              {items.map(obj => (
                <div key={obj._id} className={cart.cartItem}>
                  <img src={obj.img} alt='sneakers' width={80} height={75} />
                  <div className={cart.cartItem__info}>
                    <p>{obj.name}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className={cart.cart__removeBtn} src={removeBtn} alt="remove" />
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
              <button onClick={() => onClickOrder(items)}>
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