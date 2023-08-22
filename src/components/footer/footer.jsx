import "./footer.scss"

import Logo from "../../assets/svg/QPICK.svg"
import Social from "../../assets/svg/Social.svg"
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <>
            <section className="footer_secction">
                <div className="container">
                    <div className="footer_navbar">
                        <div className="footer_logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="footer_kontakt">
                            <ul className="kontakt_item">
                                <li className="kontact_link">
                                    Избранное
                                </li>
                                <li className="kontact_link">
                                    Корзина
                                </li>
                                <NavLink to={`/contact_section`}>
                                <li className="kontact_link">
                                    Контакты
                                </li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="footer_lang">
                            <p className="servis">Условия сервиса</p>
                        </div>
                        <div className="footer_link">
                            <img src={Social} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer