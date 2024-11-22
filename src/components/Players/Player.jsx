// import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ player, choosePlayer }) => {
    return (
        <div>


            <div className=" bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden p-5">
                {/* Player Image */}
                <div className="w-full h-60 relative overflow-hidden">
                    <img className="absolute inset-0 w-full  object-cover" src={player.imageLink} alt={player.name} />
                </div>

                {/* Card Body */}
                <div className="p-4">
                    {/* Player Name and Icon */}
                    <div className="flex items-center mb-3">
                        <svg className="w-6 h-6 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0 2c-2.671 0-8 1.337-8 4v2h16v-2c0-2.663-5.329-4-8-4z" />
                        </svg>
                        <h5 className="text-lg font-semibold text-gray-900">{player.name}</h5>
                    </div>

                    {/* Country and Role Button */}
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1 7.5v9h22v-9H1zm22-2v-3h-5v1h-4V2H5v1H1v3h22z" />
                            </svg>
                            <p className="text-gray-700">{player.country}</p>
                        </div>
                        <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">{player.role}</span>
                    </div>

                    {/* Rating and Batting Style */}
                    <div className="flex justify-between text-gray-600 mb-3">
                        <p className="font-bold text-black">Rating</p>
                        <p className="font-medium">{player.battingType}</p>
                    </div>

                    

                    {/* Price and Button */}
                    <div className="flex justify-between items-center">
                        <p className="text-gray-900 font-bold">Price: ${player.biddingPrice.toLocaleString()}</p>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={() => choosePlayer(player)}

                        >
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    choosePlayer: PropTypes.func.isRequired, // New prop for choosing player
};

export default Player;








// import PropTypes from 'prop-types';

// const Player = ({ player, choosePlayer }) => {
//     return (
//         <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden p-5">
//             <div className="w-full h-60 relative overflow-hidden">
//                 <img className="absolute inset-0 w-full object-cover" src={player.imageLink} alt={player.name} />
//             </div>

//             <div className="p-4">
//                 <div className="flex items-center mb-3">
//                     <h5 className="text-lg font-semibold text-gray-900">{player.name}</h5>
//                 </div>
//                 <div className="flex justify-between items-center mb-3">
//                     <p className="text-gray-700">{player.country}</p>
//                     <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">{player.role}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-600 mb-4">
//                     <p className="font-medium">Bidding Price</p>
//                     <p className="font-medium">${player.biddingPrice.toLocaleString()}</p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <button
//                         className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//                         onClick={() => choosePlayer(player)}
//                     >
//                         Choose Player
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// Player.propTypes = {
//     player: PropTypes.object.isRequired,
//     choosePlayer: PropTypes.func.isRequired, // New prop for choosing player
// };

// export default Player;
