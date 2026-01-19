function RequestCreateTextFeedback(question, joincode, OnLoadData) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/feedback/text/" + joincode + "/";
    let data = {
        content: question,
    }
    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);

            OnLoadData(result);
        }
    };

    http.send(JSON.stringify(data));
}


export {
    RequestCreateTextFeedback
}