import React, { useState, useEffect } from 'react';
import './HeaderMain.scss'

const HeaderMain = () => {
    return (
        <div className='main-sidebar'>
            <nav className='main-sidebar__nav'>
                <div className='main-sidebar__left-box'>
                    <input className='input-field' type='text' placeholder='Поиск...'></input>
                </div>
                <div className='main-sidebar__right-box'>
                    <div className='main-sidebar__group-btn'>
                        <button className='task__btn'></button>
                        <button className='upload__btn'></button>
                        <button className='notifications__btn notifications'></button>
                        <button className='message__btn notifications'></button>
                        <button className='setting__btn'></button>
                    </div>
                    < div className='profile-box'>
                        <button className='profile-box__btn'></button>
                        <p className='profile-box__user-name'>info@ecomru</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { HeaderMain }