import "../styles/title.css"


function Headline(props){
    return (<>
        <h1 className="headline">{props.children}</h1>
    </>)
}

export default Headline