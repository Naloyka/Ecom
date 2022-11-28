import React, {useState,useRef} from 'react'
import search_icon from './img/icon_search.png'
import './FilterSelector.scss'
import { useEffect } from 'react'


const FilterSelector = ({
    filter_name,filter_item_list,
    setState,state
}) => {
    const [showSelector,setShowSelector] = useState(false)
    const [selectorClazz,setSelectorClazz] = useState('filter_selector')
    const [searchInput,setSearchInput] = useState('')
    const [selectedItem,setSelectedItem] = useState([])
    const shopSearchRef = useRef(null)

    const filter_items = filter_item_list.map((el,ind) => {
        const {name, value} = el
        if(name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 || searchInput === ''){
            return (
                <span 
                    className="filter_shop"  
                    value={value}
                    key={ind+value}
                    onClick={() => {
                        if(selectedItem.some(el => el.name === name)){
                            if(name.toLowerCase() === 'все'){
                                setSelectedItem([])
                            } else {
                                setSelectedItem(selectedItem.filter(el => el.name !== name))
                            }
                        } else {
                            if(name.toLowerCase() === 'все'){
                                setSelectedItem(filter_item_list)
                            } else {
                                setSelectedItem([...selectedItem,{name, value}])
                            }
                        }
                    }}
                >
                    {name}
                </span>
            )
        }
    })

    useEffect(() => {
        setSelectorClazz( showSelector ? 'filter_selector display_item' : 'filter_selector' )
    }, [showSelector])

    useEffect(() => {
        setState(selectedItem.map(el => el.value).toString())
        console.log(state);
    }, [selectedItem])

    return (
        <div className="filter-account__item">
            <span className="filter-name">{filter_name}</span>
            <div 
                className='select'
                onMouseEnter={() => setShowSelector(true)}
                onMouseLeave={() => setShowSelector(false)}
            >
                {
                    selectedItem.length === 0 ? 
                    'Не выбрано'
                    :
                    <span 
                        className="filter_shop" 
                        value={selectedItem.map(el => `${el.value},`)}
                    >
                        {selectedItem.map(el => `${el.name},`)}
                    </span>
                }
                <div className={selectorClazz}>
                    <span 
                        className='filters_search_wrapper'
                        onClick={e => shopSearchRef.current.focus()}
                    >
                        <input 
                            type="text" 
                            className='filters_search' 
                            placeholder='Поиск...'
                            ref={shopSearchRef}
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                        />
                        <img 
                            src={search_icon} 
                            alt="search_icon"
                            className='filters_search_icon' 
                        />
                    </span>
                    {filter_items}
                </div>
            </div>
        </div>
    )
}

export {FilterSelector}