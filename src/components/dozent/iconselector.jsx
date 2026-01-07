
import { useId } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
//import { Alarm, Book, Lightbulb } from "react-bootstrap-icons";

function Iconselector(props){
    let iconList = [
        <i class="bi bi-lightbulb"></i>,
        <i class="bi bi-book"></i>,
        <i class="bi bi-alarm"></i>
    ]
    let defaulttext = "Logo";
    if(props.selected !=null){
        defaulttext = iconList [props.selected];
    }
    let buttonid = useId();
    let onClickDropdown = (evt) =>{
        let target = evt.target;
        console.log(target.tagName);
        while(target.tagName!="A"){
            target=target.parentNode;
        }
        console.log(target)
        //evt.preventDefault();
        document.getElementById(buttonid).innerHTML = target.innerHTML;
    }

    return (
        <>
        <div class="btn-group">
  <button type="button" class="btn dropdown-toggle"  id={buttonid} data-bs-toggle="dropdown" aria-expanded="false">
    {defaulttext}
  </button>
  <ul class="dropdown-menu">
    {iconList.map(icon => {
        return (<li><a class="dropdown-item" onClick={onClickDropdown} href="#">{icon}</a></li>)
    })}
  </ul>
</div>
        
        </>
    );
}

export default Iconselector