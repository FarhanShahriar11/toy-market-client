import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from 'sweetalert2';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
   

    // user cannot see the toys other users added. create it by users email
    const url = `https://toy-market-server-rho-ten.vercel.app/allAddToy?seller_email/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [url]);

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            if(result.isConfirmed) {
                fetch(`https://toy-market-server-rho-ten.vercel.app/allAddToy/${id}`, {
                    method: 'DELETE',

                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
                
            }
        })
    }

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-center text-3xl md:text-5xl text-violet-700 font-bold mb-5">My Toys</h2>
            <hr className="w-40 mx-auto border-4 border-violet-600 mb-10" />

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
                            
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((myToy, index) => <MyToysTable
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                index={index}
                            ></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
