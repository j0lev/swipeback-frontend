//Profmain is the main page professor lands on
import { useNavigate } from 'react-router-dom';
import LobbyList from './LobbyList';

function ProfMain() {
    const navigate = useNavigate();

    return (
        <div>
            
            <LobbyList />
            <div style={{
                
            }}>
                <button
                    onClick={()=> navigate ('prof/create')}
                    style={{
                        marginTop: '10px',
                        marginBottom: '20px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        backgroundColor: '#00357b',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        width: '300px',
                    }}
                >
                    + create lobby

                </button>
            </div>
        </div>
    


    );
}

export default ProfMain;