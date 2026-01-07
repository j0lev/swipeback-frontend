function QuestionCard({ text }) {
  return (
    <div 
      className="container-box"
      style={{ width: '500px', height: '300px', padding: '20px',}}>
      <div className="container-box" >
        <h2>{text}</h2>
      </div> 
    </div>
  );
}

export default QuestionCard;