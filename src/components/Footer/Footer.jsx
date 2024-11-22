// import React from 'react';
import FootLogo from '../../assets/logo-footer.png'

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscription logic here
    };

    return (
        <footer className="bg-gray-900 text-white pt-36 pb-7">
            <div className="container mx-auto px-4">

                <div className="mx-auto text-center pb-8 mt-5">
                   
                    <img src={FootLogo} alt="Cricket Logo" className=" mx-auto mb-7" /> 

                </div>


                <div className="mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We are a passionate team dedicated to providing <br /> the best services to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="list-inside list-[square] space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none"
                                required
                                aria-label="Email address"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-r-lg hover:from-pink-600 hover:to-yellow-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
