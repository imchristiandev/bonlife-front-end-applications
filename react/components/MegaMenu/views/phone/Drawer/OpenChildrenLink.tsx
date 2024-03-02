import React, { useContext } from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { IMenuItem } from '../../../../../typings/MegaMenu'
import { useCssHandles } from 'vtex.css-handles'
import MenuContext from '../../../../../context/menuContext'

const CSS_HANDLES = [
  'drawer__item--button',
  'item__button--icon',
  'item__button--icon-two',
  'item__button--text'
]

interface IOpenParentLink {
  menu: IMenuItem
  updateChildrenMenu: (menuId: string, menuName: string) => void
  handleNavigation: (slug: string) => void
}

export const OpenChildrenLink = ({
  menu,
  updateChildrenMenu,
  handleNavigation
}: IOpenParentLink) => {

  const { handles } = useCssHandles(CSS_HANDLES)

  const {
    breadcrumb
  } = useContext(MenuContext)

  return (
    <button
      className={`${handles['drawer__item--button']}  flex justify-between w-100 pa3 bn bg-transparent pa0 ma0 lh-solid pointer`}
      onClick={() => {
        menu.hasChildren ?
          updateChildrenMenu(menu.id, menu.name) :
          handleNavigation(menu.slug)
      }}
    >
      <div className={handles['item__button--icon']}>
        {
          (breadcrumb.length === 1)
          &&
          <Icon id={menu.icon} />
        }
        <span className={handles['item__button--text']}>{menu.name}</span>
      </div>
      {
        menu.hasChildren &&
        <div className={handles['item__button--icon-two']}>
          <Icon id={menu.icon} />
        </div>
      }
    </button>
  )
}
