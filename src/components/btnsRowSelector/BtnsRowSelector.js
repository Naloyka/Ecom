import React from 'react'
import './BtnsRowSelector.scss'

const BtnsRowSelector = (
    {
        clazz,value,
        text,state,
        setState
    }
) => {

    const clazzName = state === value ? clazz + ' active_btn' : clazz
  return (
    <button 
        className={clazzName}
        value={value}
        onClick={e => setState(e.target.value)}
    >
        {text}
    </button>
  )
}

export {BtnsRowSelector}