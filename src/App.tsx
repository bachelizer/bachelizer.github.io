import "./App.css";

function App() {
  return (
    <div className="h-auto bg-white font-courierPrime pattern">
      <div className="px-3 pt-5 pb-5 gap-4 absolute top-0 left-0 w-full h-auto flex flex-col items-center justify-start">
        <div className="lg:w-[50%] md:w-[80%] gap-4 w-full h-auto flex flex-col items-start justify-start">
          {/* info */}
          <div className="bg-white border-1 w-full h-auto flex justify-start rounded-md overflow-hidden shadow-sm">
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
            <div className="bg-white border-1 col-span-1 md:col-span-4 rounded-md overflow-hidden shadow-sm p-4">
              <p className="text-base/6">About</p>
              <p className="text-base/6 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                eum, in labore at totam fugit veritatis explicabo, repellat vel
                quisquam quia, praesentium tempore numquam ut cupiditate facilis
                iste aperiam architecto.
              </p>
              <p className="text-base/6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nulla cupiditate voluptatibus adipisci quaerat,
                necessitatibus delectus dolores. Porro, hic aliquid explicabo
                iusto voluptates dicta, blanditiis saepe sed nam, rem deserunt.
              </p>
            </div>

            {/* experience */}
            <div className="bg-white border-1 col-span-1 md:col-span-2 md:row-span-3 rounded-md overflow-hidden shadow-sm p-4 order-2 md:order-none">
              <p className="text-base/6">Experience</p>
              <p className="text-base/6 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nulla cupiditate voluptatibus adipisci quaerat,
                necessitatibus delectus dolores. Porro, hic aliquid explicabo
                iusto voluptates dicta, blanditiis saepe sed nam, rem deserunt.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
                debitis vero magni architecto repellendus possimus. Sit labore
                iusto dolorum reiciendis voluptatem quibusdam delectus expedita
                cum, inventore numquam quos, magnam officia.
              </p>
            </div>

            {/* tech stack */}
            <div className="bg-white border-1 col-span-1 md:col-span-4 md:row-span-2 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none">
              <p className="text-base/6">Tech stack</p>
              <p className="text-base/6 mt-4">
                This will appear below Experience on small screens.
              </p>
            </div>

            {/* Recent Projects */}
            <div className="bg-white border-1 col-span-1 md:col-span-6 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none">
              <p className="text-base/6">Projects</p>
              <p className="text-base/6 mt-4">
                This will appear below Experience on small screens.
              </p>
            </div>

            {/* Skills stack */}
            <div className="bg-white border-1 col-span-1 md:col-span-3 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none">
              <p className="text-base/6">Skills</p>
              <p className="text-base/6 mt-4">
                This will appear below Experience on small screens.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white border-1 col-span-1 md:col-span-3 rounded-md overflow-hidden shadow-sm p-4 order-3 md:order-none">
              <p className="text-base/6">Contact</p>
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
