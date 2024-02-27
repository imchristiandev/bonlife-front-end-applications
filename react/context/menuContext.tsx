import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { useQuery } from 'react-apollo';
import GET_MEGA_MENU from '../graphql/getMegaMenu.graphql'
import { updateCurrentMenu } from '../utils/updateCurrentMenu'

const MenuContext = createContext<any | null>(null);

const MenuProvider: React.FC = ({ children }) => {
  const [mobileMenuType, setMobileMenuType] = useState('')
  const [mobileMenuDepartmentsTitle, setMobileMenuDepartmentsTitle] = useState('')
  const [mobileTitle, setMobileTitle] = useState('')
  const [mobileMenuDepartmentsTitleOn, setMobileMenuDepartmentsTitleOn] = useState(false)
  const [mobileMenuItemsBehavior, setMobileMenuItemsBehavior] = useState('')
  const [mobileMenuIconSize, setMobileMenuIconSize] = useState(12)
  const { loading, data } = useQuery(GET_MEGA_MENU)
  const [currentMenu, setCurrentMenu] = useState(null)
  const [completeMenu, setCompleteMenu] = useState(null)
  const [breadcrumb, setBreadcrumb] = useState(['root'])
  const [desktopDistribution, setDesktopDistribution] = useState('')

  useEffect(() => {
    if (data) {
      const menu = updateCurrentMenu(data?.menus)
      setCurrentMenu(menu)
      setCompleteMenu(data?.menus)
    }
  }, [data])

  useEffect(() => {
    if ( breadcrumb.length === 1 && data?.menus ) {
      const menu = updateCurrentMenu(data.menus)
      setMobileTitle(mobileMenuDepartmentsTitle)
      setCurrentMenu(menu)
    }
  }, [breadcrumb])

  useEffect(() => {
    console.log("🚀 ~ completeMenu:", completeMenu)
  }, [completeMenu])


  const stateGroup = {
    completeMenu,
    breadcrumb,
    currentMenu,
    loading,
    mobileMenuDepartmentsTitle,
    mobileMenuDepartmentsTitleOn,
    mobileMenuIconSize,
    mobileMenuItemsBehavior,
    mobileTitle,
    mobileMenuType,
    desktopDistribution
  }

  const methodGroup = {
    setBreadcrumb,
    setCurrentMenu,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuIconSize,
    setMobileMenuItemsBehavior,
    setMobileTitle,
    setMobileMenuType,
    setDesktopDistribution
  }

  return <MenuContext.Provider value={{
    ...stateGroup,
    ...methodGroup
  }}>
    {children}
  </MenuContext.Provider>;
}

export {
  MenuContext as default,
  MenuProvider
};
