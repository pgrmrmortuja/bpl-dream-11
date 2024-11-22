import './Banner.css'
import cricketLogo from '../../assets/banner-main.png';


import PropTypes from 'prop-types';

const Banner = ({ onClaimCoins }) => {
    return (

        <div className='w-11/12 mx-auto mb-11'>

            <div className="banner-background text-white  py-12 px-8 flex flex-col items-center text-center">
                <img src={cricketLogo} alt="Cricket Logo" className="mb-6" />
                <h1 className="text-3xl font-bold mb-2">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-lg mb-4">Beyond Boundaries Beyond Limits</p>

                <div className='p-2'>

                    <div className='border p-2 rounded-2xl'>
                        <button
                            onClick={onClaimCoins}
                            className="glow-button text-lg font-semibold text-black  rounded-full hover:bg-yellow-500 transition duration-300 bg-gradient-to-r from-pink-500  to-yellow-400"
                        >
                            Claim Free Credit
                        </button>
                    </div>

                </div>

            </div>


        </div>

    );
};


Banner.propTypes = {
    onClaimCoins: PropTypes.object.isRequired,
};
export default Banner;

