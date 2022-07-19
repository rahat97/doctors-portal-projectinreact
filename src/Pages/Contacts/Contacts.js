import React from "react";

const Contacts = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold text-blue-700">Contact Us</h2>

            <div className="text-center">
                <h2 className="text-xl my-5 text-green-500">Drop us a line</h2>

                <h3 className="font-bold">Write to us</h3>
                <input type="text" placeholder="Type here" className="my-5 input input-bordered input-primary w-full max-w-xs" />
                <button className="mx-5 btn btn-success">Send</button>

                <div className="my-10">
                <h4><h3 className="font-bold">Our Email:</h3> info@gmail.com </h4>
                </div>

                <h3 className="font-bold">Head office: </h3>
                <h3>  +88039004330</h3>
                <h3 className="font-bold">Customer care</h3>
                <h3> +44 2039652999</h3>
            </div>


        </div>
    );
};

export default Contacts;