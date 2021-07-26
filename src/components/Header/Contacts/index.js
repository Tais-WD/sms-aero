import React from 'react';
import CustomLink from '../../common/CustomLink';
import CustomButton from "../../common/CustomButton";
import './index.scss'

function Contacts(props) {
    const message = "fas fa-comments";
    const telegramm = "fab fa-telegram";
    const email = "fas fa-envelope";
    const phone = "fas fa-phone-alt";
    const star = "fas fa-star";
    const user = "fas fa-user-circle";
    return (
        <nav className='contacts'>
            <div className='contacts__block__item item-1'>
                <div className='contacts__inline-section'>
                    <CustomLink href='#' icon={message} dashed='true'>Начать чат</CustomLink>
                    <span className='contacts__text '>Мы 24/7 на связи!</span>
                </div>
                <div className='contacts__inline-section'>
                    <CustomLink href='#' icon={telegramm}>smsaero</CustomLink>
                    <a className='contacts__tel-link' href="tel:+88005557550">8 800 555 7 550</a>
                </div>
                <div className='contacts__inline-section'>
                    <CustomLink href='#' icon={email}>support@smsaero.ru</CustomLink>
                    <CustomLink href='#' icon={phone} dashed='true'>Перезвоните!</CustomLink>
                </div>
            </div>
            <div className='contacts__block__item item-2'>
                <span className='contacts__text pdg-btm-8'>4.7 из 5 — вау!</span>
                <div className='contacts__rating pdg-btm-8'>
                    <i className={star}></i>
                    <i className={star}></i>
                    <i className={star}></i>
                    <i className={star}></i>
                    <i className={star}></i>
                </div>
                <CustomLink href='#'>Отзывы о нас</CustomLink>
            </div>
            <div className='contacts__block__item item-3'>
                <CustomButton variant='signIn' icon={user}>Войти</CustomButton>
                <CustomLink href='#' dashed='true'>Регистрация</CustomLink>
            </div>
        </nav>
    );
}

export default Contacts;