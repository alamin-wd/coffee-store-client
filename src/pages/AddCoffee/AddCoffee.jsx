import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";

const AddCoffee = () => {

    return (

        <div>
            <Helmet>
                <title>Add Coffee | Coffee Store</title>
            </Helmet>

            <div className="w-10/12 mx-auto">

                <div className="flex items-center gap-2 my-3 text-[#374151]">
                    <Link to="/">
                        <span><FaArrowLeft /></span>
                    </Link>
                    <Link to="/">
                        <button className="font-medium">Back to Home</button>
                    </Link>
                </div>

                <div className="bg-[#F4F3F0] p-10 mb-10">

                    <div className="w-4/5 mx-auto text-center">
                        <h3 className="text-[#374151] text-2xl font-semibold">Add New Coffee</h3>
                        <p className="text-[#1B1A1AB3] font-medium mt-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution <br /> of letters, as opposed to using Content here.
                        </p>
                    </div>

                    <form
                        className="grid grid-cols-1 md:grid-cols-2 justify-between items-center my-6">

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Chef" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Category</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Category" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Details</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Details" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control mx-5 col-span-2">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter Photo URL" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                    </form>

                    <div className="mx-5">
                        <button
                            className="w-full bg-[#D2B48C] hover:bg-[#E3B577] text-xl font-medium text-[#331A15] px-4 py-2 rounded-lg border-2 border-[#331A15] hover:border-[#331A15]">
                            Add Coffee
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddCoffee;

