import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

export const WhatsAppComponent = ( { contactGroup, contactInfo }: any ) => {

  const [ active, setActive ] = useState( false )

  const CSS_HANDLES = ['whatsapp', 'whatsapp__button', 'whatsapp__image']
  const handles = useCssHandles(CSS_HANDLES);

  const openWhatsAppContactList = () => {
    setActive( !active )
  }
  const goToWhatsAppContact = () => {
    window.open(`https://api.whatsapp.com/send/?phone=${contactInfo[0]?.phone}&text&type=phone_number&app_absent=0`)
  }

  return (
    <div className={handles['whatsapp']}>
      <button
        onClick={ (contactGroup?.length > 1) ?
          openWhatsAppContactList :
          goToWhatsAppContact
        }
        className={handles['whatsapp__button']}
      >
        <img
          src="/arquivos/whatsapp-logo.png"
          alt="WhatsApp"
          className={handles['whatsapp__image']}
        />
      </button>
      {
        active && (
          <div>
            { contactGroup }
          </div>
        )
      }
    </div>
  )
}
