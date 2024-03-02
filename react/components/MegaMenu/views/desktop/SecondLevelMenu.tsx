import React from 'react'
import { Icon } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'container__secondLevelItem--title',
  'container__secondLevelItem--list',
  'secondLevelItem__list--item',
  'secondLevelItem__list--button'
]

export const SecondLevelMenu = ({
  handleNavigation,
  imageGroup,
  menu,
  title,
  parentLink
}: any) => {
  console.log(menu, handleNavigation)

  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <section
      style={{ maxWidth: '1000px' }} className='flex'>
      <div className='w-30 mr2'>
        <h2 className={handles['container__secondLevelItem--title']}>{title}</h2>
        <ul className={handles['container__secondLevelItem--list']}>
          {
            menu.map((item: any) => (
              <li className={handles['secondLevelItem__list--item']} key={item.id}>
                <button
                  onClick={() => handleNavigation(item.slug)}
                  className={`${handles['secondLevelItem__list--button']} bn bg-transparent pa0 ma0 lh-solid pointer`}
                >
                  <Icon id='nav-caret--right' />
                  {item.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='w-70 ml2'>
        <a onClick={() => handleNavigation(parentLink)}>
          <img src={`/arquivos/${imageGroup}`} />
        </a>
      </div>
    </section>
  )
}
