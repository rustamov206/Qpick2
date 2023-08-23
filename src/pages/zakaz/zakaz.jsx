// import sass
import "./zakaz.scss"


// import {useEffect , useState} from 'react'
// import { useParams } from "react-router-dom";


// import img
import Map from "../../assets/svg/map.svg"


function Zakaz() {
    // const [data , setData] = useState()
    // const [zakazId] = useParams()

    // useEffect(() => {
    //     fetch('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product/${zakazId}')
    //     .then((res) => res.json())
    //     .then((data) =>setData)
    // })
    return (
        <>
            <section className="zakaz_section">
                <div className="container">
                    <p className="zakaz_name">Оформление заказа</p>
                    <div className="big_zakaz_section">

                        <div className="input-card">
                            <div className="input-card-top">
                                <h4 className="input-card-top-h4">Доставка курьером</h4>
                                <h4 className="input-card-top-price-h4">499 ₸</h4>
                            </div>

                            <div className="input-card-middle">
                                <img src={Map} alt="" width={'375px'} height={'146px'} />
                            </div>

                            <div className="input-cards">
                                <h4 className="input-card-adres">Адрес доставки</h4>

                                <div className="inputs">
                                    <input className="input1" type="text" placeholder="Город" />
                                    <input className="input1" type="text" placeholder="Улица / Район" />
                                </div>

                                <div className="inputs_wrap">
                                    <input className="input2" type="text" placeholder="Дом" />
                                    <input className="input2" type="text" placeholder="Подъезд" />
                                    <input className="input2" type="text" placeholder="Квартира" />
                                </div>
                            </div>

                        </div>
                        <div className="vash_zakaz">
                            <div className="vash_zakaz_itogo">
                                <p className="vash_zakaz_itogo_inner_price">Ваш заказ</p>
                                <div className="div1">
                                    <p className="vash_zakaz_itogo_name">Наушники Apple BYZ S852I</p>
                                    <p className="vash_zakaz_itogo_price">₸ 2 927</p>
                                </div>
                                <div className="div2">
                                    <p className="vash_zakaz_itogo_name">Доставка</p>
                                    <p>₸ 2 927</p>
                                </div>
                                <div className="div3">
                                    <p className="vash_zakaz_itogo_name">К оплате</p>
                                    <p>₸ 2 927</p>
                                </div>

                            </div>
                            {/* <div className="oplati">
                                <p className="vash_zakaz_oplati_name">Способ оплаты</p>
                                <div className="div4">
                                    <p>Счет на kaspi.kz</p>
                                </div>
                            </div> */}
                            <div className="contact_number">
                            <p className="contact_number_title">Номер получателя</p>
                            <div className="contact_number_input">
                                <input className="number-card-input" type="input" placeholder="+998 __ ___ ___" />
                            </div>
                            </div>
                            <button className="zakaz_ofar">Закончить оформление</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Zakaz