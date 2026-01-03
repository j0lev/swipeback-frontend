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

return (
    <div style={{ //here comes the main styling of the Lobbylist
        border: '4px solid #00357b',
        borderRadius: '12px',
        backgroundColor: '#b8b8b8ff',
        padding: '40px',
        width: '600px', 
        }}>
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
    
    </div>
    );
}

export default LobbyList;