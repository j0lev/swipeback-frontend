function RequestUserInformation(user,setUser){
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/users/me/";

    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        console.log(this.responseText);
    };

    http.send();
}

export default RequestUserInformation