import Select from "./Select";
import PropTypes from 'prop-types';

const Selected = ({ selectedPlayers, setSelectedPlayers, onAddMorePlayers }) => {
    const removePlayer = (playerId) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
    };

    return (
        <div className="w-11/12 mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">Selected Players
                ( <span>
                    {selectedPlayers.length} / 6
                    </span> )
            </h2>
            <div className="space-y-4">
                {selectedPlayers.map(player => (
                    <Select key={player.playerId} player={player} removePlayer={removePlayer} />
                ))}
            </div>

            <div className="mt-6">
                <button 
                    onClick={onAddMorePlayers} 
                    className="py-3 px-6 bg-lime-300 text-gray-900 font-semibold rounded-lg hover:bg-lime-400 transition"
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};



Selected.propTypes = {
    selectedPlayers: PropTypes.func.isRequired, 
    setSelectedPlayers: PropTypes.func.isRequired, 
    onAddMorePlayers: PropTypes.func.isRequired,
};
export default Selected;
