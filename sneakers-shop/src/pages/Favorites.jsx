import React from 'react';
import c from './Content.module.css'

import Card from '../components/card/Card'
import Info from '../components/info/Info';
import { AppContext } from './../App';

import favSmile from '../assets/fav-smile.png'

function Favorites() {
  const { favorites } = React.useContext(AppContext)

  return (
    <div className={c.content__container}>
      <div className={c.content__header}>
        <h1>Your Favorites</h1>
      </div>
      <div className={c.card__wrapper}>
        {favorites.length === 0 ?
          <Info
            module={'favorite'}
            img={favSmile}
            title={`Your favorites is empty :(`}
            description={`You didn't add anything`} />
          : favorites.map(item => {
            return <Card
              key={item._id}
              _id={item._id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              favorites={true}
            />
          })}
      </div>
    </div>
  )
}

export default Favorites