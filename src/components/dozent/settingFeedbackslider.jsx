import ColorPicker from "./colorpicker";
import Iconselector from "./iconselector";


function SettingFeedbackSlider(props) {
    return (<>
        <div className="row">
            <div className="col-9 p-0">
                <div className="card p-0 w-100">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor={props.id+"slidername"} className="col-form-label">Slidername</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" id={props.id+"slidername"} name={props.id+"slidername"}/>
                            </div>
                            <div className="col-1">
                                <label htmlFor={props.id+"symbol"} className="col-form-label">Logo</label>
                            </div>
                            <div className="col-2" >
                                <Iconselector id={props.id+"symbol"}></Iconselector>
                               
                            </div>
                            <div className="col-1">
                                <label htmlFor={props.id+"color"} className="col-form-label">Color</label>
                            </div>
                            <div className="col-2">
                                <ColorPicker id={props.id+"color"}></ColorPicker>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">
                <button type="button" class="btn btn-outline-secondary circle rounded-circle fs-2" onClick={props.onclick}> - </button>
            </div>
        </div>
    </>
    );
}

export default SettingFeedbackSlider;