import React, { useContext, useEffect } from 'react'
import MenuContext from '../../context/menuContext'
import { MegaMenuUI } from './MegaMenuUI'

export const MegaMenu = ({
  mobileMenuTypeProp,
  mobileMenuDepartmentsTitleProp,
  mobileMenuDepartmentsTitleOnProp,
  mobileMenuItemsBehaviorProp,
  mobileMenuIconSizeProp,
  desktopDistributionProp
}: any) => {
  const {
    setMobileMenuType,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuItemsBehavior,
    setMobileMenuIconSize,
    setDesktopDistribution
  } = useContext(MenuContext)

  useEffect(() => {
    setMobileMenuType(mobileMenuTypeProp)
    setMobileMenuDepartmentsTitle(mobileMenuDepartmentsTitleProp)
    setMobileMenuDepartmentsTitleOn(mobileMenuDepartmentsTitleOnProp)
    setMobileMenuItemsBehavior(mobileMenuItemsBehaviorProp)
    setMobileMenuIconSize(mobileMenuIconSizeProp)
    setDesktopDistribution(desktopDistributionProp)
  }
  ,
  [
    mobileMenuTypeProp,
    mobileMenuDepartmentsTitleProp,
    mobileMenuDepartmentsTitleOnProp,
    mobileMenuItemsBehaviorProp,
    desktopDistributionProp
  ])

  return (
    <MegaMenuUI/>
  )
}
