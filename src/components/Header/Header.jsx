// import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png'
import currency from '../../assets/Currency.png'

const Header = ({ coins }) => {
    return (
        <div>
            <header className="">
                <div className="w-11/12 mx-auto px-4 py-4 flex justify-between items-center mt-5 mb-5">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Cricket Logo" className="" /> {/* Replace with actual logo path */}
                    </div>

                    <div className="flex items-center space-x-8">
                        {/* Navigation Links */}
                        <nav className="hidden md:flex space-x-8 text-lg ">
                            <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-gray-300">Home</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-gray-300">Fixture</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-gray-300">Teams</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hover:bg-gray-300">Schedules</a>
                        </nav>

                        {/* Coin Button */}
                        <div className="hidden md:block">
                            <button className="flex items-center px-4 py-2 border rounded-full text-gray-800 border-gray-300 hover:bg-gray-100 font-bold">
                                <span className="mr-1">{coins}</span>
                                <span>Coin</span>
                                <span className="ml-2">
                                    <img src={currency} alt="" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button id="menu-btn" className="text-gray-600 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <nav id="mobile-menu" className="md:hidden hidden px-4 pb-4">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Fixture</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Teams</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Schedules</a>
                    <button className="mt-2 w-full flex justify-center items-center px-4 py-2 border rounded-full text-gray-800 border-gray-300 hover:bg-gray-100">
                        <span>{coins} Coin</span>
                        <span className="ml-2">🪙</span>
                    </button>
                </nav>
            </header>
        </div>
    );
};


Header.propTypes = {
    coins: PropTypes.object.isRequired,
};
export default Header;

