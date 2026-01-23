

function LectureQuestion(props){
    return <>
    <div className='card mb-4  p-0'>
            <div className='card-body'>
              <p class="card-text">{props.children}</p>
              <p className="card-text">Approval: {props.yes_count}</p>
              <p className="card-text">disapproval: {props.no_count}</p>
            </div>
        </div>
    </>
}

export default LectureQuestion