import React from 'react';
import axios from 'axios';
import c from './Content.module.css'

import Card from '../components/card/Card'

function Orders({ favorites, isLoading }) {
  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://62945f80a7203b3ed067aaae.mockapi.io/orders')
      setOrders(data);
    })()
  }, [])

  return (
    <div className={c.content__container}>
      <div className={c.content__header}>
        <h1>My orders</h1>
      </div>
      {isLoading && [...Array(3)].map((e, i) => {
        return <div className={c.order__cards}>
          <Card key={i} loading={isLoading} />
        </div>
      })}
      {orders.map(item => {
        return <div key={item.id} className={c.order__wrapper}>
          <h5>Order #{item.id}</h5>
          <div className={c.order__cards}>{item.items.map(el => {
            return <Card
              loading={isLoading}
              key={el._id}
              _id={el._id}
              id={el.id}
              name={el.name}
              price={el.price}
              img={el.img}
              favorites={favorites.some(obj => obj._id === el._id)} />
          })}</div>
        </div>
      })}

    </div>
  )
}

export default Orders