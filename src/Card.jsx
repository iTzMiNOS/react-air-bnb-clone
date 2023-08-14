/* eslint-disable react/prop-types */
import star from "../public/images/star.png"

export default function Card(props) {
    return (
        <div className="person-card">
            <img src={props.img} className="person-image" /><br></br>
            <div className="first-line">
                <img src={star} className="star" />
                <small>{props.rating}&nbsp;</small>
                <small className="trans-text">({props.reviewCount}) {props.location}</small>
            </div>
            <div className="other-line">
                <small>{props.title}</small>
            </div>
            <div className="other-line">
                <small className="bold-text">From {props.price}$&nbsp;</small>
                <small>/ per person</small>
            </div>
            
        </div>
    )
}