import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
const Home = ({addtocart}) => {
 
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
 
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }


  useEffect(() => 
  {
    productcategory()
  })
  const productcategory = () => 
  {

    const newcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

 
    const featuredcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    
    const topcategory = Homeproduct.filter((x) => 
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h3>Новые часы</h3>
                <h2>Apple Watch</h2>
                <p>30% скидка на первый заказ</p>
                <Link to='/shop' className='link'>Перейти к покупкам</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>трендовые продукты</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ('new')}>Новинки</h3>
                  <h3 onClick={() => filtercate ('featured')}>Колаборации</h3>
                  <h3 onClick={() => filtercate ('top')}>Хит продаж!</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                                <AiFillEye />
                              </div>    
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>                        
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>{curElm.price} руб</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>В корзину</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Показать больше</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Наш консультант</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='image/T1.avif' alt='testmonial'></img>
                    </div>
                    <div className='info'>
                      <h3>Селин Дион</h3>
                      {/* <h4></h4> */}
                      <p>Сертифицированный специалист</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Новостная рассылка</h3>
                  </div>
                  <div className='form'>
                    <p>Подписывайтесь на нашу e-mail рассылку</p>
                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                    <button>Подписаться</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-Banner-1.avif' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.avif' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>Новинка</h2>
              </div>
              {
                newProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price} руб</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Колаборация</h2>
              </div>
              {
                featuredProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price} руб</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Хит продаж!</h2>
              </div>
              {
                topProduct.map((curElm) => 
                {
                  return(
                    <>
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p> {curElm.price} руб</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></button>
                        </div>
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
    </>
  )
}

export default Home