const ProgressBar = ({value}) =>{
    return(
        <progress className="progressbar" value={value} max="100"></progress>
    )
}

export default ProgressBar;