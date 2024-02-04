import React, { useContext, useEffect } from 'react'
import MenuContext from '../../context/menuContext'
import { MegaMenuUI } from './MegaMenuUI'

export const MegaMenu = ({
  mobileMenuType,
  mobileMenuDepartmentsTitle,
  mobileMenuDepartmentsTitleOn,
  mobileMenuItemsBehavior,
  mobileMenuIconSize
}: any) => {
  const {
    setMobileMenuType,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuItemsBehavior,
    setMobileMenuIconSize
  } = useContext(MenuContext)

  useEffect(() => {
    setMobileMenuType(mobileMenuType)
    setMobileMenuDepartmentsTitle(mobileMenuDepartmentsTitle)
    setMobileMenuDepartmentsTitleOn(mobileMenuDepartmentsTitleOn)
    setMobileMenuItemsBehavior(mobileMenuItemsBehavior)
    setMobileMenuIconSize(mobileMenuIconSize)
  }
  , [mobileMenuType, mobileMenuDepartmentsTitle, mobileMenuDepartmentsTitleOn, mobileMenuItemsBehavior])

  return (
    <MegaMenuUI/>
  )
}

MegaMenu.schema = {
  title: 'Mega Menu',
  type: 'object',
  properties: {
    mobileMenuType: {
      title: 'Mobile Menu Type',
      type: 'string',
      enum: ['accordion', 'drawer'],
      default: 'accordion'
    },
    mobileMenuItemsBehavior: {
      title: 'Mobile Menu Items Behavior',
      type: 'string',
      enum: ['openParentLink', 'openChildren'],
      default: 'openParentLink'
    },
    mobileMenuDepartmentsTitleOn: {
      title: 'Activate Menu Departments Title',
      type: 'boolean',
      default: false
    },
    mobileMenuDepartmentsTitle: {
      title: 'Mobile Menu Departments Title',
      type: 'string',
      default: 'Categorías'
    },
    mobileMenuIconSize: {
      title: 'Mobile Icon Menu Size',
      type: 'number',
      default: 12
    }
  }
}
