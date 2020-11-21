import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

function Photo({
  src = 'https://avatars0.githubusercontent.com/u/36340604?s=460&u=6bf30d1be7d96335cf33f222eb8daf08a9239138&v=4',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
export default Photo
