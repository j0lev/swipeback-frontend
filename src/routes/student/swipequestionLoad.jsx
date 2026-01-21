import { useParams } from "react-router-dom";
import { RequestLoadQuestionsByJoincode } from "../../requests/requestFeedbackquestion";
import { useEffect, useState } from "react";
import SwipePage from "./SwipePage";

function SwipeQuestionLoad() {
    let [qlist, setQlist] = useState([]);
    let { fbnr } = useParams();
    useEffect(() => {
        let onQuestionsLoad = (results) => {
            let newarr = []
            for(let i =0;i<results.length;i++){
                newarr.push(results[i].text)
            }
            setQlist(newarr);
        }
        RequestLoadQuestionsByJoincode(fbnr, onQuestionsLoad)
    }, [])
    if(qlist.length>0){
        return <SwipePage qlist={qlist}></SwipePage>
    }else{
        return (
            <>
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </>
        )
    }

}
export default SwipeQuestionLoad