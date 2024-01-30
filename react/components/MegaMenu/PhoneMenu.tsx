import React from 'react'
import { IMegaMenuUI } from './MegaMenu'
import { DepartmentGroup } from './DepartmentGroup'

export const PhoneMenu = ({
  menuObject,
  mobileMenuType,
  mobileMenuDepartmentsTitle = '',
  mobileMenuDepartmentsTitleOn = false,
  mobileMenuItemsBehavior = 'openParentLink'
}: IMegaMenuUI) => {
  console.log(menuObject, mobileMenuType, mobileMenuItemsBehavior)
  return (
    <div>
      {
        mobileMenuDepartmentsTitleOn &&
          <h2>{ mobileMenuDepartmentsTitle }</h2>
      }
      <DepartmentGroup
        menuObject={menuObject}
        mobileMenuItemsBehavior={mobileMenuItemsBehavior}
        mobileMenuType={mobileMenuType}
      />
    </div>
  )
}
