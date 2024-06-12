import { Helmet } from "react-helmet-async";
import { FaArrowLeft } from "react-icons/fa";
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

                <div className="bg-[#F4F3F0] p-10">

                    <div className="w-4/5 mx-auto text-center">
                        <h3 className="text-[#374151] text-2xl font-semibold">Add New Coffee</h3>
                        <p className="text-[#1B1A1AB3] font-medium mt-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution <br /> of letters, as opposed to using Content here.
                        </p>
                    </div>

                    <form 
                    className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddCoffee;

