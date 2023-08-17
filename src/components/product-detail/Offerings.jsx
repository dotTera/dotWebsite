import "./product-detail.scss"
import dash from "./dash.jpg"
import sensor from "./sensorkit.svg"
import dashboard from "./clinic.svg"
import bundle from "./dotTerra bundle.svg"

export default function Offerings(){


    return(

        <div className="offerings">
            <div className="offerings-header">Our Offerings</div>
            <div className="offerings-pic">
                <img src={dash} alt="Photo Missing" className="off-img"/>
            </div>
            <div className="offerings-desc">
                <Desc
                    desc="Our state-of-the-art sensors monitor key soil metrics, providing real-time data on moisture levels, nutrient content, and pH balance for data-driven decision making"
                    text="ORDER NOW"

                />

                <Desc
                    desc="Our intuitive and user-friendly platform provides real-time weather data and forecasts, advanced analytics and insights to optimize soil condition, and market trends and demand forecasts to anticipate customer needs"
                    text="SUBSCRIBE NOW"

                />

                <Desc
                    desc="Unlock the full potential of your farm with the dotTerra Bundle. Our comprehensive offering combines the power of our smart soil sensor kit with a yearly subscription to our platform, providing you with actionable insights and personalized farming recommendations"
                    text="SUBSCRIBE ORDER THE BUNDLE NOW"

                />


            </div>

        </div>
    )

}

export function Desc({desc,text}){
    return(
        <div className="desc-sect">
            <div className="desc-text">
                {desc}
            </div>

            <div className="offering-btn">
                {/*{text}*/}
                <a href="" style={{ textDecoration:"none",color:"#d8e9a8"  }}    >{text}</a>
            </div>

        </div>

    )
}
