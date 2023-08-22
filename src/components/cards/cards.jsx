import "./cards.scss"

import Chihol from "../../assets/svg/img.svg"


function Cards() {
    return (
        <>
        <section className="cards-section">
        
            <div className="container">
                <p className="chihol">Чехлы</p>
                <div className="cards">
                    <div className="card-box">
                        <img className="product-img" src={Chihol} alt="" />
                        <p className="product-name">Стеклянные</p>
                    </div>
                    <div className="card-box">
                        <img className="product-img" src={Chihol} alt="" />
                        <p className="product-name">Стеклянные</p>
                    </div>
                    <div className="card-box">
                        <img className="product-img" src={Chihol} alt="" />
                        <p className="product-name">Стеклянные</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Cards