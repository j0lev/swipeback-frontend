import "../styles/fb_page_slider.css";
import { Lightbulb, ThreeDots } from "react-bootstrap-icons";
import { useId } from "react";

function VerticalSlider(props) {
    let barvolume = useId();
    let bar = useId();
    let infobox = useId();
    let onClickInformation = ()=>{
        let element = document.getElementById(infobox);
        if(!element.classList.contains("infobox-visible")){
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
                                <ThreeDots className="icon-dot"  color="black" size={20}></ThreeDots>
                                
                            </div>   
                            
                        </div>
                        <div id={infobox} className="infobox">{props.info}</div> 
                    </div>
                    <div className="row h-10  d-flex justify-content-center">
                        <div className="icon-box" style={{background: props.color}}>
                            <Lightbulb className="icon" color="black" size={20}></Lightbulb>
                        </div>
                        

                    </div>
                </div>

            </div>
        </>
    );
}

export default VerticalSlider;