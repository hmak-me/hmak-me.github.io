import React from "react"
import styles from './index.module.styl'

const DotRating = ({ rate }: {rate: number}) => {
  const dots = [
    ...(new Array(Math.floor(rate)).fill(1)),
    ...(rate !== Math.floor(rate) ? [rate - Math.floor(rate)] : []),
    ...(new Array(5 - Math.ceil(rate)).fill(0))
  ]

  return (
    <div className={styles.dots}>
      {dots.map((key, index) => {
        return (
          <div key={index} className={styles.dot}>
            <div className={styles.value}>
              <div className={styles.fill} style={{ width: `${key * 100}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DotRating
