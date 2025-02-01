import MERN from "../../public/MERN logo.jpeg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: MERN,
      name: "MERN Stack E-store",
      description: "Responsive Bookstore Website built using the MERN stack! ",
      link: "https://www.linkedin.com/posts/saqib-ur-rehman-1827522ba_mernstack-fullstackdevelopment-webdevelopment-activity-7288628163683745793-gPAn?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <div
      id="projects"
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl text-green-500 font-bold mb-5 text-center">
          Projects
        </h1>
        <span className="underline font-semibold text-green-300 text-lg text-center block mb-6">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          {cardItem.map(({ id, logo, name, description, link }) => (
            <div
              className="border-[1px] border-gray-400 rounded-lg shadow-xl p-6 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl"
              key={id}
            >
              <div className="flex justify-center mb-5">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] rounded-full border-4 border-gray-300 transition-all duration-300 transform hover:scale-105"
                  alt={`${name} logo`}
                />
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-[#dadada] mb-3">
                  {name}
                </div>
                <p className="text-[#dadada] text-sm">{description}</p>
              </div>
              <div className="mt-5 flex justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
