import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";




const ToyDetails = () => {

    const toy = useLoaderData();
   

    const { img, name, seller_name, seller_email, price, rating, category, description, quantity } = toy;

    return (
        <div>
            <div className="w-10/12 mx-auto my-16 fontStyle">
                <h3 className="text-2xl">Category: <span className="font-bold text-purple-700">{category}</span></h3>

                <div className="mt-10">
                    <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        <div className='w-full md:w-6/12 border-0 md:border-r-2'>
                            <div className="" data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <img className="w-9/12 mx-auto border p-6 md:p-10" src={img} alt="" />
                            </div>
                        </div>

                        <div className='w-full md:w-5/12 space-y-3 mt-6 md:mt-0' data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                            <h2 className='text-2xl md:text-3xl mb-6 font-bold capitalize'>{name}</h2>

                            <div className="space-y-2 font-semibold">

                                <p>Seller Name: <span className="text-orange-600">{seller_name}</span></p>
                                <p>Seller Email: <span  className="text-blue-700 hover:underline">{seller_email}</span></p>

                                <p>Price: <span className="text-violet-700 font-bold text-xl">${price}</span></p>

                                <p className="flex items-center space-x-2">Rating: 
                                    <span className="text-violet-700 ml-2 font-bold text-xl">{rating} </span>
                                    <FaStar className="text-yellow-500"></FaStar>
                                </p>

                                <p>Quantity: <span className="text-violet-700 font-bold text-xl">{quantity}</span></p>

                                <p className="">Description:<small className="font-normal text-gray-500"> {description}</small></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;