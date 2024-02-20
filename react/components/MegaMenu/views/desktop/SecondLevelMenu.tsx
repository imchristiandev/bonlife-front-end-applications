import React from 'react'

export const SecondLevelMenu = ({
  handleNavigation,
  imageGroup,
  menu,
  title,
  parentLink
}: any) => {
  console.log(menu, handleNavigation)
  return (
    <section className='flex'>
      <div className='w-50 mr2'>
        <h2>{title}</h2>
        <ul>
          {
            menu.map((item: any) => (
              <li key={item.id}>
                <button onClick={() => handleNavigation(item.slug)}>
                  {item.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='w-50 ml2'>
        <a onClick={() => handleNavigation(parentLink)}>
          <img src={`/arquivos/${imageGroup}`} />
        </a>
      </div>
    </section>
  )
}
