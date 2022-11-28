import React, {useState, useEffect} from 'react'
import CloseBtn from './img/icon_close.png'
import SettingsIcon from './img/icon_settings_2.png'
import './MetricsItem.scss'

const MetricsItem = ({
    metrics_title,
    metrics_price,
    metrics_unit,
    metrics_type,
    graph_color,
    setMetricsItemList,
    metricsItemList,
    setMetricsChoosed,
    metricsChoosed,
    selectedColors,
    setSelectedColors
}) => {
    const [isActive,setIsActive] = useState(false)
    const colorsArr = [
        '#A43FF3',
        '#FFC000',
        '#B2F162',
        '#FF5959',
        '#3182CC',
        '#ACD0D2'
    ]

    useEffect(() => {
        setIsActive(metricsItemList.filter(el => el === metrics_title).length !== 0)
    }, [metricsItemList]) 


  return (
    <div 
        className={`metrics__item metrics__item_${metrics_type}`} 
        data-metrics={`${metrics_type}`}
        onClick={() => {
            if(metricsItemList.filter(el => el === metrics_title).length !== 0){
                setMetricsItemList([...metricsItemList.filter(el => el !== metrics_title)])
                setSelectedColors([...selectedColors.filter(el => el !== colorsArr[graph_color])])
            } else {
                if(metricsItemList.length < 2){
                    setMetricsItemList([...metricsItemList,metrics_title])
                    setSelectedColors([...selectedColors,colorsArr[graph_color]])
                } else {
                    setMetricsItemList([metrics_title])
                    setSelectedColors([colorsArr[graph_color]])
                }
            }
        }}
    >
        <div className="metrics_item_header">
            <div 
                className={`metrics_item_graph_color`}
                style={{backgroundColor: isActive ? colorsArr[graph_color] : 'grey'}}
            ></div>
            <h3 className="metrics__title">{metrics_title}</h3>
            <div className="settings__icons">
                <img 
                    src={SettingsIcon}
                    alt='setting_icon' 
                    className="settings_link_icon"
                />
                <img 
                    src={CloseBtn} 
                    alt="close_icon" 
                    className='metrics_close_icon'
                    onClick={() => {
                        setMetricsChoosed([...metricsChoosed.filter((el,index) => index !== graph_color )])
                    }}
                />
            </div>
        </div>
        <div className="metrics__price-container">
            <p className="metrics__price">{metrics_price}</p>
            <span className="metrics__unit">{metrics_unit}</span>
        </div>
    </div>
  )
}

export {MetricsItem}