import { Link } from "react-router-dom";


const ToysTable = ({ singleAllToy, index }) => {

    const { _id, img, seller_name, name, category, price, quantity } = singleAllToy;

    return (
        <>
            <tr data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                <td>{index + 1}</td>

                <td>
                    <div className="avatar">
                        <div className="w-20 h-20 rounded">
                            <img src={img} className="w-full" />
                        </div>
                    </div>
                </td>
                
                <td>{seller_name}</td>
                <td><p>{name}</p></td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>

                <td>
                    <Link to={`/toyDetails/${_id}`}>
                        <button className="bg-violet-600 px-4 py-1 rounded text-white">Details</button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default ToysTable;