import "./App.css";

function App() {
  return (
    <div className="h-auto bg-white font-courierPrime pattern">
      <div className="px-3 pt-5 pb-5 gap-4 absolute top-0 left-0 w-full h-auto flex flex-col items-center justify-start">
        <div className="lg:w-[50%] md:w-[80%] gap-4 w-full h-auto flex flex-col items-start justify-start">
          {/* info */}
          <div className="bg-white border-1 w-full h-auto flex justify-start rounded-md overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
            <div className="w-40 h-40">
              <img
                className="w-full h-full mx-auto mt-0 shadow-xl
                            "
                src="images/my_picture.jpg"
                alt="profile_image"
              />
            </div>

            <div className="md:p-5 p-3">
              <p className="font-bold md:text-2xl text-xl">
                Elizer Jr. A. Bachanicha
              </p>
              <p className="text-base">Bayugan City Agusan del Sur</p>
              <p className="text-base">Full Stack Developer</p>
              <ul className="text-base inline-flex">
                <li>Constact</li>
                <li>Email</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-6 gap-4 h-auto">
            {/* about */}
            <div className="bg-white border-1 col-span-1 md:col-span-4 rounded-md overflow-hidden shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">About</p>
              <p className="text-base/6 mt-4">
                I'm a full-stack web developer specializing in developing
                solutions with JavaScript, .Net Core, and PHP. I work on
                projects including building modern web applications. Solving
                legacy code and transforming it into modern, maintainable
                solutions.
              </p>
              <p className="text-base/6 mt-4">
                Lately, I'm into refreshing my knowledge and skills in web
                development. Exploring on solving problems and building projects
                with Angular, Vue, and React. I'm also interested in learning
                more about cloud computing and DevOps practices to enhance my
                development workflow.
              </p>
            </div>

            {/* experience */}
            <div className="bg-white border-1 col-span-1 md:col-span-2 md:row-span-3 rounded-md overflow-hidden shadow-sm p-4 order-2 md:order-none hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">Experience</p>

              <p className="text-base/6 mt-4 exp">
                <span className="block">Computer Programmer</span>
                <em>2020-present</em>
                <p>Full-Stack Web Development</p>
                <p></p>
              </p>

              <p className="text-base/6 mt-4 exp">
                <span className="block">IT Spealist</span>
                <em>2018-2020</em>
                <p>System Administration</p>
              </p>

              <p className="text-base/6 mt-4 exp">
                <span className="block">I.T Degree</span>
                <em>2014-2018</em>
              </p>
            </div>

            {/* Stack */}
            <div className="bg-white border-1 col-span-1 md:col-span-4 md:row-span-2 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">Stack</p>
              <span>Frontend</span>
              <p className="text-base/6 flex flex-wrap">
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Angular
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Vue
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  React
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Bootstrap
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Tailwind
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Pinia
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Vuex
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  NgRx
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Vuetify
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Angular Material
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Typescript
                </span>
              </p>
              <span>Backend</span>
              <p className="text-base/6 flex flex-wrap">
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  .Net Core
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Laravel
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Codeigniter
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  FastReport
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Jasper Report
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  MySql
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Postgres
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  MongoDb
                </span>
                <span className="mx-4 my-2 bg-gray-200 px-[8px] py-[4px] rounded-md cursor-pointer hover:bg-gray-300">
                  Google Workspace
                </span>
              </p>
            </div>

            {/* Recent Projects */}
            <div className="bg-white border-1 col-span-1 md:col-span-6 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">Recent Projects</p>
              <div className="flex flex-wrap gap-2">
                <div className="p-4 shadow-md w-64 hover:-translate-y-1 transition-all duration-500 ease-in-out rounded-md">
                  <h4 className="mb-2 font-bold">Enrollment System</h4>
                  <span className="bg-gray-300 px-2 py-2 mt-2">
                    <a href="https://main.asscat.edu.ph" target="_blank">
                      main.asscat.edu.ph
                    </a>
                  </span>
                </div>

                <div className="p-4 shadow-md w-64 hover:-translate-y-1 transition-all duration-500 ease-in-out rounded-md">
                  <h4 className="mb-2 font-bold">Evaluation System</h4>
                  <span className="bg-gray-300 px-2 py-2 mt-2">
                    <a href="https://fes-main.asscat.edu.ph" target="_blank">
                      fes-main.asscat.edu.ph
                    </a>
                  </span>
                </div>

                <div className="p-4 shadow-md w-64 hover:-translate-y-1 transition-all duration-500 ease-in-out rounded-md">
                  <h4 className="mb-2 font-bold">Registrar's System</h4>
                  <span className="bg-gray-300 px-2 py-2 mt-2">
                    <a href="https://registrar.asscat.edu.ph" target="_blank">
                      registrar.asscat.edu.ph
                    </a>
                  </span>
                </div>

                <div className="p-4 shadow-md w-auto hover:-translate-y-1 transition-all duration-500 ease-in-out rounded-md">
                  <h4 className="mb-2 font-bold">Cashiering System</h4>
                  <span className="bg-gray-300 px-2 py-2 mt-2">
                    <a
                      href="https://cashier-main.asscat.edu.ph"
                      target="_blank"
                    >
                      cashier-main.asscat.edu.ph
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Skills stack */}
            <div className="bg-white border-1 col-span-1 md:col-span-3 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">Skills</p>
              <p className="text-base/6 mt-4">
                This will appear below Experience on small screens.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white border-1 col-span-1 md:col-span-3 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none hover:shadow-md hover:-translate-y-1 transition-all duration-500 ease-in-out">
              <p className="text-base/6 font-bold">Contact</p>
              <p className="text-base/6 mt-4">
                This will appear below Experience on small screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
