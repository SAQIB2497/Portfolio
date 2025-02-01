import mypic from "../../public/my_pic.jpg";
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Updated import
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div id="home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl">Welcome In My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-green-500 font-semibold text-3xl md:text-4xl whitespace-nowrap"
              strings={["SAQIB", "Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className="text-sm md:text-md text-justify">
            I am a passionate developer mastering the MERN stack. With a
            background in Physics, I transitioned to web development, quickly
            building expertise in scalable, responsive web apps. Currently honing
            skills in React, Node.js, MongoDB, and Express. Excited to contribute
            to meaningful projects and grow in the tech world.
          </p>
          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-4">
              <h1 className="font-bold text-center mt-5">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-125 hover:text-teal-400" /> {/* Updated icon */}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 hover:text-teal-400" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl cursor-pointer hover:scale-125 hover:text-teal-400" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl cursor-pointer hover:scale-125 hover:text-teal-400" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center mt-5">Currently working on</h1>
              <div className="flex space-x-5">
                <div className="group">
                  <SiMongodb className="text-2xl md:text-3xl group-hover:scale-110 group-hover:text-teal-400 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
                <div className="group">
                  <SiExpress className="text-2xl md:text-3xl group-hover:scale-110 group-hover:text-teal-400 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
                <div className="group">
                  <FaReact className="text-2xl md:text-3xl group-hover:scale-110 group-hover:text-teal-400 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
                <div className="group">
                  <FaNodeJs className="text-2xl md:text-3xl group-hover:scale-110 group-hover:text-teal-400 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-10 mt-6 order-1">
          <img
            src={mypic}
            className="rounded-full md:w-[450px] md:h-[450px]"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;