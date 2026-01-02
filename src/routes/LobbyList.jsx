import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LobbyList() {
const navigate = useNavigate();

// Placeholder lobbies
const [lobbies, setLobbies] = useState([
    { id: '1', name: 'Lecture 1' },
    { id: '2', name: 'Lecture 2' },
    { id: '3', name: 'Workshop' },
]);

const handleLobbyClick = (lobbyId) => {
    // Navigate to Feedback/Swipe page for that lobby
    navigate(`/lobby/${lobbyId}`);
};

const handleCreateLobby = () => {
    // Navigate to lobby creation page or open modal
    navigate('/create-lobby');
};

return (
    <div style={{ padding: '40px' }}>
    <h2>Your Lobbies</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
        {lobbies.map((lobby) => (
        <li
            key={lobby.id}
            style={{
            padding: '15px',
            margin: '10px 0',
            border: '2px solid #00357b',
            borderRadius: '10px',
            cursor: 'pointer',
            }}
            onClick={() => handleLobbyClick(lobby.id)}
        >
            {lobby.name}
        </li>
        ))}
    </ul>
    <button
        style={{
        padding: '10px 20px',
        borderRadius: '8px',
        backgroundColor: '#00357b',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        }}
        onClick={handleCreateLobby}
    >
        + Create Lobby
    </button>
    </div>
    );
}

export default LobbyList;