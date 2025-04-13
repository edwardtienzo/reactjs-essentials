export default function Description(props) {
    if(props.value.name == "")
        return <>
            <div id="desc" className="m-5 text-center">PLEASE CHOOSE AN ASSET</div>
            <div id="title-desc" className="m-5 text-center"></div>
        </>
    else
        return <>
            <div id="desc" className="m-5 text-center">{props.value.name}</div>
            <div id="title-desc" className="m-5 text-center">Description below the title.</div>
        </>
}