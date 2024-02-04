import React from 'react';
import { MenuProvider } from './context/menuContext'
import { MegaMenu } from './components/MegaMenu';

const CompMegaMenu: React.FC = () => {
  return (
    <MenuProvider>
      <MegaMenu />
    </MenuProvider>
  )
}

export default CompMegaMenu
