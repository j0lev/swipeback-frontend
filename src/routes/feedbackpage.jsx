import { useParams } from 'react-router-dom'
import JsonData from "../../testfiles/test-feedback.json"
import Headline from '../components/headline';

function Feedback() {
    let { fbnr } = useParams();
    console.log(JsonData.dozent);

  return (
    <>
      <Headline>Feedback for: {JsonData.topic} taught by {JsonData.dozent.titel} {JsonData.dozent.vorname} {JsonData.dozent.name}</Headline>
    </>
  )
}

export default Feedback
