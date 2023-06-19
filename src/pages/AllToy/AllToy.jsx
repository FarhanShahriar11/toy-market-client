import { useEffect, useState } from "react";
import ToysTable from "./ToysTable";


const AllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [search, setSearch] = useState("");
    

    // find all toys by tabular form
    useEffect(() => {
        fetch("https://toy-market-server-rho-ten.vercel.app/allToys")
            .then((res) => res.json())
            .then((data) => setAllToy(data));
    }, []);

    //searching 
    const handleSearch = () => {
        fetch(`https://toy-market-server-rho-ten.vercel.app/allAddToys/${search}`)
        .then(res => res.json())
        .then(data => setAllToy(data))
    }

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-center text-3xl md:text-5xl text-violet-700 font-bold mb-5">All Toys</h2>
            <hr className="w-32 mx-auto border-4 border-violet-600 mb-10" />

            <div className="my-10 w-96 mx-auto">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className="px-4 py-2 focus:outline-none border border-gray-600 rounded" />{" "}

                <button className='cursor-pointer bg-violet-600 hover:bg-violet-700 py-2 rounded px-7 text-white text-lg font-semibold'onClick={handleSearch}>Search</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allToy.map((singleAllToy, index) => <ToysTable
                                key={singleAllToy._id}
                                singleAllToy={singleAllToy}
                                index={index}
                            ></ToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;
