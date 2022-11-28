import React,{useState,useEffect} from 'react'
import LineChart from '../../charts/LineChart'
import btnImg from './img/charts-btn.png'
import warning_icon from './img/warning_icon.png'
import closeBtn from './img/close_icon.png'
import excelIcon from './img/excel_icon.png'
import tooltipIcon from './img/tooltip_icon.png'
import './ChartsGroup.scss'

function ChartsGroup({
    group_title,
    chart_options_list
}) {
    const [chartList,setChartList] = useState([])
    const iconsList = [
        {
            icon: excelIcon,
            description: 'excel',
        },
        {
            icon: tooltipIcon,
            description: 'tooltip'
        },
        {
            icon: closeBtn,
            description: 'closeBtn'
        },        
    ]

    useEffect(() => {
        setChartList([
            ...chart_options_list.map((el,ind) => {
                const {name,unit} = el
 
                return (
                    <div className="chart_container"
                        key={ind+name}
                        onClick={e => {
                            console.log(chartList);
                            setChartList(chartList.filter((el,ind) => ind < 3))
                        }}
                    >
                        <LineChart 
                            chart_name={name}
                            chart_unit={unit ? unit : null}
                            chart_icons={iconsList}
                            title_icon={true}
                            colorArr={['rgb(255, 99, 132)','rgb(53, 162, 235)']}
                        />
                        <div className="chart_warning">
                            <img 
                                className="chart_warning_icon" 
                                src={warning_icon}
                                alt='warnig_icon'
                            />
                            <span className="chart__warning_text">
                                Увеличение продаж за счет видео обзоров
                                <a 
                                    href="#"
                                    className="chart_warning_link"
                                >
                                    Узнать
                                </a>
                            </span>
                        </div>
                    </div>
                )
            })
        ])
    }, [chart_options_list])

  return (
    <section className="all-charts__container">
        <header className="all-charts__header">
            <h4 className="all-charts__title">{group_title}</h4>
            <img 
                src={btnImg} 
                alt="charts_btn" 
                className='all-charts__btn'
            />
        </header>
        <div className="all__charts_content">
            {chartList}
        </div>
    </section>
  )
}

export {ChartsGroup}