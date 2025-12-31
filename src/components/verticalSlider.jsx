import "../styles/fb.page.slider.css";
import { Lightbulb, ThreeDots } from "react-bootstrap-icons";
import { useId } from "react";

function VerticalSlider(params) {
    let barvolume = useId();
    let bar = useId();
    let onClickInformation = ()=>{
        console.log(params.info);
    } 

    let onClickSlide = (event) =>{
        if(!event.target.className.includes("icon-dot-box")){
            let target = document.getElementById(barvolume);
            let percent = Math.round((1-((event.clientY- target.getBoundingClientRect().top)/target.getBoundingClientRect().height))*10)*10;
            document.getElementById(bar).style="height: "+percent+"%; background: "+params.color;
        }
    }

    return (
        <>
            <div className="col d-flex justify-content-center">
                <div className="container">
                    <div className="row h-90 d-flex justify-content-center">
                        <div id={barvolume} className="progress progress-bar-vertical" onClick={onClickSlide}>
                            <div id={bar} onClick={onClickSlide} className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "50%" , background: params.color}}></div>

                            <div  className="icon-dot-box" onClick={onClickInformation}><ThreeDots className="icon-dot"  color="black" size={20}></ThreeDots></div>    
                        </div>
                    </div>
                    <div className="row h-10  d-flex justify-content-center">
                        <div className="icon-box" style={{background: params.color}}>
                            <Lightbulb className="icon" color="black" size={20}></Lightbulb>
                        </div>
                        

                    </div>
                </div>

            </div>
        </>
    );
}

export default VerticalSlider;