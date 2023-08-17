import "./product-detail.scss"
import dash from "./dash.jpg"
import sensor from "./15.svg"
import dashboard from "./14.svg"
import bundle from "./16.svg"
import "./offer.scss"

export default function Offer(){


    return(

        <div className="offerings" id="off">
            <div className="offerings-header">Our Offerings</div>
            
            <div className="sect">
                <div className="offering-sect">
                    <img src={sensor} alt="Photo Missing" className="off-img"/>
                    <Desc
                        desc="Our state-of-the-art sensors monitor key soil metrics, providing real-time data on moisture levels, nutrient content, and pH balance for data-driven decision making"
                        text="ORDER NOW"

                    />
                </div>

                <div className="offering-sect">
                    <img src={dashboard} alt="Photo Missing" className="off-img"/>
                    <Desc
                        desc="Our intuitive and user-friendly platform provides real-time weather data and forecasts, advanced analytics and insights to optimize soil condition, and market trends and demand forecasts to anticipate customer needs"
                        text="SUBSCRIBE NOW"

                    />
                </div>
                
                <div className="offering-sect">
                    <img src={bundle} alt="Photo Missing" className="off-img"/>
                    <Desc
                        desc="Unlock the full potential of your farm with the dotTerra Bundle. Our comprehensive offering combines the power of our smart soil sensor kit with a yearly subscription to our platform, providing you with actionable insights and personalized farming recommendations"
                        text="ORDER THE BUNDLE NOW"

                    />
                </div>
                
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
                <a href="" style={{ textDecoration:"none",color:"#d8e9a8"  }}    >{text}</a>
            </div>

        </div>

    )
}
