

function RequestLogin(username, passwd, onGetResult) {
    let data = new URLSearchParams();
    var http = new XMLHttpRequest();
    data.append('username', username);
    data.append("password", passwd);
    data.append("grant_type", "password");
    data.append("scope", "");
    data.append("client_id", "");
    data.append("client_secret", "");
    const link = "https://swipeback-backend.onrender.com/token";

    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onload = function () {
        // do something to response
        console.log(this.responseText);
        let result = JSON.parse(this.responseText);
        onGetResult(result)
        //onGetResult(result);

    };
    
    console.log(data.toString());
    http.send(data.toString());



}


export default RequestLogin;