import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, chef, supplier, taste, category, details, price, photoURL } = coffee;

    const handleUpdateCoffee = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;

        const updateCoffee = { name, chef, supplier, taste, category, details, price, photoURL };

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                    })
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (

        <div>
            <Helmet>
                <title>Update Coffee | Coffee Store</title>
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
                        <h3 className="text-[#374151] text-4xl font-semibold">Update Existing Coffee</h3>
                        <p className="text-[#1B1A1AB3] font-medium mt-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution <br /> of letters, as opposed to using Content here.
                        </p>
                    </div>

                    <form onSubmit={handleUpdateCoffee}
                        className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-6">

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Coffee Name"
                                defaultValue={name}
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter Coffee Chef"
                                defaultValue={chef}
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Supplier</span>
                            </label>
                            <input type="text" name="supplier"
                                defaultValue={supplier}
                                placeholder="Enter Coffee Supplier" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Taste</span>
                            </label>
                            <input type="text" name="taste"
                                defaultValue={taste}
                                placeholder="Enter Coffee Taste" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Category</span>
                            </label>
                            <input type="text" name="category"
                                defaultValue={category}
                                placeholder="Enter Coffee Category" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Details</span>
                            </label>
                            <input type="text" name="details"
                                defaultValue={details}
                                placeholder="Enter Coffee Details" className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Price</span>
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter Coffee Price"
                                defaultValue={price}
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="form-control w-11/12 mx-auto">
                            <label className="label">
                                <span className="label-text text-lg text-[#1B1A1ACC] font-semibold">Photo</span>
                            </label>
                            <input
                                type="url"
                                name="photoURL"
                                placeholder="Enter Photo URL"
                                defaultValue={photoURL}
                                className="input input-bordered text-[#1B1A1ACC]" required />
                        </div>

                        <div className="mx-5 mt-8 col-span-2">
                            <input
                                className="w-full bg-[#D2B48C] hover:bg-[#E3B577] text-xl font-medium text-[#331A15] px-4 py-2 rounded-lg border-2 border-[#331A15] hover:border-[#331A15]" type="submit"
                                value="Update Coffee" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default UpdateCoffee;

