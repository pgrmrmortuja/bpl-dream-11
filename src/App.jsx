import { useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';
// Import Toastify CSS
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
    const [coins, setCoins] = useState(0);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [view, setView] = useState('available');

    const handleClaimCoins = () => {
        setCoins(coins + 60000000);
    };

    const handleAddMorePlayers = () => {
        setView('available'); 
    };

    return (
        <div className="app">
            <Header coins={coins} />
            <Banner onClaimCoins={handleClaimCoins} />

            {/* View Toggle Buttons */}
            <div className="w-11/12 mx-auto flex justify-between items-center mb-7">

                <div className="">
                    <h1 className="text-2xl font-bold">Available Players</h1>
                </div>

                <div>

                    <button
                        onClick={() => setView('available')}
                        className={`py-2 px-4 rounded ${view === 'available' ? 'bg-blue-500 text-white ' : 'bg-gray-200 '}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setView('selected')}
                        className={`py-2 px-4 rounded ${view === 'selected' ? 'bg-blue-500 text-white ' : 'bg-gray-200 '}`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>

                </div>

            </div>

            {/* Conditional Rendering based on Selected View */}
            {view === 'available' && (
                <Players
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coins={coins}
                    setCoins={setCoins}
                />
            )}
            {view === 'selected' && (
                <Selected
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    onAddMorePlayers={handleAddMorePlayers} // Pass the handler
                />
            )}

            <Newsletter></Newsletter>

            <Footer></Footer>





        </div>
    );
};

export default App;
