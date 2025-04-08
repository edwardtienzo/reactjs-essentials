export default function Button(props) {
    return <>
        <button className="block bg-lime-400 py-1 px-3 mt-1 mx-auto rounded-md text-xs text-black uppercase hover:bg-lime-600 hover:text-white active:bg-lime-700"
                onClick={props.onSelect} >
            {props.value}
        </button>
    </>
}