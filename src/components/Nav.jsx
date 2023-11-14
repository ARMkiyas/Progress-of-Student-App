
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {

  const loc = useLocation();


  const navmobilenavtoggle = useRef();


  return (
    <header className={loc.pathname !== "/" ? "relative w-full h-20 " : ""}>
      <input id="navtogglemobile" className="hidden peer" type="checkbox" ref={navmobilenavtoggle} />
      <nav className="absolute z-10 w-full shadow-2xl h-fit backdrop-blur cusnavbar shadow-gray-600/5 peer-checked:cusnavbar-active dark:shadow-none " >
        <div className="px-6 m-auto xl:container md:px-12 lg:px-6 ">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link
                className="relative z-10 no-underline "
                to="/"
                aria-label="logo"
              >
                <div className="text-4xl text-teal-500 no-underline ">
                  pos
                </div>
              </Link>

              <label
                htmlFor="navtogglemobile"
                className="relative z-20 block p-6 -mr-6 cursor-pointer hamburger lg:hidden"

              >

                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 peer-checked:transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                ></div>
              </label>
            </div>
            <div className="flex-wrap items-center justify-end hidden w-full p-6 mb-16 space-y-8 overflow-hidden shadow-2xl navmenu rounded-3xl shadow-gray-300/20 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none">
              <div className="cusnavitem">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:text-sm lg:flex lg:space-y-0" onClick={(e) => {

                  navmobilenavtoggle.current.checked = false;

                }}>
                  <li >
                    <Link
                      to="/"
                      className={`block transition  md:px-4 hover:text-teal-600 dark:hover:text-teal-300 ${loc.pathname === "/" ? "text-teal-500 dark:text-teal-300" : "text-neutral-400 dark:text-secondary"} `}

                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>

                    <Link
                      to="generate"
                      className={`block transition  md:px-4 hover:text-teal-600 dark:hover:text-teal-300 ${loc.pathname === "/generate" ? "text-teal-500 dark:text-teal-300" : "text-neutral-400 dark:text-secondary"} `}
                    >
                      <span>Generate</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      className={`block transition  md:px-4 hover:text-teal-600 dark:hover:text-teal-300 ${loc.pathname === "/about" ? "text-teal-500 dark:text-teal-300" : "text-neutral-400 dark:text-secondary"} `}
                    >
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      className={`block transition  md:px-4 hover:text-teal-600 dark:hover:text-teal-300 ${loc.pathname === "/contact" ? "text-teal-500 dark:text-teal-300" : "text-neutral-400 dark:text-secondary"} `}
                    >
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
