import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FooterItem } from './FooterItem/FooterItem';

const footerItems = [
    {
        label: 'Аналитика',
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
            {
                label: 'Интеграции',
            },
        ],
    },
    {
        label: 'Маркетинг',
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
        label: 'О компании',
        subItems: [
            {
                label: 'О компании',
            },
            {
                label: 'Вопросы-ответы',
            },
            {
                label: 'Новости',
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer__content'>
                <div className="footer__upper-box">
                    <nav className="footer__nav">
                        {footerItems.map(({ label, subItems }) => (
                            <FooterItem
                                label={label}
                                subItems={subItems}
                            />
                        ))}
                        <div className="footer__item">
                            <h4 className="footer__title">ECOMLAB</h4>
                            <address className="footer__address">
                                <ul className="footer__list">
                                    <li className="footer__list_item">
                                        <Link to="tel:8(800)301-65-63" className="address__link address__link_tel">8(800)301-65-63</Link>
                                    </li>
                                    <li className="footer__list_item">
                                        <Link to="mailto:info@ecomru.ru" className="address__link address__link_mail">info@ecomru.ru</Link>
                                    </li>
                                    <li className="footer__list_item">
                                        <Link to="#" className="address__link address__link_send">Поддержка</Link>
                                    </li>
                                </ul>
                            </address>
                        </div>
                    </nav>
                </div>
                <div className='footer__bottom-box'>
                    <address className='copyright'>
                        <Link to="#" className="footer__copyright">© ООО ЕКОМСЕЛЛЕР, 2022 г. Все права защищены.</Link>
                        <Link to="#" className="footer__link">Пользовательское соглашение</Link>
                        <Link to="#" className="footer__link">Политика оплаты и возврата</Link>
                        <Link to="#" className="footer__link">Политика конфиденциальности</Link>
                        <Link to="#" className="footer__link country" style={{'border':'none'}}>Россия</Link>
                    </address>
                </div>
            </div>
        </footer>
    )
}

export { Footer }