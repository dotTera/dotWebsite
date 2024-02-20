import ProductCard from "@/app/components/ProductCard";
import im1 from "../../assets/sensorkit.svg"
import im2 from "../../assets/clinic.svg"
import im3 from "../../assets/dotTerra bundle.svg"


export default function ProductSection(){
    return(
        <div className="flex flex-col m-2">
            <div className="text-main text-center text-2xl font-bold py-2">Products</div>
            <div className="text-center">dotTerra is a precision agriculture platform that provides farmers with real-time insights and personalized recommendations. It uses smart soil sensor kits, satellite imagery, and AI algorithms to help farmers optimize their farming practices and increase their productivity. dotTerra's smart soil sensor kits collect data on soil moisture, temperature, pH, and other factors. This data is then analyzed by AI algorithms to identify potential problems, such as nutrient deficiencies or pests. dotTerra also provides farmers with personalized recommendations on how to address these problems.
            </div>
            <div className="flex flex-col md:flex-row gap-2  my-2  justify-around">
                <ProductCard image={im1} header="Smart Soil Sensor Kit" desc="Our state-of-the-art sensors monitor key soil metrics, providing real-time data on moisture levels, nutrient content, and pH balance for data-driven decision making"/>
                <ProductCard image={im2} header="dotTerra AI Data-Driven Platform" desc="Our intuitive and user-friendly platform provides real-time weather data and forecasts, advanced analytics and insights to optimize soil condition, and market trends and demand forecasts to anticipate customer needs"/>
                <ProductCard image={im3} header="dotTerra Bundle" desc="Our intuitive and user-friendly platform provides real-time weather data and forecasts, advanced analytics and insights to optimize soil condition, and market trends and demand forecasts to anticipate customer needs"/>
            </div>

        </div>
    )
}