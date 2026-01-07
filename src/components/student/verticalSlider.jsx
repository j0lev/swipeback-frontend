import "../../styles/fb_page_slider.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
//import { Alarm, Book, Lightbulb, ThreeDots } from "react-bootstrap-icons";
import { useId } from "react";

function VerticalSlider(props) {
    let barvolume = useId();
    let iconList = [
            <i class="bi bi-lightbulb fs-3"></i>,
            <i class="bi bi-book fs-3"></i>,
            <i class="bi bi-alarm fs-3"></i>
        ]
    let bar = useId();
    let infobox = useId();
    let onClickInformation = (evt)=>{
        
        console.log(evt);
        let element = document.getElementById(infobox);
        if(!element.classList.contains("infobox-visible")){
            evt.stopPropagation();
            if(document.querySelector(".infobox-visible")!=null){
                document.querySelector(".infobox-visible").classList.remove("infobox-visible");
            }
            element.classList.add("infobox-visible");

        }
    } 

    let onClickSlide = (event) =>{
        if(!(event.target.classList.contains("icon-dot-box")||event.target.classList.contains("icon-dot")||event.target.tagName =="path")){
            let target = document.getElementById(barvolume);
            let percent = Math.round((1-((event.clientY- target.getBoundingClientRect().top)/target.getBoundingClientRect().height))*10)*10;
            document.getElementById(bar).style="height: "+percent+"%; background: "+props.color;
        }
    }

    return (
        <>
            <div className="col d-flex justify-content-center">
                <div className="container position-relative">
                    <div className="row h-90 d-flex justify-content-center">
                        <div id={barvolume} className="progress progress-bar-vertical" onClick={onClickSlide}>
                            <div id={bar} onClick={onClickSlide} className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "50%" , background: props.color}}></div>

                            <div  className="icon-dot-box" onClick={onClickInformation}>
                                <i class="bi bi-three-dots fs-3"></i>

                                
                            </div>   
                            
                        </div>
                        <div id={infobox} className="infobox">{props.info}</div> 
                    </div>
                    <div className="row h-10  d-flex justify-content-center">
                        <div className="icon-box" style={{background: props.color}}>
                            {iconList[ props.iconnum]}
                        </div>
                        

                    </div>
                </div>

            </div>
        </>
    );
}

export default VerticalSlider;