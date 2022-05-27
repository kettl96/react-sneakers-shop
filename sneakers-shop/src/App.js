import h from './Header.module.css'
import c from './Content.module.css'
import logo from './assets/logo.svg'
import cart from './assets/cart.svg'
import favorites from './assets/favorites.svg'
import user from './assets/user.svg'
import plus from './assets/plus.svg'
import heart from './assets/heart.png'

import one from './assets/sneakers/1.jpg'

function App() {
  return (
    <div className="wrapper">
      <header className={h.header}>
        <div className={h.logo__container}>
          <img src={logo} alt="logo" />
          <div className={h.logo__info}>
            <h3>React Sneakers</h3>
            <p>Best sneaker store</p>
          </div>
        </div>
        <ul className={h.header__settings_container}>
          <li className={h.cart__container}>
            <img src={cart} alt="cart" />
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

      <div className={c.content__container}>
        <h1>All Sneakers</h1>

        <div className={c.card}>
          <div className={c.add__favorite}></div>
          {/* <img src={heart} alt="" className={c.add__favorite} /> */}
         
          <img src={one} alt="" className={c.sneaker__img}/>
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
      </div>
    </div>
  );
}

export default App;
