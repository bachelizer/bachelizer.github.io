const SubCard = (props: any) => {
    return (
        <div id="experience" className="bg-indigo-300 rounded-md shadow-lg">
            <div className="grid p-4 mt-4">
                { props.children }
            </div>
        </div>
    );
};

export default SubCard;
