import React, { useContext } from 'react'
import MenuContext from '../../../../context/menuContext'
import { FirstLevelMenu } from './FirstLevelMenu'
import { LoadingDesktop } from './LoadingDesktop'



export const MegaMenuDesktop = () => {

  const {
    completeMenu,
    loading,
  } = useContext(MenuContext)

  // Methods
  const handleNavigation = (slug: string) => {
    const newSlug = slug.startsWith('/') ? slug : `/${slug}`
    window.location.href =(window.location.origin + newSlug)
  }

  return (
    (loading) ?
    <LoadingDesktop />:
    <FirstLevelMenu
      menu={completeMenu}
      handleNavigation={handleNavigation}
    />
  )
}
