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
    <div className="container-box"
    
        style={{ //here comes the main styling of the Lobbylist
        
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
            /** added to handle the trash bin and settings */
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            }}
            onClick={() => handleLobbyClick(lobby.id)}
        >
            {/* 1. The Name (left side) */}
            <span style={{ fontWeight: 'bold', flex: 1 }}>
                {lobby.name}
            </span>

            {/* 2. The Buttons (right side) */}
            <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                className="btn-universal" 
                onClick={(e) => {
                    e.stopPropagation(); // so that u dont click the lobby
                    console.log("Settings for", lobby.id);
                }}
                >
                ⚙️
                </button>
                <button 
                className="btn-universal" 
                onClick={(e) => {
                    e.stopPropagation(); // so that u dont click the lobby
                    setLobbies(lobbies.filter(l => l.id !== lobby.id));
                }}
                >
                🗑️
                </button>
            </div>
        </li>
        ))}
    </ul>
    </div>
    );
}

export default LobbyList;