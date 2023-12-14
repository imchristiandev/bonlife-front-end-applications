import * as React from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { getContactGroupAsTSXList } from './GetContactGroupAsTSXList'
import { WhatsAppComponent } from './WhatsAppComponent'

export const WhatsAppButton = ({ contactGroup }: any) => {
  const { list } = useListContext() || []

  console.log('Whats app contacts', list)

  const contactGroupContent =  getContactGroupAsTSXList(contactGroup)
  const newContactGroupContextValue = list.concat(contactGroupContent)

  return (
    <ListContextProvider list={newContactGroupContextValue}>
      <WhatsAppComponent contactGroup={contactGroupContent} contactInfo={contactGroup} />
    </ListContextProvider>
  )
}

WhatsAppButton.schema = {
  title: 'WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'admin/editor.whatsapp-logo.title',
      description: 'Mi logo',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      }
    }
  }
}
