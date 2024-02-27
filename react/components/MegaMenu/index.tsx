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
    setDesktopDistribution,
    setMobileMenuDepartmentsTitle,
    setMobileMenuDepartmentsTitleOn,
    setMobileMenuIconSize,
    setMobileMenuItemsBehavior,
    setMobileMenuType,
    setMobileTitle,
  } = useContext(MenuContext)

  useEffect(() => {
    setMobileMenuType(mobileMenuTypeProp)
    setMobileMenuDepartmentsTitle(mobileMenuDepartmentsTitleProp)
    setMobileTitle(mobileMenuDepartmentsTitleProp)
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
