import React from 'react'
import { IMenuObject, IDepartmentGroup } from './MegaMenu'

export const DepartmentGroup = ({ menuObject, mobileMenuItemsBehavior, mobileMenuType }: IDepartmentGroup) => {
  console.log(mobileMenuItemsBehavior, mobileMenuType)
  return (
    <ul>
      {
        menuObject.map(( item: IMenuObject ) => {
          return (
            (mobileMenuItemsBehavior === 'openParentLink') ?
              <li key={ item.id }>
                <p>
                  <a href="#">
                    { item.name }
                  </a>
                </p>
              </li>
            :
              <li key={ item.id }>
                <p>{ item.name }</p>
              </li>
          )
        })
      }
    </ul>
  )
}
