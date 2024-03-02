import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'list__item--button',
  'item__button--icon',
  'item__button--icon-two',
  'item__button--text'
]
interface IHandleChildrenLink {
  menu: any
  handleChildren: (event: any) => void
  handleNavigation: (slug: string) => void
}

export const HandleChildrenLink = ({
  menu,
  handleChildren,
  handleNavigation
}: IHandleChildrenLink) => {

  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <button
      className={`${handles['list__item--button']} flex justify-between w-100 pa3 bn bg-transparent pa0 ma0 lh-solid pointer`}
      onClick={(event: any) => {
        (menu.menu && menu.menu.length > 1) ?
          handleChildren(event) :
          handleNavigation(menu.slug)
      }}
    >
      <div className={handles['item__button--icon']}>
        <Icon id={menu.icon} />
        <span className={handles['item__button--text']}>{menu.name}</span>
      </div>
      {
        (menu.menu && menu.menu.length > 1) &&
        <div className={handles['item__button--icon-two']}>
          <Icon id={menu.icon} />
        </div>
      }
    </button>
  )
}
