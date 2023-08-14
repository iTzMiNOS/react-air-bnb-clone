import katie from "./katie.png"
import star from "./star.png"

export default function Card() {
    return (
        <div className="person-card">
            <img src={katie} className="person-image" /><br></br>
            <div className="first-line">
                <img src={star} className="star" />
                <small>5.0&nbsp;</small>
                <small className="trans-text">(6) USA</small>
            </div>
            <div className="other-line">
                <small>Life lessons with Katie Zaferes</small>
            </div>
            <div className="other-line">
                <small className="bold-text">From 136$&nbsp;</small>
                <small>/ per person</small>
            </div>
            
        </div>
    )
}