import React from 'react'
import SelectionMenuContainer from '../SelectionMenuContainer'
import './MainMenuItems.scss'

const MainMenuItems = () => {

    const selectorMenuList = [
        {
            link_name: 'Аналитика',
            links_list: [
                {
                    link: '#',
                    text: 'Сводная аналитика'
                },
                {
                    link: '#',
                    text: 'Товарный анализ'
                },
                {
                    link: '#',
                    text: 'Финансовый анализ'
                },
                {
                    link: '#',
                    text: 'Анализ контента'
                },
                {
                    link: '#',
                    text: 'Анализ рекламных кампаний'
                },     
                {
                    link: '#',
                    text: 'Сегментация по группам конверсии'
                }, 
            ]
        },
        {
            link_name: 'Инструметы',
            links_list: [
                {
                    link: '#',
                    text: 'Перенос карточек товара'
                },
                {
                    link: '#',
                    text: 'Обогащение карточек товара'
                },
                {
                    link: '#',
                    text: 'Мониторинг конкурентов'
                },
                {
                    link: '#',
                    text: 'Мониторинг товарных остатков'
                },
                {
                    link: '#',
                    text: 'Мониторинг рейтинга и отзывов'
                },     
                {
                    link: '#',
                    text: '1С модуль для обновления остатков и цен'
                }, 
            ]
        },
        {
            link_name: 'Маркетинг',
            links_list: [
                {
                    link: '#',
                    text: 'Управление рекламными кампаниями'
                },
                {
                    link: '#',
                    text: 'Участие в акциях маркетплейсов'
                },
            ]
        }
    ]
    const SelectorMenuItems = selectorMenuList.map((el,ind) => <SelectionMenuContainer key={ind} {...el}/>)

    return (
        <div className="menu__main_items">
            {SelectorMenuItems}
            <a href="#" className="menu__main_link  menu__item_arrow-down">База знаний</a>
            <a href="#" className="menu__main_link">Сообщество</a>
        </div>
    )
}

export {MainMenuItems}