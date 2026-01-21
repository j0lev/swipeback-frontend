
function RequestLoadQuestionsBySessionid(user , sessioncode, onDataLoad){
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/sessions/"+sessioncode+"/questions";
  
    http.open('GET', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        onDataLoad(result);
        
    };

    http.send();
}

function RequestLoadQuestionsByJoincode( joincode, onDataLoad){
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/sessions/questions/by_join_code/"+joincode+"/questions";
  
    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        let result = JSON.parse(this.responseText);
            onDataLoad(result);
    };

    http.send();
}

function RequestAnswerQuestion(question_id, answer, joincode ) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/feedback/text/"+joincode+"/";
    let data = {
        question_id: question_id,
        answer: answer
    }
    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
    };

    http.send(JSON.stringify(data));
}

function RequestCreateQuestion(questiontext, user , sessioncode){
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/sessions"+sessioncode+"/questions";
    let data = {
        text: questiontext,
    }
    http.open('POST', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
    };

    http.send(JSON.stringify(data));
}


export {
    RequestLoadQuestionsBySessionid,
    RequestAnswerQuestion,
    RequestCreateQuestion,
    RequestLoadQuestionsByJoincode
}