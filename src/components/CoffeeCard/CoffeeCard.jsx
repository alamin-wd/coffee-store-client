import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee }) => {

    const { name, chef, price, photoURL } = coffee;

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
                        <button
                            className="bg-[#3C393B] text-white text-xl p-2 rounded-md"><MdEdit /></button>
                    </div>

                    <div>
                        <button
                            className="bg-[#EA4744] text-white text-xl p-2 rounded-md"><MdDelete /></button>
                    </div>

                </div>

            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.node,
}

export default CoffeeCard;