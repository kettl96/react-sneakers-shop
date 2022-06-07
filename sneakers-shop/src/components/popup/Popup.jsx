import p from './Popup.module.css'
import React from 'react';
import { AppContext } from './../../App';

function Popup({ popUpClick, visible, item = [] }) {
  console.log(item);
  const { onAddToCart } = React.useContext(AppContext)

  return (
    <>
      <div onClick={() => popUpClick()} className={`${p.scale_wrapper} ${visible ? p.visible_back : ''}`}></div>
      <div className={`${p.scale_container} ${visible ? p.visible : ''}`} id='scale'>
        <img src={item.img == undefined ? '' : item.img} alt="" id='scale_img' className={p.img} />
        <div>{item.name == undefined ? '' : item.name}</div>
        <button onClick={()=>{onAddToCart(item)}}>Add to cart</button>
      </div>
    </>
  )
}

export default Popup