import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo'

import { useDevice } from 'vtex.device-detector'

import GET_MEGA_MENU from '../../graphql/getMegaMenu.graphql'
import { MegaMenuUI } from './MegaMenuUI'


export const MegaMenu = () => {
  const { loading, error, data } = useQuery(GET_MEGA_MENU)
  const { device } = useDevice()


  console.log("🚀 ~ MegaMenu ~ device:", device)


  return (
    loading ?
    <div>Loading...</div> :
    <MegaMenuUI menuObject={data}/>
  )
}
