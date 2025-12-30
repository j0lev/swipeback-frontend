function QuestionCard({ text }) {
  return (
    <div style={{ width: '500px', height: '300px', padding: '20px', border: '10px solid #00357b', }}>
      <div style = {{color: '#00357b'}} >
        <h2>{text}</h2>
      </div> 
    </div>
  );
}

export default QuestionCard;