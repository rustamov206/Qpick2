// import sass
import "./kupit.scss"
// import React hooks
import { useEffect, useState } from "react"

import {useParams} from "react-router-dom"
// import imges
import Heart from "../../assets/svg/Vector (6).svg"
import Logo from "../../assets/svg/image 11.svg"
// import NavLink
import { NavLink } from 'react-router-dom';

function Kupit() {
    const [data, setData] = useState()
    const {cardId} = useParams()
    useEffect(() => {
        fetch(`https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product/${cardId}`)
            .then((res) => res.json())
            .then((data) => setData(data))
    })

    console.log(data);
    return (
        <>
            <section className="kupit_section">
                <div className="container">
                    <p className="kupit_name">Автодержатель</p>


                    <div className="batafsil">
                        <div className="heart_imgs">
                            <img className="" src={Heart} alt="" />
                            <img className="" src={Logo} alt="" />

                        </div>
                        <img className="kupit_img" src={data?.img} alt="" />
                        <div className="kupit_price">
                            <h3 className="kupit_inner">{data?.name}</h3>
                            <p className="kupit_inner_price">{data?.price}</p>
                        </div>
                    </div>




                    <div className="kupit_btn1">
                        <div className="xarakter">
                            <div className="xarakter_name"><p>Описание и характеристики</p></div>
                            <ul className="xarakter_list">
                                <li className="xarakter_list_item">Активное шумоподавление: Нет
                                </li>
                                <li className="xarakter_list_item">Вес: 10 гр</li>
                                <li className="xarakter_list_item">Влагозащита: Нет</li>
                                <li className="xarakter_list_item">Длина кабеля: 1.2 м</li>
                                <li className="xarakter_list_item">Комплектация: Наушники</li>
                                <li className="xarakter_list_item">Материал корпуса: Пластик, резина</li>
                                <li className="xarakter_list_item">Микрофон: Да</li>
                                <li className="xarakter_list_item">Назначение: Проводные наушники</li>
                                <li className="xarakter_list_item">Ответить/закончить разговор: Да</li>
                                <li className="xarakter_list_item">Разъем наушников: Lightning</li>
                                <li className="xarakter_list_item">Регулятор громкости: Да</li>
                                <li className="xarakter_list_item">Тип крепления: Без крепления</li>
                                <li className="xarakter_list_item">Тип наушников: Вкладыши ("таблетки")</li>
                                <li className="xarakter_list_item">Тип подключения: Проводное</li>
                                <li className="xarakter_list_item">Частотный диапазон: 20 Гц - 20000 Гц</li>
                                <li className="xarakter_list_item">Чувствительность: 109 дБ</li>
                            </ul>
                        </div>
                        <div className="btns">
                            <NavLink to={`/kupit_inner`}>
                            <button className="innner_btn">Купить!</button>
                            </NavLink>
                            <button className="inner_btn">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Kupit