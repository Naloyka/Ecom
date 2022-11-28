import React, {useState} from 'react'
import './AddButton.scss'

const AddButton = () => {
    const [fill,setFill] = useState("#C6C6C6")
    const [stroke,setStroke] = useState("#C6C6C6")

  return (
    <button 
        type="button" 
        className="metrics__btn"
        onMouseEnter={() => {
            setFill('#3182CC')
            setStroke('#3182CC')
        }}
        onMouseLeave={() => {
            setFill("#C6C6C6")
            setStroke("#C6C6C6")
        }}
    >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2610_2300)">
                <path className="metrics__fill"
                    d="M21.6968 21.725V29.151C21.6968 29.621 21.5244 30.0283 21.1798 30.373C20.8664 30.6863 20.4434 30.843 19.9108 30.843C19.4094 30.843 18.9864 30.6863 18.6418 30.373C18.3284 30.0283 18.1718 29.621 18.1718 29.151V21.725H10.8398C10.2131 21.725 9.77444 21.4587 9.52377 20.926C9.27311 20.362 9.27311 19.8137 9.52377 19.281C9.77444 18.717 10.2131 18.435 10.8398 18.435H18.1718V11.103C18.1718 10.633 18.3284 10.2413 18.6418 9.928C18.9551 9.61467 19.3781 9.458 19.9108 9.458C20.4434 9.458 20.8664 9.61467 21.1798 9.928C21.5244 10.2413 21.6968 10.633 21.6968 11.103V18.435H29.1698C29.7964 18.435 30.2351 18.717 30.4858 19.281C30.7364 19.8137 30.7364 20.362 30.4858 20.926C30.2351 21.4587 29.7964 21.725 29.1698 21.725H21.6968Z"
                    fill={fill} 
                />
            </g>
            <rect className="metrics__stroke" x="0.5" y="0.5" width="39" height="39" rx="19.5"
                stroke={stroke} strokeDasharray="4 4" 
            />
            <defs>
                <clipPath id="clip0_2610_2300">
                    <rect width="40" height="40" rx="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </button>
  )
}

export {AddButton}