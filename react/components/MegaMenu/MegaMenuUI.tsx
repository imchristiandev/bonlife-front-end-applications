import React from 'react'
import { useDevice } from 'vtex.device-detector'
import { MegaMenuPhone } from './views/phone/MegaMenuPhone'

export const MegaMenuUI = () => {

  const { device } = useDevice()

  const responsiveMenu = (device: string) => {
    switch (device) {
      case 'desktop':
        return (
          <div>Desktop</div>
        )
      case 'phone':
        return (
          <MegaMenuPhone />
        )
      case 'tablet':
        return (
          <div>Tablet</div>
        )
      default:
        return (
          <div>Default</div>
        )
    }
  }

  return responsiveMenu(device)
}

// export const MegaMenuUI = ({
//   mobileMenuType,
//   menuObject,
//   mobileMenuDepartmentsTitle,
//   mobileMenuDepartmentsTitleOn,
//   mobileMenuItemsBehavior = 'openParentLink'
// }: IMegaMenuUI) => {
//   const { device } = useDevice()

//   switch (device) {
//     case 'desktop':
//       return (
//         <div>Desktop</div>
//       )
//     case 'phone':
//       return (
//         <PhoneMenu
//           menuObject={menuObject}
//           mobileMenuType={mobileMenuType}
//           mobileMenuDepartmentsTitle={mobileMenuDepartmentsTitle}
//           mobileMenuDepartmentsTitleOn={mobileMenuDepartmentsTitleOn}
//           mobileMenuItemsBehavior={mobileMenuItemsBehavior}
//         />
//       )
//     case 'tablet':
//       return (
//         <div>Tablet</div>
//       )
//     default:
//       return (
//         <PhoneMenu
//           menuObject={menuObject}
//           mobileMenuType={mobileMenuType}
//           mobileMenuDepartmentsTitle={mobileMenuDepartmentsTitle}
//           mobileMenuDepartmentsTitleOn={mobileMenuDepartmentsTitleOn}
//           mobileMenuItemsBehavior={mobileMenuItemsBehavior}
//         />
//       )
//   }
// }

