// import sass
import "./hero.scss"
// import react Hooks
import {useEffect , useState} from "react"
// import imges
import Raeting from "../../assets/svg/Vector (5).svg"
import Heart from "../../assets/svg/Vector (6).svg"
// import Navlink
import { NavLink } from 'react-router-dom';





function Hero() {
    const [Data, setData] = useState()
   useEffect(() => {
    fetch("https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product")
    .then((res) => res.json())
    .then((data) => setData(data))
   })
    return (
        <>
            <section className="nasushnik-section">
                <div className="container">
                    <p className="naushnik">Наушники</p>
                    <div className="quloqchinlar">
                        {
                            Data?.map((item) => {
                                console.log(item.img);
                                return (
                                    <NavLink to={`/cards_inner/${item.id}`}>
                                        <div className="quloqchin-cards" key={item.id}>
                                            <img className="apple-img" src={item.img} alt="" />
                                            <img className="heart" src={Heart} alt="" />
                                            <div className="nomi">
                                                <p className="apple-name">{item.name.slice(0,20)}</p>
                                                <span className="apple-price">{item.price}</span>
                                            </div>
                                            <div className="star">
                                                <img className="rating" src={Raeting} alt="" />
                                                <p className="star-number">{item.rating}</p>
                                            </div>
                                        </div>
                                    </NavLink>

                                )
                            })

                        }
                    </div>
                </div>

            </section>
        </>
    )
}
export default Hero