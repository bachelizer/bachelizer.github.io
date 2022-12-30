import { Content } from './interface/IContent';

const SubHeadTitle = (props: Content) => {
    return (
        <h3 className="text-center text-xl text-gray-800 font-mono my-5">
            { props.title }
        </h3>
    );
};

export default SubHeadTitle;
