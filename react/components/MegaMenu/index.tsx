import React, { useContext, useEffect } from 'react'
import MenuContext from '../../context/menuContext'
import { MegaMenuUI } from './MegaMenuUI'

export const MegaMenu = ({
  mobileMenuTypeProp,
  mobileMenuDepartmentsTitleProp,
  mobileMenuDepartmentsTitleOnProp,
  mobileMenuItemsBehaviorProp,
  mobileMenuIconSizeProp
}: any) => {

  console.log("Mega menu", mobileMenuTypeProp, mobileMenuDepartmentsTitleProp, mobileMenuDepartmentsTitleOnProp, mobileMenuItemsBehaviorProp, mobileMenuIconSizeProp)
  const {
    setMobileMenuType,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuItemsBehavior,
    setMobileMenuIconSize
  } = useContext(MenuContext)

  useEffect(() => {
    setMobileMenuType(mobileMenuTypeProp)
    setMobileMenuDepartmentsTitle(mobileMenuDepartmentsTitleProp)
    setMobileMenuDepartmentsTitleOn(mobileMenuDepartmentsTitleOnProp)
    setMobileMenuItemsBehavior(mobileMenuItemsBehaviorProp)
    setMobileMenuIconSize(mobileMenuIconSizeProp)
  }
  , [mobileMenuTypeProp, mobileMenuDepartmentsTitleProp, mobileMenuDepartmentsTitleOnProp, mobileMenuItemsBehaviorProp])

  return (
    <MegaMenuUI/>
  )
}
