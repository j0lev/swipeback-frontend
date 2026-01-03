
import { useId } from "react";
import { Alarm, Book, Lightbulb } from "react-bootstrap-icons";

function Iconselector(props){

    let buttonid = useId();
    let iconList = [
        <Lightbulb />,
        <Book/>,
        <Alarm/>
    ]
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
    Logo
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