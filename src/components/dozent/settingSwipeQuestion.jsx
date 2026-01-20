import Iconselector from "./iconselector"


function SettingSwipeQuestion(props) {
    return (
        <>
            <div className="row">
                <div className="col-9 p-0">
                    <div className="card p-0 w-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <label htmlFor={props.id+"questionname"} className="col-form-label">Question Title</label>
                                </div>
                                <div className="col-5">
                                    <input type="text" className="form-control" id={props.id+"questionname"} name={props.id+"questionname"}/>
                                </div>
                                <div className="col-1">
                                    <label htmlFor={props.id+"qsymbol"} className="col-form-label">Logo</label>
                                </div>
                                <div className="col-3" >
                                    <Iconselector id={props.id+"qsymbol"}></Iconselector>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-3">
                    <button type="button" class="btn btn-outline-primary circle rounded-circle fs-2" onClick={props.onclick}> - </button>
                </div>

            </div>
        </>
    )
}

export default SettingSwipeQuestion