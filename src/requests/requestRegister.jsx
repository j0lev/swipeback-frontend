function RequestRegister(usrname, passwd, fullname, mail, onGetResult) {
    let data = {
        username: usrname,
        email: mail,
        full_name: fullname,
        disabled: false,
        plain_password: passwd
    };
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/users";

    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        // do something to response

        let result = JSON.parse(this.responseText);
        onGetResult(result);

    };
    http.send(JSON.stringify(data));



}


export default RequestRegister;