import React from 'react'

const RecomendationItem = ({
    title,
    value
}) => {
  return (
    <div className="recommendations__item">
        <div className="recommendations__item_text-title">{title}</div>
        {
          value ?
          <div className="recommendations__item_text-meaning">{value}</div> : null 
        }
    </div>
  )
}

export {RecomendationItem}