import PropTypes from 'prop-types';
import Delete from '../../assets/delete.png'

const Select = ({ player, removePlayer }) => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg border shadow">
            <div className="flex items-center">
                <img className="w-12 h-12 bg-gray-200 rounded-full mr-4" src={player.imageLink} alt={player.name} />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
                    <p className="text-gray-600">{player.role}</p>
                </div>
            </div>
            <button className="text-red-500 hover:text-red-600" onClick={() => removePlayer(player.playerId)}>
                <span>
                    <img src={Delete} alt="" />
                </span>
            </button>
        </div>
    );
};




Select.propTypes = { 
    player:  PropTypes.func.isRequired,
    removePlayer:  PropTypes.func.isRequired,
};

export default Select;
