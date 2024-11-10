import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';
const Shop = ({shop, Filter, allcatefilter, addtocart}) => {

    const [showDetail, setShowDetail] = useState(false)
    
    const [detail, setDetail] = useState([])

    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => 
    {
        setShowDetail(false)
    }
  return (
    <>
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>Новая модель</p>
                    <h3>{detail.price} руб</h3>
                    <button onClick={() => addtocart (detail)}>В корзину</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <h2>Магазин</h2>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>Все категории</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}>Все</li>
                            <li onClick={() => Filter ("телевизор")}>Телевизоры</li>
                            <li onClick={() => Filter ("компьютер")}>Компьютеры</li>
                            <li onClick={() => Filter ("часы")}>Часы</li>
                            <li onClick={() => Filter ("колонка")}>колонки</li>
                            <li onClick={() => Filter ("электроника")}>Электроника</li>
                            <li onClick={() => Filter ("наушники")}>Наушники</li>
                            <li onClick={() => Filter ("телефон")}>Телефоны</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_left.avif' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/shop_top.webp' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    {/* <h2></h2> */}
                    <div className='product_container'>
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               <li><AiFillHeart /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>{curElm.price} руб</p>
                                            <button onClick={() => addtocart (curElm)}>В корзину</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop