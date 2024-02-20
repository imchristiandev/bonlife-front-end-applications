import React, { useContext } from 'react'
import MenuContext from '../../../../context/menuContext'
import { FirstLevelMenu } from './FirstLevelMenu'
import { useRuntime } from 'vtex.render-runtime'

export const MegaMenuDesktop = () => {
  const {
    completeMenu,
    loading,
  } = useContext(MenuContext)

  const { navigate } = useRuntime()

  const handleNavigation = (slug: string) => {
      const newSlug = slug.startsWith('/') ? slug : `/${slug}`
      navigate({
        to: `${newSlug}/`,
      })
    }
  // Effects

  // Methods

  return (
    (loading) ?
    <div>'Loading...'</div> :
    <FirstLevelMenu
      menu={completeMenu}
      handleNavigation={handleNavigation}
    />
  )
}
