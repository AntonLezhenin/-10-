import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Большая экономия</h3>
                        <p>Сезонные скидки</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>Бесплатная доставка</h3>
                        <p>Бесплатная доставка при заказе от 10 000 руб</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>Поддержка 24X7 </h3>
                        <p>Наши операторы всегда готовы помочь</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>Возрат денег</h3>
                        <p>Прозрачная и понятная система возврата товара</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <p className='flogotip'>ЭлектроСила</p>
                    <p>Быстрая отправка, низкие цены, гарантия 1 год на всю продукцию</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Общая информация</h3>
                        <ul>
                            <li>О нас</li>
                            <li>Аккаунт</li>
                            <li>Оплата</li>
                            <li>Скидки</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Продукты</h3>
                        <ul>
                            <li>Доставка</li>
                            <li>Отследить заказ</li>
                            <li>Новинки</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Напишите нам</h3>
                        <ul>
                            <li>394001, Москва, ул. Малая бронная</li>
                            <li>+7 (903) 430 80 26</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <footer className='rights'>
Все права защищены &copy;
</footer>
    </>
  )
}


export default Footer