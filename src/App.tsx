import './App.css';
import Card from './components/card/Card';
import HeadTitle from './components/head-title/HeadTitle';
import SubHeadTitle from './components/head-title/SubHeadTitle';
import SubCard from './components/card/SubCard';

function App() {
    return (
        <div className="bg-indigo-600 max-h-full pb-10">
            <div className="grid justify-items-center">
                <Card>
                    <div className="md:flex grid">
                        <div className="md:w-3/6 align-middle">
                            <img
                                className="w-1/2 md:w-auto  md:rounded-l-md rounded-full mx-auto md:mt-0 mt-5 shadow-xl
                            "
                                src="images/my_picture.jpg"
                                alt="profile_image"
                            />
                        </div>

                        <div className="grid">
                            <div className="px-8 pt-11 pb-3">
                                <h2 className="text-white text-4xl font-semibold font-[Roboto]">
                                    Hi! I'm Elizer A. Bachanicha Jr
                                </h2>
                                <h4 className="my-2 text-gray-800 font-semibold text-2xl">
                                    Full-Stack Web Developer and Enthusiast
                                </h4>
                                <div className="flex">
                                    <a
                                        href="https://www.linkedin.com/in/elizer-bachanicha-050027224/"
                                        target="_blank"
                                        className="bg-white rounded-md mx-2"
                                    >
                                        <img
                                            className="h-8 w-auto"
                                            src="images/linkin.png"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/bachelizer"
                                        target="_blank"
                                        className="bg-white rounded-full mx-2"
                                    >
                                        <img
                                            className="h-8 w-auto"
                                            src="images/tech1/github.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <p className="text-gray-800 text-lg">
                                    I have more than two years of experience
                                    developing web applications. Mainly using
                                    .Net Core as Back-end, Vue 2+ for front-end
                                    and MySql for data storage. Have a teachable
                                    spirit and always open to learn new things
                                    especially on development standard.
                                    <br />
                                    <br />
                                    "Stay hungry. Stay foolish. Never let go of
                                    your appetite to go after new ideas, new
                                    experience, and new adventures", a quote
                                    from Steve Jobs that I admire.
                                </p>
                            </div>
                            <div className="text-center mb-5">
                                <a download href="files/RESUME.pdf" className="p-2 rounded shadow-2xl bg-red-500 hover:bg-red-700 text-sm tracking-wider font-semibold text-white transition-all ease-in duration-300">
                                    DOWNLOAD RESUME
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card additionalClass="p-4">
                    {/* <!-- Technology --> */}
                    <SubCard id="technologies">
                        <div className="text-center">
                            <HeadTitle title="Technologies and Tools" />
                            <ul className="flex flex-col md:flex-row justify-center">
                                <div className="flex">
                                    <li className='w-90'>
                                        <img
                                            className=" h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/bootstrap.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className='w-90'>
                                        <img
                                            className="h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/dapper.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/fast_report.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/git.png"
                                            alt=""
                                        />
                                    </li>

                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/github.png"
                                            alt=""
                                        />
                                    </li>
                                </div>
                                <div className="flex">
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/javascript.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/mysql.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/net_core.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/pinia.svg"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/trello.png"
                                            alt=""
                                        />
                                    </li>
                                </div>

                                <div className="flex">
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/typescript.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech1/vue.png"
                                            alt=""
                                        />
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <SubHeadTitle title="Familiar with" />

                            <ul className="flex flex-col md:flex-row justify-center">
                                <div className="flex">
                                    <li>
                                        <img
                                            data-tooltip-target="tooltip-animation"
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech2/laravel.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech2/tailwind.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech2/react.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                            src="images/tech2/firebase.png"
                                            alt=""
                                        />
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <SubHeadTitle title="Target to learn" />
                            <ul className="flex justify-center">
                                <li>
                                    <img
                                        className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                        src="images/tech3/go.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                        src="images/tech3/angular.png"
                                        alt=""
                                    />
                                </li>
                                <li>
                                    <img
                                        className="w-auto h-10 rounded-lg mx-4 my-3 opacity-50 hover:opacity-100 transition-all ease-in-out duration-300"
                                        src="images/tech3/mongodb.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>
                    </SubCard>
                    {/* <!-- end Technology --> */}

                    {/* <!-- Work Experience --> */}

                    <SubCard>
                        <HeadTitle title="Work Experience" />

                        <div className="grid ml-10 text-gray-700">
                            <div className="mt-5 mb-5">
                                <h4 className="text-lg font-semibold">
                                    Full-Stack Web Developer (Full-time)
                                </h4>
                                <span className="font-semibold">
                                    2020-Present
                                </span>
                                <div>
                                    Agusan del Sur State College of Agriculture
                                    and Technology
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Role:{' '}
                                    </span>
                                    <span>Lead Developer</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Duties and Responsibilities
                                    </span>
                                    <p className="ml-10">
                                        Develop College web applications,
                                        maintain, and continuos engagement with
                                        the end-user for maintenance and system
                                        enhancement.
                                    </p>
                                </div>
                            </div>

                            <hr />
                            <div className="mt-5 mb-5">
                                <h4 className="text-lg font-semibold">
                                    Front-end Developer (Part-time)
                                </h4>
                                <span className="font-semibold">
                                    Feb. 2022 - July 2022
                                </span>
                                <div>ZEA Informatique Inc.</div>
                                <div>
                                    <span className="font-semibold">
                                        Role:{' '}
                                    </span>
                                    <span>Front-end Developer</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Duties and Responsibilities
                                    </span>
                                    <p className="ml-10">
                                        Develop Front-end using Vue.js, Vuetify
                                        with Firebase Backend
                                    </p>
                                </div>
                            </div>

                            <hr />
                            <div className="mt-5 mb-5">
                                <h4 className="text-lg font-semibold">
                                    IT-Specialist (Full-time)
                                </h4>
                                <span className="font-semibold">218-2020</span>
                                <div>Bayugan City Doctors Hospital</div>
                                <div>
                                    <span className="font-semibold">
                                        Role:{' '}
                                    </span>
                                    <span>IT Specialist</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Duties and Responsibilities
                                    </span>
                                    <p className="ml-10">
                                        System Administration, Software,
                                        Hardware, and Network Troubleshooting,
                                        Graphic Designing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SubCard>

                    {/* <!-- End Work Experience --> */}
                    <div id="contacts">
                        <div className="grid p-4 mt-4">
                            <HeadTitle title="Contact Details" />
                            <div className="grid justify-center">
                                <div className="text-gray-800">
                                    Email:
                                    <a
                                        type="button"
                                        className="underline hover:underline-offset-1 hover:text-white"
                                        href="mailto:bachanichaelizer@gmail.com"
                                        target="_blank"
                                    >
                                        bachanichaelizer@gmail.com
                                    </a>
                                </div>
                                <div className="text-gray-800">
                                    Mobile Number:
                                    <span className="hover:text-white hover:cursor-pointer">
                                        +63 94 5592 3183
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default App;
