import React from 'react'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { SecondLevelMenu } from './SecondLevelMenu'

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
          <button onClick = { () => {handleNavigation( item?.slug )} } >
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
    <ul>
      { printFirstLevelMenu() }
    </ul>
  )
}
