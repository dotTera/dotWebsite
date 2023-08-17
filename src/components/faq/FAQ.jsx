// import "./faq.scss"
// import downarrow from "./ww.png"
//
//
// function showMore(index) {
//     var faqText = document.querySelectorAll(".faq-text")[index];
//
//     faqText.classList.toggle("show");
// }
//
// export default function FAQ (){
//     return(
//         <>
//             <div className="faq">
//                 <span className="faq-header">FAQ</span>
//                 <p className="faq-subheading">Got questions? We’ve got answers.</p>
//                 <div className="faq-body">
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title">Who are we ?</div>
//                             <img src={downarrow} alt="down arrow" className="faq-arrow" onClick={showMore(0)}/>
//                         </div>
//                         <div className="faq-text">
//                             We are a technology startup intent on employing a global approach and a local understanding
//                             to solving farming challenges. Based in Mauritius, but with projected operations in the
//                             Rwandan and African market, we are assembling a team of stakeholders and team players to
//                             bring to market products that embody the Agriculture 4.0 concept
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title">What problem are we solving?</div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(1)}/>
//                         </div>
//                         <div className="faq-text">
//                             The problem we are attempting to solve is straightforward but profound. Farmers and food
//                             gardeners suffer enormous losses when their resources and efforts are directed toward
//                             farming practices with many unknown variables, such as appropriate soil content, weather
//                             patterns, and their variability, resulting in unproductivity, low and poor yield, and an
//                             increasing rate of seed death. Furthermore, it is difficult to detect and assess these
//                             conditions quickly or to obtain personalized timely information on them prior to sowing
//                             season, particularly when farms are located far from research centers.
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title">How are we tackling this problem?</div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(2)}/>
//                         </div>
//                         <div className="faq-text">
//                             We are building the dotTerra AI. With this, we will assess, monitor, and predict critical
//                             farming system resources (soil content, water, weather, etc.) as it operates and advise on
//                             measures to solve them before they become a problem to prevent immense losses and poor
//                             farming practices. We will also proactively detect important changes in the agro-ecosystems
//                             as soon as they occur. All these are done within milliseconds to give farmers a head start
//                             in mitigating issues otherwise heavily consequential risks. As a result, the farmer becomes
//                             proactive to maximize and optimize yields rather than reactive.
//
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title">What makes dotTerra stand out from other agricultural technology
//                                 solutions?
//                             </div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(3)}/>
//                         </div>
//                         <div className="faq-text">
//                             At dotTerra, we offer a comprehensive threefold solution that sets us apart from the
//                             competition. We focus on optimizing soil condition, harnessing weather adaptation, and
//                             anticipating market demand. By combining these three pillars, we provide farmers with a
//                             holistic approach to maximize productivity, profitability, and sustainability.
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title"> How does dotTerra help improve soil condition?</div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(4)}/>
//                         </div>
//                         <div className="faq-text">
//                             dotTerra utilizes advanced soil analytics and state-of-the-art sensors to continuously
//                             monitor key soil metrics such as moisture levels, nutrient content, and pH balance. By
//                             harnessing this data, farmers can make data-driven decisions about irrigation,
//                             fertilization, and crop selection, ultimately unlocking the full potential of their soil and
//                             increasing crop yields
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title"> How does dotTerra help increase sales and profitability</div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(5)}/>
//                         </div>
//                         <div className="faq-text">
//                             By leveraging our threefold solution, dotTerra empowers farmers to maximize their financial
//                             success. Through optimized soil condition, weather adaptation, and market anticipation,
//                             farmers can increase crop yields, minimize risks associated with adverse weather events, and
//                             align their offerings with customer demand. This strategic approach leads to increased
//                             sales, improved profitability, and long-term growth.
//                         </div>
//                     </div>
//
//                     <div className="faq-sect">
//
//                         <div className="faq-sect-title">
//                             <div className="faq-title">How can I get started with dotTerra?</div>
//                             <img src={downarrow}alt="down arrow" className="faq-arrow" onClick={showMore(6)}/>
//                         </div>
//                         <div className="faq-text">
//                             Simply reach out to our team through the contact form below and we will get back to you with
//                             the necessary information and guidance to customize the solution to your specific needs and
//                             help you embark on a journey towards sustainable farming practices and increased
//                             productivity.
//                         </div>
//                     </div>
//
//                 </div>
//
//
//             </div>
//         </>
//     )
// }

import React from "react";
import "./faq.scss";
import downarrow from "./ww.png";

function showMore(index) {
    var faqText = document.querySelectorAll(".faq-text")[index];
    // faqText.classList.toggle("show");
    faqText.style.display = faqText.style.display === "none" ? "block" : "none";
}

function showFAQ(){
    var query = document.querySelector(".faq-body")
    query.classList.toggle("showq")
    

}

export default function FAQ() {
    // const showMore = (index) => {
    //     var faqText = document.querySelectorAll(".faq-text")[index];
    //     faqText.classList.toggle("show");
    // };
    return (
        <>
            <div className="faq">
                <span className="faq-header">Frequently Asked Questions</span>
                <p className="faq-subheading " onClick={showFAQ}>Got questions? Click Here to Find Out.</p>
                <div className="faq-body">
                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">Who are we ?</div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(0)}
                            />
                        </div>
                        <div className="faq-text">
                            We are a technology startup intent on employing a global approach
                            and a local understanding to solving farming challenges. Based in
                            Mauritius, but with projected operations in the Rwandan and
                            African market, we are assembling a team of stakeholders and team
                            players to bring to market products that embody the Agriculture
                            4.0 concept
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">What problem are we solving?</div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(1)}
                            />
                        </div>
                        <div className="faq-text">
                            The problem we are attempting to solve is straightforward but
                            profound. Farmers and food gardeners suffer enormous losses when
                            their resources and efforts are directed toward farming practices
                            with many unknown variables, such as appropriate soil content,
                            weather patterns, and their variability, resulting in
                            unproductivity, low and poor yield, and an increasing rate of seed
                            death. Furthermore, it is difficult to detect and assess these
                            conditions quickly or to obtain personalized timely information
                            on them prior to sowing season, particularly when farms are
                            located far from research centers.
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">How are we tackling this problem?</div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(2)}
                            />
                        </div>
                        <div className="faq-text">
                            We are building the dotTerra AI. With this, we will assess,
                            monitor, and predict critical farming system resources (soil
                            content, water, weather, etc.) as it operates and advise on
                            measures to solve them before they become a problem to prevent
                            immense losses and poor farming practices. We will also proactively
                            detect important changes in the agro-ecosystems as soon as they
                            occur. All these are done within milliseconds to give farmers a
                            head start in mitigating issues otherwise heavily consequential
                            risks. As a result, the farmer becomes proactive to maximize and
                            optimize yields rather than reactive.
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">
                                What makes dotTerra stand out from other agricultural technology
                                solutions?
                            </div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(3)}
                            />
                        </div>
                        <div className="faq-text">
                            At dotTerra, we offer a comprehensive threefold solution that sets
                            us apart from the competition. We focus on optimizing soil
                            condition, harnessing weather adaptation, and anticipating market
                            demand. By combining these three pillars, we provide farmers with
                            a holistic approach to maximize productivity, profitability, and
                            sustainability.
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">
                                How does dotTerra help improve soil condition?
                            </div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(4)}
                            />
                        </div>
                        <div className="faq-text">
                            dotTerra utilizes advanced soil analytics and state-of-the-art
                            sensors to continuously monitor key soil metrics such as moisture
                            levels, nutrient content, and pH balance. By harnessing this data,
                            farmers can make data-driven decisions about irrigation,
                            fertilization, and crop selection, ultimately unlocking the full
                            potential of their soil and increasing crop yields
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">
                                How does dotTerra help increase sales and profitability
                            </div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(5)}
                            />
                        </div>
                        <div className="faq-text">
                            By leveraging our threefold solution, dotTerra empowers farmers to
                            maximize their financial success. Through optimized soil
                            condition, weather adaptation, and market anticipation, farmers
                            can increase crop yields, minimize risks associated with adverse
                            weather events, and align their offerings with customer demand.
                            This strategic approach leads to increased sales, improved
                            profitability, and long-term growth.
                        </div>
                    </div>

                    <div className="faq-sect">
                        <div className="faq-sect-title">
                            <div className="faq-title">How can I get started with dotTerra?</div>
                            <img
                                src={downarrow}
                                alt="down arrow"
                                className="faq-arrow"
                                onClick={() => showMore(6)}
                            />
                        </div>
                        <div className="faq-text">
                            Simply reach out to our team through the contact form below and
                            we will get back to you with the necessary information and
                            guidance to customize the solution to your specific needs and
                            help you embark on a journey towards sustainable farming
                            practices and increased productivity.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
