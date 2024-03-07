import React from 'react'
import styles from './styles.css'
// @ts-ignore
import { Icon } from 'vtex.store-icons'

export const GridElement = ({url, imageDesktop, imageMobile, callToAction, type}: any) => {
  let size: string = ''
  switch(type) {
    case 'large':
      size = 'grid__item--large'
      break
    case 'mid':
      size = 'grid__item--mid'
      break
    case 'small':
      size = 'grid__item--small'
      break
  }
  return (
    <div className={styles[size]}>
      <a href={url ? url : '#'}>
        <picture>
          <source media="(min-width: 600px)" srcSet={imageDesktop ? imageDesktop : 'https://picsum.photos/950/950'} />
          <img src={imageMobile ? imageMobile : 'https://picsum.photos/630/470'} alt={ callToAction ? callToAction : '' } />
        </picture>
        <h2>{callToAction ? callToAction : 'Titulo'} <Icon id='nav-caret--right' /></h2>
      </a>
    </div>
  )
}
