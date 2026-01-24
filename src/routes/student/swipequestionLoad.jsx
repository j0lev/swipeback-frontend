import { useParams } from "react-router-dom";
import { RequestLoadQuestionsByJoincode } from "../../requests/requestFeedbackquestion";
import { useEffect, useState } from "react";
import SwipePage from "./SwipePage";

function SwipeQuestionLoad() {
    let [qlist, setQlist] = useState([]);
    /* 
    ["Did you learn something new?",
"Were the topics interesting?",
"Was the pacing rushed?"]
    */
    let [fullList, setFulllist] = useState([])
    let { fbnr } = useParams();
    useEffect(() => {
        let onQuestionsLoad = (results) => {
            let newarr = []
            for(let i =0;i<results.length;i++){
                newarr.push(results[i].text)
            }
            setFulllist([...results])
            setQlist(newarr);
        }
        RequestLoadQuestionsByJoincode(fbnr, onQuestionsLoad)
    }, [])
    if(qlist.length>0){
        return <SwipePage qlist={qlist} fullList={fullList}></SwipePage>
    }else{
        return (
            <>
      <div class="spinner-border mt-5" role="status">
        <span class="sr-only"></span>
      </div>
    </>
        )
    }

}
export default SwipeQuestionLoad