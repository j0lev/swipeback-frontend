//Profmain is the main page professor lands on
import { useNavigate } from 'react-router-dom';
import LobbyList from './LobbyList';
import '../App.css';

function ProfMain() {
    const navigate = useNavigate();

    return (
        <div className="page-center-container">
            
            <LobbyList />
            <div style={{
                width: '680px', //this is as big as lobbylist container
                display: 'flex',
                justifyContent: 'flex-start', //this pushes us to the left of that container
                marginTop: '10px'
            }}>
                <button
                    onClick={()=> navigate ('/prof/create')}
                    className='btn-universal'
                >
                    + create lobby
                </button>
            </div>
        </div>
    
    );
}

export default ProfMain;   