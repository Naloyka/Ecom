import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SelectionMenuContainer.scss'

const SelectionMenuContainer = ({link_name,links_list}) => {
    const [display, setDisplay] = useState(false)
    const [selectionList,setSelectionList] = useState([])                                                  
    let selection_item_class = display ? "selection__item__container display_item" : "selection__item__container" 

    useEffect(() => {
        setSelectionList(links_list.map((el,ind) => {
            return (
                <li 
                    className="list-menu__item " 
                    key={ind}
                >
                    <Link 
                        to={el.link} 
                        target={el.type}
                        className="list-menu__link"
                    >
                        {el.text}
                    </Link>
                </li>
            )
        }))
    },[display])
    return (
        <div 
            className="selection__menu_container"
            onMouseEnter={e => setDisplay(true)}
            onMouseLeave={e => setDisplay(false)}
        >
            <a 
                href="#" 
                className="menu__main_link menu__item_arrow-down" 
            >
                {link_name}
            </a>
            <div 
                className={selection_item_class} 
            >
                <ul className="selection__list">
                    {selectionList}
                </ul>
            </div>
        </div>
    )
}

export {SelectionMenuContainer}