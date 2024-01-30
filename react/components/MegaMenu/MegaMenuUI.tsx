import React from 'react'
import { IMegaMenuUI } from './MegaMenu'
import { useDevice } from 'vtex.device-detector'
import { PhoneMenu } from './PhoneMenu'

export const MegaMenuUI = ({ mobileMenuType, menuObject }: IMegaMenuUI) => {
  const { device } = useDevice()

  console.log(menuObject, mobileMenuType)
  switch (device) {
    case 'desktop':
      return (
        <div>Desktop</div>
      )
    case 'phone':
      return (
        <PhoneMenu />
      )
    case 'tablet':
      return (
        <div>Tablet</div>
      )
    default:
      return (
        <PhoneMenu />
      )
  }
}
