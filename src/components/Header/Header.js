import React, {useState} from 'react'
import './Header.scss'
import{ ReactComponent as Logo } from './img/logo.svg'
import IconUserRound from './img/icon_user_round.svg'
import iconApi from './img/icon_api.svg'
import iconPassword  from './img/icon_password.svg'
import iconFeedbac from './img/icon_feedback.svg'
import iconBalance  from './img/icon_balance.svg'
import iconExit  from './img/icon_exit.svg'
import ProfileImg from './img/ava.png'
import RangeDatePicker from '../RangeDatePicker'
import BtnsRowSelector from '../btnsRowSelector'
import MainMenuItems from '../MainMenuItems/'

const Header = ({
    shopFilterValue,setShopFilterValue,
    categoryFilterValue,setCategoryFilterValue,
    brandFilterValue,setBrandFilterValue,
    apiIdValue,setFetchedData,
    FilterApiFetchFunction
}) => {
    const [typeOfView,setTypeOfView] = useState('days')
    const [rangeOfView,setRangeOfView] = useState('7')
    const [profileSelector,setProfileSelector] = useState(false)

    const profile_menu_class = profileSelector ? 'profile__menu display_item' : 'profile__menu'

    const typeOfViewList = [
        {
            value:'days',
            text: <>По <br /> дням</>
        },
        {
            value:'weeks',
            text: `По неделям`
        },
        {
            value:'months',
            text: `По месяцам`
        }
    ]
    
    const rangeOfViewList = [
        {
            value:'7',
            text: `1Н`
        },
        {
            value:'14',
            text: `2Н`
        },
        {
            value:'30',
            text: `1М`
        },       {
            value:'60',
            text: `2М`
        }
    ]

    const typeOfViewComponent = typeOfViewList.map((e,ind) => 
        <BtnsRowSelector
            key={ind+e.value} 
            {...e} 
            state={typeOfView} 
            setState={(e) => setTypeOfView(e)} 
            clazz='period__btn_item  period__btn_item_view'
        />
    )

    const rangeOfViewComponent = rangeOfViewList.map((e,ind) => 
        <BtnsRowSelector 
            key={ind+e.value}
            {...e} 
            state={rangeOfView} 
            setState={(e) => setRangeOfView(e)} 
            clazz='period__btn_item'
        />
    )

   

    return (
        <header className="header">
            <div className="wrapper___header">
                <nav className="menu__main">
                    <div className="menu__main_item logo__container">
                        <a href="#" className="logo__main_link">EcomLab</a>
                        <Logo />
                    </div>
                    {<MainMenuItems />}
                    <div className="notifications__search-popup_container">
                        <div className="notifications__container">
                            <div className="notifications_item"><a href="#" className="notifications__link_unload"></a></div>
                            <div className="notifications_item"><a href="#"
                                    className="notifications__link_messages notifications__link_active"></a></div>
                            <div className="notifications_item"><a href="#"
                                    className="notifications__link_bell notifications__link_active"></a></div>
                        </div>
                        <div 
                            className="search-popup__container"
                            onMouseEnter={e => setProfileSelector(true)}
                            onMouseLeave={e => setProfileSelector(false)}
                        >
                            <div className="menu__main_item search__container">
                                <button className="profile__btn">Юлия</button>
                                <div 
                                    className={profile_menu_class}
                                >
                                    <div className="profile__block">
                                        <div className="profile__name_content">
                                            <div className="profile__img">
                                                <img className="img__profile" src={ProfileImg} alt="avatar" />
                                            </div>
                                            <div className="profile__name_container">
                                                <div className="profile__name">
                                                    <span className="name__text">Юлия</span>
                                                </div>
                                                <div className="user-name__text">
                                                    <span className="name-user__text">@Ulala</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile__items">
                                            <div className="profile__item">
                                                <img src={IconUserRound} alt="" className="icon__item" />
                                                <a href="#" className="profile__item_ink">Ваш профиль</a>
                                            </div>
                                            <div className="profile__item">
                                                <img src={iconApi} alt="" className="icon__item" />
                                                <a href="#" className="profile__item_ink">API-ключи</a>
                                            </div>
                                            <div className="profile__item">
                                                <img src={iconPassword} alt="" className="icon__item" />
                                                <a href="#" className="profile__item_ink">Пароль</a>
                                            </div>
                                            <div className="profile__item">
                                                <img src={iconFeedbac} alt="" className="icon__item" />
                                                <a href="#" className="profile__item_ink">Обратная связь</a>
                                            </div>
                                            <div className="profile__item">
                                                <img src={iconBalance} alt="" className="icon__item" />
                                                <a href="#" className="profile__item_ink">Баланс</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile__item exit_btn">
                                        <img src={iconExit} alt="" className="icon__item" />
                                        <a href="#" className="profile__item_ink">Выйти</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="burger__container display_none">
                        <button className="burger__menu">
                            <span className="burger__line"></span>
                        </button>
                    </div>
                </nav>
            </div>
            <div className="period-string__content">
                <div className="period__block">
                    <div className="period-string__sort">
                        <span className="period-string__text">Просмотр</span>
                        <div className="period-string__btn">
                            {typeOfViewComponent}
                        </div>
                    </div>
                    <div className="period-string__btn">
                        <div className="btn__all">
                            {rangeOfViewComponent}
                        </div>
                    </div>
                    <div className="data__select">
                        <RangeDatePicker range={rangeOfView} />
                    </div>
                        <button 
                            className="btn__component"
                            onClick={() => FilterApiFetchFunction({
                                type_of_view: typeOfView,
                                api_id: apiIdValue,
                                brand_id: brandFilterValue,
                                category_id: categoryFilterValue,
                                setState: e => setFetchedData(e)
                            })}
                        >
                            Применить
                        </button>
                    </div>
            </div>
        </header>
    )
}

export {Header}