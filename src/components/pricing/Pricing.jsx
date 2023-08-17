import React from "react";
import "./pricing.scss";
import check from "./check.png";

export default function Pricing() {
    const essentialsPackage = [
        "3 smart soil sensors",
        "1 year subscription to dotTerra mobile app",
        "Basic soil analysis and recommendations",
        "Basic weather tracking and alerts",
        "Training videos on using sensors and app",
    ];

    const optimizationPackage = [
        "5 smart soil sensors",
        "2 year subscription to dotTerra web and mobile app",
        "Advanced soil analysis with custom recommendations",
        "Precision weather tracking and forecasting",
        "Crop selection and planting optimization tools",
        "Pest and disease prediction and alerts",
    ];

    const customizationPackage = [
        "Flexible number of smart soil sensors",
        "3 year subscription to full dotTerra platform",
        "Premium soil analysis with expert agronomist support",
        "Hyperlocal weather forecasting and adaptation insights",
        "Crop planning, yield prediction and harvesting tools",
        "Pest, disease and weed management assistant",
        "Inventory and supply chain integration",
        "Market demand analysis and price optimization",
        "Ability to customize package based on farm size and needs",
    ];

    return (
        <div className="pricing-container">
            <PricingCard title="Starter Package" offerings={essentialsPackage} />
            <PricingCard title="Optimization Package" offerings={optimizationPackage} />
            <PricingCard title="Customization Package" offerings={customizationPackage} />
        </div>
    );
}

export function PricingCard({ title, offerings }) {
    return (
        <div className="pricing-card">
            <div className="price-name">{title}</div>
            <div className="offering-sect">
                {offerings.map((item, index) => (

                    <li key={index}>
                        <img src={check} className="check-img" alt="Photo-Missing" />
                        {item}
                    </li>
                ))}

            </div>
            <div className="join">Join</div>
        </div>
    );
}
