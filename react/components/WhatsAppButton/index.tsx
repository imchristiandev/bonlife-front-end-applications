import * as React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'whatsapp',
  'whatsapp__button',
  'whatsapp__image'
];

type Props = {
  phone: string
  message: string
}

export const WhatsAppButton = ({ phone, message }: Props) => {

  const { handles } = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/\s/g, '%20').replace(/,/g, '%2C')

  return (

    <div className={`fixed bottom-2 right-2 ${handles['whatsapp']}`}>
      <a
        className={handles['whatsapp__button']}
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className={handles['whatsapp__image']}
          src='/arquivos/whatsapp-logo.png'
          alt="Logo de WhatsApp"
        />
      </a>
    </div>
  )
}
WhatsAppButton.defaultProps = {
  phone: '+573118109329',
  message: 'Hola, me gustaría conocer más sobre Bonlife',
}

WhatsAppButton.schema = {
  title: 'WhatsApp',
  type: 'object',
  properties: {
    phone: {
      title: 'admin/editor.whatsapp-phone.title',
      description: 'admin/editor.whatsapp-phone.description',
      type: 'string',
    },
    message: {
      title: 'admin/editor.whatsapp-message.title',
      description: 'admin/editor.whatsapp-message.description',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
  },
}
