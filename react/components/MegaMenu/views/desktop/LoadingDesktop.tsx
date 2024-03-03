import React from 'react'
import { useCssHandles } from 'vtex.css-handles';
import styles from '../../styles.css'

const CSS_HANDLES = [
  'loading',
  'loading__container',
  'loading__size'
];

export const LoadingDesktop = () => {
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <div className='flex justify-center'>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
      <div className={`${handles['loading__container']} ${styles.loading__size}`}></div>
    </div>
  )
}
