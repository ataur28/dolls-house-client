import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const DollDetails = () => {
    const { subDollsId } = useParams();
    // console.log(subDollsId);
    const [detail, setDetails] = useState(useLoaderData());
    // console.log(details);

    const doll = detail.find((doll) => doll._id == subDollsId)
    // console.log(doll);

    const { picture, toyName, sellerName, sellerEmail, price, rating, quantity, details } = doll;

    return (
        <div className="mb-10">
            <h2 className="text-4xl font-bold mt-8 mb-8 text-center text-gray-600">Details</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toyName}</h2>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller Email: {sellerEmail}</p>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description: {details}</p>
                    <div className="card-actions justify-end">
                        <Link to='/'><button className="btn btn-primary">Go to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DollDetails;