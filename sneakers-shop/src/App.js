import c from './Content.module.css'

import search from './assets/search.svg'

import one from './assets/sneakers/1.jpg'
import two from './assets/sneakers/2.jpg'
import three from './assets/sneakers/3.jpg'
import four from './assets/sneakers/4.jpg'


import Card from './components/card/Card'
import Header from './components/header/Header'
import Cart from './components/cart/Cart';

const cardInfoArr = [
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 122, img: one },
  { name: 'Мужские Кроссовки Nike Air Max 270', price: 210, img: two },
  { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 99, img: three },
  { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 199, img: four },
]

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
          {cardInfoArr.map(item => {
            return <Card
              name={item.name}
              price={item.price}
              img={item.img}  />
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
