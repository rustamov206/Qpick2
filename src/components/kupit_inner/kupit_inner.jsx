import "./kupit_inner.scss"

import Map from "../../assets/svg/map.svg"
import Kamaz from "../../assets/svg/kamaz.svg"
import { NavLink } from 'react-router-dom';

import {useEffect , useState} from "react"

function Kupit_inner() {
   
    // useEffect(() => {
    //  fetch('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product')
    //  .then((res) => res.json())
    //  .then((data) => setData(data))
    // })
    return (
        <>
        <section className="kupit_inner_section">
            <div className="container">
                <p className="kupit_inner_title">Корзина</p>
                <div className="inner_twice">
                <div className="kupit_inner_item">
                    

                    </div>
                    <div className="kupit_itogo">
                        <div className="itogo_price">
                            <p className="itogo_name">ИТОГО</p>
                            <p className="itogo_price_inner">₸ 2 927</p>
                        </div>
                        <NavLink to={'/zakaz'}>
                        <button className="itogo_btn">Перейти к оформлению</button>
                        </NavLink>
                    </div>
                </div>
               
                <div className="kupit_inner_map">
                    <p className="map_dastavka">Доставка</p>
                    <img className="inner_map" src={Map} alt="" />
                    <div className="zakaz">
                        <div className="zakaz_location">
                        <img className="inner_kamaz" src={Kamaz} alt="" />
                        <span className="zakaz_rayon">Доставка курьером</span>
                        </div>
                        <p className="dastavka_price"> 499 ₸</p>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
export default Kupit_inner