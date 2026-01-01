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
                        <input type="checkbox" id="wdmon" name="wdmon" value={"monday"} />
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
                    </div>
                </form>
            </div>
            
        </>

    );

}

export default NewCourse