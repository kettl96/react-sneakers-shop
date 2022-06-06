/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header'
import Cart from './components/cart/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Slider from './components/slider/Slider';

import slide from './components/slider/Slider.module.css'


export const AppContext = React.createContext({})

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const cartResponse = await axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/cart')
        const favoritesResponse = await axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/favorites')
        const itemsResponse = await axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/items')

        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
        setIsLoading(false)
      } catch (error) {
        alert('Please reload the page')
      }
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find(cartObj => cartObj._id === obj._id)) {
      if (obj.id == undefined) {
        axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/cart')
          .then(res => {
            res.data.forEach(el => {
              if (el._id === obj._id) {
                axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/cart/${el.id}`)
              }
            })
          })
      } else {
        axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/cart/${obj.id}`)
      }
      setCartItems(prev => prev.filter(el => el._id !== obj._id))
    } else {
      axios.post('https://62945f80a7203b3ed067aaae.mockapi.io/cart', obj)
        .then((res) => {
          setCartItems([...cartItems, res.data])
        })
    }
  }

  const onAddToFavorites = (obj) => {
    if (favorites.find(favObj => favObj._id === obj._id)) {
      if (obj.id == undefined) {
        axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/favorites')
          .then(res => {
            res.data.forEach(el => {
              if (el._id === obj._id) {
                axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/favorites/${el.id}`)
              }
            })
          })
      } else {
        axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/favorites/${obj.id}`)
      }
      setFavorites(prev => prev.filter(item => item._id !== obj._id))
    } else {
      axios.post('https://62945f80a7203b3ed067aaae.mockapi.io/favorites', obj)
        .then(res => {
          setFavorites([...favorites, res.data])
        })
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62945f80a7203b3ed067aaae.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (_id) => {
    return cartItems.some(obj => obj._id === _id)
  }
  let body = document.querySelector('body')
  cartOpened ? body.style.overflowY = 'hidden' : body.style.overflowY = 'scroll'

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorites, onAddToCart }}>
      <div className="wrapper">
        <Cart
          opened={cartOpened}
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => { setCartOpened(false) }}
          clearCart={() => setCartItems([])} />
        <Header onClickCart={() => setCartOpened(true)} />
        <Slider>
          <div className={slide.item + ' ' + slide.item_1}>
            <img src="img/slider/1.jpg" alt="sneaker" />
          </div>
          <div className={slide.item + ' ' + slide.item_2}>
            <img src="img/slider/2.jpg" alt="sneaker" />
          </div>
          <div className={slide.item + ' ' + slide.item_3}>
            <img src="img/slider/3.jpg" alt="sneaker" />
          </div>
        </Slider>
        <Routes>
          <Route path='/' element={
            <Home
              isLoading={isLoading}
              items={items}
              cartItems={cartItems}
              favorites={favorites}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearch={onChangeSearch} />} >
          </Route>
        </Routes>
        <Routes>
          <Route path='/favorites' element={
            <Favorites />}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/orders' element={
            <Orders
              favorites={favorites}
              isLoading={isLoading} />}>
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
