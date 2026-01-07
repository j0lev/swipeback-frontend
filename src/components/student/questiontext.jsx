

function Questiontext(props){
    let date = new Date(props.time);

    return <>
        <div className='card mb-4  p-0'>
            <div className='card-body'>
              <p class="card-text">{props.children}</p>
              <p class="card-text text-end"><small class="text-muted">Sent: {date.toLocaleString('de-DE', { hour: 'numeric', minute: 'numeric'})}</small></p>
            </div>
        </div>
    </>
}

export default Questiontext;