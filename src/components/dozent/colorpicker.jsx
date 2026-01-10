import { useId } from "react";



function ColorPicker(props){
    let iconList = [
          <i style={{color:"red"}} class="bi bi-square-fill"></i>,
          <i style={{color:"blue"}} class="bi bi-square-fill"></i>,
          <i style={{color:"green"}} class="bi bi-square-fill"></i>,
          <i style={{color:"lightgreen"}} class="bi bi-square-fill"></i>,
          <i style={{color:"yellow"}} class="bi bi-square-fill"></i>,
          <i style={{color:"orange"}} class="bi bi-square-fill"></i>,
          <i style={{color:"lightblue"}} class="bi bi-square-fill"></i>,
        ]
        let defaulttext = iconList[0]; 
        if (props.selected != null) {
            defaulttext = iconList[props.selected];
        }
        let buttonid = useId();
        let onClickDropdown = (evt) => {
            let target = evt.target;
            console.log(target.tagName);
            while (target.tagName != "A") {
                target = target.parentNode;
            }
            console.log(target)
            //evt.preventDefault();
            document.getElementById(buttonid).innerHTML = target.innerHTML;
        }
    
        return (
            <>
                <div class="btn-group">
                    <button type="button" class="btn border dropdown-toggle" id={buttonid} data-bs-toggle="dropdown" aria-expanded="false">
                        {defaulttext}
                    </button>
                    <ul class="dropdown-menu" style={{"--bs-dropdown-min-width": "50px"}}>
                        {iconList.map(icon => {
                            return (<li><a class="dropdown-item" onClick={onClickDropdown}>{icon}</a></li>)
                        })}
                    </ul>
                </div>
    
            </>
        );
}


export default ColorPicker