import c from './Content.module.css'

import search from './assets/search.svg'
import removeBtn from './assets/removeBtn.svg'
import nextArrow from './assets/nextArrow.svg'

import one from './assets/sneakers/1.jpg'





import Card from './components/card/Card'
import Header from './components/header/Header'
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className={c.content__container}>
        <div className={c.content__header}>
          <h1>All Sneakers</h1>
          <div className={c.search__container}>
            <img src={search} alt="Search" />
            <input type="text" placeholder='Search...' />
          </div>
        </div>
        <div className={c.card__wrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
  );
}

export default App;
