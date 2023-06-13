import React from "react";

const About = () =>{
    return (
        <div className='pt-[40px] pl-[200px]'>
            <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white
                    sm:p-12 md:flex-row md:space-x-6 md:space-y-0 overflow-hidden">
                <div className="flex flex-col space-y-8 justify-between">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">About Us</h1>
                        <p className="pt-2 text-cyan-100 text-xl">
                            <span className="text-[darkturquoise] font-[bold] text-xl"> Shopping App
                            </span><br/>
                            Shopping App is a e-commerce marketpace of accessories. Shopping app is a destination justifies its fashion 
                            relevance by bringing something new and chic to the table on the daily. Fashion trends 
                            seem to change at lightning speed, yet the Shopping App has managed to keep up without any hiccups. 
                            In addition, Shopping App has vowed to serve customers to the best of its ability by introducing its first-ever 
                            loyalty program, The Shopping App Insider. Gain access to priority delivery, early sales, lucrative deals and other 
                            special perks on all your shopping with the Shopping App. Use the Shopping App to experience shopping like never before!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
