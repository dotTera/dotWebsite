import "./product-detail.scss"


export default function ProductDetailCard (){
    return(
        <>
            <div className="product-detail">
                {/*<div className="product-detail-head">Our Solution</div>*/}
                {/*<img src={sensor} alt="Photo Missing" className="sensor-img" />*/}
                <div className="product-detail-head">How does dotTerra increase your productivity ?</div>
                <div className="cards">
                    <ProductDetail
                        title="Increase crop yields and farm profitability"
                        text="dotTerra provides farmers with data-driven insights to optimize crop selection, planting schedules, irrigation, and fertilizer application. By leveraging dotTerra's technology, farmers can increase yields by 15-20% and improve net profit margins by 10-15% annually."
                        />
                    <ProductDetail
                        title="Reduce input costs and waste"
                        text="dotTerra's precision agriculture approach allows farmers to use resources like water, fertilizers, and pesticides more efficiently. Farmers save 10-20% on input costs annually while reducing wastage and environmental impact."
                        />
                    <ProductDetail
                        title="Adapt to climate change and weather variability"
                        text="dotTerra equips farmers with real-time weather data and predictive models to strategize for weather variability and extremes. This enables precise adaptation to climate change for increased resilience and crop protection"
                        />
                </div>
                
                <div className="waitlist">
                    <div className="ready-w">Ready to join the list of farmers using dotTerra to increase thier productivity and profits whilst being sustainable?</div>
                    <div className="join-w">
                        <a href="https://forms.gle/yRGMizR6u3dX7dgQ9" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none',color:"white"}} >Join Our Waiting List</a></div>
                </div>

            </div>
        </>
    )
}

export function ProductDetail({icon,title,text}){
    return(
        <>
        <div className="product-card">
            <div className="icon"></div>
            <div className="card-title">{title}</div>
            <div className="card-text">{text}</div>
        </div>

        </>
    )
}

