import React, {useState} from 'react'
import MetricsListComponent from './MetricsListComponent/'
import './ModalMetricsSelector.scss'

const ModalMetricsSelector = ({
    modalMetricsSelector,setModalMetricsSelector,
    metricsList,setMetricsChoosed,metricsChoosed
}) => {

    const [choosedInd,setChoosedInd] = useState([])
    const [choosedList,setChoosedList] = useState([])


    const metricsListComponent = metricsList.map((el,ind) => {
        const { metrics_type } = el
        return (
            <MetricsListComponent 
                key={ind+metrics_type}
                {...el}
                ind={ind}
                setMetricsChoosed={el => setMetricsChoosed(el)}
                metricsChoosed={metricsChoosed}
                choosedInd={choosedInd}
                setChoosedInd={el => setChoosedInd(el)}
                choosedList={choosedList}
                setChoosedList={el => setChoosedList(el)}
            />
        )
    })

    const closeFunc = () => {
        setModalMetricsSelector(false)
        setMetricsChoosed([...choosedList])
    }

    return (
        <div 
            className={modalMetricsSelector ? "modal_metrics_selector active" : "modal_metrics_selector"}
            onClick={(e) => {
                const targetClass = e.target.getAttribute('class')
                if(targetClass === "modal_metrics_selector active"){
                    closeFunc()
                }
            }}
        >
            <div className="modal_metrics_selector_inner">
                <span 
                    className="modal_metrics_selector_close_btn"
                    onClick={() => closeFunc()}
                ></span>
                <span className="modal_metrics_selector_warning">
                    Максимальное количество метрик: 6
                </span>
                <div className="selector_list_container">
                    <ul className="modal_metrics_selector_list">
                        {metricsListComponent}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {ModalMetricsSelector}