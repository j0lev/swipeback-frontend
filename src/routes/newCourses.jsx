function NewCourse(){


    return(
        <>
            <h3>Add New Course</h3>
            <div>
                <form action="/hiermus die anfrageseite stehen" method="post">
                    <label htmlFor="cname">Cours Name</label>
                    <input type="text" id="cname" name="cname" placeholder="Enter Cours Name"/>
                    <div>
                        <label htmlFor="stdate">Start Date</label>
                        <input type="date" id="stdate" name="stdate"/>
                        <label htmlFor="enddate">End Date</label>
                        <input type="date" id="enddate" name="enddate"/>

                    </div>
                    <div>
                        <h4>Choose Weekdays</h4>
                        <input type="checkbox" id="wdmon" name="wdmon" value={"monday"} selected/>
                        <label htmlFor="wdmon">Monady</label>
                        <input type="checkbox" id="wdtue" name="wdtue" value={"tuesday"} />
                        <label htmlFor="wdtue">Tuesday</label>
                        <input type="checkbox" id="wdwnd" name="wdwnd" value={"wendsday"} />
                        <label htmlFor="wdwnd">Wendsday</label>
                        <input type="checkbox" id="wdthr" name="wdthr" value={"thirsday"} />
                        <label htmlFor="wdthr">Thirsday</label>
                        <input type="checkbox" id="wdfri" name="wdfri" value={"friday"} />
                        <label htmlFor="wdfri">Friday</label>
                        <input type="checkbox" id="wdsat" name="wdsat" value={"saturday"} />
                        <label htmlFor="wdsat">Saturday</label>
                        <input type="checkbox" id="wdsun" name="wdsun" value={"sunday"} />
                        <label htmlFor="wdsun">Sunday</label>
                        <div>
                            <label htmlFor="sttime">Satrt time</label>
                            <input type="time" id="sttime" name="sttime"/>
                            <label htmlFor="endtime">End time</label>
                            <input type="time" id="endtime" name="endtime"/>
                        </div>
                    </div>
                    <div>
                        <h4>Frequence</h4>
                        <input type="checkbox" id="Onetime" name="Onetime" value={"Onetime"} />
                        <label htmlFor="Onetime">One Time</label>
                        <input type="checkbox" id="wkly" name="wkly" value={"wkly"} selected/>
                        <label htmlFor="wkly">Weekly</label>
                        
                        <input type="checkbox" id="bwklyodd" name="bwklyodd" value={"bwklyodd"} />
                        <label htmlFor="bwklyodd">biweekly (ood weeks)</label>
                        <input type="checkbox" id="bwklyeven" name="bwklyeven" value={"bwklyeven"} />
                        <label htmlFor="bwklyeven">biweekly (even Weeks)</label>
                        <input type="checkbox" id="mnthly" name="mnthly" value={"mnthly"} />
                        <label htmlFor="mnthly">monthly</label>
                        

                    </div>

                    <div>
                        <h4>Feedback slider</h4>
                        <label htmlFor="slidername">slidername</label>
                        <input type="text" id="slidername" name="slidername" value={"slidername"} />
                        <select name="symbol" id="symbol">
                            <option value={""}>Select symbol</option>
                            <option value={"bulb"}>bulb</option>
                            <option value={"book"}>book</option>
                            <option value={"lins"}>linse</option>
                        </select>
                        <input type="color" id="color" name="color" value={"color"}/>

                    </div>
                   
                </form>
            </div>
            
        </>

    );

}

export default NewCourse