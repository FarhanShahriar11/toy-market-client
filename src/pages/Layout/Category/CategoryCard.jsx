import { Link } from "react-router-dom";

const CategoryCard = ({ singleCat }) => {
    const { _id, img, name, price, rating, category } = singleCat;

    return (
        <div>
            <div className="rounded-lg shadow hover:shadow-xl bg-white" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                <div>
                    <img className="w-96 h-64 rounded-t-lg" src={img} alt="" />
                </div>

                <div className=" p-8 space-y-3">
                    <h2 className="text-lg font-bold">{name}</h2>

                    <p className="text-gray-700">Category: <span className="font-semibold text-lg text-indigo-700">{category}</span></p>

                    <div className="flex flex-col md:flex-row justify-between pb-5">
                        <p className="text-gray-700">Price: <span className="font-semibold text-lg text-fuchsia-700">${price}</span></p>

                        <p className="text-gray-700">Ratings: <span className="font-semibold text-lg text-green-700">{rating}</span></p>
                    </div>


                    <Link className="flex justify-start md:justify-end" to={`/toyDetails/${_id}`}>
                        <button className='bg-violet-600 hover:bg-violet-700 py-2 px-7 text-white text-lg font-semibold'>
                            <h2>View Details</h2>
                        </button>
                    </Link>
                </div>

                
            </div>
        </div>
    );
};

export default CategoryCard;
