/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header'
import Cart from './components/cart/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/items')
      .then(response => setItems(response.data))
    axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/cart')
      .then(response => setCartItems(response.data))
    axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/favorites')
      .then(response => setFavorites(response.data))
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

  const onAddToFavorites = (obj) => {
    console.log(obj.id);
    if (favorites.find(favObj => favObj._id === obj._id)) {
      if (obj.id == undefined) {
        console.log(5555);
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

  return (
    <div className="wrapper">
      {cartOpened && <Cart
        onRemove={onRemoveItem}
        items={cartItems}
        onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path='/' element={<Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearch={onChangeSearch}
          onAddToFavorites={onAddToFavorites}
          onAddToCart={onAddToCart} />} ></Route>
      </Routes>
      <Routes>
        <Route path='/favorites' element={<Favorites
          items={favorites}
          onAddToFavorites={onAddToFavorites}
        />}></Route>
      </Routes>


    </div>
  );
}

export default App;
