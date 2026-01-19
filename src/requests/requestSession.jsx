function RequestStartSession( modulId, OnLoadData) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/module/" + modulId + "/session/start";
    http.open('POST', link, true);
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


export {
    RequestStartSession
}