

function RequestModuleList(setData, user) {
    var http = new XMLHttpRequest();
    let data = {
  id: 0,
  module_id: 0,
  start_time: "2026-01-18T20:16:13.306Z",
  end_time: "2026-01-18T20:16:13.306Z",
  join_code: "string",
  is_active: true
}
    const link = "https://swipeback-backend.onrender.com/modules/?"+encodeURI(JSON.stringify(data));

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
    
    console.log(data);
    http.send(JSON.stringify(data));
}

export {
    RequestModuleList
}