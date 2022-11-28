import React,{useState,useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import iconBlue from './img/icon_blue.png'
import './LineChart.scss'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = ({
  chart_name,
  chart_unit = null,
  chart_size = 'small',
  chart_icons = [],
  display_legend,
  labels_prop,
  datasets_prop = [],
  multiAxis_prop = false,
  title_icon = false,
  colorArr = [],
}) => {

  const [labels,setLabels] = useState(['05','06','07','08','09','10'])
  const [datasets,setDatasets] = useState([
    {
        label: 'Dataset 1',
        data: [10,10,20,30,50,100],
        borderColor: colorArr[0] ? colorArr[0] : 'rgba(255, 99, 132, 0.5)',
        backgroundColor: colorArr[0] ? colorArr[0] : 'rgba(255, 99, 132, 0.5)',
        borderJoinStyle: 'round',
        tension: .5,
        yAxisID: `y`
    },
    {
        label: 'Dataset 2',
        data: [20,25,5,100,30,50],
        borderColor: colorArr[1] ? colorArr[1] : 'rgba(53, 162, 235, 0.5)',
        backgroundColor: colorArr[1] ? colorArr[1] : 'rgba(53, 162, 235, 0.5)',
        borderJoinStyle: 'round',
        tension: .5,
        yAxisID: multiAxis_prop ? `y1` : 'y'
    }
  ])
  const [data,setData] = useState({labels,datasets})
  const [options,setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },
      title: {
        display: false,
        text: '',
      },
    },
  })

  const multiAxisOptions = (colorArr) => {
    const [first_color, second_color] = colorArr
    return {
      y: {
        display: true,
        position: 'left',
        grid: {
          drawOnChartArea: false,
          color: first_color,
          borderColor: first_color
        }
      },
      y1: {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
          color: second_color,
          borderColor: second_color
        }
      }
    }
  }

  useEffect(() => {
      setDatasets([...datasets.map((el,ind) => ({
        ...el,
        borderColor: colorArr[ind],
        backgroundColor: colorArr[ind],
      })
    )])

    if(multiAxis_prop){
      setOptions(({
        ...options,
        scales: multiAxisOptions(colorArr.length > 0 ? colorArr : ['rgb(255, 99, 132)','rgb(53, 162, 235)'])
      }))
    }
  }, [colorArr])

  useEffect(() => {
    setData({
      labels,
      datasets
    })
  }, [datasets])


  return (
    <div className={`line_chart line_chart_${chart_size}`} >
      <header className='line_chart_header'>
        <span className={`line_chart_heading line_chart_heading_${chart_size}`}>
          <span className="chart_name">{chart_name}</span>
          <span className="chart_unit">{chart_unit ? `${chart_size === 'big' ? '' : ","}${chart_unit}` : null}</span>
          {
            title_icon ? 
            <img 
              className="chart_title_icon" 
              src={iconBlue}
              alt='chart_title_icon'
            /> : null
          }
        </span>
        {
          chart_icons.length ? 
          <div className="header_icon_placeholder">
            {
              chart_icons.map((el,ind) => {
                return(
                  <img 
                    className={`chart_header_btn_${el.description}`} 
                    src={el.icon}
                    key={ind+el.description}
                  />
                )
              })
            }
          </div>
          : 
          null
        }
      </header>
      <Line 
        options={options} 
        data={data}
        style={{maxHeight: '100%', maxWidth: '100%'}}
      />
    </div>
  )
}

export {LineChart}
