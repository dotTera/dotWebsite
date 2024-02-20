

export default function WhyUsSection(){
    return(
        <div className="m-2  my-3">
            <div className="text-center text-2xl font-bold text-main">Why Us</div>
            <div className="flex gap-3.5 flex-col md:flex-row">
                <div className="">
                    <div className="text-xl text-main font-bold text-center py-2">Profitability</div>
                    <div className="text-center">"dotTerra provides farmers with real-time data on soil conditions, which can be used to optimize crop selection, planting schedules, irrigation, and fertilizer application. This can lead to increased yields of 15-20% and improved net profit margins of 10-15% annually."</div>
                </div>

                <div className="">
                    <div className="text-xl text-main font-bold text-center py-2">Cost And Waste Management</div>
                    <div className="text-center">"dotTerra's precision agriculture approach helps farmers save money and reduce their environmental impact by using resources like water, fertilizers, and pesticides more efficiently."</div>
                </div>

                <div className="">
                    <div className="text-xl text-main font-bold text-center py-2">Climate Resilience</div>
                    <div className="text-center">DotTerra provides farmers with real-time weather data and predictive models to help them prepare for and adapt to climate change. This helps farmers to increase their resilience and protect their crop
                    </div>
                </div>


            </div>
        </div>
    )
}