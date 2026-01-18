

function RequestModuleList(setData, user) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/";

    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        if (result.detail == null) {
            setData({
                notLoaded: false,
                moduleList: result
            })
        }
    };

    http.send();
}

function RequestModule(user, id, OnLoadData) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/"+id;

    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        if (result.title != null) {
            OnLoadData(result);
        }
        
    };

    http.send();
}

function RequestCreateModule(title, description, user, OnLoadData) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/";
    let data = {
        title: title,
        description: description
    }
    http.open('POST', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        if (result.title != null) {
            OnLoadData(result);
        }
    };

    http.send(JSON.stringify(data));
}

function RequestUpdateModule(title, id, user, OnLoadData) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/"+id;
    let data = {
        title: title,
    }
    http.open('PATCH', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        let result = JSON.parse(this.responseText);
        if (result.title != null) {
            OnLoadData(result);
        }
    };

    http.send(JSON.stringify(data));
}

function RequestDeleteModule(id, user, onSuccess) {
    var http = new XMLHttpRequest();
    const link = "https://swipeback-backend.onrender.com/modules/"+id;
    http.open('DELETE', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.onload = function () {
        if (this.readyState == 4 && this.status == 204) {
            onSuccess();
        }
    };

    http.send();
}

export {
    RequestModuleList,
    RequestModule,
    RequestCreateModule,
    RequestUpdateModule,
    RequestDeleteModule
}