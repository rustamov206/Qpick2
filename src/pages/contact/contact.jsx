// import sass
import "./contact.scss"
// import imges
import Big from "../../assets/svg/big.svg"
import Whatsapps from "../../assets/svg/1.svg"
import Instagram from "../../assets/svg/Instagram (1).svg"
import Telegram from "../../assets/svg/Telegram.svg"
import VK from "../../assets/svg/VK.svg"

function Contact() {
    return (
        <>
        <section className="conatac">
            <div className="container">
                <div className="contact_section">
                    <div className="section_big">
                        <div className="section_map">
                            <p className="our_office">Наш офис</p>
                            <img className="our_office_location" src={Big} alt="" />
                            <span className="aksay">Аксай-3а, 62ф, Алматы, Казахстан</span>
                            <h4 className="kabinet">3 этаж 35 кабинет</h4>
                        </div>
                    </div>
                    <div className="section_small">
                        <div className="small_box"><img src={Whatsapps} alt="" /></div>
                        <div className="small_box"><img src={VK} alt="" /></div>
                        <div className="small_box"><img src={Instagram} alt="" /></div>
                        <div className="small_box"><img src={Telegram} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact