// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateDollData = () => {
    const loadedDoll = useLoaderData();
    // const { user } = useContext(AuthContext);
    // const emails = user?.email
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        // const sellerName = form.sellerName.value;
        // const sellerEmail = form.sellerEmail.value;
        // const category = form.category.value;
        const price = form.price.value;
        // const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const picture = form.picture.value;
        const doll = { toyName,  price,  quantity, details, picture }
        console.log(doll);

        fetch(`https://doll-house-server.vercel.app/dollsDetails/${loadedDoll._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert('Update Successfully')
                }
            })

    }
    return (
        <div>
            {/* <h2>update information of {loadedDoll.toyName}</h2> */}
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Update Doll Data</h2>
            <form onSubmit={handleUpdate} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Doll Name</span>
                        </label>
                        <input type="text" name="toyName" 
                        defaultValue={loadedDoll?.toyName}
                        placeholder="doll name" className="input input-bordered" />
                    </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName"
                        defaultValue={loadedDoll?.sellerName} placeholder="seller name" className="input input-bordered" />
                    </div> */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="sellerEmail"
                            defaultValue={emails} placeholder="seller email" className="input input-bordered" />
                    </div> */}
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" 
                        defaultValue={loadedDoll?.price} placeholder="price" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" 
                        defaultValue={loadedDoll?.quantity} placeholder="available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="details"
                        defaultValue={loadedDoll?.details}  placeholder="detail " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture UR</span>
                    </label>
                    <input type="text" name="picture" 
                    defaultValue={loadedDoll?.picture} placeholder="picture URL of the toy" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Confirmed Update</button>
                </div>
            </form>
            


        </div>
    );
};

export default UpdateDollData;