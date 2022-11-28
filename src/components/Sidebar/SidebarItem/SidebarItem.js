import React from 'react';
import './SidebarItem.scss';
import { ReactComponent as Drop } from '../img/Drop.svg';
import { Link } from 'react-router-dom';

const SidebarItem = ({ label, icon, subItems, isActive, activeSubItem, onSubItemClick, onClick, isOpen }) => {

  const links = subItems.map(({ label: sidebarLabel }) => {
    const className = activeSubItem === sidebarLabel ? 'sidebar__list-item_active' : 'sidebar__list-item';
    return (
      <li onClick={() => onSubItemClick(sidebarLabel, label)} key={sidebarLabel} className={className}>
        <Link to="#" className="sidebar__link">{sidebarLabel}</Link>
      </li>);
  });

  // активный класс
  const subItemsClass = isOpen ? "sidebar__drop_active" : "sidebar__drop"
  const linkBoxClass = isOpen ? 'sidebar__link-box_active' : 'sidebar__link-box'
  const dropClass = isOpen ? 'icon-drop' : 'icon-drop_active'

  return (
    <div className="sidebar__item">
      <div className={linkBoxClass}>
        <div className="side-icon-box">
          {icon}
        </div>
        <div onClick={onClick} className='boxx'>
          <Link to="#" className="sidebar__link">
            {label}
          </Link>
          < Drop className={dropClass} />
        </div>
      </div>
      <div className={subItemsClass}>
        <ul className="sidebar__list">
          {links}
        </ul>
      </div>
    </div>
  );
};

export { SidebarItem };
