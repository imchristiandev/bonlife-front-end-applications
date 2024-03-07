import React from 'react';
import { MenuProvider } from './context/menuContext'
import { MegaMenu } from './components/MegaMenu';

interface IMegaMenuProps {
  mobileMenuType: string
  mobileMenuDepartmentsTitle: string
  mobileMenuDepartmentsTitleOn: boolean
  mobileMenuItemsBehavior: string
  mobileMenuIconSize: number
  desktopDistribution: string
}

const CompMegaMenu = ({
  mobileMenuType,
  mobileMenuDepartmentsTitle,
  mobileMenuDepartmentsTitleOn,
  mobileMenuItemsBehavior,
  mobileMenuIconSize,
}: IMegaMenuProps) => {
  return (
    <MenuProvider>
      <MegaMenu
        mobileMenuTypeProp={mobileMenuType}
        mobileMenuDepartmentsTitleProp={mobileMenuDepartmentsTitle}
        mobileMenuDepartmentsTitleOnProp={mobileMenuDepartmentsTitleOn}
        mobileMenuItemsBehaviorProp={mobileMenuItemsBehavior}
        mobileMenuIconSizeProp={mobileMenuIconSize}
      />
    </MenuProvider>
  )
}


CompMegaMenu.schema = {
  title: 'Mega Menu',
  type: 'object',
  properties: {
    mobileMenuType: {
      title: 'Mobile Menu Type',
      type: 'string',
      enum: ['accordion', 'drawer']
    },
    mobileMenuDepartmentsTitle: {
      title: 'Mobile Menu Departments Title',
      type: 'string'
    },
    mobileMenuDepartmentsTitleOn: {
      title: 'Activate Menu Departments Title',
      type: 'boolean'
    },
    mobileMenuItemsBehavior: {
      title: 'Mobile Menu Items Behavior',
      type: 'string',
      enum: ['openParentLink', 'openChildren']
    },
    mobileMenuIconSize: {
      title: 'Mobile Icon Menu Size',
      type: 'number'
    }
  }
}

export default CompMegaMenu
