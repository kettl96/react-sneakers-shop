import  React  from 'react';
import c from './Content.module.css'

import Card from '../components/card/Card'
import { AppContext } from './../App';

function Favorites() {
  const {favorites} = React.useContext(AppContext)

  return (
    <div className={c.content__container}>
        <div className={c.content__header}>
          <h1>Your Favorites</h1>
        </div>
        <div className={c.card__wrapper}>
          {favorites.map(item => {
              return <Card
                key={item._id}
                _id={item._id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                favorited={true}                
                />
            })}
        </div>
      </div>
  )
}

export default Favorites