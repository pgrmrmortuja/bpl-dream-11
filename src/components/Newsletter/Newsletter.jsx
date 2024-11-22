// import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (

        
        <div className="relative mt-20 -mb-32 max-w-4xl py-16 mx-auto bg-gradient-to-r from-blue-100 via-white to-yellow-100 rounded-lg shadow-xl box">
            
            <div className="container mx-auto px-4 text-center w-full h-full ">
                <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-8">Get the latest updates and news right in your inbox!</p>
                <form className="flex justify-center" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="border w-full md:w-2/3 px-4 py-3 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                        aria-label="Email address"
                    />
                    <button 
                        type="submit"
                        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-r-lg hover:from-pink-600 hover:to-yellow-600"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
