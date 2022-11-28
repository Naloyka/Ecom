import React, {useState} from 'react'
import { useEffect } from 'react'

const MetricsListComponent = ({
    metrics_title,metrics_unit,
    metrics_type,metrics_price,
    ind,setChoosedInd,
    choosedInd,
    choosedList,
    setChoosedList
}) => {
    const [titleChoosed,setTitleChoosed] = useState(false)
    const [CurrentObject] = useState({metrics_title,metrics_unit,metrics_price,metrics_type})

    useEffect(() => {
        const isElemChoosed = choosedInd.some(el => el === ind)
        setTitleChoosed(isElemChoosed)

    }, [choosedInd])

    return (
        <li 
            className={titleChoosed ? "modal_metrics_selector_list_item active" : "modal_metrics_selector_list_item"}
            onClick={() => {
                if(choosedInd.filter(el => el === ind).length === 0){
                    setChoosedInd([...choosedInd,ind])          
                    setChoosedList([...choosedList,CurrentObject])
                } else {
                    setChoosedInd([...choosedInd.filter( el => el !== ind )])
                    setChoosedList([...choosedList.filter( (el,index) => index !== choosedInd.indexOf(ind) )])
                }
            }}
        >
            {metrics_title}, {metrics_unit}
        </li>
    )
}

export {MetricsListComponent}