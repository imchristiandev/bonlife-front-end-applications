import React, { useEffect, useState, useContext } from 'react'
import MenuContext from '../../../../context/menuContext'
import { updateCurrentMenu } from '../../../../utils/updateCurrentMenu'
// @ts-ignore
import { Icon } from 'vtex.store-icons'
import { useQuery } from 'react-apollo'
import GET_MENU from '../../../../graphql/getMenu.graphql'
import { useRuntime } from 'vtex.render-runtime'
import { DrawerMenu } from './Drawer'
import { AccordionMenu } from './AccordionMenu'

export const MegaMenuPhone = () => {
  const {
    breadcrumb,
    setBreadcrumb,
    loading,
    mainMenu,
    setCurrentMenu,
    mobileMenuType
  } = useContext(MenuContext)

  const [menuId, setMenuId] = useState('')

  // * Main hooks
  const { data } = useQuery(GET_MENU, { variables: { menuId } });
  const { navigate } = useRuntime()

  // * Re-render the menu when the data is ready
  useEffect(() => {
    if (data?.menu?.menu) {
      const newMenu = updateCurrentMenu(data.menu.menu)
      setCurrentMenu(newMenu)
    } else {
      setCurrentMenu(mainMenu)
    }
  }, [data, menuId, breadcrumb])


  const updateChildrenMenu = (menuId: string) => {
    setBreadcrumb( [...breadcrumb, menuId] )
    setMenuId( menuId )
  }

  const handleNavigation = (slug: string) => {
    const newSlug = slug.startsWith('/') ? slug : `/${slug}`
    navigate({
      to: `${newSlug}/`,
    })
  }

  // * Mega Menu Phone methods
  const handleBack = () => {
    if (breadcrumb.length > 1) {
      const currentBreadCrumb = breadcrumb.slice(0, -1)
      setBreadcrumb(currentBreadCrumb)
    }
  }

  return (

    (loading) ?
    <div>Loading...</div> :
    (mobileMenuType === 'drawer') ? (
    <DrawerMenu
      handleBack={handleBack}
      updateChildrenMenu={updateChildrenMenu}
      handleNavigation={handleNavigation}
    />
    ) : (
    <AccordionMenu
      handleNavigation={handleNavigation}
    />
    )
  )
}
