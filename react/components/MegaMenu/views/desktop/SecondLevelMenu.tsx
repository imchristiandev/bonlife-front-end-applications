import React from 'react'
import styles from '../../styles.css'

export const SecondLevelMenu = ({
  handleNavigation,
  imageGroup,
  menu,
  title,
  parentLink
}: any) => {
  console.log(menu, handleNavigation)
  return (
    <section className='flex'>
      <div className='w-50 mr2'>
        <h2>{title}</h2>
        <ul className={styles['list']}>
          {
            menu.map((item: any) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.slug)}
                  className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
                >
                  {item.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='w-50 ml2'>
        <a onClick={() => handleNavigation(parentLink)}>
          <img src={`/arquivos/${imageGroup}`} />
        </a>
      </div>
    </section>
  )
}
