import React from 'react'
import { useQuery } from 'react-apollo'
import GET_MEGA_MENU from '../../graphql/getMegaMenu.graphql'
import { MegaMenuUI } from './MegaMenuUI'


export const MegaMenu = ({
  mobileMenuType,
  mobileMenuDepartmentsTitle,
  mobileMenuDepartmentsTitleOn,
  mobileMenuItemsBehavior
}: any) => {
  const { loading, data } = useQuery(GET_MEGA_MENU)

  return (
    loading ?
    <div>Loading...</div> :
    <MegaMenuUI
      mobileMenuType={mobileMenuType}
      menuObject={data.menus}
      mobileMenuDepartmentsTitle={mobileMenuDepartmentsTitle}
      mobileMenuDepartmentsTitleOn={mobileMenuDepartmentsTitleOn}
      mobileMenuItemsBehavior={mobileMenuItemsBehavior}
    />
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
  }
}
