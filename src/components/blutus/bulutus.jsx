// import sass
import "./bulutus.scss"
// import Data
import { comeData2 } from "../../data/blutus"
// import imges
import Raeting from "../../assets/svg/Vector (5).svg"
import Heart from "../../assets/svg/Vector (6).svg"
import Iphone from "../../assets/svg/13pro.svg"



function Blutus() {
    const data = comeData2
    return (
        <>
        <section className="blutus-section">
            
            <div className="container">
            <div className="reklama">
                        <span className="reklama_title">Аксессуары для <br />
                            Iphone 13 Pro Max</span>
                        <img className="reklama_img" src={Iphone} alt="" />
                    </div>
                    <p className="blutus">Беспроводные наушники</p>
                    <div className="blutus_section">
                        {
                           data?.map((item) => {
                            return (
                                <>
                                <div className="bulutus-cards" key={item.id}>
                                        <img className="bulutus-img"  src={item.img} alt="" />
                                        <img className="heart" src={Heart} alt="" />
                                        <div className="name">
                                            <p className="bulutus-name">{item.nomi}</p>
                                            <span className="bulutus-price">{item.narxi}</span>
                                        </div>
                                        <div className="star">
                                        <img className="rating" src={Raeting} alt="" />
                                        <p className="star-number">{item.rating}</p>
                                        </div>
                                    </div>
                                </>
                            )
                           }) 
                        }
                    </div>
                </div>
        </section>
        </>
    )
}
export default Blutus