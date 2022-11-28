import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { ReactComponent as Tools } from './img/Tools.svg'
import { ReactComponent as Analitics } from './img/Analitics.svg'
import { ReactComponent as Marketing } from './img/Marketing.svg'
import { ReactComponent as Intagration } from './img/Intagration.svg'

const sidebarItems = [
  {
    label: 'Аналитика',
    icon: <Analitics />,
    subItems: [
      {
        label: 'Сводная аналитика',
      },
      {
        label: 'Финансовый анализ',
      },
      {
        label: 'Товарный анализ',
      },
      {
        label: 'Unit экономика',
      },
    ],
  },
  {
    label: 'Инструменты',
    icon: <Tools />,
    subItems: [
      {
        label: 'Перенос карточек товара',
      },
      {
        label: 'Мониторинг конкурентов',
      },
      {
        label: 'Управление заказами',
      },
      {
        label: 'Управление остатками',
      },
    ],
  },
  {
    label: 'Маркетинг',
    icon: <Marketing />,
    subItems: [
      {
        label: 'Участие в акциях',
      },
      {
        label: 'Рекламные кампании',
      },
    ],
  },
  {
    label: 'Интеграции',
    icon: <Intagration />,
    subItems: [
      {
        label: 'Интеграции',
      },
      {
        label: 'Помощь',
      },
    ],
  },

];

const Sidebar = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeSubItem, setActiveSubItem] = useState('');
  const [activeItem, setActiveItem] = useState('');
  let [showSidebar, setShowSidebar] = useState(true)

  const handlerShowSidebar = () => {
    setOpenItems(new Set())
    showSidebar === true ? showSidebar = false : showSidebar = true
    setShowSidebar(showSidebar)
  }

  const sidebarClass = showSidebar ? "sidebar" : "sidebar_active"
  const buttonClass = showSidebar ? "burger__btn" : "burger__btn_active"

  return (
    <aside className={sidebarClass}>
      <div className="logo-box">
        <div className="side-icon-box">
          < button onClick={()=>{
            setOpenItems(new Set())
            showSidebar === true ? showSidebar = false : showSidebar = true
            setShowSidebar(showSidebar)
          }} className={buttonClass}></button>
        </div>
        <Link to="#" className="logo">EcomLab</Link>
      </div>
      <nav className="sidebar__content">
        {sidebarItems.map(({ label, icon, subItems }) => (
          <SidebarItem
            key={label}
            label={label}
            icon={icon}
            isOpen={openItems.has(label)}
            subItems={subItems}
            isActive={label === activeItem}
            activeSubItem={activeSubItem}
            onClick={() => {
              const newState = new Set(openItems);
              if (openItems.has(label)) {
                newState.delete(label);
              } else {
                newState.add(label);
              }
              setOpenItems(newState)
            }}
            onSubItemClick={(label, parentLabel) => {
              setActiveSubItem(label);
              setActiveItem(parentLabel);
            }}
          />
        ))}
      </nav>
    </aside>
  );
};

export { Sidebar };
