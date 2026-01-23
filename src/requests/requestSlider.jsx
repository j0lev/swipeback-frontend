
function RequestAddSlider(modulId,user, slidername){
     var http = new XMLHttpRequest();
     let data ={
        text: slidername
     }
     const link = "https://swipeback-backend.onrender.com/modules/" + modulId + "/sliders";
    http.open('POST', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        
    };
    http.send(JSON.stringify(data));
}

function RequestGetSliderByModuleNR(modulId,user, OnLoadData){
     var http = new XMLHttpRequest();
     const link = "https://swipeback-backend.onrender.com/modules/sliders/by_module_id/" + modulId + "";
    http.open('GET', link, true);
    http.setRequestHeader('Authorization', 'bearer ' + user.access_token);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            OnLoadData(JSON.parse(this.response))
        }
    };
    http.send();
}


function RequestGetSliderByJoinCode(joincode, OnLoadData){
     var http = new XMLHttpRequest();
     const link = "https://swipeback-backend.onrender.com/modules/sliders/by_join_code/" + joincode + "";
    http.open('GET', link, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            OnLoadData(JSON.parse(this.response))
        }
    };
    http.send();
}

export{
    RequestAddSlider,
    RequestGetSliderByModuleNR,
    RequestGetSliderByJoinCode
}