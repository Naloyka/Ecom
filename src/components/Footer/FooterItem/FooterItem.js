import React from 'react'
import './FooterItem.scss'
import { Link } from 'react-router-dom'

const FooterItem = ({ label, subItems }) => {

    const footerLinks = subItems.map(({ label: sidebarLabel }) => {
        return (
            <li key={sidebarLabel} className='footer__list_item'>
                <Link to="#" className="footer__link">{sidebarLabel}</Link>
            </li>
        );
    });

    return (
        <div className="footer__item">
            <h4 className="footer__title">{label}</h4>
            <ul className="footer__list">
                {footerLinks}
            </ul>
        </div>
    )
}
export { FooterItem }