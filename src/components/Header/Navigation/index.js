import React from 'react';
import './index.scss';

function Navigation(props) {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Услуги</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Интеграция</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Цены</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Решения</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Поддержка</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Блог</a>
                </li>
                 <li className='navigation__list-item'>
                    <a href='#' className='navigation__link'>Компания</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;