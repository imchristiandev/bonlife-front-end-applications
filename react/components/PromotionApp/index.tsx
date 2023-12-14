import React, { useEffect, useState } from 'react'
import { useRuntime, Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import { Promotion, PromotionItem } from './types'

const CSS_HANDLES = [
  'container__popup',
  'container__popup--close',
  'container__popup--link-image',
  'popup__link-image--src',
  'container__popup--buttons',
  'popup__buttons--link'
]

const PromotionApp = ({ popups }: Promotion) => {

  const { handles } = useCssHandles(CSS_HANDLES)
  const { route } = useRuntime()
  const [open, setOpen] = useState(true)

  const matchingPopups = popups.filter(popup =>
    popup.active &&
    (popup.position?.toLowerCase() === route.canonicalPath?.toLowerCase() || popup.position === ''))

  useEffect(() => {
  }, [route, popups])

  return (
    <>
      {
        popups && popups.length && route.path && open
        &&
        <>
          {
            matchingPopups.map((popup: PromotionItem, index: number) =>
              <div key={index} className={handles['container__popup']} style={{ background: popup.background }}>
                <div style={{ position: 'relative' }}>
                  <button className={handles['container__popup--close']} onClick={() => setOpen(false)}>✖</button>
                  <Link className={handles['container__popup--link-image']} to={popup.urlImage}>
                    <img className={handles['popup__link-image--src']} src={popup.image} alt='promotion' />
                  </Link>
                  <div className={handles['container__popup--buttons']}>
                    <Link className={handles['popup__buttons--link']} style={{ color: popup.background }} to={popup.link}>
                      {popup.textLink}
                    </Link>
                    <Link className={handles['popup__buttons--link']} style={{ color: popup.background }} to={popup.link}>
                      {popup.textLink_two}
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        </>
      }
    </>
  )
}

PromotionApp.schema = {
  title: 'Contenido de Popup',
  type: 'object',
  properties: {
    popups: {
      title: 'Items',
      description: 'Añade nuevas opciones',
      type: 'array',
      items: {
        title: 'Item',
        type: 'object',
        properties: {
          active: {
            title: 'Activar/desactivar',
            type: 'boolean'
          },
          image: {
            title: 'Banner',
            description: 'Colocar la imagen con su color original',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          urlImage: {
            title: 'Url de la imagen',
            type: 'string'
          },
          position: {
            title: 'Pagina(opcional)',
            description: 'Inserta la url en donde se deberá mostrar el banner(ejem: "/mujer/leggings")',
            type: 'string'
          },
          link: {
            title: 'Primer link',
            type: 'string'
          },
          textLink: {
            title: 'Texto Primer link',
            type: 'string'
          },
          link_two: {
            title: 'Segundo link',
            type: 'string'
          },
          textLink_two: {
            title: 'Texto Segundo link',
            type: 'string'
          },
          background: {
            title: 'Color de fondo',
            type: 'string',
            widget: {
              'ui:widget': 'color',
            },
          }
        }
      }
    }
  }
}

export default PromotionApp