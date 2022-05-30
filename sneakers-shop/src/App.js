/* eslint-disable */
import React from 'react';
import axios from 'axios';
import c from './Content.module.css'

import Card from './components/card/Card'
import Header from './components/header/Header'
import Cart from './components/cart/Cart';

import search from './assets/search.svg';
import cross from './assets/plus.svg'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/items')
      .then(response => setItems(response.data))
    axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/cart')
      .then(response => setCartItems(response.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://62945f80a7203b3ed067aaae.mockapi.io/cart', obj)
      .then((res) => {
        setCartItems([...cartItems, res.data])
      })

    // if (obj.isAdd) {

    //   axios.post('https://62945f80a7203b3ed067aaae.mockapi.io/cart', obj)
    //     .then((res) => {
    //       console.log(res.data);
    //       setCartItems([...cartItems, res.data])
    //       // if (!obj.isAdd) {
    //       //   let filter = cartItems.filter(e => e._id !== obj._id)
    //       //   setCartItems(filter)
    //       // } else  setCartItems([...cartItems, res.data]);
    //     })
    // } else {
    //   axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/cart')
    //     .then(res => {
    //       console.log(res.data);
    //     })
    //   console.log(obj);
    //   // onRemoveItem(obj.id)
    // }

  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart
        onRemove={onRemoveItem}
        items={cartItems}
        onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className={c.content__container}>
        <div className={c.content__header}>
          <h1>{searchValue ? `Search by: "${searchValue}"` : 'All Sneakers'}</h1>
          <div className={c.search__container}>
            <img src={search} alt="Search" />
            <input type="text" placeholder='Search...'
              onChange={onChangeSearch}
              value={searchValue} />
            {searchValue && <img src={cross} alt="del" className={c.cross}
              onClick={() => setSearchValue('')} />}
          </div>
        </div>
        <div className={c.card__wrapper}>
          {items
            .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map(item => {
              return <Card
                key={item._id}
                _id={item._id}
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
