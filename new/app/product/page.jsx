import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import sensor from "../../assets/sensorkit.svg"
import bundle from "../../assets/dotTerra bundle.svg"
import  clinic from "../../assets/clinic.svg"
import Image from "next/image";
export default function Product(options) {
    return(
        <div className="flex flex-col gap-3 p-3 ">
            <Navbar/>
            <div className="display flex-col-reverse">
                <div className="product-width">
                    <div className="head">Smart Soil Sensor Kit</div>
                    <div className="body-text">IoT-enabled devices are used by farmers to collect accurate and timely data on soil moisture, pH, and nutrient levels. The data is communicated to the dotTerra platform via cloud technology. This data can be used by farmers to make informed decisions about irrigation, fertilization, and crop rotation. It can also be used to track the progress of crops and identify potential problems early on</div>
                    <div className="underline body-text">Key features of the smart soil sensor kit include:</div>
                    <ul className="body-text list-disc pl-5">
                        <li className="">Seven sensors embedded based on the critical soil parameters </li>
                        <li className="">Capturing the physical characteristics of the soil</li>
                        <li className="">Capturing chemical characteristics of the soil</li>
                        <li className="">Capturing biological characteristics of the soil</li>
                        <li className="">Solar-powered with rechargeable batteries lasting months without replacement</li>
                        <li className="">Equipped with Ultrasonic pest repellant that can be remotely enabled or disabled</li>
                        <li className="">LoRa or better tech for data transmission</li>
                    </ul>
                </div>
                <div className="product-width">
                    <Image  src={sensor} alt="Missing" className=""/>
                </div>
            </div>


            <div className="display flex-col">
                <div className="product-width">
                    <Image src={clinic} alt="Clinic" className=""/>
                </div>
                <div className="product-width">
                    <div className="head">dotTerra AI Data-Driven Platform</div>
                    <div className="body-text">A user-friendly web and mobile application that provides real-time insights and personalised recommendations to farmers based on weather conditions, soil conditions, and market demand. The platform guides farmers in making informed decisions at every stage of the farming process, such as irrigation scheduling, fertilisation practices, crop selection, and more.</div>
                    <div className="underline body-text">Key features of the platform include:</div>
                    <ul className="body-text list-disc">
                        <li className="">Smart Dashboard: Displays real-time data from soil sensors and satellite imagery, as well as weather forecasts and market demand for different crops.</li>
                        <li className="">AI Recommendation Engine: Uses AI/ML algorithms to provide personalised advice for irrigation, fertilisation, planting, harvesting, and more based on soil, weather, and market conditions to optimise your farm’s productivity and profitability</li>
                        <li className="">Digital Crop Clinic: Allows farmers to experience an interactive AI-driven farming advisor. Create custom scenarios for crop selection, planting, irrigation, fertilisation, harvesting, critical resources, and risk assessment. Receive feedback for successful farming and suggestions to continuously improve your farming practices</li>
                        <li className="">Reporting Tool: Generates customised reports that show the performance of the farm, the impact of the recommendations, and the areas for improvement.</li>
                        <li className="">Climate Forecasting Tool: Predicts future weather patterns and climate risks and suggests adaptation strategies for the farm. It also predicts future market patterns and crop scarcity and suggests crop selection strategies for the farm. It also predicts future soil changes and soil depletion risks and suggests strategies for the farm.</li>
                        <li className="">Digital Extension Service: Helps farmers to seamlessly connect with potential large-scale buyers, industries, and trusted fertiliser companies through our digital extension service. Optimise your farming practices and explore new market opportunities</li>
                    </ul>
                    <div className="body-text">Mobile Application: Allows farmers to access the platform from anywhere and receive notifications and alerts to stay updated and informed.</div>
                </div>
            </div>


            <div className="display flex-col-reverse">
                <div className="product-width">
                    <div className="head">dotTerra Bundle</div>
                    <div className="body-text">Climate plays a critical role in crop production, directly impacting yields and food security. Temperature, precipitation, and weather patterns influence crop growth and development. Increased temperatures can accelerate evaporation, stress plants, and alter flowering and pollination times. Inconsistent rainfall patterns can lead to droughts or floods, both detrimental to crops. Pests and diseases thrive in certain climates, posing additional risks. Climate change exacerbates these challenges, making adaptation strategies crucial for sustainable agriculture. Overall, a stable and predictable climate is essential for maximizing crop productivity and ensuring global food availability.
                    </div>
                </div>
                <div className="product-width">
                    <Image src={bundle} alt="Missing" className=""/>
                </div>
            </div>


            <div className="display flex-col">
                <div className="product-width">
                    <Image src="https://images.pexels.com/photos/10806264/pexels-photo-10806264.jpeg" alt="Missing" className="w-full h-full object-cover p-3" width={500} height={500}/>
                </div>
                <div className="flex flex-col product-width">
                    <div className="head">Pest Control Imaging</div>
                    <div className="body-text">Climate plays a critical role in crop production, directly impacting yields and food security. Temperature, precipitation, and weather patterns influence crop growth and development. Increased temperatures can accelerate evaporation, stress plants, and alter flowering and pollination times. Inconsistent rainfall patterns can lead to droughts or floods, both detrimental to crops. Pests and diseases thrive in certain climates, posing additional risks. Climate change exacerbates these challenges, making adaptation strategies crucial for sustainable agriculture. Overall, a stable and predictable climate is essential for maximizing crop productivity and ensuring global food availability.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}