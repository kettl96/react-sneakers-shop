import React, { Children, cloneElement } from 'react'
import s from './Slider.module.css'

const PAGE_WIDTH = 960

function Slider({ children }) {
  const [pages, setPages] = React.useState([])
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: '100%',
            maxWidth: '100%',
          }
        })
      })
    )
  }, [children])

  const rightClick = () => {
    setOffset((cur) => {
      if (cur === -(PAGE_WIDTH * 2)) return 0
      return Math.max(cur - PAGE_WIDTH, -(PAGE_WIDTH * (pages.length - 1)))
    })
  }
  const leftClick = () => {
    setOffset((cur) => {
      if (cur + PAGE_WIDTH > 0) return -(PAGE_WIDTH * 2)
      return Math.min(cur + PAGE_WIDTH, 0)
    })
  }

  return (
    <div className={s.main__container}>
      <div className={s.arrow + ' ' + s.arrow_left} onClick={leftClick}>&#8656;</div>
      <div className={s.window}>
        <div className={s.items__container}
          style={{
            transform: `translateX(${offset}px)`
          }}>
          {pages}
        </div>
      </div>
      <div className={s.arrow + ' ' + s.arrow_right} onClick={rightClick}>&#8658;</div>

    </div>
  )
}

export default Slider