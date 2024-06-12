
const Banner = () => {

    return (

        <div>

            <div className="hero min-h-[500px] bg-[url(https://i.ibb.co/PCxsw2t/banner.png)]">

                <div className="w-full flex justify-center items-center">
                    <div className="w-2/5"></div>

                    <div className="w-3/5 mx-20 px-16">
                        <h1 className="mb-5 text-white text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                        <button className="bg-[#E3B577] text-[#242222] font-medium px-5 py-2">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Banner Footer */}
            <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center bg-[#eae5d1] px-24 py-4">
            
                <div>
                    <img className="w-16 mb-2" src="https://i.ibb.co/wYjV5Cr/icon1.png" alt="" />
                    <h4 className="text-[#331A15] text-2xl font-medium mb-2">Awesome Aroma</h4>
                    <p className="text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>

                <div>
                    <img className="w-16 mb-2" src="https://i.ibb.co/XzsfHJJ/icon2.png" alt="" />
                    <h4 className="text-[#331A15] text-2xl font-medium mb-2">High Quality</h4>
                    <p className="text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
                </div>

                <div>
                    <img className="w-16 mb-2" src="https://i.ibb.co/WHFrT0W/icon3.png" alt="" />
                    <h4 className="text-[#331A15] text-2xl font-medium mb-2">Pure Grades</h4>
                    <p className="text-[#1B1A1A]">The coffee is made of the green <br /> coffee beans which you will love</p>
                </div>

                <div>
                    <img className="w-16 mb-2" src="https://i.ibb.co/7R8psd8/icon4.png" alt="" />
                    <h4 className="text-[#331A15] text-2xl font-medium my-2">Proper Roasting</h4>
                    <p className="text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>

            </div>

        </div>
    );
};

export default Banner;