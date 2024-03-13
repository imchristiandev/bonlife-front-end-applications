import React, { useState } from 'react';
// @ts-ignore
import { Icon } from 'vtex.store-icons';
import { SecondLevelMenu } from './SecondLevelMenu';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'desktop__container',
  'desktop__container--firstLevelItem',
  'container__firstLevelItem--title',
  'desktop__container--secondLevelItem',
  'active'
];

export const FirstLevelMenu = ({
  menu,
  handleNavigation
}: any) => {

  const { handles } = useCssHandles(CSS_HANDLES);

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const cleanImages = (str: string) => str.replace(/[{}]/g, "");

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const printFirstLevelMenu = () => {
    return (
      menu && menu.map((item: any, index: number) =>
        <li
          key={item?.id}
          className={handles['desktop__container--firstLevelItem']}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`bn bg-transparent pa0 ma0 lh-solid pointer`}
            onClick={() => { handleNavigation(item?.slug) }}
          >
            <p className={handles['container__firstLevelItem--title']}>
              {item?.name}
            </p>
          </button>
          {
            (item?.menu && item?.menu.length > 1 && hoveredItem === index)
            &&
            <div className={handles['desktop__container--secondLevelItem']}>
              <SecondLevelMenu
                menu={item?.menu}
                title={item?.name}
                handleNavigation={handleNavigation}
                imageGroup={cleanImages(item?.styles)}
                parentLink={item?.slug}
              />
            </div>
          }
        </li>
      )
    );
  };

  return (
    <ul className={handles['desktop__container']}>
      {printFirstLevelMenu()}
    </ul>
  );
};
