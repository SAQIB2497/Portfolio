import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-700" />
      <footer className="py-16 text-gray-100">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/SAQI2497/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-teal-400 transition-transform transition-colors duration-300"
                aria-label="Visit my Facebook profile"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/saqib_rehman_warsi_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-teal-400 transition-transform transition-colors duration-300"
                aria-label="Visit my Instagram profile"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/saqib-ur-rehman-1827522ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-teal-400 transition-transform transition-colors duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Saqib Ur Rehman. All Rights Reserved.
              </p>
              <p className="text-sm">
                Creating impactful and scalable web solutions with passion.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
