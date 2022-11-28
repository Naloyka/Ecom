import React, {useState, useRef, useEffect} from 'react'
import LineChart from '../../charts/LineChart'
import { Link } from 'react-router-dom'
import FilterSelector from '../../components/FilterSelector'
import AddButton from '../../components/AddButton'
import MetricsItem from '../../components/MetricsItem/'
import ModalMetricsSelector from '../../components/ModalMetricsSelector'
import RecomendationBlock from '../../components/RecomendationBlock/'
import ChartsGroup from '../../components/ChartsGroup/'
import './Main.scss'

const Main = ({
    shopFilterValue,setShopFilterValue,
    categoryFilterValue,setCategoryFilterValue,
    brandFilterValue,setBrandFilterValue,
    
}) => {
  const [shop_filter_list] = useState([
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Warmstad',
        value: 3989
    }
  ])

  const [category_filter_list] = useState([
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Ремонт и строительство',
        value: 17027482
    }
  ])

  const [brand_filter_list] = useState([
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Warmstad',
        value: 72417148
    }
  ])

  const [metrics_selector] = useState([
    {
        metrics_title: 'Расходы',
        metrics_price: '5872',
        metrics_type: 'expenses',
        metrics_unit: 'руб'
    },
    {
        metrics_title: 'Отмены',
        metrics_price: '459',
        metrics_type: 'cancellation',
        metrics_unit: 'шт'
    },
    {
        metrics_title: 'Заказы',
        metrics_price: '263',
        metrics_type: 'orders-parts',
        metrics_unit: 'шт'
    },
    {
        metrics_title: 'Заказы',
        metrics_price: '128 255',
        metrics_type: 'orders-rub',
        metrics_unit: 'руб'
    },
    {
        metrics_title: 'Расходы CPO',
        metrics_price: '10 569',
        metrics_type: 'expenses-cpo',
        metrics_unit: 'шт'
    },
    {
        metrics_title: 'Расходы CPM',
        metrics_price: '5 458',
        metrics_type: 'expenses-cpm',
        metrics_unit: 'руб'
    },
  ])
  const [recomendation_item_list] = useState([
    {
        title: 'Товары с плохим описанием',
        value: '12 шт'
    },
    {
        title: 'Компания 423094',
        value: 'CTR 0,5 %'
    },
    {
        title: 'Товары с высокими расходами на рекламу',
        value: '38 шт'
    }
  ])
  const [charts_group_list] = useState([
    {
        group_title: 'Динамика продаж',
        chart_options_list: [
            {
                name: 'Заказы',
                unit: 'шт'
            },
            {
                name: 'Заказы',
                unit: 'руб'
            },
            {
                name: 'AIV',
                unit: 'руб'
            }
        ]
    },
    {
        group_title: 'Динамика рекламных расходов',
        chart_options_list: [
            {
                name: 'Суммарные рекламные расходы',
                unit: 'руб'
            },
            {
                name: 'Рекламные расходы СРМ + СРО',
                unit: 'руб'
            },
            {
                name: 'Доля рекламных расходов (ДРР) %',
            }
        ]
    },
    {
        group_title: 'Динамика продаж',
        chart_options_list: [
            {
                name: 'Всего показов',
                unit: 'шт'
            },
            {
                name: 'Рекламные показы',
                unit: 'шт'
            },
            {
                name: 'Доля платных показов',
                unit: '%'
            }
        ]
    },
    {
        group_title: 'Воронка продаж',
        chart_options_list: [
            {
                name: 'Конверсия из показов в корзину',
                unit: '%'
            },
            {
                name: 'Конверсия из показов в заказ,',
                unit: '%'
            },
            {
                name: 'Конверсия из корзины в заказ',
                unit: '%'
            }
        ]
    }
  ])
 
  const [modalMetricsSelector,setModalMetricsSelector] = useState(false)
  const [metricsChoosed,setMetricsChoosed] = useState([])
  const [metricsChoosedList,setMetricsChoosedList] = useState([])
  const [metricsItemList,setMetricsItemList] = useState([])
  const [chartsGroupList,setChartsGroupList] = useState([])
  const [selectedColors,setSelectedColors] = useState([])

  useEffect(() => {
    setMetricsChoosedList([
    ...metricsChoosed.map((el,ind) => {
      return(
        <MetricsItem 
            key={ind+el.metrics_type}
            {...el}
            graph_color={ind}
            metricsItemList={metricsItemList}
            setMetricsItemList={e => setMetricsItemList(e)}
            metricsChoosed={metricsChoosed}
            setMetricsChoosed={e => setMetricsChoosed(e)}
            setSelectedColors={e => setSelectedColors(e)}
            selectedColors={selectedColors}
        />
      )
    })
    ])

  },[metricsChoosed, metricsItemList,selectedColors])


  useEffect(() => {
    setChartsGroupList([
        ...charts_group_list.map((el,ind) => 
            <ChartsGroup 
                key={ind+el.group_title}
                {...el}
            />
        )
    ])
  }, [charts_group_list])


  return (
    <main className="main-page">
        <section className="block-with-buttons">
            <aside className="filter-account filter-account__shop">
                <FilterSelector 
                    filter_name={'Магазин'} 
                    filter_item_list={shop_filter_list} 
                    setState={e => setShopFilterValue(e)}
                    state={shopFilterValue}
                />
                <FilterSelector 
                    filter_name={'Категория'} 
                    filter_item_list={category_filter_list}
                    setState={e => setCategoryFilterValue(e)}
                    state={categoryFilterValue}

                 />
                <FilterSelector 
                    filter_name={'Бренд'} 
                    filter_item_list={brand_filter_list} 
                    setState={e => setBrandFilterValue(e)}
                    state={brandFilterValue}
                />
            </aside>
            <RecomendationBlock 
                recomendation_title={'Рекомендации и предупреждения'}
                recomendation_items={recomendation_item_list}
            />
        </section>

        <section className="comparison-of-metrics" >
            <div className="metrics">
                <div className="choosed_metrics_placeholder">
                    {metricsChoosedList}
                </div>
                <div className="metrics__add"
                    onClick={() => setModalMetricsSelector(true)}
                >
                    <h3 className="metrics__title">Добавить метрику</h3>
                   <AddButton 
                   />
                </div>
                <ModalMetricsSelector 
                    setModalMetricsSelector={e => setModalMetricsSelector(e)}
                    modalMetricsSelector={modalMetricsSelector}
                    metricsList={metrics_selector}
                    metricsChoosed={metricsChoosed}
                    setMetricsChoosed={el => setMetricsChoosed(el)}
                />
            </div>
            <LineChart 
                chart_name={'руб'}
                chart_unit={'шт'}
                chart_size={'big'}
                multiAxis_prop={true}
                colorArr={selectedColors}
            />
        </section>
        {chartsGroupList}
        
    </main>

  )
}

export {Main}