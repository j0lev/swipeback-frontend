

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
  id: 0,
  module_id: 0,
  start_time: "2026-01-18T16:32:19.475Z",
  end_time: "2026-01-18T16:32:19.475Z",
  join_code: "string",
  is_active: true
}));
}

export {
    RequestModuleList
}