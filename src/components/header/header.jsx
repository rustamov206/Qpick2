import "./header.scss"
// import imges
import Logo from "../../assets/svg/QPICK.svg"
import Heart from "../../assets/svg/Vector (3).svg"
import Korzinka from "../../assets/svg/Vector (4).svg"

import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <section className="header_navbar">
                <div className="container">
                    <div className="navbar">
                        <ul className="navbar_list">
                            <NavLink  to={'/'}>

                            <li className="navabr_item1"> <img className="navbar_logo" src={Logo} alt="" />
                                <p className="navbar_model">Выбрать модель телефона</p>
                            </li>
                            </NavLink>
                            <li className="navbar_item">
                                <img className="navbar_heart" src={Heart} alt="" /> <img src={Korzinka} alt="" />
                            </li>
                        </ul>
                    </div>
</div>                    
            </section>


        </>
    )
}
export default Header