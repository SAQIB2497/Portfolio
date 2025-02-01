import React from "react";

function About() {
  return (
    <div id="about" name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div>
        <h1 className="text-3xl text-green-500 font-bold mb-5">About Me</h1>
        <p>
          Hello! I'm Saqib, a passionate Web Developer with a keen interest in mastering the MERN stack. After completing my degree in Physics, I transitioned into web development, where I’ve built a solid foundation in creating scalable, responsive, and user-friendly applications. I'm currently focused on enhancing my expertise in React, Node.js, MongoDB, and Express while continuously learning new technologies to stay at the cutting edge.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
          Bachelor's in Physics, Comsats University Islamabad, 2024 <br />
          Web Development (MERN Stack), Self-taught, Ongoing <br />
          {/* Various Online Courses, [Platform], [Year] */}
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          Proficient in JavaScript, React, Node.js, MongoDB, Express <br />
          Experienced with HTML, CSS, Tailwind CSS, Bootstrap <br />
          Strong understanding of responsive design and web performance <br />
          Excellent problem-solving skills, teamwork, and communication
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Professional Experience</h1>
        <span>
          MERN Stack Developer (Freelance), Ongoing <br />
          - Building full-stack applications, focusing on user experience and scalable backends <br />
          - Working with the MERN stack (MongoDB, Express, React, Node.js) to deliver responsive web applications <br />
          Web Development Intern, [Company], [Year] <br />
          - Assisted in building a responsive web app using React and Node.js
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Achievements & Awards</h1>
        <span>
          - Completed a full-stack bookstore website using the MERN stack, 2025 <br />
          - Regularly share learning updates and projects on LinkedIn to engage with the developer community
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          My mission is to leverage my skills to create impactful web applications that solve real-world problems. I am committed to continuously growing as a developer, staying up-to-date with the latest trends in web technologies, and contributing to meaningful projects. I aim to create scalable solutions while providing value to users and clients alike.
        </p>
      </div>
    </div>
  );
}

export default About;
