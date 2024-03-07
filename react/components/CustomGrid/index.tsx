import React from 'react'
import styles from './styles.css'
import { GridElement } from './GridElement'

export const CustomGrid = ({
  imageMobileBig,
  imageDesktopBig,
  urlDesktopBig,
  callToActionBig,
  imageMobile1,
  imageDesktop1,
  urlDesktop1,
  callToAction1,
  imageMobile2,
  imageDesktop2,
  urlDesktop2,
  callToAction2,
  imageMobile3,
  imageDesktop3,
  urlDesktop3,
  callToAction3,
  imageMobile4,
  imageDesktop4,
  urlDesktop4,
  callToAction4
}: any) => {
  return (
    <section className={styles.grid}>
      <div className={styles.grid__section}>
        <GridElement url={urlDesktopBig} imageDesktop={imageDesktopBig} imageMobile={imageMobileBig} callToAction={callToActionBig} type='large' />
      </div>
      <div className={styles.grid__section}>
        <GridElement url={urlDesktop1} imageDesktop={imageDesktop1} imageMobile={imageMobile1} callToAction={callToAction1} type='small' />
        <GridElement url={urlDesktop2} imageDesktop={imageDesktop2} imageMobile={imageMobile2} callToAction={callToAction2} type='mid' />
      </div>
      <div className={styles.grid__section}>
        <GridElement url={urlDesktop3} imageDesktop={imageDesktop3} imageMobile={imageMobile3} callToAction={callToAction3} type='mid' />
        <GridElement url={urlDesktop4} imageDesktop={imageDesktop4} imageMobile={imageMobile4} callToAction={callToAction4} type='small' />
      </div>
    </section>
  )
}

CustomGrid.schema = {
  title: 'Grilla de categorías',
  type: 'object',
  properties: {
    imageMobileBig: {
      title: 'Banner Mobile Big',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    imageDesktopBig: {
      title: 'Banner Desktop Big',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    urlDesktopBig: {
      title: 'URL Big',
      type: 'string',
    },
    callToActionBig: {
      title: 'Call to action Big',
      type: 'string',
    },
    imageMobile1: {
      title: 'Banner Mobile 1',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    imageDesktop1: {
      title: 'Banner Desktop 1',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    urlDesktop1: {
      title: 'URL 1',
      type: 'string',
    },
    callToAction1: {
      title: 'Call to action 1',
      type: 'string',
    },
    imageMobile2: {
      title: 'Banner Mobile 2',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    imageDesktop2: {
      title: 'Banner Desktop 2',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    urlDesktop2: {
      title: 'URL 2',
      type: 'string',
    },
    callToAction2: {
      title: 'Call to action 2',
      type: 'string',
    },
    imageMobile3: {
      title: 'Banner Mobile 3',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    imageDesktop3: {
      title: 'Banner Desktop 3',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    urlDesktop3: {
      title: 'URL 3',
      type: 'string',
    },
    callToAction3: {
      title: 'Call to action 3',
      type: 'string',
    },
    imageMobile4: {
      title: 'Banner Mobile 4',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    imageDesktop4: {
      title: 'Banner Desktop 4',
      description: 'Colocar la imagen con su color original',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    urlDesktop4: {
      title: 'URL 4',
      type: 'string',
    },
    callToAction4: {
      title: 'Call to action 4',
      type: 'string',
    },
  }
}
