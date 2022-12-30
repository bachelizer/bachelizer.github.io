const Card = (props:any) => {
    return (
        <div className={`wd-full md:w-3/6 h-auto bg-indigo-500 my-8 rounded-md shadow-lg ${props.additionalClass}`}>
            { props.children }
        </div>
    )
}

export default Card;