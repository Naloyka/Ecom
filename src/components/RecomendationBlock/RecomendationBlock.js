import React,{useState,useEffect} from 'react'
import RecomendationItem from './RecomendationItem'
import './RecomendationBlock.scss'

const RecomendationBlock = ({
    recomendation_title,
    recomendation_items
}) => {

    const [recomendationItems,setRecomendationItems] = useState([])


   useEffect(() => {
        if(Array.isArray(recomendation_items)){
            setRecomendationItems([
                ...recomendation_items.map((el,ind) => <RecomendationItem key={ind+el.title} {...el} />)
            ])
        } else {
            setRecomendationItems(
                <RecomendationItem {...recomendation_items} />
            )
        }
   },[recomendation_items])


  return (
    <aside className="recommendations__container filter-account filter-account__shop">
        <div className="recommendations__content">
            <header className="recommendations__header">
                <div className="recommendations__icon"></div>
                <h4 className="recommendations__title">{recomendation_title}</h4>
            </header>
            <div className="recommendations__items">
                {recomendationItems}
            </div>
        </div>
    </aside>
  )
}

export {RecomendationBlock}