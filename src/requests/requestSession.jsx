function RequestStartSession( modulId, user, OnLoadData) {
    var http = new XMLHttpRequest();
    console.log("requestsend");
    console.log(user);
    const link = "https://swipeback-backend.onrender.com/modules/" + modulId + "/sessions/start";
    http.open('POST', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let result = JSON.parse(this.responseText);
            console.log(result)
            OnLoadData(result);
        }
    };

    http.send();
}

function RequestEndSession( sessionid, user) {
    var http = new XMLHttpRequest();
    if(sessionid==null){
        return;
    }
    const link = "https://swipeback-backend.onrender.com/sessions/" + sessionid + "/end";
    http.open('POST', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
  
    };

    http.send();
}

function RequestSesseionAddSwipeQuestion(sessionid, user, textvalue, OnLoadData){
    var http = new XMLHttpRequest();
    if(sessionid==null){
        return;
    }
    let data ={
        text: textvalue
    }
    const link = "https://swipeback-backend.onrender.com/sessions/" + sessionid + "/questions";
    http.open('POST', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            OnLoadData(JSON.parse(this.response))
        }
  
    };
    http.send(JSON.stringify(data));
}

export {
    RequestStartSession,
    RequestEndSession,
    RequestSesseionAddSwipeQuestion
}