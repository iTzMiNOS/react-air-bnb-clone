import grid from "../public/images/grid.png"

export default function Hero(){
    return (
        <div>
            <img src={grid} className="hero-image" />
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-p"> Join unique interactive activities 
                led by one-of-a-kind hosts—all 
                without leaving home.
            </p>
        </div>
    )
}