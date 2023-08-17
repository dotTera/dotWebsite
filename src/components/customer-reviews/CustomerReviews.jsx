import "./customer-reviews.scss"

export default function  CustomerReviews(){
    return(
        <>
        <div class="slider-2 w-full py-2">
            <div class="coverflow-slider flex justify-around items-center relative">
                <div class="coverflow-slider-left flex flex-col justify-center items-end h-full">
                    <h1 class=" w-1/2">What our farmers<br><span>think.</span></h1>

                    <div class="coverflow-slider-slide-controls w-1/2 flex gap-1">
                        <button class="swiper-button-prev " href="#"><i class="fas fa-arrow-left font-900"></i></button>
                        <button class="swiper-button-next " href="#"><i class="fas fa-arrow-right font-900"></i></button>
                    </div>

                </div>

                <div class="coverflow-slider-right text-black flex flex-col justify-center h-full pl-2">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">

                                <div class="coverflow-slider-card rounded-md flex flex-col justify-between p-1 bg-white">

                                    <p>
                                        <span class="quotation-mark">&#8220;</span><br>I believe that dotTerra will revolutionize my farming practices. With access to real-time data on soil and weather conditions, I anticipate significant improvements in my crop yields and overall farming efficiency.</p>

                                    <div>
                                        <h3 class="text-green">Kofi Adjei</h3>
                                        <span>Farmer,Egypt</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">


                                <div class="coverflow-slider-card rounded-md flex flex-col justify-between p-1 bg-white">
                                    <p><span class="quotation-mark">&#8220;</span><br>I'm excited about the potential of dotTerra to empower me with data-driven insights. I believe this will help me adapt to climate change and improve the resilience of my farming operations.</p>

                                    <div>
                                        <h3 class="text-green">Mussie Teferi</h3>
                                        <span>Agriculture Expert,Mauritius</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">


                                <div class="coverflow-slider-card rounded-md flex flex-col justify-between p-1 bg-white">
                                    <p><span class="quotation-mark">&#8220;</span><br>I'm looking forward to how dotTerra will help me align my crop selection with market demands. I expect this will boost my profitability while also promoting sustainable farming practices.</p>

                                    <div>
                                        <h3 class="text-green">Emmanuel Okorwoit</h3>
                                        <span>Farmer,Ethiopia</span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">





                            </blockquote>


                        </div>
                    </div>


                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination2"></div>
            </div>

        </div>
        </div>
</div>
        </>
    )
}


