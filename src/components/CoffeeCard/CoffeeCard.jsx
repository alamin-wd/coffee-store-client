import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, chef, price, photoURL } = coffee;

    const handleDelete = _id => {
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        })
        .then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been Deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);

                            setCoffees(remainingCoffees);
                        }
                    })
            }
        });
    }

    return (

        <div>
            <div className="flex justify-between items-center text-left bg-[#F5F4F1] pr-4 rounded-lg">
                <div>
                    <figure>
                        <img className="w-32" src={photoURL} alt="" />
                    </figure>
                </div>

                <div>
                    <h4 className="text-[#1B1A1A] text-lg font-medium">Name:
                        <span className="text-[#5C5B5B] text-sm ms-1">{name}</span>
                    </h4>

                    <h4 className="text-[#1B1A1A] text-lg font-medium">Chef:
                        <span className="text-[#5C5B5B] text-sm ms-1">{chef}</span>
                    </h4>

                    <h4 className="text-[#1B1A1A] text-lg font-medium">Price:
                        <span className="text-[#5C5B5B] text-sm ms-1">{price}</span>
                    </h4>
                </div>

                <div className="space-y-4">

                    <div>
                        <button
                            className="bg-[#D2B48C] text-white text-xl p-2 rounded-md"><IoMdEye /></button>
                    </div>

                    <div>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="bg-[#3C393B] text-white text-xl p-2 rounded-md"><MdEdit /></button>
                        </Link>
                    </div>

                    <div>
                        <button onClick={() => handleDelete(_id)}
                            className="bg-[#EA4744] text-white text-xl p-2 rounded-md"><MdDelete /></button>
                    </div>

                </div>

            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.node,
    coffees: PropTypes.node,
    setCoffees: PropTypes.node,
}

export default CoffeeCard;