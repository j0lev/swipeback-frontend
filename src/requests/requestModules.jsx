

function RequestModuleList(setData, user) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/";

    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        if (result.title != null) {
            setData({
                notLoaded: false,
                moduleList: result
            })
        }
    };

    http.send(JSON.stringify({
  session: 0,
  user: user.username
}));
}

export {
    RequestModuleList
}