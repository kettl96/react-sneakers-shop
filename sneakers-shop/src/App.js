import React from 'react';
import c from './Content.module.css'

import Card from './components/card/Card'
import Header from './components/header/Header'
import Cart from './components/cart/Cart';

import search from './assets/search.svg';

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://62945f80a7203b3ed067aaae.mockapi.io/items')
      .then(response => {
        return response.json()
      })
      .then(json => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    if (!obj.isAdd) {
      let filter = cartItems.filter(e => e.id !== obj.id)
      setCartItems(filter)
    } else setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart
        items={cartItems}
        onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className={c.content__container}>
        <div className={c.content__header}>
          <h1>All Sneakers</h1>
          <div className={c.search__container}>
            <img src={search} alt="Search" />
            <input type="text" placeholder='Search...' />
          </div>
        </div>
        <div className={c.card__wrapper}>
          {items.map(item => {
            return <Card
              id={item._id}
              name={item.name}
              price={item.price}
              img={item.img}
              onFavorite={() => console.log('fav')}
              onPlus={(obj) => onAddToCart(obj)} />
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
