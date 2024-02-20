import BlogCard from "@/app/components/BlogCard";
import im from "../../assets/blog-1.jpeg"
import im2 from "../../assets/blog-2.jpeg"
import im3 from "../../assets/blog-3.jpeg"



export default function BlogSection(){
    return (
        <div className="">
            <div className="text-center font-bold text-2xl  text-main">Blog</div>
            <div className="flex justify-between px-3 font-semibold">
                <div className="  ">Latest</div>
                <div className="text-main">View All</div>
            </div>
            <div className="flex  flex-col md:flex-row justify-around">
                <BlogCard image={im} author="Usman Khalid | 1 Jan 2023" heading="Taxonomy In Planting Decision" desc="Taxonomy is the science of classifying and categorizing organisms based on their characteristics and evolutionary relationships for systematic organization."/>
                <BlogCard image={im2} author="Fatima El-Hassan | 1 Jan 2023" heading="Green House Farming" desc="Greenhouse farming is a controlled environment agricultural practice where crops are grown within a structure that regulates temperature, humidity, and....."/>
                <BlogCard image={im3} author="David Gondo | 1 Jan 2023" heading="AI And ML In Agricultural Transformation" desc="AI and ML in agriculture: Enhancing crop monitoring, resource optimization, and decision-making, boosting yields, sustainability, and food security."/>
            </div>

        </div>
    )
}