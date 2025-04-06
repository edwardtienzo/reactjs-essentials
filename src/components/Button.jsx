export default function Button(props) {
    return(
        <button class="block bg-sky-400 py-1 px-3 mt-1 mx-auto rounded-md text-sm text-black uppercase hover:bg-sky-600 hover:text-white active:bg-sky-700"
                onClick={props.onSelect}
        >
            {props.children}
        </button>
    )
}