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
  desktopDistribution,
}: IMegaMenuProps) => {
  return (
    <MenuProvider>
      <MegaMenu
        mobileMenuTypeProp={mobileMenuType}
        mobileMenuDepartmentsTitleProp={mobileMenuDepartmentsTitle}
        mobileMenuDepartmentsTitleOnProp={mobileMenuDepartmentsTitleOn}
        mobileMenuItemsBehaviorProp={mobileMenuItemsBehavior}
        mobileMenuIconSizeProp={mobileMenuIconSize}
        desktopDistributionProp={desktopDistribution}
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
    },
    desktopDistribution: {
      title: 'Desktop Distribution',
      type: 'string',
      enum: ['10/90', '20/80', '30/70', '40/60', '50/50', '60/40', '70/30', '80/20', '90/10']
    }
  }
}

export default CompMegaMenu
