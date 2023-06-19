import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateToys = () => {

    const toy = useLoaderData();
    const { _id, price, quantity, description } = toy;

  

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = { price, quantity, description };


        fetch(`https://toy-market-server-rho-ten.vercel.app/allAddToy/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                Swal.fire(
                    "Success!",
                    "Updated Successfully",
                    "success"
                );
            form.reset();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        })
    }

    return (
        <div className="my-10 w-10/12 mx-auto">
            <div>
                <h2 className="text-center text-3xl md:text-5xl text-violet-700 font-bold mb-5">Update Your Toys</h2>
                <hr className="w-60 mx-auto border-4 border-violet-600 mb-10" />
            </div>

            <div>
                <div className="mt-8">
                    <form onSubmit={handleUpdateToy}>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Price:</p>
                                    </label>

                                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">Available Quantity:</p>
                                    </label>

                                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>
                            </div>

                            <div className="space-y-2 mt-6">
                                <p className="text-left font-semibold">Description</p>
                                <textarea name="description" className="border w-full lg:w-6/12 px-4 py-2 focus:outline-none" defaultValue={description} placeholder="Description" ></textarea> 
                            </div>

                            <div className="text-center">
                                <input className='cursor-pointer mt-8 bg-violet-600 hover:bg-violet-700 py-2 px-10 text-white text-lg font-semibold' type="submit" value="Update Toy" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;