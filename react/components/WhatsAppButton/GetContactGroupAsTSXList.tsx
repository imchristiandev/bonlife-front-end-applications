import React from 'react'

export const getContactGroupAsTSXList = (
  contactGroup: any
) => {
  if (contactGroup) {
    console.log('Existe')
    return contactGroup.map((contactGroup:any, index:number) => {
        console.log(contactGroup, index)
        return <div>
          <a href={`https://api.whatsapp.com/send/?phone=${contactGroup.phone}&text&type=phone_number&app_absent=0`} target='_blank'>
            { contactGroup.nameOfContact }
          </a>
        </div>
      }
    )
  } else {
    return null
  }
}
