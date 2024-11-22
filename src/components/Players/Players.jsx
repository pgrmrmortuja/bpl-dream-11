import { useState, useEffect } from "react";
import Player from "./Player";
import { ToastContainer, toast } from 'react-toastify'; 
import PropTypes from 'prop-types';

const Players = ({ selectedPlayers, setSelectedPlayers, coins, setCoins}) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("players.json")
            .then(response => response.json())
            .then(data => setPlayers(data));
    }, []);

    const choosePlayer = (player) => {
        // Check if the user has selected the maximum number of players
        if (selectedPlayers.length >= 6) {
            toast.error("You can only select up to 6 players.");
            return;
        }

        // Check if the player is already selected
        if (selectedPlayers.find(p => p.playerId === player.playerId)) {
            toast.error("Player already selected.");
            return;
        }

        // Check if the user has enough available coins
        if (coins < player.biddingPrice) {
            toast.error("Not enough coins available.");
            return;
        }

        // If all checks pass, select the player and update available coins
        setSelectedPlayers([...selectedPlayers, player]);
        setCoins(coins - player.biddingPrice);
        toast.success(`${player.name} has been added to your team!`);
    };

    return (
        <div className="w-11/12 mx-auto">
            <ToastContainer /> {/* Toast container for notifications */}

            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {players.map(player => (
                    <Player key={player.playerId} player={player} choosePlayer={choosePlayer} />
                ))}
            </div>
        </div>
    );
};




Players.propTypes = {
    selectedPlayers: PropTypes.func.isRequired,
    setSelectedPlayers: PropTypes.func.isRequired,
    coins: PropTypes.func.isRequired,
    setCoins: PropTypes.func.isRequired
};
export default Players;
