

function RequestLogin(username, passwd, onGetResult) {
    let data = new URLSearchParams();
    var http = new XMLHttpRequest();
    if(username==""){
        onGetResult("Please enter a username");
        return
    }
    if(passwd==""){
        onGetResult("Please enter a Password");
        return
    }

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
        let result = JSON.parse(this.responseText);
        onGetResult(result)
        //onGetResult(result);

    };
    
    http.send(data.toString());



}


export default RequestLogin;