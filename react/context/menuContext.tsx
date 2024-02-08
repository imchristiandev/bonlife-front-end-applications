import React, { useEffect } from 'react';
import { createContext } from "react";
import { useQuery } from 'react-apollo';
import GET_MEGA_MENU from '../graphql/getMegaMenu.graphql'
import { updateCurrentMenu } from '../utils/updateCurrentMenu';

const MenuContext = createContext<any | null>(null);

const MenuProvider: React.FC = ({ children }) => {
  const [mobileMenuType, setMobileMenuType] = React.useState('accordion')
  const [mobileMenuDepartmentsTitle, setMobileMenuDepartmentsTitle] = React.useState('')
  const [mobileMenuDepartmentsTitleOn, setMobileMenuDepartmentsTitleOn] = React.useState(false)
  const [mobileMenuItemsBehavior, setMobileMenuItemsBehavior] = React.useState('openParentLink')
  const [mobileMenuIconSize, setMobileMenuIconSize] = React.useState(12)
  const { loading, data } = useQuery(GET_MEGA_MENU)
  const [currentMenu, setCurrentMenu] = React.useState(null)

  useEffect(() => {
    if (data) {
      const currentMenu = updateCurrentMenu(data.menus)
      setCurrentMenu(currentMenu)
    }
  }, [data])

  const stateGroup = {
    mobileMenuType,
    mobileMenuDepartmentsTitle,
    mobileMenuDepartmentsTitleOn,
    mobileMenuItemsBehavior,
    mobileMenuIconSize,
    loading,
    currentMenu
  }

  const methodGroup = {
    setMobileMenuType,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuItemsBehavior,
    setMobileMenuIconSize,
    setCurrentMenu
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
