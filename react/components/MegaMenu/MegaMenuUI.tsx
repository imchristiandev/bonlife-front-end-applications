import React from 'react'
import { IMegaMenuUI } from './MegaMenu'
import { useDevice } from 'vtex.device-detector'
import { PhoneMenu } from './PhoneMenu'

export const MegaMenuUI = ({
  mobileMenuType,
  menuObject,
  mobileMenuDepartmentsTitle,
  mobileMenuDepartmentsTitleOn,
  mobileMenuItemsBehavior = 'openParentLink'
}: IMegaMenuUI) => {
  const { device } = useDevice()

  switch (device) {
    case 'desktop':
      return (
        <div>Desktop</div>
      )
    case 'phone':
      return (
        <PhoneMenu
          menuObject={menuObject}
          mobileMenuType={mobileMenuType}
          mobileMenuDepartmentsTitle={mobileMenuDepartmentsTitle}
          mobileMenuDepartmentsTitleOn={mobileMenuDepartmentsTitleOn}
          mobileMenuItemsBehavior={mobileMenuItemsBehavior}
        />
      )
    case 'tablet':
      return (
        <div>Tablet</div>
      )
    default:
      return (
        <PhoneMenu
          menuObject={menuObject}
          mobileMenuType={mobileMenuType}
          mobileMenuDepartmentsTitle={mobileMenuDepartmentsTitle}
          mobileMenuDepartmentsTitleOn={mobileMenuDepartmentsTitleOn}
          mobileMenuItemsBehavior={mobileMenuItemsBehavior}
        />
      )
  }
}
