import { Content } from "./interface/IContent"

const HeadTitle = (props: Content) => {
    return (
        <h1 className="text-center text-3xl text-gray-800 font-mono font-bold my-5">
            { props.title }
        </h1>
    );
};

export default HeadTitle;
