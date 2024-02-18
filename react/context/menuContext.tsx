import React, { useEffect } from 'react';
import { createContext } from "react";
import { useQuery } from 'react-apollo';
import GET_MEGA_MENU from '../graphql/getMegaMenu.graphql'
import { updateCurrentMenu } from '../utils/updateCurrentMenu'

const MenuContext = createContext<any | null>(null);

const MenuProvider: React.FC = ({ children }) => {
  const [mobileMenuType, setMobileMenuType] = React.useState('')
  const [mobileMenuDepartmentsTitle, setMobileMenuDepartmentsTitle] = React.useState('')
  const [mobileMenuDepartmentsTitleOn, setMobileMenuDepartmentsTitleOn] = React.useState(false)
  const [mobileMenuItemsBehavior, setMobileMenuItemsBehavior] = React.useState('')
  const [mobileMenuIconSize, setMobileMenuIconSize] = React.useState(12)
  const { loading, data } = useQuery(GET_MEGA_MENU)
  const [currentMenu, setCurrentMenu] = React.useState(null)
  const [mainMenu, setMainMenu] = React.useState(null)
  const [accordionMenu, setAccordionMenu] = React.useState(null)
  const [breadcrumb, setBreadcrumb] = React.useState(['root'])

  useEffect(() => {
    if (data) {
      const menu = updateCurrentMenu(data.menus)
      setCurrentMenu(menu)
      setMainMenu(menu)
      setAccordionMenu(data.menus)
    }
  }, [data])

  useEffect(() => {
    (breadcrumb.length === 1) &&
      setCurrentMenu(mainMenu)
  }, [breadcrumb])

  const stateGroup = {
    accordionMenu,
    breadcrumb,
    currentMenu,
    loading,
    mainMenu,
    mobileMenuDepartmentsTitle,
    mobileMenuDepartmentsTitleOn,
    mobileMenuIconSize,
    mobileMenuItemsBehavior,
    mobileMenuType,
  }

  const methodGroup = {
    setBreadcrumb,
    setCurrentMenu,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuIconSize,
    setMobileMenuItemsBehavior,
    setMobileMenuType,
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
