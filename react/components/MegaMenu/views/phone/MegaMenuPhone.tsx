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
    setCurrentMenu,
    mobileMenuType,
    setMobileMenuDepartmentsTitle,
    mobileMenuDepartmentsTitleOn,
    mobileTitle
  } = useContext(MenuContext)

  const [menuId, setMenuId] = useState('')

  // * Main hooks
  const { data } = useQuery(GET_MENU, { variables: { menuId } });
  const { navigate } = useRuntime()

  // * Re-render the menu when the data is ready
  useEffect(() => {
    console.log("possible error")
    if (data?.menu?.menu) {
      const newMenu = updateCurrentMenu(data?.menu?.menu)
      setCurrentMenu(newMenu)
    }
  }, [data, menuId, breadcrumb])

  const updateChildrenMenu = (menuId: string, menuName: string) => {
    setBreadcrumb( [...breadcrumb, menuId] )
    setMobileMenuDepartmentsTitle(menuName)
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
    <section className={`flex flex-column w-100`}>
      { mobileMenuDepartmentsTitleOn &&
        <h2 className='pl6 pr6 ma0'>{ mobileTitle }</h2>
      }
    {
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
    }
    </section>
  )
}
