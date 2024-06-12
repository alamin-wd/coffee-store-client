import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="max-w-full">
            <Helmet>
                <title>Home | Coffee Store</title>
            </Helmet>

            <Banner></Banner>

            {/* Products Section */}
            <div className="w-10/12 mx-auto my-10 text-center">
                <div>
                    <p className="text-[#1B1A1A] font-medium"><small>--- Sip & Savor ---</small></p>
                    <h3 className="text-[#331A15] text-3xl md:text-5xl font-semibold">Our Popular Products</h3>

                    <Link to="/addCoffee">
                        <button
                            className="bg-[#E3B577] btn hover:bg-[#e2a14c] text-xl font-medium text-white mt-4 px-4 py-2 rounded-lg border-2 border-[#331A15] hover:border-[#331A15]">
                            Add Coffee <span className="text-2xl text-[#331A15] mt-1"><TiCoffee /></span>
                        </button>
                    </Link>

                </div>

            </div>

            {/* Gallery Section */}
            <div className="w-10/12 mx-auto my-10 text-center">
                <div>
                    <p className="text-[#1B1A1A] font-medium"><small>--- Follow Us Now ---</small></p>
                    <h3 className="text-[#331A15] text-3xl md:text-5xl font-semibold">Follow on Instagram</h3>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="https://i.ibb.co/NFprq7z/1.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/bJxKtQ7/2.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/ZhVmWw0/3.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/J5pFqgt/4.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/DYVLTjf/5.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/bKkhMYz/6.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/VWLLs96/7.png" alt="Instagram post photo" />
                    <img src="https://i.ibb.co/f8R7WrK/8.png" alt="Instagram post photo" />
                </div>

            </div>

        </div>
    );
};

export default Home;

