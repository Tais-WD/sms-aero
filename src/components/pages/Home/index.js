import React from 'react';
import CustomButton from "../../common/CustomButton";
import Table from '../../common/Table/index';
import CustomLink from "../../common/CustomLink";
import data from '../../../fakeData';
import './index.scss';

function Home(props) {
    const download = "fas fa-download";
    const info = "fas fa-info-circle";
    return (
        <main className='home-page'>
            <nav className='home-page__nav'>
                <div className='home-page__nav__item'>
                    <CustomButton>SMS-рассылка</CustomButton>
                </div>
                <div className='home-page__nav__item'>
                    <CustomButton>Таргетированные SMS</CustomButton>
                </div>
                <div className='home-page__nav__item'>
                    <CustomButton>Viber рассылка</CustomButton>
                </div>
                <div className='home-page__nav__item'>
                    <CustomButton>HLR-проверка</CustomButton>
                </div>
            </nav>
            <h1 className='home-page__title'>От 1,54 до 2,69 ₽ за SMS</h1>
            <h3 className='home-page__subtitle'>Цена SMS зависит от оператора связи, имени отправителя и суммы пополнения</h3>
            <section className='home-page__table'>
              <Table data={data}/>
            </section>
            <section className='home-page__link-section'>
                <CustomLink href='#' icon={download} variant='medium'>Презентация компании и цены в формате PDF</CustomLink>
                <CustomLink href='#' icon={download} variant='medium'>Только прайс в формате XLS</CustomLink>
                <CustomLink href='#' icon={info} variant='medium'>Подробнее об имени и сервисных сообщениях</CustomLink>
            </section>
        </main>
    );
}
export default Home;