import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { SecondLevelMenu } from './SecondLevelMenu'

import styles from '../../styles.css'

export const FirstLevelMenu = ({
  menu,
  handleNavigation
}: any) => {
  console.log("🚀 ~ menu:", menu)

  const cleanImages = (str: string) =>
    str.replace(/[{}]/g, "")

  const printFirstLevelMenu = () => {
    return (
      menu && menu.map((item: any) => {
        return <li key={item?.id}>
          <button
            onClick = { () => {handleNavigation( item?.slug )} }
            className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
          >
            <Icon id={ item?.icon } /> { item?.name }
          </button>
          {
          ( item?.menu && item?.menu.length > 1 ) &&
          <SecondLevelMenu
            menu={ item?.menu }
            title= { item?.name }
            handleNavigation={ handleNavigation }
            imageGroup={ cleanImages(item?.styles) }
            parentLink={ item?.slug }
          />
          }
        </li>
        }
      ))
  }
  return (
    <ul className={styles['list']}>
      { printFirstLevelMenu() }
    </ul>
  )
}
