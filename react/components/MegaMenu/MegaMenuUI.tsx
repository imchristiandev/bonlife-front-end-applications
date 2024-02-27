import React from 'react'
import { useDevice } from 'vtex.device-detector'
import { MegaMenuPhone } from './views/phone/MegaMenuPhone'
import { MegaMenuDesktop } from './views/desktop/MegaMenuDesktop'

export const MegaMenuUI = () => {

  const { device } = useDevice()


  const responsiveMenu = (device: string) => {
    switch (device) {
      case 'desktop':
        return (
          <MegaMenuDesktop />
        )
      case 'phone':
        return (
          <MegaMenuPhone />
        )
      case 'tablet':
        return (
          <MegaMenuPhone />
        )
      default:
        return (
          <MegaMenuPhone />
        )
    }
  }

  return (
    <>
      { responsiveMenu(device) }
    </>
  )
}
