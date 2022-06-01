import c from './Content.module.css'

import Card from '../components/card/Card'

function Favorites({items, onAddToFavorites}) {
  return (
    <div className={c.content__container}>
        <div className={c.content__header}>
          <h1>Your Favorites</h1>
        </div>
        <div className={c.card__wrapper}>
          {items.map(item => {
              return <Card
                key={item._id}
                _id={item._id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                favorited={true}
                onFavorite={(obj) => onAddToFavorites(obj)}
                // onPlus={(obj) => onAddToCart(obj)} 
                />
            })}
        </div>
      </div>
  )
}

export default Favorites