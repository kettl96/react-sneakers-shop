import h from './Header.module.css'
import logo from '../../assets/logo.svg'
import cartImg from '../../assets/cart.svg'
import favorites from '../../assets/favorites.svg'
import user from '../../assets/user.svg'

function Header(props) {
  return (
    <header className={h.header}>
      <div className={h.logo__container}>
        <img src={logo} alt="logo" />
        <div className={h.logo__info}>
          <h3>React Sneakers</h3>
          <p>Best sneaker store</p>
        </div>
      </div>
      <ul className={h.header__settings_container}>
        <li className={h.cart__container}
            onClick={props.onClickCart}>
          <img src={cartImg} alt="cart" />
          <span>1201 rub.</span>
        </li>
        <li>
          <img src={favorites} alt="fav" />
        </li>
        <li>
          <img src={user} alt="user" />
        </li>
      </ul>
    </header>
  )
}

export default Header