import c from './Content.module.css'
import search from '../assets/search.svg';
import cross from '../assets/plus.svg'

import Card from '../components/card/Card'

function Home({items, cartItems, favorites, searchValue, setSearchValue, onChangeSearch, onAddToFavorites, onAddToCart}) {
  return (
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
          {/* {console.log(cartItems)} */}
          {/* {console.log(items)} */}
          {items
            .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map(item => {
              return <Card
                key={item._id}
                id={item.id}
                _id={item._id}
                name={item.name}
                price={item.price}
                img={item.img}
                added={cartItems.some(obj => obj._id === item._id)}
                favorited={favorites.some(obj => obj._id === item._id)}
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCart(obj)} />
            })}
        </div>
      </div>
  )
}

export default Home